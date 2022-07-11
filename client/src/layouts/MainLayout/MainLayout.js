import React, { memo } from "react";
import PropTypes from "prop-types";

import { Container } from "./styled";
import { Header } from "../../components";

const MainLayout = memo((props) => {
  const { children } = props;
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
});

MainLayout.displayName = "MainLayout";

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MainLayout };
