import { Component } from 'react'
import Taro from "@tarojs/taro";
import './app.scss'

class App extends Component {

  componentDidMount() {
    // 大于2M的字体要用https外链
    // Taro.loadFontFace({
    //   family: 'xxx',
    //   source: 'url("https://site/xxx.ttf")',
    //   success: console.log
    // })
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
