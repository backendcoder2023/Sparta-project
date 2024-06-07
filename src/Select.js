// src/Select.js
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  margin: 10px 0;
`;

const SelectLabel = styled.label`
  margin-right: 10px;
`;

const SelectDisplay = styled.div`
  border: 1px solid #ccc;
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  background: white;
  z-index: 1000;
`;

const Option = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const Select = ({ label, options, value, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option) => {
    onChange(option);
    setShowOptions(false);
  };

  return (
    <SelectWrapper ref={wrapperRef}>
      <SelectLabel>{label}</SelectLabel>
      <SelectDisplay onClick={() => setShowOptions(!showOptions)}>
        {value}
        <span>▼</span>
      </SelectDisplay>
      {showOptions && (
        <Options>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </Options>
      )}
    </SelectWrapper>
  );
};

export default Select;
