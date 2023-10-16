import { View, Text, TouchableOpacity, StyleSheet,Image,FlatList,  Dimensions, } from 'react-native';
import React, { useState, useEffect } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import SearchBar from '../components/SearchBar';
const {width} = Dimensions.get('screen');

const items = [
    {
      id: 1, 
      place: 'Gujrat', 
      country: 'Pakistan'
    },
    {
      id: 2, 
      place: 'London Eye',
      country: 'England',
    },
    {
      id: 3, 
      place: 'Washington dc',
      country: 'America',
    },
    {
      id: 4, 
      place: 'New york',
      country: 'America'
    }
  ]

export default function HomeScreen(){

	 const [value, setValue] = useState()
    function updateSearch(value) {
        //do your search logic or anything
        console.log(value)
    }

	return(
		<ScreenWrapper style={styles.container}>
			<View style={styles.content}>
				<Text style={{
              textShadowColor: 'black', 
              textShadowOffset: { width: -1, height: 0 },
              textShadowRadius: 10}}>
        ROMAN</Text>

				<TouchableOpacity><Text style={styles.logout}>Logout</Text></TouchableOpacity>
			</View>

			<View style={{ height: '20%', backgroundColor: "", borderRadius: 10, }}>
				<Text>Welcome:User1</Text>
        <SearchBar 
                    value={value}
                    updateSearch={updateSearch}
                    style={styles.searchbar}
                />
			</View>

			<View style={styles.services}>
				<Text  style={{fontWeight: 'bold',fontSize:25}}>Services</Text>
			</View>

			<View>
				<FlatList 
					data={items}
					keyExtractor={item=>item.id}
					numColumns={1}
					showVerticalScrollIndictor={false}
					renderItem={({item})=>{
						return(
								<TouchableOpacity>
									<View style={styles.cards}>
                  <Image source={require('../assets/m.jpg')} style={{width:'100%',height:'30%',borderRadius:2}}/>
										<Text style={{padding:4,fontWeight: 'bold',fontSize:15}}>{item.place}</Text>
										<Text style={{padding:4}}>{item.country}</Text>
									</View>
								</TouchableOpacity>
							)
					}}
				/>
			</View>

			</ScreenWrapper>
		)
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#EEEEEE',
  },
  content:{
  		flexDirection:'row',
  		justifyContent:'space-between',
  		padding:6,
  },
  logo:{

  },
  logout:{
  	 borderWidth: 2,
  	 borderRadius: 9,
  	 padding:2,
  },
  search:{
  	width:'100%',
  	height:'25%',
  	flexDirection:'row',
  	justifyContent:'center',
  	alignItems:'center',
  	//backgroundColor:'',
  },
  searchbar:{
  	marginTop:15,
    marginLeft:0
  },
  services:{
    marginTop:20,
  	padding:12
  },
  cards:{
    marginLeft:6,
    marginBottom:6,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor:'white',
    height:210,
    width: width / 2 -30,
    elevation:15,
    backgroundColor:'white'
  }
});