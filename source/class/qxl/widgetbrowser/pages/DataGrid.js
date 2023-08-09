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
    initWidgets() {
      const widgets = this._widgets;
      const tabs = new qxl.datagrid.demo.Demo();
      widgets.push(tabs);
      this.add(tabs);
    },
  },
});
