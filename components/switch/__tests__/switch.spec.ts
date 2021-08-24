import { mount } from '@vue/test-utils'
import KSwitch from '../switch'

describe('button', () => {
  it('exist', () => {
    mount(KSwitch)
  })
  it('checked', async () => {
    const inst = mount(KSwitch, {
      props: {
        modelValue: false
      }
    })
    await inst.find('button').trigger('click')
    expect(inst.emitted()).toHaveProperty('update:modelValue')
    expect(inst.find('button').classes()).not.toContain('checked')
    await inst.setProps({ modelValue: true })
    expect(inst.find('button').classes()).toContain('checked')
  })
  it('disabled', async () => {
    const onClick = jest.fn()
    const inst = mount(KSwitch, {
      props: {
        modelValue: false,
        disabled: true,
        onClick
      }
    })
    await inst.find('button').trigger('click')
    expect(onClick).not.toHaveBeenCalled()
    expect(inst.find('button').attributes().disabled).toBeDefined()
  })

  it('background', async () => {
    const inst = mount(KSwitch, {
      props: {
        modelValue: false,
        backgroundColor: {
          active: 'red',
          inactive: 'blue'
        }
      }
    })
    expect(inst.find('button').attributes('style')).toContain(
      'background-color: blue;'
    )
    await inst.setProps({ modelValue: true })
    expect(inst.find('button').attributes('style')).toContain(
      'background-color: red;'
    )
  })

  it('size', async () => {
    const inst = mount(KSwitch)

    await inst.setProps({ size: 'large' })
    expect(inst.find('button').classes()).toContain('kui-switch--large')

    await inst.setProps({ size: 'medium' })
    expect(inst.find('button').classes()).toContain('kui-switch--medium')

    await inst.setProps({ size: 'small' })
    expect(inst.find('button').classes()).toContain('kui-switch--small')

    await inst.setProps({ size: 'mini' })
    expect(inst.find('button').classes()).toContain('kui-switch--mini')
  })
})
