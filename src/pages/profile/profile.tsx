import { Image, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React from "react";
import config from "../../_config";
import './profile.scss';

const getWelcomeForSpecial = (userInfo: Taro.UserInfo) => {
  let welcome = '欢迎';
  if (!config.specialPersons.includes(userInfo.nickName)) {
    return welcome
  }

  const hour = new Date().getHours();
  const timeRange = [
    [0, 8, '早睡'],
    [8, 12, '早安'],
    [12, 18, '午安'],
    [18, 24, '晚安'],
  ]
  timeRange.forEach(([start, end, str]) => {
    if (hour >= start && hour < end) {
      welcome = str as string;
    }
  })
  return welcome;
}

export default () => {
  const [userInfo, setUserInfo] = React.useState({} as any);
  React.useEffect(() => {
    Taro.getStorage({
      key: 'userInfo',
      success(res) {
        setUserInfo(res.data);
      },
    })
  }, [])

  return (
    <View className="profile">
      <View className="profile-info flex-box">
        <View className='profile-welcome'>
          <View>{getWelcomeForSpecial(userInfo)}，</View>
          <View>{userInfo.nickName}</View>
        </View>
        <Image className='profile-avatar' mode='aspectFill' src={userInfo.avatarUrl} />
      </View>
    </View >
  )
}
