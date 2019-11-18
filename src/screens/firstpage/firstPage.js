import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { SECONDPAGE } from '@navigation/app/constants';
import { translate, setI18nConfig, i18n } from '@locale/index';
import { ScrollView } from 'react-native-gesture-handler';

const emptyImage = require('@assets/images/box.png');

class Firstpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    await this.props.fetchData();
    this.setState({ loading: false });
  };

  itemPress = () => {
    this.props.navigation.navigate(SECONDPAGE);
  };

  renderItem = ({ item }) => {
    if (item.user) {
      return (
        <TouchableOpacity style={{ alignSelf: 'stretch' }} onPress={this.itemPress}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ padding: 10, fontFamily: 'Montserrat-Medium' }} numberOfLines={1}>
              {item.user.name.first}
            </Text>
            <Text style={{ padding: 10, fontFamily: 'Montserrat-Medium' }} numberOfLines={1}>
              {item.user.name.last}
            </Text>
          </View>
          <Text style={{ padding: 10, fontFamily: 'Montserrat-Medium' }} numberOfLines={2}>
            {item.text}
          </Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  keyExtractor = item => String(item._id);

  renderItemSeperator = () => {
    return <View style={{ alignSelf: 'stretch', height: StyleSheet.hairlineWidth, backgroundColor: '#ddd' }} />;
  };

  renderItemEmptyComponent = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15 }}>
        <Image style={{ width: 200, height: 200 }} source={emptyImage} resizeMode="contain" />
        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 21, color: '#585858', marginTop: 30 }}>
          No Items yet!
        </Text>
        <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: '#ddd' }}>
          You dont see to any items. Please try again after many second
        </Text>
      </View>
    );
  };

  changeLanguage = (languageTag, isRTL) => {
    setI18nConfig({ languageTag, isRTL }); // set initial config
    this.forceUpdate();
  };

  render() {
    const { container } = styles;
    const { data } = this.props;
    if (this.props.error && this.props.error.status) {
      return <Text>{this.props.error.errorMessage}</Text>;
    }
    return (
      <View style={container}>
        {this.state.loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="black" style={{ alignSelf: 'center' }} />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <ScrollView horizontal>
                <TouchableOpacity onPress={() => this.changeLanguage('tr', false)}>
                  <Text style={{ padding: 10, margin: 8, backgroundColor: '#eee' }}>TR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeLanguage('en', false)}>
                  <Text style={{ padding: 10, margin: 8, backgroundColor: '#eee' }}>EN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeLanguage('fr', false)}>
                  <Text style={{ padding: 10, margin: 8, backgroundColor: '#eee' }}>FR</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeLanguage('ar', true)}>
                  <Text style={{ padding: 10, margin: 8, backgroundColor: '#eee' }}>AR</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 22, fontFamily: 'Montserrat-Medium', textAlign: 'center' }}>
                {translate('hello')} {'\n'}
                {translate('info')} {'\n'}
                {translate('lang', { lang: i18n.currentLocale() })}
              </Text>
            </View>
            <FlatList
              data={data}
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={this.renderItemSeperator}
              ListEmptyComponent={this.renderItemEmptyComponent}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Firstpage;
