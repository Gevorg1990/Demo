
function clock() {



    document.querySelector('.clock').ondragstart = function () {
      return false
    }
  
  
  
    setInterval(() => {
      const deg = 6;
      const hr = document.querySelector('.hr');
      const sc = document.querySelector('.sc');
      const mn = document.querySelector('.mn');
  
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;
  
      hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`
      mn.style.transform = `rotateZ(${(mm)}deg)`
      sc.style.transform = `rotateZ(${(ss)}deg)`
    })
  
  
    document.querySelector('.clock').ondblclick = function () {
      generatVois()
    }
  
    document.querySelector('.clock').onmousedown = function (event) { // (1) отследить нажатие
  
      // document.body.append( document.querySelector('.clock'));
      // // и установим абсолютно спозиционированный мяч под курсор
  
      moveAt(event.pageX, event.pageY);
  
      // передвинуть мяч под координаты курсора
      // и сдвинуть на половину ширины/высоты для центрирования
      function moveAt(pageX, pageY) {
        document.querySelector('.clock').style.left = pageX - document.querySelector('.clock').offsetWidth / 32 + 'px';
        document.querySelector('.clock').style.top = pageY - document.querySelector('.clock').offsetHeight / 32 + 'px';
  
        if (parseInt(document.querySelector('.clock').style.left) < 200) {
          document.querySelector('.clock').style.left = 200 + 'px'
  
        }
  
        if (parseInt(document.querySelector('.clock').style.left) > window.innerWidth - 200) {
  
          document.querySelector('.clock').style.left = window.innerWidth - 220 + 'px';
  
        }
  
        if (document.querySelector('.clock').style.top < 200 + 'px') {
          document.querySelector('.clock').style.top = 200 + 'px'
  
        }
  
        if (parseInt(document.querySelector('.clock').style.top) + 200 > window.innerHeight) {
          document.querySelector('.clock').style.top = window.innerHeight - 200 + 'px';
          document.querySelector('.clock').style.bottom = 10 + 'px';
  
        }
  
      }
  
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }
  
      // (3) перемещать по экрану
      document.addEventListener('mousemove', onMouseMove);
  
  
      // (4) положить мяч, удалить более ненужные обработчики событий
      document.querySelector('.clock').onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.querySelector('.clock').onmouseup = null;
  
  
      };
  
      document.querySelector('.clock').onmouseleave = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.querySelector('.clock').onmouseup = null;
  
  
      };
  
    };
  
  
    document.querySelector('.clock').ondragstart = function () {
      return false;
    };
  
  
  //-------------------------------------------------------------------------
  
    document.body.ondragover = function (e) {
      e.preventDefault();
    }
  
    // generatVois()
  
    function generatVois() {
      var utterThis = new SpeechSynthesisUtterance(new Date().toLocaleTimeString());
      var voices = window.speechSynthesis.getVoices();
  
      utterThis.voice = voices[3];
  
      const {speechSynthesis} = window;
      speechSynthesis.interimResults = true;
      utterThis.lang = 'en-US';
      speechSynthesis.speak(utterThis)
    }




}

