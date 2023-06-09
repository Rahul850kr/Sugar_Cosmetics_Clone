"use client";
import Navbar from '@/components/navbar/Navbar'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.homeContainer} >
    <Navbar/>
  </div>
  )
}
