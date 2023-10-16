import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Start!!!</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width:'100%',
    height:'15%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'mediumslateblue'
  },
});
