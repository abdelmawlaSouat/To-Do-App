/*
 * ToDoFooter.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/16 19:39:28
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, Typography, Button } from '@material-ui/core'
import Proptypes from 'prop-types'

function ToDoFooter({ itemsCount, filterList, clearList }) {
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			px={1}
			py={2}
			borderBottom={1}
		>
			<Typography>
				{`${itemsCount} `}
				items left
			</Typography>

			<Box display="flex" alignItems="center" justifyContent="center">
				<Button onClick={() => filterList('all')}>All</Button>
				<Button onClick={() => filterList('active')}>Active</Button>
				<Button onClick={() => filterList('completed')}>
					Completed
				</Button>
			</Box>

			<Button onClick={() => clearList()}>Clear Completed</Button>
		</Box>
	)
}

ToDoFooter.propTypes = {
	itemsCount: Proptypes.number.isRequired,
	filterList: Proptypes.func.isRequired,
	clearList: Proptypes.func.isRequired,
}

export default ToDoFooter
