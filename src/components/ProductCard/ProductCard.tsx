/* eslint-disable prettier/prettier */
import React from "react";
import {  Image, Text, View } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({props}:any)=>
{
  return(
    <View style={styles.container}>

        <Image 
            source={{uri:props.image}}
            style={styles.image}
        />

    <View style={styles.bodyContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>{props.price} ₺</Text>
        
    </View>
        

    </View>
  );

};

export default ProductCard;