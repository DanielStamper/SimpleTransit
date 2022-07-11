import React, { memo } from 'react';

import { Logo } from '../Logo';
import { HeaderNav } from '../HeaderNav';

import { Container } from './styled';

const Header = memo((props) => {
  return (
    <Container>
      <Logo />
      <HeaderNav />
    </Container>
  );
});

Header.displayName = 'Header';

export { Header };
