/* Load pirates.js before */

let selectedCell;
const colors = {
    'common' : 'grey',
    'lesscommon' : 'green',
    'special' : 'blue',
    'epic' : 'purple',
    'legendary' : 'orange',
    'mythical' : 'red'
};

function onAddPirateClick(cell) {
    // Store selected cell for later
    this.selectedCell = cell;

    // Hide game tracking table
    const gameTable = document.getElementById('game-tracking');
    gameTable.style.display = 'none';

    // Show quality election table
    const electionTable = document.getElementById('quality-election');
    electionTable.style.display = 'block';
}

function onQualityChosen(quality) {
    // Delete pirates from pirate election table, if there are any from previous selections
    const pirateElectionTable = document.getElementById('pirate-election');
    while (pirateElectionTable.firstChild) {
        pirateElectionTable.removeChild(pirateElectionTable.firstChild);
    }

    // Populate pirate election table with selected quality pirates
    const piratesToShow = Object.keys(pirates[quality]);
    let counter = 0;
    let tr;
    // Iterate over each pirate to add
    piratesToShow.forEach((piratename) => {
        // If multiple of 3, add a new row
        if (counter % 3 === 0) {
            tr = document.createElement('tr');
            pirateElectionTable.appendChild(tr);
        }
        // Create pirate cell 
        const td = document.createElement('td');
        td.innerText = piratename;
        td.addEventListener('click', () => {
            onPirateSelected(quality, piratename);
        });
        td.style.backgroundColor = colors[quality];
        tr.appendChild(td);
        counter++;
    });

    // Hide quality election table
    const qualityElectionTable = document.getElementById('quality-election');
    qualityElectionTable.style.display = 'none';

    // Show pirate election table
    pirateElectionTable.style.display = 'block';
}

function onPirateSelected(quality, piratename) {
    addSelectedPirateToGameTrackingCell(quality, piratename);

    // Hide pirate election table
    const pirateElectionTable = document.getElementById('pirate-election');
    pirateElectionTable.style.display = 'none';

    // Show game tracking table
    const gameTable = document.getElementById('game-tracking');
    gameTable.style.display = 'block';
}

function addSelectedPirateToGameTrackingCell(quality, piratename) {
    const gameTrackingTd = this.selectedCell.parentElement;

    // Remove any previously selected pirates
    while (gameTrackingTd.firstChild) {
        gameTrackingTd.removeChild(gameTrackingTd.firstChild);
    }

    // Get pirate info from pirates catalogue
    const pirate = pirates[quality][piratename];

    // Add selected pirate to game tracking selected cell
    const name = document.createElement('p');
    name.innerText = `Nombre: ${piratename}`;
    gameTrackingTd.appendChild(name);

    const life = document.createElement('p');
    const lifeInput = document.createElement('input');
    lifeInput.type = 'number';
    lifeInput.value = pirate.life;
    life.innerText = `Vida:`;
    life.appendChild(lifeInput);
    gameTrackingTd.appendChild(life);

    const attackOrHeal = document.createElement('p');
    const attackOrHealInput = document.createElement('input');
    attackOrHealInput.type = 'text';
    if (pirate.attack) {
        attackOrHeal.innerText = `Ataque:`;
        attackOrHealInput.value = pirate.attack;
    } else {
        attackOrHeal.innerText = `Heal:`;
        attackOrHealInput.value = pirate.heal;
    }
    attackOrHeal.appendChild(attackOrHealInput);
    gameTrackingTd.appendChild(attackOrHeal);

    const attackOrHealrounds = document.createElement('p');
    const attackOrHealroundsInput = document.createElement('input');
    attackOrHealroundsInput.type = 'number';
    if (pirate.attack) {
        attackOrHealrounds.innerText = `Rondas por Ataque:`;
        attackOrHealroundsInput.value = pirate.attackrounds;
    } else {
        attackOrHealrounds.innerText = `Rondas por Curación:`;
        attackOrHealroundsInput.value = pirate.healrounds;
    }
    attackOrHealrounds.appendChild(attackOrHealroundsInput);
    gameTrackingTd.appendChild(attackOrHealrounds);

    const abilityBox = document.createElement('div');
    abilityBox.className = 'ability-box';

    const ability = document.createElement('p');
    ability.innerText = `Habilidad: ${pirate.ability}`;
    ability.title = pirate.abilityDescription;
    const abilityInput = document.createElement('input');
    abilityInput.type = 'checkbox';
    ability.appendChild(abilityInput);
    abilityBox.appendChild(ability);

    const abilityrounds = document.createElement('p');
    const abilityroundsInput = document.createElement('input');
    abilityroundsInput.type = 'number';
    abilityroundsInput.value = pirate.abilityrounds;
    abilityrounds.innerText = `Duración de la habilidad:`;
    abilityrounds.appendChild(abilityroundsInput);
    abilityBox.appendChild(abilityrounds);

    const coolingdownrounds = document.createElement('p');
    const coolingdownroundsInput = document.createElement('input');
    coolingdownroundsInput.type = 'number';
    coolingdownroundsInput.value = pirate.coolingdownrounds;
    coolingdownrounds.innerText = `Rondas de Enfriamiento:`;
    coolingdownrounds.appendChild(coolingdownroundsInput);
    abilityBox.appendChild(coolingdownrounds);

    gameTrackingTd.appendChild(abilityBox);

    const removeDiv = document.createElement('div');
    removeDiv.className = 'pirateButton';

    const removeText = document.createElement('a');
    removeText.innerText = 'Borrar';
    removeDiv.appendChild(removeText);
    removeDiv.addEventListener('click', (event) => {
        onRemovePirate(event);
    });
    gameTrackingTd.appendChild(removeDiv);

    // Set correct background color
    gameTrackingTd.style.backgroundColor = colors[quality];
}

function onRemovePirate(event) {
    // Remove all elements from parent td
    const clickedTd = event.currentTarget.parentElement;
    while (clickedTd.firstChild) {
        clickedTd.removeChild(clickedTd.firstChild);
    }

    // Add "add pirate" button and reset color
    const addPirateDiv = document.createElement('div');
    addPirateDiv.className = 'pirateButton';

    const addPirateText = document.createElement('a');
    addPirateText.innerText = 'Añadir Pirata';

    addPirateDiv.appendChild(addPirateText);
    addPirateDiv.addEventListener('click', (event) => {
        onAddPirateClick(event.currentTarget);
    });
    clickedTd.appendChild(addPirateDiv);
    clickedTd.style.backgroundColor = 'tan';

    // Stop event propagation
    event.stopImmediatePropagation();
}