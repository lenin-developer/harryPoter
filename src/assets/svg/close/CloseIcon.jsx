import * as React from "react"

import { string } from 'prop-types'

export const CloseIcon = ({ className, fill, stroke, ...res }) => (
    <svg
        width={34}
        height={34}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...res}
    >
        <path fill={fill} d="M0 0h34v34H0z" />
        <circle cx={17} cy={17} r={12.75} stroke={stroke} />
        <path d="m12.75 21.25 8.5-8.5M21.25 21.25l-8.5-8.5" stroke={stroke} />
    </svg>
)



CloseIcon.propTypes = {
    fill: string,
    stroke: string
}


CloseIcon.defaultProps = {
    fill: 'none',
    stroke: '#333'
}
