import { Inter } from 'next/font/google'
import styles from '../css/page.module.css'
const inter = Inter({ subsets: ['latin'] })

import Posts from './posts'
import ArtistComponent from './albums'

export default async function Home() {

  return (
    <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">
          Hello, Next.js!
        </h1>
        <ArtistComponent />
        <p> hey there dude </p>
        <ArtistComponent />
        <Posts />
    </main>
  )
}