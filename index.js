/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import MyApp from './app/components/app'
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => MyApp);
