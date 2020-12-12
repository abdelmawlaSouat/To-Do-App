/*
 * ToDoHeader.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 19:23:07
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, IconButton, Typography } from '@material-ui/core'
import Proptypes from 'prop-types'

function ToDoHeader({ title, themeIcon, handleDarkTheme }) {
	return (
		<Box
			className="ToDoApp-header"
			display="flex"
			justifyContent="space-between"
		>
			<Typography variant="h4">{title}</Typography>
			<IconButton onClick={() => handleDarkTheme()}>
				<img src={themeIcon} alt="Theme Icon" />
			</IconButton>
		</Box>
	)
}

ToDoHeader.propTypes = {
	title: Proptypes.string.isRequired,
	themeIcon: Proptypes.string.isRequired,
	handleDarkTheme: Proptypes.func.isRequired,
}

export default ToDoHeader
