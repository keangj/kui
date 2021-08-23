<script lang="tsx">
import { defineComponent, ref } from 'vue'
import Button from '../../components/button/button'
import KButtonGroup from '../../components/button/button-group'
import KSwitch from '../../components/switch/switch'
import KIcon from '../../components/icon/icon'
export default defineComponent({
  name: 'Home',
  components: {
    Button
  },
  setup () {
    const switchValue = ref(false)
    const onClick = () => {
      console.log(123)
    }
    return { onClick, switchValue }
  },
  render () {
    const { onClick } = this
    return (
      <>
        <Button loading={true} onClick={onClick}>
          提交
        </Button>
        <Button disabled>提交</Button>
        <Button type="error" disabled>
          提交
        </Button>
        <Button type="warning" size="large" disabled>
          提交
        </Button>
        <Button type="primary" size="medium" disabled>
          提交
        </Button>
        <Button type="info" size="small">
          提交
        </Button>
        <Button type="success" size="mini">
          提交
        </Button>
        <KButtonGroup>
          <Button type="success">提交</Button>
          <Button type="info">提交</Button>
          <Button type="error">提交</Button>
          <Button>提交</Button>
          <Button>提交</Button>
        </KButtonGroup>
        <KSwitch
          v-model={[this.switchValue, 'value']}
          disabled
          background-color={{ active: '#0E918C', inactive: '#FF4848' }}
        />
        <KSwitch v-model={this.switchValue} disabled />
        <KSwitch v-model={this.switchValue} size="large" />
        <KSwitch v-model={this.switchValue} size="medium" />
        <KSwitch v-model={this.switchValue} size="small" />
        <KSwitch v-model={this.switchValue} size="mini" />
        <KIcon name="icon-loading" fill="red" size={16} />
      </>
    )
  }
})
</script>
