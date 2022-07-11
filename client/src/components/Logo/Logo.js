import React, { memo } from "react";

import { Container } from "./styled";

const Logo = memo((props) => {
  return <Container>TransitApp</Container>;
});

Logo.displayName = "Logo";

export { Logo };
