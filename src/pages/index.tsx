import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '<memeify>/styles/Home.module.css'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div>
    
    <Link href="/about/about">
     My third page
    </Link>
  </div>
    
      
  )
}
