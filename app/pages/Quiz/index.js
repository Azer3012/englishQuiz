import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {questions} from '../../utils/data';
const Quiz = () => {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * questions?.length),
  );
  const [quizes, setQuizes] = useState(questions);
  const [answer, setAnswer] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [wrong, setWrong] = useState(false);

  const showAnswer = useCallback(() => {
    setAnswer(quizes[index].answer);
    setWrong(false);
    setInputValue('');
  }, [index, quizes]);

  const submitAnswer = useCallback(() => {
    let value=inputValue.toLowerCase().trim()
    if (value === quizes[index].answer) {
      setWrong(false);
      setIndex(Math.floor(Math.random() * questions?.length));
    } else {
      setWrong(true);
      setInputValue('');
    }
    setAnswer('');
    setInputValue('');
  }, [index, inputValue, quizes]);

  const changeQuestion = useCallback(() => {
    setAnswer('');
    setWrong(false);
    setIndex(Math.floor(Math.random() * questions?.length));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quizes[index].question}</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={e => setInputValue(e)}
          placeholder="Cavabı yaz"
          value={inputValue}
        />
        <TouchableOpacity style={styles.btn} onPress={submitAnswer}>
          <Text style={styles.btnText}>Təsdiqlə</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={showAnswer}>
          <Text style={styles.btnText}>Cavabı göstər</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={changeQuestion}>
          <Text style={styles.btnText}>Suali dəyiş</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.answer}>{answer}</Text>
      <Text style={styles.wrong}>
        {wrong && 'Səhv yazdınız zəhmət olmasa yenidən yoxlayın'}
      </Text>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
  container: {
    width: '90%',
    marginHorizontal: 100,
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderColor: 'gray',
    paddingLeft: 15,
  },
  btn: {
    backgroundColor: '#E5E5E5',
    marginVertical: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    color: 'black',
  },
  answer: {
    color: 'green',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
  wrong: {
    color: 'red',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
});
