import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'


const DumbHeader = ({ title, wholeState }) =>
{
    return <h1>{title}</h1>
}

DumbHeader.propTypes = {
    title: PropTypes.string.isRequired
}


const mapStateToProps = (state) => ({
    title: state.usersReducer.title,
    wholeState: state
})


export const Header = connect(mapStateToProps)(DumbHeader)
