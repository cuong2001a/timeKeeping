import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React from 'react';
import { dataDate } from './constant';
import { SearchOutlined } from '@ant-design/icons';
import TableComponent from './component/Table';
function Calendar(props) {
  const { Option } = Select;
  return (
    <div className="tableTimeKeeping">
      <Form>
        <Form.Item
          style={{ alignItem: 'center' }}
          name="dateTime"
          label={
            <span style={{ fontSize: '30px', fontWeight: 700 }}>
              Chấm công{' '}
              <span style={{ color: '#066F9B', textTransform: 'capitalize' }}>
                tháng
              </span>
            </span>
          }
          labelAlign="left"
        >
          <DatePicker
            placeholder=""
            style={{ padding: '5px', border: 'none', width: '150px' }}
            picker="month"
          />
        </Form.Item>
        <Row>
          <Col span={23}>
            <Form.Item name="search">
              <Input
                style={{ backgroundColor: '#E5E5E5', borderRadius: '8px' }}
                placeholder="Search"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={1}>
            <Form.Item>
              <Button
                size="large"
                style={{ border: 'none', boxShadow: 'none' }}
                icon={<SearchOutlined />}
              ></Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="sort">
              <Select
                defaultValue="Filter"
                style={{ minWidth: '100px', border: 'none' }}
              >
                {dataDate?.map((item, index) => {
                  return (
                    <Option key={index} value={item?.id}>
                      {item?.value}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div>
        <TableComponent />
      </div>
    </div>
  );
}

export default Calendar;
