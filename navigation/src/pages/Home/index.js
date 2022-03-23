import { useNavigation } from '@react-navigation/native'
import {View, Text, StyleSheet, Button} from 'react-native'

export default function Home() {
  const navigation = useNavigation()

  function navigateToDetails() {
    navigation.navigate('Details')
  }
  
  return (
    <View style={styles.container}>
      <Text>
        Home
      </Text>
      <Button title="Go to Details" onPress={navigateToDetails} />
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})