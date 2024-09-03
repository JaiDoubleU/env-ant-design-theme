// ComponentShowcase.js
import React, { useState } from 'react';
import { Alert, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, Collapse, DatePicker,  Flex, Form, Input,InputNumber, List, Layout, Menu, Modal, Pagination, Popover, Progress, Radio, Select, Slider, Space, Steps, Switch, Table, Tabs, Tag, TimePicker, Tooltip, Typography, theme} from 'antd';
import CustomHeader from './Header';
import { UserOutlined, CheckOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './index.css';
import {  useTheme} from './ThemeContext'; // Import the ThemeProvider
import { lightTheme, darkTheme } from './theme';


const { Content, Footer } = Layout;
const listData = [ 'List Item 1.', 'List Item 2.', 'List Item 3.',  'List Item 4.',  'List Item 5.'];
const crumbs = [  { title: 'Path', }, { title: <a href="#nogo">to</a>,},{  title: <a href="#nogo">Current</a>,},{  title: 'Page',} ];
const menuItems = [  { label: 'Nav Item 1', key: 'mail', icon: <MailOutlined />,  },  { label: 'Nav Item 2', key: 'app', icon: <AppstoreOutlined />,  },  { label: 'Nav Item 3', key: 'SubMenu', icon: <SettingOutlined />, items: [   {     type: 'group',     label: 'Item 1',     items: [       {      label: 'Option 1',      key: 'setting:1',       },       {      label: 'Option 2',      key: 'setting:2',       },     ],   },   {     type: 'group',     label: 'Item 2',     items: [       {      label: 'Option 3',      key: 'setting:3',       },       {      label: 'Option 4',      key: 'setting:4',       },     ],   }, ],  }];
const tabs = [  { key: '1', label: 'Home', children: 'Content of Home Tab',  },  { key: '2', label: 'About', children: 'Content of About Tab',  },  { key: '3', label: 'Contact', children: 'Content of Contact Tab',  },];
const { Text, Title } = Typography;
const { Panel } = Collapse;

const getRowClassName = (record, index) => (index % 2 === 0 ? 'even' : 'odd');

const ComponentShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useTheme(darkTheme);
  const {
      token: { colorBgHeader, colorBgContainer, colorBgLayout },
  } = theme.useToken();
  

  return (
    <Layout style={{ background: colorBgLayout }}>
      <CustomHeader style={{ display: 'flex', alignItems: 'center', background: colorBgHeader }}/>
      

      <Content style={{ padding: '0 36px', background: colorBgContainer }}>
        <Flex vertical gap="large" >
          <Title level={5}>Enverus Ant Design Components Showcase</Title>
          <Flex gap="small" >
            <Card title="Buttons" size="small" style={{ width: 300 }}>
                <Flex gap="small" wrap>
                  <Button type="primary">Primary Button</Button>
                  <Button>Default Button</Button>
                  <Button type="dashed">Dashed Button</Button>
                  <Button type="text">Text Button</Button>
                  <Button type="link">Link Button</Button>
                </Flex>
            </Card>
          
 
            <Card title="Input Fields" size="small" >
              <Flex gap="small" wrap>

                <Input placeholder="Basic Input" />
                <Input.Password placeholder="Password Input"/>
                <InputNumber placeholder="Number Input" />

                <Flex gap="small" wrap>
                  <Select
                    placeholder="Please Select"
                    
                    options={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                    ]}
                  />

                  <DatePicker  />
                  <TimePicker />
                </Flex>
              </Flex>
            </Card>
          </Flex> 

          <Flex gap="small" wrap>
            <Card title="Forms" size="small" >
                <Form layout="vertical">
                  <Form.Item label="Checkbox">
                    <Checkbox>Checkbox</Checkbox>
                  </Form.Item>
                  <Form.Item label="Radio">
                    <Radio.Group>
                      <Radio value="a">Option A</Radio>
                      <Radio value="b">Option B</Radio>
                      <Radio value="c">Option C</Radio>
                      <Radio value="d">Option D</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label="Switch">
                    <Switch />
                  </Form.Item>
                  <Form.Item label="Slider">
                    <Slider defaultValue={30} />
                  </Form.Item>
                </Form>
            </Card>
            <Card title="Table" size="small" >
              <Table rowClassName={getRowClassName}
                dataSource={[
                  { key: 1, name: 'John Doe', age: 32 },
                  { key: 2, name: 'Jane Smith', age: 28 },
                  { key: 3, name: 'Ted Johnson', age: 24 },
                  { key: 4, name: 'Eric Rainman', age: 38 },
                  { key: 5, name: 'John Doe', age: 32 },
                  { key: 6, name: 'Jane Smith', age: 28 },
                ]}
                columns={[
                  { title: 'Empl #', dataIndex: 'key', key: 'key' },
                  { title: 'Name', dataIndex: 'name', key: 'name' },
                  { title: 'Age', dataIndex: 'age', key: 'age' },
                ]}
              />
            </Card>

            <Card title="Alerts, Progress Bar, Popover" size="small" >
              <Flex gap="small" style={{ margin: '0 0 15px 0'}} >
                <Alert message="This is an info type of alert" type="info" style={{ margin: '0 0 4px 0'}} showIcon />
                <Alert message="This is a warning type of alert" type="warning" sstyle={{ margin: '0 0 4px 0'}}showIcon />
                <Alert message="This is an error type of alert" type="error" style={{ margin: '0 0 4px 0'}}showIcon />
              </Flex>
              <Flex gap="small" style={{ margin: '0 0 15px 0'}}>
                <Progress percent={50} status="active" />
                </Flex>
              <Flex gap="small" style={{ margin: '0 0 15px 0'}}>
                <Popover content="This is a popover" title="Popover Title">
                  <Button>Popover Hover Me</Button>
                </Popover>

                <Button onClick={showModal}>
                  Open Modal
                </Button>

                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
              </Flex>
            </Card> 

            <Card title="Tags & Badges" size="small" >
              <Flex gap="small" wrap style={{ margin: '0 0 15px 0'}}>
                <Tag>Default Tag</Tag>
                <Tag color="green">Green Tag</Tag>
                <Tag color='red'>Red Tag</Tag>

              </Flex>
              <Flex gap="small" wrap>
                <Badge color="green" count={25}></Badge>
                <Badge color="blue" count={4}></Badge>
                <Badge color="yellow" count={9}></Badge>
                <Badge color="orange" count={1250}></Badge>
                <Badge count={5}>
                  <Avatar shape="square" icon={<UserOutlined />} />
                </Badge>
              </Flex>
            </Card>

           <Card title="Typography" size="small" >
              <legend>Typography</legend>
              <Title level={1}>Title H1</Title>
              <Title level={2}>Title H2</Title>
              <Title level={3}>Title H3</Title>
              <Title level={4}>Title H4</Title>
              <Title level={5}>Title H5</Title>
              <Text>Body Text</Text>
            </Card>
          </Flex>


          <Flex gap="small">
           <Card title="Navigation" size="small" >
              <Menu items={menuItems}  mode="horizontal" style={{ minWidth: '500px', margin: '0 0 15px 0'}}>
                
              </Menu>

              <Tabs defaultActiveKey="1" items={tabs} />

              <Breadcrumb style={{ minWidth: '500px', margin: '15px 0'}} items={crumbs}/>
           
              <Steps current={1} style={{ minWidth: '500px', margin: '25px 0px '}}>
                <Steps.Step title="Step 1" description="Step description." />
                <Steps.Step title="Step 2" description="Step description." />
                <Steps.Step title="Step 3" description="Step description." />
              </Steps>

              <Pagination defaultCurrent={1} total={50} showSizeChanger showQuickJumper style={{ minWidth: '500px', margin: '15px 0px'}}/>

            </Card>

            <Card title="Cards" size="small" >              
              <Flex vertical gap="large" >
                
                <Card title="Card Default" >
                  <p>Card content</p>           
                </Card>

                <Card title="Card Small" size="small" >
                  <p>Card content</p>           
                </Card>
              </Flex>
            </Card> 
            
            <Card title="Collapse" size="small" >     
              <Flex gap='large' vertical>

                
                <Collapse items={[{ key: '1', label: 'Collapse 1', children: <dov>Collapse content</dov> },{ key: '2', label: 'Collapse 2', children: <div>Collapse content</div> }]}/>

                <Collapse size="large" items={[{ key: '1', label: 'Large Collapse 1', children: <div>Collapse content</div> },{ key: '2', label: 'Large Collapse 2', children: <div>Collapse content</div> }]}/>

                <Collapse accordion>
                  <Panel header="Accordion 1" key="1">
                    <div>Accordion content</div>
                  </Panel>
                  <Panel header="Accordion 2" key="2">
                    <div>Accordion content</div>
                  </Panel>
                  <Panel header="Accordion 3" key="3">
                    <div>Accordion content</div>
                  </Panel>
                </Collapse>               
              </Flex>
            </Card>

            

             <Card title="Lists" size="small" >     
              <Flex gap='large' wrap>
                <List
                  header={<div>Header</div>}
                  footer={<div>Footer</div>}
                  bordered
                  dataSource={listData}
                  renderItem={(item) => (
                    <List.Item>
                      <Typography.Text ></Typography.Text> {item}
                    </List.Item>
                  )}
                />
                          
              </Flex>
              </Card>

          </Flex>
        </Flex>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} Enverus User Experience.  All rights reserved.
      </Footer>
    </Layout>
  );
};

export default ComponentShowcase;
