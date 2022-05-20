import styles from "../styles/skills.module.scss"
import Slider from "react-slick";
import Image from "next/image"

export default function Skills() {
	return (
		<>
			<section className={styles.skillsContainer}>

				<div className={styles.background}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path fill="#0099FF" fillOpacity="1" d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,74.7C672,43,768,21,864,37.3C960,53,1056,107,1152,138.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" >
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
					<main className={styles.skills}>
						<Slider>
							<section className={styles.iconGridContainer}>
								<Image src="https://img.icons8.com/ios-glyphs/150/F5F5F5/html-5.png" alt="html" width="150" height="150" />
								<Image src="https://img.icons8.com/ios-glyphs/150/F5F5F5/css3.png" alt="html" width="150" height="150" />
								<Image src="https://img.icons8.com/ios-glyphs/150/F5F5F5/javascript.png" alt="html" width="150" height="150" />
								<Image src="https://img.icons8.com/ios-filled/150/F5F5F5/sass.png" alt="html" width="150" height="150" />
								<Image src="https://img.icons8.com/ios-glyphs/150/F5F5F5/react.png" alt="html" width="150" height="150" />
								<Image src="https://img.icons8.com/material-rounded/150/F5F5F5/redux.png" alt="html" width="150" height="150" />
								<Image src="/assets/svg/tailwind_icon_131947.svg" alt="html" width="150" height="150" />
								<Image src="/assets/svg/nextjs_icon_132160.svg" alt="html" width="150" height="150" />
								<Image src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/150/F5F5F5/external-bootstrap-a-free-and-open-source-css-framework-logo-bold-tal-revivo.png" alt="html" width="150" height="150" />
							</section>
						</Slider>
					</main>
				</div>

			</section>
		</>
	)
}
