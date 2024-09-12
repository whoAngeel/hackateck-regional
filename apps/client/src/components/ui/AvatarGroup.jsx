import React from 'react';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';
const AvatarGroup = () => (
    <Avatar.Group
      size="large"
      max={{
        count: 2,
        style: {
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        },
      }}
    >
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1677ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
    
  
);
export default AvatarGroup;