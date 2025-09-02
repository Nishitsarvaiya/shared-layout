import { PROJECTS } from '@/lib/constants';
import Image from 'next/image';

export default function List() {
	return (
		<section className='list__section'>
			<div className='container'>
				<div className='list__wrapper'>
					<div className='list__images'>
						{PROJECTS.map((project) => (
							<div className='image' key={project.id}>
								<div className='image-inner'>
									<Image
										src={project.image}
										alt={project.title}
										fill
										style={{ objectFit: 'cover', objectPosition: 'center' }}
									/>
								</div>
							</div>
						))}
					</div>
					<div className='list__items'>
						{PROJECTS.map((project) => (
							<div className='item' key={project.id}>
								{project.title}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
