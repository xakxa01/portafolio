import React from 'react'
import styles from '../styles/contacto.module.scss'
import Image from 'next/image'

export default function Contacto() {
	return (
		<section className={styles.contactoContainer} id="contacto">
			<div className={styles.backgrounds}>
				<div className={styles.blob}>
					<Image
						src="/assets/images/blob.svg"
						alt="blob"
						width={348}
						height={274}
						draggable={false}
					/>
				</div>
				<div className={styles.logo}>
					<Image
						src="/assets/images/gigant logo.svg"
						alt="logo"
						width={578}
						height={508.79}
						draggable={false}
					/>
				</div>
			</div>
			<main className={styles.formContainer}>
				<h1 clsName={styles.formTitulo}>
					<i className={styles.letter1}>conta</i><i className={styles.letter2}>ctame</i>
				</h1>
				<form className={styles.form}>
					<input
						type="text"
						className={styles.emailInput}
						placeholder="tu email"
					/>
					<textarea
						cols="30"
						rows="5"
						className={styles.messageInput}
						placeholder="tu mensaje"
					></textarea>
					<button
						type="submit"
						className={styles.btnSubmit}
					>
						Enviar
					</button>
				</form>
			</main>
		</section>
	)
}
