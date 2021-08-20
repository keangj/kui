<script lang="tsx">
import { defineComponent } from 'vue'
import Button from '../components/button/button'
import KButtonGroup from '../components/button/button-group'
export default defineComponent({
  name: 'Home',
  components: {
    Button
  },
  setup () {
    const onClick = () => {
      console.log(123)
    }
    return { onClick }
  },
  render () {
    const { onClick } = this
    return (
      <>
        <Button onClick={onClick}>提交</Button>
        <Button disabled>提交</Button>
        <Button type="error" disabled>
          提交
        </Button>
        <Button type="warning" size="large" disabled>
          提交
        </Button>
        <Button type="primary" size="medium">
          提交
        </Button>
        <Button type="info" size="small">
          提交
        </Button>
        <Button type="success" size="mini">
          提交
        </Button>
        <KButtonGroup>
          <div>123</div>
          <Button type="success">提交</Button>
          <Button type="info">提交</Button>
          <Button type="error">提交</Button>
          <Button>提交</Button>
          <Button>提交</Button>
        </KButtonGroup>
      </>
    )
  }
})
</script>
