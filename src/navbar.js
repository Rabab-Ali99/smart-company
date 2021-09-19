let allAnchorList = document.querySelectorAll('ul li a')
let signin_btn = document.getElementById('signin-btn') 
let anchorTagSignin = document.getElementById('signin-anchor') 
console.log(allAnchorList);

allAnchorList.forEach((anchorTag)=>{
    anchorTag.addEventListener('click',()=>{
        allAnchorList.forEach((otherAnchoerTag)=>{
            if (otherAnchoerTag.classList.contains('active') || anchorTagSignin.style.color != 'white') {
                otherAnchoerTag.classList.remove('active');
                anchorTagSignin.style.color = 'white';
            }
        })
        anchorTag.classList.add("active")
    })
  });
  
signin_btn.addEventListener('click',()=>{
  allAnchorList.forEach((otherAnchoerTag)=>{
    if (otherAnchoerTag.classList.contains('active')) {
        otherAnchoerTag.classList.remove('active');
          }
})
  anchorTagSignin.style.color = '#daab2a';
})