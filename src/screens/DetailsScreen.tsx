import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Button} from '../components/Button';
import {Colors} from '../assets/Colors';

const Color = ['grey', 'black'];

export default function DetailsScreen({navigation}: any) {
  const [isFavoris, setisFavoris] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isColorSelected, setIsColorSelected] = useState('grey');
  const onPressFavoris = () => {
    setisFavoris(!isFavoris);
  };
  const onPressLiked = () => {
    setIsLiked(!isLiked);
  };
  const onPressColor = (color: string) => {
    setIsColorSelected(color);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.ImageDetailsWrapper}>
        <View style={styles.headerContent}>
          <View style={styles.iconHeaderWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TabNavigator')}>
              <Image
                style={styles.arrowLeft}
                source={require('../assets/images/left-arrow.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <View style={styles.iconHeaderWrapper}>
              {isFavoris ? (
                <TouchableOpacity onPress={onPressFavoris}>
                  <Image
                    style={styles.heart}
                    source={require('../assets/images/heart.png')}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onPressFavoris}>
                  <Image
                    style={styles.heart}
                    source={require('../assets/images/heart-black.png')}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.cartContainer}>
              <Image
                source={require('../assets/images/shopping-bag.png')}
                style={styles.cartImage}
              />
              <Text style={styles.cartCount}>3</Text>
            </View>
          </View>
        </View>
        <Image
          style={styles.ImageDetails}
          source={require('../assets/images/macbook-pro.png')}
        />
      </View>
      <View style={styles.nameWrapper}>
        <Text style={styles.detailsName}>Macbook pro 2017</Text>
        <Text style={styles.enSolde}>% en soldes</Text>
      </View>
      <View style={styles.reviewContainer}>
        <TouchableOpacity>
          <View style={styles.stars}>
            <Image
              style={styles.starImg}
              source={require('../assets/images/star.png')}
            />
            <Text style={{color: 'grey'}}>4.9</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLiked}>
          <View style={styles.stars}>
            {isLiked ? (
              <Image
                style={styles.starImg}
                source={require('../assets/images/like.png')}
              />
            ) : (
              <Image
                style={styles.starImg}
                source={require('../assets/images/like-black.png')}
              />
            )}

            <Text style={{color: 'grey'}}>40 personnes aime</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        dolor culpa blanditiis unde distinctio velit excepturi sint repellat at
        debitis.
      </Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsProduct}>Macbook Pro (15- inch 2017)</Text>
        <Text style={styles.detailsProduct}>
          Processor 2.8 GHz Quad-Core Intel Core i7
        </Text>
        <Text style={styles.detailsProduct}>Memoire 16 GB 2133 Mhz LPDDR3</Text>
        <Text style={styles.detailsProduct}>Startup Disk Macintock HD</Text>
        <Text style={styles.detailsProduct}>Radeon Pro 555 2 GB</Text>
        <Text style={styles.detailsProduct}>Serial Number X01X1XX010XX</Text>
      </View>
      <View style={styles.colorWrapper}>
        {Color.map((color, index) => (
          <View
            key={index}
            style={
              isColorSelected === color
                ? {
                    borderWidth: 2,
                    borderColor: '#ff7979',
                    padding: 2,
                    borderRadius: 50,
                  }
                : null
            }>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: color,
                  width: 25,
                  height: 25,
                  borderRadius: 50,
                },
              ]}
              onPress={() => onPressColor(color)}></TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.price}>12.000.000 Ar</Text>
        <Button title="Ajouter au Panier" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
  },
  ImageDetailsWrapper: {
    backgroundColor: '#dcdde1',

    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageDetails: {
    width: 300,
    height: 300,
  },
  nameWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginTop: 10,
  },
  detailsName: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  enSolde: {
    backgroundColor: '#ff7979',
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 20,
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 20,
  },
  iconHeaderWrapper: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 50,
  },
  arrowLeft: {
    width: 20,
    height: 20,
  },
  heart: {
    width: 20,
    height: 20,
  },
  reviewContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    borderWidth: 2,
    borderColor: '#dcdde1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  starImg: {
    width: 15,
    height: 15,
  },
  desc: {
    paddingHorizontal: 20,
    marginTop: 10,
    color: '#000',
    fontSize: 15,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  detailsProduct: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  colorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  bottomContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 45,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20,
  },
  price: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  cartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    width: 35,
    height: 35,
    position: 'relative',
    marginRight: 5,
    marginTop: 5,
  },
  cartImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  cartCount: {
    position: 'absolute',
    color: 'white',
    top: -5,
    right: -5,
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    textAlign: 'center',
  },
});
