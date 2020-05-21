import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from '../../app/components/Post';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const actions = {
    onPostSelected: spy()
  };
  const component = shallow(<Post id={'abce'}
                                  key={'abcd'}
                                  title={'efg'}
                                  numComments={'23'}
                                  author={'Dog'}
                                  ups={'39'}
                                  {...actions}/>);
  return {
    component,
    actions,
    onPostSelected: component.find('#post-container'),
  };
}

describe('Post component', () => {
  it('should call onPostSelected on click', () => {
    const { onPostSelected, actions } = setup();
    onPostSelected.simulate('click');
    expect(actions.onPostSelected.called).toBe(true);
  });

  it('should match exact snapshot', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
