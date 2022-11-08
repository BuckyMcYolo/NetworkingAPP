import "../styles/globals.css"
import Layout from "../components/eventComponents/layout/layout"
import Head from "next/head"
import { NotificationContextProvider } from "../store/notification-context"

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Networking App</title>
          <meta
            name="description"
            content="Find a lot of networking events that allow you to meet interesting people"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <Component {...pageProps}></Component>
      </Layout>
    </NotificationContextProvider>
  )
}

export default MyApp
