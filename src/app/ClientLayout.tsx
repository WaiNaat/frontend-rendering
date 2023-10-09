'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'style/Global.style';
import theme from 'style/theme.style';

const queryClient = new QueryClient();

const ClientLayout = (props: React.PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>{children}</RecoilRoot>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default ClientLayout;
