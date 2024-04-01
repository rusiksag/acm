import logo from '../../../public/images/logo.svg';
import Image from 'next/image';

function Logo() {
	return (
		<div className='logo_img_wrapper'>
			<Image src={logo} alt='acme logo' />
		</div>
	);
}

export default Logo;
