import * as types from "./actionTypes"


//get all products
export const getAllProducts = () => (dispatch:any) => {
    dispatch({ type: types.GET_PRODUCT_REQUEST });
    return fetch("https://wayfair.p.rapidapi.com/products/list",{
        method:"GET",
        headers:{
            'x-rapidapi-key': "32d304660emshc1720f286d2b8d1p180eebjsn949a65b649bd",
            'x-rapidapi-host':'wayfair.p.rapidapi.com'
        }
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        dispatch({type:types.GET_PRODUCT_SUCCESS,payload:res})
    }).catch((err)=>{
        dispatch({type:types.GET_PRODUCT_FAILURE})
    })
  };


  //search products

  export const handleSearch=(keyword:String)=>(dispatch:any)=>{
    dispatch({type:types.SEARCH_PRODUCT_REQUEST});
    return fetch(`https://wayfair.p.rapidapi.com/products/search?keyword=${keyword}%20shaded%20room&sortby=0&curpage=1&itemsperpage=48`)
    .then((res)=>{
        return res.json()
    }).then((res)=>{
        dispatch({type:types.SEARCH_PRODUCT_SUCCESS,payload:res})
    }).catch((err)=>{
        dispatch({type:types.SEARCH_PRODUCT_FAILURE})
    })
  }

