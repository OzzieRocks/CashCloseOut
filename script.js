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
    
    var Excel = require('exceljs');
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile("test.xlsx")
        .then(function() { 
            var worksheet = workbook.getWorksheet('Sheet1');
        worksheet.getCell('A1').value = register;
        worksheet.getCell('A2').value = month;
        worksheet.getCell('A3').value = day;
        worksheet.getCell('A4').value = year;
        worksheet.getCell('A5').value = name;
        worksheet.getCell('A6').value = starting_cash;
        worksheet.getCell('A7').value = change;
        worksheet.getCell('A8').value = ones;
        worksheet.getCell('A9').value = fives;
        worksheet.getCell('A10').value = tens;
        worksheet.getCell('A11').value = twenties;
        worksheet.getCell('A12').value = fifties;
        worksheet.getCell('A13').value = hundreds;
            return workbook.xlsx.writeFile("test.xlsx");
    });
}
