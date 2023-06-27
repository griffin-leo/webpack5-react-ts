import React, { useState } from 'react';
// import Class from '@/components/Class';
import './app.less';

function MyButton() {
  return (
    <>
      <button>I'm a button</button>
    </>
  );
}

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
    </>
  );
}
export default App;
