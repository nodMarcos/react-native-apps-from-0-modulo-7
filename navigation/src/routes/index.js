import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes'
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,

        drawerActiveBackgroundColor: '#7159c1',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#fff',
        drawerInactiveTintColor: '#000',

      }}
    >
      <Drawer.Screen name="HomeStack" component={StackRoutes} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contacts" component={Contacts} />
    </Drawer.Navigator>
    
  )
}