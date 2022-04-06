import React,{useEffect,useState} from 'react'
import { SafeAreaView,View,Text,StyleSheet,TextInput } from 'react-native'
import moment from 'moment-timezone';
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



const WeatherItem = ({title,value,unit}) => {
    return(
        <View style={styles.weatherContent}>
            <Text style={styles.weatherContenttitle}>{title}</Text>
            <Text style={styles.weatherContentvalue}>{value}{unit}</Text>
        
        </View>
    )
}
const DataAndTime = ({current,lat,lon,timezone}) => {
    //use of react hooks
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')

    //another react hook
    useEffect(()=>{
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? 'pm' : 'am'
        
            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) +ampm) 
        
            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        
        }, 1000);
    },[])
  return (
<View style={styles.container}>
    <View>
      <View><Text style={styles.heading}>{time}</Text></View>
      <View><Text style={styles.subheading}>{date}</Text></View>
        <View style={styles.WeatherItemContainer}>
            <WeatherItem title="Humidity" value={current ? current.humidity : ""} unit="%"/>
            <WeatherItem title="pressure" value={current ? current.pressure: ""} unit="hPA"/>
            {/* used moment library over here */}
            <WeatherItem title="Sunrise" value={current ? moment.tz(current.sunrise*1000,timezone).format('HH:MM'): ""} unit="am"/>
            <WeatherItem title="Sunset" value={current ? moment.tz(current.sunset*1000,timezone).format('HH:MM'): ""} unit="pm"/>
            <WeatherItem title="Feels Like" value={current ? current.feels_like : ""} unit="C"/>

        </View>
    </View>
    <View style={styles.rightAlign}>
        <Text style={styles.timezone}>{timezone}</Text>
        <Text style={styles.latlong}>{lat}N{lon}E</Text>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1.4,
        flexDirection:"row",
        padding:12,
        justifyContent:'space-between'
    },
    heading:{
        fontSize:45,
        fontWeight:'100',
        color:"white"
    },
    subheading:{
        fontSize:25,
        fontWeight:"300",
        color:"white"
    },
    rightAlign:{
        textAlign:"right"
    },
    timezone:{
        fontSize:20,
        color:'white'
    },
    latlong :{
        fontSize:13,
        color : 'white'
    },
    WeatherItemContainer:{
        backgroundColor:'#18181b99',
        borderRadius:13,
        marginTop:10
    },
    weatherContent:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    weatherContenttitle:{
        color : '#eee',
        fontSize:14,
        fontWeight:'200'
    },
    weatherContentvalue:{
        color : '#eee',
        fontSize:14,
        fontWeight:'200'  
    },
    input:{
        height: 40,
        width:500,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        backgroundColor:'white'
    }
    
})


export default DataAndTime