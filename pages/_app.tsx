/* eslint-disable */
// _app.tsx
import '@styles/globals.css';

import { FC, useState } from 'react';
import { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ReactQueryDevtools initialIsOpen={false} />
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    );
};

export default MyApp;
