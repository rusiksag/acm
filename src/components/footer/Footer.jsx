import SupFooter from '../supfooter/SupFooter';

function Footer() {
	return (
		<div className='footer'>
			<SupFooter />
			<div className='footer__inner'>
				<nav>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
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
