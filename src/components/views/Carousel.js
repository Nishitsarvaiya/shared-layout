'use client';

import { PROJECTS } from '@/lib/constants';
import { cubicBezier, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Carousel() {
	const count = PROJECTS.length;
	const [itemWidth, setItemWidth] = useState(0);
	const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const onResize = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			setWindowDimensions({ width, height });

			if (width < 992) {
				// Mobile: show only 3 items
				setIsMobile(true);
				setItemWidth(width / 3);
			} else {
				// Desktop: show all items
				setIsMobile(false);
				setItemWidth(width / count);
			}
		};

		onResize();

		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [count]);

	// Filter projects for mobile view

	return (
		<motion.section className='carousel__section'>
			<div className='carousel__wrapper'>
				<div className='carousel'>
					{PROJECTS.map((project, index) => {
						let isMiddle, isLeft, isRight;

						if (isMobile) {
							// Mobile: 3 items - left (0), middle (1), right (2)
							isLeft = index === 0;
							isMiddle = index === 1;
							isRight = index === 2;
						} else {
							// Desktop: all items with original logic
							isMiddle = index === Math.floor(count / 2);
							isLeft = index < Math.floor(count / 2);
							isRight = index > Math.floor(count / 2);
						}

						const middleSizeMultiplier = 1.75;
						const offsetMultiplier = (middleSizeMultiplier - 1) / 2;

						let xOffset = 0;
						if (isLeft) {
							xOffset = -itemWidth * offsetMultiplier;
						} else if (isRight) {
							xOffset = itemWidth * offsetMultiplier;
						} else if (isMiddle) {
							xOffset = -itemWidth * offsetMultiplier;
						}

						return (
							<motion.div
								className='carousel__item'
								key={project.id}
								layoutId={`project-${project.id}`}
								style={{
									zIndex: index === 3 ? count + 1 : count - index,
								}}
								animate={{
									width: itemWidth,
									left: index * itemWidth + xOffset,
									transition: {
										duration: 1.2,
										ease: [0.6, 0, 0.12, 1],
										delay: 0.08 * index,
									},
								}}
								exit={{
									width: itemWidth,
									// top: '50%',
									// left: '50%',
									// x: '-50%',
									y: '-50%',
									top: windowDimensions.height / 2 - (itemWidth * 340) / 270,
									left: windowDimensions.width / 2 - itemWidth / 2,
									scale: isMobile ? 2 : middleSizeMultiplier,
									transition: {
										duration: 1.2,
										ease: [0.6, 0, 0.12, 1],
									},
								}}>
								<motion.div
									className='carousel__item-image'
									animate={{
										width: isMiddle ? `${middleSizeMultiplier * 100}%` : '100%',
										height: isMiddle ? `${middleSizeMultiplier * 100}%` : '100%',
										transition: {
											duration: 1.2,
											ease: [0.6, 0, 0.12, 1],
											delay: 0.08 * index,
										},
									}}
									exit={{
										width: '100%',
										height: '100%',
										transition: {
											duration: 1.2,
											ease: [0.6, 0, 0.12, 1],
										},
									}}>
									<div className='carousel__item-image-inner'>
										<Image
											src={project.image}
											alt={project.title}
											fill
											style={{ objectFit: 'cover', objectPosition: 'center' }}
										/>
									</div>
								</motion.div>
								<motion.div
									className='carousel__item-content'
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.5, ease: cubicBezier(0, 0, 0.5, 1), delay: 1.25 },
									}}
									exit={{
										opacity: 0,
										transition: { duration: 0.25, ease: cubicBezier(0, 0, 0.5, 1) },
									}}>
									<div className='number'>{project.id < 10 ? `0${project.id}` : project.id}.</div>
									<div className='title'>{project.title}</div>
									<div className='type'>[ {project.type} ]</div>
								</motion.div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.section>
	);
}
