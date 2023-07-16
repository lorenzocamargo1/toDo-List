import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#191919',
},
    container: {
    width: 340,
    height: 64,
    backgroundColor: '#262626',
    borderRadius: 8,
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
},
name: {
    fontSize: 16, 
    color: '#FFF',
    marginTop: -2,
},
  completedText: {
    textDecorationLine: 'line-through',
    textDecorationColor: 'purple',
    textDecorationStyle: 'solid',
  },
buttonText: {
    color:'#808080',
    fontSize: 24,
  },
button:{
    width: 24,
    height: 24,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#4EA8DE'
},
buttonColor:{
    backgroundColor: 'purple',
},
buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterContainer: {
    marginLeft: 8,
  },
anotherButton:{
    width: 24,
    height: 24,
    
},
purpleButton: {
    backgroundColor: 'purple',
},
  
lixinho:{
width: 13,
height: 14,
}
});