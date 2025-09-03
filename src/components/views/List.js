'use client';

import { PROJECTS } from '@/lib/constants';
import Image from 'next/image';
import { cubicBezier, motion } from 'motion/react';

export default function List() {
	return (
		<section className='list__section'>
			<div className='container'>
				<div className='list__wrapper'>
					<div className='list__images'>
						{PROJECTS.map((project, index) => (
							<motion.div
								className='list__image'
								key={project.id}
								layoutId={`project-${project.id}`}
								style={{
									zIndex: index === 3 ? PROJECTS.length + 1 : PROJECTS.length - index,
								}}
								exit={{
									opacity: 0,
									transition: {
										duration: 0.5,
										ease: cubicBezier(0.645, 0.045, 0.355, 1),
									},
								}}
								transition={{
									duration: 1.2,
									ease: [0.6, 0, 0.12, 1],
									delay: 0.06 * index,
								}}>
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
						))}
					</div>
					<div className='list__items'>
						{PROJECTS.map((project, index) => (
							<motion.div className='item' key={project.id}>
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
											duration: 0.5,
											delay: 0.026 * index + 0.75,
											ease: cubicBezier(0, 0, 0.5, 1),
										},
									}}
									exit={{
										opacity: 0,
										transition: {
											duration: 0.5,
											ease: cubicBezier(0, 0, 0.5, 1),
										},
									}}>
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
