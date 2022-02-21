import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useHistory } from "react-router-dom";
import { logInAction } from "../../redux/actions/userAuthAction";
import logo from "../../assets/images (2).png";
import CardWrapper from "../../components/CardWrapper";
import Modal from "../../components/model/Model";
import { ExclamationIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { Dialog } from "@headlessui/react";
export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isSignIn = useSelector((state) => state.userLogin);
  const { error, success, loading } = isSignIn;
  const initialFieldValues = {
    email: "",
    password: "",
  };
  useEffect(() => {
    if (success) {
      // history.push("/");
      setShow(false);
    } else {
      setShow(true);
    }
  }, [success]);
  const [values, setValues] = useState(initialFieldValues);
  const [show, setShow] = useState(false);
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    dispatch(logInAction(values.email, values.password));
    setValues(initialFieldValues);
  };
  return (
    <CardWrapper>
      {error && (
        <Modal show={show} onClose={() => setShow(false)}>
          <CardWrapper>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <ExclamationIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    {error.message}
                  </Dialog.Title>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => setShow(false)}
              >
                Close
              </button>
            </div>
          </CardWrapper>
        </Modal>
      )}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 px-10 py-14  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div>
            <img className="mx-auto h-14 w-auto" src={logo} />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmitForm}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="py-2">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={values.email}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleInputChange}
                />
              </div>
              <div className="py-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="text-base flex items-center text-indigo-700">
              <Link to="/signUp"> Sign Up ?</Link>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading === false ? false : true}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </CardWrapper>
  );
}
