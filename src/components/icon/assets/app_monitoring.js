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
const OuiIconAppMonitoring = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.81 15.19A8.94 8.94 0 0 1 15.62 3.86l.38.42.38-.42a8.94 8.94 0 0 1 14.26 10.68l-1.7-1.07a6.94 6.94 0 0 0-11.07-8.28L16 7.29l-1.87-2.1A6.94 6.94 0 0 0 3.41 14l-1.6 1.19ZM16 31.18l-7.74-8.51 1.48-1.34L16 28.21l6.26-6.88 1.48 1.34z" />
    <path
      d="m16.16 23.29-4.1-7.17L10.62 19H0v-2h9.38l2.56-5.12 3.9 6.83 4.13-10.32L23.66 17H32v2h-9.66l-2.31-5.39z"
      className="ouiIcon__fillSecondary"
    />
  </svg>
);
export const icon = OuiIconAppMonitoring;
