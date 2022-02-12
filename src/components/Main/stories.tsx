import { ComponentMeta, ComponentStory } from '@storybook/react';

import { withKnobs, text } from '@storybook/addon-knobs';

import Main from '.';

const Storie = {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as ComponentMeta<typeof Main>;

export default Storie;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  title: text('Title', 'Advanced React'),
  description: text(
    'Description',
    'Typescript, ReactJs, NextJs and Styled Components',
  ),
};
