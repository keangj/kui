import {
  ComponentInternalInstance,
  computed,
  defineComponent,
  ExtractPropTypes,
  getCurrentInstance,
  inject
} from 'vue'
import { UpdatePaneStateCallback } from './tabs'

export const tabPaneProps = {
  title: {
    type: String,
    require: true
  },
  name: String
}

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>

export interface Pane {
  uid: number | undefined
  props: TabPaneProps
  instance: ComponentInternalInstance | null
}

const TabPane = defineComponent({
  name: 'KTabPane',
  emits: [],
  props: tabPaneProps,
  setup (props: TabPaneProps, { emit }) {
    const updatePanes = inject<UpdatePaneStateCallback>('updatePanes')
    const instance = getCurrentInstance()
    console.log(instance)
    updatePanes?.({
      uid: instance?.uid,
      props,
      instance
    })

    const classes = computed(() => {
      return [
        'kui-tab-pane'
        // `kui-tab-pane--${props.type}`,
        // props.size && `kui-tab-pane--${props.size}`
      ]
    })
    return { classes }
  },
  render () {
    const { $slots } = this
    return <div>{$slots.default?.()}</div>
  }
})

export default TabPane
