import React from "react";

import Error from "../presentation/components/common/error/Error";

export default {
  component: Error,
  title: "Common/Error",
};

const Template = (args) => <Error {...args} />;

export const ErrorStory = Template.bind({});

ErrorStory.args = {
  message: "Error",
};
