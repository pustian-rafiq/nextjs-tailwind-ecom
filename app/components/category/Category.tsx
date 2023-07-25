import { useGetCategoriesQuery } from "@/app/redux/services/product.service";
import { FC } from "react";
import Input from "../shared/Input";
interface ICategory {
  handleChange: any;
}
const Category: FC<ICategory> = ({ handleChange }) => {
  const {
    isLoading,
    isFetching,
    data: categories,
    error,
  } = useGetCategoriesQuery("categories");

  if (isLoading) {
    return <h5>Loading categories....</h5>;
  }
  return (
    <div className="px-10">
      <h4 className="text-xl">Filter By Category</h4>
      <div className="flex flex-col">
        <label className="flex flex-1">
          <input onChange={handleChange} type="radio" value="" name="filter" />
          <span className="ml-2"></span>All
        </label>

        {categories?.map((category: any, i: number) => (
          <Input
            handleChange={handleChange}
            value={category}
            title={category}
            name="filter"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
