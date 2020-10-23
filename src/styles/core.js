import styled from "styled-components";
import { space, layout, color, border, typography } from "styled-system";

const ContainerStyle = styled.div`
  ${space}
  ${layout}
`;

const PanelStyle = styled.div`
  ${color}
  ${border}
  ${space}
  text-align: center;
`;

const TextStyle = styled.span`
  ${typography}
  font-family: "Times New Roman", Times, serif;
`;

export { ContainerStyle, PanelStyle, TextStyle };
