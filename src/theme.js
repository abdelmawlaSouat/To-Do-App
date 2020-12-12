/*
 * theme.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 12:09:20
 *
 * Copyright (c) 2020 Shuriken
 */

import JosefinSans from './fonts/JosefinSans-Regular.ttf'

const josefinSans = {
	fontFamily: 'JosefinSans',
	fontStyle: 'normal',
	src: `
		local('JosefinSans'),
		url(${JosefinSans})
	`,
}

const theme = (themeType) => ({
	palette: {
		type: themeType,
		primary: {
			light: 'hsl(236, 33%, 92%)',
			// main: '#fff',
			main: 'hsl(234, 11%, 52%)',
			dark: 'hsl(235, 24%, 19%)',
		},
		secondary: {
			light: 'hsl(236, 33%, 92%)',
			main: '#fff',
			// main: 'hsl(234, 11%, 52%)',
			dark: 'hsl(235, 24%, 19%)',
		},
		text: {
			// primary: '#fff',
		},
	},
	background: {
		// default: 'hsl(235, 21%, 11%)',
		// paper: 'hsl(235, 24%, 19%)',
	},
	typography: {
		fontFamily: 'JosefinSans Arial',
		fontSize: 18,
		h4: {
			fontFamily: 'Arial Roboto',
			fontWeight: 600,
		},
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
