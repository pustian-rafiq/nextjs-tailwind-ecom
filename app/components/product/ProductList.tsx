import { FC } from "react";
import ProductCard from "./ProductCard";

export interface IProduct {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  quantity?: number | any;
}
interface IProductCategory {
  selectedCategory: string;
}

const ProductList: FC<IProductCategory> = ({ selectedCategory }) => {
  return (
    <div className=" flex flex-wrap gap-10 sm:px-0 md:px-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
