import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UpdateAction } from "../../redux/actions/userAuthAction";
import Avatar from "../../assets/Avatar.png";
export default function UpdateUSer({ user }) {
  const dispatch = useDispatch();

  const initialFieldValues = {
    fullName: "",
    email: "",
    // password: "",
  };

  const [values, setValues] = useState(initialFieldValues);
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    dispatch(UpdateAction(values));
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-14 w-auto" src={Avatar} />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Edit Profile
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method=""
            onSubmit={onSubmitForm}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="py-2">
                <label htmlFor="email-address" className="sr-only">
                  FullName
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  defaultValue={user && user?.displayName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="py-2">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  defaultValue={user && user?.email}
                  onChange={handleInputChange}
                />
              </div>
              {/* <div className="py-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={handleInputChange}
                />
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
