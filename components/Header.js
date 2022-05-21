import Head from "next/head"
import Image from "next/image"
import styles from "../styles/header.module.scss"
import ParallaxText from "./ParallaxText"

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<ParallaxText />
				<main className={styles.mainContainer}>
					<div className={styles.centerContainer}>
						<div className={styles.textContainer}>
							<p className={styles.nameContainer}>
								<span>
									Carlos <span className={styles.blue}>xavier</span>
								</span>
								<span>
									gómez <span className={styles.blue}>barriento</span>
								</span>
							</p>
							<p className={styles.title}>
								{`<DESARROLLADOR
								WEB />`}
							</p>
						</div>
						<div className={styles.logo}>
							<svg
								className={styles.blob}
								viewBox="0 0 800 500"
								preserveAspectRatio="none"
								xmlns="http://www.w3.org/2000/svg"
								width="100%"
								id="blobSvg">
								<g transform="translate(167.27891540527344, -9.636116027832031)">
									<defs>
										<linearGradient
											id="paint0_linear_2_124"
											x1="299.149"
											y1="0.0905151"
											x2="299.149"
											y2="605.401"
											gradientUnits="userSpaceOnUse">
											<stop stopColor="#0099FF" />
											<stop offset="1" stopColor="#08D9D6" />
										</linearGradient>

									</defs>
									<path
										className="blob"
										d="M394.5,349Q364,448,268.5,416Q173,384,92.5,317Q12,250,73.5,150.5Q135,51,237.5,73Q340,95,382.5,172.5Q425,250,394.5,349Z"
										fill="url(#paint0_linear_2_124)">
										{/* <animate
										attributeName="d"
										dur="5000ms"
										repeatCount="indefinite"
										values="
										M394.5,349Q364,448,268.5,416Q173,384,92.5,317Q12,250,73.5,150.5Q135,51,237.5,73Q340,95,382.5,172.5Q425,250,394.5,349Z;
										
										M413,320.5Q331,391,237.5,412Q144,433,114,341.5Q84,250,123,173.5Q162,97,263.5,74Q365,51,430,150.5Q495,250,413,320.5Z;

										M387,342.5Q357,435,249,436.5Q141,438,71,344Q1,250,64.5,144Q128,38,250,38.5Q372,39,394.5,144.5Q417,250,387,342.5Z;
										
										M394.5,349Q364,448,268.5,416Q173,384,92.5,317Q12,250,73.5,150.5Q135,51,237.5,73Q340,95,382.5,172.5Q425,250,394.5,349Z;" ></animate> */}
									</path>
								</g>
							</svg>
							<div className={styles.logoImg}>
								<Image src="/assets/svg/mainLogo.svg" alt="logo" width={340} height={300} />
							</div>
						</div>
					</div>
				</main>
			</header >
		</>
	)
}
