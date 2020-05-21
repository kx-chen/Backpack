import { spy } from 'sinon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Nav from '../../app/components/Nav';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const actions = {
    onMenuChange: spy(),
    onSubredditSelect: spy(),
    onDownloadSubreddit: spy(),
    onSaveNewSubreddit: spy(),
  };
  const component = shallow(<Nav open={false} subreddits={[]} selectedSubreddit={''} {...actions} />);
  return {
    component,
    actions,
    menuToggle: component.find('#open-close-menu'),
  };
}

describe('Nav component', () => {
  it('should call onMenuChange on click', () => {
    const { menuToggle, actions } = setup();
    menuToggle.simulate('click');
    expect(actions.onMenuChange.called).toBe(true);
  });

  it('should match exact snapshot', () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
