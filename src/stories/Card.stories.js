import React from "react";

import Card from "../presentation/components/ui/card/Card";

export default {
  component: Card,
  title: "UI/Card",
};

const Template = (args) => <Card {...args} />;

export const CardStory = Template.bind({});

CardStory.args = {
  image:
    "https://cdn.britannica.com/48/201348-050-525ECEBB/Norah-Jones-2012.jpg",
  title: "Fazla Gıda Case",
  label: "Fazla Gıda",
  count: 1213,
  listeners: 1232,
};
