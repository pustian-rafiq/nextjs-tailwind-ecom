import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "@/app/redux/services/product.service";
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
  const {
    isLoading: productsBycategoryLoading,
    isFetching: productsByCategoryFetching,
    data: categoryWiseProducts,
    error: productsByCategoryError,
  } = useGetProductsByCategoryQuery(selectedCategory);
  const {
    isLoading,
    isFetching,
    data: products,
    error,
  } = useGetProductsQuery("?sort=desc");
  if (isLoading || productsBycategoryLoading) {
    return <h5>Loading products....</h5>;
  }
  return (
    <div className=" flex flex-wrap gap-10 sm:px-0 md:px-5">
      {categoryWiseProducts?.length > 0
        ? categoryWiseProducts?.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))
        : products?.map((product: IProduct) => (
            <ProductCard product={product} key={product.id} />
          ))}
    </div>
  );
};

export default ProductList;
