import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_696_1340)">
      <mask id="mask0_696_1340" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <path d="M24 0H0V24H24V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_696_1340)">
        <path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#7543E3" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05698 9.49768C9.03047 9.72034 9.00396 9.95361 8.98806 10.1869C8.58514 10.4679 8.20873 10.7541 7.85883 11.0404C7.67858 11.1889 7.50363 11.3373 7.33928 11.4911C6.04571 10.171 5.49435 8.98343 5.84955 8.37376C6.16234 7.833 7.21205 7.67926 8.68587 7.97084C8.74419 7.71637 8.8025 7.4725 8.87142 7.23923C7.08481 6.87873 5.72232 7.1173 5.20807 8.00265C5.07023 8.23592 5.00131 8.50099 5.00131 8.78197V8.80848C5.01191 10.0649 6.24717 11.7455 8.30946 13.3307C8.52152 13.495 8.74949 13.6594 8.98276 13.8237C9.02517 14.338 9.08879 14.831 9.16831 15.2922C9.20542 15.499 9.24253 15.7005 9.28494 15.8966C7.49833 16.3579 6.19946 16.2412 5.84425 15.6315C5.53146 15.0908 5.92378 14.0994 6.90986 12.9702L6.39561 12.4294C5.17626 13.8078 4.68852 15.1173 5.20277 16.008C5.56327 16.6335 6.3426 16.9304 7.3923 16.9304C8.4473 16.9304 9.77268 16.6282 11.2253 16.0398C11.2624 16.0239 11.2995 16.008 11.3419 15.992C11.5964 15.886 11.8509 15.7747 12.1107 15.6528C12.1213 15.6474 12.1319 15.6421 12.1425 15.6368C12.6037 15.8489 13.0596 16.0398 13.5103 16.2041C13.7064 16.2783 13.9026 16.3419 14.0934 16.4056C13.6004 18.1869 12.8476 19.2578 12.1425 19.2578C11.5169 19.2578 10.8542 18.4201 10.3718 16.9887C10.1279 17.0736 9.88932 17.1478 9.65075 17.2114C10.2339 18.9397 11.1193 20 12.1425 20C13.6322 20 14.8197 17.7628 15.228 14.5023C15.2545 14.2797 15.2757 14.0464 15.2969 13.8184C15.7157 13.5268 16.108 13.2247 16.4738 12.9172C16.495 12.9013 16.5162 12.8854 16.5374 12.8641C16.6753 12.7475 16.8078 12.6309 16.9403 12.5089C18.2392 13.8237 18.7906 15.0166 18.4354 15.6262C18.1438 16.1299 17.1842 16.2995 15.8694 16.0822C15.7793 16.0663 15.6945 16.0504 15.6044 16.0345C15.546 16.2836 15.4877 16.5222 15.4188 16.7555C15.5301 16.7767 15.6415 16.7979 15.7475 16.8138C16.1663 16.8827 16.5533 16.9198 16.9085 16.9198C17.9741 16.9198 18.7323 16.607 19.0822 16.0027C19.5487 15.1968 19.2094 14.0252 18.1226 12.7104C17.5606 12.0265 16.829 11.3373 15.9808 10.6799C15.7634 10.5103 15.5354 10.3459 15.3075 10.1816C15.2651 9.66733 15.2014 9.17429 15.1166 8.70775C15.0795 8.50099 15.0424 8.29954 15 8.10338C15.3022 8.02386 15.5938 7.96024 15.8747 7.91253C17.1895 7.69516 18.1491 7.86481 18.4407 8.36846C18.7482 8.89861 18.3718 9.86879 17.4175 10.9768C17.603 11.1571 17.7727 11.3373 17.9317 11.5123C18.0006 11.438 18.0643 11.3585 18.1226 11.2843C19.2041 9.96952 19.5487 8.79788 19.0822 7.99205C18.6156 7.18622 17.4334 6.89463 15.7528 7.17561C14.9735 7.30285 14.1199 7.55202 13.2346 7.89132C13.1975 7.90722 13.1657 7.91783 13.1285 7.93373C12.8317 8.05036 12.5348 8.1776 12.2379 8.31544C12.2114 8.32604 12.1849 8.34195 12.1584 8.35255C11.6918 8.13519 11.2306 7.93903 10.7853 7.77469C10.5891 7.70046 10.393 7.63685 10.2021 7.57323C10.6951 5.79722 11.448 4.72631 12.1531 4.72631C12.7786 4.72631 13.4466 5.56925 13.9291 7.00066C14.1729 6.92114 14.4115 6.84692 14.6501 6.778C14.051 5.06561 13.1657 4 12.1372 4C10.6527 4 9.45989 6.23724 9.05698 9.49768ZM13.7965 9.2273C13.7859 9.2167 13.77 9.2114 13.7594 9.2061C13.5103 9.06296 13.2558 8.92512 13.0119 8.79258C13.0331 8.78197 13.0543 8.77137 13.0755 8.76607C13.3777 8.63883 13.6799 8.5222 13.9715 8.42147C14.0722 8.38436 14.1729 8.35255 14.2684 8.32074C14.3108 8.5169 14.3479 8.71306 14.385 8.91982C14.4274 9.15838 14.4592 9.40225 14.491 9.65142C14.2631 9.50828 14.0298 9.36514 13.7965 9.2273ZM9.88932 8.94632C9.92643 8.72896 9.96354 8.5222 10.0113 8.32074C10.2074 8.38436 10.4036 8.44798 10.605 8.5275C10.8224 8.60702 11.045 8.69715 11.273 8.79258C11.0238 8.92512 10.7694 9.06296 10.5202 9.2061C10.5096 9.2114 10.499 9.2167 10.4884 9.2273C10.2498 9.36514 10.0166 9.50828 9.78859 9.65142C9.8204 9.40755 9.85221 9.17429 9.88932 8.94632ZM10.8913 14.163C10.7111 14.0623 10.5361 13.9563 10.3665 13.8502C10.1332 13.7071 9.91052 13.564 9.69316 13.4155C9.66135 12.9649 9.64545 12.493 9.64545 12.0053C9.64545 11.7508 9.65075 11.5017 9.66135 11.2578C9.67195 11.0298 9.68256 10.8125 9.69846 10.5951C10.0749 10.3406 10.4725 10.0915 10.8913 9.84758C11.0504 9.75215 11.2147 9.66203 11.3737 9.5772C11.6282 9.43936 11.8827 9.31213 12.1372 9.18489C12.5454 9.38105 12.9589 9.60371 13.383 9.84758C13.5633 9.95361 13.7382 10.0543 13.9079 10.1604C14.1411 10.3035 14.3638 10.4467 14.5812 10.5951C14.613 11.0457 14.6289 11.5176 14.6289 12.0053C14.6289 12.2598 14.6236 12.5089 14.613 12.7528C14.6024 12.9755 14.5918 13.1981 14.5759 13.4155C14.1995 13.67 13.8018 13.9192 13.383 14.163C13.2717 14.2266 13.1657 14.2903 13.0543 14.3486C12.7733 14.5076 12.4924 14.6508 12.2167 14.7886C12.1902 14.7992 12.1637 14.8151 12.1372 14.8257C11.7236 14.6243 11.3048 14.4016 10.8913 14.163ZM8.27235 12.3446C8.13451 12.2333 8.00728 12.1166 7.88004 12.0053C8.05499 11.8516 8.23524 11.6925 8.4261 11.5388C8.58514 11.4115 8.74949 11.279 8.92444 11.1518C8.91384 11.3638 8.90853 11.5812 8.90853 11.7985C8.90853 11.8675 8.90853 11.9364 8.90853 12.0053C8.90853 12.2969 8.91384 12.5779 8.92444 12.8588C8.69647 12.6892 8.47381 12.5195 8.27235 12.3446ZM15.3711 12.2174C15.3711 12.1484 15.3711 12.0795 15.3711 12.0053C15.3711 11.7137 15.3658 11.4327 15.3552 11.1518C15.5832 11.3214 15.8005 11.4964 16.0073 11.666C16.1398 11.7773 16.2724 11.894 16.3943 12.0053C16.2564 12.1272 16.1133 12.2545 15.9649 12.3764C15.9437 12.3923 15.9225 12.4135 15.9012 12.4294C15.7263 12.5726 15.5407 12.721 15.3499 12.8641C15.3605 12.6521 15.3711 12.4347 15.3711 12.2174ZM9.89462 15.0908C9.85221 14.8522 9.8204 14.6084 9.78859 14.3592C10.0166 14.5023 10.2445 14.6402 10.4831 14.778C10.4937 14.7886 10.5096 14.7939 10.5202 14.7992C10.7694 14.9423 11.0185 15.0802 11.273 15.2127C11.273 15.2127 11.2677 15.2127 11.2677 15.218C11.0026 15.3294 10.7429 15.4301 10.4884 15.5255C10.4513 15.5414 10.4142 15.552 10.3771 15.5679C10.2551 15.6103 10.1332 15.6528 10.0113 15.6899C9.96884 15.499 9.93173 15.2975 9.89462 15.0908ZM13.6746 15.4831C13.4519 15.3983 13.2293 15.3135 13.0013 15.218C13.0331 15.2021 13.0649 15.1862 13.0967 15.1703C13.3141 15.0537 13.5315 14.9317 13.7541 14.8098C13.8177 14.7727 13.8814 14.7356 13.9397 14.6985C14.1252 14.5871 14.3055 14.4758 14.4857 14.3645C14.4539 14.603 14.4221 14.8416 14.385 15.0643C14.3479 15.2816 14.3055 15.4884 14.2631 15.6952C14.0722 15.6262 13.8761 15.5573 13.6746 15.4831ZM11.1829 12.0053C11.1829 11.4805 11.6123 11.051 12.1372 11.051C12.662 11.051 13.0914 11.4805 13.0914 12.0053C13.0914 12.5302 12.662 12.9596 12.1372 12.9596C11.6123 12.9596 11.1829 12.5302 11.1829 12.0053Z" fill="white" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_696_1340">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>

);

export default SvgComponent;