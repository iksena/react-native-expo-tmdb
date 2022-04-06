# react-native-expo-tmdb
React Native client for The Movie Database (TMDB) with Expo

## System requirements  
You need an Expo account ([register here](https://expo.dev/signup)) to build the app. And You also need to install expo-cli in your machine:
```
npm install -g expo-cli
```
And also EAS (Expo Application Services) CLI to build android and iOS app:
```
npm install -g eas-cli
```

## How to run in development  
To start the app in development mode, follow the steps bellow:  
1. Start a simulator or download [Expo Go](https://expo.dev/client) in your device
2. Rename `example.env` to `.env`
3. Get token for [TMDB API](https://developers.themoviedb.org/3/getting-started) and put in `.env` as TMDB_TOKEN value
4. Install all dependencies `yarn`
5. Start development server `yarn start`
6. Open Expo Go in device and scan QR code in the development server


## How to build  
To build Android .apk file, follow the steps below:
1. Make sure you have the token for [TMDB API](https://developers.themoviedb.org/3/getting-started) 
2. Put the token in `eas.json` as TMDB_TOKEN value under `build.preview.env` object
3. Start building `eas build -p android --profile preview`
4. Follow the link to monitor the build and download the .apk file after it finished
