import React from 'react';
import {Image, View, Text, ScrollView, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../assets/styles';

interface ProductItemProps {
  item: {
    item: {
    id: string;
    flavor: string;
    image: string;
    avgRating: number;
    price: number;
    oldPrice?: number;
    }
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  const navigation = useNavigation();

//   const onPress = () => {
//     navigation.navigate('MalasadaScreen', {id: item.id});
//   };
  return (
   <>
   <ScrollView>
      <Image style={{width: 200, height: 200, resizeMode: "contain"}} source={{uri: ("https://t4.ftcdn.net/jpg/01/75/11/73/240_F_175117385_Vtiy6p99vOD5P0aeFVi5TeIYmC96qaWC.jpg")}} />
      <View style={{flex: 1, padding: 10, backgroundColor: "black",}}>
        <Text numberOfLines={3}>
          {item.flavor}
        </Text>
       
          <Text>{item.ratings}</Text>
    
        <Text>
          from ${item.price.toFixed(2)}
          {item.oldPrice && (
            <Text> ${item.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
      </View>
      </ScrollView>
    </>
  );
};

export default ProductItem;