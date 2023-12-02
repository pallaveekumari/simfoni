import * as types from "./actionTypes"


//get all products
export const getAllProducts = () => (dispatch:any) => {
    dispatch({ type: types.GET_PRODUCT_REQUEST });
    return fetch("https://wayfair.p.rapidapi.com/products/list",{
        method:"GET",
        headers:{
            'x-rapidapi-key': process.env.X_RAPIDAPI_KEY as any,
            'x-rapidapi-host':process.env.X_RAPIDAPI_HOST as any
        }
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        dispatch({type:types.GET_PRODUCT_SUCCESS,payload:res})
    }).catch((err)=>{
        dispatch({type:types.GET_PRODUCT_FAILURE})
    })
  };