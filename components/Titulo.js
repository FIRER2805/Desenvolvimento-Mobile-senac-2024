import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Titulo({ titulo }) {
  return (
    <Text style={styles.titulo}>{titulo}</Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "cornflowerblue",
    fontSize: 33,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  }
});
