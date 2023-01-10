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
    var register = document.getElementById("till_list");
    var month = document.getElementById("month_list");
    var day = document.getElementById("day_list");
    var year = document.getElementById("year_list");
    var name = document.getElementById("name_input");
    var starting_cash = document.getElementById("starting_cash_amount_input");
    var change = document.getElementById("change_input");
    var ones = document.getElementById("number_of_1_input");
    var fives = document.getElementById("number_of_5_input");
    var tens = document.getElementById("number_of_10_input");
    var twenties = document.getElementById("number_of_20_input");
    var fifties = document.getElementById("number_of_50_input");
    var hundreds = document.getElementById("number_of_100_input");
    
    
}
