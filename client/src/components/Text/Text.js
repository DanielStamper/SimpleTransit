import React, { memo } from "react";
// import PropTypes from "prop-types";

import { Paragraph } from "./styled";

const Text = memo((props) => {
  return (
    <Paragraph size={props.textSize} textColor={props.textColor}>
      {props.textContent}
    </Paragraph>
  );
});

Text.displayName = "Text";

// Text.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export { Text };
