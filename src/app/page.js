'use client';
import Carousel from '@/components/views/Carousel';
import List from '@/components/views/List';
import { useView } from '@/context/ViewContext';
import { AnimatePresence } from 'motion/react';

export default function Home() {
	const { currentView } = useView();
	return (
		<main>
			<AnimatePresence mode='wait'>{currentView === 'carousel' ? <Carousel key='carousel' /> : <List key='list' />}</AnimatePresence>
		</main>
	);
}
