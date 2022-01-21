import Head from 'next/head'
import Body from '../components/body'
import Header from '../components/header'

export default function Home() {
  let Cover = {
                Judul : "Selamat Datang Di Website Kami",
              }
  return (
    <div>
      <Header/>
      <Body Judul = {Cover.Judul}/>
    </div>
  )
}
