import {
  DASHBOARD_PRODUCTS_REQUEST,
  DASHBOARD_PRODUCTS_SUCCESS,
  DASHBOARD_PRODUCTS_FAIL,
} from "../constants/dashboardConstants";
export const dashboardReducer = (state = {}, action) => {
  switch (action.type) {
    case DASHBOARD_PRODUCTS_REQUEST:
      return { loading: true };
    case DASHBOARD_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case DASHBOARD_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
