import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Analytics } from '@vercel/analytics/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

// Initialize Inter font with latin subset
const inter = Inter({ subsets: ['latin'] });

// Define the App component. This is the main component that wraps all the pages in your application.
// It receives the Component (the current page) and pageProps (the props of the current page) as props.
function App({ Component, pageProps }: AppProps<{}>) {
  // Initialize a new QueryClient for react-query
  const queryClient = new QueryClient();

  return (
    <div className={inter.className}>
      {/* The Toaster component from react-hot-toast provides a context for toast notifications */}
      <Toaster />

      {/* The QueryClientProvider component from react-query provides a context for server state management */}
      <QueryClientProvider client={queryClient}>
        {/* Render the current page and pass it its props */}
        <Component {...pageProps} />

        {/* The Analytics component from @vercel/analytics/react provides analytics for your application */}
        <Analytics />
      </QueryClientProvider>
    </div>
  );
}

// Export the App component wrapped with appWithTranslation from next-i18next.
// This provides internationalization (i18n) for your application.
export default appWithTranslation(App);
