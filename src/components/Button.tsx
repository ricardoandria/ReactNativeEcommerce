import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../assets/Colors';

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
