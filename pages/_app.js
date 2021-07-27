import { Provider, useSession } from 'next-auth/client'
import Layout from '../layout/layout'
import '../styles/globals.css';



function MyApp({ Component, pageProps }) {

  return (
    <Provider session={pageProps.session} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    
  )
}



export default MyApp
