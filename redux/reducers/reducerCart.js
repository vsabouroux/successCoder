//Ce reducer s'occupe de la gestion du panier
// import PaidCourse from"../../data/paidCourseModel";
import { ADD_TO_CART } from "../constants";

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
        const newCourse = (idCourse, price, title);
       return {
        ...state,
        cartCourses:state.cartCourses.concat(newCourse),
        total : state.total + price
       }

        default :
            return state;
    }
}
export default reducerCart;