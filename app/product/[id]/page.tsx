import Image from "next/image";

const ProductDetailsPage = () => {
  const addToCart = () => {
    // dispatch(productAddToCart(product));
  };

  return (
    <div>
      <div className=" px-4 py-4 mt-4  flex  flex-col items-center m-auto bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex items-center content-between gap-10 w-full">
          <div className="w-1/3 ">
            <Image
              src="https://picsum.photos/200"
              height={400}
              width={250}
              alt=""
            />
          </div>
          <div className="flex flex-col w-2/3">
            <h2 className="text-4xl">New Product</h2>
            <p className="text-justify text-black text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              modi sit natus excepturi ullam, molestias totam perferendis fuga
              deleniti voluptatibus nobis laboriosam error quidem dolores id
              ipsam nostrum voluptatum? Quo?
            </p>
            <hr />

            <p className="mt-6 ">
              {" "}
              <span className="text-2xl">Category</span> : Mango
            </p>
            <p>
              <span className="text-2xl">Price</span> : 1200 Tk
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
      <div className="flex">
        <h3>Related Products</h3>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
