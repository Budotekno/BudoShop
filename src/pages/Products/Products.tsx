/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Text, View ,FlatList,ActivityIndicator, Alert} from "react-native";
import Config from "react-native-config";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

const Products = ()=>
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        try {
            const {data:productData} = await axios.get("https://fakestoreapi.com/products");
            setData(productData);
            setLoading(false);
        } catch (err:any) {
            setError(err.message);
            setLoading(false);
            
        }
    }

    const RenderProducts = ({item}:any)=>(
        <ProductCard props={item} />
    );

    if(loading)
    {
        return <ActivityIndicator size={"large"}/>
    }

    if(error!=null)
    {
        return Alert.alert("Beklenmedik bir hata oluştu. Lütfen tekrardan deneyiniz...")
    }


  return(
    <View>
        
        <FlatList data={data} renderItem={RenderProducts}/>
    </View>
  );

};

export default Products;