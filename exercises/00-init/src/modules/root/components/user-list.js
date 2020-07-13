import React from 'react'



// function aaa(foo, bar) {

// let x = {foo, bar}
// let x = {foo: foo, bar: bar}

// }

export class UserList extends React.Component {
  // state = {
  //     users: Array<{
  //       id: number,
  //       firstName: string,
  //       lastName: string
  //     }>
  //   }

  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  addUser = (firstName, lastName) => {
    this.setState(prevState => {
      return {
        users: [...prevState.users, { id: prevState.users.length + 1, firstName, lastName}]
      }
    })
  }

  addAryaStark = () => { 
    this.addUser("Arya", "Stark")
  }

  addDaenerysTargaryen = () => { 
    this.addUser("Daenerys", "Targaryen")
  }


  render() {
    console.log(this.state.users)
  
    return (<React.Fragment>
      <button onClick={this.addAryaStark}>Arya Stark</button>
      <button onClick={this.addDaenerysTargaryen}>Daenerys Targaryen</button>
      {!this.state.users.length && (<div>No Users</div>)}
      {this.state.users.map(user => <div key={user.id}>{user.lastName}</div>)}
    </React.Fragment>)
  }
}
