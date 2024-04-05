'use client';

import data from '../../public/data.json';

import Link from 'next/link';
import Image from 'next/image';

import logo from '../../public/images/logo.svg';
import yena from '../../public/images/yena.svg';
import btc from '../../public/images/btc.svg';
import rec from '../../public/images/rec.svg';
import chart from '../../public/images/chart.svg';
import speed from '../../public/images/speed.svg';
import arrow from '../../public/images/arrow.svg';
import time from '../../public/images/time.svg';
import cursor from '../../public/images/cursor.svg';
import screen from '../../public/images/screen.svg';
import headphone from '../../public/images/headphone.svg';
import location from '../../public/images/location.svg';
import fingerprint from '../../public/images/fingerprint.svg';
import spark from '../../public/images/spark.svg';
import latency from '../../public/images/latency.svg';
import tradeStation from '../../public/images/trade-station.svg';
import ibkr from '../../public/images/ibkr.svg';
import ninjaTrade from '../../public/images/ninja-trade.svg';
import metatrader from '../../public/images/metatrader.svg';
import lock from '../../public/images/lock.svg';
import desktop from '../../public/images/desktop.svg';
import tablet from '../../public/images/tablet.svg';
import phone from '../../public/images/phone.svg';
import reload from '../../public/images/reload.svg';
import power from '../../public/images/power.svg';
import download from '../../public/images/download.svg';
import upload from '../../public/images/upload.svg';
import user from '../../public/images/user.svg';
import cloud from '../../public/images/cloud.svg';
import loading from '../../public/images/loading.svg';
import dashboard from '../../public/images/dashboard.png';
import tradingCloud from '../../public/images/trading-cloud.png';
import metaSquare from '../../public/images/meta-square.svg';
import tradeSquare from '../../public/images/trade-square.svg';
import binanceSquare from '../../public/images/binance-square.svg';
import ninjaSquare from '../../public/images/ninja-square.svg';
// import tradestationLine from '../../public/images/tradestationLine.svg';
// import ibkrLine from '../../public/images/ibkrLine.svg';
// import ninjaLine from '../../public/images/ninjaLine.svg';
// import metaLine from '../../public/images/metaLine.svg';

import TechnologiesDropdown from '@/components/technologiesDropdown/TechnologiesDropdown';
import Accordion from '@/components/accordion/Accordion';

