import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta
						name='description'
						content="We're a team of experienced developers and designers skilled in
						building/designing proven software solutions that boosts
						businesses and promote organizational sustainability. We help in
						taking ideas from conception to production and improve sales by engaging more clients in your space. Join hundreds of businesses who are doing more with
						technology. Get the product/service you desire within your budget."
					/>
					<link
						rel='stylesheet'
						href='https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css'
					/>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					{/* import lato font */}
					<link
						href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,300&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap'
						rel='stylesheet'
					/>
					{/* Import Barlow weight 500 */}
					<link
						href='https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap'
						rel='stylesheet'
					/>
					{/* Import Barlow weight 300 */}
					<link
						href='https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;1,400&display=swap'
						rel='stylesheet'></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
