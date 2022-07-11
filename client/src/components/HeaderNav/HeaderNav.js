import React, { memo } from "react";

import { StyledLink, StyledNav } from "./styled";

const HeaderNav = memo((props) => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/profile">Profile</StyledLink>
        </li>
        <li>
          <StyledLink to="/map">Maps</StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
});

HeaderNav.displayName = "HeaderNav";

export { HeaderNav };
