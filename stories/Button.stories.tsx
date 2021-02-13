import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "../lib/components/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Hello Storybook",
};
