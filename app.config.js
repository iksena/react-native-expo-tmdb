import 'dotenv/config';

export default {
  expo: {
    name: 'react-native-expo-tmdb',
    slug: 'react-native-expo-tmdb',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'lol.omg.sena',
      buildNumber: '1.0.0',
    },
    android: {
      bundleIdentifier: 'lol.omg.sena',
      package: 'lol.omg.sena',
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      TMDB_BASE_URL: process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3',
      TMDB_TOKEN: process.env.TMDB_TOKEN || '',
    },
  },
};
