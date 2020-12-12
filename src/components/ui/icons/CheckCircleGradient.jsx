/*
 * CheckCircleGradient.jsx
 *
 * Author: Abdelmawla Souat (abdelmawla.souat@gmail.com)
 * Created on 2020/12/12 14:20:36
 *
 * Copyright (c) 2020 Shuriken
 */

import Proptypes from 'prop-types'

function CheckCircleGradient({ width, height, stops }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 24 24"
		>
			<defs>
				<linearGradient
					id="gradient"
					x1="0%"
					y1="0%"
					x2="100%"
					y2="100%"
				>
					{stops.map((stop) => (
						<stop
							key={stop.id}
							offset={stop.offset}
							stopColor={stop.color}
						/>
					))}
				</linearGradient>
			</defs>
			<path
				fill="url(#gradient)"
				d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
			/>
		</svg>
	)
}

CheckCircleGradient.propTypes = {
	width: Proptypes.number.isRequired,
	height: Proptypes.number.isRequired,
	stops: Proptypes.instanceOf(Array).isRequired,
}

export default CheckCircleGradient
