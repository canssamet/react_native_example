import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Secondpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { container } = styles;
    return <View style={container} />;
  }
}

const styles = StyleSheet.create({
  container: { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }
});

export default Secondpage;
