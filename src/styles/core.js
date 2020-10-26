import styled from "styled-components";
import {
  space,
  layout,
  color,
  border,
  typography,
  shadow,
  flexbox,
  position,
} from "styled-system";

const ContainerStyle = styled.div`
  ${layout}
  ${position}
  ${space}
  ${color}
`;

const PanelStyle = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  ${color}
  ${border}
  ${space}
  ${layout}
`;

const TextStyle = styled.h1`
  text-align: center;

  ${shadow}
  ${space}
  ${typography}
`;
const FlexStyle = styled.div`
  display: flex;
  ${flexbox}
  ${layout}
  ${space}
`;

const InputStyle = styled.input`
  height: 100;
  outline: none;
  width: 100%;

  ${layout}
  ${color}
  ${border}
  ${space}
  ${typography}
`;

const ButtonStyle = styled.button`
  background: ${(props) => (props.primary ? props.theme.color.main : "white")};
  border: ${(props) => `2px solid ${props.theme.color.main}`};
  border-radius: 7px;
  color: ${(props) => (props.primary ? "white" : props.theme.color.main)};
  width: 100%;

  ${typography}
  ${space}
  ${layout}
`;

export {
  ContainerStyle,
  PanelStyle,
  TextStyle,
  FlexStyle,
  InputStyle,
  ButtonStyle,
};
