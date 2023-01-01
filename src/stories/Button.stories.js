import React from "react";

import Button from "../presentation/components/ui/button/Button";

export default {
  component: Button,
  title: "UI/Button",
  argTypes: { onClick: { action: "click" } },
};

const Template = (args) => <Button {...args} />;

export const ButtonStory = Template.bind({});

ButtonStory.args = {
  label: "Button",
};
