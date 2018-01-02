import React from 'react'
class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        alert('实例化最初的加载')
        alert('constructor')
        this.state={str:'hello'}
    }
    componentWillMount=()=>{
        alert('componentWillMount')
    }
    componentDidMount=()=>{
        alert('componentDidMount')
    }
    componentWillReceiveProps=()=>{
        alert('componentWillReceiveProps')
    }
    shouldComponentUpdate=()=>{
        alert('shouldComponentUpdate')
        return true
    }
    componentWillUpdate=()=>{
        alert('componentWillUpdate')
    }
    componentDidUpdate=()=>{
        alert('componentDidUpdate')
    }
    componentWillUnmount=()=>{
        alert('componentWillUnmount')
    }
    setTheState=()=>{
        let s='hello'
        if(this.state.str===s){
            s='HELLO'
        }
        this.setState({str:s})
    }
    forceItUpdate=()=>{
        this.forceUpdate()
    }
    render(){
        alert('render')
        return(
            <div>
                <span>props:<h2>{parseInt(this.props.num,10)}</h2></span>
                <br/>
                <span>state:<h2>{this.state.str}</h2></span>
            </div>
        )
    }
}

export default LifeCycle