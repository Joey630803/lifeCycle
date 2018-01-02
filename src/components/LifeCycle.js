import React from 'react'
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        alert("Initial render");
        alert("constructor");
        this.state = {str: "hello"};
    }
  
    componentWillMount() {
        alert("componentWillMount");
    }
  
    componentDidMount() {
        alert("componentDidMount");
    }
  
    componentWillReceiveProps(nextProps) {
        alert("componentWillReceiveProps");
    }
  
    shouldComponentUpdate() {
        alert("shouldComponentUpdate");
        return true;        // 记得要返回true
    }
  
    componentWillUpdate() {
        alert("componentWillUpdate");
    }
  
    componentDidUpdate() {
        alert("componentDidUpdate");
    }
  
    componentWillUnmount() {
        alert("componentWillUnmount");
    }
  
    setTheState() {
        let s = "hello";
        if (this.state.str === s) {
            s = "HELLO";
        }
        this.setState({
            str: s
        });
    }
  
    forceItUpdate() {
        this.forceUpdate();
    }
    render() {
        alert("render");
        return(
            <div>
                <span>{"Props:"}<h2>{parseInt(this.props.num,10)}</h2></span>
                <br />
                <span>{"State:"}<h2>{this.state.str}</h2></span>
            </div>
        );
    }
  }
export default LifeCycle