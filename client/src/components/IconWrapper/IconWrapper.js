import React, { memo } from "react";

import { StyledIcon } from "./styled";

const IconWrapper = memo((props) => {
  return <StyledIcon />;
});

IconWrapper.displayName = "IconWrapper";

export { IconWrapper };
