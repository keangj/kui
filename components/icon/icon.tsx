import { computed, defineComponent, ExtractPropTypes } from 'vue'
import './icon.scss'

const iconProps = {
  size: [String, Number],
  name: String,
  fill: String
}

export type IconProps = ExtractPropTypes<typeof iconProps>

const Icon = defineComponent({
  name: 'KIcon',
  props: iconProps,
  setup (props) {
    const classes = computed(() => {
      return ['icon']
    })
    const styles = computed(() => {
      return {
        'font-size': `${props.size}px`,
        fill: props.fill
      }
    })
    return { classes, styles }
  },
  render () {
    const { classes, name, styles } = this
    return (
      <svg class={classes} aria-hidden="true" style={styles}>
        <use xlink:href={`#${name}`} />
      </svg>
    )
  }
})

export default Icon
