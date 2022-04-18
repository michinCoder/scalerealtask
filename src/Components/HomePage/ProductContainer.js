import React, { useState, useEffect } from "react";
import Axios from "axios";
import Products from "./Products";

function ProductContainer() {
  let [categories, setCategories] = useState([]);

  //return all the category available
  const getAllcategories = async () => {
    const { data } = await Axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCategories(data);
    //  console.log("RESPONSE: ", data);
  };

  //run and call the above function to fetch all the categories
  useEffect(() => {
    getAllcategories();
  }, []);

  let [products, setProducts] = useState([]);

  const getProducts = async (categoryName) => {
    const { data } = await Axios.get(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    setProducts(data);
    // console.log("RESPONSE: ", data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const ProductHandler = (e) => {
    //   console.log(e.target.textContent)
    let categoryName = e.target.textContent;
    getProducts(categoryName);
  };

  return (
    <>
      <h3 className="page-heading">HIGH RANGE OF PRODUCTS</h3>
      <div className="category">
        {categories.map((category, id) => {
          return (
            <div className="box" onClick={ProductHandler} key={id}>
              {category}
            </div>
          );
        })}
      </div>
      {products.length !== 0 ? (
        <Products products={products} />
      ) : (
        <p className="text-no-data-found">No category selected.</p>
      )}
    </>
  );
}

export default ProductContainer;
