import logo from '../../../public/images/logo.svg';

import Image from 'next/image';
import Link from 'next/link';
import Supheader from './header-components/Supheader';
import Logo from '../logo/Logo';

function Header() {
	return (
		<div className='header'>
			<Supheader />
			<div className='container'>
				<div className='header__inner'>
					
					<div className='header__left'>
						<div className='header__logo'>
							<Logo />
							<div className='logo_info'>
								<span>Trading Servers</span>
								<span>
									<span>By</span> QuantVPS.com
								</span>
							</div>
						</div>
						<div className='header__nav'>
							{/* there should be dropdown menu */}
							<Link href={'#'}>
								<span>Pricing</span>
								<svg
									width='10'
									height='8'
									viewBox='0 0 14 8'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										className='caret'
										d='M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988'
										stroke='#474747'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</Link>

							<Link href={'#'}>Compatibility</Link>
							<Link href={'#'}>Features</Link>
							<Link href={'#'}>FAQ</Link>
							<Link href={'#'}>Support</Link>
						</div>
					</div>

					<div className='header__rigt'>
						<Link href={'#'}>Login</Link>
						<Link href={'#'} className='start__btn'>
							Start Now
							<span>
								<Image src={logo} alt='acme logo' />
								Deploy Server
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
