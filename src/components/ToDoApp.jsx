/*
 * ToDoApp.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 12:04:48
 *
 * Copyright (c) 2020 Shuriken
 */

import { Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Proptypes from 'prop-types'
import ToDoHeader from './ToDoHeader'
import ToDoCurrentItem from './ToDoCurrentItem'
import lightThemeIcon from '../images/icon-sun.svg'
import darkThemeIcon from '../images/icon-moon.svg'

const useStyles = makeStyles(() => ({
	toDoApp: {
		position: 'relative',
		top: '-25vh',
	},
}))

function ToDoApp({ handleDarkTheme }) {
	const theme = useTheme()
	const classes = useStyles()

	return (
		<Grid
			container
			className={classes.toDoApp}
			direction="column"
			spacing={5}
		>
			<Grid item>
				<ToDoHeader
					title="TO DO"
					handleDarkTheme={handleDarkTheme}
					themeIcon={
						theme.palette.type === 'light'
							? lightThemeIcon
							: darkThemeIcon
					}
				/>
			</Grid>

			<Grid item>
				<ToDoCurrentItem placeholder="Create a new todo..." />
			</Grid>
		</Grid>
	)
}

ToDoApp.propTypes = {
	handleDarkTheme: Proptypes.func.isRequired,
}

export default ToDoApp
