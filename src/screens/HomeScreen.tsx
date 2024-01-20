import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../assets/Colors';
import {Searchbar} from 'react-native-paper';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const CategorieList = [
  {
    icon: <Icon name="list" size={20} color="#dcdde1" />,
    name: 'Tous',
  },
  {
    icon: <Icon name="phone-portrait" size={20} color="#dcdde1" />,
    name: 'Telephone',
  },
  {
    icon: <Icon name="laptop" size={20} color="#dcdde1" />,
    name: 'Ordinateur',
  },
  {
    icon: <Icon name="tablet-landscape" size={20} color="#dcdde1" />,
    name: 'Tablette',
  },
  {
    icon: <SimpleLineIcons name="earphones" size={20} color="#dcdde1" />,
    name: 'Ecouteur',
  },
];

export default function Home({navigation}: any) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isActiveCategorie, setIsActiveCategorie] = useState('Tous');

  const handleCategoryPress = (category: string) => {
    setIsActiveCategorie(category);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Découvrir</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={styles.cartContainer}>
          <Image
            source={require('../assets/images/shopping-bag.png')}
            style={styles.cartImage}
          />
          <Text style={styles.cartCount}>3</Text>
        </TouchableOpacity>
      </View>
      <Searchbar
        placeholder="Recherche"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.search}
      />
      <View style={styles.pub}>
        <View style={styles.pubDesc}>
          <Text style={styles.titlePub}>Liquidation générale</Text>
          <Text style={styles.perc}>% Jusqu'à 50%</Text>
        </View>
        <Image
          style={styles.imagePub}
          source={require('../assets/images/iphone15.png')}
        />
      </View>

      <View style={styles.categorie}>
        <Text style={styles.catTitle}>Catégories</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.categorieList}
          showsHorizontalScrollIndicator={false}>
          {CategorieList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={
                isActiveCategorie == item.name
                  ? styles.activeCategorie
                  : styles.categorieName
              }
              onPress={() => handleCategoryPress(item.name)}>
              <View>{item.icon}</View>
              <Text
                style={
                  isActiveCategorie == item.name
                    ? styles.isActiveCatName
                    : styles.catName
                }>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.cardContainer}>
          <Card onPress={() => navigation.navigate('DetailsProduct')} />
          <Card onPress={() => navigation.navigate('DetailsProduct')} />
          <Card onPress={() => navigation.navigate('DetailsProduct')} />
        </ScrollView>
      </View>
      <View style={styles.categorie}>
        <Text style={styles.catTitle}>Populaire</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  cartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#dcdde1',
    borderRadius: 100,
    width: 40,
    height: 40,
    position: 'relative',
    marginRight: 5,
    marginTop: 5,
  },
  cartImage: {
    width: 30,
    height: 30,
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
  search: {
    backgroundColor: '#dcdde1',
    marginTop: 10,
    borderRadius: 20,
  },
  pub: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    maxHeight: 200,
    height: 200,
    marginTop: 30,
  },
  pubDesc: {
    marginTop: 30,
  },
  titlePub: {
    fontSize: 30,
    maxWidth: 200,
    fontWeight: 'bold',
    color: 'white',
  },
  perc: {
    backgroundColor: '#fff',
    color: Colors.primary,
    textAlign: 'center',
    paddingVertical: 5,
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 15,
  },
  imagePub: {
    width: 200,
    height: 260,
    marginTop: -50,
  },
  categorie: {
    marginTop: 20,
  },
  catTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10,
  },
  categorieList: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },
  categorieName: {
    borderWidth: 2,
    borderColor: '#dcdde1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  catName: {
    color: Colors.primary,
  },
  isActiveCatName: {
    color: '#dcdde1',
  },
  activeCategorie: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.primary,
  },
});
