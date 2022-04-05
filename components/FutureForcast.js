import React from 'react'
import { View , Text , Image,StyleSheet} from 'react-native'

const FutureForcast = () => {
  return (
    <View style={{flexDirection:'row'}}>
     <FutureForcastItem/> 
     <FutureForcastItem/> 
     <FutureForcastItem/> 
     <FutureForcastItem/> 


    
    </View>
  )
}

const FutureForcastItem = () => {
    const img ={uri : 'http://openweathermap.org/img/wn/10d@2x.png'}
    return(
        <View style={styles.FutureForcastItemContainer}>
            <Text style={styles.day}>Mon</Text>
            <Image source={img} style={styles.image}/>
            <Text  style={styles.temp}>Night - 26&#176;C</Text>
            <Text style={styles.temp}>Day - 26&#176;C</Text>

        </View>
    )
}

export default FutureForcast

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100
    },
    FutureForcastItemContainer:{
        justifyContent:'center',
        backgroundColor:'#0000033',
        borderRadius:10,
        borderColor:'#eee',
        borderWidth:1,
        marginLeft:10,
        flex:1,
        padding:20
    },
    day:{
        fontSize:20,
        backgroundColor:'#3c3c44',
        padding:10,
        color:'white',
        textAlign:'center',
        borderRadius:50,
        fontWeight:'200',
        marginBottom:15
    },
    temp:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'100',
        color:'white'
    }
})
