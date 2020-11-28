import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Gallery from '../gallery/gallery';
import Category from '../category/category';
import Profile from '../profile/profile';
import Login from "../login/login";
import './index.scss'

enum TabKey {
  Recommend = 'recommend',
  Category = 'category',
  Profile = 'profile',
}
export default () => {
  const tabMap = {
    [TabKey.Recommend]: {
      icon: 'tuijian',
      title: '推荐',
      content: Gallery,
    },
    [TabKey.Category]: {
      icon: 'toushi',
      title: '分类',
      content: Category,
    },
    [TabKey.Profile]: {
      icon: 'smile',
      title: '我的',
      content: Profile,
    },
  }

  const [activeKey, setActiveKey] = React.useState(TabKey.Recommend);
  const [showLogin, setShowLogin] = React.useState(false);

  const handleSwitch = (tabKey: TabKey) => {
    if (tabKey === TabKey.Profile) {
      try {
        const res = Taro.getStorageSync('userInfo');
        if (!res) {
          setShowLogin(true);
        } else {
          setActiveKey(tabKey);
        }
      } catch (error) {
        // do nothing
      }
    } else {
      setActiveKey(tabKey);
    }
  }

  const onLogin = () => {
    setShowLogin(false);
    setActiveKey(TabKey.Profile)
  }

  const Content = tabMap[activeKey].content;
  return (
    <View className='container'>
      <View className="main">
        <Content />
      </View>
      <View className="tab-bar">
        {
          Object.keys(tabMap).map((tabKey: TabKey) => {
            const tab = tabMap[tabKey];
            return (
              <View key={tabKey} onClick={() => handleSwitch(tabKey)} className={`${activeKey === tabKey ? 'active' : ''} tab-bar-item`}>
                <View className={`iconfont icon-${tab.icon}`}></View>
                <View>{tab.title}</View>
              </View>
            )
          })
        }
      </View>
      {showLogin && <Login onLogin={onLogin} />}
    </View>
  )
}
