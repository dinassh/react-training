import React from 'react'
import PropTypes from 'prop-types'

import { getTitle } from 'modules/users/users-selectors'
import { connect } from 'react-redux'


const DumbHeader = ({ title, wholeState }) => {
    return <h1>{title}</h1>
}

DumbHeader.propTypes = {
    title: PropTypes.string.isRequired
}


const mapStateToProps = (state) => ({
    title: getTitle(state),
    wholeState: state
})


export const Header = connect(mapStateToProps)(DumbHeader)
