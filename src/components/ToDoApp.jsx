/*
 * ToDoApp.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 12:04:48
 *
 * Copyright (c) 2020 Shuriken
 */

import { useState } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Proptypes from 'prop-types'

import ToDoHeader from './ToDoHeader'
import ToDoCurrentItem from './ToDoCurrentItem'
import ToDoItemsList from './ToDoItemsList'

import lightThemeIcon from '../images/icon-sun.svg'
import darkThemeIcon from '../images/icon-moon.svg'

const useStyles = makeStyles((theme) => ({
	toDoApp: {
		position: 'relative',
		top: '-25vh',
	},
	currentItem: {
		borderColor: theme.palette.primary.dark,
	},
	itemsList: {
		borderColor:
			theme.palette.type === 'light'
				? theme.palette.secondary.light
				: theme.palette.secondary.dark,
	},
}))

function ToDoApp({ handleDarkTheme }) {
	const [currentItem, setCurrentItem] = useState('')
	const [itemsList, setItemsList] = useState([])

	const theme = useTheme()
	const classes = useStyles()

	function handleCurrentItem(currentItem) {
		setCurrentItem(currentItem)
	}

	function addNewItem(newItem) {
		const newItemsList = [
			...itemsList,
			{
				idx: Date.now(),
				value: newItem,
				checked: false,
			},
		]
		setItemsList(newItemsList)
	}

	function deleteItem(itemIdx) {
		const newItemsList = itemsList.filter(
			(item) => item.idx !== itemIdx
		)
		setItemsList(newItemsList)
	}

	return (
		<Grid
			container
			className={classes.toDoApp}
			direction="column"
			spacing={5}
		>
			<Grid item>
				<ToDoHeader
					title="TO DO"
					handleDarkTheme={handleDarkTheme}
					themeIcon={
						theme.palette.type === 'light'
							? lightThemeIcon
							: darkThemeIcon
					}
				/>
			</Grid>

			<Grid item>
				<ToDoCurrentItem
					classes={classes.currentItem}
					currentItem={currentItem}
					handleCurrentItem={handleCurrentItem}
					addNewItem={addNewItem}
					placeholder="Create a new todo..."
				/>
			</Grid>

			<Grid item>
				<ToDoItemsList
					classes={classes.itemsList}
					items={itemsList}
					deleteItem={deleteItem}
				/>
			</Grid>
		</Grid>
	)
}

ToDoApp.propTypes = {
	handleDarkTheme: Proptypes.func.isRequired,
}

export default ToDoApp
