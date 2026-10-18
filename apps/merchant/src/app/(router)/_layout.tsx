import { Text, View } from "react-native";
import React, { Component } from "react";
import { Tabs } from "expo-router";

export class _layout extends Component {
  render() {
    return (
      <Tabs>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="signup" />
        <Tabs.Screen name="signin" />
      </Tabs>
    );
  }
}

export default _layout;
