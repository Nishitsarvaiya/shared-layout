export default function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<div className='header__brand'>3D, Motion, Art direction</div>
					<nav className='header__nav' role='navigation' aria-label='Primary'>
						<ul role='menubar'>
							<li role='menuitem'>Index</li>
							<li role='menuitem'>Patreon</li>
							<li role='menuitem'>Store</li>
							<li role='menuitem'>About</li>
							<li role='menuitem'>Lab</li>
						</ul>
					</nav>
					<div className='header__actions'>Send me a message</div>
					<button className='header__nav-toggle-btn' aria-label='Open/Close Navigation' aria-expanded='false'>
						Menu
					</button>
				</div>
			</div>
		</header>
	);
}
