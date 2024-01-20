import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';

export default function ProfileScreen() {
  return (
    <View style={{height: '100%', backgroundColor: '#E17256'}}>
      <View style={styles.headerProfile}>
        <View style={styles.head}>
          <Text style={styles.titleProfile}>Profile</Text>
          <Icon
            name="account-edit-outline"
            size={25}
            style={styles.editIcon}
            color={Colors.primary}
          />
        </View>
        <View style={styles.userDetails}>
          <Image
            source={{
              uri: 'https://i.etsystatic.com/36168122/r/il/f65422/4863673861/il_570xN.4863673861_k9fo.jpg',
            }}
            style={styles.profileImg}
          />
          <View style={styles.userDetail}>
            <AntDesign name="user" size={15} />
            <Text style={styles.username}>Andriamahandry Ricardo</Text>
          </View>
          <View style={styles.userDetail}>
            <AntDesign name="mail" size={15} />
            <Text style={styles.userEmail}>ricardo@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomProfile}>
        <TouchableOpacity style={styles.bPItems}>
          <View style={styles.leftBp}>
            <Image
              style={styles.iconLeftBP}
              source={require('../assets/images/commande.png')}
            />
            <Text style={styles.bPTitle}>Mes commandes</Text>
          </View>
          <AntDesign name="right" size={15} color="black" />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.bPItems}>
          <View style={styles.leftBp}>
            <Image
              style={styles.iconLeftBP}
              source={require('../assets/images/password.png')}
            />
            <Text style={styles.bPTitle}>Changer de mot de passe</Text>
          </View>
          <AntDesign name="right" size={15} color="black" />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.bPItems}>
          <View style={styles.leftBp}>
            <Image
              style={styles.iconLeftBP}
              source={require('../assets/images/settings.png')}
            />
            <Text style={styles.bPTitle}>Parametre</Text>
          </View>
          <AntDesign name="right" size={15} color="black" />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity style={styles.bPItems}>
          <View style={styles.leftBp}>
            <Image
              style={styles.iconLeftBP}
              source={require('../assets/images/logout.png')}
            />
            <Text style={styles.bPTitle}>Se deconnecter</Text>
          </View>
          <AntDesign name="right" size={15} color="black" />
        </TouchableOpacity>
        <Divider />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerProfile: {
    width: '100%',
    height: '40%',
    padding: 15,
    display: 'flex',
    gap: 20,
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  userDetail: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  editIcon: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
  },
  titleProfile: {
    fontSize: 20,
  },
  userDetails: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  username: {
    fontSize: 15,
    color: '#fff',
  },
  userEmail: {
    fontSize: 15,
    color: '#fff',
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
    objectFit: 'cover',
    borderWidth: 2,
    borderColor: '#fff',
  },
  bottomProfile: {
    backgroundColor: 'white',
    height: '60%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 40,
  },
  bPItems: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  bPTitle: {
    color: '#000',
    fontSize: 15,
  },
  leftBp: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  iconLeftBP: {
    width: 20,
    height: 20,
  },
});
