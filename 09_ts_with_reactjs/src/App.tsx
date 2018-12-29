import * as React from 'react';

import CounterOutput from './CounterOutput';

class App extends React.Component {
  public render() {
    return <CounterOutput counter={1}/>;
  }
}

export default App;
