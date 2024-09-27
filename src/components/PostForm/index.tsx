import { Button, Form, Input, Textarea, View } from "@tarojs/components";
import '@/components/PostForm/index.scss'

const PostForm = (props: any) => {
  return (
    <View className='post-form'>
      <View>新添加帖子</View>
      <Form onSubmit={props.handleSubmit} >
        <View>
          <View className='form-hint'>标题</View>
          <Input placeholder='输入标题' className='input-title' type='text' focus value={props.formTitle} onInput={props.handleTitleInput} />
          <View className='form-hit'>正文</View>
          <Textarea className='input-content' placeholder='输入正文' value={props.formContent} onInput={props.handleContentInput} />
          <Button className='form-button' formType='submit' type='primary' >提交</Button>
        </View>
      </Form>
    </View>
  )
}

export default PostForm;
