import { defineComponent, PropType, VNode } from 'vue'

const tabProps = {
  tab: Object as PropType<VNode>,
  handleClick: Function
}

const Tab = defineComponent({
  name: 'KTab',
  emits: [],
  props: tabProps,
  setup (props, { emit }) {
    console.log(props.tab)
    return {}
  },
  render () {
    const { tab, handleClick } = this
    return (
      <div
        class="kui-tabs__nav-item"
        onClick={(event: MouseEvent) =>
          handleClick?.(tab, tab?.props?.name, event)
        }
      >
        {tab?.props?.title}
      </div>
    )
  }
})

export default Tab
