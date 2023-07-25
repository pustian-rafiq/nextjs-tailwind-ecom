"use client";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../components/product/ProductList";
import {
  decrementProductQuantity,
  incrementProductQuantity,
  removeFromCartProduct,
} from "../redux/features/cart";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const CartPage = () => {
  const { cart_list, subTotal, loading } = useAppSelector(
    (state: any) => state.cart
  );
  const dispatch = useAppDispatch();
  console.log("CartPage", cart_list);
  console.log("subTotal", subTotal);

  // Increment or decrement quantity
  const incrementDecrementQuantity = (id: number, type: string) => {
    console.log(id);
    if (type === "increment") {
      dispatch(incrementProductQuantity(id));
    } else {
      dispatch(decrementProductQuantity(id));
    }
  };

  // Remove cart item
  const removeFromCart = (id: number) => {
    console.log(id);
    if (id) {
      dispatch(removeFromCartProduct(id));
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product Title
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {cart_list?.length > 0
            ? cart_list?.map((product: IProduct, i: number) => (
                <tr
                  key={product?.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product?.title}
                  </th>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">
                    <Image src={product.image} height={100} width={70} alt="" />
                  </td>
                  <td className="px-6 py-4 flex text-center">
                    <button
                      className="bg-orange-100 px-4 mx-2 text-xl"
                      disabled={product?.quantity === 1}
                      onClick={() =>
                        incrementDecrementQuantity(product?.id, "decrement")
                      }
                    >
                      -
                    </button>
                    <input
                      value={product?.quantity}
                      id="large-input"
                      className="block text-center w-10  p-1 text-gray-900 border border-gray-300   bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {/* <input className="" value={product?.quantity} /> */}
                    <button
                      className="bg-orange-100 px-4 mx-2 text-xl"
                      onClick={() =>
                        incrementDecrementQuantity(product?.id, "increment")
                      }
                    >
                      +
                    </button>
                  </td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">
                    {product?.price * product?.quantity}
                  </td>
                  <td>
                    <button
                      style={{
                        background: "red",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                      onClick={() => removeFromCart(product?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : ""}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Sub Total: {subTotal?.toFixed(2)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {cart_list?.length < 1 && (
        <p className="text-center">
          {" "}
          No products in your cart! Please add to cart{" "}
          <Link className="text-red-600" href={"/"}>
            Click here
          </Link>
        </p>
      )}
    </div>
  );
};

export default CartPage;
