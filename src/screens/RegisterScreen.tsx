import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from '../assets/Colors';
import {Button} from '../components/Button';

export default function RegisterScreen({navigation}: any) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    // Faites quelque chose lorsque l'élément obtient le focus
  };
  const handleBlur = () => {
    setIsFocused(false);
    // Faites quelque chose lorsque l'élément perd le focus
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={styles.Title}>Bonjour</Text>
      </View>
      <View>
        <Text style={styles.welcomeText}>Bienvenue</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} value="Nom" />
          <TextInput style={styles.input} value="Prenom" />
          <TextInput style={styles.input} value="Email" />
          <TextInput style={styles.input} value="Mot de passe" />
          <Button
            title="S'inscrire"
            onPress={() => navigation.navigate('Login')}
          />
        </View>

        <View style={styles.btnConnecteContainer}>
          <TouchableOpacity style={styles.btnConnecte}>
            <Image
              source={require('../assets/images/google.png')}
              style={styles.image}
            />
            <Text style={{color: '#FF9843', fontWeight: 'bold', fontSize: 15}}>
              Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnConnecte}>
            <Image
              source={require('../assets/images/facebook.png')}
              style={styles.image}
            />
            <Text style={{color: '#3468C0', fontWeight: 'bold', fontSize: 15}}>
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.QstAccount}>
          <Text style={styles.QstAccount1}>Vous avez deja un compte?</Text>
          <Text
            style={styles.btnRegister}
            onPress={() => navigation.navigate('Login')}>
            Se Connecter
          </Text>
        </View>
      </View>
      <View style={styles.blobWrapper}>
        <Image
          source={require('../assets/images/blob1.png')}
          style={styles.blob1}
        />

        <Image
          source={require('../assets/images/blob2.png')}
          style={styles.blob2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    paddingTop: 30,
  },
  Title: {
    fontSize: 30,
    color: Colors.primary,
  },
  mdpTitle: {
    textAlign: 'center',
    marginTop: 30,
    color: '#FF9843',
    fontSize: 20,
  },
  inputWrapper: {
    display: 'flex',
    gap: 15,
  },
  welcomeText: {
    color: '#353b48',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#dcdde1',
    borderRadius: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: Colors.primary,
  },
  image: {
    width: 20,
    height: 20,
  },
  btnConnecte: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#dcdde1',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 30,
    width: 150,
    borderRadius: 15,
    marginTop: 40,
  },
  btnConnecteContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  QstAccount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    gap: 5,
  },
  QstAccount1: {
    color: '#7D7C7C',
    fontSize: 15,
    fontWeight: 'bold',
  },
  btnRegister: {
    color: '#FF9843',
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  blobWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  blob1: {
    bottom: -50,
    left: -30,
  },
  blob2: {
    bottom: -100,
    right: -35,
  },
});
