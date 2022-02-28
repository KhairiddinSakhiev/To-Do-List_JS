
function fn1()
{
    var doc = document;
    var str = doc.getElementById("Text1").value;
    var input = doc.createElement("input"),
        button = doc.createElement("button"),
        br = doc.createElement("br"),
        NewDiv = doc.getElementsByClassName("NewDiv");

    input.id = "NewInput";
    button.id = "btn2";
    button.innerText = "x";
    doc.body.append(input);
    doc.body.append(button);
    doc.body.append(br);
    input.value = str;
    button.onclick = function btn(){
        doc.body.removeChild(input);
        doc.body.removeChild(button);
        doc.body.removeChild(br)
    }
    
}
