/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import * as React from 'react';
const OuiIconTokenObject = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M6.63 12c-1.294 0-2.383-.105-2.383-1.802V9.6c0-.638-.247-.914-.98-.914v-1.37c.733 0 .98-.28.98-.915v-.6C4.247 4.105 5.336 4 6.631 4v1.14c-.759 0-.886.272-.886.843v.813c0 .479-.225.936-1.212 1.133v.142c.987.197 1.212.654 1.212 1.133v.813c0 .57.127.844.886.844V12Zm2.266-8c1.295 0 2.384.105 2.384 1.802V6.4c0 .638.247.914.98.914v1.37c-.733 0-.98.28-.98.915v.6C11.28 11.895 10.19 12 8.896 12v-1.14c.759 0 .886-.272.886-.843v-.813c0-.479.225-.936 1.212-1.133V7.93c-.987-.197-1.212-.654-1.212-1.133v-.813c0-.57-.127-.844-.886-.844V4Z"
    />
  </svg>
);
export const icon = OuiIconTokenObject;
