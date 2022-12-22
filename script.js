function till_selection() {
    var till_options = document.getElementById("till_list");
    document.getElementById("selected").value = till_options.options[till_options.selectedIndex].text;
}

function month_selection() {
    var month_options = document.getElementById("month_list");
    document.getElementById("selected").value = month_options.options[month_options.selectedIndex].text;
}

function day_selection() {
    var day_options = document.getElementById("day_list");
    document.getElementById("selected").value = day_options.options[day_options.selectedIndex].text;
}

function year_selection() {
    var year_options = document.getElementById("year_list");
    document.getElementById("selected").value = year_options.options[year_options.selectedIndex].text;
}

function submit_form() {
    <!-- Verify Submission -->
    <!-- Get all inputs -->
    var register = documnet.getElementById("till_list");
    var month = documnet.getElementById("month_list");
    var day = documnet.getElementById("day_list");
    var year = documnet.getElementById("year_list");
    var name = documnet.getElementById("name_input");
    var starting_cash;
    var change;
    var ones;
    var fives;
    var tens;
    var twenties;
    var fifties;
    var hundreds;
    
    
}
