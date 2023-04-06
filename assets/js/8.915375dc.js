(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{281:function(e,t,a){"use strict";a.r(t);var s=a(14),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-action"}},[e._v("#")]),e._v(" Create action")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("make:action")]),e._v(" command is a Laravel command that allows you to create a new action class. An action class is used to\ngroup business logic into a single object, making it more organized and reusable.")]),e._v(" "),t("p",[e._v("To create a new action class, simply run the "),t("code",[e._v("php artisan make:action")]),e._v(" command followed by the name of the class you want\nto create. For example, to create an action class called CreateUser, you would run the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan make:action CreateUser\n")])])]),t("p",[e._v("This will create the following files:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("├── app\n│   └── Actions\n│       └── CreateUser\n└── tests\n    └── Feature\n        └── Actions\n            └── CreateUserTest\n")])])]),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),t("p",[e._v("In addition to the class name, you can also specify additional options when creating an action class. Some useful\noptions include:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("--create")]),e._v(": create a create action for a specific model")]),e._v(" "),t("li",[t("strong",[e._v("--update")]),e._v(": create a update action for a specific model")]),e._v(" "),t("li",[t("strong",[e._v("--delete")]),e._v(": create a delete action for a specific model")]),e._v(" "),t("li",[t("strong",[e._v("--crud")]),e._v(": create actions for create, update and delete (all previous options)")]),e._v(" "),t("li",[t("strong",[e._v("--without-tests")]),e._v(": allows create an action without tests")]),e._v(" "),t("li",[t("strong",[e._v("--unit-test")]),e._v(": allows create an action with unit test instead of default feature test")]),e._v(" "),t("li",[t("strong",[e._v("--method")]),e._v(": allows you to specify the main method of the action class instead of default "),t("code",[e._v("execute")])])]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("--create")]),e._v(", "),t("strong",[e._v("--update")]),e._v(" and "),t("strong",[e._v("--delete")]),e._v(" options would be followed with the "),t("strong",[e._v("--model")]),e._v(" option. For example,\nif you're creating an action class to create a user, you should use below command to indicate that the action class is related to the User model.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("php artisan "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--create")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--model")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("User\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);