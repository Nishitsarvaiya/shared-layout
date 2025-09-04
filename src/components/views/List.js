'use client';

import { PROJECTS } from '@/lib/constants';
import Image from 'next/image';
import { cubicBezier, motion } from 'motion/react';
import { transitionFluid } from '@/lib/transitionHelpers';
import useWindow from '@/hooks/useWindow';
import { useState } from 'react';

export default function List() {
	const { isMobile } = useWindow();
	const count = PROJECTS.length;
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const activeIndex = isMobile ? 1 : 3;

	return (
		<section className='list__section'>
			<div className='container'>
				<div className='list__wrapper'>
					<div className='list__images'>
						{PROJECTS.map((project, index) => {
							let zIndex = 0;
							if (isMobile) {
								zIndex = index === 1 ? count + 1 : count - index;
							} else {
								zIndex = index === 3 ? count + 1 : count - index;
							}

							return (
								<motion.div
									className='list__image'
									key={project.id}
									layoutId={`project-${project.id}`}
									data-item-active={index === activeIndex}
									style={{
										zIndex: hoveredIndex === index ? count + 100 : zIndex,
									}}
									exit={{
										opacity: 0,
										transition: {
											duration: 0.5,
											ease: cubicBezier(0.645, 0.045, 0.355, 1),
										},
									}}
									transition={{
										...transitionFluid,
										delay: 0.06 * index,
									}}
								>
									<div className='image'>
										<div className='image-inner'>
											<Image
												src={project.image}
												alt={project.title}
												fill
												style={{ objectFit: 'cover', objectPosition: 'center' }}
											/>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
					<div className='list__items'>
						{PROJECTS.map((project, index) => (
							<motion.div
								className='item'
								key={project.id}
								data-item-active={index === activeIndex}
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
								animate={{
									opacity: index === activeIndex ? 1 : 0.25,
									transition: {
										...transitionFluid,
									},
								}}
								whileHover={{
									opacity: 1,
								}}
							>
								<motion.span
									className='item-inner'
									initial={{
										y: '105%',
										opacity: 0,
									}}
									animate={{
										y: 0,
										opacity: 1,
										transition: {
											...transitionFluid,
											delay: 0.026 * index + 0.5,
										},
									}}
									exit={{
										opacity: 0,
										transition: {
											...transitionFluid,
										},
									}}
								>
									{project.title}
								</motion.span>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
