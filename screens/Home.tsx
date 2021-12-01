import * as React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { servidor } from '../config/Path';
import { styles } from '../css/Styles';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Atualizar from './Atualizar';

const Strack = createNativeStackNavigator();
let rs = "";
export default function Home({route}){
    const {dados} = route.params;
    rs = dados[2];
    return(
        <NavigationContainer independent={true}>
        <Strack.Navigator>
            <Strack.Screen name="TelaHome" component={TelaHome}/>
            <Strack.Screen name="Atualizar" component={Atualizar}/>
        </Strack.Navigator>
        </NavigationContainer>
    )
}

function TelaHome({navigation}){

console.log(`Dados na Home ->${rs}`);

const [lstClientes,setLstClientes] = React.useState([]);


React.useEffect(()=>{
    fetch(`${servidor}`,{
        method:'GET',
        headers:{
            accept:'application/json',
            'content-type':'application/json',
            token: rs,
        }
    })
    .then((response)=>response.json())
    .then((result)=>{
        console.log(result);
        setLstClientes(result.output);
    })
    .catch((erro)=>console.error(`Erro ao ler a api -> ${erro}`))
},[])

    return(
        <View style={styles.container}>


        <ScrollView horizontal={false} style={styles.scroll}>



           <Image source={{uri:"https://images.unsplash.com/photo-1551836022-aadb801c60ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}} style={styles.imgcliente}/>
           <View>
           {
               lstClientes.map((item,index)=>(
                   <View style={styles.cliente} key={index}>
                   <Text style={styles.nome}>Nome:  {item.nome}</Text>
                   <Text style={styles.cpf}>CPF:  {item.cpf}</Text>
                   <Text style={styles.email}>E-Mail:  {item.email}</Text>
                   <Text style={styles.usuario}>Usuário:  {item.usuario}</Text>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Atualizar",{cliente:item , token:rs});

                    }}>
                   <AntDesign name="edit" size={24} color="black" />
                    </TouchableOpacity>
                   </View>



               ))
            }
           </View>
           </ScrollView>
        </View>
    )
}