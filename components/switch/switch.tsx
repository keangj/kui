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
interface ISwitchBackgroundColor {
  active: string
  inactive: string
}
const switchProps = {
  modelValue: Boolean,
  disabled: Boolean,
  size: String as ISwitchSize,
  backgroundColor: Object as PropType<ISwitchBackgroundColor>
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>

const Switch = defineComponent({
  name: 'KSwitch',
  props: switchProps,
  emits: ['update:modelValue'],
  setup (props: SwitchProps, { emit }) {
    const switchButton = ref<HTMLButtonElement | null>(null)
    const toggle = () => {
      emit('update:modelValue', !props.modelValue)
    }
    const classes = computed(() => {
      return [
        'kui-switch',
        props.modelValue && 'checked',
        props.size && `kui-switch--${props.size}`
      ]
    })
    const setBackgroundColor = () => {
      const switchElement = switchButton.value
      if (props.backgroundColor && switchElement) {
        switchElement.style.backgroundColor = props.modelValue
          ? props.backgroundColor.active
          : props.backgroundColor.inactive
      }
    }

    const { modelValue } = toRefs(props)
    watch(modelValue, () => {
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
