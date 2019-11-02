import React from 'react';
import AnotherJsComponent from './another-js-component/another-js-component';

interface Props {
  myProp: number;
}

const TsComponent: React.FC<Props> = ({ myProp }) => (
  <>
    <div>
      Hi, I'm a TypeScript component and I'm accept a number prop which is {myProp}
    </div>
    <AnotherJsComponent a={1} b='foo' />
  </>
);

export default TsComponent;
