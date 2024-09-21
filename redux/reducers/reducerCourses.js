import COURSES from "../../data/testData";
import { ADD_TO_CART } from "../constants";


const initialState = {
    existingCourses : COURSES
}

//Comment accéder aux courses ? via "reducer" qui est une fonction
const reducerCourses =(state = initialState, action)=> {

    switch (action.type) {
        case ADD_TO_CART:
            const indexCourseToModify=state.existingCourses.findIndex(course=> course.id === action.course.id)
            // Attention ! En Redux, l'état doit rester immuable : on ne doit jamais modifier directement l'état d'origine.
           
           //Avec le code commenté ci-dessous on  copie le tableau existingCourses, mais les objets à l'intérieur 
           //de ce tableau ne sont pas eux-mêmes copiés. Cela signifie que l'on modifie directement un objet dans l'état, ce qui entraîne une erreur.

            // const copyExistingCourses =[...state.existingCourses];
            // copyExistingCourses[indexCourseToModify].selected=true;
            // return{
            //     ...state,
            //     existingCourses : copyExistingCourses
            // }
            
            
            // Créer une copie du cours à modifier
            const updatedCourse = {
                ...state.existingCourses[indexCourseToModify],
                selected: true
            };

            // Créer une nouvelle copie du tableau de cours avec le cours modifié
            const updatedCourses = [
                ...state.existingCourses.slice(0, indexCourseToModify),
                updatedCourse,
                ...state.existingCourses.slice(indexCourseToModify + 1)
            ];

            // Retourner un nouvel état avec les cours mis à jour
            return {
                ...state,
                existingCourses: updatedCourses
            };
        default:
            return state;
    }

}
export default reducerCourses;