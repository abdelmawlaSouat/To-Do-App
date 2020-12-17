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
	handleCheckAllItems,
	allItemsAreChecked,
	addNewItem,
	classes,
	placeholder,
}) {
	return (
		<Grid className="ToDoApp-current-item" container justify="center">
			<Grid item md={5}>
				<Card className={classes}>
					<ToDoItem
						currentItem={currentItem}
						handleCurrentItem={handleCurrentItem}
						isChecked={allItemsAreChecked}
						handleCheckAllItems={handleCheckAllItems}
						addNewItem={addNewItem}
						placeholder={placeholder}
					/>
				</Card>
			</Grid>
		</Grid>
	)
}

ToDoCurrentItem.defaultProps = {
	placeholder: '',
	currentItem: '',
	addNewItem: null,
	handleCurrentItem: null,
	handleCheckAllItems: null,
	allItemsAreChecked: false,
	classes: '',
}

ToDoCurrentItem.propTypes = {
	placeholder: Proptypes.string,
	currentItem: Proptypes.string,
	addNewItem: Proptypes.func,
	handleCurrentItem: Proptypes.func,
	classes: Proptypes.string,
	handleCheckAllItems: Proptypes.func,
	allItemsAreChecked: Proptypes.bool,
}

export default ToDoCurrentItem
