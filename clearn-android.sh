watchman watch-del-all
rm -rf /tmp/metro-*
rm -rf node_modules
npm install
react-native link
npm run android