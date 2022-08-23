import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { greaterThan } from 'react-native-reanimated';
class InputWithLabel extends Component {
    constructor(props) {
        super(props);
        this.orientation = this.props.orientation
            ? this.props.orientation == 'horizontal'
                ? 'row'
                : 'column'
            : 'column';
    }
    render() {
        return (
            <View style={[styles.container, { flexDirection: this.orientation }]}>
                <Text style={[styles.label, { flex: this.props.flexLabel }]}>{this.props.label}: </Text>
                <TextInput style={[styles.input, this.props.style, { editable: this.props.editable, flex: this.props.flexText }]}
                    {...this.props}
                >{this.props.text}</TextInput>
            </View>
        );
    }
}
class HistoryTable extends Component {
    render() {
        return (
            <View style={[styles.historyContainer]}>
                <View style={[styles.historyHeaderContainer, { flexDirection: 'row' }]}>
                    <Text style={styles.historyLabel}>Date</Text>
                    <Text style={styles.historyLabel}>Movie</Text>
                    <Text style={styles.historyLabel}>Ticket(s)</Text>
                    <Text style={styles.historyLabel}>Time</Text>
                    <Text style={styles.historyLabel}>Price</Text>
                </View>
                <HistoryContent
                    date={this.props.date}
                    movie={this.props.movie}
                    ticket={this.props.ticket}
                    time={this.props.time}
                    price={this.props.price}></HistoryContent>
            </View>
        );
    }
}
class HistoryContent extends Component {
    render() {
        return (
            <View style={[styles.historyContent, { flexDirection: 'row' }]}>
                <Text style={styles.historyLabel}>{this.props.date}</Text>
                <Text style={styles.historyLabel}>{this.props.movie}</Text>
                <Text style={styles.historyLabel}>{this.props.ticket}</Text>
                <Text style={styles.historyLabel}>{this.props.time}</Text>
                <Text style={styles.historyLabel}>{this.props.price}</Text>
            </View>
        );
    }
}

module.exports = {
    InputWithLabel: InputWithLabel,
    HistoryTable: HistoryTable
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: 'lightblue',
    },
    historyContainer: {
        alignSelf: 'stretch',
    },
    historyHeaderContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'lightblue',
    },
    historyLabel: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
    },
    historyContent: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    label: {
        flex: 1,
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 3,
        textAlignVertical: 'center',
        textAlign: 'right',
    },
    labelColon: {
        flex: 0,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 3,
        textAlignVertical: 'center',
    },
    input: {
        flex: 3,
        // right:20,
        fontSize: 20,
        color: 'blue',
        textAlign: 'left',
    },
});
