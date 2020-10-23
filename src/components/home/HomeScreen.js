import React from "react";
import { PanelStyle, TextStyle } from "../../styles/core";

export const HomeScreen = () => {
  return (
    <div>
      <PanelStyle bg="#1E90FF" color="#ffff" borderRadius={10} p={5}>
        <TextStyle fontSize="60px" fontWeight="bold">
          Welcome to the Gnome Database
        </TextStyle>
      </PanelStyle>
    </div>
  );
};
