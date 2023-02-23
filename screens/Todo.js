/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView} from 'react-native';
import 'react-native-get-random-values';
const { v4: uuidv4 } = require('uuid');


const Todo = ({doneList,setDoneList}) => {
    const [todos, setTodos] = useState([
        {text: 'schoolwork', key: uuidv4()},
        {text: 'more schoolwork', key: uuidv4()},
        {text: 'a lot of schoolwork', key: uuidv4()},
    ]);

    const onPress = (itemKey, text) => {
        // Remove item by key from todos array
        setTodos(todos.filter(({ key }) => key !== itemKey));
        // Add selected item to doneList
        let newDoneList = doneList.concat({ text:text, key: uuidv4() });
        setDoneList(newDoneList);
    }

    const onSubmit = (text) => {
        if (text.length > 0){
            // Add items to todos array
            let newTodos = todos.concat({ text:text, key: uuidv4() });
            setTodos(newTodos);
        } else {
            // .alert() method
            Alert.alert(
                // first parameter is the title
                "OOPS!",
                // second parameter is the alert message
                "You haven't input anything:(",
                // parameter is an array of buttons
                [{text: "Understood", onPress: () => console.log("closed")}]
            );
        }
    }

    const [text, setText] = useState('');
    
    const onChange = (e) => {
        //console.log(e);
        setText(e);
    };

  return (
    // When we press something or whatever is inside this TouchableWithoutFeedback component, it won't start to affect opacity of what inside it
    <TouchableWithoutFeedback onPress={()=> {
            //console.log('dismiss keyboard');
            Keyboard.dismiss();
        }}>
        {/* View is like a container for things that belongs together */}
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholder='Enter New Todo Tasks...'
                        onChangeText={onChange}
                    />
                    <Button
                        onPress={() => onSubmit(text)}
                        title="Add"
                        color="coral"
                    />
                </View>

                <View style={styles.list}>
                    {/* <ScrollView>
                        {todos.map(item => (
                            <View key={item.key}>
                                <Text style={styles.item}>{item.text}</Text>
                            </View>
                        ))}
                    </ScrollView> */}


                    {/* With FlatList, you don't need to specify the key, it automatically does it for you */}
                    {/* FlatList is also automatically scrollable */}
                    {/* FlatList also has better performance as it only renders the visible items, whereas .map() method renders all items at once, which can be slow for large lists. */}
                    <FlatList
                        // keyExtractor prop
                        // in case the object doesn't have a key but an id or whatever name it is
                        // keyExtractor={(item) => item.id}

                        // numColumns prop
                        // numColumns={2}

                        // 1st prop is the data, it specify the data that we want to output
                        data={todos}
                        // 2nd prop is the renderItem, it is a function that returns a JSX
                        // the item refers to whatever item is iterating
                        renderItem={({item}) => ( 
                        // TouchableOpacity is a wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.
                        <TouchableOpacity onPress={() => onPress(item.key, item.text)}>
                            <Text style={styles.item}>{item.text}</Text>
                        </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 40,
    backgroundColor: 'lightgreen',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  input: {
    padding: 6,
    marginBottom: 10,
    borderColor: 'black',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    fontSize: 20,
  },
  
});

export default Todo;
