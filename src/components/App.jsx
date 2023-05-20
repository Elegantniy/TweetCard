import { Component } from 'react';
import { Container } from './Container/Container';
import { Card } from './Card/Card';
import usersArr from 'data/users.json';

export class App extends Component {
  state = {
    users: usersArr.map(user => {
      return { ...user, following: false };
    }),
  };

  componentDidMount = () => {
    const users = localStorage.getItem('Users');
    if (!users) {
      return;
    }
    this.setState({
      users: JSON.parse(users),
    });
  };

  componentDidUpdate = (_, prevState) => {
    if (JSON.stringify(prevState.users) !== JSON.stringify(this.state.users)) {
      localStorage.setItem('Users', JSON.stringify(this.state.users));
    }
  };

  onClick = id => {
    this.setState(prevState => {
      return {
        users: prevState.users.map(user => {
          if (user.id !== id) {
            return user;
          }
          return {
            ...user,
            followers: user.following ? user.followers - 1 : user.followers + 1,
            following: !user.following,
          };
        }),
      };
    });
  };

  render() {
    const { users } = this.state;
    return (
      <Container>
        <Card users={users} onClick={this.onClick} />
      </Container>
    );
  }
}
