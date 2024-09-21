import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import CourseItem from '../components/CourseItem';
import { addToCart } from '../redux/actions/actionAddToCart';

const Landing =({navigation}) => {

  const dispacth = useDispatch();
  const handleAddToCart = (course) => {
    dispacth(addToCart(course));
    alert("Formation ajoutée au panier");
  }

  const existingCourses= useSelector(state => state.courses.existingCourses);
  const coursesToDisplay = existingCourses.filter(course=> course.selected ===false);

  if (coursesToDisplay.length){
    
    return (
      <FlatList
      data={coursesToDisplay}
      renderItem={({item})=> (
        <CourseItem
        image={item.image}
        title={item.title}
        price={item.price}
        viewDetails={() =>navigation.navigate("Détails", {
          courseId:item.id,
          title:item.title
        })}
        onAddToCart={() => handleAddToCart(item)}
      
        />
      )}  
      />
    )
}}

const styles = StyleSheet.create({})

export default Landing