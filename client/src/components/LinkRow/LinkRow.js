import React, { memo } from "react";

import { StyledNav } from "./styled";
import { AppLink } from "../../components";

const LinkRow = memo((props) => {
  const links = props.children;
  const items = links.map((link) => {
    return (
      <li key={link.url}>
        {link.icon}
        <AppLink to={link.url}>{link.text}</AppLink>
      </li>
    );
  });

  return (
    <StyledNav>
      <ul>{items}</ul>
    </StyledNav>
  );
});

LinkRow.displayName = "LinkRow";

export { LinkRow };
