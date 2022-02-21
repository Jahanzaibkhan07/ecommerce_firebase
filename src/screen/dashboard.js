import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dashboardAction } from "../redux/actions/dashboardAction";
import CardWrapper from "../components/CardWrapper";

export default function Dashboard(props) {
  const dispatch = useDispatch();
  const isSignIn = useSelector((state) => state.userLogin);
  // console.log(currentUser);
  // const { data } = props;

  const ProductDetail = useSelector((state) => state?.dashboard);
  const data = ProductDetail?.products;
  let newArray = [];
  useEffect(() => {
    dispatch(dashboardAction());
  }, [dispatch]);
  newArray.push(
    data?.map((element) => ({
      ...element,
      discount:
        element.price > 300
          ? "30"
          : element.price > 100 && element.price < 300
          ? "20"
          : "",
    }))
  );
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-2xl mx-auto  sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data &&
              newArray[0]?.map((product, index) => (
                <CardWrapper key={index}>
                  <div className="group relative max-w-md w-full space-y-8 px-8 py-2  ">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={product.image}
                        className="w-full relative h-full  object-center  lg:w-full lg:h-full"
                      />

                      {product.discount !== "" ? (
                        <span className="text-white absolute -mt-6 ml-4">
                          <div className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                            {product.discount}%
                          </div>
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mt-4 flex justify-between ">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link
                            to={{
                              pathname: "/detail",
                              state: { product },
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.title}
                          </Link>
                        </h3>
                      </div>

                      {product.discount !== "" ? (
                        <div className="flex flex-col">
                          <p className="flex flex-col line-through text-sm font-medium text-gray-400">
                            {product.price}$
                          </p>
                          <p className=" text-sm font-medium text-gray-900">
                            {(
                              product.price -
                              (product.price * product.discount) / 100
                            ).toFixed(2)}
                            $
                          </p>
                        </div>
                      ) : (
                        <p className="flex flex-col text-sm font-medium text-gray-900">
                          {product.price}$
                        </p>
                      )}
                    </div>
                  </div>
                </CardWrapper>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
