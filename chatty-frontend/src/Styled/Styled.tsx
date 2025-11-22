import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  margin-top: 0.25rem;
  outline: none;
  color: var(--color-primary);
  &:focus {
    ring: 2px;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px var(--accent-color);
  }
`;
