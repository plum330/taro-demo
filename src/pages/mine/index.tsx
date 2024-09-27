import { Image, View } from "@tarojs/components"
import avatar from '@/images/avatar.png'
import '@/pages/post/index.scss'

const Mine = () => {
  return (
    <View className='mine'>
      <>
        <Image src={avatar} className='mine-avatar' />
        <View className='mine-nickname'>图签</View>
        <View className='mine-username'>TT</View>
      </>
      <View className='mine-footer'>From图签社区</View>
    </View>
  )
};

export default Mine;
