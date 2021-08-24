import { defineComponent } from 'vue'
import './button-group.scss'

const ButtonGroup = defineComponent({
  name: 'KButtonGroup',
  setup () {
    return {}
  },
  render () {
    const { $slots } = this
    return <div class={['kui-button-group']}>{$slots.default?.()}</div>
  }
})

export default ButtonGroup
