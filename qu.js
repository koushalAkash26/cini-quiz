let box =document.querySelectorAll(".color");
let question=document.getElementById("question")
let op1_span=document.getElementById("option1")
let op2_span=document.getElementById("option2")
let op3_span=document.getElementById("option3")
let op4_span=document.getElementById("option4")
let button =document.getElementById("bt")
let questionbox=document.getElementsByClassName("bigbox2")
let qnum=document.getElementById("qnum")
let displayPannel =document.getElementById("displayer")
let mainBox=document.getElementsByClassName("bigbox")
var close = document.getElementsByClassName('close')[0]
var head = document.getElementsByClassName('head')[0]
let clickAudio= document.getElementById("press")
let finalAudio= document.getElementById("celeb")
let count=0;


function resultFun(res,qnum){
    
    if(res===data[qnum].ans){
        swal({
            title: 'Correct',
            icon: 'success',
          }).then(()=>{
              let userChoice="b"+qnum.toString()
            document.getElementById(userChoice).classList.remove('color')
            count=count+1
            if(count===9){
                displayPannel.style.display="block"
                displayPannel.innerHTML="🔥 Beast Mode 🔥"
                questionbox[0].style.display="none"
                mainBox[0].style.display="block"
                head.style.display="block"
                finalAudio.play()
                
            }
            else{
            questionbox[0].style.display="none"
            clickAudio.play()
            mainBox[0].style.display="block"
            head.style.display="block"
            displayPannel.style.display="block"
            }
            

        })
        
      
    }
    else{
        swal({
            title: 'Wrong',
            icon: 'error',
          }).then(()=>{
              
            questionbox[0].style.display="none"
            mainBox[0].style.display="block"
            head.style.display="block"
            displayPannel.style.display="block"
            if(count===9){
        
                displayPannel.innerHTML="🔥 Beast Mode 🔥"
            }

        })

    }
}
function checkResult1(num){
    if(document.getElementById('1').checked) {
        let res=document.getElementById("1").value
        resultFun(res,num)
        //console.log(num)

            
    }
    else if(document.getElementById('2').checked) {
        let res=document.getElementById("2").value 
        resultFun(res,num)
        //console.log(num)


    }
    else if(document.getElementById('3').checked) {
        let res=document.getElementById("3").value 
        resultFun(res,num)
        //console.log(num)

    }
    else if(document.getElementById('4').checked) {
        let res=document.getElementById("4").value 
        resultFun(res,num)
        //console.log(num)

    }
    else{
        console.log("hello")
    }
    
    
}
function display(num){
    //console.log(`dispay inside=>${num}`)
    mainBox[0].style.display="none"

    qnum.innerHTML=`${num}`;
    question.innerHTML=`${data[num].question}` ;
    op1_span.innerHTML=`${data[num].opt1}`;
    op2_span.innerHTML=`${data[num].opt2}`;
    op3_span.innerHTML=`${data[num].opt3}`;
    op4_span.innerHTML=`${data[num].opt4}`;
    try{
        document.getElementById("image").setAttribute("src",`${data[num].url}`)
      }catch{
        document.getElementById("image").setAttribute("src","")
      }
    
    for (var i=0;i<questionbox.length;i+=1){
        questionbox[i].style.display = 'block';
    }
    head.style.display="none"
    displayPannel.style.display="none"
    
    
    
    
    

}

box.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      let quSeq=e.target.id;
      console.log(quSeq[1])
      let num=parseInt(quSeq[1])
      console.log(num)
      display(num)
     
    })
});
button.addEventListener('click',()=>checkResult1(qnum.innerHTML))
close.addEventListener('click',()=>{
    mainBox[0].style.display="block"
    questionbox[0].style.display = 'none';
    head.style.display="block"
    displayPannel.style.display="block"


})









