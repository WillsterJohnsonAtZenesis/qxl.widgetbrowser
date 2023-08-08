/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Will Johnson (willsterjohnson)

************************************************************************ */

/* ************************************************************************


************************************************************************ */

/**
 * Demonstrates qxl.datagrid.DataGrid(...):
 */

qx.Class.define("qxl.widgetbrowser.pages.DataGrid", {
  extend: qxl.widgetbrowser.pages.AbstractPage,

  construct() {
    super();

    this.setLayout(new qx.ui.layout.Grow());

    this.initWidgets();
  },

  members: {
    __hbox: null,

    /**
     * Builds and mounts a simple tab page
     * @param {qx.ui.tabview.TabView} tabs - The tab view to mount to
     * @param {string} title - The tab title
     * @param {qx.core.Object & { init(): unknown }} uiElem - The class instance to be displayed
     * @return {qx.ui.tabview.Page} The created tab page
     */
    _makeMountTab(tabs, title, uiElem) {
      const tabPage = new qx.ui.tabview.Page(title);
      tabs.add(tabPage);
      tabPage.setLayout(new qx.ui.layout.Grow());
      tabPage.add(uiElem);
      uiElem.init();
      return tabPage;
    },

    initWidgets() {
      const widgets = this._widgets;

      const tabs = new qx.ui.tabview.TabView();
      this.add(tabs);

      // tree
      this._makeMountTab(
        tabs,
        "Tree",
        new qxl.datagrid.demo.tree.TreeDemo()
      );

      // bigGrid
      this._makeMountTab(
        tabs,
        "Big Grid",
        new qxl.datagrid.demo.biggrid.BigGridDemo()
      );
    },
  },
});
