//REACT-ROUTER-DOM
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Header';
import { useState } from 'react';

export default function DrawarLayout(): JSX.Element {
  const navigate = useNavigate();

  const options = [
    {
      name: 'dasboard',
      url: '/dasboard',
    },
    {
      name: 'whatsapp',
      url: '/whatsapp',
    },
    {
      name: 'mobile',
      url: '/mobile',
    },
  ];

  const [list, setList] = useState(options);

  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex flex-row gap-3">
        <div className="flex flex-col bg-gray-400 w-[10%] h-full">
          {list.map((item) => (
            <div className="h-12">
              <div className="cursor-pointer hover:bg-red-300" onClick={() => navigate(item.url)}>
                {item.name}
              </div>
            </div>
          ))}
        </div>

        <div className="flex py-3 pr-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
