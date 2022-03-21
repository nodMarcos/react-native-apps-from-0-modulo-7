import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={35} color="#11118c"/>

      <FontAwesome name="user" size={25} color="#54a300"/>

      <Feather name="gift" size={65} color="#7665ff"/>

      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome name="youtube" size={25} color="#fff"/>
        <Text style={styles.text}>Acessar canal</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnYoutube: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ff0000',
    borderRadius: 5,
  },
  text: {
    paddingLeft: 10,
    color: '#fff'
  }

});
