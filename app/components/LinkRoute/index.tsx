import styled, { css } from 'styled-components';
import { Link as LinkRouterDom, LinkProps as LinkPropsRouter } from 'react-router-dom';
import { LinkProps, LinkStyles } from '../Link';

const LinkRoute = styled(LinkRouterDom)<LinkProps>`
  ${LinkStyles};
`;

export default LinkRoute;
