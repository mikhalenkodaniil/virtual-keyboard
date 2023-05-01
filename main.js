const keyboardeng = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 46, 44, 47, 32];
const keyboardrus = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, 32];

// let keyboardrus = [];
// document.onkeypress = function(event){
//     // console.log(event);
//     keyboardrus.push(event.charCode);
//     console.log(keyboardrus);
// }








var as='<form class="str-set"><label>Чтобы изменить язык нажмите:<button id="change-lang">Сменить язык</button><br><p>Желтые клавиши принудительно отключены, т.к. пока что не реализованы.</p></label><input type="text" id="print-text" value="Ваш текст"></form><div class="all-keyboard"><div id="keyboard"></div></div>';
var div = document.createElement("DIV");
div.innerHTML = as;
document.getElementsByTagName('body')[0].appendChild(div);


function initeng(){
    let out = '';
    let outrus = '';
    for (let i = 0; i < keyboardeng.length; i++){
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
            out +='<div class="k-key" data="92" id="l-slash">'+String.fromCharCode(keyboardeng[25])+'</div>';
        }
        if (i==47){
            out +='<div class="k-key" data="spec" id="up"><img src="icons/arrow.svg" alt="" width="50px"></div>';
            out +='<div class="k-key" data="spec" id="r-shift">Shift</div>';
            out +='<div class="clearfix"></div>';
            out +='<div class="k-key" data="spec" id="l-ctrl">Ctrl</div>';
            out +='<div class="k-key" data="spec" id="win">Win</div>';
            out +='<div class="k-key" data="spec" id="l-alt">Alt</div>';
        }
        out +='<div class="k-key" data="'+keyboardeng[i]+'">'+String.fromCharCode(keyboardeng[i])+'</div>';
        if (i==(keyboardeng.length-1)){
            out +='<div class="k-key" data="spec" id="r-alt">Alt</div>';
            out +='<div class="k-key" data="spec" id="r-ctrl">Ctrl</div>';
            out +='<div class="k-key" data="spec" id="left"><img src="icons/arrow.svg" alt="" width="50px"></div>';
            out +='<div class="k-key" data="spec" id="down"><img src="icons/arrow.svg" alt="" width="50px"></div>';
            out +='<div class="k-key" data="spec" id="right"><img src="icons/arrow.svg" alt="" width="50px"></div>';
        }


        if (i==13){
            outrus +='<div class="k-key" data="spec" id="backspace">BackSpace</div>';
        }
        if (i==13){
            outrus +='<div class="clearfix"></div>';
            outrus +='<div class="k-key" data="spec" id="tab">Tab</div>';
        }
        if (i==26){
            outrus +='<div class="k-key" data="spec" id="del">Del</div>';
            outrus +='<div class="clearfix"></div>';
            outrus +='<div class="k-key" data="spec" id="caps-lock">Caps Lock</div>';
        }
        if (i==37){
            outrus +='<div class="k-key" data="spec" id="enter">Enter</div>';
            outrus +='<div class="clearfix"></div>';
            outrus +='<div class="k-key" data="spec" id="l-shift">Shift</div>';
            outrus +='<div class="k-key" data="92" id="l-slash">'+String.fromCharCode(keyboardrus[25])+'</div>';
        }
        if (i==47){
            outrus +='<div class="k-key" data="spec" id="up"><img src="icons/arrow.svg" alt="" width="50px"></div>';
            outrus +='<div class="k-key" data="spec" id="r-shift">Shift</div>';
            outrus +='<div class="clearfix"></div>';
            outrus +='<div class="k-key" data="spec" id="l-ctrl">Ctrl</div>';
            outrus +='<div class="k-key" data="spec" id="win">Win</div>';
            outrus +='<div class="k-key" data="spec" id="l-alt">Alt</div>';
        }
        outrus +='<div class="k-key" data="'+keyboardrus[i]+'">'+String.fromCharCode(keyboardrus[i])+'</div>';
        if (i==(keyboardrus.length-1)){
            outrus +='<div class="k-key" data="spec" id="r-alt">Alt</div>';
            outrus +='<div class="k-key" data="spec" id="r-ctrl">Ctrl</div>';
            outrus +='<div class="k-key" data="spec" id="left"><img src="icons/arrow.svg" alt="" width="50px"></div>';
            outrus +='<div class="k-key" data="spec" id="down"><img src="icons/arrow.svg" alt="" width="50px"></div>';
            outrus +='<div class="k-key" data="spec" id="right"><img src="icons/arrow.svg" alt="" width="50px"></div>';
        }
    }
    if(localStorage.getItem('lang')=='eng'){
        document.querySelector('#keyboard').innerHTML = out;
    };
    if(localStorage.getItem('lang')=='rus'){
        document.querySelector('#keyboard').innerHTML = outrus;
    }
}
initeng();


// function initrus(){
//     let outrus = '';
//     for (let i = 0; i < keyboardrus.length; i++){

//     }
//     document.querySelector('#keyboard').innerHTML = outrus;
// }
// initrus();



let text = [];
document.onkeypress = function(event){
    text += String.fromCharCode(event.charCode);

    document.querySelectorAll('#print-text').forEach(function(element){
        element.value = text;
        element.classList.remove('active');
    });

    // console.log(event.code);
    // console.log(event.keyCode);
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
        // console.log(this.getAttribute('data'));



        if(this.getAttribute('data') != 'spec'){
            text += String.fromCharCode(this.getAttribute('data'));
        }


        document.querySelectorAll('#print-text').forEach(function(element){
            element.value = text;
        });


    }
});

const callback = () => {
    if(localStorage.getItem('lang') == 'eng'){
        localStorage.setItem('lang', 'rus');
    }else     localStorage.setItem('lang', 'eng');
}

const lang_btn = document.querySelector('#change-lang');
lang_btn.addEventListener('click', callback);
