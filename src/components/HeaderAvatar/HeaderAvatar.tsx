import React from "react"
import { Avatar } from 'antd';

interface Props {
    img:string
}

const HeaderAvatar:React.FC<Props> = ({img}) => {
    return (
        <div>
            <Avatar size={50} icon={<img alt="Avatar" src={img}/>} />
        </div>
    )
}

export default HeaderAvatar