import Image from 'next/image'
import useScroll from '../hook/useScroll';
import styles from "../styles/redes.module.scss"

export default function Redes() {

	/* It's a custom hook that returns a boolean value. */
	const scroll = useScroll(1800)

	/* It's a ternary operator. It's a conditional operator that assigns a value to a variable based on a condition. */
	const condition = scroll ? "363c45" : "F5F5F5";

	/* It's a class that returns a function that returns a JSX element */
	class redesTemplate {
		constructor(link, icon, title, name) {
			return (
				<>
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className={styles.redes__link}
					>
						<Image
							src={icon}
							alt={title}
							width={24}
							height={24}
						/>

					</a>

				</>
			)
		}
	}

	/* It's creating a new object with the class redesTemplate. */
	const instagram = new redesTemplate(
		"https://www.instagram.com/xakxa01/",
		`https://img.icons8.com/material-rounded/24/${condition}/instagram-new.png`,
		"Instagram",
		"xakxa01"
	),
		github = new redesTemplate(
			"https://github.com/xakxa01",
			`https://img.icons8.com/material-rounded/24/${condition}/github.png`,
			"github",
			"xakxa01"
		),
		twitter = new redesTemplate(
			"https://twitter.com/xakxa01",
			`https://img.icons8.com/material-rounded/24/${condition}/twitter.png`,
			"twitter",
			"Xakxa01"
		),
		linkedin = new redesTemplate(
			"https://www.linkedin.com/in/carlos-xavier-g%C3%B3mez-barriento-931aa6223/",
			`https://img.icons8.com/material-rounded/24/${condition}/linkedin--v1.png`,
			"linkedin",
			"carlos xavier gomez barriento"
		);


	/* It's creating an array with the objects created with the class redesTemplate. */
	const redesArray = [instagram, github, twitter, linkedin];

	return (
		<aside className={styles.redes__container} data-aos="fade-right">
			{redesArray.map(redes => redes)}
		</aside>
	)
}
