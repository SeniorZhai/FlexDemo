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
      <View style={styles.container}>
        <View style={styles.item}></View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCD1D9',
  },
  item: {
    flex: 1,
    backgroundColor: '#48CFAD'
  }
});

AppRegistry.registerComponent('FlexDemo', () => FlexDemo);
