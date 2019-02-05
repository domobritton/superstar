import React, { Component } from 'react';
import { STATUS, Loading, Container } from 'gitstar-components';

import Header from './Header';
import { User } from './User';
import { SelectionBar } from './SelectionBar';
import { Search } from './Search';
import Results from './Results';

import styled from 'styled-components';

const CLIENT_ID = 'cbb4d415a66f8fe3083f';
const REDIRECT_URI = 'http://localhost:3000/';

class App extends Component {
  state = {
    status: STATUS.INITIAL,
    token: null,
    search: '',
    text: '',
    user: '',
    value: 0,
    login: false,
  };

  // button change
  handleChange = (event, value) => {
    const { user } = this.state;
    const text = event.target.innerText;
    let search = '';
    if (value === 0) {
      search = user;
    }
    this.setState({ search, value, text });
  };

  // set user
  updateUser = event => {
    const { value } = event.target;
    this.setState({ user: value });
  };

  // submit user
  submitForm = event => {
    event.preventDefault();
    const { user } = this.state;
    this.setState(prevState => ({
      login: !prevState.login,
      search: user,
    }));
  };

  // search query
  updateSearch = event => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  componentDidMount() {
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    if (code) {
      this.setState({
        status: STATUS.LOADING,
      });
      fetch(`https://gitsuperstar.herokuapp.com/authenticate/${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          this.setState({
            token,
            status: STATUS.FINISHED_LOADING,
          });
        });
    }
  }

  logout = () => {
    this.setState({
      status: STATUS.INITIAL,
      token: null,
    });
  };
  render() {
    const { login, search, status, text, value } = this.state;
    console.log(status);
    return (
      <AppPage>
        <Container>
          <Header
            status={status}
            CLIENT_ID={CLIENT_ID}
            REDIRECT_URI={REDIRECT_URI}
            logout={this.logout}
          />
          <Loading
            status={status}
            callback={() => {
              if (this.props.status !== STATUS.AUTHENTICATED) {
                this.setState({
                  status: STATUS.AUTHENTICATED,
                });
              }
            }}
          />
          {!login ? (
            <User updateUser={this.updateUser} submitForm={this.submitForm} />
          ) : (
            <>
              <SelectionBar value={value} handleChange={this.handleChange} />
              <Search
                text={text}
                updateSearch={this.updateSearch}
                value={value}
              />
              <Results search={search} value={value} />
            </>
          )}
        </Container>
      </AppPage>
    );
  }
}

export default App;

// export default class App extends Component {
//   state = {
//     search: '',
//     text: '',
//     user: '',
//     value: 0,
//     login: false,
//   };

//   // button change
//   handleChange = (event, value) => {
//     const { user } = this.state;
//     const text = event.target.innerText;
//     let search = '';
//     if (value === 0) {
//       search = user;
//     }
//     this.setState({ search, value, text });
//   };

//   // set user
//   updateUser = event => {
//     const { value } = event.target;
//     this.setState({ user: value });
//   };

//   // submit user
//   submitForm = event => {
//     event.preventDefault();
//     const { user } = this.state;
//     this.setState(prevState => ({
//       login: !prevState.login,
//       search: user,
//     }));
//   };

//   // search query
//   updateSearch = event => {
//     const { value } = event.target;
//     this.setState({ search: value });
//   };

//   render() {
//     const { login, search, text, value } = this.state;
//     return (
//       <AppPage>
//         <Header />
//         {!login ? (
//           <User updateUser={this.updateUser} submitForm={this.submitForm} />
//         ) : (
//           <>
//             <SelectionBar value={value} handleChange={this.handleChange} />
//             <Search
//               text={text}
//               updateSearch={this.updateSearch}
//               value={value}
//             />
//             <Results search={search} value={value} />
//           </>
//         )}
//       </AppPage>
//     );
//   }
// }

const AppPage = styled.div`
  text-align: center;
`;
