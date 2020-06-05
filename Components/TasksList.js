import React, {Component} from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Context from '../Context/context';

export default class TasksList extends Component {

    static contextType = Context;

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title} >To Do</Text>
                <FlatList 
                    data={this.context.tasks} 
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                    return (
                        <View style={styles.rowcontainer}>
                            <Text style={styles.text}>{item}</Text>
                            <Text 
                                style={styles.delete}
                                onPress= {()=>{this.context.deleteTask(index)}}
                            >
                                delete
                            </Text>
                        </View>
                    )
                }}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    rowcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    title: {
        marginTop:20,
        marginLeft: 20,
        fontSize: 30,
    },
    text: {
        padding: 10,
        fontSize: 20
    },
    delete: {
        alignSelf: 'flex-end',
        padding: 8,
        fontSize: 15,
        
    }
});
