import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#F0B90B" />
    <g clip-path="url(#clip0_696_1377)">
      <path d="M11.9664 3.99999L13.9402 6.01528L8.97006 10.9705L6.99628 9.00266L11.9664 3.99999Z" fill="white" />
      <path d="M14.9627 6.98737L16.9365 9.00266L8.97006 16.9453L6.99628 14.9774L14.9627 6.98737Z" fill="white" />
      <path d="M5.97372 9.97474L7.9475 11.99L5.97372 13.9579L3.99994 11.99L5.97372 9.97474Z" fill="white" />
      <path d="M17.9591 9.97474L19.9329 11.99L11.9664 19.9327L9.99261 17.9648L17.9591 9.97474Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_696_1377">
        <rect width="16" height="16" fill="white" transform="translate(4 4)" />
      </clipPath>
    </defs>
  </svg>

);

export default SvgComponent;
