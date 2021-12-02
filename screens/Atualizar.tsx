import * as React from 'react';
import { Alert } from 'react-native';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { servidor } from '../config/Path';
import { styles } from '../css/Styles';
import {AntDesign} from '@expo/vector-icons';

let idcliente = "";
let nome = "";
let email = "";
let rs = "";

export default function Atualizar({route}){
    const {cliente} = route.params;
    const {token} = route.params;
    rs = token;
    console.log (`Tela Atualizar ${cliente.usuario}`);
    console.log (`Token no atualizar ${token}`);

const [nomeCliente,setNomeCliente] = React.useState(cliente.nome);
const [ emailCliente,setEmailCliente] = React.useState(cliente.email);
idcliente= cliente._id;


    return(
        <View style={styles.container}>
            <Text style={styles.titulos}>Atualizar dados</Text>
            <View>
                <TextInput placeholder="Nome do Cliente" style={styles.input}
                value={nomeCliente}
                onChangeText={(value)=>setNomeCliente(value)}
                />
                <TextInput placeholder="E-Mail" keyboardType="email-address" style={styles.input}
                value={emailCliente}
                onChangeText={(value)=>setEmailCliente(value)}
                />
                <TouchableOpacity style={styles.btnlogar} onPress={()=>{
                    nome = nomeCliente;
                    email = emailCliente;

                    efetuarAtualizacao();

                    setNomeCliente('');
                    setEmailCliente('');
                }}>
                    <Text style={styles.btnlogar}>Atualizar os dados</Text>
                </TouchableOpacity>
            </View>

                <TouchableOpacity style={styles.apagar} onPress={()=>{

                    excluirUsuario();
                }}>
                    <AntDesign name="deleteuser" size={24} color="red" />
                    <Text style={styles.txtbtnapagar}>Apagar a conta</Text>
                </TouchableOpacity>


        </View>
    )
}




function efetuarAtualizacao(){

    fetch(`${servidor}/atualizar/${idcliente}`,{
        method:'PUT',
        headers:{
            accept:'application/json',
            'content-type':'application/json',
            'token':rs
        },
        body:JSON.stringify({
            nome:nome,
            email:email
        })
    }).then((response)=>response.json())
    .then((rs)=>{
        Alert.alert("Atualização",rs.output);
    })
    .catch((erro)=>console.error(`Erro ao tentar ler a api->${erro}`))
}

function excluirUsuario(){

let r =false;

    Alert.alert("Atenção","Você realmente deseja apagar esta conta?",[
        {
            text:"Cancelar",
            onPress:()=>{},
        },
        {
            text:"Apagar",
            onPress:()=> {
                fetch(`${servidor}/apagar/${idcliente}`,{
                    method:"DELETE",
                    headers:{
                        accept:"application/json",
                        "content-type":"application/json",
                        "token":rs
                    }    
                    }).then((response)=>response.status)
                    .then((dados)=>{
                        if(dados.toString() == "204"){
                            Alert.alert("Apagado","Conta excluida");
                        }
                        else{
                            Alert.alert("Atenção","Não foi possivel apagar a conta")
                        }
                    }).catch((erro)=>console.error(`Erro ao ler o api ->${erro}`))
            }
        }
    ]);
}