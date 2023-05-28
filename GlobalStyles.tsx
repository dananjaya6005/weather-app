import { StyleSheet, Platform } from 'react-native';


export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: "null",
        paddingTop: Platform.OS === 'android' ? 50 : 0
    },
    card:{
        width:350,
        height:240,
        backgroundColor: 'rgba(255,255,255,0.65)',
        borderRadius:20,
        
      }
});