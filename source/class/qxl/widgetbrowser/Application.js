/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)

************************************************************************ */

/*
 * Main Application.
 * @asset(qx/icon/*)
 * @usefont(MaterialIcons)
 */
qx.Class.define("qxl.widgetbrowser.Application", {
  extend: qx.application.Standalone,

  construct() {
    super();
  },

  members: {
    __header: null,

    __tabs: null,

    __scroll: null,

    main() {
      super.main();

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug")) {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      var doc = this.getRoot();
      var dockLayout = new qx.ui.layout.Dock();
      var dockLayoutComposite = new qx.ui.container.Composite(dockLayout);
      doc.add(dockLayoutComposite, { edge: 0 });

      this.__header = this._createHeader();
      dockLayoutComposite.add(this.__header, { edge: "north" });

      var scroll = (this.__scroll = new qx.ui.container.Scroll());
      dockLayoutComposite.add(scroll);

      this.__tabs = this._createTabView();
      this.__tabs.set({
        minWidth: 700
      });

      scroll.add(this.__tabs);
    },

    _createTabView() {
      return new qxl.widgetbrowser.view.TabView();
    },

    _createHeader() {
      return new qxl.widgetbrowser.view.Header();
    },

    getScroll() {
      return this.__scroll;
    }
  }
});
