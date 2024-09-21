import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import customHeaderIcon from "../components/customHeaderIcon";
import Landing from "../screens/Landing";
import CourseInfos from "../screens/CourseInfos";
import Cart from "../screens/Cart";
import globalStyles from "../styles/globalStyles";

const CoursesStackNavigator = createStackNavigator();

export const CoursesNavigator=()=> {
  return (
    <CoursesStackNavigator.Navigator
    //pour donner du style au Header
      screenOptions={({navigation}) =>(
        {
        headerStyle:{backgroundColor: globalStyles.green},
        headerTitleStyle:{fontWeight:"bold"},
        headerTintColor:globalStyles.white,
        headerRight:()=>(
          <HeaderButtons HeaderButtonComponent={customHeaderIcon}>
            <Item
            title="Panier"
            iconName="shoppingcart"
            onPress={()=> navigation.navigate("Cart")}
            />
          </HeaderButtons>
        ),
      }
   )}
    >
      <CoursesStackNavigator.Screen name="Landing" component={Landing} />
      <CoursesStackNavigator.Screen 
      name="Détails" 
      component={CourseInfos} 
      options={({route})=> (
        {
          title:route.params.title
        }
  )} />
      <CoursesStackNavigator.Screen name="Cart" component={Cart} />
    </CoursesStackNavigator.Navigator>
  );
}
