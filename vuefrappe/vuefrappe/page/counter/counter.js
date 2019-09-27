frappe.pages['counter'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Counter',
		single_column: true
	});
	// page.main.html(frappe.render_template("patient_history", {}));
	page.main.html('<div id="vue-container"> </div>');

	this.page.$export_tool = new frappe.vuefrappe.Counter(this.page);

}
