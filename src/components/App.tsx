import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '~/components/auth/AuthProvider';
import Router from '~/components/router/Router';

export default function App() {
  return (
    <div data-theme="lofi">
      <HelmetProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </HelmetProvider>
    </div>
  );
}
