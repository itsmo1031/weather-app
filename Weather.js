import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 48,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 10,
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  title: {
    fontSize: 38,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 24,
  },
});

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: 'Rainy Outside',
    subtitle: 'For more info, look outside!',
    icon: 'weather-pouring',
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: 'Sunny Outside',
    subtitle: "Let's go playground!",
    icon: 'weather-sunny',
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: 'Thunderstorm Outside',
    subtitle: 'How about get some rest at home?',
    icon: 'weather-lightening',
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Clouds Outside',
    subtitle: 'What a gloooooomy day!',
    icon: 'weather-cloudy',
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: 'Snow Outside',
    subtitle: 'Do you want to build a snowman?',
    icon: 'weather-snowy',
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle Outside',
    subtitle: "Let's take a shower",
    icon: 'weather-rainy',
  },
  Haze: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Haze Outside',
    subtitle: 'Watch out!',
    icon: 'weather-fog',
  },
  Mist: {
    colors: ['#D7D2CC', '#89F7FE'],
    title: 'Mist Outside',
    subtitle: 'Get some skincare :)',
    icon: 'weather-hail',
  },
};

function Weather({ weatherName, temp }) {
  return (
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>
          {temp}
          °C
        </Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired,
};

// export default class Weather extends Component {
//   render() {
//     return (
//       <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.container}>
//         <View style={styles.upper}>
//           <Ionicons color="white" size={144} name="ios-rainy" />
//           <Text style={styles.temp}>35°C</Text>
//         </View>
//         <View style={styles.lower}>
//           <Text style={styles.title}>Rainy Outside</Text>
//           <Text style={styles.subtitle}>For more info, look outside!</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

export default Weather;
