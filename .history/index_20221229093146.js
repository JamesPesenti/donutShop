/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

AppRegistry.registerComponent(appName, () => App);
