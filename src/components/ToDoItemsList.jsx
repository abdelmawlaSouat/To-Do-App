/*
 * ToDoItemsList.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/12 20:29:31
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, Button, Card, Grid } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import Proptypes from 'prop-types'
import ToDoItem from './ToDoItem'

function ToDoItemsList({ deleteItem, items, classes }) {
	return (
		<Grid container className="ToDoApp-items-list" justify="center">
			<Grid item md={5}>
				<Card>
					{items.map((item) => (
						<Box
							className={classes}
							display="flex"
							alignItems="center"
							justifyContent="space-between"
							pr={3}
							key={item.idx}
						>
							<ToDoItem classes={classes} currentItem={item.value} />
							<Button onClick={() => deleteItem(item.idx)}>
								<ClearIcon />
							</Button>
						</Box>
					))}
				</Card>
			</Grid>
		</Grid>
	)
}

ToDoItemsList.propTypes = {
	classes: Proptypes.string.isRequired,
	items: Proptypes.instanceOf(Array).isRequired,
	deleteItem: Proptypes.func.isRequired,
}

export default ToDoItemsList
