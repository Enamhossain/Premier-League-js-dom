

const playerArray = [];

function displayPlayer(){
    let totalplayer = 0;

  const children = document.getElementById('playerAll')
  children.textContent = '';

 

    if(playerArray.length > 5){
        alert('You can add only 5 player Name')

    } else{
        for(let i = 0; i < playerArray.length; i++)
        {
            totalplayer += playerArray[i].playerid;
    
            const tr = document.createElement("tr");
            tr.innerHTML = `
           
            <th>${i+1}</th>
            <td>${playerArray[i].playerid}</td>
          
             
            `;
    
    
            children.appendChild(tr);
        }
        return children
        
    }

}

function addToPlayerName(element){
    const playerItems= element.parentNode.children[0] .innerText
     element.style.backgroundColor="#CFCFCF"
     const player = {
        playerid: playerItems,
        
    }

    playerArray.push(player);
    
    displayPlayer();

   

}



