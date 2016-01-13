/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var FlexDemo = React.createClass({
  render: function() {
    return (
      <View style={{marginTop:20,flexDirection:'column',flex:1}}>
        <View style={{flex:1}}>
          <Text style={{fontSize: 20,textAlign:'center'}}>Flex</Text>
          <View style={{flex: 1,height:100, backgroundColor: '#E9573F'}}></View>
          <View style={{flex: 2, height:200,backgroundColor: '#F6BB42'}}></View>
          <View style={{flex: 3, height:300,backgroundColor: '#5D9CEC'}}></View>
        </View>
        <View style={{flex:2}}>
            <Text style={{fontSize: 20,textAlign:'center'}}>居中</Text>
            <View style={{backgroundColor:'#FFCE54',height:50,alignItems:'center'}}>
              <View style={styles.item}></View>
            </View>
            <View style={{backgroundColor:'#4A89DC',height:50,justifyContent:'center'}}>
              <View style={styles.item}></View>
            </View>
            <View style={{backgroundColor:'#ED5565',height:50,alignItems:'center',justifyContent:'center'}}>
              <View style={styles.item}></View>
            </View>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
            <Text style={{fontSize: 20,textAlign:'center'}}>水平排列</Text>
            <View style={{flex: 1, height:100,backgroundColor: '#E9573F'}}></View>
            <View style={{flex: 2, height:200,backgroundColor: '#F6BB42'}}></View>
            <View style={{flex: 3, height:300,backgroundColor: '#5D9CEC'}}></View>
        </View>
        <View style={{flex:1}}>

        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  item:{
    backgroundColor: '#48CFAD', width: 30, height: 30, borderRadius: 15
  },
});

AppRegistry.registerComponent('FlexDemo', () => FlexDemo);
