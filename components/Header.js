import Image from "next/image"
import styles from "../styles/header.module.scss"
import ParallaxText from "./ParallaxText"

export default function Header() {
	return (
		<header className={styles.header} id="header">
			<ParallaxText />
			<main className={styles.mainContainer}>
				<div className={styles.centerContainer}>
					<div className={styles.logoContainer}>
						<div className={styles.logoImg}>
							<Image
								src="/assets/svg/mainLogo.svg"
								alt="logo"
								width={350}
								height={350}
								draggable={false}
							/>
						</div>
					</div>
					<div className={styles.textContainer}>
						<p className={styles.title} draggable={true}>
							&#60;DESARROL
						</p>
					</div>
				</div>
			</main>
		</header >
	)
}
