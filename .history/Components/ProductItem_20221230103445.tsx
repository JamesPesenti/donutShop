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
      <View style={{ flex: 1,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,}}>
      <Image 
        style={{flex: 2, width: Dimensions.get('window').width,height:Dimensions.get('window').width, resizeMode: 'contain'}} 
        source={{uri: item.image.toString() }} 
      />
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