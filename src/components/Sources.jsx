/*
 * Sources.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/10 09:23:01
 *
 * Copyright (c) 2020 Shuriken
 */

import { Box, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Proptypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
	sources: {
		display: 'flex',
		[theme.breakpoints.only('xs')]: {
			flexDirection: 'column',
		},
	},
	hiddenOnMobile: {
		[theme.breakpoints.only('xs')]: {
			display: 'none',
		},
	},
	ml1: {
		marginLeft: '5px',
	},
}))

function Sources({ author, authorProfileLink, challengeLink }) {
	const classes = useStyles()

	return (
		<Box
			className={classes.sources}
			display="flex"
			alignItems="center"
			justifyContent="center"
			width="100%"
		>
			<Box
				display="flex"
				alignItems="center"
				mr={1}
				className={classes.hiddenOnMobile}
			>
				<Typography variant="body2">{`Challenge by `}</Typography>
				<Link
					className={classes.ml1}
					href={challengeLink}
					target="_blank"
					rel="noreferrer"
				>
					{`Frontend Mentor. `}
				</Link>
			</Box>

			<Box display="flex" alignItems="center">
				<Typography variant="body2">{`Coded by `}</Typography>
				<Link
					className={classes.ml1}
					href={authorProfileLink}
					target="_blank"
					rel="noreferrer"
				>
					{`${author}.`}
				</Link>
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
