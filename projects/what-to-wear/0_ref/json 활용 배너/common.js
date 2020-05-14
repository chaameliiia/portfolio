window.addEventListener('DOMContentLoaded',function(){
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET','data.json');
    xhr.send(null);
    
    xhr.addEventListener('load',function(){
        var res = JSON.parse(xhr.responseText);
        
        //초기값
        var section = document.querySelector('section');
        var fImg = document.querySelectorAll('img');
        var i=2;    
        
        fImg[0].src = res.event[0];
        fImg[1].src = res.event[1];
        
        //배너루프
        fade = setInterval(function(){
            fImg = document.querySelectorAll('img');
            
            fImg[0].style.opacity = 0;
            fImg[1].style.opacity = 1;
            
            setTimeout(function(){
                //값 생성 및 업데이트
                if(i == res.event.length){i=0};
                fImg[0].src = res.event[i];
                section.insertAdjacentElement('beforeend',fImg[0]);
            },1000);
                
            i++;
                
            //1 숨기고 값을 넣어주고
            //2. 뒤로 이동시킴
        },2000);
        
    });
    
    
});