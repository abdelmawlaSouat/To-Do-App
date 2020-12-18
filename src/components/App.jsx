/*
 * App.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 09:16:15
 *
 * Copyright (c) 2020 Shuriken
 */

import { useState } from 'react'
import {
	Grid,
	Paper,
	Box,
	makeStyles,
	createMuiTheme,
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import clsx from 'clsx'
import ToDoApp from './ToDoApp'
import Footer from './Footer'
import getTheme from '../theme'
import darkDesktopBg from '../images/bg-desktop-dark.jpg'
import lightDesktopBg from '../images/bg-desktop-light.jpg'
import darkMobileBg from '../images/bg-mobile-dark.jpg'
import lightMobileBg from '../images/bg-mobile-light.jpg'

function App() {
	const [darkTheme, setDarkTheme] = useState(true)
	const themeType = getTheme(darkTheme ? 'dark' : 'light')
	const theme = createMuiTheme(themeType)
	const desktopBg = darkTheme ? darkDesktopBg : lightDesktopBg
	const mobileBg = darkTheme ? darkMobileBg : lightMobileBg

	const useStyle = makeStyles((theme) => ({
		backgroundBox: {
			[theme.breakpoints.only('xs')]: {
				backgroundSize: 'auto',
				backgroundImage: `url(${mobileBg})`,
			},
			height: '50vh',
			backgroundImage: `url(${desktopBg})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
		},
		bgRoot: {
			minHeight: '100vh',
			backgroundColor: darkTheme
				? 'hsl(235, 21%, 11%)'
				: 'hsl(0, 0%, 98%)',
		},
	}))
	const classes = useStyle()

	return (
		<ThemeProvider theme={theme}>
			<Paper className={clsx('App', classes.bgRoot)}>
				<Grid container>
					<Grid item xs={12}>
						<Box className={classes.backgroundBox} />
					</Grid>

					<Grid item xs={12}>
						<ToDoApp
							handleDarkTheme={() => setDarkTheme(!darkTheme)}
						/>
					</Grid>

					<Grid item xs={12}>
						<Footer />
					</Grid>
				</Grid>
			</Paper>
		</ThemeProvider>
	)
}

export default App
