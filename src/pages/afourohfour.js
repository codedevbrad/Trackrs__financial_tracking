import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles404 from '../css/404.module.css'

import '../css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function FourohFour() {
  return (
    <main className={styles404.main}>
        <p> this is a 404 page... </p>
    </main>
  )
}