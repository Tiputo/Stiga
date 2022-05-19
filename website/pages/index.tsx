import Head from 'next/head'
import Image from 'next/image'
import Blocks from '../components/blocks'
import Footer from '../components/footer'
import Header from '../components/header'
import Seo from '../components/seo'
import { serverSideFetch } from '../lib/graphql/gqlfetch'
import getHomePage from '../lib/graphql/queries/getHomePage'
import style from '../styles/homePage.module.sass'


export default function Home(props: any) {
	const homePageData = props.data?.getPage
	const headerMenu = props.data?.getHeaderMenu
	const footerMenu = props.data?.getFooterMenu
	const setting = props.data?.getSetting
	const listPlayer = props.data?.listPlayer
	const listMatch = props.data?.listMatch

	if (props.errors) {
		return (
			<>
				{
					props.errors.map((error: { message: string, code: string }) => (
						<>
							<p>{error.message}</p>
							<p>{error.code}</p>
						</>
					))
				}
			</>
		)
	}
	console.log()
	return (
		<>
			<Seo seo={homePageData?.seo} />
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header menu={headerMenu} logo={setting?.logo} />

			<main>
				{/* {listPlayer.map(player => (<pre>{JSON.stringify(player.firstname, null, 2)}</pre>))} */}
				<h1 className={style.title}>Stiga</h1>
				<div className={style.cards}>
					{listPlayer.map(player => (
						<div key={player.id} className={style.wrap}>
							<div className={style.card}>
								<div className={style.image}>{player.image?.url && (
									<Image src={player.image.url} width={player.image.width} height={player.image.height} alt={player.image.height} />
								)}
								</div>
								<div className={style.container}>
									<p>Jméno hráče: {player.firstname} {player.surname}</p>
									<p>Přezdívka hráče: {player.nickname}</p>
									<p>Body: {player.teams.score}</p>
									<p>Počet vítězství: </p>
									<p>Počet zápasu: </p>

								</div>
							</div>
						</div>
					))}
				</div>

				<div className={style.table}>
					{listMatch.map(match => (
						<table key={match.id} className={style.tableIn}>
							<tr>
								<th>Jméno domácího hráče</th>
								<th>Skóre</th>
								<th>Jméno venkovního hráče</th>
							</tr>
							<tr>
								<td><div className={style.name}>{match.playerHome.player.nickname}</div></td>
								<td><div>{match.playerHome.score} : {match.playerAway.score}</div></td>
								<td><div className={style.name}>{match.playerAway.player.nickname}</div></td>
							</tr>
						</table>
					))}
				</div>

				<Blocks blocks={homePageData?.blocks} />
			</main>

			<Footer menu={footerMenu} content={setting?.footerCopyright} />
		</>
	)
}

export async function getStaticProps() {
	const { data, errors } = await serverSideFetch(getHomePage)

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null
		},
		revalidate: 10,
	}
}
