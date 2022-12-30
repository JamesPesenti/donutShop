import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import ProductItem from '../components/ProductItem';
import { Auth } from "aws-amplify"
import { withAuthenticator } from "aws-amplify-react-native"

import { DataStore } from "@aws-amplify/datastore";
import { Amplify } from '@aws-amplify/core';
import { Product, CartProducts } from '../src/models';
import awsExports from "../src/aws-exports";
import awsconfig from '../src/aws-exports';

DataStore.configure(awsExports);
Amplify.configure({
    ...awsconfig,
    Analytics: {
      disabled: true,
    },
  });
Auth.configure(awsconfig);



const MalasadaScreen = ({searchValue}: {searchValue: string}) => {
  const [products, setProducts] = useState<Product[]>([
  ]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts)
}, []);

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        horizontal
        data={products}
        renderItem={({item}) => (
            <ProductItem 
                data={products}
                item={item} 
            />
        )}
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

export default MalasadaScreen;