import React from "react";

import ListView from "../presentation/components/ui/list-view/ListView";

export default {
  component: ListView,
  title: "UI/List",
};

const Template = (args) => <ListView {...args} />;

export const ListStory = Template.bind({});

ListStory.args = {
  image:
    "https://cdn.britannica.com/48/201348-050-525ECEBB/Norah-Jones-2012.jpg",
  title: "Fazla Gıda Case",
  label: "Fazla Gıda",
  count: 1213,
  listeners: 1232,
};
