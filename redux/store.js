import { configureStore  } from '@reduxjs/toolkit';
import reducerCourses from './reducers/reducerCourses';
import reducerCart from"./reducers/reducerCart";

const store= configureStore ({
    reducer:{
         courses:reducerCourses,
         cart: reducerCart
    }
})

export default store;