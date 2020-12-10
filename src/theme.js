/*
 * theme.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 12:09:20
 *
 * Copyright (c) 2020 Shuriken
 */

import { createMuiTheme } from '@material-ui/core'
import JosefinSans from './fonts/JosefinSans-Regular.ttf'

const josefinSans = {
	fontFamily: 'JosefinSans',
	fontStyle: 'normal',
	src: `
		local('JosefinSans'),
		url(${JosefinSans})
	`,
}

const theme = createMuiTheme({
	palette: {
		primary: {
			light: 'hsl(236, 33%, 92%)',
			main: 'hsl(234, 11%, 52%)',
			dark: 'hsl(235, 24%, 19%)',
		},
		// secondary: {},
		text: {
			primary: 'hsl(234, 39%, 85%)',
		},
	},
	background: {
		default: 'hsl(235, 21%, 11%)',
	},
	typography: {
		fontFamily: 'JosefinSans Arial',
		fontSize: 18,
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [josefinSans],
			},
		},
	},
})

export default theme
