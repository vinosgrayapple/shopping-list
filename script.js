/*jshint esversion: 6 */

var data = {
  items: [
    { text: "Bananas", checked: false },
    { text: "Apples", checked: false },
    { text: "Kiwi", checked: false },
    { text: "Pineapple", checked: true }
  ],
  title: "Список Сотрудников AW",
  newItem: ""
};

/* 
Declaring Components 
*/
var ItemsComponent = Vue.extend({
    data: function () {
        return data;
    },
    template: `
        <ul>
            <li v-for="item in items"
                :class="{'removed': item.checked}">
            <div class="checkbox">
                <label>
                    <input type="checkbox" v-model="item.checked">
                    {{item.text}}
                </label>
            </div>
            </li>
        </ul>
    `
});
var ChangeTitleComponent = Vue.extend({
  data: function() {
    return data;
  },
  template: `<input v-model="title">`
});
var AddItemComponent = Vue.extend({
  data: function() {
    return data;
  },
  methods: {
    addItem: function() {
      var text;
      text = this.newItem.trim();
      if (text) {
        this.items.push({
          text: text,
          checked: false
        });
        this.newItem = '';
      }
    }
  },
  template: `
         <div class="input-group">
            <input @keyup.enter="addItem" placeholder="add shopping list item" type="text" class="js-new-item form-control">
            <span class="input-group-btn">
                <button @click="addItem" class="js-add btn btn-default" type="button">Add!</button>
            </span>
        </div>
    `
});
/* 
Registering component
 */
Vue.component('items-component', ItemsComponent);
Vue.component('change-title-comonent', ChangeTitleComponent);
Vue.component('add-item-component', AddItemComponent);
/* 
Instanting a Vue instanse
 */
new Vue({
    el: '#app',
    data: data
});