/*
 * ToDoCurrentItem.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 20:52:00
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, Card, Grid } from '@material-ui/core'
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
			<Grid item xs={10} md={5}>
				<Box mb={5}>
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
				</Box>
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
