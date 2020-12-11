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
import ToDoApp from './ToDoApp'
import Footer from './Footer'
import getTheme from '../theme'

const useStyle = makeStyles({
	bgColor: {
		height: '30vh',
		opacity: '0.9',
		background: `linear-gradient(90deg, rgba(58,123,253,1) 0%,
			rgba(87,221,255,1) 90%)`,
	},
})
function App() {
	const [darkTheme, setDarkTheme] = useState(false)

	const themeType = getTheme(darkTheme ? 'dark' : 'light')
	const theme = createMuiTheme(themeType)
	const classes = useStyle()

	function handleDarkTheme() {
		setDarkTheme(!darkTheme)
	}

	return (
		<ThemeProvider theme={theme}>
			<Paper style={{ height: '100vh' }}>
				<Grid container className="App">
					<Grid item xs={12}>
						<Box className={classes.bgColor} />
					</Grid>

					<Grid item xs={12}>
						<ToDoApp handleDarkTheme={handleDarkTheme} />
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
