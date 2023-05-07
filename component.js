export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.initPromise = this.init();
  }

  async init() {
    this.action = this.document.getElementById("action");
    await uiBuilder.ready(this.action);
    this.action.component.init();
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
    return {
      action: await this.action.component.exportAction(),
      evaluate: true,
      pwd: this.config.pwd,
    };
  }

  async setValue(value) {
    await this.initPromise;
    this.action.component.importAction(value.action);
  }
}
