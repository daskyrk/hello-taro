import React, { Component } from 'react'
import { View, Input, Text, Radio, Button, EventProps } from '@tarojs/components'
import Gallery from '../gallery/gallery';
import Category from '../category/category';
import Profile from '../profile/profile';
import './index.scss'

export default () => {
  const [tabs, setTabs] = React.useState([
    {
      key: 'recommend',
      icon: 'tuijian',
      title: '推荐',
      content: Gallery,
    },
    {
      key: 'category',
      icon: 'toushi',
      title: '分类',
      content: Category,
    },
    {
      key: 'profile',
      icon: 'smile',
      title: '我的',
      content: Profile,
    },
  ])
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  const Content = activeTab.content;
  return (
    <View className='container'>
      <View className="main">
        {<Content />}
      </View>
      <View className="tab-bar">
        {
          tabs.map((tab) => {
            return (
              <View key={tab.key} onClick={() => setActiveTab(tab)} className={`${activeTab === tab ? 'active' : ''} tab-bar-item`}>
                <View className={`iconfont icon-${tab.icon}`}></View>
                <View>{tab.title}</View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}
