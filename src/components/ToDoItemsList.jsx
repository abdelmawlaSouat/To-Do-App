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
import ToDoFooter from './ToDoFooter'

function ToDoItemsList({
	deleteItem,
	updateItem,
	filterList,
	clearList,
	items,
	// classes
}) {
	// function handleItem(itemValue) {
	// 	const item = {
	// 		idx,
	// 		value: itemValue,
	// 		checked: !isChecked,
	// 	}

	// 	item.checked = !isChecked
	// 	updateItem(item)
	// }

	return (
		<Grid container className="ToDoApp-items-list" justify="center">
			<Grid item md={5}>
				<Card>
					{items.map((item) => (
						<Box
							// className={classes}
							display="flex"
							alignItems="center"
							justifyContent="space-between"
							pr={3}
							key={item.idx}
						>
							<ToDoItem
								currentItem={item.value}
								isChecked={item.checked}
								// handleCurrentItem={handleCurrentItem}
								idx={item.idx}
								updateItem={updateItem}
							/>
							<Button onClick={() => deleteItem(item.idx)}>
								<ClearIcon />
							</Button>
						</Box>
					))}
					<ToDoFooter
						itemsCount={items.length}
						filterList={filterList}
						clearList={clearList}
					/>
				</Card>
			</Grid>
		</Grid>
	)
}

// ToDoItemsList.defaultProps = {
// 	classes: '',
// }

ToDoItemsList.propTypes = {
	// classes: Proptypes.string,
	items: Proptypes.instanceOf(Array).isRequired,
	deleteItem: Proptypes.func.isRequired,
	updateItem: Proptypes.func.isRequired,
	filterList: Proptypes.func.isRequired,
	clearList: Proptypes.func.isRequired,
}

export default ToDoItemsList
