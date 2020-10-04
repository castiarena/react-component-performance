import styled from 'styled-components';
import { ButtonProps, ButtonStyles } from '../Button';

const ButtonAnchor = styled.a<ButtonProps>`
  ${ButtonStyles};
  display: inline-block;
  text-decoration: none;
`;

export default ButtonAnchor;
