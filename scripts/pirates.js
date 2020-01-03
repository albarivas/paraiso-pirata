const pirates = {
  common: {
    'Pata Palo': {
      ability: 'Pata Metal',
      abilityDescription: 'test',
      life: 40,
      attack: 15,
      attackrounds: 1
    },
    'Capitán Ganchillo': {
      ability: 'Gancho Trampa',
      life: 40,
      attack: 15,
      attackrounds: 1
    },
    'El Parcheado': {
      ability: 'Parches Reparcheados',
      life: 40,
      attack: 0, //heals 15 life to a teammate or himself
      attackrounds: 1
    },
    'Jugo de Barbadilla': {
      ability: 'Punzada Jugosa',
      life: 50,
      attack: 15,
      attackrounds: 1
    },
    'Timón Timado': {
      ability: 'Timón Afilado',
      life: 50,
      attack: 20,
      attackrounds: 1
    },
    'Cañónigus': {
      ability: 'Arreglo Cañónigo',
      life: 50,
      attack: 15,
      attackrounds: 1
    },
    'Capitán Tontainus Barquinhus': {
      ability: 'Inteligencia Artificial',
      life: 30,
      attack: 30,
      attackrounds: 2
    },
    'Cazatesoros': {
      ability: 'Garfio Doble',
      life: 40,
      attack: 20,
      attackrounds: 1
    },
    'Catalejo Polémico': {
      ability: 'Polémica Disipada',
      life: 45,
      attack: 15,
      attackrounds: 1
    },
    'El Náufrago': {
      ability: 'Naufragio Invertido',
      life: 40,
      attack: 30,
      attackrounds: 2
    },
    'Capitán Plastificado': {
      ability: 'Plastificación Ciega',
	  life: 60,
      attack: 15,
      attackrounds: 1
    },
    'Capitán Extremioxidado': {
      ability: 'Regresión Desoxidada',
      life: 40,
      attack: 15,
      attackrounds: 1
    },
    'Capitán Loro': {
      ability: 'Loro Reforzado',
      life: 50,
      attack: 20,
      attackrounds: 1
    },
    'Capitán Ignoro': {
      ability: 'Consejo Anticipado',
      life: 70,
      attack: 0, //gives advice to your team
      attackrounds: 1
    },
    'Pila de Matal': {
      ability: 'Matal Matadol',
      life: 60,
      attack: '10 x 2',
      attackrounds: 1
    }
  },
  lesscommon: {
    'Pirata Garrapata': {
      ability: 'Garrapata Plagada',
      life: 75,
      attack: 25,
      attackrounds: 1
    },
    'Capitán Pata de Hierro': {
      ability: 'Fuerza Herrática',
      life: 80,
      attack: 25,
      attackrounds: 1
    },
    'Punto de Mira': {
      ability: 'Mira Letal',
      life: 70,
      attack: 20,
      attackrounds: 1
    },
    'Capitán Gorrexplosivo': {
      ability: 'Gorroexplosión Mejorada',
      life: 60,
      attack: 20,
      attackrounds: 1
    },
    'Bumeránicus': {
      ability: 'Bumerán Masivo',
      life: 65,
      attack: 20,
      attackrounds: 1
    },
    'Ratapi Léxicodis': {
      ability: 'Construcción Acelerada',
      life: 60,
      attack: 0, //restores 50 life to the boat
      attackrounds: 2
    },
    'Capitán Minado': {
      ability: 'Mina Globocida',
      life: 70,
      attack: 50,
      attackrounds: 2
    },
    'Capitán Coraza Perforada': {
      ability: 'Coraza Restaurada',
      life: 80,
      attack: 25,
      attackrounds: 1
    }
  },
  special: {
    'El Cañonazos': {
      ability: 'Perdigón de la Muerte',
      life: 100,
      attack: '30 x 2', //deals 30 damage to 2 enemies
      attackrounds: 1
    },
    'Barbarroja': {
      ability: 'Latigazo Mortífero',
      life: 80,
      attack: 25,
      attackrounds: 1
    },
    'Construcciones Pirantásticas': {
      ability: 'Reinversión del Tiempo',
      life: 125,
      attack: 0, //restores 150 life to the boat
      attackrounds: 3
    },
    'Submarata': {
      ability: 'Locura Embestial',
      life: 90,
      attack: 25,
      attackrounds: 1
    },
    'Curánticus Medianus': {
      ability: 'Curánticus Gigánticus',
      life: 70,
      attack: 0, //heals 1 teammate 30 life
      attackrounds: 1
    },
    'DJ Piramix': {
      ability: 'Fiesta de 200 dB',
      life: 120,
      attack: '10 x 6', //deals 10 attack to all foe's objectives
      attackrounds: 1
    },
    'Propaestriba': {
      ability: 'Velocidad de la Luz',
      life: 100,
      attack: 35,
      attackrounds: 1
    }
  },
  epic: {
    'Capitán Barbanegra': {
      ability: 'Cañón Doble',
      life: 175,
      attack: 40,
      attackrounds: 1
    },
    'Capitán Calavera': {
      ability: 'Fuerza Herrática',
      life: 150,
      attack: 30,
      attackrounds: 1
    },
    'Tacañares': {
      ability: 'Tenaza Retorcida',
      life: 170,
      attack: 50,
      attackrounds: 2
    },
    'Estrellatus': {
      ability: 'Estrellatón',
      life: 180,
      attack: 40,
      attackrounds: 1
    },
    'Bucanero': {
      ability: 'Traición Bucanera',
      life: 200,
      attack: 40,
      attackrounds: 1
    }
  },
  legendary: {
    'Comanpitán': {
      ability: 'Comando Comandado',
      life: 400,
      attack: 30,
      attackrounds: 1
    },
    'Pirabot': {
      ability: 'Locura Robótica',
      life: 300,
      attack: '30 x 2 / 60', //this attack can be configurated to hit 1 or 2 enemies. If it's 1, damage will be 60, and if it's 2, damage will be 30
      attackrounds: 1
    },
    'Myrakles': {
      ability: 'Milagro Secundario',
      life: 300,
      attack: '?', //suma del ataque de tu equipo//
      attackrounds: 1
    }
  },
  mythical: {
    'Holandés Errante': {
      ability: 'Explosión Umbría',
      life: 350,
      attack: '50 x 6', //attacks all the foe's objectives
      attackrounds: 2
    },
    'Pirratatatatatata': {
      ability: 'Ametralladora Controlada',
      life: 300,
      attack: '10 x 8', //attacks one enemy 8 times in 1 attack
      attackrounds: 1
    }
  }
};