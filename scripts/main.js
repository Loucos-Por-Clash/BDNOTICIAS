  var balls = document.querySelector('.balls')
  var quant = document.querySelectorAll('.slides .image') 
  var atual = 0
  var imagem = document.getElementById('atual')
  var next = document.getElementById('next')
  var voltar = document.getElementById('voltar')

  for (let i = 0; i < quant.length; i++) { 
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
  }

  document.getElementById('0').classList.add('imgAtual') 
  var pos = document.querySelectorAll('.balls div')

  for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
      atual = pos[i].id
      slide()
    })
  }

  voltar.addEventListener('click', () => {
    atual--
    slide()
  })

  next.addEventListener('click', () => { 
    atual++
    slide()
  })

  function slide() {
    if (atual >= quant.length) {
      atual = 0
    } else if (atual < 0) {
      atual = quant.length - 1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual') // Correção aqui
    imagem.style.marginLeft = -1024 * atual + 'px'
    document.getElementById(atual).classList.add('imgAtual')
  }
  slide()
  let myButton = document.querySelector("#myButton");
  let myHeading = document.querySelector("h1");
  let nomeParagrafo = document.querySelector("#nomeParagrafo");
  
  function setUserName() {
    const myName = prompt("Por favor, digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      nomeParagrafo.textContent = `Bem-vindo ao BD Notícias, ${myName}`; // Alteração aqui
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    nomeParagrafo.textContent = `Bem-vindo ao BD Notícias, ${storedName}`; // E aqui
  }
  
  myButton.onclick = () => {
    setUserName();
  };
    const dialog = document.querySelector('dialog');
    const openButton = document.getElementById('titulo');
    const closeButton = dialog.querySelector('button');
  
    openButton.addEventListener('click', function() {
      dialog.showModal();
    });
    closeButton.addEventListener('click', function() {
      dialog.close();
    });
 
  
  