import { configureStore  } from '@reduxjs/toolkit';
import reducerCourses from './reducers/reducerCourses';
import reducerCart from"./reducers/reducerCart";
import reducerPayment from "./reducers/reducerPayment";

const store= configureStore ({
    reducer:{
         courses:reducerCourses,
         cart: reducerCart,
         payments : reducerPayment
    }
})

export default store;