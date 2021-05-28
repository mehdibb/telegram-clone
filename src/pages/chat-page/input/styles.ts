import styled from '@emotion/styled';


export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--input-border-color);

  :focus {
    border-bottom: 1px solid var(--main-blue);
    outline: none;
  }

  ::placeholder {
    color: var(--grey);
  }
`;
