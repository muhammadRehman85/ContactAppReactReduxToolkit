import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/UserSlice';
import { updateUser } from '../redux/UserSlice';

const AddUsers = ({ navigation, route }) => {

    const defaultRouteParams = { type: '', data: { name: '', email: '', mobile: '', address: '' } };
    const { type, data } = route?.params || defaultRouteParams;
    const [name, setName] = useState(type == 'edit' ? data.name : '');
    const [email, setEmail] = useState(type == 'edit' ? data.email : '');
    const [mobile, setMobile] = useState(type == 'edit' ? data.mobile : '');
    const [address, setAddress] = useState(type == 'edit' ? data.address : '');
    const dispatch = useDispatch();


    return (
        <View style={{ padding: 20, paddingTop: 50 }}>
            {/* ====================input fields================== */}
            <TextInput
                value={name}
                onChangeText={txt => setName(txt)}
                placeholder='Enter User Name'
                style={{

                    height: 50,
                    borderWidth: 1,
                    borderColor: '#FC427B',
                    padding: 5,
                    borderRadius: 7, marginTop: 40
                }} />
            {/* ====================input fields================== */}

            <TextInput
                value={email}
                onChangeText={txt => setEmail(txt)}
                placeholder='Enter User email'
                style={{
                    height: 50,
                    borderWidth: 1,
                    borderColor: '#FC427B',
                    padding: 5,
                    borderRadius: 7, marginTop: 40

                }}
                keyboardType='email-address' />
            {/* ====================input fields================== */}

            <TextInput
                value={mobile}
                onChangeText={txt => setMobile(txt)}
                placeholder='Enter User mobile number'
                style={{
                    borderWidth: 1,
                    height: 50,
                    borderColor: '#FC427B',
                    padding: 5,
                    borderRadius: 7, marginTop: 40
                }}

                keyboardType='number-pad' />
            {/* ====================input fields================== */}

            <TextInput
                value={address}
                onChangeText={txt => setAddress(txt)}
                placeholder='Enter User mobile number'
                style={{
                    borderWidth: 1,
                    height: 50,
                    borderColor: '#FC427B',
                    padding: 5,
                    borderRadius: 7, marginTop: 40
                }}

            />
            {/* ====================Add button================== */}

            <TouchableOpacity style={{ backgroundColor: '#FC427B', padding: 15, borderRadius: 10, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                    if (type == 'edit') {
                        dispatch(updateUser({ name: name, email: email, mobile: mobile, address: address, index: route.params.index }))
                        navigation.navigate('Users');


                    } else {
                        dispatch(addUser({ name, email, mobile, address }));
                        navigation.navigate('Users');


                    }
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Add User</Text>
            </TouchableOpacity>
            {/* ================================================================ */}

        </View>
    )
}

export default AddUsers