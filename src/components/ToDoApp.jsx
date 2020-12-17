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

import darkThemeIcon from '../images/icon-sun.svg'
import lightThemeIcon from '../images/icon-moon.svg'

const useStyles = makeStyles((theme) => ({
	toDoApp: {
		position: 'relative',
		top: '-25vh',
		minHeight: '70vh',
	},
	item: {
		backgroundColor:
			theme.palette.type === 'light'
				? 'hsl(0, 0%, 98%)'
				: 'hsl(235, 24%, 19%)',
	},
	// currentItem: {
	// 	borderColor: theme.palette.primary.dark,
	// },
	// itemsList: {
	// 	borderColor:
	// 		theme.palette.type === 'light'
	// 			? theme.palette.secondary.light
	// 			: theme.palette.secondary.dark,
	// },
}))

function ToDoApp({ handleDarkTheme }) {
	const [currentItem, setCurrentItem] = useState('')
	const [allItemsAreChecked, setallItemsAreChecked] = useState(false)
	const [itemsList, setItemsList] = useState([])
	const [filteredItemsList, setfilteredItemsList] = useState(
		itemsList
	)

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
				showCross: false,
			},
		]
		setItemsList(newItemsList)
		setfilteredItemsList(newItemsList)
	}

	function deleteItem(itemIdx) {
		const newItemsList = itemsList.filter(
			(item) => item.idx !== itemIdx
		)
		setItemsList(newItemsList)
		setfilteredItemsList(newItemsList)
	}

	function handleCheckAllItems() {
		const newItemList = itemsList.map((element) => {
			const item = element
			item.checked = !allItemsAreChecked
			return item
		})
		setallItemsAreChecked(!allItemsAreChecked)
		setItemsList(newItemList)
		setfilteredItemsList(newItemList)
	}

	function updateItem(item) {
		const newItemsList = itemsList.map((element) =>
			element.idx === item.idx ? item : element
		)
		setItemsList(() => newItemsList)
		setfilteredItemsList(() => newItemsList)
	}

	function filterList(type) {
		let newItemsList = []

		if (type === 'active' || type === 'completed') {
			const filter = type !== 'active'
			newItemsList = itemsList.filter(
				(item) => item.checked === filter
			)
		} else {
			newItemsList = itemsList
		}
		setfilteredItemsList(newItemsList)
	}

	function clearList() {
		const newItemsList = itemsList.filter((item) => !item.checked)
		setItemsList(newItemsList)
		setfilteredItemsList(newItemsList)
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
					classes={classes.item}
					currentItem={currentItem}
					handleCurrentItem={handleCurrentItem}
					allItemsAreChecked={allItemsAreChecked}
					handleCheckAllItems={handleCheckAllItems}
					addNewItem={addNewItem}
					placeholder="Create a new todo..."
				/>
			</Grid>

			<Grid item>
				<ToDoItemsList
					classes={classes.item}
					items={filteredItemsList}
					updateItem={updateItem}
					deleteItem={deleteItem}
					filterList={filterList}
					clearList={clearList}
				/>
			</Grid>
		</Grid>
	)
}

ToDoApp.propTypes = {
	handleDarkTheme: Proptypes.func.isRequired,
}

export default ToDoApp
