'use client';

import { useView } from '@/context/ViewContext';
import { cubicBezier, motion } from 'motion/react';

export default function Footer() {
	const { currentView, handleViewChange } = useView();

	const handleCarouselClick = () => {
		if (currentView !== 'carousel') {
			handleViewChange('carousel');
		}
	};

	const handleListClick = () => {
		if (currentView !== 'list') {
			handleViewChange('list');
		}
	};

	return (
		<motion.footer
			className='footer'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, ease: cubicBezier(0.745, 0.045, 0.255, 1) }}>
			<div className='container'>
				<div className='footer__actions'>
					<div className='footer__switch-layout-btns'>
						<motion.button
							onClick={handleCarouselClick}
							className={currentView === 'carousel' ? 'active' : ''}
							initial={{ y: '105%' }}
							animate={{
								y: 0,
								transition: {
									type: 'spring',
									stiffness: 400,
									damping: 85,
									mass: 1,
								},
							}}>
							Carousel,
						</motion.button>
						<motion.button
							onClick={handleListClick}
							className={currentView === 'list' ? 'active' : ''}
							initial={{ y: '105%' }}
							animate={{
								y: 0,
								transition: {
									type: 'spring',
									stiffness: 400,
									damping: 85,
									mass: 1,
								},
							}}>
							List
						</motion.button>
					</div>
					<motion.div
						className='footer__location'
						initial={{ y: '105%' }}
						animate={{
							y: 0,
							transition: {
								type: 'spring',
								stiffness: 400,
								damping: 85,
								mass: 1,
							},
						}}>
						London, UK 17:21
					</motion.div>
				</div>
				<motion.div
					className='footer__jumbo'
					initial={{ y: '105%' }}
					animate={{
						y: 0,
						transition: {
							type: 'spring',
							stiffness: 400,
							damping: 85,
							mass: 1,
						},
					}}>
					Ross<span>mason</span>
				</motion.div>
			</div>
		</motion.footer>
	);
}
