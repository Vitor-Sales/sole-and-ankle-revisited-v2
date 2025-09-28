import styled from 'styled-components';
import { BREAKPOINTS } from '../../constants';

function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size;
}
function getMobileHeight({ axis, mobileSize }) {
  return axis === 'horizontal' ? 1 : mobileSize;
}
function getMobileWidth({ axis, mobileSize }) {
  return axis === 'vertical' ? 1 : mobileSize;
}

const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;

  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    width: ${getMobileWidth}px;
    min-width: ${getMobileWidth}px;
    height: ${getMobileHeight}px;
    min-height: ${getMobileHeight}px;
  }
`;

export default Spacer;
