import { PROJECTS } from '@/lib/constants';
import Image from 'next/image';

export default function Carousel() {
	return (
		<section className='carousel__section'>
			<div className='carousel__wrapper'>
				<div className='carousel'>
					{PROJECTS.map((project) => (
						<div className='carousel__item' data-item-active={project.id === 4} key={project.id}>
							<div className='carousel__item-image'>
								<div className='carousel__item-image-inner'>
									<Image
										src={project.image}
										alt={project.title}
										fill
										style={{ objectFit: 'cover', objectPosition: 'center' }}
									/>
								</div>
							</div>
							<div className='carousel__item-content'>
								<div className='number'>{project.id < 10 ? `0${project.id}` : project.id}.</div>
								<div className='title'>{project.title}</div>
								<div className='type'>[ {project.type} ]</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
