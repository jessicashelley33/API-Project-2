const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener("click", async function(evt){ 
  evt.preventDefault();
 
 postData()
 .then(data => {
  console.log(data); // JSON data parsed by `data.json()` call
  imgOne(data);
  imgTwo(data);
  imgThree(data);
  imgFour(data);
  imgFive(data);
  imgSix(data);
 
  document.getElementById('main-content').classList.remove('hidden');
});
});


async function postData() {
    // Default options are marked with *
    const response = await fetch('https://api.pexels.com/v1/search?query=ocean', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '563492ad6f91700001000001079b656bd69e49268c42676bb071cb57'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
 
  
  function imgOne(data) {
        
    let colOne = document.getElementById('col-1');
    
    
    let headingOne = document.querySelector('.headingOne');
    let linkOne = document.querySelector('.linkOne');
    let imgOne = document.querySelector('.imgOne');

    headingOne.innerText = data.photos[0].photographer;
    linkOne.href = data.photos[0].photographer_url;
    linkOne.innerText = data.photos[0].photographer_url;
    imgOne.src = data.photos[0].src.large;

    headingOne.id = 'h3-Col-1';
    linkOne.id = 'a-Col-1';
    imgOne.id = 'img-Col-1'

    colOne.appendChild(headingOne);
    colOne.appendChild(linkOne);
    linkOne.appendChild(imgOne);
    
}


function imgTwo(data) {
    
  let colTwo = document.getElementById('col-2');
  let headingTwo = document.querySelector('.headingTwo');
  let linkTwo = document.querySelector('.linkTwo');
  let imgTwo = document.querySelector('.imgTwo');

  headingTwo.innerText = data.photos[12].photographer;
  linkTwo.href = data.photos[12].photographer_url;
  linkTwo.innerText = data.photos[12].photographer_url;
  imgTwo.src = data.photos[12].src.large;

  headingTwo.id = 'h3-Col-1';
    linkTwo.id = 'a-Col-1';
    imgTwo.id = 'img-Col-1'

  colTwo.appendChild(headingTwo);
  colTwo.appendChild(linkTwo);
  linkTwo.appendChild(imgTwo);
  
}




function imgThree(data) {
  let colThree = document.getElementById('col-3');
  let headingThree = document.querySelector('.headingThree');
  let linkThree = document.querySelector('.linkThree');
  let imgThree = document.querySelector('.imgThree');

  headingThree.innerText = data.photos[13].photographer;
  linkThree.href = data.photos[13].photographer_url;
  linkThree.innerText = data.photos[13].photographer_url;
  imgThree.src = data.photos[13].src.large;

    headingThree.id = 'h3-Col-1';
    linkThree.id = 'a-Col-1';
    imgThree.id = 'img-Col-1'

  colThree.appendChild(headingThree);
  colThree.appendChild(linkThree);
  linkThree.appendChild(imgThree);
    
}


function imgFour(data){
  let colFour = document.getElementById('col-4');
  let headingFour = document.querySelector('.headingFour');
  let linkFour = document.querySelector('.linkFour');
  let imgFour = document.querySelector('.imgFour');

  headingFour.innerText = data.photos[1].photographer;
  linkFour.href = data.photos[1].photographer_url;
  linkFour.innerText = data.photos[1].photographer_url;
  imgFour.src = data.photos[1].src.large;

    headingFour.id = 'h3-Col-1';
    linkFour.id = 'a-Col-1';
    imgFour.id = 'img-Col-1'
  
  colFour.appendChild(headingFour);
  colFour.appendChild(linkFour);
  linkFour.appendChild(imgFour);
}


function imgFive(data){
  let colFive = document.getElementById('col-5');
  let headingFive = document.querySelector('.headingFive');
  let linkFive = document.querySelector('.linkFive');
  let imgFive = document.querySelector('.imgFive');

  headingFive.innerText = data.photos[4].photographer;
  linkFive.href = data.photos[4].photographer_url;
  linkFive.innerText = data.photos[4].photographer_url;
  imgFive.src = data.photos[4].src.large;

  headingFive.id = 'h3-Col-1';
    linkFive.id = 'a-Col-1';
    imgFive.id = 'img-Col-1'

  colFive.appendChild(headingFive);
  colFive.appendChild(linkFive);
  linkFive.appendChild(imgFive);
}


function imgSix(data){
  let colSix = document.getElementById('col-6');
  let headingSix = document.querySelector('.headingSix');
  let linkSix = document.querySelector('.linkSix');
  let imgSix = document.querySelector('.imgSix');

  headingSix.innerText = data.photos[5].photographer;
  linkSix.href = data.photos[5].photographer_url;
  linkSix.innerText = data.photos[5].photographer_url;
  imgSix.src = data.photos[5].src.large;

    headingSix.id = 'h3-Col-1';
    linkSix.id = 'a-Col-1';
    imgSix.id = 'img-Col-1'

  colSix.appendChild(headingSix);
  colSix.appendChild(linkSix);
  linkSix.appendChild(imgSix);
}

  

    


    
    