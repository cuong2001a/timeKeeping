import React from 'react';
import { Table } from 'antd';
const TableComponent = () => {
  const column = [
    {
      titlle: 'Stt',
      dataIndex: 'stt',
      key: 'id',
      width: '10%',
    },
    {
      title: 'Nhân viên',
      dataIndex: 'staff',
      key: 'staff',
      width: '15%',
    },
    { title: 1, dataIndex: 1, key: 1 },
    { title: 2, dataIndex: 2, key: 2 },
    { title: 3, dataIndex: 3, key: 3 },
    { title: 4, dataIndex: 4, key: 4 },
    { title: 5, dataIndex: 5, key: 5 },
    { title: 6, dataIndex: 6, key: 6 },
    {
      title: 'Ngày làm việc',
      dataIndex: 'totalDate',
      key: 'totalDate',
      width: '15%',
    },
  ];
  return (
    <div>
      <Table columns={column} />
    </div>
  );
};

export default TableComponent;
