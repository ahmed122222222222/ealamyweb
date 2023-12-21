let xh=new XMLHttpRequest();
let c=document.querySelector(".diVcon");
let vv=document.querySelector(".num");
let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let s;
let m=0;

//[]
//{}

xh.open("get","https://alquranbd.com/api/hadith/bukhari/1");
xh.responseType="json";
xh.send();
console.log(typeof xh);
xh.onload=function(){
let f=[];
s=xh.response;
console.log(xh.response);
console.log(s.length
    )
    c.innerHTML=s[0].hadithArabic
    vv.innerHTML=`5/${s.length}`
    b1.addEventListener("click",function(e) {
        if(m>=0&&m<s.length)
        { c.innerHTML=s[m].hadithArabic;
            vv.innerHTML=` ${m+1}\/${s.length}
    `
m++;} 
    })

    b2.addEventListener("click",function(e) 
    {
        c.innerHTML=s[1-1].hadithArabic;
        
    vv.innerHTML=` ${m}\/${s.length}
    `
    })

    ;

}
