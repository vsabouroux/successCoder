//L'ACTION va permettre d'ajouter des formations dans le panier
import {ADD_TO_CART} from "../constants";

export const addToCart=(course)=>{
    return {
        type: ADD_TO_CART,
        course:course
    }
}

