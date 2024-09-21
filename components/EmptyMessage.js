import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../styles/globalStyles";

const EmptyMessage = ({text}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        padding:20,
        alignItems:"center"
    },
    text:{
        fontSize: 14,
        color:globalStyles.green
    }
})

export default EmptyMessage