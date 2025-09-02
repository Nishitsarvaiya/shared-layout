import Footer from './Footer';
import Header from './Header';

export default function MainLayout({ children }) {
	return (
		<div className='site-wrapper'>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
