import Image from 'next/image'
import useScroll from '../hook/useScroll';
import styles from "../styles/redes.module.scss"

export default function Redes() {

	/* It's a custom hook that returns a boolean value. */
	const scroll = useScroll(1800)

	/* It's a ternary operator. It's a conditional operator that assigns a value to a variable based on a condition. */
	const condition = scroll ? "363c45" : "F5F5F5";

	/* It's creating an array with the objects created with the class redesTemplate. */
	const redesArray = [
		{
			socialMedia: "instagram",
			link: "https://www.instagram.com/xakxa01",
			icon: `https://img.icons8.com/material-rounded/24/${condition}/instagram-new.png`,
			name: "xakxa01"
		},
		{
			socialMedia: "github",
			link: "https://www.github.com/xakxa01",
			icon: `https://img.icons8.com/material-rounded/24/${condition}/github.png`,
			name: "xakxa01"
		},
		{
			socialMedia: "linkedin",
			link: "https://www.linkedin.com/in/carlos-xavier-g%C3%B3mez-barriento-931aa6223/",
			icon: `https://img.icons8.com/material-rounded/24/${condition}/linkedin--v1.png`,
			name: "carlos xavier gomez barriento"
		},
		{
			socialMedia: "twitter",
			link: "https://www.twitter.com/xakxa01",
			icon: `https://img.icons8.com/material-rounded/24/${condition}/twitter.png`,
			name: "Xakxa01"
		},
	];

	return (
		<aside className={styles.redes__container} data-aos="fade-right">
			{redesArray.map(redes => (
				<>
					<a
						className={styles.redes__link}
						href={redes.link}
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src={redes.icon}
							alt={redes.title}
							width={24}
							height={24}
						/>
					</a>
				</>
			))}
		</aside>
	)
}
