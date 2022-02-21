import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screen/auth/Login";
import Signup from "./screen/auth/Signup";
import UpdateUser from "./screen/auth/updateUser";
import CartScreen from "./screen/cartScreen";
import Dashboard from "./screen/dashboard";
import Detail from "./screen/detail";
import Home from "./screen/home";
// import { AuthProvider } from "./context";
// import PrivateRoute from "./screen/auth/private";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  let User;
  User = localStorage.getItem("UserInfo");
  // const [firebaseUser, setFirebaseUser] = useState(User);
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     // console.log(user);
  //     if (user) {
  //       setFirebaseUser(true);
  //     } else {
  //       setFirebaseUser(null);
  //     }
  //   });
  // }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>
      {/* <AuthProvider> */}

      <Router>
        <Home cart={cartItems.length} user={User} />
        {!User && (
          <Switch>
            <Route exact={false} path="/login">
              <Login />
            </Route>
            <Route exact={false} path="/signUp">
              <Signup />
            </Route>
          </Switch>
        )}
        <Switch>
          <Route exact={false} path="/updateUser">
            <UpdateUser user={User} />
          </Route>
          <Route exact={true} path="/">
            <Dashboard />
          </Route>
          <Route exact={false} path="/detail">
            <Detail onAdd={onAdd} user={User} />
          </Route>
          <Route exact={false} path={"/cartScreen"}>
            <CartScreen
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          </Route>
        </Switch>
      </Router>

      {/* </AuthProvider> */}
    </>
  );
};
export default App;
