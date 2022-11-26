import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '../theme'
import Head from 'next/head'
import { Meta } from '../components/Meta'
import 'react-quill/dist/quill.snow.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CookiesProvider } from 'react-cookie'
import { store } from 'src/redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Meta
        title={'Locy - Decentralized Blog'}
        description={'A platform for blockchain data analysis'}
        // imageUrl={}
        url={'https://trava.center'}
        keywords={'trava center, trava'}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CookiesProvider>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </CookiesProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  )
}
