import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import '../../styles/main.scss';

export const metadata = {
	title: 'QuantVPS',
	description: 'QuantVPS servers',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
