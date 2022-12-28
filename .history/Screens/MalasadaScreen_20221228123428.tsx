import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import ProductItem from '../components/ProductItem';
// import { Auth, DataStore } from "aws-amplify"
// import { Product } from '../../models';


const MalasadaScreen = ({searchValue}: {searchValue: string}) => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     DataStore.query(Product).then(setProducts);
//   }, []);

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      {/* <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      /> */}
      <Text>Malasada Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    justifyContent: "center",
    textAlign: "center"
  },
});

export default MalasadaScreen;