
export default function App() {
  import { StatusBar } from 'expo-status-bar';
  import { useState } from 'react';
  import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
  
  
    const App = () => {
     
      const [newTask,setNewTask] = useState({})
      const [tasks,setTasks] = useState ([])
  
  
    const addTask = () =>{
      console.log("tarea")
    }
  
    const onHandlerTitle = (t)=>{
       setNewTask({title:t})
       console.log(newTask)
    }
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput onChangeText={onHandlerTitle} placeholder='Ingresar tarea' style={styles.input}/>
        <Button  color="#3921F5"title='ADD' onPress={addTask}/>
      </View>
          <View style={styles.tasksContainer}>
            <View style={styles.taskcard}>
              <Text style={styles.text}>Tarea 1</Text>
              <Button title='DEL'/>
            </View>
            <View style={styles.taskcard}>
              <Text style={styles.text}>Tarea 2</Text>
              <Button title='DEL'/>
            </View>
            <View style={styles.taskcard}>
              <Text style={styles.text}>Tarea 3</Text>
              <Button title='DEL'/>
            </View>
            <View style={styles.taskcard}>
              <Text style={styles.text}>Tarea 4</Text>
              <Button title='DEL'/>
            </View>
           </View>
      </View>
    );
  }
  
  const styles= StyleSheet.create({
    container: {
      backgroundColor:"#C5C5C5",
      flex:1, 
      paddingTop:30
    },
    inputContainer:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-evenly",
    },
  
    input:{
    width:250,
    borderBottomWidth:2,
    margin:10,
    paddingVertical:5,
    paddingHorizontal:10
          },
      
    tasksContainer:{
      alignItems:"center",
      gap:25,
      padding:10
    },
  
    taskcard:{
      flexDirection:"row",
      backgroundColor:"#F00000",
      padding:20,
      borderRadius:5,
      gap:200,
      alignItems:"center"
      
    },
  
    text:{
      fontSize:20,
      width:"70%",
      color:"white"
    },
  
    {)
      
  
