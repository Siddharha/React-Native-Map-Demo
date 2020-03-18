import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('Map_demo', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('Map_demo', { rootTag });
}
