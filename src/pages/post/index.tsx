import PostCard from "@/components/PostCard"
import { View } from "@tarojs/components"
import { useRouter } from "@tarojs/taro"
import '@/pages/mine/index.scss'

const Post = () => {
  // 获取调用详情页面时携带的参数
  const router = useRouter()
  const {params} = router
  return (
    <View className='post'>
      <PostCard title={params.title} content={params.content} />
    </View>
  )
};

export default Post;
