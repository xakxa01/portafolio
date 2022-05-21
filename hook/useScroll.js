import { useState } from 'react'

export default function useScroll(number) {
	const [color, setColor] = useState(false)

	/**
	 * If the window is not undefined, and the window's scrollY is greater than or equal to the number,
	 * then set the color to true, otherwise set the color to false.
	 */
	const changeColor = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY >= number) {
				setColor(true)
			} else {
				setColor(false)
			}
		}
	}

	/* This is a check to see if the window is undefined. If it is, then it will not add the event
	listener. */
	if (typeof window !== "undefined") {
		window.addEventListener('scroll', changeColor)
	}

	return color
}
