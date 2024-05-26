// eslint-disable-next-line import/no-cycle
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import SkipToMain from '../utils/skip-initiator';

class App {
  constructor({
    button, drawer, content, body, header, skipMain, main,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._body = body;
    this._header = header;
    this._skipMain = skipMain;
    this._main = main;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      body: this._body,
      header: this._header,
    });
    SkipToMain.skip({
      skipMain: this._skipMain,
      main: this._main,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
