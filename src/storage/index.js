import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = {
  get: async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      console.log(err.message);
      return null;
    }
  },
  set: (key, value) => {
    AsyncStorage.setItem(key, value).then(
      (value) => {},
      (reason) => console.error(reason.message)
    );
  },
  remove: (key) => {
    AsyncStorage.removeItem(key).then(
      (value) => {},
      (reason) => console.error(reason.message)
    );
  },

  clear: () => {
    AsyncStorage.clear().then(
      (value) => {},
      (reason) => console.log(reason.message)
    );
  },
};

export default storage;
