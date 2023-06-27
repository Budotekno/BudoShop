/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        borderColor:"#bdbdbd",
        borderWidth:1,
        backgroundColor:'#e0e0e0',
        margin:10,
        flexDirection:'row'

    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain',
        backgroundColor:"white"
    },
    bodyContainer:{
        flex:1,
        padding:5,
        justifyContent:'space-between'

    },
    title:{
        fontWeight:"bold",
        fontSize:18,
        color:'black'
    },
    price:{
        textAlign:"right",
        fontSize:16,
        fontStyle:'italic',

    },

});

export default styles;