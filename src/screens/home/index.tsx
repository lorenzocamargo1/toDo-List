// Componente Home.tsx

import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import Logo from './assets/Logo.png';
import plus from './assets/plus.png';
import { styles } from "./styles";
import { Participant } from '../../components/Participant';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');
  const [taskCreatedCount, setTaskCreatedCount] = useState(0);
  const [taskCompletedCount, setTaskCompletedCount] = useState(0);

  function handleTaskAdd() {
    if (tasks.includes(taskName)) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome');
    }

    setTasks(prevState => [...prevState, taskName]);
    setTaskName('');
    setTaskCreatedCount(prevCount => prevCount + 1);
  }

  function handleTaskRemove(name: string, completed: boolean) {
    setTasks(prevState => prevState.filter(task => task !== name));
    setTaskCompletedCount(prevCount => completed ? prevCount - 1 : prevCount);
    setTaskCreatedCount(prevCount => prevCount - 1);
  }

  function handleComplete(completed: boolean) {
    if (completed) {
      setTaskCompletedCount(prevCount => prevCount + 1);
    } else {
      setTaskCompletedCount(prevCount => prevCount - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.container1}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor="#808080"
            onChangeText={setTaskName}
            value={taskName}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}>
              <Image source={plus} style={styles.plus} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskCreatedContainer}>
          <Text style={styles.taskCreated}>
            Criadas: {taskCreatedCount}
          </Text>
        </View>
        <Text style={styles.taskCompleted}>
          Concluídas: {taskCompletedCount}
        </Text>

        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <View>
              <Participant
                key={item}
                task={item}
                onRemove={(completed: boolean) => handleTaskRemove(item, completed)}
                onComplete={handleComplete}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View>
              <View>
              <Image source={require('./assets/clipboard.png')} style={styles.imageContainer} /> 
              </View>  
              <Text style={styles.listBoldEmptyText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listLightEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>          
            </View>
          )}
        />
      </View>
    </View>
  );
}
