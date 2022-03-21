import {View, Text, StyleSheet, Button} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native'
import { useLayoutEffect } from 'react';

export default function About() {

  const route = useRoute();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name === '' ? 'About' : route.params?.name
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text>
        About
      </Text>
      <Text>
        {route.params?.email}
      </Text>
      <Text>
        {route.params?.name}
      </Text>
      <Button title="Contacts Screen" onPress={() => navigation.navigate('Contacts')}/>
      <Button title="Go back" onPress={() => navigation.goBack()}/>
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