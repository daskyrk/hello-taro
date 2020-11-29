import React from "react"
import Taro from "@tarojs/taro"
import { getCurrentInstance } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from "@tarojs/components";
import { useData } from "../../stores/site";
import Slide from "../../components/slide";
import './gallery-detail.scss'

export default () => {
  const params = getCurrentInstance().router?.params || {};
  const [active, setActive] = React.useState(0);
  const [expand, setExpand] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const pageData = useData(s => s.pages.galleryDetail);
  const list = pageData && pageData.list || [];

  React.useEffect(() => {
    Taro.setNavigationBarTitle({
      title: params.title || '详情'
    })
  }, []);

  const activeItem = list[active] || {};

  const handleFocus = () => {
    setFocus(p => !p);
    setExpand(false);
  }

  const handleExpand = (direction) => {
    setExpand(direction === 'up');
  }

  return (
    <View className="gallery-detail">
      <Swiper
        current={active}
        className='gallery-detail-swiper'
        style={focus ? { height: '90%' } : {}}
        onChange={e => setActive(e.detail.current)}
      >
        {
          list.map((item, i) => {
            return (
              <SwiperItem key={i} className='img-container' onClick={() => handleFocus()}>
                <Image className='item-img' mode='aspectFit' src={item.img} />
              </SwiperItem>
            )
          })
        }
      </Swiper>
      <Slide className='detail-info' height={focus ? 0 : expand ? 220 : 150} onSlide={handleExpand}>
        <View className='info-summary'>
          <Text className='info-tip'>{params.title || '作品信息'}</Text>
          <Text className='info-count ml16 fz14 color-desc'>{active + 1} / {list.length}</Text>
        </View>
        <View className="mt32">{activeItem.title}</View>
        <View className="fz14 color-desc">{activeItem.desc}</View>
      </Slide>
    </View>
  )
}
