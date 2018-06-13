require('./config$');

function success() {
require('../..//app');
require('../../scroll-load/scroll-load');
require('../../scroll-load/demo/index');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
