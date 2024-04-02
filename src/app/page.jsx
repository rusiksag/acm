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
import part from '../../public/images/part.svg';

export default function Home() {
	return (
		<main>
			<section className='home__welcome'>
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
			</section>

			<section className='services'>
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
			</section>

			<section className='pricing'>
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
			</section>

			<section className='traders'>
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
						<div>
							<span>
								<Image src={tradeStation} alt='tradeStation logo' />
							</span>
							<span>TradeStation</span>
						</div>

						<div>
							<span>
								<Image src={ibkr} alt='ibkr logo' />
							</span>
							<span>IBKR</span>
						</div>
						<div>
							<span>
								<Image src={ninjaTrade} alt='ninja trade logo' />
							</span>
							<span>Ninja Trader NTB</span>
						</div>
						<div>
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

						<div className='traders__hub-right'>
							<div className='traders__logo'>
								<span>
									<Image src={logo} alt='quantum logo' />
								</span>
							</div>

							<div className='locks'>
								<span>
									<Image src={lock} alt='lock' />
								</span>
								<span>
									<Image src={lock} alt='lock' />
								</span>
								<span>
									<Image src={lock} alt='lock' />
								</span>
							</div>
						</div>
					</div>

					<div className='traders__devices'>
						<span>
							<Image src={desktop} alt='desktop' />
						</span>
						<span>
							<Image src={tablet} alt='tablet' />
						</span>
						<span>
							<Image src={phone} alt='phone' />
						</span>
					</div>
				</div>

				<div className='traders__bottom'>
					<p>▲ connect to your server from any device, anywhere in the world</p>
				</div>
			</section>

			<section className='advantages'>
				<div className='advantages__left'>
					<div className='advantages__suptitle'>
						<span>
							<Image src={reload} alt='reload' />
						</span>
						<p>Automatic Backups</p>
					</div>
					<h3>
						Go ahead, trade.
						<span> Your server will automatically backup every 72hours.</span>
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
						<span> Your server will automatically backup every 72hours.</span>
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
			</section>

			<section className='deploy'>
				<div className='deploy__left'>
					<div className='deploy__info'>
						<p>
							<span className='black'>Reeady to profit?</span> Start journaling
							your trades.
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
						<span>Trial acme</span> to see how our performance and ease of use
						through our Control Panel.
					</p>
					<Link href={'#'}>Money Back Guarantee</Link>
				</div>
			</section>

			<section className='hosting'>
				
					<h2>Everything you need for trading server hosting</h2>
				
			</section>
		</main>
	);
}
