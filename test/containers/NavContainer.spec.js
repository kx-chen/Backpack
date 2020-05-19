import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import NavContainer from '../../app/containers/NavContainer';
import { configureStore } from '../../app/store/configureStore';

Enzyme.configure({ adapter: new Adapter() });

function setup(initialState) {
  const store = configureStore(initialState);
  const history = createBrowserHistory();
  const provider = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <NavContainer />
      </ConnectedRouter>
    </Provider>
  );
  const app = shallow(provider);
  return {
    app,
    menuToggle: app.find('#open-close-menu')
  };
}

describe('NavContainer', () => {
  describe('App', () => {
    it('should open and close menu', () => {
      const { menuToggle, app } = setup({
        subreddits: {
          subreddits: [
            {
              name: 'AskReddit'
            },
            {
              name: 'UBC'
            },
            {
              name: 'gtaonline'
            },
            {
              name: 'vancouver'
            },
            {
              name: 'cscareerquestions'
            }
          ]
        }
      });
      console.log(app.html());
      menuToggle.simulate('click');
    });
  });
});
