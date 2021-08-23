import { defineComponent } from 'vue'
import Button from './button'
import './button-group.scss'

const ButtonGroup = defineComponent({
  name: 'KButtonGroup',
  setup () {
    return {}
  },
  render () {
    const { $slots } = this
    $slots.default?.().forEach((children) => {
      if (children.type !== Button) {
        console.warn('the child component must be a K-Button component')
      }
    })
    return <div class={['kui-button-group']}>{$slots.default?.()}</div>
  }
})

export default ButtonGroup
