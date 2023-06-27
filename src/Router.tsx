/* eslint-disable prettier/prettier */
import React from "react";
import {NavigationContainer} from "@react-navigation/native"; 
import {createStackNavigator} from "@react-navigation/stack";
import Products from "./pages/Products/Products";
import ProductsDetail from "./pages/ProductsDetail/ProductsDetail";

const stack = createStackNavigator();

const Router = ()=>
{

  return(

    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Products" component={Products} options={{ title: 'Ürünler' }}  />
        <stack.Screen name="ProductDetail" component={ProductsDetail} options={{ title: 'Ürün Detayı' }} />
      </stack.Navigator>

    </NavigationContainer>
   
  );

};

export default Router;