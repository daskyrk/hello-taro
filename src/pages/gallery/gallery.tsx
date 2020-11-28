import Taro from "@tarojs/taro";
import { Swiper, SwiperItem, View, Image } from "@tarojs/components"
import React from "react"
import { useData } from "../../stores/site";

import './gallery.scss'

export default () => {
  const [active, setActive] = React.useState(0);
  const pageData = useData(s => s.pages.gallery);
  const list = pageData && pageData.list || []

  const goToDetail = (item: SITE.GalleryItem) => {
    Taro.navigateTo({
      url: `/pages/gallery-detail/gallery-detail?title=${item.title}`
    })
  }
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
              <View className={`gallery-item ${i === active ? 'active' : ''}`} onClick={() => goToDetail(item)}>
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
