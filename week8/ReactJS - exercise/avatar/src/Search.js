import React from "react";

export default function Search(props) {
  return (
    <div className="searchBar">
      <form className="searchBarForm">
        <input
          className="searchBarInput"
          type="text"
          placeholder="Search..."
          name="search"
          onChange={props.onChange}
        />
        <button type="submit" className="searchBarBtn">
          <i>Hit</i>
        </button>
      </form>
    </div>
  );
}
