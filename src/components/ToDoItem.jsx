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
	handleCheckAllItems,
	addNewItem,
	updateItem,
	idx,
	// classes,
	placeholder,
}) {
	const useStyles = makeStyles(() => ({
		input: {
			width: '100%',
			textDecorationLine:
				!handleCheckAllItems && isChecked ? 'line-through' : 'none',
			color:
				!handleCheckAllItems && isChecked ? 'hsl(236, 9%, 61%)' : '',
		},
		itemBox: {
			borderBottom: '1px solid red',
		},
	}))

	const classes = useStyles()

	function onKeyPress(e) {
		if (e.key === 'Enter') {
			if (handleCurrentItem !== null) {
				addNewItem(currentItem)
				handleCurrentItem('')
			} else {
				e.target.blur()
			}
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
			// className={classes.itemBox}
			display="flex"
			alignItems="center"
			px={1}
			py={2}
			width="100%"
			// borderBottom={1}
		>
			<GradientCheckbox
				updateItem={updateItem}
				checkAllItems={handleCheckAllItems}
				idx={idx}
				currentItem={currentItem}
				isChecked={isChecked}
			/>
			<InputBase
				placeholder={placeholder}
				onChange={(e) => onChangeInput(e)}
				onKeyPress={onKeyPress}
				value={currentItem}
				className={classes.input}
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
	handleCheckAllItems: null,
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
	handleCheckAllItems: Proptypes.func,
	// classes: Proptypes.string.isRequired,
}

export default ToDoItem
