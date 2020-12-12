/*
 * GradientCheckbox.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/12 14:55:07
 *
 * Copyright (c) 2020 Shuriken
 */

import { Checkbox, makeStyles } from '@material-ui/core'
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import CheckCircleGradient from './icons/CheckCircleGradient'

const gradientColors = [
	{ id: '1', offset: '20%', color: 'hsl(192, 100%, 67%)' },
	{ id: '2', offset: '90%', color: 'hsl(280, 87%, 65%)' },
]

const useStyles = makeStyles({
	circleUnchecked: {
		color: 'hsl(220, 98%, 61%)',
	},
})

function GradientCheckbox() {
	const classes = useStyles()

	const CheckCircle = (
		<CheckCircleGradient
			width={25.7}
			height={25.7}
			stops={gradientColors}
		/>
	)

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
		/>
	)
}

export default GradientCheckbox
