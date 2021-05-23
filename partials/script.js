function dis(val){
    document.getElementById('display_box').value+=val
}

function solve(){
    let x = document.getElementById("display_box").value
    let y = eval(x)
    document.getElementById("display_box").value = y
}

function clr(){
    document.getElementById('display_box').value =  ""
}