/*
 * ToDoCurrentItem.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 20:52:00
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, Grid, Paper, InputBase } from '@material-ui/core'
import Proptypes from 'prop-types'
import GradientCheckbox from './ui/GradientCheckbox'

function ToDoCurrentItem({ placeholder }) {
	return (
		<Grid className="ToDoApp-current-item" container justify="center">
			<Grid item md={5}>
				<Paper>
					<Box display="flex" alignItems="center" px={1} py={2}>
						<GradientCheckbox />
						<InputBase placeholder={placeholder} />
					</Box>
				</Paper>
			</Grid>
		</Grid>
	)
}

ToDoCurrentItem.propTypes = {
	placeholder: Proptypes.string.isRequired,
}

export default ToDoCurrentItem
