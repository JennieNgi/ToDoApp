import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Done({doneList}) {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.list}>
                <FlatList 
                    // iterate the items from doneList
                    data={doneList}
                    renderItem={({item}) => ( 
                        <Text style={styles.item}>{item.text}</Text>
                    )}
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        padding: 40,
        backgroundColor: 'lightblue',
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        fontSize: 20,
    },
  });