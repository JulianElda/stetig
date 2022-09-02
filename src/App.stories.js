import App from "./App.vue";

export default {
  title: "App",
  component: App,
};

const Template = (args) => ({
  components: { AppComponent: App },
  setup() {
    return { args };
  },
  template: '<AppComponent v-bind="args" />',
});

export const Stetig = Template.bind({});
