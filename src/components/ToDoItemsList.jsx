/*
 * ToDoItemsList.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/12 20:29:31
 *
 * Copyright (c) 2020 Shuriken
 */

import { Card, Grid } from '@material-ui/core'
import Proptypes from 'prop-types'
import ToDoItem from './ToDoItem'

function ToDoItemsList({ items, classes }) {
	return (
		<Grid container className="ToDoApp-items-list" justify="center">
			<Grid item md={5}>
				<Card>
					{items.map((item) => (
						<ToDoItem
							key={item.idx}
							classes={classes}
							currentItem={item.value}
						/>
					))}
				</Card>
			</Grid>
		</Grid>
	)
}

ToDoItemsList.propTypes = {
	classes: Proptypes.string.isRequired,
	items: Proptypes.instanceOf(Array).isRequired,
}

export default ToDoItemsList
