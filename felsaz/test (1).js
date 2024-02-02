function cut (text) {
    let txt = text
    let befor = ''
    for (i=1; i<=text.length; i++) {
        //console.log(text[text.length-i])
        if (text[text.length-i] == ' ') {
            txt = text.substr((text.length-i), i)
            befor = text.substr(0, (text.length-i))
            break
        }
    }
    console.log(txt)
    console.log(befor)
}


function change (inp, out, txt) {
    //onsole.log(txt.substr(txt.length-inp.length, inp.length))
    if (txt.substr(txt.length-inp.length, inp.length) == inp) {
        text = (txt.substr(0, txt.length - inp.length) + out)
    }
    console.log(text)
}