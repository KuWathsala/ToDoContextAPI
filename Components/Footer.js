import React from 'react';
import { View,Text, StyleSheet, TextInput, Button } from 'react-native';
import Context from '../Context/context';

export default class Footer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newTask: ''
    }
  }

  static contextType = Context;

  render(){
    return(
    <View style={styles.view}>
        <TextInput 
            style={styles.input} 
            onChangeText={(x)=>{this.setState({newTask: x})}}
            placeholder="Add a new Task" 
        />

        <Text
            style={styles.add} 
            onPress={()=>this.context.addNewTask(this.state.newTask)}
        >
            Add
        </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  view: {
    flex: 1,
    width: '100%',
    bottom: 20,
    position: 'absolute',
    flexDirection: 'row'
  },
  title: {
    marginTop:20,
    marginLeft: 20,
    fontSize: 30,
  },
  input: {
    width:'75%',
    borderRadius: 30,
    borderWidth:1,
    padding: 5,
    marginLeft: 10,
    fontSize: 18
  },
  add: {
    fontSize: 20,
    padding: 5,
    position: 'absolute',
    right: '10%'
  }
});