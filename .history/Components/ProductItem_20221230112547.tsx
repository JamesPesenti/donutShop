import React from 'react';
import {Image, View, Text, Pressable, ScrollView, Dimensions} from 'react-native';
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
   <ScrollView>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center', marginLeft: 0}}>
        <View style={{borderColor: "white", borderWidth: 1, borderRadius: 10, padding: 0, backgroundColor: "transparent"}}>
        <Image 
            style={{flex: 2, width: width, height: height, resizeMode: 'contain'}} 
            source={{uri: item.image.toString() }} 
        />
            <Text numberOfLines={3}>{item.flavor}</Text>
            <Text style={styles.ratingText}>{item.avgRating} /5</Text>
            <Text style={styles.caloriesText}>{item.calories} Cal</Text>
            {/* conditional check if item is on sale or not */}
            <Text style={styles.itemText}>sale ${item.price.toFixed(2)}! {item.price && (<Text style={{fontSize: 16, textDecorationLine: 'line-through', textDecorationLineColor: "red"}}>$2.99</Text>)}</Text>
        </View>
        {/* <QuantityButtons
          quantity={quantity}
          setQuantity={setQuantity}
        /> */}
    </View>
    </View>
</ScrollView>
    </>
  );
};

export default ProductItem;


