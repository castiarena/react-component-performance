import React, { FC } from 'react';
import styled from 'styled-components';
import Box from '../Box';
import media from '../Layout/MediaQueries';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  ${media.mobile} {
    width: 100%;  
    top: 0;
    transform: translate(-50%, 0);
    position: fixed;
  }
`;

const FixedStyled = styled.div`
  position: relative;
  opacity: .9;
`;

const FixedBox: FC = ({ children }) => (
    <Wrapper>
        <FixedStyled>
            <Box selected>
                {children}
            </Box>
        </FixedStyled>
    </Wrapper>
);

export default FixedBox;
