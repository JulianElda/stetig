import TimerTimeLabel from "./TimerTimeLabel.vue";
import { generateStorybookDecorators } from "@/utils/functions";

export default {
  title: "Components/TimerTimeLabel",
  component: TimerTimeLabel,
};

const Template = (args) => ({
  components: { TimerTimeLabel },
  setup() {
    return { args };
  },
  template: '<TimerTimeLabel v-bind="args" />',
});

export const WorkTime = Template.bind({});
WorkTime.args = {
  timeLeft: 1200000,
};
WorkTime.decorators = [
  () => ({
    template: generateStorybookDecorators(),
  }),
];

export const BreakTime = Template.bind({});
BreakTime.args = {
  timeLeft: 300000,
};
BreakTime.decorators = [
  () => ({
    template: generateStorybookDecorators(),
  }),
];
