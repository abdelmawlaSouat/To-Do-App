/*
 * ToDoItem.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/12 20:33:42
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Proptypes from 'prop-types'
import GradientCheckbox from './ui/GradientCheckbox'

function ToDoItem({
	currentItem,
	isChecked,
	handleCurrentItem,
	addNewItem,
	updateItem,
	idx,
	// classes,
	placeholder,
}) {
	const useStyles = makeStyles(() => ({
		input: {
			textDecorationLine: isChecked ? 'line-through' : 'none',
		},
	}))

	const clxs = useStyles()

	function onKeyPress(e) {
		if (e.key === 'Enter') {
			if (handleCurrentItem !== null) {
				addNewItem(currentItem)
				handleCurrentItem('')
			}
			e.target.blur()
		}
	}
	function onChangeInput(e) {
		if (handleCurrentItem !== null) {
			handleCurrentItem(e.target.value)
		} else {
			const item = {
				idx,
				value: e.target.value,
				checked: isChecked,
			}
			updateItem(item)
		}
	}

	return (
		<Box
			// className={classes}
			display="flex"
			alignItems="center"
			px={1}
			py={2}
			borderBottom={1}
		>
			<GradientCheckbox
				updateItem={updateItem}
				idx={idx}
				currentItem={currentItem}
				isChecked={isChecked}
			/>
			<InputBase
				placeholder={placeholder}
				onChange={(e) => onChangeInput(e)}
				onKeyPress={onKeyPress}
				value={currentItem}
				className={clxs.input}
				// ref={input}
			/>
		</Box>
	)
}

ToDoItem.defaultProps = {
	placeholder: '',
	currentItem: '',
	idx: -1,
	addNewItem: null,
	updateItem: null,
	handleCurrentItem: null,
	isChecked: false,
}

ToDoItem.propTypes = {
	placeholder: Proptypes.string,
	idx: Proptypes.number,
	currentItem: Proptypes.string,
	isChecked: Proptypes.bool,
	addNewItem: Proptypes.func,
	updateItem: Proptypes.func,
	handleCurrentItem: Proptypes.func,
	// classes: Proptypes.string.isRequired,
}

export default ToDoItem
