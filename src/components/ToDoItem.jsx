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

function ToDoItem({
	currentItem,
	handleCurrentItem,
	addNewItem,
	classes,
	placeholder,
}) {
	function onKeyPress(e) {
		if (e.key === 'Enter') {
			addNewItem(currentItem)
			handleCurrentItem('')
		}
	}

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
			<InputBase
				placeholder={placeholder}
				onChange={(e) => handleCurrentItem(e.target.value)}
				onKeyPress={onKeyPress}
				value={currentItem}
			/>
		</Box>
	)
}

ToDoItem.defaultProps = {
	placeholder: '',
	currentItem: '',
	addNewItem: null,
	handleCurrentItem: null,
}

ToDoItem.propTypes = {
	placeholder: Proptypes.string,
	currentItem: Proptypes.string,
	addNewItem: Proptypes.func,
	handleCurrentItem: Proptypes.func,
	classes: Proptypes.string.isRequired,
}

export default ToDoItem
