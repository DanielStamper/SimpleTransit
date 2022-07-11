import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

const Body = memo((props) => {
  const { children } = props;
  return <Container>{children}</Container>;
});

Body.displayName = 'Body';

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Body };
