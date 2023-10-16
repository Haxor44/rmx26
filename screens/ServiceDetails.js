import { StatusBar } from 'expo-status-bar';
import { Pressable,ScrollView,ImageBackground,StyleSheet,Image, Text, View,SafeAreaView ,TouchableOpacity} from 'react-native';



export default function ServiceScreen({navigation,route}) {
  const service = route.params;
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <ScrollView>
      <View style={styles.backgroundImageContainer}>
        <ImageBackground style={styles.backgroundImage} source={require('../assets/back.jpg')}>
          <View style={styles.header}>
            <View>
              <Pressable style={styles.headerBtn} onPress={()=> navigation.navigate('HomeScreen2') }>
              <Image style={{height:15,width:15}}source={require('../assets/arrow.png')} />
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Text style={{marginTop:15,marginLeft:20,fontSize:30, fontWeight:'bold', textDecorationLine:'underline'}}>Details</Text>
      <View style={styles.serviceContainer}>
        <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Name: {service.name}</Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={styles.ratingTag}>
            <Text style={{color:'white'}}>4.8</Text>
          </View>
          <Text style={{fontSize:12,marginLeft:5}}>150 ratings</Text>

        </View>
        </View>
        
        <Text style={{marginTop:10,fontSize:16,color:'darkgrey'}}>Location: Nakuru</Text>
        <Text style={{marginTop:12,fontSize:20, fontWeight:'bold'}}>Experience</Text>
        <Text style={{marginTop:10,fontSize:16,color:'darkgrey'}}>Education:K.C.S.E</Text>
        <Text style={{marginTop:10,fontSize:16,color:'darkgrey'}}>Description: Good with kids, worked in a nursery school setup as a cook.</Text>
        <TouchableOpacity style={{marginTop:22,borderRadius:10,backgroundColor:'blue',justifyContent:'center',alignItems:'center',paddingVertical: 12,
    paddingHorizontal: 32,elevation:4}} onPress={()=> navigation.navigate('CheckoutScreen',service)}><Text style={{color:'white'}}>Get Service</Text></TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImageContainer: {
    elevation:20,
    marginHorizontal:20,
    marginTop:20,
    alignItems:'center',
    height:350,
  },
  backgroundImage:{
    height:'100%',
    width:'100%',
    borderRadius:20,
    overflow:'hidden',
  },
  header:{
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
  },
  headerBtn:{
    height:40,
    width:40,
    backgroundColor:'white',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
  },
  serviceContainer:{
    flex:1,
    paddingHorizontal:20,
    marginTop:15
  },
  ratingTag:{
    height:30,
    width:35,
    backgroundColor:'mediumslateblue',
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
  }
});
