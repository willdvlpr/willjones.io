import React from "react";
import { StyledFooter, StyledCopyrightNotification } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledCopyrightNotification>
        Copyright © {new Date().getFullYear()} Will Jones. All rights reserved.
      </StyledCopyrightNotification>
    </StyledFooter>
  );
};
