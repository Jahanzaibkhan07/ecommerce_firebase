import { StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CardWrapper from "../components/CardWrapper";

const Data = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Detail(props) {
  const [seconds, setSeconds] = useState(0);

  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const location = useLocation();
  const { product } = location.state;
  const { onAdd, user, sizeName } = props;

  const [selectedColor, setSelectedColor] = useState(Data.colors[0]);
  const [selectedSize, setSelectedSize] = useState(Data.sizes[2]);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const handleSizeNameClick = (n) => {
    sizeName(n);
  };
  //   var array1 = [{ email: "waleed" }, { email: "hanan" }, { email: "zahid" }];
  //   var array2 = [{ email: "waleed" }, { email: "jahanzeb" }, { email: "ali" }];
  //   let newArray = [];
  //   function ToFindCommon(a1, a2) {
  //     for (var i = 0; i < a1.length; i++) {
  //       for (var j = 0; j < a2.length; j++) {
  //         if (a1[i].email === a2[j].email) {
  //           newArray.push(a1[i].email);
  //         }
  //       }
  //     }
  //     return newArray;
  //   }
  //   console.log(ToFindCommon(array1, array2));
  return (
    <>
      {seconds && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 overflow-hidden"
            onClose={setOpen}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="absolute inset-0 bg-gray-300 bg-opacity-30 transition-opacity" />
              </Transition.Child>
              <div
                className="fixed inset-y-0 right-0 pl-10 max-w-full flex"
                onClick={() => setOpen(false)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="relative w-screen max-w-md">
                    {user ? (
                      <div
                        id="toast-top-right"
                        className="absolute top-5 right-5 rounded-xl flex items-center justify-between w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white "
                        role="alert"
                      >
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-red-100 rounded-lg dark:bg-green-700 dark:text-green-200">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg leading-6 font-medium text-gray-500">
                          You item is added in cart
                        </h3>

                        <button
                          type="button"
                          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                          data-collapse-toggle="toast-default"
                          aria-label="Close"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div
                        id="toast-top-right"
                        className="absolute top-5 right-5 rounded-xl flex items-center justify-between w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white "
                        role="alert"
                      >
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-700 dark:text-orange-200">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"></path>
                          </svg>
                        </div>
                        <h3 className="text-lg leading-6 font-medium text-gray-500">
                          You are not loggedIn.
                        </h3>

                        <button
                          type="button"
                          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                          data-collapse-toggle="toast-default"
                          aria-label="Close"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close</span>
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
      <div className="bg-gray-100">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-5 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
              <li className="text-sm">
                <a
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product.title}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"></div>

          {/* Product info */}
          <CardWrapper margin>
            <div className="bg-white py-10   rounded-lg max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div className=" ">
                <img src={product.image} className="w-60 h-60 object-center" />
                {/* <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                </div> */}
                {/* Options */}
                <div className="mt-4 lg:mt-0 lg:row-span-3">
                  <h2 className="sr-only">Product information</h2>
                  {product.discount !== "" ? (
                    <div className="flex flex-row mt-4  ">
                      <p className=" text-3xl font-medium text-gray-900">
                        {(
                          product.price -
                          (product.price * product.discount) / 100
                        ).toFixed(2)}
                        $
                      </p>
                      <p className="flex flex-col line-through text-lg font-medium text-gray-400">
                        {product.price}$
                      </p>
                    </div>
                  ) : (
                    <p className="flex flex-col text-3xl font-medium text-gray-900">
                      {product.price}$
                    </p>
                  )}
                  {/* Reviews */}
                  <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rat) => (
                          <StarIcon
                            key={rat}
                            className={classNames(
                              product.rating.rate > rat
                                ? "text-gray-900"
                                : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">
                        {product.rating.rate} out of 5 stars
                      </p>
                      <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        {product.rating.count} reviews
                      </a>
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {Data.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="p" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-8 border border-black border-opacity-10 rounded-full"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm text-gray-900 font-medium">
                        Size
                      </h3>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Size guide
                      </a>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {Data.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            // onClick={() => handleSizeNameClick(size.name)}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                  : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                active ? "ring-2 ring-gray-900" : "",
                                "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-2"
                              )
                            }
                          >
                            {({ active, checked, onclick }) => (
                              <>
                                <RadioGroup.Label as="p">
                                  {size.name}
                                </RadioGroup.Label>
                                {size.inStock ? (
                                  <div
                                    className={classNames(
                                      active
                                        ? "border"
                                          ? (onclick = handleSizeNameClick(
                                              size.name
                                            ))
                                          : null
                                        : "border-2",
                                      checked
                                        ? "border-indigo-500"
                                        : "border-transparent",
                                      "absolute -inset-px rounded-md pointer-events-none"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <div
                                    aria-hidden="true"
                                    className="absolute  -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                  >
                                    <svg
                                      className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  {user === null ? (
                    <button
                      onClick={() => {
                        setOpen(true);
                      }}
                      className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        onAdd(product);
                        setOpen(true);
                      }}
                      className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
              <div className="lg:col-span-2   lg:pr-8">
                <h1 className="text-2xl mt-4 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {product.title}
                </h1>
                <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2  lg:pr-8">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">
                      Highlights
                    </h3>

                    <div className="mt-4">
                      <ul
                        role="list"
                        className="pl-4 list-disc text-sm space-y-2"
                      >
                        {Data.highlights.map((highlight) => (
                          <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">
                      Details
                    </h2>

                    <div className="mt-4 space-y-6">
                      <p className="text-sm text-gray-600">{Data.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardWrapper>
        </div>
      </div>
    </>
  );
}
