import { Swiper, SwiperItem, Text, View, Image } from "@tarojs/components"
import React from "react"
import './gallery.scss'

export default () => {
  const [active, setActive] = React.useState('');
  const [list, setList] = React.useState([
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907407&di=1eca68bc8bad9e8096149e119a9f7a26&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202001%2F02%2F20200102230942_lstzd.thumb.400_0.jpg',
      title: '你好',
      desc: '这是一段描述',
    },
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907407&di=6cd7a9feef86f4478addf371d9c45095&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F22%2F20161122085410_ZdQWw.thumb.400_0.jpeg',
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
                <Image className='gallery-item-img' mode='aspectFill' src={item.img} />
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
