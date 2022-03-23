import {View, Text, StyleSheet} from 'react-native';

export default function Details() {
  return (
    <View style={styles.container}>
      <Text>Details from users</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})