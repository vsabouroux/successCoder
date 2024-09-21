import React from "react";
import { FlatList, StyleSheet, Text,TouchableOpacity,View } from "react-native";
import { useSelector } from "react-redux";
import globalStyles from "../styles/globalStyles";
import EmptyMessage from "../components/EmptyMessage";
import CoursesInCart from "../components/CoursesInCart";


const Cart =(props)=>{
    console.log("Props reçues par CoursesInCart:", props); 
    const cartCourses=useSelector(state => state.cart.cartCourses);
    console.log(cartCourses); 
    const total = useSelector(state => state.cart.total);
    // console.log(cartCourses,total);
    
    return(
        <View style={styles.cartContainer}>
          {
            cartCourses.length > 0 ? (
                <View>
                    <FlatList
                    data={cartCourses}
                    // keyExtractor={item => item.id}
                    keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} 
                    renderItem={({item})=> (
                        <CoursesInCart
                        key={item.id}
                        title={item.title}
                        price={item.price ?? 0}
                        onDelete ={()=> alert("effacer la formation")}
                        />
                    )}
                    />
                    <View style = {styles.totalContainer}>
                        <Text style = {styles.totalText}>
                        Total :
                        <Text style = {styles.totalPrice}>
                          {/* {total.toFixed(2)} € */}
                          {(total !== undefined && total !== null ? total.toFixed(2) : "0.00")} €
                        </Text>  
                        </Text>
                        <TouchableOpacity 
                        onPress={()=> alert("Payer")}>
                        <View style = {styles.btnAddPayment}>
                            <Text  style = {styles.btnAddPaymentText}>Payer</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
            )
            :
            (
                <EmptyMessage text="Panier vide"/>
            )}
        </View>
    );
};

const styles=StyleSheet.create({
    cartContainer:{
    margin:20,
    },
    totalContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:19
    },
    totalText:{
        fontSize:19,
        fontWeight:"bold",
      
    },
    totalPrice:{
        color:globalStyles.green
    },
    btnAddPayment:{
        borderRadius:6,
        paddingHorizontal:25,
        paddingVertical:9,
        backgroundColor:globalStyles.orange
    },
    btnAddPaymentText:{
        fontSize:19
    }
})

export default Cart