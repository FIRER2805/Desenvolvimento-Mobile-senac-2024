import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function GeradorSenha(){
    const [senha, setSenha] = useState("");

    function gerarSenha(){
      const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$&_-";
      const tamanhoSenha = 20;
      let senhaGerada = "";
      for(let i = 0; i < tamanhoSenha; i++){
          let numeroSorteado = Math.floor(Math.random() * caracteres.length);
          let caractereSorteado = caracteres.charAt(numeroSorteado);
          senhaGerada = senhaGerada.concat(caractereSorteado);
      }
      setSenha(senhaGerada);
    }
  
    async function copiarSenha(){
      if(senha != ""){
        await Clipboard.setStringAsync(senha);
      }
    }

    return (
        <View style={styles.container}>
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Gerador de senha</Text>
          <View style={styles.containerImagem}>
            <Image source={require("./assets/icone-senha2.png")}
            style={styles.imagem}/>
          </View>
          <Text style={styles.senha}>{senha}</Text>
          <View style={styles.botoes}>
          <Pressable onPress={gerarSenha}>
            <Text style={styles.botao}>Gerar</Text>
          </Pressable>
          <Pressable onPress={copiarSenha}>
            <Text style={styles.botao}>Copiar</Text>
          </Pressable>
          </View>
        </View>
      <StatusBar style="auto"/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    conteudo: {
      borderColor: "rgba(100, 208, 232, 0.8)",
      backgroundColor: "rgba(255,255,255,0.2)",
      width: "80%"
    },
    titulo: {
      color: "cornflowerblue",
      fontSize: 33,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center"
    },
    containerImagem: {
      alignItems: "center",
      marginBottom: 20
    },
    imagem: {
      width: 200,
      height: 200,
    },
    senha: {
      textAlign: "center",
      color: "white",
      fontSize: 17,
      marginBottom: 5,
      backgroundColor: "skyblue",
      width: "100%",
      paddingVertical: 5,
      borderRadius: 5
    },
    botao: {
      textAlign: "center",
      marginBottom: 5,
      color: "white",
      backgroundColor: "midnightblue",
      fontSize: 20,
      paddingVertical: 4,
      borderRadius: 5,
    }
  });