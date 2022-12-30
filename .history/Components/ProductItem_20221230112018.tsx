import React from 'react';
import {Image, View, Text, Pressable, Dimensions} from 'react-native';
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

  const height = Dimensions.get("window").height
  const width = Dimensions.get("window").width

//   const onPress = () => {
//     navigation.navigate('MalasadaScreen', {id: item.id});
//   };
  return (
   <>
      <View 
        style={{ 
            flex: 1,
            flexDirection: "row",
            borderWidth: 1,
            borderColor: '#d1d1d1',
            borderRadius: 10,
            backgroundColor: '#fff',
            marginVertical: 5,}}>
    <View style={{flex: 2, flexDirection: 'column'}}>
      <Image 
        style={{flex: 3, width: width, height: height, resizeMode: 'contain'}} 
        source={{uri: item.image.toString() }} 
      />
      <View style={{flex: 1}}>
        <Text numberOfLines={3}>{item.flavor}</Text>
        <Text>{item.ratings}</Text>
      </View>
        <Text>
          from ${item.price.toFixed(2)}
          {item.oldPrice && (
            <Text> ${item.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
      </View>
    </View>
    </>
  );
};

export default ProductItem;