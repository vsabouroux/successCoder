import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const CourseItem = (props) => {
  return (
    <TouchableHighlight
      underlayColor={globalStyles.green}
      onPress={props.viewDetails}
    >
      <View style={styles.courseContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: props.image }} style={styles.image} />
        </View>
        <View style={styles.courseContainerDetails}>
          <Text style={styles.courseTitle}>{props.title}</Text>
          <Text style={styles.coursePrice}>{props.price.toFixed(2)} €</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={props.viewDetails}>
            <AntDesign name="eye" size={35} color={globalStyles.green} />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onAddToCart}>
            <FontAwesome6
              name="basket-shopping"
              size={30}
              color={globalStyles.green}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    height: 300,
    margin: 25,
    borderColor: globalStyles.lightGrey,
    borderWidth: 1,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow:"hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  courseContainerDetails: {
    alignItems: "center",
    height: "20%",
    padding: 5,
  },
  courseTitle: {
    fontSize: 16,
    marginVertical: 1,
    color: globalStyles.green,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  coursePrice: {
    color: globalStyles.darkGrey,
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    paddingHorizontal: 30,
  },
});

export default CourseItem;
