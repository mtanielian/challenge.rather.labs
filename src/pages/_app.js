import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '../contexts/AuthContext'
import { CoursesProvider } from '../contexts/CoursesContext'
import '../styles/globals.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Challenge - Rather Labs</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CoursesProvider>
            <Component {...pageProps} />
          </CoursesProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}
