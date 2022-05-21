import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Redes from "../components/Redes";
import Skills from "../components/Skills";
import useScroll from "../hook/useScroll";

export default function Home() {

  const typeTitles = [
    {
      name: 'home',
      icon: 'https://img.icons8.com/material-rounded/30/0099FF/home.png',
      scroll: useScroll(0),
    },
    {
      name: 'tecnologias',
      icon: 'https://img.icons8.com/material-rounded/30/0099FF/fire-element.png',
      scroll: useScroll(600)
    },
    {
      name: 'contacto',
      icon: 'https://img.icons8.com/material-rounded/30/0099FF/contact-card.png',
      scroll: useScroll(1200)
    },
    {
      name: 'portafolio',
      icon: 'https://img.icons8.com/material-rounded/30/0099FF/briefcase.png',
      scroll: useScroll(1800)
    }
  ]

  return (
    <>
      <Head>
        {typeTitles.map(({ name, icon, scroll }) => (
          scroll &&
          <>
            <link rel="shortcut icon" href={icon} />
            <title>{name}</title>
          </>
        ))}
      </Head>
      <Redes />
      <NavBar />
      <Header />
      <Skills />
    </>
  )
}
