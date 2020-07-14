import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList78513Navigator from '../features/ArticleList78513/navigator';
import ArticleList78512Navigator from '../features/ArticleList78512/navigator';
import ArticleList78511Navigator from '../features/ArticleList78511/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList78513: { screen: ArticleList78513Navigator },
ArticleList78512: { screen: ArticleList78512Navigator },
ArticleList78511: { screen: ArticleList78511Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
