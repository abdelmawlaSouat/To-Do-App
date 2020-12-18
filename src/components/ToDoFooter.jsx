/*
 * ToDoFooter.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/16 19:39:28
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Proptypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
	button: {
		textTransform: 'none',
		fontSize: theme.typography.caption.fontSize,
		'&:hover': {
			color:
				theme.palette.type === 'light'
					? 'hsl(235, 19%, 35%)'
					: 'hsl(236, 33%, 92%)',
			backgroundColor: 'transparent',
		},
	},
	footerText: {
		color: 'hsl(236, 9%, 61%)',
	},
	fontWeight700: {
		fontWeight: '700',
	},
	activeFilter: {
		color: '#4682B4',
	},
}))

function ToDoFooter({
	itemsCount,
	filter,
	handleFilter,
	filterList,
	clearList,
}) {
	const classes = useStyles()

	function onClickFilter(type) {
		filterList(type)
		handleFilter(type)
	}

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			px={3}
			py={2}
		>
			<Typography
				variant="caption"
				className={clsx(classes.footerText)}
			>
				{`${itemsCount} `}
				items left
			</Typography>

			<Box display="flex" alignItems="center" justifyContent="center">
				<Button
					className={clsx(
						classes.button,
						classes.fontWeight700,
						classes.footerText,
						filter === 'all' ? classes.activeFilter : ''
					)}
					onClick={() => onClickFilter('all')}
				>
					All
				</Button>
				<Button
					className={clsx(
						classes.button,
						classes.fontWeight700,
						classes.footerText,
						filter === 'active' ? classes.activeFilter : ''
					)}
					onClick={() => onClickFilter('active')}
				>
					Active
				</Button>
				<Button
					className={clsx(
						classes.button,
						classes.fontWeight700,
						classes.footerText,
						filter === 'completed' ? classes.activeFilter : ''
					)}
					onClick={() => onClickFilter('completed')}
				>
					Completed
				</Button>
			</Box>

			<Button
				className={clsx(classes.button, classes.footerText)}
				onClick={clearList}
			>
				Clear Completed
			</Button>
		</Box>
	)
}

ToDoFooter.propTypes = {
	itemsCount: Proptypes.number.isRequired,
	filter: Proptypes.string.isRequired,
	handleFilter: Proptypes.func.isRequired,
	filterList: Proptypes.func.isRequired,
	clearList: Proptypes.func.isRequired,
}

export default ToDoFooter
