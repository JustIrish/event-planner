import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import { mediaQueries } from 'styles/mediaQueries';

export const StyledIconDown = styled(RiArrowDownSLine)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: ${p => (p.$opened ? 'rotate(180deg)' : null)};
`;

export const TimePickerContainer = styled.div`
  position: absolute;
  bottom: -18px;
  left: 0;
  transform: translateY(100%);
  z-index: 25;

  display: flex;
  align-items: center;

  width: 100%;
  height: 160px;
  padding: 0px 16px;
  /* gap: 8px; */

  border-radius: 8px;
  background: #fff;

  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  color: #aca7c3;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

  overflow: hidden;
`;

export const VisionLine = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -26px;
    left: 0;

    width: 208px;
    height: 48px;
    border-top: 1px solid #aca7c3;

    border-bottom: 1px solid #aca7c3;

    ${mediaQueries('tablet')`
    width: 276px;`};

    ${mediaQueries('desktop')`
      width: 340px;`};
  }

  &::before {
    content: ':';
    position: absolute;
    top: -13px;
    left: 55px;
    color: #3f3f3f;
  }
`;

export const Selected = styled.div`
  color: ${p => p.$isActive && '#3f3f3f'};
  font-weight: ${p => p.$isActive && '600'};
`;
