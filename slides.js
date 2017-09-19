function slides(element){
    var $el = $(element)
    let $view = $el.children('.view')
    var width = $el.width()
    var count = $el.find('.slide').length
    var $ol = $('<ol class="controls"></ol>')
    var currentIndex = 0
    var timerId
    
    for(let i = 0;i<count;i++){
      $ol.append(`<li>${i+1}</li>`)    
    }
    $el.append($ol) 
    
    $ol.on('click','li',function(e){
      let $li = $(e.currentTarget)
      let index = $li.index()   
      gotoslide(index)
    })
     
    $view.on('mouseenter',function(){
      window.clearInterval(timerId)
    })
    
    $view.on('mouseleave',function(){
       autoPlay()
    })
    
      function gotoslide(index){
        if(index<0){
          index = count - 1
        }else if(index>=count){
          index = 0
        }
        if(index === 0){
          let $li = $el.find('.slide').eq(0).clone()
          $li.appendTo($view)
          let number = -width * count
          
          $view.one("transitionend",function(){
            $li.remove()
            let oldtransition = $view.css('transition')
            $view.css({
              transition:'none',
              transform:`translateX(0px)`
           })  
            $view.offset()
            $view.css('transition',oldtransition)
            currentIndex = index
          })
          
          $view.css({
          transform:`translateX(${number}px)`
        })  
          
          return
        }
        
        let number = -width * index
        $view.css({     transform:`translateX(${number}px)`
      })  
        currentIndex = index
      }
     
    function autoPlay(){
      timerId = setInterval(function(){
       gotoslide(currentIndex+1)
     },3000)
    }
     autoPlay()
    
  }
  
  
  
  
  slides(document.querySelector('.slides'))