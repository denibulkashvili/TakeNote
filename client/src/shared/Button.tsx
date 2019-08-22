import styled from "styled-components";
import { Colors, BoxShadow } from "./Styles";

export const Button = styled('button')`
  width: max-content;
  min-width: 60px;
  background: ${Colors.themeLight};
  padding: 5px 10px;
  margin: 10px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: ${BoxShadow};
  cursor: pointer;

  &:hover {
    background: ${Colors.themeDark};
    color: ${Colors.textWhite};
  }
`
