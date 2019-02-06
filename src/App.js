import React, { Component } from 'react';

import { Components } from './Components';
import { SignIn } from './Components/SignIn/SignIn';
import { Header } from './Components/Header/Header';

import { STATUS, Loading } from 'gitstar-components';
import { AppPage } from './AppStyle';

const CLIENT_ID = 'Iv1.98fb84f6596d6c86';
const REDIRECT_URI = 'https://superstargit.herokuapp.com/';

class App extends Component {
  state = {
    status: STATUS.INITIAL,
    token: null,
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
