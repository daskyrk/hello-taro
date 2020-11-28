import { Image, View } from "@tarojs/components";
import React from "react";
import './category.scss';

export default () => {
  const [list, setList] = React.useState([
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907407&di=1eca68bc8bad9e8096149e119a9f7a26&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202001%2F02%2F20200102230942_lstzd.thumb.400_0.jpg',
    },
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907407&di=6cd7a9feef86f4478addf371d9c45095&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F22%2F20161122085410_ZdQWw.thumb.400_0.jpeg',
    },
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907407&di=4792c73bf1aca65b17792b2b0a4a363b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201507%2F08%2F20150708180900_m8MXr.thumb.700_0.jpeg',
    },
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907406&di=0eefe36df097d0a44cdc142d18c17f38&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F27%2F20150527142547_dMuvw.thumb.400_0.jpeg',
    },
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907405&di=b369a7d1a8f30cda66c94ff28d3e360f&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F231001c63484ce40ddaad5dcd6affe89754ce0b9137e4c-P0V8qQ_fw658',
    },
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907399&di=33756c12658f9184d2741ab1dccd6e17&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F11%2F20160911115455_LVwnC.thumb.700_0.jpeg',
    },
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415907397&di=45de9cfc691b8bbeec04011a5d16bc07&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201507%2F20%2F20150720002604_eRmQE.jpeg',
    },
    {
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606415975791&di=9c7010a130066766086b42c83cbd0a22&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D378b472a4a166d223877159c76220945%2F48c7472c11dfa9ece86396f66bd0f703908fc193.jpg',
    },
  ]);


  return (
    <View className='category'>
      <View className='category-title'>近期推荐</View>
      <View className="category-list">
        {
          list.map((item, i) => {
            return (
              <View key={i} className='category-item'>
                <Image className='category-item-img' mode='aspectFill' src={item.img} />
              </View>
            )
          })
        }
      </View>
    </View>
  )
}
