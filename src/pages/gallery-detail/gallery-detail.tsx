import React from "react"
import Taro from "@tarojs/taro"
import { getCurrentInstance } from '@tarojs/taro'
// import './gallery-detail.scss'

export default () => {
  const params = getCurrentInstance().router?.params || {};
  console.log('params:', params);
  React.useEffect(() => {
    Taro.setNavigationBarTitle({
      title: params.title || '详情'
    })
  }, []);

  return (
    'test'
  )
}
