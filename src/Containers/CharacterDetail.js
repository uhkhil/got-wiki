import React from "react";
import { Text, View } from "react-native";
import Style from "../Styles/CharacterDetailStyle";

export default class CharacterList extends React.Component {
  static navigationOptions = {
    title: "Detail View"
  };

  render() {
    const charItem = this.props.navigation.getParam("charItem", {});
    console.log("charItem", charItem);

    return (
      <View style={Style.container}>
        <Text>Name: {charItem.name}</Text>
        <Text>Aliases: {charItem.aliases}</Text>
        <Text>Gender: {charItem.gender}</Text>
        <Text>Culture: {charItem.culture}</Text>
        <Text>Born: {charItem.born}</Text>
        <Text>Died: {charItem.died}</Text>
        <Text>Father: {charItem.father}</Text>
        <Text>Mother: {charItem.mother}</Text>
        <Text>Played by: {charItem.playedBy}</Text>
      </View>
    );
  }
}
