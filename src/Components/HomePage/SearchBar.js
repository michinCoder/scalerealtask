import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

const SearchBar = () => {
  const [inputs, setInputs] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const FindInputs = async () => {
    const { data } = await Axios.get("https://fakestoreapi.com/products");
    console.log(data);
    setInputs(data);
  };

  useEffect(() => {
    FindInputs();
  }, []);

  const handleFilter = (e) =>{
    const searchWord = e.target.value;
    const filterData = inputs.filter(value =>{
        return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if(searchWord === ""){setFilteredData([])}
    else{setFilteredData(filterData)};
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder="Search" onChange={handleFilter} />
        <div className="searchIcon">
          <BsSearch />
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0,5).map((item) => {
            return (
              <>
                <a className="dataItem" key={item.id} href={`/product/${item.id}`}>
                  <p>{item.title}</p>
                </a>
                <br />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
