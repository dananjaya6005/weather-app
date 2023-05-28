import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View,Image, Dimensions } from 'react-native';
import GlobalStyles from '../GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const{width,height} = Dimensions.get('window')

const BlurCard =(props)=>{

  let icon1;
  

  
  if (props.is_day == 1) {

    switch (props.code) {

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
    
}
  else if(props.is_day ==0){

    switch (props.code) {

      case 1000:
        icon1 =  require(`../Icon/night/113.png`);
        break;
      case 1003:
        icon1 =  require(`../Icon/night/116.png`);
        break;
      case 1006:
        icon1 =  require(`../Icon/night/119.png`);
        break;
      case 1009:
        icon1 =  require(`../Icon/night/122.png`);
        break;
      
      case 1030:
        icon1 =  require(`../Icon/night/143.png`);
        break;
      case 1063:
        icon1 =  require(`../Icon/night/176.png`);
        break;
      case 1066:
        icon1 =  require(`../Icon/night/179.png`);
        break;
      case 1069:
        icon1 =  require(`../Icon/night/182.png`);
        break;
      
      case 1072:
        icon1 =  require(`../Icon/night/185.png`);
        break;
      case 1087:
        icon1 =  require(`../Icon/night/227.png`);
        break;
      case 1117:
        icon1 =  require(`../Icon/night/230.png`);
        break;
      case 1135:
        icon1 =  require(`../Icon/night/248.png`);
        break;
                
      case 1147:
        icon1 =  require(`../Icon/night/260.png`);
        break;
      case 1150:
        icon1 =  require(`../Icon/night/263.png`);
        break;
      case 1153:
        icon1 =  require(`../Icon/night/266.png`);
        break;
      case 1168:
        icon1 =  require(`../Icon/night/281.png`);
        break;
                
      case 1171:
        icon1 =  require(`../Icon/night/284.png`);
        break;
      case 1180:
        icon1 =  require(`../Icon/night/293.png`);
        break;
      case 1183:
        icon1 =  require(`../Icon/night/296.png`);
        break;
      case 1186:
        icon1 =  require(`../Icon/night/299.png`);
        break;
                        
      case 1189:
        icon1 =  require(`../Icon/night/302.png`);
        break;
      case 1192:
        icon1 =  require(`../Icon/night/305.png`);
        break;
      case 1195:
        icon1 =  require(`../Icon/night/308.png`);
        break;
      case 1198:
        icon1 =  require(`../Icon/night/311.png`);
        break;
    
      case 1201:
        icon1 =  require(`../Icon/night/314.png`);
        break;
      case 1204:
        icon1 =  require(`../Icon/night/317.png`);
        break;
      case 1207:
        icon1 =  require(`../Icon/night/320.png`);
        break;
      case 1210:
        icon1 =  require(`../Icon/night/323.png`);
        break;

      case 1213:
        icon1 =  require(`../Icon/night/326.png`);
        break;
                        
      case 1216:
        icon1 =  require(`../Icon/night/329.png`);
        break;
      case 1219:
        icon1 =  require(`../Icon/night/332.png`);
        break;
      case 1222:
        icon1 =  require(`../Icon/night/335.png`);
        break;

      case 1225:
        icon1 =  require(`../Icon/night/338.png`);
        break;
      case 1237:
        icon1 =  require(`../Icon/night/350.png`);
        break;
      case 1240:
        icon1 =  require(`../Icon/night/353.png`);
        break;
      case 1243:
        icon1 =  require(`../Icon/night/356.png`);
        break;
                        
      case 1246:
        icon1 =  require(`../Icon/night/359.png`);
        break;
      case 1249:
        icon1 =  require(`../Icon/night/362.png`);
        break;
      case 1252:
        icon1 =  require(`../Icon/night/365.png`);
        break;
      case 1255:
        icon1 =  require(`../Icon/night/368.png`);
        break;

      case 1258:
        icon1 =  require(`../Icon/night/371.png`);
        break;
      case 1261:
        icon1 =  require(`../Icon/night/374.png`);
        break;
      case 1264:
        icon1 =  require(`../Icon/night/377.png`);
        break;
      case 1273:
        icon1 =  require(`../Icon/night/386.png`);
        break;
                        
      case 1276:
        icon1 =  require(`../Icon/night/389.png`);
        break;
      case 1279:
        icon1 =  require(`../Icon/night/392.png`);
        break;
      case 1282:
        icon1 =  require(`../Icon/night/395.png`);
        break;
    
      default:
        icon1 =  require(`../Icon/loading.png`);
        break;
  }


  }



    return(
      
        <LinearGradient colors={props.is_day == 1 ?['rgba(242, 242, 242, 0.2)', 'rgba(255, 255, 255, 0.8)', 'rgba(191, 191, 191, 0.9)'] :['rgba(26, 40, 51, 0.9)', 'rgba(26, 26, 51, 0.8)', 'rgba(26, 26, 51, 0.9)'] } style={styles.card}>
          <View style={{margin:10 ,paddingLeft:5}}>
          <Text style={[{fontSize:18,fontWeight:"700"},{color: props.is_day == 1 ? "black" : "white"}]}>{props.head_location}, {props.region}, {props.country} </Text>
          </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",}}>
           <Image source={icon1} style={styles.icon_style}/>

           <View>
           <Text style={[styles.temp_text,{color: props.is_day == 1 ? "black" : "white"}]}>{props.temp} °</Text>
           <View style={{flexDirection:"row", marginRight:20,alignItems:'center'}}>
                <Image source={require("../Icon/temp_icon.png")} style={{width:25, height:25}}/>   
                <Text style={[{marginLeft:6, fontWeight:"500", fontSize:16},{color: props.is_day == 1 ? "black" : "white"}]} >{props.feelslike_c + "°"}</Text> 
            </View>  
            <View style={{flexDirection:"row", marginRight:20,alignItems:'center',marginTop:10}}>
                <Image source={require("../Icon/wind_icon.png")} style={{width:25, height:25}}/>   
                <Text style={[{marginLeft:6, fontWeight:"500", fontSize:16},{color: props.is_day == 1 ? "black" : "white"}]} >{props.wind_kph}</Text> 
            </View> 

           </View>
         </View>
         

         <View style={styles.info}>

            <View style={styles.sub}>
                <Text style={[{fontSize:20, fontWeight:"700"},{color: props.is_day == 1 ? "black" : "white"}]}>{props.main_state}</Text>
                <Text style={[{color: props.is_day == 1 ? "black" : "white"}]}>{props.code}</Text>
                
            </View>
              
               
        </View>
        <Text style={[{fontSize:10,marginLeft:17,marginTop:5},{color: props.is_day == 1 ? "black" : "white"}]}>Last updated :{props.last_updated}</Text>

        </LinearGradient>
      
    );
};

export default BlurCard;

const styles = StyleSheet.create({
  card:{
    width:width *0.9,
    height:height*0.38,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
    
  },
  icon_style:{
    width:120,
    height:120,
    margin:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    
    
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
   justifyContent:"space-between",
   marginTop:8
  }
  

});
