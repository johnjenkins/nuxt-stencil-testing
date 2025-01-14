import { Component, Event, Prop, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-input',
  shadow: true,
  styles: `:host { display: block; }`,
})
export class MyComponent {
  @Event({ eventName: 'my-did-change' }) myDidChange: EventEmitter<string>;

  @Prop({ mutable: true }) customValue = '';

  handleChange(e: InputEvent) {
    this.customValue = e.data;
    this.myDidChange.emit(this.customValue);
  }

  render() {
    return (
      <div>
        <label>
          Type things:
          <input onInput={e => this.handleChange(e)} />
        </label>
      </div>
    );
  }
}
