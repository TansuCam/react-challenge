import * as React from "react";

function LocationIcon({ size = 25 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10306_292)">
        <path
          d="M21.0811 10.6971C21.0811 17.6971 12.0811 23.6971 12.0811 23.6971C12.0811 23.6971 3.08105 17.6971 3.08105 10.6971C3.08105 8.3102 4.02927 6.02101 5.71709 4.33318C7.40492 2.64536 9.69411 1.69714 12.0811 1.69714C14.468 1.69714 16.7572 2.64536 18.445 4.33318C20.1328 6.02101 21.0811 8.3102 21.0811 10.6971Z"
          stroke="#090A0A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0811 13.6971C13.7379 13.6971 15.0811 12.354 15.0811 10.6971C15.0811 9.04029 13.7379 7.69714 12.0811 7.69714C10.4242 7.69714 9.08105 9.04029 9.08105 10.6971C9.08105 12.354 10.4242 13.6971 12.0811 13.6971Z"
          stroke="#090A0A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10306_292">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.0810547 0.697144)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default LocationIcon;
