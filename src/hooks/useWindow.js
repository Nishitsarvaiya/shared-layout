'use client';

import { useEffect, useState } from 'react';

export default function useWindow() {
	const [isMobile, setIsMobile] = useState(false);
	const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const onResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			setWindowDimensions({ width, height });

			if (width < 992) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		};

		onResize();

		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return { isMobile, windowDimensions };
}
