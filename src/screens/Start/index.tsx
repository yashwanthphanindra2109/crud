import React, { useContext, useEffect } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import NoteItem from './NoteItem'
import { NotesContext } from '../../contexts'
import styles from './styles'
import * as SQLite from 'expo-sqlite';
import * as FileSystem from "expo-file-system";
import { Asset } from 'expo-asset'
const Start = () => {
  const { navigate } = useNavigation()
  const { notes, destroyNote } = useContext(NotesContext)
  useEffect(() => {
    // async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {
    //   if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    //     await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    //   }
    //   await FileSystem.downloadAsync(
    //     Asset.fromModule(require("")).uri,
    //     FileSystem.documentDirectory + 'SQLite/myDatabaseName.db'
    //   );
    //   return SQLite.openDatabase('myDatabaseName.db');
    // }
    executeDbQuery();
  });
  const executeDbQuery = () => {
    const db = SQLite.openDatabase('MasterDb', '1.0');

    // db.exec([{ sql: "CREATE TABLE Persons (PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255));", args: [] }], false, () =>
    //   console.log('Foreign keys turned on')
    // );
    // db.exec([{ sql: "INSERT INTO Persons (PersonID , LastName, FirstName, Address, City)VALUES (1, 'Tom B. Erichsen', 'yash', 'Stavanger', 'hyd');", args: [] }], false, () =>
    //   console.log('Foreign keys turned on')
    // );
    db.exec([{ sql: "SELECT * from Persons", args: [] }], false, (tx, res) =>
      console.log('Foreign keys turned on', tx, res)
    );
  }
  return (
    <SafeAreaView style={styles.startScreen}>
      <RectButton style={styles.roundedBtn} onPress={() => navigate('Form')}>
        <Feather name="plus" size={40} color="white" />
      </RectButton>

      <FlatList
        data={notes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <NoteItem
            note={item}
            onDelete={() => destroyNote(item.id)}
            onPress={() => navigate('Form', item.id)}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Start
