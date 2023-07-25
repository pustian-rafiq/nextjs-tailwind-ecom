"use client";

import { addToCartProduct } from "@/app/redux/features/cart";
import { useAppDispatch } from "@/app/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IProduct {
  product: {
    id?: number;
    title?: string;
    category?: any;
    price?: number;
    description?: string;
    image?: string | any;
    quantity?: number;
  };
}
export interface Product {
  id?: number;
  title?: string;
  category?: string;
  price?: number;
  description?: string;
  rating?: {};
  image?: string | any;
  quantity?: number;
}

const ProductCard: FC<IProduct> = ({ product }) => {
  const dispatch = useAppDispatch();

  // Product Add to Cart
  const addToCart = (product: Product) => {
    dispatch(addToCartProduct(product));
  };

  return (
    <div className="max-w-xs  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        src={product?.image}
        alt="img"
        width={170}
        height={200}
        className="h-64 w-full px-3 py-3"
      />

      <div className="p-5 relative">
        <Link href={`product/${product?.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title?.slice(0, 30)}
          </h5>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            onClick={() => addToCart(product)}
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
