import { Swiper, SwiperItem, Text, View, Image } from "@tarojs/components"
import React from "react"
import './profile.scss'

export default () => {
  const [active, setActive] = React.useState('');
  const [list, setList] = React.useState([
    {
      img: 'https://himg.bdimg.com/sys/portraitn/item/9f14e683ace6ae870224',
      title: '你好',
      desc: '这是一段描述',
    },
    {
      img: 'https://wx.qlogo.cn/mmhead/Q3auHgzwzM4NNLs2NA29RfH1GmHtyMgHwibNd67hnpxaiaTEmyQfzLsg/0',
      title: '你好',
      desc: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
    },
  ]);


  return (
    <Swiper
      className='gallery'
      // indicatorColor='#999'
      // indicatorActiveColor='#333'
      circular
    // indicatorDots
    // autoplay
    >
      {
        list.map((item, i) => {
          return (
            <SwiperItem key={i}>
              <View className='gallery-item'>
                <Image className='gallery-item-img' src={item.img} />
                <View className='gallery-item-info gallery-item-title'>
                  {item.title}
                </View>
                <View className='gallery-item-info gallery-item-desc'>
                  {item.desc}
                </View>
              </View>
            </SwiperItem>
          )
        })
      }
    </Swiper>
  )
}
