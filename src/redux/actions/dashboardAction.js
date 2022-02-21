import axios from "axios";
import {
  DASHBOARD_PRODUCTS_REQUEST,
  DASHBOARD_PRODUCTS_SUCCESS,
  DASHBOARD_PRODUCTS_FAIL,
} from "../constants/dashboardConstants";
const url = "https://fakestoreapi.com/";
export const dashboardAction = () => async (dispatch) => {
  try {
    dispatch({
      type: DASHBOARD_PRODUCTS_REQUEST,
    });

    const { data } = await axios.get(`${url}products`);
    dispatch({
      type: DASHBOARD_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DASHBOARD_PRODUCTS_FAIL,
      payload: error,
    });
    console.log(error);
  }
};
