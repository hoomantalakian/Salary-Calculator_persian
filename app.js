// SEED
// const standradHours = 45;
// const hourlyWage = 100000;
// const overWorkHourlyWage = 120000;
// const workedHours = 41;
// ====== DOM ======

const standradHours = document.querySelector("#standradHours")
const hourlyWage = document.querySelector("#hourlyWage")
const overWorkHourlyWage = document.querySelector("#overWorkHourlyWage")
const workedHours = document.querySelector("#workedHours")

const calculateButton = document.querySelector("#claculateButton")
const claculateReset = document.querySelector("#claculateReset")
const ul = document.querySelector("#listContainer")


//================


// console.log(total);
// ==============================

calculateButton.addEventListener("click", () => {
    if (standradHours.value && hourlyWage.value && overWorkHourlyWage.value && workedHours.value) {
        const overWorkedHours = Number(workedHours.value) - Number(standradHours.value);
        const standardTotalWage = Number(workedHours.value) * Number(hourlyWage.value);
        const overWorkedTotalWage = overWorkedHours * Number(overWorkHourlyWage.value);

        if (workedHours <= standradHours) {
            var total = standardTotalWage;
        } else var total = standardTotalWage + overWorkedTotalWage;
        //==================
        const li = document.createElement("li")
        li.textContent = `جمع حقوق دریافتی شما: ${total} تومان میباشد.`
        ul.appendChild(li)
        calculateButton.disabled = true;
    } else { alert("لطفا تمام فیلد ها را پر کنید !") }
});
// console.log(total)



