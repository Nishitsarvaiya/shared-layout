'use client';

import useWindow from '@/hooks/useWindow';
import { PROJECTS } from '@/lib/constants';
import { transitionFluid } from '@/lib/transitionHelpers';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Carousel() {
	const count = PROJECTS.length;
	const [itemWidth, setItemWidth] = useState(0);
	const { isMobile, windowDimensions } = useWindow();

	useEffect(() => {
		const onResize = () => {
			if (isMobile) {
				setItemWidth(windowDimensions.width / 3);
			} else {
				setItemWidth(windowDimensions.width / count);
			}
		};

		onResize();

		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [count, isMobile, windowDimensions]);

	return (
		<motion.section className='carousel__section'>
			<div className='carousel__wrapper'>
				<div className='carousel'>
					{PROJECTS.map((project, index) => {
						let isMiddle, isLeft, isRight;

						if (isMobile) {
							isLeft = index === 0;
							isMiddle = index === 1;
							isRight = index === 2;
						} else {
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

						let zIndex = 0;
						if (isMobile) {
							zIndex = index === 1 ? count + 1 : count - index;
						} else {
							zIndex = index === 3 ? count + 1 : count - index;
						}

						return (
							<motion.div
								className='carousel__item'
								key={project.id}
								layoutId={`project-${project.id}`}
								style={{
									zIndex,
								}}
								animate={{
									width: itemWidth,
									left: index * itemWidth + xOffset,
									transition: {
										...transitionFluid,
										delay: 0.05 * index,
									},
								}}
								exit={{
									width: itemWidth,
									y: '-50%',
									top: windowDimensions.height / 2 - (itemWidth * 340) / 270,
									left: windowDimensions.width / 2 - itemWidth / 2,
									scale: isMobile ? 2 : 1.5,
									transition: {
										...transitionFluid,
									},
								}}
							>
								<motion.div
									className='carousel__item-image'
									animate={{
										width: isMiddle ? `${middleSizeMultiplier * 100}%` : '100%',
										height: isMiddle ? `${middleSizeMultiplier * 100}%` : '100%',
										transition: {
											...transitionFluid,
											delay: 0.05 * index,
										},
									}}
									exit={{
										width: '100%',
										height: '100%',
										transition: {
											...transitionFluid,
										},
									}}
								>
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
										transition: { ...transitionFluid, duration: 0.5, delay: 0.5 },
									}}
									exit={{
										opacity: 0,
										transition: { ...transitionFluid, duration: 0.25 },
									}}
								>
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
