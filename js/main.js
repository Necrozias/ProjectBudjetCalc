let start = document.getElementById('start'),
    budget_value = document.getElementsByClassName("budget-value"),
    daybudget_value = document.getElementsByClassName("daybudget-value"),
    level_value = document.getElementsByClassName("level-value"),
    expenses_value = document.getElementsByClassName("expenses-value"),
    optionalexpenses_value = document.getElementsByClassName("optionalexpenses-value"),
    income_value = document.getElementsByClassName("income-value"),
    monthsaviungs_value = document.getElementsByClassName("monthsavings-value"),
    yearsavings_value = document.getElementsByClassName("yearsavings-value"),
    expenses_item = document.getElementsByClassName("expenses-item"),
    buttons = document.getElementsByTagName("button"),
    accept1 = buttons[0],
    accept2 = buttons[1],
    count = buttons[2],
    opts = document.querySelectorAll(".optionalexpenses-item"),
    income = document.querySelector(".choose-income"),
    checkbox = document.querySelector("#savings"),
    sum = document.querySelector(".choose-sum"),
    percent = document.querySelector(".choose-percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");