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
			light: 'hsl(233, 11%, 84%)',
			main: 'hsl(234, 11%, 52%)',
			dark: 'hsl(234, 39%, 85%)',
		},
	},
	typography: {
		fontFamily: 'JosefinSans Arial sans-serif',
		fontSize: 15,
		h4: {
			fontFamily: 'sans-serif Arial Roboto',
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
