import React from "react"
import "./Header.css"
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';
import HeaderAvatar from "../HeaderAvatar/HeaderAvatar";
import { useNavigate } from "react-router-dom";



const Header: React.FC = () => {
    const navigate= useNavigate()
    const onClick: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    const items: MenuProps['items'] = [
        {
            label: '1st menu item',
            key: '1',
        },
        {
            label: '2nd menu item',
            key: '2',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];

    return (
        <>
            <div className="Header Flex Item__Center Space__Between">
                <div className="Header__Left Flex">
                    <div onClick={() => {
                        navigate("/")
                    }} className="HeaderItem Flex Item__Center">
                        Dashboard
                    </div>
                    <div className="HeaderItem Flex Item__Center">
                        <Dropdown menu={{ items, onClick }}>
                            <span onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Jobs
                                    <DownOutlined />
                                </Space>
                            </span>
                        </Dropdown>
                    </div>
                    <div className="HeaderItem Flex Item__Center">
                        <Dropdown menu={{ items, onClick }}>
                            <span onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Items
                                    <DownOutlined />
                                </Space>
                            </span>
                        </Dropdown>
                    </div>
                    <div className="HeaderItem Flex Item__Center">
                        <Dropdown menu={{ items, onClick }}>
                            <span onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Account
                                    <DownOutlined />
                                </Space>
                            </span>
                        </Dropdown>
                    </div>

                    <div className="HeaderItem Flex Item__Center">
                        <Dropdown menu={{ items, onClick }}>
                            <span onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Masters
                                    <DownOutlined />
                                </Space>
                            </span>
                        </Dropdown>
                    </div>
                    <div className="HeaderItem Flex Item__Center">
                        <Dropdown menu={{ items, onClick }}>
                            <span onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Appearance
                                    <DownOutlined />
                                </Space>
                            </span>
                        </Dropdown>
                    </div>

                    <div className="HeaderItem Flex Item__Center">
                        Blogs
                    </div>
                </div>
                <div className="Header__Right Flex Item__Center Justify__Center">
                    <HeaderAvatar img="https://lh3.googleusercontent.com/-cwjpAsJjFdA/AAAAAAAAAAI/AAAAAAAAAAA/AFNEGgIH4oXga3YKR2y00WwWS8zuuE2Bhg/photo.jpg?"/>
                    <div className="Avatar__Text Flex Flex__Column">
                       <span>Vinay Maheshwari</span>
                        <span className="User__Type">Admin</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header 