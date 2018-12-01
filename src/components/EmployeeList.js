 import React, { Component } from 'react';
 import { Card, CardSection, Button, Input, Spinner } from './common';
 import { Text, View } from 'react-native';
 import { connect } from 'react-redux';
 import { emailChanged, passwordChanged, loginUser } from '../actions';
 
 class EmployeeList extends Component {
     render() {
         return (
            <View>
                <Text>
                    Employee List
                </Text>
            </View>
         )
     }
 };
 
 export default EmployeeList;