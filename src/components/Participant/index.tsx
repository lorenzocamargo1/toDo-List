// Componente Participant.tsx

import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import lixinho from './assets/lixinho.png';
import check from './assets/check.png';
import { styles } from './styles';

type Props = {
  task: string;
  onRemove: (completed: boolean) => void;
  onComplete: (completed: boolean) => void;
};

export function Participant({ task, onRemove, onComplete }: Props) {
  const [buttonBackground, setButtonBackground] = useState('none');
  const [completed, setCompleted] = useState(false);

  const handlePress = () => {
    if (buttonBackground === 'none') {
      setButtonBackground('purple');
      setCompleted(true);
      onComplete(true);
    } else {
      setButtonBackground('none');
      setCompleted(false);
      onComplete(false);
    }
  };

  const handleRemove = () => {
    onRemove(completed);
  };

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonBackground }]}
          onPress={handlePress}
        >
          {buttonBackground === 'purple' && (
            <Image source={check} style={styles.buttonImage} />
          )}
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
        <View style={styles.taskContainer}>
          <Text style={[styles.name, completed && styles.completedText]}>
            {task}
          </Text>
        </View>
        <TouchableOpacity onPress={handleRemove}>
          <Image source={lixinho} style={styles.lixinho} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
