import React from 'react'
import PropTypes from 'prop-types'

// Exercise 1: implement Header component
// export class Header extends React.Component
// {

//     static propTypes = {
//         title: PropTypes.string.isRequired
//     }

//     render() {
//         return (
//             <h1>{this.props.title}</h1>
//         )
//     }
// }





// Exercise 2: implement Header as function
export const Header = (props) =>
{
    return <h1>{props.title}</h1>
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}