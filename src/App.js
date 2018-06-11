import { createStackNavigator } from "react-navigation";
import CharacterList from "./Containers/CharacterList";
import CharacterDetail from "./Containers/CharacterDetail";

export default createStackNavigator(
  {
    CharacterList: CharacterList,
    CharacterDetail: CharacterDetail
  },
  {
    initialRouteName: "CharacterList"
  }
);
