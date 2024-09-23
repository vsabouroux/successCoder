import {ADD_PAYMENT} from "../constants";
// import PaymentModel from "../../data/paymentModel";
import moment from "moment";

const intitialState ={
    payments: []
}

const reducerPayment = (state = intitialState, action) => {
    switch (action.type) {
        case ADD_PAYMENT :
        //{id, courses, total, date}
        // const newPayment = new PaymentModel(
        //     Date.now().toString(),
        //     action.orderInfos.courses,
        //     action.orderInfos.total,
        //     moment (new Date()).format("DD MM YYYY hh:mm"));
        
 // Créer un objet de paiement comme un objet littéral (au lieu de la classe PaymentModel)
        const newPayment = {
            id: Date.now().toString(),
            courses: action.orderInfos.courses, // Liste des cours
            total: action.orderInfos.total,    // Total
            date: moment(new Date()).format("DD MM YYYY hh:mm") // Date formatée
        };
        return {
            ...state,
            payments: state.payments.concat(newPayment)
        };
        default :
        return state;
    }
}
export default reducerPayment