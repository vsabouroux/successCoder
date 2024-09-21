import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import globalStyles from '../styles/globalStyles'
import AntDesign from '@expo/vector-icons/AntDesign';


const CoursesInCart = (props)=> {
 // numberOfLines pour que le texte contienne dans le container prévu
    return (
      <View style = {styles.coursesContainer}>
        <Text numberOfLines={1} style = {styles.courseTitle}>{props.title}</Text> 
        <Text style = {styles.coursePrice}>{props.price.toFixed(2)} €</Text> 
        <TouchableOpacity
            onPress={props.onDelete}
        >
            <AntDesign name="delete" size={24} color={globalStyles.green} />
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    coursesContainer:{
        backgroundColor:globalStyles.white,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        marginBottom:9
    },
    courseTitle:{
        width:"60%",
    },
    coursePrice:{
        textAlign:"right",
        paddingRight:9,
        width:"30%"
    }
})
export default CoursesInCart