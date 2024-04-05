import SupFooter from '../supfooter/SupFooter';
import Image from 'next/image';
import Link from 'next/link';

import triangle from '../../../public/images/triangle.svg';
import github from '../../../public/images/github.svg';
import twitter from '../../../public/images/twitter.svg';
import go from '../../../public/images/go.svg';
import caret from '../../../public/images/caret.svg';

function Footer() {
	return (
		<div className='footer'>
			<SupFooter />
			<div className='footer__inner'>
				<nav>
					<div className='footer__copyright'>
						<div className='copyright'>
							<Image src={triangle} alt='triangle' />
							<span>&copy; 2024</span>
						</div>
						<div>
							<span></span>
							<span>All systems normal</span>
						</div>
						<div>
							<Link href='#'>
								<Image src={github} alt='guthub logo' />
							</Link>
							<Link href='#'>
								<Image src={twitter} alt='twitter' />
							</Link>
						</div>
					</div>
					<div className='nav-link'>
						<div>
							<h3>Client Menu</h3>
							<Link href='#'>Client Login</Link>
							<Link href='#'>Open a Support Ticket</Link>
							<Link href='#'>Manage Billing</Link>
							<Link href='#'>Manage Billing</Link>
							<Link href='#'>Manage Billing</Link>
						</div>
						<div>
							<Link href='#'>Manage Billing</Link>
							<Link href='#'>
								Manage Billing <Image src={go} alt='go' />
							</Link>
							<Link href='#'>Manage Billing</Link>
							<Link href='#'>Manage Billing</Link>
							<Link href='#'>Manage Billing</Link>
						</div>
					</div>
					<div className='nav-link'>
						<div>
							<h3>Resources</h3>
							<Link href='#'>FAQ</Link>
							<Link href='#'>Pricing</Link>
							<Link href='#'>Guides</Link>
							<Link href='#'>Integrations</Link>
							<Link href='#'>Templates</Link>
						</div>
						<div>
							<Link href='#'>Knolwedgebase</Link>
							<Link href='#'>Latency Check</Link>
							<Link href='#'>Help</Link>
							<Link href='#'>Data Center</Link>
						</div>
					</div>
					<div className='nav-link'>
						<div>
							<h3>Company</h3>
							<Link href='#'>About</Link>
							<Link href='#'>Careers</Link>
							<Link href='#'>
								Next.js Conf <Image src={go} alt='go' />
							</Link>
							<Link href='#'>Partners</Link>
							<Link href='#'>Privacy Policy</Link>
						</div>
						<div>
							<Link href='#'>Blog</Link>
							<Link href='#'>Contact Us</Link>
							<Link href='#'>Open Source</Link>
							<Link href='#'>Security</Link>
							<Link className='footer__dropdown' href='#'>
								Legal <Image src={caret} alt='caret' />
							</Link>
						</div>
					</div>
					<div className='footer__socials'>
						<h3>Socials</h3>
						<div className='theme'>
							<span className='theme-icon'>
								<svg
									width='16'
									height='17'
									viewBox='0 0 16 17'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clip-path='url(#clip0_5016_1785)'>
										<path
											className='hover'
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M5.82804 2.12304C3.30641 3.01676 1.5 5.42338 1.5 8.25144C1.5 11.8412 4.41015 14.7514 8 14.7514C10.8282 14.7514 13.2348 12.9449 14.1285 10.4231C13.3293 10.794 12.4386 11.0012 11.5 11.0012C8.04822 11.0012 5.25 8.20306 5.25 4.75128C5.25 3.81278 5.45718 2.92212 5.82804 2.12304ZM0 8.25144C0 4.03402 3.26298 0.579416 7.40265 0.273438L8.009 1.53015C7.22684 2.37735 6.75 3.50778 6.75 4.75128C6.75 7.37463 8.87665 9.50128 11.5 9.50128C12.7436 9.50128 13.8741 9.02438 14.7213 8.24213L15.978 8.84842C15.6722 12.9882 12.2175 16.2514 8 16.2514C3.58172 16.2514 0 12.6697 0 8.25144Z'
											fill='#666666'
										/>
									</g>
									<defs>
										<clipPath id='clip0_5016_1785'>
											<rect
												width='16'
												height='16'
												fill='white'
												transform='translate(0 0.25)'
											/>
										</clipPath>
									</defs>
								</svg>
							</span>
							<span className='theme-icon active-theme'>
								<svg
									width='16'
									height='17'
									viewBox='0 0 16 17'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clip-path='url(#clip0_5016_1789)'>
										<path
											className='hover'
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M8.75 1V0.25H7.25V1V2.25V3H8.75V2.25V1ZM11.182 4.00732L11.7123 3.47699L12.0659 3.12344L12.5962 2.59311L13.6569 3.65377L13.1265 4.1841L12.773 4.53765L12.2426 5.06798L11.182 4.00732ZM8 10.75C9.38071 10.75 10.5 9.63071 10.5 8.25C10.5 6.86929 9.38071 5.75 8 5.75C6.61929 5.75 5.5 6.86929 5.5 8.25C5.5 9.63071 6.61929 10.75 8 10.75ZM8 12.25C10.2091 12.25 12 10.4591 12 8.25C12 6.04086 10.2091 4.25 8 4.25C5.79086 4.25 4 6.04086 4 8.25C4 10.4591 5.79086 12.25 8 12.25ZM13.25 7.5H14H15.25H16V9H15.25H14H13.25V7.5ZM0.75 7.5H0V9H0.75H2H2.75V7.5H2H0.75ZM2.87348 12.3159L2.34315 12.8462L3.40381 13.9069L3.93414 13.3765L4.28769 13.023L4.81802 12.4926L3.75736 11.432L3.22703 11.9623L2.87348 12.3159ZM3.75735 5.06798L3.22702 4.53765L2.87347 4.1841L2.34314 3.65377L3.4038 2.59311L3.93413 3.12344L4.28768 3.47699L4.81802 4.00732L3.75735 5.06798ZM12.0659 13.3765L12.5962 13.9069L13.6569 12.8462L13.1265 12.3159L12.773 11.9623L12.2426 11.432L11.182 12.4926L11.7123 13.023L12.0659 13.3765ZM8.75 13.5V14.25V15.5V16.25H7.25V15.5V14.25V13.5H8.75Z'
											fill='#666'
										/>
									</g>
									<defs>
										<clipPath id='clip0_5016_1789'>
											<rect
												width='16'
												height='16'
												fill='white'
												transform='translate(0 0.25)'
											/>
										</clipPath>
									</defs>
								</svg>
							</span>
							<span className='theme-icon'>
								<svg
									width='16'
									height='17'
									viewBox='0 0 16 17'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clip-path='url(#clip0_5016_1793)'>
										<path
											className='hover'
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M0 2.25C0 1.69772 0.447715 1.25 1 1.25H15C15.5523 1.25 16 1.69772 16 2.25V10.75C16 11.3023 15.5523 11.75 15 11.75H8.75V14.75H9.75H10.5V16.25H9.75H6.25H5.5V14.75H6.25H7.25V11.75H1C0.447714 11.75 0 11.3023 0 10.75V2.25ZM1.5 2.75V10.25H14.5V2.75H1.5Z'
											fill='#666'
										/>
									</g>
									<defs>
										<clipPath id='clip0_5016_1793'>
											<rect
												width='16'
												height='16'
												fill='white'
												transform='translate(0 0.25)'
											/>
										</clipPath>
									</defs>
								</svg>
							</span>
						</div>
					</div>
				</nav>
				<p>
					Trading involves risk (including Futures and Forex) and is not
					suitable for every investor. An investor could potentially lose all or
					more than the initial investment. QuantVPS.com does not guarantee the
					profitability of trades executed on its systems. You are responsible
					for your financial decisions and we assume zero liability for money
					made or lost as a result of using our services. Only risk capital
					should be used for trading and only those with sufficient risk capital
					should consider trading.
				</p>
			</div>
		</div>
	);
}

export default Footer;
