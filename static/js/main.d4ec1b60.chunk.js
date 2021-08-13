(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),o=n(9),s=n(1),l=n(3),i=n(4),r=n(6),d=n(5),u=n(2),b=(n(14),n(0)),j=function(e){var t=e.label,n=e.hasClass,a=e.selecteFilter,c="";return n&&(c="selected"),Object(b.jsx)("button",{className:c,onClick:a,children:t})},h=(n(16),function(e){var t=e.filters,n=e.toDo,a=e.selecteFilter,c=e.clearCompleted,o=t.map((function(e){var t=e.label,n=e.hasClass;return Object(b.jsx)("li",{children:Object(b.jsx)(j,{label:t,hasClass:n,selecteFilter:function(e){return a(e.target.textContent)}})},t)}));return Object(b.jsxs)("footer",{className:"footer",children:[Object(b.jsxs)("span",{className:"todo-count",children:[n," items left"]}),Object(b.jsx)("ul",{className:"filters",children:o}),Object(b.jsx)("button",{className:"clear-completed",onClick:c,children:"Clear completed"})]})}),f=(n(17),function(e){var t=e.label,n=e.onDeleted,a=e.onToggleDone,c="";return e.done&&(c+=" completed"),e.hidden&&(c+=" hidden"),Object(b.jsxs)("li",{className:c,children:[Object(b.jsxs)("div",{className:"view",children:[Object(b.jsx)("input",{className:"toggle",type:"checkbox"}),Object(b.jsx)("label",{children:Object(b.jsx)("span",{className:"description",onClick:a,children:t})}),Object(b.jsx)("button",{className:"icon icon-edit"}),Object(b.jsx)("button",{onClick:n,className:"icon icon-destroy"})]}),c.includes("editing")&&Object(b.jsx)("input",{type:"text",className:"edit",value:"Editing task"})]})}),O=(n(18),function(e){var t=e.tasks,n=e.onDeleted,a=e.onToggleDone;return Object(b.jsx)("ul",{className:"todo-list",children:t.map((function(e){var t=e.label,c=e.done,o=e.hidden,s=e.id;return Object(b.jsx)(f,{done:c,label:t,hidden:o,onDeleted:function(){return n(s)},onToggleDone:function(){return a(s)}},s)}))})}),m=(n(19),function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onTaskAdded(e.state.label),e.setState({label:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:"todos"}),Object(b.jsx)("form",{onSubmit:this.onSubmit,children:Object(b.jsx)("input",{type:"text",className:"new-todo",onChange:this.onLabelChange,placeholder:"What needs to be done?",value:this.state.label,autoFocus:!0})})]})}}]),n}(u.Component)),p=(n(20),function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).maxId=1,e.state={todoData:[e.createTask("Completed task"),e.createTask("Editing task"),e.createTask("Active task")],filtersData:[e.createFilter("All",!0),e.createFilter("Active",!1),e.createFilter("Completed",!1)],activeFilter:"All"},e.onSelected=function(t){e.setState((function(e){return{filtersData:e.filtersData.map((function(e){return e.label!==t?Object(s.a)(Object(s.a)({},e),{},{hasClass:!1}):Object(s.a)(Object(s.a)({},e),{},{hasClass:!0})})),activeFilter:t}}))},e.deleteTask=function(t){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return e.id!==t}))}}))},e.addTask=function(t){var n=e.createTask(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(o.a)(t),[n])}}))},e.onToggleDone=function(t){e.setState((function(e){return{todoData:e.todoData.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{done:!e.done}):e}))}}))},e.deleteDoneTasks=function(){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return!e.done}))}}))},e}return Object(i.a)(n,[{key:"createFilter",value:function(e,t){return{label:e,hasClass:t}}},{key:"createTask",value:function(e){return{label:e,done:!1,hidden:!1,id:this.maxId++}}},{key:"checkActiveFilter",value:function(e,t){switch(e){case"Active":return t.done?Object(s.a)(Object(s.a)({},t),{},{hidden:!0}):Object(s.a)(Object(s.a)({},t),{},{hidden:!1});case"Completed":return t.done?Object(s.a)(Object(s.a)({},t),{},{hidden:!1}):Object(s.a)(Object(s.a)({},t),{},{hidden:!0});default:return null}}},{key:"render",value:function(){var e=this,t=this.state,n=t.todoData,a=t.filtersData,c=t.activeFilter,o=n.filter((function(e){return!e.done})).length,s="All"===c?n:n.map((function(t){return e.checkActiveFilter(c,t)}));return Object(b.jsxs)("section",{className:"todoapp",children:[Object(b.jsx)(m,{onTaskAdded:this.addTask}),Object(b.jsxs)("section",{className:"main",children:[Object(b.jsx)(O,{tasks:s,onDeleted:this.deleteTask,onToggleDone:this.onToggleDone}),Object(b.jsx)(h,{filters:a,toDo:o,selecteFilter:this.onSelected,clearCompleted:this.deleteDoneTasks})]})]})}}]),n}(u.Component));c.a.render(Object(b.jsx)(p,{}),document.getElementById("container"))}],[[21,1,2]]]);
//# sourceMappingURL=main.d4ec1b60.chunk.js.map