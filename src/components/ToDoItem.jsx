/*
 * ToDoItem.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/12 20:33:42
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, InputBase } from '@material-ui/core'
import Proptypes from 'prop-types'
import GradientCheckbox from './ui/GradientCheckbox'

function ToDoItem({ classes, placeholder }) {
	return (
		<Box
			className={classes}
			display="flex"
			alignItems="center"
			px={1}
			py={2}
			borderBottom={1}
		>
			<GradientCheckbox />
			<InputBase placeholder={placeholder} />
		</Box>
	)
}

ToDoItem.propTypes = {
	placeholder: Proptypes.string.isRequired,
	classes: Proptypes.string.isRequired,
}

export default ToDoItem
