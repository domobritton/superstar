import React, { Component } from 'react';
import fetch from 'unfetch';

import Components from './components/Components';
import { SignIn } from './components/SignIn/SignIn';
import { Header } from './components/Header/Header';

import { STATUS, Loading } from 'gitstar-components';
import { AppPage } from './AppStyle';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = 'https://superstargit.herokuapp.com/';
// const REDIRECT_URI = 'http://localhost:3000/';

class App extends Component {
  state = {
    status: STATUS.INITIAL,
    token: null,
  };

  componentDidMount() {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.setState({
        token: storedToken,
        status: STATUS.AUTHENTICATED,
      });
      return;
    }
    const code =
      window.location.href.match(/\?code=(.*)/) &&
      window.location.href.match(/\?code=(.*)/)[1];
    if (code) {
      this.setState({ status: STATUS.LOADING });
      fetch(`https://gitsuperstar.herokuapp.com/authenticate/${code}`)
        .then(response => response.json())
        .then(({ token }) => {
          localStorage.setItem('token', token);
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
    const { status } = this.state;
    return (
      <AppPage>
        {status === STATUS.INITIAL ? (
          <SignIn
            status={status}
            CLIENT_ID={CLIENT_ID}
            REDIRECT_URI={REDIRECT_URI}
          />
        ) : (
          <div>
            <Header status={status} logout={this.logout} />
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
            {status === STATUS.AUTHENTICATED && <Components status={status} />}
          </div>
        )}
      </AppPage>
    );
  }
}

export default App;
