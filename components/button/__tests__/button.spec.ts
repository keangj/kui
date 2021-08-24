import { mount } from '@vue/test-utils'
import { h } from 'vue'
import KButton from '../button'
import KButtonGroup from '../button-group'

describe('button', () => {
  it('exist', () => {
    mount(KButton)
  })

  it('should work with `type` prop', async () => {
    const inst = mount(KButton)

    await inst.setProps({ type: 'primary' })
    expect(inst.find('button').classes()).toContain('kui-button--primary')

    await inst.setProps({ type: 'info' })
    expect(inst.find('button').classes()).toContain('kui-button--info')

    await inst.setProps({ type: 'success' })
    expect(inst.find('button').classes()).toContain('kui-button--success')

    await inst.setProps({ type: 'warning' })
    expect(inst.find('button').classes()).toContain('kui-button--warning')

    await inst.setProps({ type: 'error' })
    expect(inst.find('button').classes()).toContain('kui-button--error')
  })

  it('size', async () => {
    const inst = mount(KButton)

    await inst.setProps({ size: 'large' })
    expect(inst.find('button').classes()).toContain('kui-button--large')

    await inst.setProps({ size: 'medium' })
    expect(inst.find('button').classes()).toContain('kui-button--medium')

    await inst.setProps({ size: 'small' })
    expect(inst.find('button').classes()).toContain('kui-button--small')

    await inst.setProps({ size: 'mini' })
    expect(inst.find('button').classes()).toContain('kui-button--mini')
  })

  it('handle click', async () => {
    const onClick = jest.fn()
    const inst = mount(KButton, {
      props: {
        onClick
      }
    })
    await inst.find('button').trigger('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('disabled', async () => {
    const onClick = jest.fn()
    const inst = mount(KButton, {
      props: {
        disabled: true,
        onClick
      }
    })
    await inst.find('button').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
    expect(inst.find('button').attributes().disabled).toBeDefined()
  })

  it('loading', async () => {
    const onClick = jest.fn()
    const inst = mount(KButton, {
      props: {
        loading: true,
        onClick
      }
    })
    await inst.find('button').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
    expect(inst.find('button i').classes()).toContain('kui-loadingIndicator')
  })
})

describe('Button Group', () => {
  // const TestComponent = {
  //   template: `<k-button-group>
  //     <div>Prev</div>
  //     <k-button type="primary">Next</k-button>
  //   </k-button-group>`,
  //   components: {
  //     'k-button-group': KButtonGroup,
  //     'k-button': KButton
  //   }
  // }

  it('exist', () => {
    mount(KButtonGroup)
  })

  it('create', () => {
    const inst = mount(KButtonGroup, {
      slots: {
        default: () => [
          h(KButton, null, {
            default: () => 'test1'
          }),
          h(KButton, null, {
            default: () => 'test2'
          }),
          h(KButton, null, {
            default: () => 'test3'
          })
        ]
      }
    })
    expect(inst.classes()).toContain('kui-button-group')
    expect(inst.findAll('button').length).toBe(3)
  })

  // it('create', () => {
  //   const inst = mount(TestComponent)
  //   expect(inst.classes()).toContain('kui-button-group')
  //   expect(inst.toThrow('the child component must be a K-Button component'))
  // })
})
