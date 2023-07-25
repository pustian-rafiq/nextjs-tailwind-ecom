import { FC } from "react";
import Input from "../shared/Input";
interface ICategory {
  handleChange: any;
}
const Category: FC<ICategory> = ({ handleChange }) => {
  return (
    <div className="px-10">
      <h4 className="text-xl">Filter By Category</h4>
      <div className="flex flex-col">
        <label className="flex flex-1">
          <input onChange={handleChange} type="radio" value="" name="filter" />
          <span className="ml-2"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="Mango"
          title="Mango"
          name="filter"
          key="i"
        />
      </div>
    </div>
  );
};

export default Category;
