import { View } from "@tarojs/components"
import '@/components/PostCard/index.scss'
import Taro from "@tarojs/taro";

const PostCard = (props: any) => {
  const handleClick = () => {
    // 是列表的情况
    if (props.isList) {
      const {title, content} = props
      // 设置页面跳转（页面 + 参数）
      Taro.navigateTo({
        url: `/pages/post/index?title=${title}&content=${content}`,
      })
    }
  }
  return (
    <View className='postcard' onClick={handleClick}>
      <View className='post-title'>{props.title}</View>
      <View className='post-content'>{props.content}</View>
    </View>
  )
};

export default PostCard;
