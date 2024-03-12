import React from 'react';

function MessageSender({ name }: { name: string }) {
  return <div className="bg-blue-500">{name}</div>;
}

export default MessageSender;
