/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {View, StyleSheet, ViewStyle, Text, TextStyle} from 'react-native';

import {Button} from "./src/common/components/Button";
import {Colors} from "./src/common/core/colors";
import {localization} from "./src/common/localization/localization";

class App extends Component {
    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <Button title={localization.common.en} active onLanguageChange={this.setLanguage}/>
                    <Button title={localization.common.ru} onLanguageChange={this.setLanguage}/>
                    <Button title={localization.common.hi} onLanguageChange={this.setLanguage}/>
                </View>
                <View>
                    <Text style={styles.text}>
                        {localization.common.phrase}
                        {localization.common.getLanguage()}
                    </Text>
                </View>
            </View>
        );
    }

    private setLanguage = (language: string):void => {
        localization.common.setLanguage(language);
        this.setState({});
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  } as ViewStyle,
  buttons: {
    flexDirection: "row",
    marginBottom: 20,
  } as ViewStyle,
    text: {
      fontSize: 20,
    } as TextStyle,
});

export default App;
