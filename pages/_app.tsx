import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '../src/theme'
import Head from 'next/head'
import { Meta } from '../src/components/Meta'
import 'react-quill/dist/quill.snow.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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
          <Component {...pageProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </>
  )
}
