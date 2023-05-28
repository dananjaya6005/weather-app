import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View,Image,FlatList, Platform, Dimensions } from 'react-native';
import GlobalStyles from './GlobalStyles';
import BlurCard from './component/BlurCard'
import * as Location from 'expo-location';
import axios from 'axios';

import Smallcard from './component/Smallcard';
const {width,height} = Dimensions.get('window');

export default function App() {

  const API_KEY = '3wmxaxmd2x54p56rs467iequnoewar3uqcgm53yaa2cfsvjny4ra';
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const[info,setInfo] = useState(null);
  const [address, setAddress] = useState(null);
    
  let Bg;

  if(info){
    {info.current.is_day == 1 ?
       Bg = require("./Images/testimg.jpg") :
       Bg = require("./Images/night.jpg")

    }
  }

 // const Bg = require("./Images/testimg.jpg");

  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);

      // if (location) {
      //   getWeatherApi(address);
      // }
    })();

  }, []);

  useEffect(() => {
    if (location) {
      (async () => {
        try {
          let result = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          });

          {Platform.OS === 'android' ? 
          setAddress(`${result[0].city}`) :
          setAddress(`${result[0].name}`)
        }
        
          //setAddress(`${result[0].name}`);

          console.log(result);
        } catch (e) {
          console.log(e);
        }
      })();
    }

    // if(address){
    //   getWeatherApi(address)
    // }

  }, [location]);


  useEffect(()=>{
    if(address){
      getWeatherApi(address)
    }

  },[address])



  function getWeatherApi(address){
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=1714b5424629431ba4b182844233004&q=${address}&days=10&aqi=no&alerts=no
    `)
    .then(function(response){
        setInfo(response.data)
        console.log(response.data)
    })
    .catch(function(error){
        console.error(error);
    })
  }
  let latitude = null;
  let longitude = null;

  if (errorMsg) {
    // handle error message
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
  }

  

  return (

     <ImageBackground source={Bg} style={styles.Bg}>
        <SafeAreaView style={GlobalStyles.droidSafeArea}> 
            <View style={styles.container}>
            <BlurCard 
            head_location= {address}
            temp={info?.current.temp_c} 

            main_state={info?.current.condition.text}
            code={info?.current.condition.code}
            is_day={info?.current.is_day}
            feelslike_c= {info?.current.feelslike_c}
            wind_kph={info?.current.wind_kph}
            last_updated={info?.current.last_updated}
            head_location={info?.location.name}
            region={info?.location.region}
            country={info?.location.country}
            
            />


          <FlatList 
          style={{height: height*0.6, marginTop:10}}
          data={info?.forecast.forecastday}
          showsVerticalScrollIndicator={false}
          

          keyExtractor={(item , index) => 'key' + index}
          renderItem={({item}) => <Smallcard items={item}/>}

     
        />
  
          


        </View>


        </SafeAreaView>
      </ImageBackground>

    
  );
}

const styles = StyleSheet.create({
  container: {
   
    justifyContent:'center',
    alignItems:'center'
  },
  Bg:{
    flex:1,
    resizeMode:"cover"
  }
});
