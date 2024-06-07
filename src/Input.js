// src/Input.js
import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin: 10px 0;
`;

const InputLabel = styled.label`
  margin-right: 10px;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextInput = ({ label, value, onChange }) => (
  <InputWrapper>
    <InputLabel>{label}</InputLabel>
    <StyledInput type="text" value={value} onChange={onChange} />
  </InputWrapper>
);

export const NumericInput = ({ label, value, onChange }) => {
  const formatNumber = (num) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, '');
    if (!isNaN(rawValue)) {
      onChange(e);
    }
  };

  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        type="text"
        value={formatNumber(value)}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};
