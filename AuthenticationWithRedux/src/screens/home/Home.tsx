import {View, Pressable, FlatList} from 'react-native';
import React from 'react';
import styles from '../home/styles/homeStyles';

import {SafeAreaView} from 'react-native-safe-area-context';

import ProductItem from '../../components/ProductItem';
import { PRODUCTS_LIST } from '../../constants/HomeDummyData';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={PRODUCTS_LIST}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Pressable>
                <ProductItem product={item} />
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
