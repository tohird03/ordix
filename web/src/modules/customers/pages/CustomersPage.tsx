import { useEffect, useState } from 'react';
import { Alert, App, Button, Card, Space, Typography } from 'antd';
import { observer } from 'mobx-react';
import React from 'react';

const CustomersPage = observer(function CustomersPage() {

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <div>
        <Typography.Title level={4} style={{ margin: 0 }}>
          Mijozlar ro'yxati
        </Typography.Title>
        <Typography.Text type="secondary">Jami: 1 ta mijoz</Typography.Text>
      </div>

    </Space>
  );
});

export default CustomersPage;
