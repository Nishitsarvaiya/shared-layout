import { Space_Grotesk } from 'next/font/google';
import '../styles/app.scss';
import MainLayout from '@/components/layout/MainLayout';

const spaceGrotesk = Space_Grotesk({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Shared Layout | Nishit Sarvaiya',
	description: 'A smooth and interactive shared layout animation built with Next.js and Framer Motion.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${spaceGrotesk.className} ${spaceGrotesk.variable}`}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
