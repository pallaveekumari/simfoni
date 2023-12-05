import * as types from "./actionTypes";


const initialdata = {
 getProductsLoading: false,
 getProductsError: false,
 allProducts: [],
 searchLoading: false,
 searchError: false,
 searchedData: [],
 productDetailsData: {},
 productDetailsLoading: false,
 productDetailsError: false,
};


export const reducer = (state = initialdata, action: any) => {
 const { type, payload } = action;


 switch (type) {
   case types.GET_PRODUCT_REQUEST:
     return { ...state, getProductsLoading: true };
   case types.GET_PRODUCT_SUCCESS:
     return { ...state, getProductsLoading: false, allProducts: [...payload] };
   case types.GET_PRODUCT_FAILURE:
     return { ...state, getProductsError: true, getProductsLoading: false };


   case types.SEARCH_PRODUCT_REQUEST:
     return { ...state, searchLoading: true };
   case types.SEARCH_PRODUCT_SUCCESS:
     return { ...state, searchLoading: false, searchedData: [...payload] };
   case types.SEARCH_PRODUCT_FAILURE:
     return { ...state, searcherror: true, searchLoading: false };


   case types.GET_PRODUCT_DETAILS_REQUEST:
     return { ...state, productDetailsLoading: true };
   case types.GET_PRODUCT_DETAILS_SUCCESS:
     return {
       ...state,
       productDetailsLoading: false,
       productDetailsData: [...payload],
     };
   case types.GET_PRODUCT_DETAILS_FAILURE:
     return {
       ...state,
       productDetailsError: true,
       productDetailsLoading: false,
     };
   default:
     return state;
 }
};



