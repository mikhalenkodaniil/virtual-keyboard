const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 46, 44, 47, 32];
// let zeyboard = [];
// document.onkeypress = function(event){
//     // console.log(event);
//     zeyboard.push(event.code);
//     console.log(zeyboard);
// }








var as='<form class="str-set"><label>(Чтобы изменить раскладку нажмите:)<br><p>Желтые клавиши принудительно отключены, т.к. пока что не реализованы.</p></label><input type="text" id="print-text" value="Ваш текст"></form><div class="all-keyboard"><div id="keyboard"></div></div>';
var div = document.createElement("DIV");
div.innerHTML = as;
document.getElementsByTagName('body')[0].appendChild(div);


function init(){
    let out = '';
    for (let i = 0; i < keyboard.length; i++){
        if (i==13){
            out +='<div class="k-key" data="spec" id="backspace">BackSpace</div>';
        }
        if (i==13){
            out +='<div class="clearfix"></div>';
            out +='<div class="k-key" data="spec" id="tab">Tab</div>';
        }
        if (i==26){
            out +='<div class="k-key" data="spec" id="del">Del</div>';
            out +='<div class="clearfix"></div>';
            out +='<div class="k-key" data="spec" id="caps-lock">Caps Lock</div>';
        }
        if (i==37){
            out +='<div class="k-key" data="spec" id="enter">Enter</div>';
            out +='<div class="clearfix"></div>';
            out +='<div class="k-key" data="spec" id="l-shift">Shift</div>';
            out +='<div class="k-key" data="92" id="l-slash">'+String.fromCharCode(keyboard[25])+'</div>';
        }
        if (i==47){
            out +='<div class="k-key" data="spec" id="up"><img src="icons/arrow.svg" alt="" width="50px"></div>';
            out +='<div class="k-key" data="spec" id="r-shift">Shift</div>';
            out +='<div class="clearfix"></div>';
            out +='<div class="k-key" data="spec" id="l-ctrl">Ctrl</div>';
            out +='<div class="k-key" data="spec" id="win">Win</div>';
            out +='<div class="k-key" data="spec" id="l-alt">Alt</div>';
        }
        out +='<div class="k-key" data="'+keyboard[i]+'">'+String.fromCharCode(keyboard[i])+'</div>';
        if (i==(keyboard.length-1)){
            out +='<div class="k-key" data="spec" id="r-alt">Alt</div>';
            out +='<div class="k-key" data="spec" id="r-ctrl">Ctrl</div>';
            out +='<div class="k-key" data="spec" id="left"><img src="icons/arrow.svg" alt="" width="50px"></div>';
            out +='<div class="k-key" data="spec" id="down"><img src="icons/arrow.svg" alt="" width="50px"></div>';
            out +='<div class="k-key" data="spec" id="right"><img src="icons/arrow.svg" alt="" width="50px"></div>';
        }
    }
    document.querySelector('#keyboard').innerHTML = out;
}
init();



let text = [];
document.onkeypress = function(event){
    text += String.fromCharCode(event.charCode);

    document.querySelectorAll('#print-text').forEach(function(element){
        element.value = text;
        element.classList.remove('active');
    });

    console.log(event.code);
    console.log(event.keyCode);
    // console.log(evenst);
    document.querySelectorAll('#keyboard .k-key').forEach(function(element){
        element.classList.remove('active');
    });
    document.querySelector('#keyboard .k-key[data="'+event.keyCode+'"]').classList.add('active');
}

document.querySelectorAll('#keyboard .k-key').forEach(function(element){
    element.onclick = function(event){
        document.querySelectorAll('#keyboard .k-key').forEach(function(element){
            element.classList.remove('active');
        });
        this.classList.add('active');
        console.log(this.getAttribute('data'));



        if(this.getAttribute('data') != 'spec'){
            text += String.fromCharCode(this.getAttribute('data'));
        }


        document.querySelectorAll('#print-text').forEach(function(element){
            element.value = text;
        });


    }
});
