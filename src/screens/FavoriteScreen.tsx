import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../assets/Colors';

export default function FavoriteScreen() {
  const [quantity, setQuantity] = useState(1);
  const [isFavoris, setisFavoris] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };
  const onPressFavoris = () => {
    setisFavoris(!isFavoris);
  };

  const addToCartHandler = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  return (
    <ScrollView style={{padding: 15}}>
      <View style={styles.headerSearch}>
        <View style={styles.iconWrapper}>
          <Image
            style={styles.icon}
            source={require('../assets/images/left-arrow.png')}
          />
        </View>
        <Text style={styles.title}>Favories</Text>
      </View>
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
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <TouchableOpacity
                style={styles.favoriBtn}
                onPress={addToCartHandler}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/images/shopping-bag.png')}
                />
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={{color: Colors.primary}}>
                      Produit ajouter avec succes
                    </Text>
                    <Image
                      source={require('../assets/images/success.png')}
                      style={{width: 30, height: 30}}
                    />
                  </View>
                </View>
              </Modal>
              <View style={styles.iconHeaderWrapper}>
                {isFavoris ? (
                  <TouchableOpacity onPress={onPressFavoris}>
                    <Image
                      style={styles.heart}
                      source={require('../assets/images/heart-black.png')}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={onPressFavoris}>
                    <Image
                      style={styles.heart}
                      source={require('../assets/images/heart.png')}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{quantity * 12000000} Ar</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  headerSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 110,
  },
  iconWrapper: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#dcdde1',
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    color: '#000',
    fontSize: 20,
  },
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
    width: '62%',
    marginTop: 5,
  },
  headerRightCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
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
  iconHeaderWrapper: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 50,
  },
  heart: {
    width: 20,
    height: 20,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  favoriBtn: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
