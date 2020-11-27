import React, { Component } from 'react'
import { View, Input, Text, Radio, Button, EventProps } from '@tarojs/components'
import Gallery from '../gallery/gallery';
import Category from '../category/category';
import Profile from '../profile/profile';
import './index.scss'

export default () => {
  const [activeBar, setActiveBar] = React.useState(0);

  const handleSwitchTab = (index) => {
    setActiveBar(index)
  }
  return (
    <View className='container'>
      <View className="main">
        {activeBar === 0 && <Gallery />}
        {activeBar === 1 && <Category />}
        {activeBar === 2 && <Profile />}
      </View>
      <View className="tab-bar">
        <View onClick={() => handleSwitchTab(0)} className={`${activeBar === 0 ? 'active' : ''} tab-bar-item`}>
          <View className='iconfont icon-tuijian'></View>
          <View>推荐</View>
        </View>
        <View onClick={() => handleSwitchTab(1)} className={`${activeBar === 1 ? 'active' : ''} tab-bar-item`}>
          <Text className='iconfont icon-toushi'></Text>
          <Text>分类</Text>
        </View>
        <View onClick={() => handleSwitchTab(2)} className={`${activeBar === 2 ? 'active' : ''} tab-bar-item`}>
          <Text className='iconfont icon-smile'></Text>
          <Text>我的</Text>
        </View>
      </View>
    </View>
  )
}
