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

/** Style of a container */
const ContainerStyle = styled.div`
  ${layout}
  ${position}
  ${space}
  ${color}
`;
/** Style of a panel with boder and shadow*/
const PanelStyle = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  ${color}
  ${border}
  ${space}
  ${layout}
`;
/** Style of text h1*/
const TextStyle = styled.h1`
  text-align: center;

  ${shadow}
  ${space}
  ${typography}
`;

/** Style of display flex*/
const FlexStyle = styled.div`
  display: flex;
  ${flexbox}
  ${layout}
  ${space}
`;
/** Style of input*/
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
/** Style of Button*/
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
