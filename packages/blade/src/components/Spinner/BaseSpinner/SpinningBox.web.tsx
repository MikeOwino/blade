import styled, { css, keyframes } from 'styled-components';
import { motion as spinnerMotion } from './spinnerTokens';
import Box from '~components/Box';
import { getIn, makeMotionTime } from '~utils';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinningBox = styled(Box)(({ theme }) => {
  return css`
    padding: 1px;
    width: max-content;
    display: inline-flex;
    animation: ${rotate} ${makeMotionTime(getIn(theme.motion, spinnerMotion.duration))}
      ${getIn(theme.motion, spinnerMotion.easing)} infinite;
  `;
});

export { SpinningBox };