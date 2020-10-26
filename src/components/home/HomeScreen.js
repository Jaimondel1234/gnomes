import React from "react";
import { PanelStyle, TextStyle } from "../../styles/core";

export const HomeScreen = () => {
  return (
    <div>
      <PanelStyle bg="#1E90FF" color="#ffff" borderRadius={10} p={5}>
        <TextStyle
          fontSize="60px"
          fontWeight="bold"
          textShadow="2px 2px 4px #000000"
        >
          Welcome to the Gnome Database
        </TextStyle>
      </PanelStyle>
    </div>
  );
};