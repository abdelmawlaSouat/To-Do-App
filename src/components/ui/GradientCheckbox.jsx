/*
 * GradientCheckbox.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/12 14:55:07
 *
 * Copyright (c) 2020 Shuriken
 */

import { Checkbox, makeStyles } from '@material-ui/core'
import Proptypes from 'prop-types'
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import CheckCircleGradient from './icons/CheckCircleGradient'

const gradientColors = [
	{ id: '1', offset: '20%', color: 'hsl(192, 100%, 67%)' },
	{ id: '2', offset: '90%', color: 'hsl(280, 87%, 65%)' },
]

const useStyles = makeStyles({
	circleUnchecked: {
		color: 'hsl(236, 9%, 61%)',
	},
})

function GradientCheckbox({
	idx,
	isChecked,
	currentItem,
	checkAllItems,
	updateItem,
}) {
	const classes = useStyles()

	const CheckCircle = (
		<CheckCircleGradient
			width={25.7}
			height={25.7}
			stops={gradientColors}
		/>
	)

	function onChangeCheckbox() {
		if (updateItem) {
			const item = {
				idx,
				value: currentItem,
				checked: !isChecked,
			}

			item.checked = !isChecked
			updateItem(item)
		} else if (checkAllItems !== null) {
			checkAllItems()
		}
	}

	const unCheckedCircle = (
		<CircleUnchecked
			className={classes.circleUnchecked}
			fontSize="small"
		/>
	)

	return (
		<Checkbox
			className={classes.root}
			icon={unCheckedCircle}
			checkedIcon={CheckCircle}
			checked={isChecked}
			onChange={() => onChangeCheckbox()}
		/>
	)
}

GradientCheckbox.defaultProps = {
	updateItem: null,
	checkAllItems: null,
}

GradientCheckbox.propTypes = {
	idx: Proptypes.number.isRequired,
	currentItem: Proptypes.string.isRequired,
	isChecked: Proptypes.bool.isRequired,
	updateItem: Proptypes.func,
	checkAllItems: Proptypes.func,
}

export default GradientCheckbox
