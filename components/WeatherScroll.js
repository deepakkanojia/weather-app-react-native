import React from 'react'
import  {ScrollView,View,Image,Text,StyleSheet} from 'react-native'
import FutureForcast from './FutureForcast'
import moment from 'moment-timezone'

const WeatherScroll = ({weatherData}) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
        <CurrentTemp data={weatherData && weatherData.length > 0 ? weatherData[0]:{}}/>
        <FutureForcast data={weatherData}/>
    </ScrollView>
  )
}

const CurrentTemp = ({data}) =>{
    if(data && data.weather){
        const img = {uri:'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png'}
        return(
            <View style={styles.TempContainer}>
                <Image source={img} style={styles.image}/>
                    <View style={styles.otherContainer}>
                        <Text style={styles.day} >{moment(data.dt * 1000).format('dddd')}</Text>
                        <Text style={styles.temp}>Night - {data.temp.night}&#176;C</Text>
                        <Text style={styles.temp}>Day - {data.temp.day}&#176;C</Text>
                    </View>
            </View>
        ) 
    }
    else{
        return(
            <View>

            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    image:{
        flex:0.6,
        width:200,
        height:200,
    },
    scrollView:{
        backgroundColor:'#18181bcc',
        padding:20,
        height:60
    },
    TempContainer:{
        flexDirection:'row',
        backgroundColor:'#0000033',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#eee',
        padding:15,
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
    },
    otherContainer:{
        paddingRight:40
    }
})
export default WeatherScroll
