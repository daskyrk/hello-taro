import { Image, View } from "@tarojs/components";
import React from "react";
import { useData } from "../../stores/site";
import './category.scss';

export default () => {
  const pageData = useData(s => s.pages.category);
  const list = pageData && pageData.list || []

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
