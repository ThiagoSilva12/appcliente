import * as React from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { servidor } from '../config/Path';
import { styles } from '../css/Styles';

let nome ="";
let email="";
let cpf ="";
let usuario="";
let senha="";




export default function Cadastro(){

//Vamos criar o estado inicial das caixas do formulário
const [nomeCliente, setNomeCliente] = React.useState("");
const [emailCliente ,setEmailCliente] = React.useState("");
const [cpfCliente, setCPFCliente] = React.useState("");
const [usuarioCliente , setUsuarioClinete] = React.useState("");
const [senhaCliente, setSenhaCliente] = React.useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.titulos}>Cadastro Cliente</Text>
            <View style={styles.controles}>
            <TextInput 
            placeholder="Nome do Cliente" 
            style={styles.input}
            onChangeText={(value)=>setNomeCliente(value)}
            value={nomeCliente}
            />
        
    

            <TextInput
             placeholder="E-mail" 
            keyboardType="email-address" 
            style={styles.input}
            value={emailCliente}
            onChangeText={(value)=>setEmailCliente(value)}
            />

            <TextInput 
            placeholder="CPF" 
            keyboardType="number-pad"
             style={styles.input}
             value={cpfCliente}
             onChangeText={(value)=>setCPFCliente(value)}
             />


            <TextInput
             placeholder="Usuário"
              style={styles.input}
              value={usuarioCliente}
              onChangeText={(value)=>setUsuarioClinete(value)}
              />


            <TextInput 
            placeholder="Senha"
             secureTextEntry style={styles.input}
             value={senhaCliente}
             onChangeText={(value)=>setSenhaCliente(value)}
             />


<TouchableOpacity style={styles.btnlogar} onPress={()=>{

nome = nomeCliente;
email = emailCliente;
cpf = cpfCliente;
usuario = usuarioCliente;
senha = senhaCliente;

    efetuarCadastro();

setNomeCliente("");
setEmailCliente("");
setCPFCliente("");
setUsuarioClinete("");
setSenhaCliente("");

    }}>
<Text style={styles.txtbtncadastrar}>Cadastrar</Text>
</TouchableOpacity>
            </View>
        </View>
    );
}



function efetuarCadastro(){

//Faremos um fetch ,ou seja, uma busca de dados
//por url em javascript
fetch(`${servidor}/cadastro`,{
    method:"POST",  
    headers:{
        accept:"application/json",
        "content-type":"application/json",
    },
    body:JSON.stringify({
        nome:nome,
        email:email,
        cpf:cpf,
        usuario:usuario,
        senha:senha
    })
}).then((response)=>response.json())
.then((resultado)=>{
    Alert.alert("Aviso", resultado.output);
    // console.log(resultado);
})
.catch((erro)=>console.error(`Erro ao executar->${erro}`));


}