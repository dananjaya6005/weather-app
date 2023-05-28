import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View,Image, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

const{width,height} = Dimensions.get('window')


const Smallcard =({items,is_day})=>{


  const [loaded] = useFonts({
    alkatra_r :require('../assets/font/Alkatra-SemiBold.ttf'),
  });
  if(!loaded){
    return null;
  }
  let icon1;

  switch (items.day.condition.code) {

    case 1000:
      icon1 =  require(`../Icon/day/113.png`);
      break;
    case 1003:
      icon1 =  require(`../Icon/day/116.png`);
      break;
    case 1006:
      icon1 =  require(`../Icon/day/119.png`);
      break;
    case 1009:
      icon1 =  require(`../Icon/day/122.png`);
      break;
    
    case 1030:
      icon1 =  require(`../Icon/day/143.png`);
      break;
    case 1063:
      icon1 =  require(`../Icon/day/176.png`);
      break;
    case 1066:
      icon1 =  require(`../Icon/day/179.png`);
      break;
    case 1069:
      icon1 =  require(`../Icon/day/182.png`);
      break;
    
    case 1072:
      icon1 =  require(`../Icon/day/185.png`);
      break;
    case 1087:
      icon1 =  require(`../Icon/day/227.png`);
      break;
    case 1117:
      icon1 =  require(`../Icon/day/230.png`);
      break;
    case 1135:
      icon1 =  require(`../Icon/day/248.png`);
      break;
              
    case 1147:
      icon1 =  require(`../Icon/day/260.png`);
      break;
    case 1150:
      icon1 =  require(`../Icon/day/263.png`);
      break;
    case 1153:
      icon1 =  require(`../Icon/day/266.png`);
      break;
    case 1168:
      icon1 =  require(`../Icon/day/281.png`);
      break;
              
    case 1171:
      icon1 =  require(`../Icon/day/284.png`);
      break;
    case 1180:
      icon1 =  require(`../Icon/day/293.png`);
      break;
    case 1183:
      icon1 =  require(`../Icon/day/296.png`);
      break;
    case 1186:
      icon1 =  require(`../Icon/day/299.png`);
      break;
                      
    case 1189:
      icon1 =  require(`../Icon/day/302.png`);
      break;
    case 1192:
      icon1 =  require(`../Icon/day/305.png`);
      break;
    case 1195:
      icon1 =  require(`../Icon/day/308.png`);
      break;
    case 1198:
      icon1 =  require(`../Icon/day/311.png`);
      break;
  
    case 1201:
      icon1 =  require(`../Icon/day/314.png`);
      break;
    case 1204:
      icon1 =  require(`../Icon/day/317.png`);
      break;
    case 1207:
      icon1 =  require(`../Icon/day/320.png`);
      break;
    case 1210:
      icon1 =  require(`../Icon/day/323.png`);
      break;

    case 1213:
      icon1 =  require(`../Icon/day/326.png`);
      break;
                      
    case 1216:
      icon1 =  require(`../Icon/day/329.png`);
      break;
    case 1219:
      icon1 =  require(`../Icon/day/332.png`);
      break;
    case 1222:
      icon1 =  require(`../Icon/day/335.png`);
      break;

    case 1225:
      icon1 =  require(`../Icon/day/338.png`);
      break;
    case 1237:
      icon1 =  require(`../Icon/day/350.png`);
      break;
    case 1240:
      icon1 =  require(`../Icon/day/353.png`);
      break;
    case 1243:
      icon1 =  require(`../Icon/day/356.png`);
      break;
                      
    case 1246:
      icon1 =  require(`../Icon/day/359.png`);
      break;
    case 1249:
      icon1 =  require(`../Icon/day/362.png`);
      break;
    case 1252:
      icon1 =  require(`../Icon/day/365.png`);
      break;
    case 1255:
      icon1 =  require(`../Icon/day/368.png`);
      break;

    case 1258:
      icon1 =  require(`../Icon/day/371.png`);
      break;
    case 1261:
      icon1 =  require(`../Icon/day/374.png`);
      break;
    case 1264:
      icon1 =  require(`../Icon/day/377.png`);
      break;
    case 1273:
      icon1 =  require(`../Icon/day/386.png`);
      break;
                      
    case 1276:
      icon1 =  require(`../Icon/day/389.png`);
      break;
    case 1279:
      icon1 =  require(`../Icon/day/392.png`);
      break;
    case 1282:
      icon1 =  require(`../Icon/day/395.png`);
      break;
  
    default:
      icon1 =  require(`../Icon/loading.png`);
      break;
}


    return(

        <LinearGradient colors={['rgba(242, 242, 242, 0.5)', 'rgba(255, 255, 255, 0.5)', 'rgba(191, 191, 191, 0.9)']} style={styles.card}>
          <View style={{flexDirection:"row", justifyContent:'space-between',padding:10}}>
            <View>
              <Text style={{fontFamily:"alkatra_r",fontSize:14}}>{items.date}</Text>
              <Text style={{fontWeight:'600',fontStyle:'italic',fontSize:17}}>{items.day.condition.text}</Text>
              <Text style={{marginTop:5,color:"#737373"}}><Text style={{fontSize:25}}>🌧️ </Text >{items.day.daily_chance_of_rain}%</Text>
            </View>
            <Image style={styles.mini_icon} source={icon1} />
          </View>
         
          
        </LinearGradient>
        
      
    );
};

export default Smallcard;

const styles = StyleSheet.create({
  card:{
    width:width*0.9,
    height:height*0.15,
    backgroundColor: 'rgba(255,255,255,0.55)',
    borderRadius:20,
    margin:10
    
  },
  mini_icon:{
    width:50,
    height:50,
    margin:10
    
  },
  temp_text:{
    fontSize:30,
    fontWeight:"700",
    padding: 20,
    
  },
  sub:{
    marginLeft:15,
  },
  info:{
    flexDirection:"row",
   justifyContent:"space-between"
  },
  

});
