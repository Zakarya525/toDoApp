import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fontSizes, spacing } from '../../utils/sizes';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../utils/colors';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { useTheme } from '../../context/Theme';
import { createStyle } from './Styles';

export const CardItem = ({ task, onPress }) => {
  const styles = createStyle(useTheme());
  const [sound, setSound] = useState();

  async function onTaskItemPress(task) {
    onPress(task.id);
    if (!task.completed) return;
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/done.mp3')
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => onTaskItemPress(task)}>
      <Ionicons
        style={styles.icon}
        name={task.completed ? 'checkmark-circle' : 'checkmark-circle-outline'}
        size={spacing.md + 2}
        color={colors.lightOrange}
      />
      <Text
        style={[styles.textSmall, task.completed && styles.strikeThroughText]}>
        {task.title}
      </Text>
    </TouchableOpacity>
  );
};
