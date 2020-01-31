/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {PureComponent} from 'react';
import {View, StyleSheet, ViewStyle, Text, TextStyle, ActivityIndicator} from 'react-native';
import DefaultPreference from "react-native-default-preference";
import {Button} from "./src/common/components/Button";
import {Colors} from "./src/common/core/colors";
import {localization} from "./src/common/localization/localization";

interface State {
    currentLanguage: string;
}

class App extends PureComponent<State>  {
    state = {
        currentLanguage: ""
    };

    componentDidMount(): void {
        DefaultPreference.get("language").then((value: string) => {
            if (value) {
                localization.common.setLanguage(value);
                this.setState({ currentLanguage: value });
            } else {
                this.setState({ currentLanguage: localization.common.getLanguage() });
            }
        });
    }

    private setLanguage = (language: string) => {
        localization.common.setLanguage(language);
        DefaultPreference.set("language", language);
        this.setState({ currentLanguage: language });
    }


    render(): JSX.Element {
        const { currentLanguage } = this.state;

        if (!currentLanguage)
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={"blue"} />
                </View>
            );

        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    {localization.common.getAvailableLanguages().map((el: string) => (
                        <Button
                            title={el}
                            key={el}
                            active={currentLanguage === el}
                            onLanguageChange={this.setLanguage}
                        />
                    ))}
                </View>
                <View>
                    <Text style={styles.text}>
                        {localization.common.phrase}
                    </Text>
                </View>
            </View>
        );
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
