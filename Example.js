/**
 * Created by zhai on 16/1/24.
 */
/**
 * Created by zhai on 16/1/24.
 */

'use strict'

var React = require('react-native');
var {
    StyleSheet,
    View,
    Text,
    ScrollView
    } = React;

var Example = React.createClass({
    render: function () {
        return (
            <ScrollView style={styles.container}>
                <Pager title="flexDirection">
                    <Text style={styles.subtitle}>row</Text>
                    <CircleBlock style={{flexDirection: 'row'}}>
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                    </CircleBlock>
                    <Text style={styles.subtitle}>column</Text>
                    <CircleBlock style={{flexDirection: 'column'}}>
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                    </CircleBlock>
                </Pager>

                <Pager title='justifyContent'>
                    <Text style={styles.subtitle}>flex-start</Text>
                    <CircleBlock style={{justifyContent: 'flex-start'}}>
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                    </CircleBlock>
                    <Text style={styles.subtitle}>center</Text>
                    <CircleBlock style={{justifyContent:'center'}}>
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                    </CircleBlock>
                    <Text style={styles.subtitle}>flex-end</Text>
                    <CircleBlock style={{justifyContent: 'flex-end'}}>
                        <Circle /><Circle /><Circle /><Circle /><Circle />
                    </CircleBlock>
                    <Text style={styles.subtitle}>space-between</Text>
                    <CircleBlock style={{justifyContent: 'space-between'}}>
                        <Circle /><Circle /><Circle /><Circle /><Circle />
                    </CircleBlock>
                    <Text style={styles.subtitle}>space-around</Text>
                    <CircleBlock style={{justifyContent: 'space-around'}}>
                        <Circle /><Circle /><Circle /><Circle /><Circle />
                    </CircleBlock>
                </Pager>
                <Pager title='alignItems'>
                    <Text style={styles.subtitle}>flex-start</Text>
                    <CircleBlock style={{alignItems: 'flex-start', height: 30}}>
                        <Circle size={15}/><Circle size={10}/><Circle size={20}/>
                        <Circle size={17}/><Circle size={12}/><Circle size={15}/>
                        <Circle size={10}/><Circle size={20}/><Circle size={17}/>
                        <Circle size={12}/><Circle size={15}/><Circle size={10}/>
                        <Circle size={20}/><Circle size={17}/><Circle size={12}/>
                        <Circle size={15}/><Circle size={8}/>
                    </CircleBlock>
                    <Text style={styles.subtitle}>center</Text>
                    <CircleBlock style={{alignItems: 'center', height: 30}}>
                        <Circle size={15}/><Circle size={10}/><Circle size={20}/>
                        <Circle size={17}/><Circle size={12}/><Circle size={15}/>
                        <Circle size={10}/><Circle size={20}/><Circle size={17}/>
                        <Circle size={12}/><Circle size={15}/><Circle size={10}/>
                        <Circle size={20}/><Circle size={17}/><Circle size={12}/>
                        <Circle size={15}/><Circle size={8}/>
                    </CircleBlock>
                    <Text style={styles.subtitle}>flex-end</Text>
                    <CircleBlock style={{alignItems: 'flex-end', height: 30}}>
                        <Circle size={15}/><Circle size={10}/><Circle size={20}/>
                        <Circle size={17}/><Circle size={12}/><Circle size={15}/>
                        <Circle size={10}/><Circle size={20}/><Circle size={17}/>
                        <Circle size={12}/><Circle size={15}/><Circle size={10}/>
                        <Circle size={20}/><Circle size={17}/><Circle size={12}/>
                        <Circle size={15}/><Circle size={8}/>
                    </CircleBlock>
                </Pager>
                <Pager title='flexWrap'>
                    <Text style={styles.subtitle}>wrap</Text>
                    <CircleBlock style={{flexWrap: 'wrap'}}>
                        {'oooooooooooooooo'.split('').map((char, i) => <Circle key={i} size={i+10}/>)}
                    </CircleBlock>
                </Pager>
            </ScrollView>
        );
    }
});

var Circle = React.createClass({
    render: function () {
        var size = this.props.size || 20;
        return (
            <View style={{
                    borderRadius: size / 2,
                    backgroundColor: '#ED5565',
                    width: size,
                    height: size,
                }}
            />
        );
    }
});
var CircleBlock = React.createClass({
    render: function () {
        var circleStyle = {
            flexDirection: 'row',
            borderWidth: 0.7,
            borderColor: '#AAB2BD',
        };
        return (
            <View style={[circleStyle,this.props.style]}>
                {this.props.children}
            </View>
        );
    }
});

var Pager = React.createClass({
    render: function () {
        var ContentWrapper = (View:ReactClass<any, any, any>);
        var wrapperProps = {};
        var title = this.props.title ?
            <View style={styles.titleLayout}>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </View> :
            null;
        return (
            <View style={styles.page}>
                {title}
                <ContentWrapper
                    style={styles.wrapper}
                    {...wrapperProps}>
                    {this.props.children}
                </ContentWrapper>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F7FA',
        flex: 1,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    page: {
        flexWrap: 'wrap',
        backgroundColor: '#E6E9ED',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#F5F7FA',
        margin: 10,
        marginVertical: 5,
    },
    titleLayout: {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderBottomWidth: 1,
        marginBottom: 0,
        height: 45,
        padding: 10,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 19,
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 13,
    }
});

exports.module = Example;
