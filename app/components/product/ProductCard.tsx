"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
// import { FC, useEffect } from "react";
const ProductCard = () => {
  const params = useParams();
  const id: number = Number(params.id);
  const addToCart = () => {
    console.log("product add to cart");
    // dispatch(productAddToCart(product));
  };
  return (
    <div className="max-w-xs   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          src="https://picsum.photos/200"
          alt="img"
          width={170}
          height={250}
          className="w-full"
        />
      </a>
      <div className="p-5">
        <Link href={"product/1"}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </Link>

        <div className="flex items-center content-between gap-20">
          <p>1200 TK</p>
          <a
            href="#"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
{
  /* <div className="">
<Image
  src="https://picsum.photos/200"
  alt="img"
  width={200}
  height={250}
  className=""
/>

<div className="">
  <Link href={`/product-details`} className="">
    New Product
  </Link>
  <div className="">
    <h5>1200 TK</h5>
    <button className="cartBtn" onClick={() => addToCart()}>
      Add to cart
    </button>
  </div>
</div>
</div> */
}
