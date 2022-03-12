

document.getElementsByTagName("button")[0].addEventListener("click", function(){
    let number=document.querySelector("#number").value;
    fetch(`https://api-thirukkural.vercel.app/api?num=${number}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        document.querySelector("#secTam").innerText=data.sect_tam+"/"+data.sect_eng;
        document.querySelector("#chapTam").innerText=data.chap_tam+"/"+data.chap_eng;
        document.querySelector("#line1").innerText=data.line1
        document.querySelector("#line2").innerText=data.line2
        document.querySelector("#exp").innerText=data.tam_exp;
        document.getElementById("eng").innerHTML='<b>English Couplet:<br><b>'+data.eng;
        document.getElementById("engExp").innerHTML="<b>Couplet Explanation:<br><b>"+data.eng_exp;
    })
})


