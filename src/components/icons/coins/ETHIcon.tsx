import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={26} height={26} rx={13} fill="#F7F7F7" />
    <path d="m12.998 4-.12.41v11.902l.12.12 5.525-3.265L12.998 4Z" fill="#343434" />
    <path d="m12.998 4-5.524 9.167 5.524 3.266V4Z" fill="#8C8C8C" />
    <path d="m12.998 17.479-.068.083v4.24L13 22l5.527-7.785L13 17.479Z" fill="#3C3C3B" />
    <path d="M12.998 22v-4.521l-5.524-3.264L12.998 22Z" fill="#8C8C8C" />
    <path d="m12.998 16.433 5.525-3.266L13 10.656v5.777Z" fill="#141414" />
    <path d="m7.474 13.167 5.524 3.266v-5.777l-5.524 2.511Z" fill="#393939" />
  </svg>
);

export default SvgComponent;
