import { Button, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React from "react";
import './login.scss';

interface IProps {
  onLogin(userInfo: Taro.UserInfo)
}
export default ({ onLogin }: IProps) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    Taro.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          Taro.getUserInfo({
            success: res => {
              onGetUserInfo(res.userInfo)
            }
          })
        } else {
          setVisible(true);
        }
      },
      fail() {
        setVisible(true);
      }
    })
  }, [])

  const onGetUserInfo = (userInfo: Taro.UserInfo) => {
    Taro.setStorage({
      key: "userInfo",
      data: userInfo
    });
    onLogin(userInfo);
    setVisible(false);
  }

  if (!visible) {
    return null
  }

  return (
    <View className="login">
      <View className='login-line'></View>
      <View className='login-tip'>请先登录</View>
      <View className=''>
        <Button className='login-button' open-type="getUserInfo" onGetUserInfo={res => onGetUserInfo(res.detail.userInfo)} onClick={() => setVisible(false)}>
          <View className='iconfont icon-weixin'></View>微信登录
        </Button>
      </View>
      <View className='login-agreement'>使用此功能表明您同意用户协议（笑）</View>
    </View >
  )
}
