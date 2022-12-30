/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { registerRootComponent } from 'expo';
import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from "@react-navigation/native"
import { Auth } from "aws-amplify"
import { withAuthenticator } from "aws-amplify-react-native"

import { DataStore } from "@aws-amplify/datastore";
import { Amplify } from '@aws-amplify/core';

import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);
// Auth.configure(awsconfig);

import MalasadaScreen from "./Screens/MalasadaScreen"

const App = () => {

  return (
   <>
   <NavigationContainer>
    <MalasadaScreen />
   </NavigationContainer>
   </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default registerRootComponent(App);
