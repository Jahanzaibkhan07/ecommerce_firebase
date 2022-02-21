import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../constants/usersAuthConstant";
import { auth } from "../../firebase";

export const signUpAction = (values) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { user } = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );
    user.updateProfile({
      displayName: values.fullName,
    });

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: user,
    });
    localStorage.setItem("UserInfo", JSON.stringify(user));

    // await db.collection("users").add({
    //   fullName: values.fullName,
    //   email: values.email,
    //   password: values.password,
    // });
    document.location.href = "/";
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error });
    console.log(error);
  }
};

export const logInAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { user } = await auth.signInWithEmailAndPassword(email, password);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
    localStorage.setItem("UserInfo", JSON.stringify(user));
    document.location.href = "/";
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

export const logOutAction = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });
    await auth.signOut();

    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
    localStorage.removeItem("UserInfo");
    document.location.href = "/";
  } catch (error) {
    dispatch({ type: USER_LOGOUT_FAIL, payload: error });
    console.log(error);
  }
};

export const UpdateAction = (values) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    const { user } = await auth.updateCurrentUser(values.email);

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error });
    console.log(error);
  }
};
