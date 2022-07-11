import React, { memo } from "react";

import { StyledLink } from "./styled";

const AppLink = memo((props) => {
  return <StyledLink to={props.to}>{props.children}</StyledLink>;
});

AppLink.displayName = "AppLink";

export { AppLink };
