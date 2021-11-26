import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
imglogo:{
    width:100,
    height:100,
    resizeMode:'cover'
},
controles:{
width:'80%',
padding:10,
margin:20,
shadowColor:'black',
shadowOffset:{width:10, height:10},
shadowOpacity:1,
shadowRadius:10,
elevation:2,
backgroundColor:'white'
},
input:{
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
    padding:1,
    marginBottom:10,
    fontSize: 15,
},
btnlogar:{
    padding:30,
},
txtbtnlogar:{
    textAlign:'center',
    color:'red'
},
btncadastrar:{
    //position:"absolute",
    //bottom:100,
    backgroundColor:'#000',
    padding: 10,
    borderRadius:50,

},
txtbtncadastrar :{
    fontSize:20,
    fontWeight:"bold",
    color:'red',
    textTransform:"uppercase",
    textAlign:"center"
},
titulos:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center"
},









})