import { useNavigation } from '@react-navigation/native'
import {View, Text, StyleSheet, Button} from 'react-native'

export default function Home() {
  const navigation = useNavigation()

  function navigateToAbout() {
    navigation.navigate('About', {name: 'Marquin', email: 'marquin@gmail.com'})
  }
  
  return (
    <View style={styles.container}>
      <Text>
        Home
      </Text>
      <Button title="Go to About" onPress={navigateToAbout} />
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