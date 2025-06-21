import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {Product} from '../redux/home/homeType';
import Icon from 'react-native-vector-icons/MaterialIcons';

type ProductProps = {
  product: Product;
};

export default function ProductItem({product}: ProductProps) {
  return (
    <View style={[styles.card, styles.elevaterCard]}>
      <Image style={styles.Image} source={{uri: product.thumbnail}} />
      <View style={styles.productDetailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.productName}>{product.title}</Text>
          <Text style={styles.brandName}>{`By ${product.brand}`}</Text>
        </View>

        <View style={styles.spacer} />

        <View style={styles.cartContainer}>
          <View style={styles.priceAndWarrantyContainer}>
            <Text style={styles.priceText}>{`$ ${product.price}`}</Text>
            <Text style={styles.warrantyText} numberOfLines={2}>
              {product.warrantyInformation}
            </Text>
          </View>

          <View style={styles.flexGrow} />

          <TouchableOpacity>
            <Icon name="shopping-cart" size={25} color="#4A4A4A" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 6,
    padding: 10,
    gap: 8,
    borderRadius: 10,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  elevaterCard: {
    shadowColor: '#4A4A4A',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Image: {
    height: 120,
    width: 100,
    resizeMode: 'contain',
  },
  productDetailContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 5,
  },
  titleContainer: {
    gap: 5,
  },
  spacer: {
    flex: 1,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceAndWarrantyContainer: {
    flexDirection: 'column',
    gap: 2,
  },
  flexGrow: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
  },
  brandName: {
    fontSize: 14,
    fontWeight: '500',
  },
  priceText: {
    fontSize: 15,
    fontWeight: '700',
  },
  warrantyText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