export default function Home() {
	const pricingData = data.cloudPricing;
	function changeActiveBroker(n) {
		const brokersBtns = document.querySelectorAll('.trade-platform');

		brokersBtns.forEach((btn, index) => {
			btn.classList.remove('active-trade-platform');

			if (n === index) {
				btn.classList.add('active-trade-platform');
			}
		});
	}

	return (
		<main>
			<section className='welcome'>
				<div className='container'>
					<div className='welcome__inner'>
						<div className='promotion'>
							<span className='promotion__new'>🎉New</span>
							<span className='promotion__text'>
								Get 2 months free with annual plans!
							</span>
							<Link className='promotion__btn' href='#'>
								Claim Promotion
								<svg
									width='10'
									height='8'
									viewBox='0 0 14 8'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988'
										stroke='#171717'
										stroke-width='1.5'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</Link>
						</div>

						<div className='hero'>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>

							<div className='empty-box'></div>
							<div className='hero__content'>
								<h1 className='hero__title'>
									<span>Quant VPS is the trading Cloud.</span> Trade, backtest,
									<br></br>and scale on our fast, low latency servers.
								</h1>
								<div className='hero__btns'>
									<Link className='hero__btn--dark' href={'#'}>
										<Image src={logo} alt='logo' />
										Deploy Server
									</Link>
									<Link className='hero__btn--light' href={'#'}>
										Learn more
									</Link>
								</div>
							</div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>

							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>

							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>

							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
							<div className='empty-box'></div>
						</div>
					</div>
				</div>
			</section>

			<section className='services'>
				<div className='container'>
					<div className='services__inner'>
						<h3>Our Servers:</h3>
						<Link className='servers__btn' href={'#'}>
							<Image src={yena} alt='yena' />
							Our Services
						</Link>
						<Link className='servers__btn' href={'#'}>
							<Image src={btc} alt='yena' />
							Our Services
						</Link>
						<Link className='servers__btn' href={'#'}>
							<Image src={rec} alt='yena' />
							Our Services
						</Link>
						<Link className='servers__btn' href={'#'}>
							<Image src={chart} alt='yena' />
							Our Services
						</Link>
						<Link className='servers__btn' href={'#'}>
							<Image src={speed} alt='yena' />
							Our Services
						</Link>
					</div>
				</div>
			</section>

			<section className='pricing'>
				<div className='container'>
					<div className='pricing__inner'>
						<h2 className='pricing__title'>VPS Pricing</h2>
						<div className='pricing__content'>
							<div className='pricing__content_left'>
								<div className='pricing-promotion'>
									<Link href={'#'}>Get 2 months free (switch to yearly)</Link>
									<Link href={'#'}>
										Compare
										<Image src={arrow} alt='arrow right' />
									</Link>
								</div>
								<div className='pricing__variants'>
									<label htmlFor='radio1' className='pricing__variant'>
										<div>
											<span className='price'>$47</span> <span> /mo</span>
										</div>
										<div className='pricing__info'>
											<div>8 vCPU</div>
											<div>
												8 GB <span>DDR4 RAM</span>
											</div>
											<div>
												160 GB <span>NVMe Storage</span>
											</div>
										</div>
										<input type='radio' name='pricing' id='radio1' />
										<div className='pricing__check'></div>
									</label>

									<label htmlFor='radio2' className='pricing__variant'>
										<div>
											<span className='price'>$47</span> <span> /mo</span>
										</div>
										<div className='pricing__info'>
											<div>8 vCPU</div>
											<div>
												16 GB <span>DDR4 RAM</span>
											</div>
											<div>
												160 GB <span>NVMe Storage</span>
											</div>
										</div>
										<input type='radio' name='pricing' id='radio2' />
										<div className='pricing__check'></div>
									</label>

									<label htmlFor='radio3' className='pricing__variant'>
										<div>
											<span className='price'>$97</span> <span> /mo</span>
										</div>
										<div className='pricing__info'>
											<div>12 vCPU</div>
											<div>
												32 GB <span>DDR4 RAM</span>
											</div>
											<div>
												320 GB <span>NVMe Storage</span>
											</div>
										</div>
										<input type='radio' name='pricing' id='radio3' />
										<div className='pricing__check'></div>
									</label>

									<label htmlFor='radio4' className='pricing__variant'>
										<div>
											<span className='price'>$147</span> <span> /mo</span>
										</div>
										<div className='pricing__info'>
											<div>24 vCPU</div>
											<div>
												64 GB <span>DDR4 RAM</span>
											</div>
											<div>
												500 GB <span>NVMe Storage</span>
											</div>
										</div>
										<input type='radio' name='pricing' id='radio4' />
										<div className='pricing__check'></div>
									</label>
								</div>
							</div>
							<div className='pricing__content_right'>
								<div className='pricing__logo'>
									<div className='logo_img_wrapper'>
										<Image src={logo} alt='acme logo' />
									</div>
									<div className='logo_info'>
										<span>Virtual Private Servers (VPS)</span>
										<span>
											<span>By</span> QuantVPS.com
										</span>
									</div>
								</div>
								<div className='pricing__total_info'>
									<div>
										<Image src={time} alt='time' />
										AMD Ryzen Processors
									</div>
									<div>
										<Image src={speed} alt='time' />
										1-10 Gbps Network
									</div>
									<div>
										<Image src={cursor} alt='time' />
										24/7 access to control panel
									</div>
									<div>
										<Image src={screen} alt='time' />
										Windows or Linux
									</div>
									<div>
										<Image src={headphone} alt='time' />
										24/7 support
									</div>
									<div>
										<Image src={location} alt='time' />
										London & Tokyo data centers
									</div>
									<div>
										<Image src={fingerprint} alt='time' />
										Military grade encryption
									</div>
									<div>
										<Image src={spark} alt='time' />
										Instant activation
									</div>
								</div>
								<Link className='pricing__content_right_btn' href={'#'}>
									Deploy Server{' '}
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
										<path
											fill='#fff'
											d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'
										/>
									</svg>
								</Link>
							</div>
						</div>
						<p className='pricing__info'>
							*All pricing is in USD and renews automatically unless cancelled.{' '}
						</p>
					</div>
				</div>
			</section>

			<section className='traders'>
				<div className='container'>
					<div className='traders__inner'>
						<div className='traders__top'>
							<div className='traders__top-left'>
								<div>
									<span>
										<Image src={latency} alt='latency' />
									</span>
									<p>Low Latency to Brokers</p>
								</div>
								<h3>
									NinjaTrader, MetaTrader, and more.
									<span>QuantVPS is optimized for all brokers.</span>
								</h3>
							</div>
							<div className='traders__top-right'>
								<Link href={'#'}>See Features</Link>
							</div>
						</div>

						<div className='traders__body'>
							<div className='traders__features'>
								<div className='trade-station'>
									<span>
										<Image src={tradeStation} alt='tradeStation logo' />
									</span>
									<span>TradeStation</span>
								</div>

								<div className='ibkr'>
									<span>
										<Image src={ibkr} alt='ibkr logo' />
									</span>
									<span>IBKR</span>
								</div>
								<div className='ninja'>
									<span>
										<Image src={ninjaTrade} alt='ninja trade logo' />
									</span>
									<span>Ninja Trader NTB</span>
								</div>
								<div className='meta'>
									<span>
										<Image src={metatrader} alt='tradeStation logo' />
									</span>
									<span>Meta Trader MT4/5</span>
								</div>
							</div>

							<div className='traders__hub'>
								<div className='traders__logo'>
									<span>
										<Image src={logo} alt='quantum logo' />
									</span>
								</div>
								<div className='hub1-line'>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</div>
								<div className='traders__hub-right'>
									<div className='traders__logo'>
										<span>
											<Image src={logo} alt='quantum logo' />
										</span>
									</div>

									<div className='locks'>
										<span className='lock1'>
											<Image src={lock} alt='lock' />
										</span>
										<span className='lock2'>
											<Image src={lock} alt='lock' />
										</span>
										<span className='lock3'>
											<Image src={lock} alt='lock' />
										</span>
									</div>
								</div>
							</div>

							<div className='traders__devices'>
								<span className='desktop'>
									<Image src={desktop} alt='desktop' />
								</span>
								<span className='tablet'>
									<Image src={tablet} alt='tablet' />
								</span>
								<span className='phone'>
									<Image src={phone} alt='phone' />
								</span>
							</div>
						</div>

						<div className='traders__bottom'>
							<p>
								▲ connect to your server from any device, anywhere in the world
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='advantages'>
				<div className='container'>
					<div className='advantages__inner'>
						<div className='advantages__left'>
							<div className='advantages__suptitle'>
								<span>
									<Image src={reload} alt='reload' />
								</span>
								<p>Automatic Backups</p>
							</div>
							<h3>
								Go ahead, trade.
								<span>
									{' '}
									Your server will automatically backup every 72hours.
								</span>
							</h3>
							<div className='advantages__chart'>
								<div>Secure Storage</div>
								<span>
									<Image src={reload} alt='reload' />
								</span>
								<div>Your Server</div>
							</div>
						</div>
						<div className='advantages__right'>
							<div className='advantages__suptitle'>
								<span>
									<Image src={power} alt='reload' />
								</span>
								<p>Reliability</p>
							</div>
							<h3>
								Go ahead, trade.
								<span>
									{' '}
									Your server will automatically backup every 72hours.
								</span>
							</h3>
							<div className='advantages__performance-card'>
								<h4>
									Monitor <span>Performance</span>
								</h4>

								<div className='performance__speed'>4,505.14 MB/s</div>

								<div className='change__performance'>
									<div>
										<span>1Gbps+</span>
										<span>
											Download MB/s <Image src={download} alt='download' />
										</span>
									</div>
									<div>
										<span>1Gbps+</span>
										<span>
											Upload MB/s <Image src={upload} alt='upload' />
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='deploy'>
				<div className='container'>
					<div className='deploy__inner'>
						<div className='deploy__left'>
							<div className='deploy__info'>
								<p>
									<span className='black'>Reeady to profit?</span> Start
									journaling your trades.
								</p>
								<p>
									Check out VPS Lite or <span className='blue'>VPS Pro</span> or{' '}
									<span className='purple'>VPS Max</span>
								</p>
							</div>
							<div className='deploy__left_btns'>
								<Link className='deploy__btn--dark' href={'#'}>
									Deploy Now
								</Link>
								<Link className='deploy__btn--light' href={'#'}>
									View Dedicated Servers
								</Link>
							</div>
						</div>
						<div className='deploy__right'>
							<p>
								<span>Trial acme</span> to see how our performance and ease of
								use through our Control Panel.
							</p>
							<Link href={'#'}>Money Back Guarantee</Link>
						</div>
					</div>
				</div>
			</section>

			<section className='hosting'>
				<div className='hosting__inner'>
					<h2>Everything you need for trading server hosting</h2>
					<p>Stop worrying about the infrastructure. We'll handle that.</p>
					<p>
						Focus on trading while your algorithmic trading systems run 24/7.
					</p>

					<div className='hosting__features'>
						<div className='encrypt-network'>
							<div>
								<h4>Encrypted Networks</h4>
								<p>
									Ultra-secure networking, authentication, and control panel to
									ensure full security of your trading systems.
								</p>
							</div>
							<div className='user-details'>
								<span className='user-id'>Yb9WrnC5nFrvvz</span>
								<Image src={user} alt='user' />
								<span className='username'>QuantVPS User</span>
								<span className='user-email'>trader@⁠example.com</span>
							</div>
						</div>

						<div className='multiple-broker'>
							<Image src={cloud} alt='cloud' />
							<div className='features__content'>
								<h4>Multiple Broker Support</h4>
								<p>
									Seamlessly trade through every broker. Our servers are
									optimized for software like Ninja Trader and MetaTrader
								</p>
							</div>
						</div>

						<div className='remote-reboot'>
							<div className='features__content'>
								<h4>Remote Reboot</h4>
								<p>
									Gain full control of your server by leveraging QuantVPS's
									control panel to reinstall and reboot, anytime.
								</p>
							</div>
							<div className='reboot-btn'>
								<Image src={loading} alt='loading' />
								<span>Rebooting</span>
								<span>00:09</span>
							</div>
						</div>

						<div className='datacenter'>
							<div>
								<h4>Datacenter Locations</h4>
								<p>
									Location within Equinix datacenters in Chicago and New York
								</p>
							</div>
						</div>

						<div className='userdata'>
							<div>
								<h4>Anytime, anywhere</h4>
								<p>
									Login to your server through the ultra-secure portal to ensure
									that you never miss a trade.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='dashboard'>
				<div className='dashboard__inner'>
					<h2>
						Full access to your server via our control panel.{' '}
						<span>Reboot, rebuild, and deploy 24/7. No support tickets.</span>
					</h2>
					<Image src={dashboard} alt='dashboar screen' />
				</div>
			</section>

			<section className='trading-cloud'>
				<div className='trading-cloud__inner'>
					<div className='trading-cloud__content'>
						<h2>QuantVPS is the Trading Cloud</h2>
						<p>Trade, backtest, and scale your trading</p>
						<p>
							systems on our <span>fast, low latency servers.</span>
						</p>
						<button>
							Deploy Now{' '}
							<svg
								width='8'
								height='14'
								viewBox='0 0 8 14'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M7.37629 6.31076C7.56376 6.49829 7.66907 6.7526 7.66907 7.01776C7.66907 7.28293 7.56376 7.53723 7.37629 7.72476L1.71929 13.3817C1.62704 13.4772 1.5167 13.5534 1.39469 13.6058C1.27269 13.6582 1.14147 13.6858 1.00869 13.687C0.87591 13.6881 0.744231 13.6628 0.621335 13.6125C0.498438 13.5623 0.386786 13.488 0.292893 13.3941C0.199 13.3002 0.124747 13.1886 0.0744663 13.0657C0.0241854 12.9428 -0.00111606 12.8111 3.77571e-05 12.6783C0.00119157 12.5455 0.0287779 12.4143 0.0811869 12.2923C0.133596 12.1703 0.209778 12.06 0.305288 11.9677L5.25529 7.01776L0.305288 2.06776C0.12313 1.87916 0.0223355 1.62656 0.0246139 1.36436C0.0268924 1.10216 0.132061 0.851348 0.317469 0.66594C0.502877 0.480532 0.75369 0.375363 1.01589 0.373085C1.27808 0.370806 1.53069 0.471601 1.71929 0.653759L7.37629 6.31076Z'
									fill='white'
								/>
							</svg>
						</button>
					</div>
					<div className='img-wrapper'>
						<Image src={tradingCloud} alt='coolers' />
					</div>
				</div>
			</section>

			<section className='features'>
				<div className='features__inner'>
					<div className='features__top'>
						<Link href={'#'}>Features & more</Link>
						<h2>Professional traders trust QuantVPS</h2>
						<p>
							ChartVPS is the go-to solution for professional and retail traders
							who require robust, 24/7 operation of trading platforms. From
							manual trade execution to the deployment of complex automated
							trading algorithms, our platform is optimized for performance.
							With our ultra-low, 0-1ms latency networks and state-of-the-art
							server infrastructure, we ensure seamless, high-speed trading
							operations for all clients.
						</p>
					</div>
					<div className='features__grid'>
						<div className='broker-compatibility'>
							<h4>Broker Compatibility</h4>
							<p>
								Download your desired trading software in minutes and start
								trading.
							</p>

							<div className='broker-compatibility-grid'>
								<div></div>
								<div>
									<Image src={metaSquare} alt='meta logo' />
								</div>
								<div></div>
								<div>
									<Image src={ninjaSquare} alt='ninja logo' />
								</div>
								<div className='mid-square'></div>
								<div>
									<Image src={tradeSquare} alt='trade logo' />
								</div>
								<div></div>
								<div>
									<Image src={binanceSquare} alt='binance logo' />
								</div>
								<div></div>
							</div>

							<div className='broker-compatibility-btns'>
								{[
									'TradeStation',
									'NinjaTrader',
									'Thinkorswim',
									'Thinkorswim',
								].map((el, index) => (
									<span
										onClick={() => changeActiveBroker(index)}
										className={`trade-platform ${
											index === 0 && 'active-trade-platform'
										}`}>
										{el}
									</span>
								))}
							</div>
						</div>

						<div className='easy-access'>
							<div className='easy-access__dropdown'>
								<div className='dropdown__btn'>
									<svg
										width='18'
										height='15'
										viewBox='0 0 18 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M9.6574 0.318297C9.6268 0.239697 9.5583 0.182027 9.4757 0.165167C9.393 0.148317 9.3075 0.174567 9.2485 0.234887L4.81436 4.77091C4.73192 4.85525 4.72018 4.98593 4.78626 5.08361C4.85235 5.18129 4.97803 5.21901 5.08697 5.17385L8.90239 3.59262L12.8926 9.97516C12.9606 10.0839 13.1 10.123 13.2146 10.0655C13.3291 10.008 13.3811 9.87286 13.3345 9.75346L9.6574 0.318297ZM7.23968 6.49213C7.3038 6.38169 7.27369 6.24062 7.17006 6.16599C7.06644 6.09135 6.92309 6.1075 6.83866 6.20331L0.812007 13.0425C0.754157 13.1081 0.735137 13.1994 0.761937 13.2827C0.788737 13.366 0.857397 13.429 0.942677 13.4486L6.96933 14.8338C7.08396 14.8602 7.20134 14.8025 7.25051 14.6956C7.29968 14.5888 7.26713 14.4621 7.17256 14.3922L4.01038 12.0543L7.23968 6.49213ZM15.2431 8.11806C15.204 8.00306 15.0874 7.93336 14.9675 7.95316C14.8477 7.97306 14.7598 8.07666 14.7598 8.19816V12.0954L7.40437 12.2394C7.27597 12.2419 7.17068 12.3419 7.16156 12.47C7.15245 12.5981 7.24252 12.712 7.36927 12.7327L16.9617 14.2968C17.0478 14.3109 17.135 14.2787 17.1913 14.2121C17.2476 14.1455 17.2649 14.0543 17.2367 13.9717L15.2431 8.11806Z'
											fill='#000'
											stroke='white'
											stroke-width='0.2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
									<span>QuantVPS.com</span>
									<svg
										width='14'
										height='8'
										viewBox='0 0 14 8'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M12.5527 6.87988L6.77637 1.11988L1.00001 6.87988'
											stroke='#9394A1'
											stroke-width='1.5'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</div>

								<div></div>
							</div>
							<div className='easy-access__content'>
								<h4>Easy access, from any device</h4>
								<p>
									You can securely and remotely access your server from your
									desktop computer, mobile phone, or tablet.
								</p>
							</div>
						</div>

						<div className='technologies'>
							<div>
								<h4>Cutting-Edge Technology</h4>
								<p>
									Built for trading global equities, futures, forex, and crypto
									on platforms like TradeStation and NinjaTtrader.
								</p>
							</div>
							<TechnologiesDropdown />
						</div>

						<div className='deploy-server'>
							<Link href={'#'}>
								<svg
									width='18'
									height='15'
									viewBox='0 0 18 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M9.6574 0.318297C9.6268 0.239697 9.5583 0.182027 9.4757 0.165167C9.393 0.148317 9.3075 0.174567 9.2485 0.234887L4.81436 4.77091C4.73192 4.85525 4.72018 4.98593 4.78626 5.08361C4.85235 5.18129 4.97803 5.21901 5.08697 5.17385L8.90239 3.59262L12.8926 9.97516C12.9606 10.0839 13.1 10.123 13.2146 10.0655C13.3291 10.008 13.3811 9.87286 13.3345 9.75346L9.6574 0.318297ZM7.23968 6.49213C7.3038 6.38169 7.27369 6.24062 7.17006 6.16599C7.06644 6.09135 6.92309 6.1075 6.83866 6.20331L0.812007 13.0425C0.754157 13.1081 0.735137 13.1994 0.761937 13.2827C0.788737 13.366 0.857397 13.429 0.942677 13.4486L6.96933 14.8338C7.08396 14.8602 7.20134 14.8025 7.25051 14.6956C7.29968 14.5888 7.26713 14.4621 7.17256 14.3922L4.01038 12.0543L7.23968 6.49213ZM15.2431 8.11806C15.204 8.00306 15.0874 7.93336 14.9675 7.95316C14.8477 7.97306 14.7598 8.07666 14.7598 8.19816V12.0954L7.40437 12.2394C7.27597 12.2419 7.17068 12.3419 7.16156 12.47C7.15245 12.5981 7.24252 12.712 7.36927 12.7327L16.9617 14.2968C17.0478 14.3109 17.135 14.2787 17.1913 14.2121C17.2476 14.1455 17.2649 14.0543 17.2367 13.9717L15.2431 8.11806Z'
										fill='#fff'
										stroke='white'
										stroke-width='0.2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								Deploy Server
							</Link>
							<div className='deploy-server__content'>
								<h4>Deploy Servers Instantly</h4>
								<p>
									Launch new servers at the click of a button. Your server is
									activated within minutes, 24/7.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='faq'>
				<div className='faq__title'>FAQ</div>
				<div className='faq__content'>
					{[
						{
							label: 'What is a Trading VPS, and how does it benefit traders?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label:
								'Why is low latency important in trading, and how does your VPS ensure it?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label: 'Can I access my trading VPS from any device or location?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label:
								'How secure is a trading VPS, and what measures are in place to protect data?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label:
								'What makes your trading VPS different from regular VPS services?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label: 'How do I choose the right VPS plan for my trading needs?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label:
								'What kind of support can I expect if I face issues with my trading VPS?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label:
								'Are there any restrictions on trading platforms or brokers that can be used with your VPS?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label: 'How easy is it to upgrade or downgrade my VPS plan?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label:
								'How quickly can I get my trading VPS set up and start trading?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label: 'Can I run multiple trading accounts from a single VPS?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label:
								'Do you offer backups for my VPS, and how can I access them?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label:
								'How does the performance of your trading VPS compare to running a trading platform on my own computer?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
						{
							label: 'What happens to my open trades if the VPS goes down?',
							body: "Are you passionate about the future of technology? Do you dream of contributing to the growth of IT in Uzbekistan, while also forging valuable connections and developing as a professional? If you are ambitious, energetic, and want to make a substantial impact on people's lives through IT, then we have an exciting opportunity for you!",
						},
					].map((el) => (
						<Accordion data={el} />
					))}
				</div>
			</section>

			<section className='cloud-pricing'>
				<div className='cloud-pricing__inner'>
					<div className='cloud-pricing__promotion'>
						<span>🎉</span>
						<span>For Futures, Forex, Equity, and Crypto Trading</span>
						<span>
							<Image src={arrow} />
						</span>
					</div>

					<h2>
						On-demand VPS, Dedicated, and GPU Cloud Pricing.<br></br>
						<span>Access high-powered servers. </span>
						<span>Instantly</span>.
					</h2>

					<table className='cloud-pricing__table'>
						<thead className='cloud-pricing__table_head'>
							<tr>
								<th>Plan</th>
								<th>vCPUs</th>
								<th>RAM</th>
								<th>Storage</th>
								<th>Setup Time</th>
								<th>Price</th>
								<th></th>
							</tr>
						</thead>
						<tbody className='cloud-pricing__table_body'>
							{pricingData.map((el) => (
								<tr key={el.id}>
									<td className={`tariff ${el.isAvailable && 'available'}`}>
										<span className={`${el.tariff} bullet`}></span>
										<span>{el.tariff}</span>
										<span>{el.type}</span>
									</td>
									<td className={`${el.isAvailable && 'available'}`}>
										{el.vcpus}
									</td>
									<td className={`${el.isAvailable && 'available'}`}>
										{el.ram} GB DDR4
									</td>
									<td className={`${el.isAvailable && 'available'}`}>
										{el.storage} TB NVMe
									</td>
									<td className={`${el.isAvailable && 'available'}`}>
										{el.setupTime}
									</td>
									<td className={`${el.isAvailable && 'available'}`}>
										{el.price} / mo
									</td>
									<td className={`${el.isAvailable && 'available'}`}>
										{el.isAvailable ? (
											<Link className='deploy-btn' href='#'>
												Deploy
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 448 512'>
													<path
														fill='#fff'
														d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'
													/>
												</svg>
											</Link>
										) : (
											<Link className='unavailable-btn' href='#'>
												Unavailable
											</Link>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<p className='cloud-pricing__bottom'>
						<span className='black'>Ready to trade?</span>
						<span> Start deploying with our </span>
						<span className='pink'>VPS Lite</span> or
						<span className='purple'> VPS Pro</span> and
						<span className='blue'> VPS Max</span>
					</p>
				</div>
			</section>
		</main>
	);
}
