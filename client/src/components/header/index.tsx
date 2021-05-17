import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const Header: FC = () => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export default Header;
