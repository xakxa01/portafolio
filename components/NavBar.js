import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'

export default function NavBar() {
	return (
		<nav className={styles.navbar__container}>
			<a href="" className={styles.navbar__link}>
				<Image src="https://img.icons8.com/material-rounded/30/0099FF/home.png" alt="Home" width={30} height={30} />
			</a>
			<a href="" className={styles.navbar__link}>
				<Image src="https://img.icons8.com/material-rounded/30/0099FF/briefcase.png" alt="Portafolio" width={30} height={30} />
			</a>
			<a href="" className={styles.navbar__link}>
				<Image src="https://img.icons8.com/material-rounded/30/0099FF/contact-card.png" alt="Contacto" width={30} height={30} />
			</a>
			<a href="" className={styles.navbar__link}>
				<Image src="https://img.icons8.com/material-rounded/30/0099FF/fire-element.png" alt="Tecnologias" width={30} height={30} />
			</a>
		</nav>
	)
}
