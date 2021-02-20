import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class WriteStoryScreen extends React.Component{
    constructor() {
        super();
        this.state = {
          author: '',
          title: '',
          story:'',
        };
      }
      render(){
          return(
            <View style={styles.container}>
                <Text style={styles.text}>
                Author
                </Text>
                <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ author: text });
          }}
          value={this.state.text}
        />
        <Text style={styles.text}>
            Title
        </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ title: text });
          }}
          value={this.state.text}
        />
        <Text style={styles.text}>Write a Story</Text>
        <TextInput 
          multiline={true}
          style={styles.inputBox}
    
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.Button}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
                </View>
          )
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
    },
    inputBox: {
      marginTop: 200,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    Button: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    
  });
  