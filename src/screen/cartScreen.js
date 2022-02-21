import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardWrapper from "../components/CardWrapper";

export default function CartScreen(props) {
  const [open, setOpen] = useState(true);
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce(
    (a, c) => a + (c.price - (c.price * c.discount) / 100) * c.qty,
    0
  );
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;

  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <>
      <div className="w-screen bg-gray-100  ">
        <div className="h-full flex flex-row bg-white shadow-xl ">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h1 className="text-lg font-medium text-gray-900">
                Shopping cart
              </h1>
            </div>
            {cartItems.length === 0 ? (
              <h1>Cart is Empty </h1>
            ) : (
              <div className="mt-8">
                <CardWrapper padding>
                  <div className="flow-root ">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((product) => (
                        <li key={product.id} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 overflow-hidden">
                            <img
                              src={product.image}
                              className="w-full h-full object-fill "
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

                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a>{product.title}</a>
                                </h3>
                                {product.discount !== "" ? (
                                  <div className="flex flex-col">
                                    <p className=" text-sm font-medium text-gray-900">
                                      {(
                                        product.price -
                                        (product.price * product.discount) / 100
                                      ).toFixed(2)}
                                      $
                                    </p>
                                    <p className="flex flex-col line-through text-sm font-medium text-gray-400">
                                      {product.price}$
                                    </p>
                                  </div>
                                ) : (
                                  <p className="flex flex-col text-sm font-medium text-gray-900">
                                    {product.price}$
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <p className="text-gray-500">Qty {product.qty}</p>

                              <div className="flex flex-row">
                                <button
                                  onClick={() => onRemove(product)}
                                  className="font-medium text-red-600 hover:text-red-500"
                                >
                                  <MinusIcon className="h-5 w-5 m-1" />
                                </button>
                                <button
                                  onClick={() => onAdd(product)}
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  <PlusIcon className="h-5 w-5 m-1" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardWrapper>
              </div>
            )}
          </div>
          {cartItems.length !== 0 && (
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6 flex-1 overflow-y-auto">
              <div className="p-10 ">
                <div className="flex justify-between mt-0.5 text-md font-medium text-gray-500">
                  <p>Items Price</p>
                  <p>{itemsPrice.toFixed(2)}$</p>
                </div>
                <div className="flex justify-between mt-0.5 text-md font-medium text-gray-500">
                  <p>Shipping Charges</p>
                  <p>{shippingPrice.toFixed(2)}$</p>
                </div>
                <div className="flex justify-between mt-0.5 text-md font-medium text-gray-500">
                  <p>Tax Amount</p>
                  <p>{taxPrice.toFixed(2)}$</p>
                </div>
                <div className="flex justify-between text-xl font-medium text-gray-900">
                  <p>Total Amount</p>
                  <p>{totalPrice.toFixed(2)}$</p>
                </div>
              </div>

              <div className="mt-6">
                <button className="mt-10 mx-auto w-80 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Checkout
                </button>
              </div>
              <div className="mt-6 flex justify-center text-md text-center text-gray-500">
                <p>
                  or{" "}
                  <button
                    type="button"
                    className="text-green-600 font-medium hover:text-gray-500"
                    onClick={() => setOpen(false)}
                  >
                    <Link to={"/"}> Continue Shopping</Link>
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
