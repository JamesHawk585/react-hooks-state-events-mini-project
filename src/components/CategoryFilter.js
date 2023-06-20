import React from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({ categories }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={uuid()}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;

// import React from "react";


// function CategoryFilter({ categories }) {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {categories.map((category, index) => (
//         <button key={index}>{category}</button>
//       ))}
//     </div>
//   );
// }

// export default CategoryFilter;
