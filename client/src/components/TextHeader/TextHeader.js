import React, { memo } from "react";
// import PropTypes from "prop-types";

import { Text } from "./styled";

const TextHeader = memo((props) => {
  const { children } = props;
  return <Text>{children}</Text>;
});

TextHeader.displayName = "TextHeader";

export { TextHeader };
