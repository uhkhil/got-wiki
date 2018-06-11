import React from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  FlatList,
  Text,
  TouchableHighlight
} from "react-native";
import * as axios from "axios";

import Style from "../Styles/CharacterListStyle";

export default class CharacterList extends React.Component {
  static navigationOptions = {
    title: "Character List"
  };

  constructor() {
    super();
    this.state = {
      charList: []
    };
  }

  componentWillMount() {
    axios
      .get("https://anapioficeandfire.com/api/characters?page=1&pageSize=50")
      .then(res => {
        let data = res.data.map(char => {
          char.aliases = char.aliases.filter(alias => alias !== "");
          return char;
        });
        console.log("api data: ", data);
        this.setState({ charList: data });
      });
  }

  renderListItem = charItem => {
    return (
      <TouchableHighlight
        style={Style.listItem}
        onPress={() =>
          this.props.navigation.navigate("CharacterDetail", { charItem })
        }
      >
        <Text style={Style.listItemText}>
          {charItem.name ? charItem.name + " - " : null}{" "}
          {charItem.aliases.map(
            (alias, idx, array) =>
              `"${alias}"${idx === array.length - 1 ? "" : ", "}`
          )}
        </Text>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.charList}
        keyExtractor={(item, index) => item.url}
        renderItem={({ item }) => this.renderListItem(item)}
      />
    );
  }
}
