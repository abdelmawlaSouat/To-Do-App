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
}))

function ToDoFooter({ itemsCount, filterList, clearList }) {
	const classes = useStyles()

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			px={1}
			py={2}
			// borderBottom={0}
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
						classes.footerText
					)}
					onClick={() => filterList('all')}
				>
					All
				</Button>
				<Button
					className={clsx(
						classes.button,
						classes.fontWeight700,
						classes.footerText
					)}
					onClick={() => filterList('active')}
				>
					Active
				</Button>
				<Button
					className={clsx(
						classes.button,
						classes.fontWeight700,
						classes.footerText
					)}
					onClick={() => filterList('completed')}
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
	filterList: Proptypes.func.isRequired,
	clearList: Proptypes.func.isRequired,
}

export default ToDoFooter
