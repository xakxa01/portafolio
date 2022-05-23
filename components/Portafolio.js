import styles from "../styles/portafolio.module.scss"
import Slider from "react-slick";
import { useId } from "react";
import Image from 'next/image';


export default function Portafolio() {

	const keyId = useId();

	const sliderConfig = {
		dots: true,
		Infinity: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		customPaging: () => (
			<div className={styles.dot}></div>
		),
	}

	const portfolioObjectArray = [
		{
			name: "utesa",
			watchCodeLink: "https://github.com/xakxa01/utesa-remasterizacion-",
			hostingLink: "https://utesa-remasterizacion.vercel.app/",
			description: "esta es una pagina web de una universidad de la zona norte de la republica dominicana",
			image: "/assets/images/utesa.png",
		},
		{
			name: "utesa",
			watchCodeLink: "https://github.com/xakxa01/utesa-remasterizacion-",
			hostingLink: "https://utesa-remasterizacion.vercel.app/",
			description: "esta es una pagina web de una universidad de la zona norte de la republica dominicana",
			image: "/assets/images/utesa.png",
		}, {
			name: "utesa",
			watchCodeLink: "https://github.com/xakxa01/utesa-remasterizacion-",
			hostingLink: "https://utesa-remasterizacion.vercel.app/",
			description: "esta es una pagina web de una universidad de la zona norte de la republica dominicana",
			image: "/assets/images/utesa.png",
		}, {
			name: "utesa",
			watchCodeLink: "https://github.com/xakxa01/utesa-remasterizacion-",
			hostingLink: "https://utesa-remasterizacion.vercel.app/",
			description: "esta es una pagina web de una universidad de la zona norte de la republica dominicana",
			image: "/assets/images/utesa.png",
		},
	]

	return (
		<section className={styles.portafolioContainer}>

			<h1 className={styles.portafolioTitle} data-aos="fade-right">&#60;portafolio &#47;&#62;</h1>

			<Slider {...sliderConfig} className={styles.slider}>
				{portfolioObjectArray.map((portfolioObject) => (
					<div className={styles.portafolioItem} key={keyId}>
						<div className={styles.portafolioItemImage} data-aos="zoom-in">
							<Image src={portfolioObject.image} alt={portfolioObject.name} width={500} height={500} />
						</div>
						<div className={styles.portafolioItemInfo} data-aos="zoom-in-left">
							<h3 className={styles.portafolioItemTitle}>{portfolioObject.name}</h3>
							<p className={styles.portfolioItemDescription}>{portfolioObject.description}</p>
							<div className={styles.portafolioItemLinks}>
								<a
									className={styles.hostingLink}
									href={portfolioObject.hostingLink}
									target="_blank"
									rel="noopener noreferrer">
									ver sitio
								</a>
								<a
									className={styles.watchCodeLink}
									href={portfolioObject.watchCodeLink}
									target="_blank"
									rel="noopener noreferrer">
									<Image
										src="https://img.icons8.com/material-rounded/35/F5F5F5/github.png"
										alt="github icon"
										width={35}
										height={35}
									/>
									<i className={styles.watchCodeText}> ver codigo </i>
								</a>
							</div>
						</div>
					</div >
				))
				}
			</Slider >
		</section >
	)
}
