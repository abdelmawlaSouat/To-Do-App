/*
 * Sources.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 09:23:01
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, Link, Typography } from '@material-ui/core'
import Proptypes from 'prop-types'

function Sources({ author, authorProfileLink, challengeLink }) {
	return (
		<Box className="Sources" display="flex" alignItems="center">
			<Typography>Challenge by </Typography>
			<Box ml={1}>
				<Link href={challengeLink} target="_blank" rel="noreferrer">
					Frontend Mentor
				</Link>
			</Box>
			<Typography>. Coded by </Typography>
			<Box ml={1}>
				<Link
					href={authorProfileLink}
					target="_blank"
					rel="noreferrer"
				>
					{author}
				</Link>
				.
			</Box>
		</Box>
	)
}

Sources.propTypes = {
	author: Proptypes.string.isRequired,
	authorProfileLink: Proptypes.string.isRequired,
	challengeLink: Proptypes.string.isRequired,
}

export default Sources
