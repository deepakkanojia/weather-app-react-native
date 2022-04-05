import React,{useEffect,useState} from 'react'
import { SafeAreaView,View,Text,StyleSheet,TextInput } from 'react-native'
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const UseTextInput = () => {
    const [text, onChangeText] = React.useState("");
  
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter the City Name"

        />
      </SafeAreaView>
    );
  };

const WeatherItem = ({title,value,unit}) => {
    return(
        <View style={styles.weatherContent}>
            <Text style={styles.weatherContenttitle}>{title}</Text>
            <Text style={styles.weatherContentvalue}>{value}{unit}</Text>

        </View>
    )
}
const DataAndTime = () => {
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
       <UseTextInput/>
      <View><Text style={styles.heading}>{time}</Text></View>
      <View><Text style={styles.subheading}>{date}</Text></View>
        <View style={styles.WeatherItemContainer}>
            <WeatherItem title="Humidity" value="56" unit="%"/>
            <WeatherItem title="pressure" value="1000" unit="hPA"/>
            <WeatherItem title="Sunrise" value="12:00" unit="am"/>
            <WeatherItem title="Sunset" value="02:00" unit="pm"/>
        </View>
    </View>
    <View style={styles.rightAlign}>
        <Text style={styles.timezone}>Asia/Kolkata</Text>
        <Text style={styles.latlong}>4.22N 6.77S</Text>
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