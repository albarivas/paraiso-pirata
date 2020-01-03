const pirates = {
  common: {
    'Pata Palo': {
      life: 40,
      attack: 15,
      attackrounds: 1,
      ability: 'Pata Metal',
      abilityDescription: 'Con ayuda de las nuevas tecnologías, Pata Palo ha conseguido reforzar sus extremidades de madera para que sean de metal, aumentando sus PV a 80 y sus PA a 30 durante las próximas 2 rondas.',
      abilityrounds: 2,
      coolingdownrounds: 2
    },
    'Capitán Ganchillo': {
      life: 40,
      attack: 15,
      attackrounds: 1,
      ability: 'Gancho Trampa',
      abilityDescription: 'Durante las próximas 3 rondas, los adornos que Capitán Ganchillo crea tienen por dentro agujas que infligirán 15 puntos de daño a todos los objetivos enemigos.',
      abilityrounds: 3,
      coolingdownrounds: 2
    },
    'El Parcheado': {
      life: 40,
      heal: 15,
      healrounds: 1,
      ability: 'Parches Reparcheados',
      abilityDescription: 'Los parches que ofrezca en el próximo turno de combate afectarán a todos los aliados y tendrán el doble de eficacia.',
      abilityrounds: 1,
      coolingdownrounds: 1
    },
    'Jugo de Barbadilla': {
      life: 50,
      attack: 15,
      attackrounds: 1,
      ability: 'Punzada Jugosa',
      abilityDescription: 'El daño del jugo será el doble durante las 2 próximas rondas.',
      abilityrounds: 2,
      coolingdownrounds: 3
    },
    'Timón Timado': {
      life: 50,
      attack: 20,
      attackrounds: 1,
      ability: 'Timón Afilado',
      abilityDescription: 'El daño del timón será multiplicado por 2 durante las próximas 2 rondas.',
      abilityrounds: 2,
      coolingdownrounds: 3
    },
    'Cañónigus': {
      life: 50,
      attack: 15,
      attackrounds: 1,
      ability: 'Arreglo Cañónigo',
      abilityDescription: 'Cañónigus recuperará todos sus PV y aumentará sus PA en 5 por cada vez que esta habilidad se active.',
      abilityrounds: 0,
      coolingdownrounds: 2
    },
    'Capitán Tontainus Barquinhus': {
      life: 30,
      attack: 30,
      attackrounds: 2,
      ability: 'Inteligencia Artificial',
      abilityDescription: 'Durante las próximas 3 rondas, Tontainus Barquinhus no necesitará esperar 1 turno para volver a atacar, pasando así a 1 ataque por ronda con la misma potencia.',
      abilityrounds: 3,
      coolingdownrounds: 2
    },
    'Cazatesoros': {
      life: 40,
      attack: 20,
      attackrounds: 1,
      ability: 'Garfio Doble',
      abilityDescription: 'El próximo ataque de Cazatesoros afectará a dos objetivos que pueden ser elegidos por el equipo que controle el barco.',
      abilityrounds: 1,
      coolingdownrounds: 1
    },
    'Catalejo Polémico': {
      life: 45,
      attack: 15,
      attackrounds: 1,
      ability: 'Polémica Disipada',
      abilityDescription: 'Sus 2 próximos ataques tendrán el doble de potencia.',
      abilityrounds: 2,
      coolingdownrounds: 2
    },
    'El Náufrago': {
      life: 40,
      attack: 30,
      attackrounds: 2,
      ability: 'Naufragio Invertido',
      abilityDescription: 'Si El Náufrago golpea al barco en el próximo ataque, el daño será el doble respecto al de su ataque original.',
      abilityrounds: 1,
      coolingdownrounds: 1
    },
    'Capitán Plastificado': {
      life: 60,
      attack: 15,
      attackrounds: 1,
      ability: 'Plastificación Cegadora',
      abilityDescription: 'Capitán Plastificado anulará el ataque de un objetivo enemigo en el próximo turno de combate. Únicamente no puede bloquear al barco.',
      coolingdownrounds: 2
    },
    'Capitán Extremioxidado': {
      life: 40,
      attack: 15,
      attackrounds: 1,
      ability: 'Regresión Desoxidada',
      abilityDescription: 'Capitán Extremioxidado ha viajado en el pasado y ha regenerado sus extremidades, haciendo que la potencia de su ataque y su vida se dupliquen temporalmente durante las próximas 2 rondas.',
      abilityrounds: 2,
      coolingdownrounds: 2
    },
    'Capitán Loro': {
      life: 50,
      attack: 20,
      attackrounds: 1,
      ability: 'Loro Reforzado',
      abilityDescription: 'Cuando el loro ataque a cualquier objetivo, sus picotazos tendrán un 50% más de eficacia.',
      abilityrounds: 1,
      coolingdownrounds: 1
    },
    'Capitán Ignoro': {
      life: 70,
      attack: 0,
      attackrounds: 1,
      ability: 'Consejo Anticipado',
      abilityDescription: 'Capitán Ignoro se ha especializado en los turnos de preparación, así que los consejos que lanza harán efecto tanto en la ronda de preparación como en la de combate durante las próximas 2 rondas.',
      abilityrounds: 2,
      coolingdownrounds: 1
    },
    'Pila de Matal': {
      life: 60,
      attack: '10 x 2',
      attackrounds: 1,
      ability: 'Matal Matadol',
      abilityDescription: 'Chiste muy malo, pero cierto. El daño del próximo ataque de Pila de Matal tendrá doble valor, haciendo que cada objetivo sufra 20 PA.',
      abilityrounds: 1,
      coolingdownrounds: 1
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
      attack: '30 x 2',
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