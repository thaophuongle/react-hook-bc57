import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import { handleDrawerAction } from '../../redux/Reducers/DrawerReducer';
const DrawerComponent = () => {
  //const [open, setOpen] = useState(true);
  const {open} = useSelector(state => state.drawerReducer)
  const dispatch = useDispatch()

  const handleCloseDrawer = () => {
    const action = handleDrawerAction(false)
    dispatch(action)
  }
  return (
    <>
      <Drawer
        title={`default`}
        placement="right"
        size={'large'}
        onClose={handleCloseDrawer}
        open={open}
        extra={
          <Space>
            <Button onClick={handleCloseDrawer}>Cancel</Button>
            <Button type="primary">
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default DrawerComponent;