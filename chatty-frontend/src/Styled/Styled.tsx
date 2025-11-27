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
export const StyledMessageBox = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 15px;

  color: #1f2937; /* gray-900 */
  background: #ffffff;

  border: 1.5px solid #d1d5db; /* gray-300 */
  border-radius: 12px;

  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: #9ca3af; /* gray-400 */
  }

  &:focus {
    border-color: #a855f7; /* purple-500 */
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
  }
`;
export const SendButton = styled.button`
  padding: 10px 14px;
  background: #a855f7; /* purple-500 */
  border-radius: 12px;
  border: none;

  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    background: #9333ea; /* darker purple */
  }

  &:active {
    transform: scale(0.96);
  }
`;
