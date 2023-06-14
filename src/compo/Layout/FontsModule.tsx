import React from 'react';
import { FC } from 'react';

interface FontsModuleProps {
  onChange: (value: string) => void;
}

const FontsModule: FC<FontsModuleProps> = ({ onChange }) => {
  const { value } = this.props;
  

  return (
    <div>
      <select
        className="ql-fontselect"
        value={value}
        onChange={onChange}
      >
        <option value="">Select a font</option>
        {fontOptions.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontsModule;
