import * as React from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import {CreateAppContainer} from 'ract-native-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './Screens/WriteStoryScreen';
import ReadStoryScreen from './Screens/ReadStoryScreen';

export default class App extends React.Component{
  render(){
    return(
      <ApppContainer/>

    );
  }
}

const TabNavigator=createBottomTabNavigator({
  WriteStoryScreen:{screen:WriteStoryScreen},
  ReadStoryScreen:{screen:ReadStoryScreen},
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeNaame=navigation.state.routeName;
      if(routeName==="WriteStory"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40,height:40}}
          />
        )
      }
      else if(routeName="ReadStory"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40,height:40}}
          />
        )
      }
    }
  })
});

const ApppContainer=CreateAppContainer(TabNavigator);
