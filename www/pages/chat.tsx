import React from 'react';
import ModulePage from '../src/components/custom/ModulePage';
import Rooms from '../public/moduleIcons/rooms.svg';
import ChatIconAlt from '../public/moduleIcons/chat2.svg';
import ChatIcon from '../public/moduleIcons/chatLg.svg';

const Chat = () => {
  return (
    <ModulePage
      moduleName="Chat"
      title="This module provides support for creating chat rooms, adding participants and sending messages."
      docsLink="/docs/modules/chat/"
      img={<ChatIcon />}
      features={[
        {
          title: 'Rooms',
          description:
            'The admin panel lets you browse the available chat rooms, create new ones and preview their messages.',
          url: '/docs/modules/chat/get-started#creating-rooms',
          icon: <Rooms />,
        },
        {
          title: 'Messages',
          description:
            'Send messages, with read status from other participants on the room. Allow message deletion and editing according to your needs.',
          url: '/docs/modules/chat/config#available-options',
          icon: <ChatIconAlt />,
        },
      ]}
    />
  );
};

export default Chat;
