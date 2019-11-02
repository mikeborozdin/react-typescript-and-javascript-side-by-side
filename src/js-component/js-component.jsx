import React from 'react';
import TsComponent from './ts-component/ts-component';

const JsComponent = () => (
  <>
    <div>Hi, I'm a JavaScript component and I'm calling a TypeScript component</div>
    <TsComponent myProp={'zzzz'} />
  </>
);

export default JsComponent;
