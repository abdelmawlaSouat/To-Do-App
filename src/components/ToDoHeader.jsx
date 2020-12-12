/*
 * ToDoHeader.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 19:23:07
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, Grid, IconButton, Typography } from '@material-ui/core'
import Proptypes from 'prop-types'

function ToDoHeader({ title, themeIcon, handleDarkTheme }) {
	return (
		<Grid container justify="center" className="ToDoApp-header">
			<Grid item md={5}>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography variant="h4" color="secondary">
						{title}
					</Typography>
					<IconButton onClick={() => handleDarkTheme()}>
						<img src={themeIcon} alt="Theme Icon" />
					</IconButton>
				</Box>
			</Grid>
		</Grid>
	)
}

ToDoHeader.propTypes = {
	title: Proptypes.string.isRequired,
	themeIcon: Proptypes.string.isRequired,
	handleDarkTheme: Proptypes.func.isRequired,
}

export default ToDoHeader
