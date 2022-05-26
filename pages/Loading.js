import Image from 'next/image'
import styles from '../styles/loading.module.scss'

export default function Loading({ loading }) {
	return (
		<div className={styles.loadingContainer}>
			<div className={styles.loading}>
				<Image
					src="/assets/svg/black.svg"
					alt="girador"
					width={100}
					height={100} />
			</div>
		</div>
	)
}
