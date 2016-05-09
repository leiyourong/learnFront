import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory,Link,Redirect,IndexRoute,IndexLink,browserHistory,Lifecycle} from 'react-router';
import $ from 'jquery';
require('../public/css/reactCss.css')

const reactNode = document.getElementById('react');
const li = React.createElement('li', null, 'Text Content');
const ul = React.createElement('ul', { className: 'my-list' }, li);
render(ul, reactNode);

const ul2 = React.DOM.ul({className : 'my-list2'},React.DOM.li(null,'Text'))
render(ul2,reactNode);

const names = ['Alice', 'Emily', 'Kate'];
const text = 'Context';
const ul3 = <ul className='my-list3'>
              {/* Comment */}
              <li key='ctx'>{text}</li>
              {
                names.map(function(ele){
                  return <div key={ele}>{ele}</div>
                })
              }
              <li id='point'></li>
              <li id='arr'></li>
              <li id='example'></li>
              <li id='mixins'></li>
              <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />
              <li id='animation'></li>
              <li id='cloneElement'></li>
          </ul>;
render(ul3,reactNode);

const Point = React.createClass({
  getDefaultProps : function () {
    return {
      title : 'Hello World',
      pointName : 'Hello World'
    };
  },
  propTypes:{
    pointName:React.PropTypes.string.isRequired,
    pointKey:React.PropTypes.string
  },
  render:function(){
    //解构传递参数
    const {...tar} = this.props;
    // console.log(tar);
    return <div id={this.props.pointName}>{this.props.pointText}</div>
  }
})
render(
  <Point pointName='pro' pointText='i am a point' />,
  document.getElementById('point')
)

const PointArr = React.createClass({
  render:function(){
    return (
      <div>
      {
        React.Children.map(this.props.children,function(item){
          return item
        })
      }
      </div>
    )
  }
})

render(
  <PointArr>
      <span>fir-child</span>
      <span>sec-child</span>
  </PointArr>,
  document.getElementById('arr')
)

const MyComponent = React.createClass({
  componentWillMount:function(){
    // console.log('componentWillMounting')
  },
  componentDidMount:function(){
    // console.log('componentDidMount')
  },
  componentWillUpdate:function(props,state){
    // console.log(props)
    // console.log(state)
    // console.log('componentWillUpdate')
  },
  componentDidUpdate:function(props,state){
    // console.log(props)
    // console.log(state)
    // console.log('componentDidUpdate')
  },
  componentWillUnMount:function(){
    // console.log('componentWillUnMount')
  },
  componentWillReceiveProps:function(){
    // console.log('componentWillReceiveProps')
  },
  shouldComponentUpdate:function(){
    // console.log('shouldComponentUpdate')
    return true;
  },
  getInitialState:function(){
    return {
      focus:false
    }
  },
  handleClick: function(event) {
    // console.log('emitted by '+event.target.id)
    this.setState({
      focus:!this.state.focus
    })
    if(!this.state.focus){
      this.refs.myTextInput.focus();
      this.refs.myTextInput.id = 'input2';
    }else{
      this.refs.myTextInput.blur();
      this.refs.myTextInput.id = 'input1';
    }
  },
  handleChange:function(event){
    // console.log(event.target.value)
  },
  render: function() {
    const inputState = this.state.focus ? 'focus' : 'blur';
    return (
      <div>
        <input id='input1' type='text' defaultValue='123' ref='myTextInput' style={{width:'300px'}} onChange={this.handleChange} />
        <br />
        <input id='button1' type='button' value='Focus the text input' onClick={this.handleClick} />
        <div> input is {inputState}</div>
      </div>
    );
  }
});

render(
  <MyComponent />,
  document.getElementById('example')
);

const TimerMixin = {
    componentDidMount: function() {
      // console.log('TimerMixin-componentDidMount')
      this._interval = setInterval(this._onTick, 1000);
    },
    format: function(d) {
      return d >= 10 ? d : ('0'+d);
    },
    _onTick: function() {
      const d = new Date();
      this.timerTick(this.format(d.getHours()) + ':' + this.format(d.getMinutes()) + ':' + this.format(d.getSeconds()));
    },
    componentWillUnmount: function() {
      // console.log('TimerMixin-componentWillUnmount')
      clearInterval(this._interval);
    }
}
const Card = React.createClass({
  componentDidMount: function() {
    // console.log('Card-componentDidMount')
  },
  componentWillUnmount: function() {
    // console.log('Card-componentWillUnmount')
  },
  mixins: [
    TimerMixin
  ],
  timerTick: function(t) {
    this.setState({
      time: t
    });
  },
  getInitialState: function() {
    return {
      time: 'loading time'
    }
  },
  render: function() {
    return (
      <div>Hello {this.props.name}! It is {this.state.time} !</div>
    );
  }
});
render(
  <Card name='guys' />,
  document.getElementById('mixins')
)

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    const newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    const newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    const items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionLeaveTimeout={500} transitionEnterTimeout={500} transitionEnter={false} transitionName='example'>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

render(
  <TodoList />,
  document.getElementById('animation')
)

const CloneElement = React.createClass({
  clone:function(element){
    element = React.createElement('div',{style:{font:'50'}},'123')
    return React.cloneElement(element, {style: {color: 'blue'}});
  },
  render:function(){
    return <div>{React.Children.map(this.props.children,this.clone)}</div>

  }
})
render(
  <CloneElement>
    <div>CloneElement1</div>
    <div>CloneElement2</div>
  </CloneElement>,
  document.getElementById('cloneElement')
)
/* ------------------------React-Router--------------------------*/
const Hello = React.createClass({
  render:function(){
    return (
      <div>
        Hello,Router
        <ul role='nav'>
            <li><Link to='/about' activeClassName='link-active'>About</Link></li>
            <li><Link to='/repos/zhangsan/2' activeClassName='link-active'>Repos</Link></li>
            <li><IndexLink to='/' activeClassName='link-active'>home</IndexLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

const Child = React.createClass({
  render:function(){
    return (
      <div>Child</div>
    )
  }
});
/* <h3>{this.props.params.name}~{this.props.params.type}</h3> */
const Repos = React.createClass({
  render:function(){
    return (
      <div>

        <h3>{this.props.params.name}_{this.props.params.type}</h3>
        <ul>
          <li><Link to='/repos/reactjs/react-router' activeClassName='active'>React Router</Link></li>
          <li><Link to='/repos/facebook/react' activeClassName='active'>React</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});

//Use ES6
class Home extends React.Component {
    static defaultProps = {
    }
    render(){
        return (<div>Welcome</div>)
    }
}

//activeStyle={{ color: 'red' }}
const About = React.createClass({
  render:function(){
    return (
      <div>
        About
        <Link to='/about/child' activeClassName='link-active' >child</Link>
        {this.props.children}
      </div>
    )
  }
});
render(
  <Router history={hashHistory}>
    <Route path='/' component={Hello}>
      <IndexRoute component={Home} />
      <Route path='repos/:name/:type' component={Repos} />
    </Route>
    <Redirect from='/xxx' to='/' />
    <Route path='/about' component={About}>
      <Route path='child' component={Child} />
    </Route>
  </Router>,
  document.getElementById('router')
)
