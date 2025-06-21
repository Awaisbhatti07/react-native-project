import {View, Pressable, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../home/styles/homeStyles';

import {SafeAreaView} from 'react-native-safe-area-context';

import ProductItem from '../../components/ProductItem';
import {getProducts} from '../../api/homeApi/homeApi';
import {setProducts, clearProducts} from '../../redux/home/homeSlice';

import LoaderView from '../../components/LoaderView';

import {getErrorMessage} from '../../utils/errorHandler';
import Snackbar from 'react-native-snackbar';

// redux
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../../redux/store';

// Navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations/type';
import {Text} from 'react-native-paper';

type HomeProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation<HomeProps>();

  // Get Data From Store
  const products = useSelector((state: RootState) => state.home.products);

  const [loading, setLoading] = useState(false);

  // Fetch products from API and save to Redux store
  const callapi = async () => {
    dispatch(clearProducts());
    setLoading(true);

    try {
      const response = await getProducts();
      console.log('Products fetched:', response.products);
      dispatch(setProducts(response.products));
    } catch (error) {
      const errorMessage = `Failed to fetch products: ${getErrorMessage(
        error,
      )}`;
      console.error(errorMessage);
      showSnackbar(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callapi();
  }, []);

  const showSnackbar = (message: string) => {
    Snackbar.show({
      text: message,
      backgroundColor: '#A0AEB8',
      textColor: '#4A4A4A',
      duration: 3000,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Beauty</Text>

        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                navigation.push('HomeDetails', {
                  product: item,
                });
              }}>
              <ProductItem product={item} />
            </Pressable>
          )}
        />
      </View>

      {loading && <LoaderView />}
    </SafeAreaView>
  );
}
