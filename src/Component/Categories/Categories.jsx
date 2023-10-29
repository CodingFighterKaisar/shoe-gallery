import React from "react";
import formal from "../../assets/images/categories/formal.jpg";
import ladies from "../../assets/images/categories/ladies.jpg";
import kidz from "../../assets/images/categories/kidz.jpg";

import Category from "../Category/Category";

const Categories = () => {
  const categories = [
    {
      categoryId: 1,
      categoryImg: formal,
      categoryName: "Formal Collections",
      totalShoes: 10,
    },
    {
      categoryId: 2,
      categoryImg: ladies,
      categoryName: "Ladies Gallery",
      totalShoes: 10,
    },
    {
      categoryId: 3,
      categoryImg: kidz,
      categoryName: "Kidz Zone",
      totalShoes: 10,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <Category key={category.categoryId} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
