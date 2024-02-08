import React, { useEffect, useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import { handleDrawerAction } from '../../redux/Reducers/DrawerReducer';
const DrawerComponent = () => {
  //const [open, setOpen] = useState(true);
  const {open, ContentComponent, onOkay} = useSelector(state => state.drawerReducer)
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
            <Button type="primary" onClick={() => {
              onOkay()
            }}>
              OK
            </Button>
          </Space>
        }
      >
        {ContentComponent}
      </Drawer>
    </>
  );
};
export default DrawerComponent;