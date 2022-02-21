// import React from "react";
// import { useSelector } from "react-redux";
// import { Redirect, Route, withRouter } from "react-router-dom";
// // import { useAuth } from "../../context";
// // import { auth } from "../../firebase";

// function PrivateRoute({ component: Component, ...rest }) {
//   // const { currentUser } = useAuth();
//   const isSignIn = useSelector((state) => state.userLogin);
//   const { loading } = isSignIn;
//   console.log(loading);
//   // console.log(currentUser);

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return loading ? <Component {...props} /> : <Redirect to="/Login" />;
//       }}
//     ></Route>
//   );
// }

// export default withRouter(PrivateRoute);
