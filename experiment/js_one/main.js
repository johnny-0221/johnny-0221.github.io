education=false
twins=false
edu=true
//教育死刑メーカー
if(education){
    var count=prompt("何セット書く？>>")
    for(let i=0;i<count;i++){
        for(let j=0;j<20;j++){
            document.write("教育");
        }
        for(let j=0;j<10;j++){
            document.write("死刑");
        }
    }
}
//双子東メーカー
if(twins){
    document.write(Yokatozo(prompt("なにさせる？(漢字で)")));
}
function Yokatozo(word){
    return(word+"します！！いや..."+word+"させます!!"+word+"してほしい！！！！");
}

