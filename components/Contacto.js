import React from 'react'
import styles from '../styles/contacto.module.scss'
import Image from 'next/image'

export default function Contacto() {
	return (
		<section className={styles.contactoContainer}>
			<div className={styles.backgrounds}>
				<div className={styles.blob}>
					<Image src="/assets/images/blob.svg" alt="blob" width={487} height={384} />
				</div>
				<div className={styles.logo}>
					<Image src="/assets/images/gigant logo.svg" alt="logo" width={665} height={585} />
				</div>
			</div>
			<h1>
				<i>conta</i><i>ctame</i>
			</h1>
			<form>
				<input type="text" />
				<textarea cols="30" rows="10"></textarea>
				<button type="submit">Enviar</button>
			</form>
		</section>
	)
}
