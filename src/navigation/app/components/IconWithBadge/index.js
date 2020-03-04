import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class IconWithBadge extends Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    const { container, badgeContainer, badgeText } = styles;
    return (
      <View style={container}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View style={badgeContainer}>
            <Text style={badgeText}>{badgeCount}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { width: 24, height: 24, margin: 5 },
  badgeContainer: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' }
});

export default IconWithBadge;
