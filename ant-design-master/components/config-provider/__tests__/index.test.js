import React, { useState } from 'react';
import { mount } from 'enzyme';
import { SmileOutlined } from '@ant-design/icons';
import ConfigProvider, { ConfigContext } from '..';
import Button from '../../button';
import Table from '../../table';
import Input from '../../input';
import mountTest from '../../../tests/shared/mountTest';
import { render, fireEvent } from '../../../tests/utils';

describe('ConfigProvider', () => {
  mountTest(() => (
    <ConfigProvider>
      <div />
    </ConfigProvider>
  ));

  it('Content Security Policy', () => {
    const csp = { nonce: 'test-antd' };
    const wrapper = mount(
      <ConfigProvider csp={csp}>
        <Button />
      </ConfigProvider>,
    );

    expect(wrapper.find('Wave').instance().csp).toBe(csp);
  });

  it('autoInsertSpaceInButton', () => {
    const wrapper = mount(
      <ConfigProvider autoInsertSpaceInButton={false}>
        <Button>确定</Button>
      </ConfigProvider>,
    );

    expect(wrapper.find('Button').text()).toBe('确定');
  });

  it('renderEmpty', () => {
    const wrapper = mount(
      <ConfigProvider renderEmpty={() => <div>empty placeholder</div>}>
        <Table />
      </ConfigProvider>,
    );

    expect(wrapper.text()).toContain('empty placeholder');
  });

  it('nest prefixCls', () => {
    const wrapper = mount(
      <ConfigProvider prefixCls="bamboo">
        <ConfigProvider>
          <Button />
        </ConfigProvider>
      </ConfigProvider>,
    );

    expect(wrapper.exists('button.bamboo-btn')).toBeTruthy();
  });

  it('dynamic prefixCls', () => {
    const DynamicPrefixCls = () => {
      const [prefixCls, setPrefixCls] = useState('bamboo');
      return (
        <div>
          <Button onClick={() => setPrefixCls('light')} className="toggle-button">
            toggle
          </Button>
          <ConfigProvider prefixCls={prefixCls}>
            <ConfigProvider>
              <Button />
            </ConfigProvider>
          </ConfigProvider>
        </div>
      );
    };

    const { container } = render(<DynamicPrefixCls />);

    expect(container.querySelector('button.bamboo-btn')).toBeTruthy();
    fireEvent.click(container.querySelector('.toggle-button'));
    expect(container.querySelector('button.light-btn')).toBeTruthy();
  });

  it('iconPrefixCls', () => {
    const wrapper = mount(
      <ConfigProvider iconPrefixCls="bamboo">
        <SmileOutlined />
      </ConfigProvider>,
    );

    expect(wrapper.find('[role="img"]').hasClass('bamboo')).toBeTruthy();
    expect(wrapper.find('[role="img"]').hasClass('bamboo-smile')).toBeTruthy();
  });

  it('input autoComplete', () => {
    const wrapper = mount(
      <ConfigProvider input={{ autoComplete: 'off' }}>
        <Input />
      </ConfigProvider>,
    );

    expect(wrapper.find('input').props().autoComplete).toEqual('off');
  });

  it('render empty', () => {
    let rendered = false;
    let cacheRenderEmpty;

    const App = () => {
      const { renderEmpty } = React.useContext(ConfigContext);
      rendered = true;
      cacheRenderEmpty = renderEmpty;
      return null;
    };

    render(
      <ConfigProvider>
        <App />
      </ConfigProvider>,
    );

    expect(rendered).toBeTruthy();
    expect(cacheRenderEmpty).toBeFalsy();
  });
});
