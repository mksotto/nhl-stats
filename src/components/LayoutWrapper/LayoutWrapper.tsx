import {FC} from "react";
import {Layout, Menu} from "antd";
import { Outlet } from "react-router-dom";
import { Content, Footer, Header } from "antd/es/layout/layout";

export const LayoutWrapper: FC = () => {


    return (
        <Layout style={{minHeight: '100%'}}>
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ flex: 1, minWidth: 0 }}
                />      
            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer>

            </Footer>
        </Layout>
    )
}