import { mount } from '@vue/test-utils'
import KButton from '../button'

describe('button', () => {
  it('should ', () => {
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
})
