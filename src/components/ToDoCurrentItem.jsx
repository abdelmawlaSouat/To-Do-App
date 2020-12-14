/*
 * ToDoCurrentItem.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 20:52:00
 *
 * Copyright (c) 2020 Shuriken
 */

import { Card, Grid } from '@material-ui/core'
import Proptypes from 'prop-types'
import ToDoItem from './ToDoItem'

function ToDoCurrentItem({
	currentItem,
	handleCurrentItem,
	addNewItem,
	classes,
	placeholder,
}) {
	return (
		<Grid className="ToDoApp-current-item" container justify="center">
			<Grid item md={5}>
				<Card>
					<ToDoItem
						currentItem={currentItem}
						handleCurrentItem={handleCurrentItem}
						addNewItem={addNewItem}
						classes={classes}
						placeholder={placeholder}
					/>
				</Card>
			</Grid>
		</Grid>
	)
}

ToDoCurrentItem.propTypes = {
	// placeholder: Proptypes.string.isRequired,
	classes: Proptypes.string.isRequired,
}

export default ToDoCurrentItem
