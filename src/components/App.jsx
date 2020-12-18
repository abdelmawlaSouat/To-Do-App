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
	Grow,
	makeStyles,
	createMuiTheme,
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import clsx from 'clsx'
import ToDoApp from './ToDoApp'
import Footer from './Footer'
import getTheme from '../theme'

function App() {
	const [darkTheme, setDarkTheme] = useState(true)
	const themeType = getTheme(darkTheme ? 'dark' : 'light')
	const theme = createMuiTheme(themeType)

	const useStyle = makeStyles({
		backgroundBox: {
			height: '30vh',
			opacity: '0.9',
			background: `linear-gradient(90deg, rgba(58,123,253,1) 0%,
				rgba(87,221,255,1) 90%)`,
		},
		bgRoot: {
			backgroundColor: darkTheme
				? 'hsl(235, 21%, 11%)'
				: 'hsl(0, 0%, 98%)',
		},
	})
	const classes = useStyle()

	return (
		<ThemeProvider theme={theme}>
			<Grow in={darkTheme || !darkTheme}>
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
			</Grow>
		</ThemeProvider>
	)
}

export default App
