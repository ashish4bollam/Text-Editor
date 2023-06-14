import React from 'react';
import { FC } from 'react';

interface SizeStyleProps {
  onChange: (value: string) => void;
}

const SizeStyle: FC<SizeStyleProps> = ({ onChange }) => {
  const fontSizes = [
    '8pt',
    '10pt',
    '12pt',
    '14pt',
    '16pt',
    '18pt',
    '20pt',
    '32pt',
  ];

  return (
    <div>
      <select
        className="ql-fontselect"
        value={fontSizes[0]}
        onChange={onChange}
      >
        <option value="">Select a font size</option>
        {fontSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeStyle;
