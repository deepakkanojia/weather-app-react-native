import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React,{useState,useEffect} from 'react';
import DataAndTime from './components/DataAndTime';
import WeatherScroll from './components/WeatherScroll';

const API_KEY = 'f53e27cace17085fcf1d4b2b22262b7a';
const API_KEY2 = 'a61ea64726abe6541402dfb84f81bf65';
const img = require('./assets/image.png');

export default function App() {
  const [data,setData] = useState({});
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((success) => {
        
      let {latitude, longitude } = success.coords;
      fetchDatafromApi(latitude,longitude)

      
    },(err)=>{
      if(err){
        fetchDatafromApi("40.7128","-74.0060")
        // fetchCityDatafromApi("London");
      }
    })

  },[])
  const fetchDatafromApi = (latitude,longitude)=>{
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setData(data)
      })
  }

  // const fetchCityDatafromApi = (cityName)=>{
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY2}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //     })
  // }
  return (
    <ImageBackground source={img} style={styles.image}>
    <View style={styles.container}>
      <DataAndTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
      <WeatherScroll weatherData={data.daily}/>  
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  image:{
    flex:1,
    resizeMode:"cover",
    justifyContent:"center"
  }
});
