/*
 * Footer.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 09:59:13
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box } from '@material-ui/core'
import Sources from './Sources'

function Footer() {
	return (
		<Box display="flex" justifyContent="center">
			<Sources
				author="Abdelmawla Souat"
				authorProfileLink="https://www.linkedin.com/in/abdelmawla-souat/"
				challengeLink="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"
			/>
		</Box>
	)
}

export default Footer
