(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),l=n.n(r),c=n(5),i=n(7),u=n(6),s=n(1),m=n(2),d=n(4),f=n(3),h=(n(16),function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),b=(n(17),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={term:""},a._onSearchChange=function(t){var n=t.target.value;a.setState({term:n}),e.onSearchChange(n)},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.term;return o.a.createElement("input",{className:"form-control search-input",placeholder:"type to search",onChange:this._onSearchChange,value:e})}}]),n}(a.Component)),g=(n(18),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).buttons=[{name:"all",label:"Al"},{name:"active",label:"Active"},{name:"done",label:"Done"}],a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.selectedFilter,n=e.onFilterChange,a=this.buttons.map((function(e){var a=e.name,r=e.label,l=t===a;return o.a.createElement("button",{type:"button",className:"btn ".concat(l?"btn-info":"btn-outline-secondary"),onClick:function(){return n(a)},key:a},r)}));return o.a.createElement("div",{className:"btn-group"},a)}}]),n}(a.Component)),p=n(10),v=(n(19),function(e){var t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,l=e.done,c=e.important;return o.a.createElement("span",{className:"todo-list-item ".concat(l?"done":""," ").concat(c?"important":"")},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}),E=(n(20),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,l=t.map((function(e){var t=e.id,l=Object(p.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(v,Object.assign({},l,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},l)}),C=(n(21),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={label:""},a.onLabelChange=function(e){a.setState({label:e.target.value})},a.onSubmit=function(t){t.preventDefault(),e.onItemAdded(a.state.label),a.setState({label:""})},a}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form d-flex",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),o.a.createElement("button",{className:"btn btn-outline-secondary"},"Add\xa0Item"))}}]),n}(a.Component)),D=(n(22),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).maxId=100,a.state={todoData:[a._createTodoItem("Drink Coffee"),a._createTodoItem("Make Awesome App"),a._createTodoItem("Have a lunch")],term:"",selectedFilter:"all"},a.deleteItem=function(e){a.setState((function(t){return{todoData:t.todoData.filter((function(t){return t.id!==e}))}}))},a.addItem=function(e){a.setState((function(t){var n=t.todoData;return{todoData:[].concat(Object(u.a)(n),[a._createTodoItem(e)])}}))},a.onToggleImportant=function(e){a.setState((function(t){var n=t.todoData;return{todoData:a._toggleProperty(n,e,"important")}}))},a.onToggleDone=function(e){a.setState((function(t){var n=t.todoData;return{todoData:a._toggleProperty(n,e,"done")}}))},a.onSearchChange=function(e){a.setState({term:e})},a.onFilterChange=function(e){a.setState({selectedFilter:e})},a}return Object(m.a)(n,[{key:"_createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"_toggleProperty",value:function(e,t,n){var a=e.findIndex((function(e){return e.id===t})),o=e[a],r=Object(i.a)(Object(i.a)({},o),{},Object(c.a)({},n,!o[n]));return[].concat(Object(u.a)(e.slice(0,a)),[r],Object(u.a)(e.slice(a+1)))}},{key:"_search",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1}))}},{key:"_filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:throw new Error("Unhandled filter type ".concat(t))}}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.selectedFilter,r=t.filter((function(e){return e.done})).length,l=t.length-r,c=this._filter(this._search(t,n),a);return o.a.createElement("div",{className:"todo-app"},o.a.createElement(h,{toDo:l,done:r}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(b,{onSearchChange:this.onSearchChange}),o.a.createElement(g,{onFilterChange:this.onFilterChange,selectedFilter:a})),o.a.createElement(E,{todos:c,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(C,{onItemAdded:this.addItem}))}}]),n}(a.Component));l.a.render(o.a.createElement(D,null),document.querySelector("#root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.62a50ab8.chunk.js.map