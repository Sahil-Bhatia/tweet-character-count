/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TweetCharCount from "./TweetCharCount";
AppRegistry.registerComponent(appName, () => TweetCharCount);
