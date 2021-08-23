import { computed, defineComponent, ExtractPropTypes, PropType } from 'vue'
import './button.scss'

type IButtonType = PropType<
  'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
>
type IButtonSize = PropType<'large' | 'medium' | 'small' | 'mini'>

const buttonProps = {
  type: {
    type: String as IButtonType,
    default: 'default'
  },
  loading: Boolean,
  disabled: Boolean,
  size: String as IButtonSize,
  onClick: Function as unknown as () => (event: MouseEvent) => void
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

const Button = defineComponent({
  name: 'KButton',
  props: buttonProps,
  // emits: ['click'],
  setup (props, { emit }) {
    const handleClick = (event: MouseEvent) => {
      emit('click', event)
      // const { onClick } = props
      // onClick?.(event)
    }
    const classes = computed(() => {
      return [
        'kui-button',
        `kui-button--${props.type}`,
        props.size && `kui-button--${props.size}`
      ]
    })
    return { classes, handleClick }
  },
  render () {
    const { $slots, classes, disabled } = this
    return (
      <button class={classes} disabled={disabled} onClick={this.handleClick}>
        {$slots.default?.()}
      </button>
    )
  }
})

export default Button
