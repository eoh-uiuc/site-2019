import React from 'react';

import './styles.scss';

const Error = (message) => () => (
  <main className="error">
    <h1>{message}</h1>
  </main>
);

export default Error;