import { html } from 'lit';
import '../src/sports-card.js';

export default {
  title: 'SportsCard',
  component: 'sports-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <sports-card
      style="--sports-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </sports-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
