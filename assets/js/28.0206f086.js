(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{365:function(e,t,i){"use strict";i.r(t);var a=i(32),o=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"stand-alone-version-of-imunifyav"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#stand-alone-version-of-imunifyav","aria-hidden":"true"}},[e._v("#")]),e._v(" Stand-alone version of ImunifyAV+")]),e._v(" "),i("p",[e._v("Below you can find the steps to install and run ImunifyAV, in stand-alone mode, or within any hosting panel.")]),e._v(" "),i("p",[i("strong",[e._v("Operating system")])]),e._v(" "),i("ul",[i("li",[e._v("CentOS 6/7/8")]),e._v(" "),i("li",[e._v("RHEL 6/7")]),e._v(" "),i("li",[e._v("CloudLinux OS")])]),e._v(" "),i("p",[e._v("There are some basic steps to run ImunifyAV as a stand-alone application:")]),e._v(" "),i("ol",[i("li",[e._v("Define a way to serve web-based UI")]),e._v(" "),i("li",[e._v("Provide ImunifyAV with an actual list of users in the system")]),e._v(" "),i("li",[e._v("Configure a user authentication process")])]),e._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Warning")]),i("p",[e._v("Imunify Web-UI PHP code has to be executed under a non-root user which has access to "),i("code",[e._v("/var/run/defence360agent/non_root_simple_rpc.sock")]),e._v(". If it runs in CageFS, you'll need to configure it accordingly.")])]),i("h4",{attrs:{id:"how-to-configure-imunifyav-ui"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-imunifyav-ui","aria-hidden":"true"}},[e._v("#")]),e._v(" How to configure ImunifyAV UI")]),e._v(" "),i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),i("p",[e._v("Imunify UI requires the "),i("code",[e._v("proc_open")]),e._v(" PHP function to be enabled. If you are unable to log in, you might see a related message in the "),i("code",[e._v("errror.log")]),e._v(" of the web-server.\nIf so, please remove it from the "),i("code",[e._v("disable_functions")]),e._v(" list in "),i("code",[e._v("php.ini")]),e._v(".")])]),i("p",[e._v("Create the file "),i("code",[e._v("/etc/sysconfig/imunify360/integration.conf")]),e._v(" with the "),i("code",[e._v("ui_path")]),e._v(" option defining the path that will serve web-based UI.")]),e._v(" "),i("p",[e._v("For example:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("[paths]\nui_path = /var/www/vhosts/imav/imav.example-hosting.com/html/imav\n")])])]),i("p",[e._v("ImunifyAV will automatically copy UI files there during installation/upgrade.")]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),i("p",[e._v("Ensure that the domain you are going to use for the ImunifyAV web-based UI refers to this path, and that there are no other scripts or files under "),i("code",[e._v("ui_path")]),e._v(", as they might be overridden by the ImunifyAV installation.")])]),i("div",{staticClass:"danger custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Warning")]),i("p",[e._v("The issue fix related to incorrect "),i("code",[e._v("integration.conf")]),e._v(" file parsing is coming. It will be available to all customers within the next 2 weeks.\nUntil that, it is required to list the UI path settings in both lower and upper case, for example:")]),e._v(" "),i("p",[i("code",[e._v("/etc/sysconfig/imunify360/integration.conf")])]),e._v(" "),i("p",[e._v("[PATHS]"),i("br"),e._v("\nUI_PATH = /srv/www/example.com/public/ImunifyAV")]),e._v(" "),i("p",[e._v("[paths]"),i("br"),e._v("\nui_path = /srv/www/example.com/public/ImunifyAV")])]),i("h4",{attrs:{id:"how-to-provide-imunifyav-with-an-actual-list-of-users-optional"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-provide-imunifyav-with-an-actual-list-of-users-optional","aria-hidden":"true"}},[e._v("#")]),e._v(" How to provide ImunifyAV with an actual list of users (optional)")]),e._v(" "),i("p",[e._v("By default, ImunifyAV will use Linux system users, limited by "),i("code",[e._v("uid_min")]),e._v(" and "),i("code",[e._v("uid_max")]),e._v(" from "),i("code",[e._v("/etc/login.defs")]),e._v(".")]),e._v(" "),i("p",[e._v("If you want to see a specific list of users (note, that all of them must be real linux users accessible via PAM), you can specify the "),i("code",[e._v("user_list_script")]),e._v(" option in "),i("code",[e._v("/etc/sysconfig/imunify360/integration.conf")]),e._v(":")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("[paths]\nui_path = …\nuser_list_script = /path/to/get-users-script.sh\n")])])]),i("p",[e._v("It should point to an executable file that generates a json file with the following schema (domains are optional):")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('{"version": 1, "users": [{"name": "user1", "domains": ["user1.com"]}, {"name": "user2"},..]}\n')])])]),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),i("p",[e._v("Any type of executable file is acceptable. For example, you can use a Python or PHP script.")])]),i("h4",{attrs:{id:"how-to-configure-authentication-for-imunifyav-optional"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-authentication-for-imunifyav-optional","aria-hidden":"true"}},[e._v("#")]),e._v(" How to configure authentication for ImunifyAV (optional)")]),e._v(" "),i("p",[e._v("ImunifyAV can use PAM to authenticate users.")]),e._v(" "),i("p",[e._v("Once the UI is opened, the user sees a sign-in form. The credentials are checked via PAM.")]),e._v(" "),i("p",[e._v("You can specify which PAM service ImunifyAV should use with the "),i("code",[e._v("service_name")]),e._v(" option:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("[pam]\nservice_name = system-auth\n")])])]),i("p",[e._v("If it is not specified, the “"),i("code",[e._v("system-auth")]),e._v("” service is used.")]),e._v(" "),i("p",[e._v("By default, “"),i("code",[e._v("root")]),e._v("” is considered to be the only “admin” user.")]),e._v(" "),i("p",[e._v("To add more administrators, list them in the "),i("code",[e._v("/etc/sysconfig/imunify360/auth.admin")]),e._v(" file.")]),e._v(" "),i("h4",{attrs:{id:"how-to-install-imunifyav"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-imunifyav","aria-hidden":"true"}},[e._v("#")]),e._v(" How to install ImunifyAV")]),e._v(" "),i("p",[e._v("Now everything is ready to install ImunifyAV.")]),e._v(" "),i("p",[e._v("The installation instructions are the same as for cPanel/DirectAdmin version, and can be found in the technical documentation: "),i("RouterLink",{attrs:{to:"/imunifyav/#installation-instructions"}},[e._v("https://docs.imunifyav.com/imunifyav/#installation-instructions")]),e._v(".")],1),e._v(" "),i("h4",{attrs:{id:"how-to-open-imunifyav-ui"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-open-imunifyav-ui","aria-hidden":"true"}},[e._v("#")]),e._v(" How to open ImunifyAV UI")]),e._v(" "),i("p",[e._v("Once ImunifyAV is installed, the web-based UI is available via the domain configured in "),i("code",[e._v("ui_path")]),e._v(".")]),e._v(" "),i("p",[e._v("For example:")]),e._v(" "),i("p",[e._v("if "),i("code",[e._v("/var/www/vhosts/imav/imav.example-hosting.com/html/imav")]),e._v(" is the document root folder for imav.example-hosting.com domain, then you could open ImunifyAV with the following URL:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("https://imav.example-hosting.com/")]),e._v(" (when you have TLS certificate configured for the domain)\nor")]),e._v(" "),i("li",[i("code",[e._v("http://imav.example-hosting.com/")])])]),e._v(" "),i("Disqus")],1)},[],!1,null,null,null);t.default=o.exports}}]);