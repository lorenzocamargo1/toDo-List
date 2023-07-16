import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 24,
  },
  container1: {
    flex: 1,
    marginRight: -24,
    marginLeft: -24,
    marginBottom: -24,
    marginTop: 90,
    backgroundColor: '#191919',
    paddingHorizontal: 4,
  },
  logo: {
    width: 111,
    height: 32,
    alignSelf: 'center',
    marginTop: 80,
  },
  taskCreatedContainer: {
    marginBottom: -30,
    marginTop: 30, // Move o texto para baixo
  },
  taskCreated: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 30  ,
  },
  taskCompleted: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 260,
    marginBottom: 5,
  },
  input : {
    flex: 0.6,
    marginTop: -25,
    height: 52,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color:'#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 7,
  },
  buttonText: {
    color:'#808080',
    fontSize: 24,
  },
  button:{
   width: 52,
   height: 52,
   marginTop:-25,
   borderRadius: 5,
   backgroundColor: '#1E6F9F',
   alignItems:'center',
   justifyContent:'center',
  },
  plus:{
    width: 16,
    height: 16,
  },
  form:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clipboard:{
   backgroundColor: 'blue'
  },
  listBoldEmptyText:{
    color:'#808080',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },
  listLightEmptyText:{
  color: '#808080',
  textAlign: 'center',
  },
  imageContainer:{
    width: 56,
    height: 56,
    left: 165,
    marginTop: 48
  }
 
});


  



















