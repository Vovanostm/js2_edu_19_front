import HelloWorld from '@/components/HelloWorld.vue';
import { mount } from '@vue/test-utils';

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(
      {
        components: { HelloWorld },
        template: "<div><hello-world :msg='msg'></hello-world></div>",
        props: ["msg"]
      },
      {
        propsData: { msg }
      }
    );
    expect(wrapper).toBeTruthy();
  });
});
