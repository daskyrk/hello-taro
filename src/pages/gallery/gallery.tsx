import { Swiper, SwiperItem, Text, View, Image } from "@tarojs/components"
import React from "react"
import './gallery.scss'

export default () => {
  const [active, setActive] = React.useState(0);
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
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907405&di=b369a7d1a8f30cda66c94ff28d3e360f&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F231001c63484ce40ddaad5dcd6affe89754ce0b9137e4c-P0V8qQ_fw658',
      title: '你好',
      desc: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
    },
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907399&di=33756c12658f9184d2741ab1dccd6e17&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F11%2F20160911115455_LVwnC.thumb.700_0.jpeg',
      title: '你好',
      desc: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
    },
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907397&di=45de9cfc691b8bbeec04011a5d16bc07&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201507%2F20%2F20150720002604_eRmQE.jpeg',
      title: '你好',
      desc: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
    },
  ]);

  console.log('active:', active);
  return (
    <Swiper
      current={active}
      className='gallery'
      previousMargin='45'
      nextMargin='45'
      onChange={e => setActive(e.detail.current)}
    >
      {
        list.map((item, i) => {
          return (
            <SwiperItem key={i}>
              <View className={`gallery-item ${i === active ? 'active' : ''}`}>
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
