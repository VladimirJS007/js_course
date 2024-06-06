// Подъем к степени реализован через Math.pow - быстрее и компактнее чем делать через for
function powFunction(base, power){
    return Math.pow(base, power)
};

let userBase  = Number(prompt("Введіть основу, будь ласка"));
let userPower = Number(prompt("Введіть степінь, будь ласка"));

alert(`Результать піднесення ${userBase} до степіні ${userPower} дорівнює ${powFunction(userBase, userPower)}`);