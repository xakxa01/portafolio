import styles from "../styles/skills.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import { useId } from "react";

export default function Skills() {
	const iconArray = [
		{
			img: "https://img.icons8.com/ios-glyphs/150/F5F5F5/html-5.png",
			name: "html"
		},
		{
			img: "https://img.icons8.com/ios-glyphs/150/F5F5F5/css3.png",
			name: "css"
		},
		{
			img: "https://img.icons8.com/ios-glyphs/150/F5F5F5/javascript.png",
			name: "javascript"
		},
		{
			img: "https://img.icons8.com/ios-filled/150/F5F5F5/sass.png",
			name: "sass"
		},
		{
			img: "https://img.icons8.com/ios-glyphs/150/F5F5F5/react.png",
			name: "react"
		},
		{
			img: "https://img.icons8.com/material-rounded/150/F5F5F5/redux.png",
			name: "redux"
		},
		{
			img: "/assets/svg/tailwind_icon_131947.svg",
			name: "tailwind"
		},
		{
			img: "/assets/svg/nextjs_icon_132160.svg",
			name: "nextjs"
		},
		{
			img: "https://img.icons8.com/small/150/F5F5F5/nodejs.png",
			name: "nodejs"
		},
		{
			img: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/150/f5f5f5/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png",
			name: "mongodb"
		},
		{
			img: "https://img.icons8.com/ios-filled/150/f5f5f5/git.png",
			name: "git"
		},
		{
			img: "https://img.icons8.com/ios-glyphs/150/f5f5f5/figma.png",
			name: "figma"
		},
		{
			img: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/150/f5f5f5/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-bold-tal-revivo.png",
			name: "firebase"
		}
	]

	return (
		<section className={styles.skillsContainer} id="tecnologias">
			<div className={styles.background}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path className={styles.wave} fill="#0099FF" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,74.7C672,43,768,21,864,37.3C960,53,1056,107,1152,138.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" >
						<animate
							attributeName="d"
							dur="10000ms"
							repeatCount="indefinite"
							values="
								M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,74.7C672,43,768,21,864,37.3C960,53,1056,107,1152,138.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

								M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,181.3C672,192,768,160,864,149.3C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

								M0,288L48,266.7C96,245,192,203,288,160C384,117,480,75,576,85.3C672,96,768,160,864,176C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;

								M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,197.3C672,171,768,117,864,85.3C960,53,1056,43,1152,37.3C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
								
								
								M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,74.7C672,43,768,21,864,37.3C960,53,1056,107,1152,138.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
								">

						</animate>
					</path>
				</svg>

				<h1 className={styles.title}>habilidade</h1>
				<main className={styles.skills}>
					<div className={styles.iconGridContainer}>
						{iconArray.map((icon) => (
							<span key={useId} className={styles.imgPrueba} data-aos="fade-up">
								<Image
									src={icon.img}
									alt={icon.name}
									width="150"
									height="150"
									draggable={false}
								/>
							</span>
						))}
					</div>
				</main>
			</div>
		</section>
	)
}
