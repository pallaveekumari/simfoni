// import * as types from "./actionTypes"


// //get all products
// export const getAllProducts = () => (dispatch:any) => {
//     dispatch({ type: types.GET_PRODUCT_REQUEST });
//     return fetch("https://wayfair.p.rapidapi.com/products/list",{
//         method:"GET",
//         headers:{
//             'x-rapidapi-key': "32d304660emshc1720f286d2b8d1p180eebjsn949a65b649bd",
//             'x-rapidapi-host':'wayfair.p.rapidapi.com'
//         }
//     }).then((res)=>{
//         return res.json()
//     }).then((res)=>{
//         dispatch({type:types.GET_PRODUCT_SUCCESS,payload:res})
//     }).catch((err)=>{
//         dispatch({type:types.GET_PRODUCT_FAILURE})
//     })
//   };


//   //search products

//   export const handleSearch=(keyword:String)=>(dispatch:any)=>{
//     dispatch({type:types.SEARCH_PRODUCT_REQUEST});
//     return fetch(`https://wayfair.p.rapidapi.com/products/search?keyword=${keyword}%20shaded%20room&sortby=0&curpage=1&itemsperpage=48`)
//     .then((res)=>{
//         return res.json()
//     }).then((res)=>{
//         dispatch({type:types.SEARCH_PRODUCT_SUCCESS,payload:res})
//     }).catch((err)=>{
//         dispatch({type:types.SEARCH_PRODUCT_FAILURE})
//     })
//   }


import * as types from "./actionTypes";


//get all products
export const getAllProducts = () => (dispatch: any) => {
 dispatch({ type: types.GET_PRODUCT_REQUEST });
 return fetch("https://wayfair.p.rapidapi.com/products/list", {
   method: "GET",
   headers: {
     "x-rapidapi-key": "b7261dda36mshc113f0362c75f3fp1146f7jsn78506f23647f",
     "x-rapidapi-host": "wayfair.p.rapidapi.com",
   },
 })
   .then((res) => {
     return res.json();
   })
   .then((res) => {
     dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.response.data.category.browse.products });
   })
   .catch((err) => {
     dispatch({ type: types.GET_PRODUCT_FAILURE });
   });
};


export const searchProducts = (keyword: any) => async (dispatch: any) => {
 dispatch({ type: types.SEARCH_PRODUCT_REQUEST });
 try {
   const response = await fetch(
     `https://wayfair.p.rapidapi.com/products/search?keyword=${keyword}&sortby=0&curpage=1&itemsperpage=48`,
     {
       method: "GET",
       headers: {
         "X-RapidAPI-Key":
           "b7261dda36mshc113f0362c75f3fp1146f7jsn78506f23647f",
         "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
       },
     }
   );
   if (response.status == 200) {
     const data = await response.json();
     dispatch({
       type: types.SEARCH_PRODUCT_SUCCESS,
       payload: data.response.product_collection,
     });
   }
 } catch (err) {
   dispatch({ type: types.SEARCH_PRODUCT_FAILURE });
 }
};


export const handleGetProductDetailsData =
 (sku: any) => async (dispatch: any) => {
   dispatch({ type: types.GET_PRODUCT_DETAILS_REQUEST });
   try {
     let res = await fetch(
       `https://wayfair.p.rapidapi.com/products/v2/detail?sku=${sku}`,
       {
         method: "GET",
         headers: {
           "X-RapidAPI-Key":
             "b7261dda36mshc113f0362c75f3fp1146f7jsn78506f23647f",
           "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
         },
       }
     );
     let data = await res.json();
     //   dispatch(push)
     dispatch({ type: types.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    //  console.log("datawa is ", data);
   } catch (err) {
     dispatch({ type: types.GET_PRODUCT_DETAILS_FAILURE });
   }
 };

 export const categoryProducts = () => (dispatch: any) => {
  dispatch({ type: types.GET_CATEGORY_REQUEST });
  return fetch("https://wayfair.p.rapidapi.com/categories/list?caid=214970", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "b7261dda36mshc113f0362c75f3fp1146f7jsn78506f23647f",
      "x-rapidapi-host": "wayfair.p.rapidapi.com",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({ type: types.GET_CATEGORY_SUCCESS, payload: res.response.categoryAppData.departmentCategories});
    })
    .catch((err) => {
      dispatch({ type: types.GET_CATEGORY_FAILURE });
    });
 };



 export const handleFetchSearchData = async (key: any) => {
  const response = await fetch(
    `https://wayfair.p.rapidapi.com/products/search?keyword=${key}&sortby=0&curpage=1&itemsperpage=48`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":
          "b7261dda36mshc113f0362c75f3fp1146f7jsn78506f23647f",
        "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
      },
    }
  );
  if (response.status == 200) {
    const data = await response.json();
    return data.response.product_collection;
  }
 };
 export const handleSortData = (data: any) => (dispatch: any) => {
  dispatch({ type: types.SORT_SEARCHED_DATA, payload: data });
 };
 