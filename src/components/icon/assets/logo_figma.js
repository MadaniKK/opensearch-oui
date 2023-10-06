import * as React from 'react';
const OuiIconLogoFigma = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#0ACF83"
      d="M10.733 32a5.335 5.335 0 005.334-5.333v-5.334h-5.334A5.335 5.335 0 005.4 26.667 5.335 5.335 0 0010.733 32z"
    />
    <path
      fill="#A259FF"
      d="M5.4 16a5.335 5.335 0 015.333-5.333h5.334v10.666h-5.334A5.335 5.335 0 015.4 16z"
    />
    <path
      fill="#F24E1E"
      d="M5.4 5.333A5.335 5.335 0 0110.733 0h5.334v10.667h-5.334A5.335 5.335 0 015.4 5.333z"
    />
    <path
      fill="#FF7262"
      d="M16.067 0H21.4a5.335 5.335 0 015.333 5.333 5.335 5.335 0 01-5.333 5.334h-5.333V0z"
    />
    <path
      fill="#1ABCFE"
      d="M26.733 16a5.335 5.335 0 01-5.333 5.333A5.335 5.335 0 0116.067 16a5.335 5.335 0 015.333-5.333A5.335 5.335 0 0126.733 16z"
    />{' '}
  </svg>
);
export const icon = OuiIconLogoFigma;
