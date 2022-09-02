import TimerHeader from "./TimerHeader.vue";
import { generateStorybookDecorators } from "@/utils/functions";

export default {
  title: "Components/TimerHeader",
  component: TimerHeader,
};

const Template = (args) => ({
  components: { TimerHeader: TimerHeader },
  setup() {
    return { args };
  },
  template: '<TimerHeader v-bind="args" />',
});

export const WorkHeader = Template.bind({});
WorkHeader.args = {
  title: "Work",
};
WorkHeader.decorators = [
  () => ({
    template: generateStorybookDecorators(),
  }),
];

export const BreakHeader = Template.bind({});
BreakHeader.args = {
  title: "Break",
};
BreakHeader.decorators = [
  () => ({
    template: generateStorybookDecorators(),
  }),
];
