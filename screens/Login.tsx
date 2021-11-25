import * as React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../css/Styles';
import { servidor } from '../config/path';
export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <Image source={require("../assets/icon.png")} style={styles.imglogo}/>
            <View style={styles.controles}>
                <TextInput placeholder="Usuário" style={styles.input}/>
                <TextInput placeholder="Senha" secureTextEntry style={styles.input}/>
                <TouchableOpacity style={styles.btnlogar} onPress={()=>{
                    navigation.navigate("Home");
                }}>
                    <Text style={styles.txtbtnlogar}>Logar</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.btncadastrar} onPress={()=>{
                navigation.navigate("Cadastro")
            }}>
                    <Text style={styles.txtbtncadastrar}>Cadastrar</Text>
                </TouchableOpacity>
        </View>
    )
}