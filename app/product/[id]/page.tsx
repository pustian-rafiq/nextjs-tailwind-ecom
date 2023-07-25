"use client";
import RelatedProducts from "@/app/components/product/RelatedProducts";
import {
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} from "@/app/redux/services/product.service";
import Image from "next/image";
import { useParams } from "next/navigation";

const ProductDetailsPage = () => {
  const params = useParams();
  const id: number = Number(params.id);
  console.log(id);

  const {
    isLoading,
    isFetching,
    data: product,
    error,
  } = useGetProductByIdQuery(id);
  console.log("data", product);

  const {
    isLoading: productsBycategoryLoading,
    isFetching: productsByCategoryFetching,
    data: productsByCategory,
    error: productsByCategoryError,
  } = useGetProductsByCategoryQuery(product?.category);

  console.log("productsByCategory", productsByCategory);
  const addToCart = () => {
    // dispatch(productAddToCart(product));
  };

  return (
    <div>
      <div className=" px-4 py-4 mt-4  flex  flex-col items-center m-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex items-center content-between gap-10 w-full">
          <div className="w-1/3 ">
            <Image src={product?.image} height={400} width={250} alt="" />
          </div>
          <div className="flex flex-col w-2/3">
            <h2 className="text-4xl">{product?.title}</h2>
            <p className="text-justify text-black text-lg mb-6">
              {product?.description}
            </p>
            <hr />

            <p className="mt-6 ">
              {" "}
              <span className="text-2xl">Category</span> : {product?.category}
            </p>
            <p>
              <span className="text-2xl">Price</span> : {product?.price} Tk
            </p>
            <a
              href="#"
              className="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
            {/* <button className="">Add To Cart</button> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-3xl mt-20 mb-10 text-orange-300">
          Related Products
        </h3>
        <RelatedProducts products={productsByCategory} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
