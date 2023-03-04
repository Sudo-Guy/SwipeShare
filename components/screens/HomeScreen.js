import { View, Text, Button } from 'react-native';
import UserGreeting from '../userGreeting';
import SwitchSelector from "react-native-switch-selector";
const HomeScreen = () => {
    return (
    <View>
      <UserGreeting/>
      <View style = {{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row', marginTop:80,marginleft:20, marginRight:10}} >
      <SwitchSelector 
        options={ 
            [
                { label: "Buy", value: "0" },
                { label: "Sell", value: "1" }
            ]
        }
        initial={0}
        hasPadding = {true}
        valuePadding = {3}
        height = {40}
        style = {{width: 350}}
        buttonColor = {'#f44336'}
        onPress={value => console.log(`Call onPress with value: ${value}`)}
      />
      <Button
            
            title='Sort'
            color = '#f44336'
        />
      </View>
    </View>
    );
  }

const options = [
   
];



export default HomeScreen;