import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../assets/Colors';

export default function CardCart() {
  const [quantity, setQuantity] = useState(1);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageCard}
          source={require('../assets/images/macbook-pro.png')}
        />
      </View>

      <View style={styles.rightCard}>
        <View style={styles.headerRightCard}>
          <Text style={styles.name}>Macbook pro</Text>
          <Icon name="close" color="#dcdde1" size={30} />
        </View>
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>{quantity * 12000000} Ar</Text>
        </View>
        <View style={styles.containerCounter}>
          <TouchableOpacity
            onPress={handleDecreaseQuantity}
            style={styles.quantityBtnWrapper}>
            <Text style={styles.quantityBtn}>-</Text>
          </TouchableOpacity>
          <Text style={{color: Colors.primary, fontSize: 25}}>{quantity}</Text>
          <TouchableOpacity
            onPress={handleIncreaseQuantity}
            style={styles.quantityBtnWrapper}>
            <Text style={styles.quantityBtn}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    gap: 10,
  },
  imageContainer: {
    backgroundColor: '#dcdde1',
    padding: 10,
    borderRadius: 20,
    width: '34%',
  },
  imageCard: {
    width: 100,
    height: 100,
  },
  rightCard: {
    width: '66%',
    marginTop: 10,
  },
  headerRightCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: '#000',
    fontSize: 18,
  },
  priceWrapper: {
    borderWidth: 2,
    borderColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  price: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
  },
  containerCounter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 5,
  },
  quantityBtnWrapper: {
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityBtn: {
    color: Colors.primary,
    fontSize: 25,
    width: 30,
    height: 30,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#dcdde1',
    borderRadius: 10,
  },
});
