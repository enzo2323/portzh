import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Enzo | Portfolio </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Portfolio" />
        <p className="description">
          I am a UI designer specialized in intuitive and attractive interfaces. I transform ideas into unique digital experiences as a website creator. 🎥 Video editor, providing creativity and precision to bring your stories to life. 🤖 Expert in creating and configuring Discord bots, optimizing interaction and server management. ✏️ Passionate draftsman, capturing creativity in every stroke. My focus is to provide innovative and effective solutions that exceed my clients expectations, to unique design, web development, video editing, Discord bots and art. <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
