import './style.css';
import React, { useState } from 'react';

export default function App() {
  let arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [data, setData] = useState(arr);
  const getSelec = (id) => {
    let sel = data.findIndex((val) => val.id === id);
    data[sel].select = !data[sel].select;
    setData([...data]);
  };
  console.log('11111111111111');
  return (
    <>
      {data.map((x) => {
        return (
          <div className={x.select ? 'black' : 'test'}>
            <input type="checkbox" onClick={() => getSelec(x.id)} />
            {x.id}
          </div>
        );
      })}
    </>
  );
}
