import AppComponent from "./AppComponent.vue";
import { temperatures } from "@/utils/consts";

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

export const AppCold = Template.bind({});
AppCold.args = {
  temperature: temperatures.COLD,
};

export const AppCooler = Template.bind({});
AppCooler.args = {
  temperature: temperatures.COOLER,
};

export const AppCool = Template.bind({});
AppCool.args = {
  temperature: temperatures.COOL,
};

export const AppWarm = Template.bind({});
AppWarm.args = {
  temperature: temperatures.WARM,
};

export const AppHot = Template.bind({});
AppHot.args = {
  temperature: temperatures.HOT,
};
