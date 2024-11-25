import { Component, Prop, h } from '@stencil/core';
import { format } from '../utils/utils';

@Component({
  tag: 'my-simple-shadow',
  styles: `:host { display: block; }`,
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>
      Hello, World! I'm {this.getText()}. Here's some slotted content:
      <slot />
    </div>;
  }
}
