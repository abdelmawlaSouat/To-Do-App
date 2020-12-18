/*
 * ToDoItemsList.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/12 20:29:31
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, Button, Card, Grid, Grow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ClearIcon from '@material-ui/icons/Clear'
import Proptypes from 'prop-types'
import ToDoItem from './ToDoItem'
import ToDoFooter from './ToDoFooter'

const useStyles = makeStyles(() => ({
	itemBox: {
		borderBottom: '1px solid hsl(236, 9%, 61%)',
	},
	button: {
		color: 'hsl(236, 9%, 61%)',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
}))

function ToDoItemsList({
	deleteItem,
	updateItem,
	filter,
	handleFilter,
	filterList,
	clearList,
	items,
	classes,
}) {
	const clxs = useStyles()

	return (
		<Grid container className="ToDoApp-items-list" justify="center">
			<Grid item md={5}>
				<Card className={classes}>
					{items.map((item) => (
						<Grow key={item.idx} in={item.id !== -1}>
							<Box
								display="flex"
								className={clxs.itemBox}
								alignItems="center"
								justifyContent="space-between"
								my={2}
								pr={3}
								onMouseEnter={() => {
									const { idx, value, checked } = item
									updateItem({ idx, value, checked, showCross: true })
								}}
								onMouseLeave={() => {
									const { idx, value, checked } = item
									updateItem({
										idx,
										value,
										checked,
										showCross: false,
									})
								}}
							>
								<ToDoItem
									currentItem={item.value}
									isChecked={item.checked}
									idx={item.idx}
									updateItem={updateItem}
								/>
								{item.showCross && (
									<Button
										className={clxs.button}
										onClick={() => deleteItem(item.idx)}
									>
										<ClearIcon />
									</Button>
								)}
							</Box>
						</Grow>
					))}
					<ToDoFooter
						itemsCount={items.length}
						filter={filter}
						handleFilter={handleFilter}
						filterList={filterList}
						clearList={clearList}
					/>
				</Card>
			</Grid>
		</Grid>
	)
}

ToDoItemsList.defaultProps = {
	classes: '',
}

ToDoItemsList.propTypes = {
	items: Proptypes.instanceOf(Array).isRequired,
	deleteItem: Proptypes.func.isRequired,
	updateItem: Proptypes.func.isRequired,
	filter: Proptypes.string.isRequired,
	handleFilter: Proptypes.func.isRequired,
	filterList: Proptypes.func.isRequired,
	clearList: Proptypes.func.isRequired,
	classes: Proptypes.string,
}

export default ToDoItemsList
