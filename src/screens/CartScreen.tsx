import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button} from '../components/Button';
import {Colors} from '../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardCart from '../components/CardCart';
import {Divider} from 'react-native-paper';

export default function CartScreen({navigation}: any) {
  return (
    <ScrollView
      contentContainerStyle={{
        position: 'relative',
        height: '100%',
      }}>
      <View style={styles.headerWrapper}>
        <View style={styles.imageCartContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
            <Image
              style={styles.imageCart}
              source={require('../assets/images/left-arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.cartTitle}>Mon Panier</Text>
        <TouchableOpacity style={styles.clearWrapper}>
          <Icon name="cart-remove" color="white" size={18} />
          <Text style={styles.clearText}>Vider le panier</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{paddingHorizontal: 15}}>
        <CardCart />
        <Divider />
        <CardCart />
        <Divider />
        <CardCart />
        <Divider />
        <CardCart />
        <Divider />
        <CardCart />
        <Divider />
        <CardCart />
        <Divider />
        <CardCart />
        <Divider />
        <CardCart />
        <Divider />
      </ScrollView>
      <View style={styles.footerContainerCart}>
        <View>
          <View style={styles.bottomContextContainer}>
            <View style={styles.checkoutPrice}>
              <Text style={styles.titlePrice}>SubTotal</Text>
              <Text style={styles.price}>40.000.000 Ariary</Text>
            </View>
            <View style={styles.checkoutPrice}>
              <Text style={styles.titlePrice}>Frais de Livraison</Text>
              <Text style={styles.price}>3000 Ariary</Text>
            </View>
          </View>
          <Divider />
          <View style={{padding: 15}}>
            <Button title="Paiement pour 40.000.000 Ar" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  imageCartContainer: {
    borderWidth: 2,
    borderColor: '#dcdde1',
    borderRadius: 50,
    padding: 5,
  },
  imageCart: {
    width: 20,
    height: 20,
  },
  cartTitle: {
    fontSize: 20,
    color: '#000',
  },
  clearWrapper: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  clearText: {
    fontSize: 15,
    color: '#fff',
  },
  footerContainerCart: {
    width: '100%',
    display: 'flex',
    gap: 10,
    backgroundColor: 'white',
  },
  bottomContextContainer: {
    display: 'flex',
    gap: 10,
    padding: 15,
  },
  checkoutPrice: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titlePrice: {
    color: '#000',
    fontSize: 15,
  },
  price: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
