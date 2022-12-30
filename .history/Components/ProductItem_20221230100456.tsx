import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
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
      {/* <Image style={styles.image1} source={{uri: item.image}} /> */}
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
    </>
  );
};

export default ProductItem;