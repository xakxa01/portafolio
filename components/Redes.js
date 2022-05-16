import Image from 'next/image'
import React from 'react'
import styles from "../styles/redes.module.scss"

export default function Redes() {
	return (
		<aside className={styles.redes__container}>
			<a
				href="https://www.instagram.com/xakxa01/"
				target="_blank"
				rel="noreferrer"
				className={styles.redes__link} >
				<Image src="https://img.icons8.com/material-rounded/24/F5F5F5/instagram-new.png" alt="" width={24} height={24} />
			</a>
			<a
				href="https://github.com/xakxa01"
				target="_blank"
				rel="noreferrer"
				className={styles.redes__link} >
				<Image src="https://img.icons8.com/material-rounded/24/F5F5F5/github.png" alt="" width={24} height={24} />
			</a>
			<a
				href="https://www.linkedin.com/in/carlos-xavier-g%C3%B3mez-barriento-931aa6223/"
				target="_blank"
				rel="noreferrer"
				className={styles.redes__link} >
				<Image src="https://img.icons8.com/material-rounded/24/F5F5F5/linkedin--v1.png" alt="" width={24} height={24} />
			</a>
			<a
				href="https://twitter.com/Xakxa01"
				target="_blank"
				rel="noreferrer"
				className={styles.redes__link} >
				<Image src="https://img.icons8.com/material-rounded/24/F5F5F5/twitter.png" alt="" width={24} height={24} />
			</a>
		</aside>
	)
}
