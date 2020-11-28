import { Image, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React from "react";
import './profile.scss';

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
          <View>欢迎，</View>
          <View>{userInfo.nickName}</View>
        </View>
        <Image className='profile-avatar' mode='aspectFill' src={userInfo.avatarUrl} />
      </View>
    </View >
  )
}
