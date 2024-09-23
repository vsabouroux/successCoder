import COURSES from "../../data/testData";
import { ADD_TO_CART, REMOVE_COURSE_CART } from "../constants";

const initialState = {
    existingCourses : COURSES
}

//Comment accéder aux courses ? via "reducer" qui est une fonction
const reducerCourses =(state = initialState, action)=> {

    switch (action.type) {
      case ADD_TO_CART:
        const indexCourseToModify = state.existingCourses.findIndex(
          (course) => course.id === action.course.id
        );
            // Vérifiez que le cours existe
            if (indexCourseToModify === -1) {
                console.warn(`Cours avec id ${action.course.id} introuvable.`);
                return state; // Retournez l'état actuel si le cours n'existe pas
            }

            // Créer une nouvelle copie de l'existant
            const updatedCourse = {
                ...state.existingCourses[indexCourseToModify],
                selected: true, // Marquer comme sélectionné
            };

            // Créer une nouvelle copie du tableau avec le cours modifié
            const updatedCourses = [
                ...state.existingCourses.slice(0, indexCourseToModify),
                updatedCourse,
                ...state.existingCourses.slice(indexCourseToModify + 1),
            ];

            return {
                ...state,
                existingCourses: updatedCourses,
            };

        case REMOVE_COURSE_CART:
            console.log("ID reçu dans REMOVE_COURSE_CART:", action.prodId);
            const indexCourseToDeleteFromCart = state.existingCourses.findIndex(
                (course) => course.id === action.prodId
            );

            // Vérifiez que le cours existe
            if (indexCourseToDeleteFromCart === -1) {
                console.warn(`Formation avec id ${action.prodId} introuvable dans existingCourses.`);
                return state; // Retournez l'état actuel si l'ID n'est pas trouvé
            }

            // Créer une nouvelle copie du tableau et de l'objet
            const copyExistingCoursesRemoved = [...state.existingCourses];
            const courseToUpdate = {
                ...copyExistingCoursesRemoved[indexCourseToDeleteFromCart],
                selected: false, // Marquer comme non sélectionné
            };

            copyExistingCoursesRemoved[indexCourseToDeleteFromCart] = courseToUpdate;

        // const copyExistingCourses =[...state.existingCourses];
        // copyExistingCourses[indexCourseToModify].selected = true;
        // Attention ! En Redux, l'état doit rester immuable : on ne doit jamais modifier directement l'état d'origine.

        //Avec le code commenté ci-dessous on  copie le tableau existingCourses, mais les objets à l'intérieur
        //de ce tableau ne sont pas eux-mêmes copiés. Cela signifie que l'on modifie directement un objet dans l'état, ce qui entraîne une erreur.

        // Créer une copie du cours à modifier
        // const updatedCourse = {
        //   ...state.existingCourses[indexCourseToModify],
        //   selected: true,
        // };

        // // Créer une nouvelle copie du tableau de cours avec le cours modifié
        // const updatedCourses = [
        //   ...state.existingCourses.slice(0, indexCourseToModify),
        //   updatedCourse,
        //   ...state.existingCourses.slice(indexCourseToModify + 1),
        // ];

        // // Retourner un nouvel état avec les cours mis à jour
        // return {
        //   ...state,
        //   existingCourses: copyExistingCourses,
        // };



    //   case REMOVE_COURSE_CART:
    //     console.log("ID reçu dans REMOVE_COURSE_CART:", action.prodId);
    //     const indexCourseToDeleteFromCart = state.existingCourses.findIndex(
    //         (course) => course.id === action.prodId
    //       );
    //       const copyExistingCoursesRemoved = [...state.existingCourses];
    //       copyExistingCoursesRemoved[indexCourseToDeleteFromCart].selected = false;
       
        // Si aucun cours avec cet ID n'est trouvé, retournez l'état actuel sans modification
    // if (indexCourseToDeleteFromCart === -1) {
    //     console.warn(`Formation avec id ${action.prodId} introuvable dans existingCourses.`);
    //     return state;  // Ne pas modifier l'état si l'ID n'est pas trouvé
    // } 
       

        // Retourner un nouvel état avec les cours mis à jour
        return {
          ...state,
          existingCourses: copyExistingCoursesRemoved
        };

      default:
        return state;
    }

}
export default reducerCourses;