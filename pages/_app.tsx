import '../styles/globals.css'
import "../styles/text-sphere.css";
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { LazyMotion, domAnimation } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {
  return <LazyMotion features={domAnimation}><Layout><Component {...pageProps}></Component></Layout></LazyMotion>
}
