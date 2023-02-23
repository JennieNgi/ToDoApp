/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from './screens/Todo.js';
import Done from './screens/Done.js';
import AntDesign  from 'react-native-vector-icons/Foundation';


const Tab = createBottomTabNavigator();

const App = () => {

  const [doneList, setDoneList] = useState([]);
    
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Todo" 
          children={()=><Todo doneList={doneList} setDoneList={setDoneList}/>}
          options={{
            tabBarLabel: 'ToDo',
            tabBarLabelStyle: {
              fontSize: 18,
            },
            tabBarIcon: ({size, color, focused}) => (
              <AntDesign name='plus' size={25} color={focused ? 'orange' : 'black'}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Done"
          children={()=><Done doneList={doneList}/>} 
          options={{
            tabBarLabel: 'ToDo',
            tabBarLabelStyle: {
              fontSize: 18,
            },
            tabBarIcon: ({size, color, focused}) => (
              <AntDesign name='check' size={25} color={focused ? 'orange' : 'black'}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
