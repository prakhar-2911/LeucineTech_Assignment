import React from "react";
import styled from "styled-components";
import Wrapper from './wrapper'
import Label from './label';

const StyledInput = styled.input`
  display: block;
  border-radius: 2px;
  border: solid 1px #cacad3;
  display: block;
  height: 38px;
  line-height: 1.4;
  margin-top: 0.5rem;
  outline: none;
  padding: 0.5rem 1rem;
  width: 100%;
  box-sizing: border-box;
`;

function Input({ name, label, handleChange, fluid }) {
  return (
    <Wrapper fluid={fluid}>
      <Label>
        {label}
        <StyledInput type="text" name={name} onChange={handleChange} />
      </Label>
    </Wrapper>
  );
}

export default Input;
