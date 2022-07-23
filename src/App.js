import React from "react";
import './App.css';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Header from './Component/Header/Header';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions";
import { useEffect, lazy, Suspense } from 'react';
import { auth } from "./utils/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "./Component/Loading/Loading";
import Footer from "./Component/Footer/Footer";

const Payment = lazy(() => import("./Pages/Payment/Payment"));
const Orders = lazy(() => import("./Pages/Orders/Orders"));
const Checkout = lazy(() => import("./Pages/Checkout/Checkout"));
const Favourite = lazy(() => import("./Pages/Favourite/Favourite"));
const SingleProduct = lazy(() => import("./Pages/SingleProduct/SingleProduct"));
const Home = lazy(() => import("./Pages/Home/Home"));

const promise = loadStripe(
  "pk_test_51KHtKsBjkNffp2XPdeeVUaZz1dh71vt6NmxohelOVPCkAFV48SLAuJfUh2uRXtbBUx8eWIB919LJa3mdoaTPKevY00JLkqoAuD"
);

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setTimeout(() => {
          dispatch(setUser(authUser));
        }, 50);
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/favourite">
              <Header />
              <Favourite/>
            </Route>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/product/:id">
              <Header />
              <SingleProduct />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">

              <Home />
              <Footer />
            </Route>
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
