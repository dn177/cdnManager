import React from "react";
import "./searchresult.css";

function SearchResult(props) {
  return (
    <div className="searchres">
      <ul>
        {props.searchres.map((res) => {
          return (
            <li className="searchresli">
              <span>Name:{res.name}</span>
              <span>Latest:{res.latest}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchResult;
