document.addEventListener('scroll',function(){
    const address11= document.querySelector('.address1#address11');
    if(window.scrollY >= 220){
       address11.classList.remove('invisible');
       address11.classList.add('visible');
    }else{
       address11.classList.remove('visible');
       address11.classList.add('invisible');
    }
    const navdel1= document.querySelector('.navdel#navdel1');
    if(window.scrollY > 0){
      navdel1.classList.remove('invi');
      navdel1.classList.add('visi');
    }else{
      navdel1.classList.remove('visi');
      navdel1.classList.add('invi');
    }
    const enterdelivery1= document.querySelector('.enterdelivery#enterdelivery1');
    if(window.scrollY > 283){
      enterdelivery1.classList.remove('in');
      enterdelivery1.classList.add('vi');
    }else{
      enterdelivery1.classList.remove('vi');
      enterdelivery1.classList.add('in');
    }
   
})
