import {
  computed,
  defineComponent,
  ExtractPropTypes,
  onMounted,
  PropType,
  ref,
  toRefs,
  watch
} from 'vue'
import './switch.scss'

type ISwitchSize = PropType<'large' | 'medium' | 'small' | 'mini'>
// type ISwitchBackgroundColor = { active: string, inactive: string }
interface ISwitchBackgroundColor {
  active: string
  inactive: string
}
const switchProps = {
  value: Boolean,
  disabled: Boolean,
  size: String as ISwitchSize,
  backgroundColor: Object as PropType<ISwitchBackgroundColor>
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>

const Switch = defineComponent({
  name: 'KSwitch',
  props: switchProps,
  setup (props: SwitchProps, { emit }) {
    const switchButton = ref<HTMLButtonElement | null>(null)
    const toggle = () => {
      emit('update:value', !props.value)
    }
    const classes = computed(() => {
      return [
        'kui-switch',
        props.value && 'checked',
        props.size && `kui-switch--${props.size}`
      ]
    })
    const setBackgroundColor = () => {
      const switchElement = switchButton.value
      if (props.backgroundColor && switchElement) {
        switchElement.style.backgroundColor = props.value
          ? props.backgroundColor.active
          : props.backgroundColor.inactive
      }
    }

    const { value } = toRefs(props)
    watch(value, () => {
      if (props.backgroundColor) {
        setBackgroundColor()
      }
    })
    onMounted(() => {
      props.backgroundColor && setBackgroundColor()
    })
    return { toggle, classes, switchButton }
  },
  render () {
    const { classes, toggle, disabled } = this
    return (
      <button
        ref="switchButton"
        class={classes}
        onClick={toggle}
        disabled={disabled}
      >
        <span />
      </button>
    )
  }
})

export default Switch
