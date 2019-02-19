import React, { Component } from 'react';
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native';
import Weather from './Weather';

const API_KEY = '28ac4e07436f40e218bf7e17d8c42de2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 50,
  },
  errorText: {
    color: 'red',
    backgroundColor: 'transparent',
    marginBottom: 50,
  },
});

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };

  componentDidMount() {
    /* eslint-env browser */
    navigator.geolocation.getCurrentPosition(
      (position) => {
        /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        // eslint-disable-next-line no-console
        this.setState({
          error,
        });
      },
    );
  }

  _getWeather = (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`,
    )
      .then(response => response.json())
      .then((json) => {
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true,
        });
      });
  };

  render() {
    const {
      isLoaded, error, temperature, name,
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        {isLoaded ? (
          <Weather temp={temperature} weatherName={name} />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting Weather Information...</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}
