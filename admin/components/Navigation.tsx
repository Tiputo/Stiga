import { Menu } from '@contember/admin'
import * as React from 'react'
import locale from '../locales'

export const Navigation = () => (
	<Menu>
		<Menu.Item title="stiga">
			<Menu.Item title={["Player"]} to="playerList" />
			<Menu.Item title={["Match"]} to="matchList" />
		</Menu.Item>
		<Menu.Item>
			<Menu.Item title={locale["Pages"]} to="pageList" />
			<Menu.Item title={locale["Articles"]} to="articleList" />
			<Menu.Item title={locale["Messages"]} to="messageList" />
			<Menu.Item title={locale["Settings"]} to="settings" />
			<Menu.Item title={locale["Navigation"]} to="navigationList" />
			<Menu.Item title={locale["Testimonials"]} to="testimonialList" />
			<Menu.Item title={locale["SEO"]}>
				<Menu.Item title={locale["Articles"]} to="seoArticles" />
				<Menu.Item title={locale["Pages"]} to="seoPages" />
			</Menu.Item>
		</Menu.Item>
	</Menu>
)
