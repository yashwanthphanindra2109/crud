import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Start from './screens/Start'
import Form from './screens/Form'

const Stack = createStackNavigator()



const Routes = () => (


  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{
          title: 'CRUD OPERATIONS',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Form"
        component={Form}
        options={{
          headerShown: true,
          title: 'EDIT',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
