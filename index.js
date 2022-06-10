import{ monsters } from './monsters.js';

for (let monsterDiv of monsters){
    showFound(monsterDiv);
}

function showFound(monsterDiv){
    const monster = document.createElement('div');
    monster.className = 'monster';

    const img = document.createElement('img');
    img.src = `https://robohash.org/${monsterDiv.id}?set=set2`;
    img.alt = monsterDiv.name;

    const nname = document.createElement('p');
    nname.className = 'name';
    nname.innerText = monsterDiv.name;

    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = monsterDiv.email;
    monster.append(img,nname,email)
    document.querySelector('.monsters').append(monster);
}


function notFount(){
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'p-5 not-found';
    notFoundDiv.style.display = 'none';

    const span =document.createElement('span');
    span.innerText = '404';

    const h1 = document.createElement('h1');
    h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';

}

document.querySelector('#search-monster').addEventListener('keyup',
    function(e){
        const keyword = e.target.value.toLowerCase();
        const findmonster = document.querySelectorAll('.monster');
        for(let monster of findmonster) {
          const name = monster.children[1].innerText.toLowerCase();
          const email = monster.children[2].innerText.toLowerCase();
          if (name.includes(keyword) || email.includes(keyword)) {
            monster.style.display = 'block';
          } else {
            monster.style.display = 'none';
          }

        }

});

