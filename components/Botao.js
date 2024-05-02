import React from "react";
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Botao({ texto, funcao }){
    return(
        <Pressable onPress={funcao}>
            <Text style={styles.botao}>{texto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao: {
        textAlign: "center",
        marginBottom: 5,
        color: "white",
        backgroundColor: "midnightblue",
        fontSize: 20,
        paddingVertical: 4,
        borderRadius: 5,
      }
})