import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import Titulo from '../components/Titulo';
import Botao from '../components/Botao';

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
          <Titulo titulo="Gerador de senha"/>
          <View style={styles.containerImagem}>
            <Image source={require("./assets/icone-senha2.png")}
            style={styles.imagem}/>
          </View>
          <Text style={styles.senha}>{senha}</Text>
            <Botao texto="Gerar" funcao={gerarSenha}/>
            <Botao texto="Copiar" funcao={copiarSenha}/>
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
    }
  });