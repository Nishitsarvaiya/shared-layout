'use client';

import { cubicBezier, motion } from 'motion/react';

export default function Header() {
	return (
		<motion.header
			className='header'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, ease: cubicBezier(0.745, 0.045, 0.255, 1) }}>
			<div className='container'>
				<div className='header__wrapper'>
					<motion.div
						className='header__brand'
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
						3D, Motion, Art direction
					</motion.div>
					<motion.nav
						className='header__nav'
						role='navigation'
						aria-label='Primary'
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
						<ul role='menubar'>
							<li role='menuitem'>Index</li>
							<li role='menuitem'>Patreon</li>
							<li role='menuitem'>Store</li>
							<li role='menuitem'>About</li>
							<li role='menuitem'>Lab</li>
						</ul>
					</motion.nav>
					<motion.div
						className='header__actions'
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
						Send me a message
					</motion.div>
					<motion.button
						className='header__nav-toggle-btn'
						aria-label='Open/Close Navigation'
						aria-expanded='false'
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
						Menu
					</motion.button>
				</div>
			</div>
		</motion.header>
	);
}
