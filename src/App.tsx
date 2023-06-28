import React, { useState } from 'react';
// import Class from '@/components/Class';
import Game from '@/components/Game';
import './app.less';

function App() {
  const [count, setCounts] = useState('');
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  return (
    <>
      <h1>webpack5+react+ts</h1>
      <p>受控组件</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type="text" />
      {/* <Class /> */}
      <p>井字棋游戏</p>
      <Game />
    </>
  );
}
export default App;
