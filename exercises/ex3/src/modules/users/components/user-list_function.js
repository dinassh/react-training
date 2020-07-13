import React from 'react'
import PropTypes from 'prop-types'

// Exercise 2: implement user list as function


// export class UserList extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { users: [] }
//   }

//   addUser = (firstName, lastName) => {
//     this.setState(prevState => {
//       return {
//         users: [...prevState.users, { id: prevState.users.length + 1, firstName, lastName}]
//       }
//     })
//   }

//   addAryaStark = () => { 
//     this.addUser("Arya", "Stark")
//   }

//   addDaenerysTargaryen = () => { 
//     this.addUser("Daenerys", "Targaryen")
//   }


//   render() {
//     return (<React.Fragment>
//       <button onClick={this.addAryaStark}>Arya Stark</button>
//       <button onClick={this.addDaenerysTargaryen}>Daenerys Targaryen</button>
//       {!this.state.users.length && (<div>No Users</div>)}
//       {this.state.users.map(user => <div key={user.id}>{user.lastName}</div>)}
//     </React.Fragment>)
//   }
// }




export const UserList = (props) => {
  let { users, addUser } = props
  return (
    <React.Fragment>
      <button onClick={() => addUser({
        firstName: "Arya", 
        lastName: "Stark"}
        )}>Arya Stark</button>

      <button onClick={() => addUser({
        firstName: "Daenerys", 
        lastName: "Targaryen"}
        )}>Daenerys Targaryen</button>

      {!users.length && (<div>No Users</div>)}

      {users.map(user => <div key={user.id}>{user.firstName} {user.lastName}</div>)}
    </React.Fragment>
  )
}


UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  })),
  addUser: PropTypes.func
}