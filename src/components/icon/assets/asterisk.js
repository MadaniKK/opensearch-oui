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
const OuiIconAsterisk = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.928 8.468 4 7.618l.446-1.427L7.375 7.25 7.287 4h1.484l-.097 3.296 2.88-1.039L12 7.693l-2.977.86 1.92 2.56L9.741 12 7.937 9.28l-1.745 2.654-1.213-.86z" />
  </svg>
);
export const icon = OuiIconAsterisk;
