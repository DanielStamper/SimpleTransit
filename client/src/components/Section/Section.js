import React, { memo } from "react";
// import React, { Children, memo } from "react";
// import PropTypes from "prop-types";
import { Container, BoxCustom } from "./styled";
import { Text, TextHeader, LinkRow } from "../../components";
//       description=''
//       links={[{ icon: ..., text: ..., url: ... }, ...]}
//       bgColor={...}

/* 
  Section is intended to be a generic component that spans the page and contains content. 
  Some work is needed to make this component more generic. 
  It will probably end up being a wrapper around mui components.
*/
const Section = memo((props) => {
  return (
    <Container>
      <BoxCustom inputColor={props.inputColor}>
        <Text
          textContent={props.eyebrow.textContent}
          textSize={props.eyebrow.textSize}
          textColor={props.eyebrow.textColor}
        />
        <TextHeader>{props.header}</TextHeader>
        <LinkRow>{props.links}</LinkRow>
      </BoxCustom>
    </Container>
  );
});

Section.displayName = "Section";

// Section.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export { Section };
