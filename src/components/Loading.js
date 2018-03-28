import React, { Component } from 'react';


var styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
};

class Loading extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: props.text,
        }
    }
    componentDidMount(){
        var stopper = this.props.text + '...';
        this.interval = window.setInterval(function (){
            if(this.state.text === stopper){
                this.setState(function() {
                    return {
                        text: this.props.text
                    }
                })
            } else {
                this.setState(function(prevState){
                    return {
                        text: prevState.text + '.'
                    }
                });
            }
        }.bind(this), 300)
    }
    render(){
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        )
    }
}

Loading.defaultProps = {
    text:'Loading',
    speed: 300
};

export default Loading;