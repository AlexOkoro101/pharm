import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "@mui/material";
import Theme from '../src/components/common/Theme';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import  drugsReducer  from '../src/components/features/drugs';

const store = configureStore({
  reducer: {
    drugs: drugsReducer,
  },
});


export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider> 
    </Provider>
  )


}

