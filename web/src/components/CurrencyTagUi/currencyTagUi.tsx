import React from "react";

export const currencyTagUi = (currencySymb: 'UZS' | 'USD', fontSizes = '12px') => (
  <p
    style={{
      fontSize: fontSizes,
      padding: '0 6px',
      lineHeight: '16px',
      fontWeight: 'bold',
      display: 'inline',
      // color: currencyColors[currencySymb],
    }}
  >
    {currencySymb}
  </p>
);
