import React from 'react'
import PropTypes from 'prop-types'

export const DashboardLayout = ({ children }) => {
    return (
        <div>{children}</div>
    )
}
DashboardLayout.propTypes = {
    children: PropTypes.node.isRequired
}