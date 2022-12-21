function till_selection() {
    var till_options = document.getElementById("till_list");
    document.getElementById("selected").value = till_list.options[till_list.selectedIndex].text;
}
