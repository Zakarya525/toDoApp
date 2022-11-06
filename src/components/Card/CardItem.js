import { Text, TouchableOpacity } from 'react-native';
import { colors, spacing } from '@utils';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { createStyle } from './Styles';
import { useTheme } from '@context/Theme';

export const CardItem = ({ task, onPress }) => {
  const styles = createStyle(useTheme());
  const [sound, setSound] = useState();

  async function onTaskItemPress(task) {
    onPress(task.id);
    if (!task.completed) return;
    const { sound } = await Audio.Sound.createAsync(require('../../../assets/done.mp3'));
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
    <TouchableOpacity style={styles.cardItem} onPress={() => onTaskItemPress(task)}>
      <Ionicons
        style={styles.icon}
        name={task.completed ? 'checkmark-circle' : 'checkmark-circle-outline'}
        size={spacing.md + 2}
        color={colors.lightOrange}
      />
      <Text style={[styles.textSmall, task.completed && styles.strikeThroughText]}>
        {task.title}
      </Text>
      <MaterialIcons
        name='delete-outline'
        size={24}
        color={colors.lightOrange}
        onPress={handleDelete}
      />
    </TouchableOpacity>
  );
};
