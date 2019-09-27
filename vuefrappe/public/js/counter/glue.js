import ToolRoot from './components/ToolRoot.vue';

frappe.provide('frappe.vuefrappe');   // create a namespace within the Frappe instance

frappe.vuefrappe.Counter = class {   // create a glue class, wich will manage your Vue instance
        constructor({ parent }) {
                this.$parent = $(parent);
                this.page = parent.page;
                this.setup_header();
                this.make_body();
        }
        
        make_body() {
                this.$vueContainer = this.$parent.find('#vue-container');   // bind the new Vue instance to the main <div> on the page
                this.vue = new Vue({
                        el: this.$vueContainer[0],
                        data: {
                        },
                        render: h => h(ToolRoot),
                });
        }
        setup_header() {
        }
};