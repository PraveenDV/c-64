import React, {Component} from 'react';
import {StyleSheet, TextInput, Image, View, Text, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import db from './localDb';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      text:'',
      chunks:[],
      phones:[]
    }
  }
  render(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
        <Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'Monkey Chunky', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
<Image  
  source={require("./assets/monkey.png")}
  style={{
    width:150,
    height:150,
    alignSelf:'center'
  }}
/>

  <TextInput
        style={styles.input}
        onChangeText={(text)=>{this.setState({text:text})}}
        value={this.state.text}
      />
      <View>
        <TouchableOpacity onPress={()=>{
          this.setState({chunks:db[this.state.text].chunks});
        }} style={styles.buttonStyle}>
          <Text>Play</Text>
        </TouchableOpacity>
        </View>
        {this.state.chunks.map(item=>{
            return(
                <TouchableOpacity style={styles.button1Style}>
                  <Text>{item}</Text>
                </TouchableOpacity>
            ) ;                            
        })}
    </View>
    </SafeAreaProvider>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b8b8b8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    backgroundColor: 'yellow',
    alignSelf:'center',
    borderRadius:10,
    marginLeft:100,
    marginTop:100  
  },
  button1Style:{
    backgroundColor: 'yellow',
    alignSelf:'center',
    borderRadius:10,
    marginLeft:100,
    marginTop:10
  },
  input: {
    height: 40,
    width:'80%',
    marginTop: 200,
    borderWidth: 4,
    padding: 10,
    alignSelf:'center',
    textAlign:'center'
  }
});
