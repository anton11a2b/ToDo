(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(8),i=n.n(o),c=n(9),l=n(1),s=n(3),r=n(4),d=n(6),u=n(5),f=(n(14),n(0)),b=function(e){var t=e.label,n=e.hasClass,a=e.selecteFilter,o="";return n&&(o="selected"),Object(f.jsx)("button",{type:"button",className:o,onClick:a,children:t})};b.defaultProps={label:"",hasClass:!1,selecteFilter:function(){}};var j=b,h=(n(16),function(e){var t=e.filters,n=e.toDo,a=e.selecteFilter,o=e.clearCompleted,i=t.map((function(e){var t=e.label,n=e.hasClass;return Object(f.jsx)("li",{children:Object(f.jsx)(j,{label:t,hasClass:n,selecteFilter:function(e){return a(e.target.textContent)}})},t)}));return Object(f.jsxs)("footer",{className:"footer",children:[Object(f.jsxs)("span",{className:"todo-count",children:[n," items left"]}),Object(f.jsx)("ul",{className:"filters",children:i}),Object(f.jsx)("button",{type:"button",className:"clear-completed",onClick:o,children:"Clear completed"})]})});h.defaultProps={selecteFilter:function(){},clearCompleted:function(){},filters:[],toDo:0};var m=h,p=n(23),O=(n(17),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).onLabelChange=function(e){a.setState({label:e.target.value})},a.onSubmit=function(e){var t=a.props.onToggleModified;e.preventDefault(),t()};var o=a.props,i=o.date,c=o.label;return a.state={time:Object(p.a)(i,{addSuffix:!0,includeSeconds:!0}),label:c},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){var t=e.props.date;e.setState({time:Object(p.a)(t,{addSuffix:!0,includeSeconds:!0})})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.done,n=e.hidden,a=e.modified,o=e.onDeleted,i=e.onToggleDone,c=e.onToggleModified,l=this.state,s=l.time,r=l.label,d="";return t&&(d+=" completed"),n&&(d+=" hidden"),a&&(d+=" editing"),Object(f.jsxs)("li",{className:d,children:[Object(f.jsxs)("div",{className:"view",children:[Object(f.jsx)("input",{className:"toggle",type:"checkbox",checked:t,onChange:i}),Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:"description",children:r}),Object(f.jsx)("span",{className:"created",children:s})]}),Object(f.jsx)("button",{type:"button",onClick:c,className:"icon icon-edit"}),Object(f.jsx)("button",{type:"button",onClick:o,className:"icon icon-destroy"})]}),d.includes("editing")&&Object(f.jsx)("form",{onSubmit:this.onSubmit,children:Object(f.jsx)("input",{onChange:this.onLabelChange,type:"text",className:"edit",value:r,autoFocus:!0})})]})}}]),n}(a.Component));O.defaultProps={label:"",done:!1,hidden:!1,modified:!1,date:new Date,onDeleted:function(){},onToggleDone:function(){},onToggleModified:function(){}};n(18);var v=function(e){var t=e.tasks,n=e.onDeleted,a=e.onToggleDone,o=e.onToggleModified;return Object(f.jsx)("ul",{className:"todo-list",children:t.map((function(e){var t=e.label,i=e.done,c=e.hidden,l=e.modified,s=e.id,r=e.date;return Object(f.jsx)(O,{date:r,done:i,label:t,hidden:c,modified:l,onDeleted:function(){return n(s)},onToggleDone:function(){return a(s)},onToggleModified:function(){return o(s)}},s)}))})};v.defaultProps={tasks:[],onDeleted:function(){},onToggleDone:function(){},onToggleModified:function(){}};var g=v,D=(n(19),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){var n=e.props.onTaskAdded,a=e.state.label;t.preventDefault(),n(a),e.setState({label:""})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.label;return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:"todos"}),Object(f.jsx)("form",{onSubmit:this.onSubmit,children:Object(f.jsx)("input",{autoFocus:!0,type:"text",className:"new-todo",value:e,onChange:this.onLabelChange,placeholder:"What needs to be done?"})})]})}}]),n}(a.Component));D.defaultProps={onTaskAdded:function(){}};n(20);var k=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).maxId=1,e.state={todoData:[e.createTask("Completed task"),e.createTask("Editing task"),e.createTask("Active task")],filtersData:[e.createFilter("All",!0),e.createFilter("Active",!1),e.createFilter("Completed",!1)],activeFilter:"All"},e.deleteDoneTasks=function(){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return!e.done}))}}))},e.onSelected=function(t){e.setState((function(e){return{filtersData:e.filtersData.map((function(e){return e.label!==t?Object(l.a)(Object(l.a)({},e),{},{hasClass:!1}):Object(l.a)(Object(l.a)({},e),{},{hasClass:!0})})),activeFilter:t}}))},e.deleteTask=function(t){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return e.id!==t}))}}))},e.addTask=function(t){var n=e.createTask(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(c.a)(t),[n])}}))},e.onToggleDone=function(t){e.setState((function(e){return{todoData:e.todoData.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{done:!e.done}):e}))}}))},e.onToggleModified=function(t){e.setState((function(e){return{todoData:e.todoData.map((function(e){return e.id===t?Object(l.a)(Object(l.a)({},e),{},{modified:!e.modified}):e}))}}))},e}return Object(r.a)(n,[{key:"createFilter",value:function(e,t){return{label:e,hasClass:t}}},{key:"createTask",value:function(e){return{label:e,done:!1,hidden:!1,modified:!1,id:this.maxId++,date:new Date}}},{key:"checkActiveFilter",value:function(e,t){switch(e){case"Active":return t.done?Object(l.a)(Object(l.a)({},t),{},{hidden:!0}):Object(l.a)(Object(l.a)({},t),{},{hidden:!1});case"Completed":return t.done?Object(l.a)(Object(l.a)({},t),{},{hidden:!1}):Object(l.a)(Object(l.a)({},t),{},{hidden:!0});default:return null}}},{key:"render",value:function(){var e=this,t=this.state,n=t.todoData,a=t.filtersData,o=t.activeFilter,i=n.filter((function(e){return!e.done})).length,c="All"===o?n:n.map((function(t){return e.checkActiveFilter(o,t)}));return Object(f.jsxs)("section",{className:"todoapp",children:[Object(f.jsx)(D,{onTaskAdded:this.addTask}),Object(f.jsxs)("section",{className:"main",children:[Object(f.jsx)(g,{tasks:c,modified:this.modified,onDeleted:this.deleteTask,onToggleDone:this.onToggleDone,onToggleModified:this.onToggleModified}),Object(f.jsx)(m,{toDo:i,filters:a,selecteFilter:this.onSelected,clearCompleted:this.deleteDoneTasks})]})]})}}]),n}(a.Component);i.a.render(Object(f.jsx)(k,{}),document.getElementById("container"))}],[[21,1,2]]]);
//# sourceMappingURL=main.964e4da6.chunk.js.map