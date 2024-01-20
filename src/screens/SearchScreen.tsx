import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View style={{padding: 15}}>
      <View style={styles.headerSearch}>
        <View style={styles.iconWrapper}>
          <Image
            style={styles.icon}
            source={require('../assets/images/left-arrow.png')}
          />
        </View>
        <Text style={styles.title}>Recherche</Text>
      </View>
      <Searchbar
        placeholder="Recherche"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.search}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  search: {
    backgroundColor: '#dcdde1',
    marginTop: 10,
    borderRadius: 20,
  },
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
});
