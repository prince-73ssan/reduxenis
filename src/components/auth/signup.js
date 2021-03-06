import React, { Component } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { InputFeild } from '../common';
import { formData, signUp } from '../../actions';


class SignUp extends Component {
    onButtonPress() {
        const { email, password } = this.props;
        this.props.signUp({ email, password });
    }
    render() {
        return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <InputFeild
            placeholder="exp: me@gmail.com"
            title="Email"
            onChangeText={value => { this.props.formData({ prop: 'email', value }); }}
            value={this.props.email}
            />
            <InputFeild
            placeholder="should be more then 6 characters"
            title="Password"
            secureTextEntry
            onChangeText={value => { this.props.formData({ prop: 'password', value }); }}
            value={this.props.password}
            />
            <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                <View style={styles.btn}>
                 <Text style={styles.text}>SIGN UP</Text>
                </View>
            </TouchableOpacity>
      </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#F5FAFF',
        paddingTop: 124,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2189C5',
      },
    text: {
        margin: 16,
        color: 'white',
    },
});

const mapStateToProps = ({ auth }) => {
    const { email, password } = auth;
    return { email, password };
};

export default connect(mapStateToProps, { formData, signUp })(SignUp);
