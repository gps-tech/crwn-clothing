import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styes.scss";

import React from "react";

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
