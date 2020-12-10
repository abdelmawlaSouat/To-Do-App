/*
 * App.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 09:16:15
 *
 * Copyright (c) 2020 Shuriken
 */

import ToDoApp from './ToDoApp'
import Footer from './Footer'
import { Grid, Box, makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
	bgColor: {
		height: '25vh',
		opacity: '0.5',
		background: 'rgb(58,123,253)',
		background: `linear-gradient(90deg, rgba(58,123,253,1) 0%, 
			rgba(87,221,255,1) 50%, rgba(192,88,243,1) 91%)`,
	},
}))

function App() {
	const classes = useStyle()
	return (
		<Grid className="App" container>
			<Grid item xs={12}>
				<Box className={classes.bgColor}></Box>
			</Grid>
			<Grid item>
				<ToDoApp />
			</Grid>
			<Grid item>
				<Footer />
			</Grid>
		</Grid>
	)
}

export default App
