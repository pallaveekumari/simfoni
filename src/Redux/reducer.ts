import * as types from "./actionTypes";

const initialdata = {
  getProductsLoading: false,
  getProductsError: false,
 allProducts:[]
};

export const reducer = (state = initialdata, action:any) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCT_REQUEST:
        return { ...state, getProductsLoading: true };
        case types.GET_PRODUCT_SUCCESS:
            return{...state,getProductsLoading:false ,allProducts:[payload]};
            case types.GET_PRODUCT_FAILURE:
                return {...state,getProductsError:true,getProductsLoading:false}
    default:
      return state;
  }
};
