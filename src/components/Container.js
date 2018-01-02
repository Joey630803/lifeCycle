import React from 'react'
import ReactDOM from 'react-dom'
import LifeCycle from './LifeCycle'
import '../styles/index.css'

class Container extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //num:Math.random()*100
            num:0
        }
    }
    propsChange=()=>{
        const num=this.state.num
        this.setState({num:num+1})
        //this.setState({num:Math.random()*100})
    }

    setLifeCycleState=()=>{
        this.refs.rLifeCycle.setTheState()
    }
    forceLifeCycleUpdate=()=> {
        this.refs.rLifeCycle.forceItUpdate();
    }

    unmountLifeCycle=()=>{
        // 这里卸载父组件也会导致卸载子组件
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
    }
    parentForceUpdate=()=>{
        this.forceUpdate()
    }
render(){
    return(
        <div>
            <button className='button' onClick={this.propsChange}>propsChange</button>
            <button className='button' onClick={this.setLifeCycleState}>setState</button>
            <button className='button' onClick={this.forceLifeCycleUpdate}>forceUpdate</button>
            <button className='button' onClick={this.unmountLifeCycle}>unmount</button>
            <button className='button' onClick={this.parentForceUpdate}>parentForceUpdateWithoutChange</button>
            <LifeCycle ref="rLifeCycle" num={this.state.num}/>
        </div>
    )
}

}

export default Container