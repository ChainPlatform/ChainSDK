# ChainSDK
@chainplatform/sdk is a React Native library implement for react-native and react-native-web. Require crypto-js and react-native-mmkv packages.

<p align="center">
  <a href="https://github.com/ChainPlatform/ChainSDK/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/sdk">
    <img src="https://img.shields.io/npm/v/@chainplatform/sdk?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/sdk">
    <img src="https://img.shields.io/npm/dt/@chainplatform/sdk.svg"></img>
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/sdk">
    <img src="https://img.shields.io/badge/platform-android%20%7C%20ios%20%7C%20web-blue"></img>
  </a>
  <a href="https://github.com/ChainPlatform/ChainSDK/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=doansan">
    <img src="https://img.shields.io/twitter/follow/doansan.svg?label=Follow%20@doansan" alt="Follow @doansan" />
  </a>
</p>

### Install
```
npm install @chainplatform/sdk --save
```
or
```
yarn add @chainplatform/sdk
```


### Usage

```js
import React from 'react';
import * as ChainSDK from '@chainplatform/sdk';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          
        };
    }

  render() {
    return (
      <View style={{flex:1}}></View>
    );
  }
}
```