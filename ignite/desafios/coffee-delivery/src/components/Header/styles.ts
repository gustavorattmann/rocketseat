import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`;

export const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  font-size: 0.875rem;
  border-radius: 6px;
  padding: 0.5rem;
`;

export const ButtonLocationContainer = styled(ButtonBase)`
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple"]};
  gap: 0.25rem;

  span {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const ButtonShoppingCartContainer = styled(ButtonBase)`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;
