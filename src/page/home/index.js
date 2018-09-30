
import React from "react"
import { Menu, Icon, Button } from 'antd';

import './home.css';

import { Avatar } from 'antd';


const SubMenu = Menu.SubMenu;

class Home extends React.Component {
    state = {
        collapsed: false,
        SelectedKeys:null
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div>
                <div class="container">

                    <Button type="primary" onClick={this.toggleCollapsed}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                    <div class="header-right">
                        <Avatar  icon="user" />
                        <div class="user">admin</div>
                    </div>
                </div>

                <div class="content">
                    <div class="left">

                        <Menu
                            onClick = {(key)=>{console.log(key);this.setState({SelectedKeys:{...key}})}}
                            defaultSelectedKeys={['5']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={this.state.collapsed}
                        >
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>首页</span>
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>基本组件</span></span>}>
                                <Menu.Item key="2">按钮</Menu.Item>
                                <Menu.Item key="3">图标</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航组件</span></span>}>
                                <Menu.Item key="4">下拉菜单</Menu.Item>
                                <Menu.Item key="5">导航菜单</Menu.Item>
                                <Menu.Item key="6">步骤条</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>

                    <div class="right">
                        {this.state.SelectedKeys&&this.state.SelectedKeys.key}
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
