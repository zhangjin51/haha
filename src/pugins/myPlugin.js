// import { Button, Message, MessageBox, Input } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const MyPlugin = {}
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

MyPlugin.install = function (Vue) {
    // 1. 添加全局方法或属性
    Vue.IsPC = IsPC()
    Vue.use(ElementUI)

    // 2. 添加全局资源
    // Vue.directive('my-directive', {
    //     bind (el, binding, vnode, oldVnode) {
    //     // 逻辑...
    //     }
    //     ...
    // })

    // 3. 注入组件选项
    // Vue.mixin({
    //     created: function () {
    //     // 逻辑...
    //     }
    //     ...
    // })

    // 4. 添加实例方法
    // Vue.prototype.$message = Message
    // Vue.prototype.$prompt = MessageBox
}
export {MyPlugin};