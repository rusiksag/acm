import play from '../../../../public/images/play.svg';
import Image from 'next/image';
import Link from 'next/link';

function Supheader() {
	return (
		<div className='supheader'>
			<div className='supheader__inner'>
				<Link href='#'>Restocked Today</Link>
				<Link href='#'>
					<span>Read more</span>
					<Image src={play} alt='play' width={8} />
				</Link>
			</div>
		</div>
	);
}

export default Supheader;
