"use client";
import { useState } from "react";
import Category from "./components/category/Category";
import ProductList from "./components/product/ProductList";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="bg-gray-200  mt-1 flex flex-wrap sm:flex-col md:flex-row">
      <div className="flex-initial max-h-fit bg-gray-10 sm:w-full md:w-1/5">
        <Category handleChange={handleChange} />
      </div>
      <div className="flex-initial w-4/5 bg-white  sm:w-full md:w-4/5">
        <ProductList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
