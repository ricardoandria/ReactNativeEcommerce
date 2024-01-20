import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function Card({onPress}: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{marginTop: 20, maxWidth: 170}}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.productImg}
            source={require('../assets/images/macbook-pro.png')}
          />
        </View>

        <View>
          <View style={styles.details}>
            <Text style={styles.name}>MacBook pro 2018</Text>
            <View style={styles.stars}>
              <Image
                style={styles.starImg}
                source={require('../assets/images/star.png')}
              />
              <Text style={{color: 'grey'}}>4.9</Text>
            </View>
          </View>
          <Text style={styles.price}>12.000.000 Ar</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    backgroundColor: '#dcdde1',
    width: 170,
    height: 170,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  productImg: {
    width: 150,
    height: 150,
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  name: {
    fontSize: 15,
    color: 'grey',
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  starImg: {
    width: 15,
    height: 15,
  },
  price: {
    color: 'grey',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
