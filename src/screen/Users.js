import { View, Text, FlatList } from 'react-native'
import React from 'react'
import AddUsers from './AddUsers'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../redux/UserSlice'

const Users = ({ navigation }) => {
  const dispatch=useDispatch();
  const users = useSelector(state => state.user);
  console.log(users);
  return (
    <>
      <View style={{ margin: 15, backgroundColor: "#FC427B", height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Contacts</Text></View>
      <FlatList
        data={users.data}
        keyExtractor={
          (item) => item.name
        }
        renderItem={({ item, index }) => (
          <View style={{ borderWidth: 2, borderColor: 'pink', borderRadius: 10, margin: 15, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            
            <View><Text style={{ color: 'grey', fontWeight: 'bold' }}>Name:{item.name}</Text>
              <Text style={{ color: 'grey', fontWeight: 'bold' }}> Email:{item.email}</Text>
              <Text style={{ color: 'grey', fontWeight: 'bold' }}> Email:{item.mobile}</Text>
              <Text style={{ color: 'grey', fontWeight: 'bold' }}> Email:{item.address}</Text>
            </View><View><TouchableOpacity style={{ backgroundColor: 'pink', borderRadius: 5, padding: 5, }}
              onPress={() => navigation.navigate('AddUsers', { type: 'edit', data: item, index: index })}
            ><Text>Update</Text></TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{dispatch(deleteUser(index))}} style={{ backgroundColor: 'red', borderRadius: 5, padding: 5, marginTop: 10 }}><Text style={{ color: 'white' }}>Delete</Text></TouchableOpacity></View></View>
        )}
      />
      <TouchableOpacity style={{ backgroundColor: '#FC427B', width: 150, padding: 15, borderRadius: 10, margin: 20, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('AddUsers')}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Users</Text>
      </TouchableOpacity>
    </>)
}

export default Users