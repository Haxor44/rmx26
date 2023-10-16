import { View, Text, TextInput,StatusBar, StyleSheet,Image,Pressable,SafeAreaView,ScrollView,Dimensions,FlatList } from 'react-native'
import React from 'react'
const {width} = Dimensions.get('screen');


const items = [
    {
      id: 1, 
      name: 'Kim', 
      category: 'Mechanic'
    },
    {
      id: 2, 
      name: 'Kamau',
      category: 'Maid',
    },
    {
      id: 3, 
      name: 'John Doe',
      category: 'Mechanic',
    },
    {
      id: 4, 
      name: 'TEst',
      category: 'Electrician'
    }
  ]

export default function HomeScreen2({navigation}) {


  const categoryList = ['Popular', 'Recommended', 'Nearest'];

  const ListServices = () => {
    const [selectServiceCategory,setSelectServiceCategory] = React.useState(0);
    return(
        <View style={styles.listServices}>
          {categoryList.map((category,index)=>(
            <Pressable
            key={index}
            onPress={() => selectServiceCategory(index)}>
            <Text
              style={[
                styles.categoryListText,
                index = setSelectServiceCategory && styles.activeServiceCategory,
              ]}>
              {category}
            </Text>
          </Pressable>
            ))}
          
        </View>
      )
  }


  const ListCategories = () =>{
    return(
        <View style={styles.listCategories}>
          <View style={styles.cardsCategory}>
            <Image source={require('../assets/about.jpg')} style={{height:140,borderRadius:10,width:'100%'}}/>
            <Text style={{marginTop:10,fontSize:16,fontWeight:'bold'}}>House Managers</Text>
          </View>
          <View style={styles.cardsCategory}>
            <Image source={require('../assets/m.jpg')} style={{height:140,borderRadius:10,width:'100%'}}/>
            <Text style={{marginTop:10,fontSize:16,fontWeight:'bold'}}>Mechanics</Text>
          </View>
        </View>

      )
  }

  const Cards = ({services}) =>{
    return(
    <Pressable onPress={()=> navigation.navigate('ServiceDetails',services) }>
      <View style={styles.cards}>
        <Image source={require('../assets/back.jpg')} style={{width:'100%',height:120,borderRadius:15}}/>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,}}>
          <Text style={{fontWeight:'bold'}}>Name: {services.name}</Text>
          <Text style={{color:'#009CDB',fontWeight:'bold'}}>KSH10,000</Text>
        </View>
        <Text style={{color:'grey',marginTop:6}}>{services.category}</Text>   
      </View>
      </Pressable>
    )
  }
  return (
    <SafeAreaView>
    <View style={styles.header}>
     <Text style={{color:'darkgrey',fontSize:20,fontWeight:'bold'}}>Roman</Text>
     <Image source={require('../assets/back.jpg')} style={styles.pimage} />
    </View>
    <ScrollView>
      <View style={{ flexDirection:'row', justifyContent:'space-between',paddingHorizontal:20}}> 
        <View style={styles.searchInput}>
          <Image source={require('../assets/ic_search.png')}/>
          <TextInput placeholder="Search service..."/>
        </View>
      </View>
      <ListCategories/>
      <ListServices/>
      <FlatList contentContainerStyle={{paddingLeft:20,paddingVertical:20, paddingBottom:20}} data={items} renderItem={({item}) => <Cards services={item}/>}/>
    </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
 header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  pimage:{
    height:40,
    width:40,
    borderRadius:25,
  },
  searchInput:{
    height:50,
    backgroundColor:'lightgrey',
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    borderRadius:10,

  },
  listCategories:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    paddingHorizontal:10,
  },

  cardsCategory:{
    height:210,
    width: width / 2 -30,
    elevation:15,
    backgroundColor:'white',
    alignItems:'center',
    borderRadius:20,
    paddingTop:20,
    paddingHorizontal:10

  },
  listServices:{
    marginTop:40,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:40
  },
  serviceText:{
    fontSize:16,
    fontWeight:'bold',
    paddingBottom:5,
    color:'grey'
  },
  activeServiceCategory:{
    color:'black',
    borderBottomWidth:1,
    paddingBottom:6
  },
  cards:{
    height:250,
    backgroundColor:'white',
    elevation:10,
    width:width - 40,
    marginRight:20,
    marginBottom:10,
    padding:12,
    borderRadius:20
  }
   
});