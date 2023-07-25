import { FC } from "react";

import ProductCard from "./ProductCard";

interface IProduct {
  id: number;
  title: string;
  category: any;
  price: number;
  description: string;
  image: string;
}
type ProductArray = IProduct[];

const RelatedProducts: FC<{ products: ProductArray }> = ({ products }) => {
  return (
    <div className=" flex flex-wrap gap-10 sm:px-0 md:px-5">
      {products?.map((product: IProduct) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default RelatedProducts;
