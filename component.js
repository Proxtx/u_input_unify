export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.initPromise = this.init();
  }

  async init() {
    this.action = this.document.getElementById("action");
    await uiBuilder.ready(this.action);
    await this.action.component.init();
    this.action.component.box.style.margin = "0";
    this.action.component.box.style.borderRadius = "var(--borderRadius)";
    this.action.component.box.style.border = getComputedStyle(
      this.action.component.box
    ).borderRight;
  }

  setConfig(config) {
    this.config = config;
  }

  async getValue() {
    if (this.config.evaluate)
      return {
        action: await this.action.component.exportAction(),
        evaluate: true,
      };
    return await this.action.component.exportAction();
  }

  async setValue(value) {
    await this.initPromise;
    if (value.action) this.action.component.importAction(value.action);
    else this.action.component.importAction(value);
  }
}
