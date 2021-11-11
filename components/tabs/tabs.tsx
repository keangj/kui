import {
  defineComponent,
  ExtractPropTypes,
  getCurrentInstance,
  onMounted,
  PropType,
  provide,
  ref
} from 'vue'
import type { Pane } from './tab-pane'
import KTab from './tab'
import './tabs.scss'

type TabsSize = PropType<'large' | 'medium' | 'small' | 'mini'>

export type UpdatePaneStateCallback = (pane: Pane) => void

const tabsProps = {
  modelValue: [String, Number] as PropType<string | number>,
  defaultValue: [String, Number] as PropType<string | number>,
  type: {
    type: String as PropType<'bar' | 'line' | 'card'>,
    default: 'bar'
  },
  size: String as TabsSize
}

export type TabsProps = ExtractPropTypes<typeof tabsProps>

const Tabs = defineComponent({
  name: 'KTabs',
  props: tabsProps,
  emits: ['update:modelValue'],
  components: { KTab },
  setup (props, { slots, emit }) {
    const tabNav = ref<HTMLDivElement | null>(null)
    const paneStatesMap: { [key: string]: Pane } = {}
    provide<UpdatePaneStateCallback>('updatePanes', (pane: Pane) => {
      pane.uid && (paneStatesMap[pane.uid] = pane)
    })
    const handleClick = (pane: Pane, tabName: string, event: MouseEvent) => {
      console.log(pane)
      emit('update:modelValue', tabName)
      getNavBarStyle()
    }

    const getNavBarStyle = () => {
      console.log(tabNav.value?.children)
      console.log(tabNav)
      // console.log(tabNav.value?.style)
      // console.log(tabNav.value?.getBoundingClientRect())
    }
    onMounted(() => {
      console.log(getCurrentInstance())
      console.log(paneStatesMap)
    })
    return { handleClick, tabNav }
  },
  render () {
    const { $slots, modelValue, handleClick } = this
    return (
      <div class="kui-tabs">
        <div ref="tabNav" class="kui-tabs__nav">
          {$slots.default?.().map((pane) => (
            <KTab tab={pane} handleClick={handleClick} />
          ))}
          <div ref="activeBar" class="kui-tabs__nav__active-bar" />
        </div>
        <div class="kui-tabs__content">
          {$slots.default?.().find((pane) => pane.props?.name === modelValue)}
        </div>
      </div>
    )
  }
})

export default Tabs
