import Navigation from '@/components/Navigation.vue';
import { shallowMount } from '@vue/test-utils';

describe("Navigation.vue", () => {
  it("Navigation mounted", () => {
    const wrapper = shallowMount(Navigation, {
      stubs: [
        "v-navigation-drawer",
        "v-toolbar",
        "v-list",
        "v-list-tile",
        "v-list-tile-title",
        "v-divider",
        "v-list-tile-content",
        "v-icon",
        "v-list-tile-action"
      ]
    });
    expect(wrapper).toBeTruthy();
  });
  it('Показывает пункт меню Новости', () => {
    const wrapper = shallowMount(Navigation, {
      stubs: [
        "v-navigation-drawer",
        "v-toolbar",
        "v-list",
        "v-list-tile",
        "v-list-tile-title",
        "v-divider",
        "v-list-tile-content",
        "v-icon",
        "v-list-tile-action"
      ]
    });
    expect(wrapper.html()).toContain('Новости')
  })
});
