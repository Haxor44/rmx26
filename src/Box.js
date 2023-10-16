import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Box() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.inner}>
            <Text>Box 1</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
            <Text>Box 2</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
            <Text>Box 1</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
            <Text>Box 1</Text>
        </View>
      </View>

      <View style={styles.box}>
        <View style={styles.inner}>
            <Text>Box 1</Text>
        </View>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'85%',
    padding:6,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  box:{
    width:'50%',
    height:'50%',
    padding:6
  },
  inner:{
    flex:1,
    backgroundColor:'#eee',
    alignItems:'center',
    justifyContent:'center'
  }
});
