import AppComponent from "./AppComponent.vue";

export default {
  title: "App/AppComponent",
  component: AppComponent,
};

const Template = (args) => ({
  components: { AppComponent },
  setup() {
    return { args };
  },
  template: '<AppComponent v-bind="args" />',
});

export const App = Template.bind({});
