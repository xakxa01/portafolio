import Image from 'next/image'
import { useId } from 'react'
import useScroll from '../hook/useScroll'
import styles from '../styles/Navbar.module.scss'
import Link from "next/link"

export default function NavBar() {

	const scrollStart = useScroll(100)
	const scrollEnd = useScroll(1800)

	const arrayOptions = [
		{
			name: 'header',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/home.png',
		},
		{
			name: 'tecnologias',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/fire-element.png',
		},
		{
			name: 'portafolio',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/briefcase.png'
		},
		{
			name: 'contacto',
			icon: 'https://img.icons8.com/material-rounded/30/0099FF/contact-card.png',
		},
	]

	return (
		<nav className={styles.navbar__container} >
			<div
				className={styles.navbar__bar}
				style={
					scrollStart
						? { width: '100%' }
						: { width: '0%' }
				}></div>

			{arrayOptions.map(({ name, icon }) => (
				<div className={styles.navbar__link} key={useId}>
					<Link href={`#${name}`}  >
						<Image src={icon} alt={name} width={30} height={30} />
					</Link>
				</div>
			))}
		</nav>
	)
}
