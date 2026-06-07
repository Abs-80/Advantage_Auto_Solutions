import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

console.error = (msg, ...args) => {
  console.log('ERROR:', msg, ...args);
};

try {
  render(<App />);
} catch (e) {
  console.log('CAUGHT AN ERROR:', e);
}
