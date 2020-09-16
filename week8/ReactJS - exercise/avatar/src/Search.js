import React from "react";

export default function Search() {
  return (
    <div class="searchBar">
      <form class="searchBarForm">
        <input
          className="searchBarInput"
          type="text"
          placeholder="Search..."
          name="search"
        />
        <button type="submit" className="searchBarBtn">
          <i>Hit</i>
        </button>
      </form>
    </div>
  );
}
