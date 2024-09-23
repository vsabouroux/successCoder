//Ce reducer s'occupe de la gestion du PANIER
// import PaidCourse from"../../data/paidCourseModel";
import { ADD_TO_CART, REMOVE_COURSE_CART, ADD_PAYMENT } from "../constants";

const intitialState = {
    cartCourses : [], //ce tableau comprendra {idCourse, price, title}
    total : 0
}

const reducerCart = (state = intitialState,action)=>{
    switch (action.type){
        case ADD_TO_CART : 
        const course = action.course;
        const idCourse = course.id;
        const price= course.price;
        const title = course.title;

    //    const newCourse = new PaidCourse(idCourse, price, title);
        // const newCourse = (idCourse, price, title); pb de syntaxe () c'est une fonction et pas un objet !!!
        // const newCourse = { id: idCourse, price: price, title: title };
        console.log("Cours ajouté :", course);
        const newCourse = {idCourse, price, title}
        console.log("Cours ajouté au panier:", newCourse);
       return {
        ...state,
        cartCourses:state.cartCourses.concat(newCourse),
        total : state.total + price
       }

       case REMOVE_COURSE_CART :

      const indexResult= state.cartCourses.findIndex(course => course.idCourse === action.prodId);
      const newCartCoursesArray = [...state.cartCourses];
      newCartCoursesArray.splice(indexResult, 1);

      const coursePrice = state.cartCourses[indexResult].price;

    return {
        ...state,
        cartCourses : newCartCoursesArray,
        total : state.total - coursePrice
    }

        case ADD_PAYMENT :
            return intitialState;

        default :
            return state;
    }
}
export default reducerCart;