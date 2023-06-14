import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { themex } from '../chakra/themex'
import Layout  from '../compo/Layout/Layout'
import { RecoilRoot } from 'recoil'
import Link from 'next/link'



export default function App({ Component, pageProps }: AppProps) {

  return (

  
      
    <RecoilRoot>  
    <ChakraProvider theme={themex}>
  <Layout>

  {/* <Component {...pageProps} /> */}
  </Layout>
  
  </ChakraProvider>
  </RecoilRoot>
  
  )
}
