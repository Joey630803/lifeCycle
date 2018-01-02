import React from 'react'
import ReactDOM from 'react-dom'
import LifeCycle from './LifeCycle'
import '../styles/index.css'
class Container  extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          num: Math.random() * 100
      };
  }

  propsChange() {
      this.setState({
          num: Math.random() * 100
      });
  }

  setLifeCycleState() {
      this.refs.rLifeCycle.setTheState();
  }

  forceLifeCycleUpdate() {
      this.refs.rLifeCycle.forceItUpdate();
  }

  unmountLifeCycle() {
      // 这里卸载父组件也会导致卸载子组件
      ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  parentForceUpdate() {
      this.forceUpdate();
  }

  render() {
      return (
          <div>
              <button className="button" onClick={this.propsChange.bind(this)}>propsChange</button>
              <button className="button" onClick={this.setLifeCycleState.bind(this)}>setState</button>
              <button className="button" onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</button>
              <button className="button" onClick={this.unmountLifeCycle.bind(this)}>unmount</button>
              <button className="button" onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</button>
              <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
          </div>
      )
  }
}
export default Container