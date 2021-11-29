expo install expo-app-loading -- 


MUST READ: Installing Different Navigators
DON'T SKIP THIS LECTURE - PLEASE READ TO BOTTOM!

---

If you're using React Navigation v4 or higher, everything works as shown in this module but there is one important difference: You need to install the different navigators which we'll use in this module (StackNavigator, DrawerNavigator, TabsNavigator) separately.

So when we use the StackNavigator (= next lecture), run

npm install --save react-navigation-stack
before you start using it (with v3 and lower, it was part of react-navigation itself).

Also add this import in the file where you are using createStackNavigator:

import { createStackNavigator } from 'react-navigation-stack';
Same for TabsNavigator (used a little bit later in this module):

npm install --save react-navigation-tabs
import { createBottomTabNavigator } from 'react-navigation-tabs';
And also for DrawerNavigator (also used later in this module):

npm install --save react-navigation-drawer
import { createDrawerNavigator } from 'react-navigation-drawer';


React Navigation & Code Attachments
You don't have to read this lecture - it's only relevant if you plan on running one of my code attachments!

Throughout the course, you find code attachments which you can use to compare your code to mine.

In case you want to run my attachments, make sure you follow these steps to use react-navigation v4 in them:

1) Run npm install and then expo upgrade

2) Install all extra navigators that are required for this specific code snapshot:

npm install --save react-navigation-stack

npm install --save react-navigation-tabs

npm install --save react-navigation-drawer

(of course you can combine that all into one npm install command if you need all of them)

3) Make sure you're using version 4 of react-navigation

npm install --save react-navigation@latest

4) Install all required dependencies

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

5) Update all "navigator" imports

import { createStackNavigator, createAppContainer } from 'react-navigation';

would become

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
for example. Do that for all navigators (e.g. tabs, drawer) you might be using in the specific snapshot.

And with that, the attachments should work.

I basically show all of that throughout the lectures - I'm just summing it up here so that you have a quick & easy go-to reference.


Header Buttons: Using the Correct Version
In the next lecture, we'll add a package named "react-navigation-header-buttons".

In order to avoid errors, make sure you're using the correct version of that package => Version 6

You can install that via npm install --save react-navigation-header-buttons@6

(instead of just npm install --save react-navigation-header-buttons which I use in the next lecture)


With React navigation V4, import {createBottomTabNavigator} from 'react-navigation-tabs'(via npm install)



navigationOptions inside of a Navigator
When defining a navigator, you can also add navigationOptions to it:

const SomeNavigator = createStackNavigator({
    ScreenIdentifier: SomeScreen
}, {
    navigationOptions: {
        // You can set options here!
        // Please note: This is NOT defaultNavigationOptions!
    }
});
Don't mistake this for the defaultNavigationOptions which you could also set there (i.e. in the second argument you pass to createWhateverNavigator()).

The navigationOptions you set on the navigator will NOT be used in its screens! That's the difference to defaultNavigationOptions - those option WILL be merged with the screens.

So what's the use of navigationOptions in that place then?

The options become important once you use the navigator itself as a screen in some other navigator - for example if you use some stack navigator (created via createStackNavigator()) in a tab navigator (e.g. created via createBottomTabNavigator()).

In such a case, the navigationOptions configure the "nested navigator" (which is used as a screen) for that "parent navigator". For example, you can use navigationOptions on the nested navigator that's used in a tab navigator to configure the tab icons.


Downgrading to 2.1.0 worked for me too. Uninstall with npm uninstall react-native-reanimated and then install it with npm install react-native-reanimated@2.1.0 just to make sure :)


Debugging Redux in React Native Apps
You can debug Redux in React Native apps with help of the React Native Debugger tool: https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md

1) Make sure you got the React Native Debugger installed (https://github.com/jhen0409/react-native-debugger)

2) Enable JS Debugging in the running app (open development overlay via CTRL + M / CMD + M on Android devices, CMD + D on iOS devices)

3) Install the redux-devtools-extension package via npm install --save-dev redux-devtools-extension (https://www.npmjs.com/package/redux-devtools-extension)