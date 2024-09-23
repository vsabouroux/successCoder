import React from "react";
import { FlatList, StyleSheet, Text,TouchableOpacity,View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import globalStyles from "../styles/globalStyles";
import EmptyMessage from "../components/EmptyMessage";
import CoursesInCart from "../components/CoursesInCart";
import {removeCourseCart} from "../redux/actions/actionRemoveCourseCart"
import { addPayment } from "../redux/actions/actionPayment";


const Cart =(props)=>{

    const dispatch = useDispatch();
    const cartCourses=useSelector(state => state.cart.cartCourses);
    const total = useSelector(state => state.cart.total);

    console.log("Contenu de cartCourses :", cartCourses);
    const handlePayment=(cartCourses, total) => {
        dispatch(addPayment(cartCourses, total));
        alert("Paiement effectué");
    }

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
                        key={item.idCourse}
                        title={item.title}
                        price={item.price ?? 0}
                        onDelete ={()=> {
                            console.log("ID envoyé à removeCourseCart :", item.idCourse); 
                            dispatch(removeCourseCart(item.idCourse))}}
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
                        onPress={()=> handlePayment(cartCourses, total)}>
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
        marginTop:19,
        
    },
    totalText:{
        fontSize:19,
        fontWeight:"bold",

    },
    totalPrice:{
        color:globalStyles.green,
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