var txtv = document.getElementById("view");

const view = (n) => {
    txtv.value = txtv.value + n;
};

const clean = () => {
    txtv.value = '';
}

const callc = () => {
    txtv.value = eval(txtv.value)
}

const back = () => {
    var txtM = txtv.value;
    txtv.value = txtM.substring(0, txtM.length-1);
}