import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Details from '../pages/Details';

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: false,
      }
    }>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>

  )
}