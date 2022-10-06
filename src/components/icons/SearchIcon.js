import * as React from "react";

function SearchIcon({ size = 25, color = "black" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 21.8569L17.15 17.5069M19.5 11.8569C19.5 16.2752 15.9183 19.8569 11.5 19.8569C7.08172 19.8569 3.5 16.2752 3.5 11.8569C3.5 7.43862 7.08172 3.8569 11.5 3.8569C15.9183 3.8569 19.5 7.43862 19.5 11.8569Z"
        stroke="#090A0A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
