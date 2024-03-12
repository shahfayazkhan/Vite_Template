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
    {
      name: 'email',
      url: '/email',
      option: [
        {
          name: 'gmail',
          url: '/email/gmail',
        },
        {
          name: 'yahoo',
          url: 'email/yahoo',
        },
      ],
    },
  ];

  const [list, setList] = useState(options);
  const [isNested, setIsNested] = useState(false);

  // const isLogin = false;

  // useEffect(() => {
  //   if(!isLogin) {
  //     navigate("/auth/signin");
  //   }
  // }, [isLogin]);

  // if(!isLogin) return <></>;

  return (
    <div>
      <Header />

      <div className="flex items-center">
        <div className="flex flex-col bg-red-700">
          {list.map((item) => (
            <button
              onClick={() => {
                navigate(item.url);

                if (item.option) {
                  setList(item.option);
                  setIsNested(true);
                }
              }}
            >
              {item.name}
            </button>
          ))}

          {isNested && (
            <button
              onClick={() => {
                setList(options);
                setIsNested(false);
              }}
            >
              {' '}
              Back to Option
            </button>
          )}
        </div>

        <div className="bg-blue-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
