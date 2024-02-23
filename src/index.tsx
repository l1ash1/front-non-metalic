import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@/store/store';

import App from './App';

import './index.scss';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<div>...Loading</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);
