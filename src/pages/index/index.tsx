import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import '@/pages/index/index.scss'
import PostCard from '@/components/PostCard'
import { useState } from 'react'
import PostForm from '@/components/PostForm'
import { AtFab, AtFloatLayout, AtMessage } from 'taro-ui'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

    // 发的帖子记录下来
    const [posts, setPosts] = useState([
      {
        title: 'sichuan',
        content: '成都',
      },
    ]
  );

  const [formTitle, setFormTitle] = useState('')
  const [formContent, setFormContent] = useState('')
  // 记录浮动弹层是否打开
  const [isOpened, setIsOpened] = useState(false)

  const handleSubmit = (e) => {
    setPosts(posts.concat({title: formTitle, content: formContent}))
    // 提交后是否清除之前输入的内容
    setFormTitle("")
    setFormContent("")
  }

  return (
    <View className='index'>
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content} isList />
        ))}
        <AtFloatLayout isOpened={isOpened} title='发表新文章' onClose={() => setIsOpened(false)}>
        <PostForm
          formTitle={formTitle}
          formContent={formContent}
          handleSubmit={(e) => handleSubmit(e)}
          handleTitleInput={(e) => setFormTitle(e.target.value)}
          handleContentInput={(e) => setFormContent(e.target.value)}
        />
        </AtFloatLayout>
        <View className='post-button'>
        <AtFab onClick={() => setIsOpened(true)}>
          <Text className='at-fab__icon at-icon at-icon-edit'></Text>
        </AtFab>
      </View>
    </View>
  )
}
