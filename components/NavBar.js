import Image from 'next/image'
import { useEffect, useId, useState } from 'react'
import useScroll from '../hook/useScroll'
import styles from '../styles/Navbar.module.scss'

export default function NavBar() {

	const color = useScroll(100)

	const arrayOptions = [
		{
			name: 'home',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/home.png',
		},
		{
			name: 'tecnologias',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/fire-element.png',
		},
		{
			name: 'contacto',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/contact-card.png',
		},
		{
			name: 'portafolio',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/briefcase.png'
		}
	]

	return (
		<nav className={
			color
				? styles.scroll + ' ' + styles.navbar__container
				: styles.navbar__container
		} >
			{arrayOptions.map(({ name, icon }) => (
				<a href="" className={styles.navbar__link} key={useId}>
					<Image src={icon} alt={name} width={30} height={30} />
				</a>
			))}
		</nav>
	)
}
