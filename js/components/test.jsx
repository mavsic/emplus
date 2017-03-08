import React from 'react';
import firebase from 'firebase';

export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testValue: ''
        };
    }

    componentWillMount() {
        this.firebaseRef = firebase.database().ref('/test');
        this.firebaseRef.on('value', function (data) {
            this.setState({
                testValue: data.val()
            });
        }.bind(this));
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }
    
    render() {
        return (
            <h1>Value: '{ this.state.testValue }'</h1>
        );
    }
}
