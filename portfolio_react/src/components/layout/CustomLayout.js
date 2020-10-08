import React from 'react'
import {Layout} from 'antd'


const {Header, Footer, Sider, Content} = Layout;

function CustomLayout(props) {
    return(
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>
                    <div className="site-layout-content">
                        {props.children}
                    </div>
                </Content> 
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
};

export default CustomLayout;