import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Redes from "../components/Redes";
import Skills from "../components/Skills";
import useScroll from "../hook/useScroll";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Portafolio from "../components/Portafolio";
import Contacto from "../components/Contacto";

export default function Main() {

	useEffect(() => {
		AOS.init()
	}, []);

	const scrollPosition = 600;

	const typeTitles = [
		{
			name: 'home',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/home.png',
			scroll: useScroll(-1),
		},
		{
			name: 'habilidades',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/fire-element.png',
			scroll: useScroll(scrollPosition)
		},
		{
			name: 'portafolio',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/briefcase.png',
			scroll: useScroll(scrollPosition * 2)
		},
		{
			name: 'contacto',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/contact-card.png',
			scroll: useScroll(scrollPosition * 3)
		},
	]

	return (
		<>
			<Head>
				{typeTitles.map(({ name, icon, scroll }) => (
					scroll
					&& (
						<>
							{scroll && <link rel="shortcut icon" href={icon} />}
							<title>{name}</title>
						</>
					)
				))}
			</Head>

			<Redes />
			<NavBar />
			<Header />
			<Skills />
			<Portafolio />
			<Contacto />
		</>
	)
}
