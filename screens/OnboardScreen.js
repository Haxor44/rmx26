import React from 'react'
import {View, Text,Image,StyleSheet, TouchableOpacity} from 'react-native';
import Images from "../assets"
import Swiper from 'react-native-swiper';
export default function OnboardScreen(){

    const onBoardList = [
        {id:1, title:"Welcome to Roman", image: Images.clean1},
        {id:2, title:"We offer best cleaning services", image: Images.clean2},
        {id:3, title:"Get started today", image: Images.clean3}
    ];
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <Swiper paginationStyle={{
                position:"absolute",
                bottom:'20%'
            }}
            activeDotColor='gold'
            activeDotStyle={{width:20,height:8}}
            >
              {onBoardList.map(i=>{
                return(
                    <View style={{justifyContent:'center',alignItems:'center',height:'100'}}>
                        <Text style={styles.textStyle}>{i.title}</Text>
                        <Image source={i.image} style={styles.imageContainer}/>
                    </View>
                )
              })}  
            </Swiper>
            <View style={{position:'absolute',bottom:'5%', left:0,right:0,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.textStartStyle}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:25,
        fontWeight:'bold',
        width:'40%',
        textAlign:'center'
    },
    imageContainer: {
        height:'70%',
        width:'90%',
        resizeMode:"contain",
        marginHorizontal:15
    },

    buttonStyle:{
        backgroundColor:"#d3494e",
        paddingHorizontal:100,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
        borderRadius:20,
        marginBottom:20
    },
    textStartStyle:{
        fontWeight:'bold'
    }
})

