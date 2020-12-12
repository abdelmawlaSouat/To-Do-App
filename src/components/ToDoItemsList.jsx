/*
 * ToDoItemsList.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/12 20:29:31
 *
 * Copyright (c) 2020 Shuriken
 */

import { Card, Grid } from '@material-ui/core'
import ToDoItem from './ToDoItem'

function ToDoItemsList({ classes }) {
	return (
		<Grid container className="ToDoApp-items-list" justify="center">
			<Grid item md={5}>
				<Card>
					<ToDoItem classes={classes} placeholder="Item" />
					<ToDoItem classes={classes} placeholder="Item" />
					<ToDoItem classes={classes} placeholder="Item" />
					<ToDoItem classes={classes} placeholder="Item" />
					<ToDoItem classes={classes} placeholder="Item" />
				</Card>
			</Grid>
		</Grid>
	)
}

export default ToDoItemsList
