import { StackActions, useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Contacts() {
  const navigation = useNavigation();

  function handleHome(){
    navigation.dispatch(StackActions.popToTop())
  }

  return (
    <View style={styles.container}>
      <Text>Contacts</Text>
      <Button title="Back To Home" onPress={handleHome}/>
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