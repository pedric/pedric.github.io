import React from 'React';
import { mount } from 'enzyme';
/* eslint-enable import/extensions */
import Header from './Header.jsx';

const props = { title: 'Title' };

describe('<Header />', () => {
  it('should render the right classes', () => {
    const wrapper = mount(<Header {...props} />);
    expect(wrapper.find('.header').exists()).toEqual(true);
    expect(wrapper.find('.centered').exists()).toEqual(true);
  });

  it('should render the right title', () => {
    const wrapper = mount(<Header {...props} />);
    expect(wrapper.text()).toEqual('Title');
  });
});
