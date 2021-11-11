import { computed, defineComponent, ExtractPropTypes, PropType } from 'vue'
import './select.scss'

type ISelectType = PropType<
  'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
>
type ISelectSize = PropType<'large' | 'medium' | 'small' | 'mini'>

const selectProps = {
  type: {
    type: String as ISelectType,
    default: 'default'
  },
  loading: Boolean,
  disabled: Boolean,
  size: String as ISelectSize,
  onClick: Function as unknown as () => (event: MouseEvent) => void
}

export type SelectProps = ExtractPropTypes<typeof selectProps>

const Select = defineComponent({
  name: 'KSelect',
  props: selectProps,
  emits: [],
  setup (props, { emit }) {
    const classes = computed(() => {
      return [
        'kui-select',
        `kui-select--${props.type}`,
        props.size && `kui-select--${props.size}`
      ]
    })
    return { classes }
  },
  render () {
    return <div></div>
  }
})

export default Select
