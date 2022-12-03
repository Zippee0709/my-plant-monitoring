import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button, Text } from '@nextui-org/react';
import AuthContext from '../../contexts/auth.context';
import BellIcon from '../icons/BellIcon';

const NotificationModal = () => {
  const authContext = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (authContext) {
      setVisible(authContext.notification);
    }
  }, []);

  return (
    <div>
      <Button auto onClick={handler} css={{ backgroundColor: 'transparent', p: 0 }}>
        <BellIcon />
      </Button>
      <Modal closeButton aria-labelledby='modal-title' open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Activate&nbsp;
            <Text b size={18}>
              notifications push
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body css={{ textAlign: 'center' }}>
          <Text>
            Notification Status : &nbsp;
            {authContext?.notification ? (
              <Text b color='success'>
                ON
              </Text>
            ) : (
              <Text b color='error'>
                OFF
              </Text>
            )}
          </Text>
          <Text>To receive push notifications, please accept notifications in your browser</Text>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </div>
  );
};

export default NotificationModal;
