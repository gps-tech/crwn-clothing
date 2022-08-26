import CategoryItem from "../category-item/category-item.component.jsx";
import "./directory.styes.scss";

import React from "react";

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
