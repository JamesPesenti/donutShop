import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import ProductItem from '../components/ProductItem';
import { Auth } from "aws-amplify"
import { withAuthenticator } from "aws-amplify-react-native"

import { DataStore } from "@aws-amplify/datastore";
import { Amplify } from '@aws-amplify/core';
import { Product, CartProducts } from '../src/models';

import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);


const MalasadaScreen = ({searchValue}: {searchValue: string}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
    const results = await DataStore.query(Product)
    console.log(results)
  };
  fetchProducts()
}, []);

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
      <Text>Malasada Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
});

export default withAuthenticator(MalasadaScreen, true);