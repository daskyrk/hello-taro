import { View, EventProps } from "@tarojs/components";
import React from "react";
import './slide.scss';

type Direction = 'up' | 'down'
interface IProps {
  className: string,
  height?: number,
  children: React.ReactElement[]
  onSlide?(direction: Direction): void
}
let last = 0;
export default ({ height, className, children, onSlide }: IProps) => {

  const handelTouchMove: EventProps['onTouchMove'] = e => {
    let direction: Direction;
    if (last === 0) {
      last = e.touches[0].clientY
    } else {
      direction = last > e.touches[0].clientY ? 'up' : 'down';
      last = 0
      onSlide && onSlide(direction);
    }
  }

  return (
    <View className='bottom-slide' style={height !== undefined ? { height } : {}} onTouchMove={onSlide ? handelTouchMove : undefined}>
      <View className='bottom-slide-line'></View>
      <View className={`bottom-slide-content ${className || ''}`}>
        {children}
      </View>
    </View >
  )
}
