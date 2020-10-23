import styled from "styled-components";
import {
  space,
  layout,
  color,
  border,
  typography,
  shadow,
} from "styled-system";

const ContainerStyle = styled.div`
  ${space}
  ${layout}
`;

const PanelStyle = styled.div`
  ${color}
  ${border}
  ${space}
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const TextStyle = styled.span`
  ${typography}
  ${shadow}
  font-family: "Times New Roman", Times, serif;
`;

export { ContainerStyle, PanelStyle, TextStyle };
