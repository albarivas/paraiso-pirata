const pirates = {
  common: {
    'Pata Palo': {
      life: 80,
      attack: 30,
      attackrounds: 1,
      ability: 'Pata Metal',
      abilityDescription: 'Con ayuda de las nuevas tecnologías, Pata Palo aumentará sus PV y sus PA en un 50% durante las próximas 2 rondas.',
      abilityrounds: 2,
      coolingdownrounds: 2
    },
    'Capitán Ganchillo': {
      life: 80,
      attack: 30,
      attackrounds: 1,
      ability: 'Gancho Trampa',
      abilityDescription: 'Durante las 3 próximas rondas, los adornos que Capitán Ganchillo crea tendrán agujas por dentro que infligirán 30 PA a todos los objetivos enemigos.',
      abilityrounds: 3,
      coolingdownrounds: 2
    },
    'El Parcheado': {
      life: 90,
      heal: 30,
      healrounds: 1,
      ability: 'Parches Reparcheados',
      abilityDescription: 'Los parches que ofrezca en el próximo turno de combate tendrán el doble de eficacia.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Jugo de Barbadilla': {
      life: 90,
      attack: 30,
      attackrounds: 1,
      ability: 'Punzada Jugosa',
      abilityDescription: 'Los PA de Jugo de Barbadilla se triplicarán en el próximo turno de combate.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Timón Timado': {
      life: 80,
      attack: 40,
      attackrounds: 1,
      ability: 'Timón Afilado',
      abilityDescription: 'El daño del timón será multiplicado por 1,5 durante las próximas 2 rondas.',
      abilityrounds: 2,
      coolingdownrounds: 3
    },
    'Cañónigus': {
      life: 90,
      attack: 30,
      attackrounds: 1,
      ability: 'Arreglo Canónigo',
      abilityDescription: 'Cañónigus recuperará todos sus PV y aumentará sus PA en 10 por cada vez que esta habilidad se active.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Capitán Tontainus Barquinhus': {
      life: 90,
      attack: 60,
      attackrounds: 2,
      ability: 'Inteligencia Artificial',
      abilityDescription: 'En las próximas 2 rondas, las rondas por ataque de Tontainus Barquinhus pasarán de 2 a 1.',
      abilityrounds: 2,
      coolingdownrounds: 3
    },
    'Cazatesoros': {
      life: 80,
      attack: 40,
      attackrounds: 1,
      ability: 'Garfio Doble',
      abilityDescription: 'El próximo ataque de Cazatesoros afectará a dos objetivos que pueden ser elegidos por el equipo que controle el barco.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Catalejo Polémico': {
      life: 90,
      attack: 30,
      attackrounds: 1,
      ability: 'Polémica Disipada',
      abilityDescription: 'Sus 2 próximos disparos serán tan certeros que tendrán el doble de PA. ¡Tened cuidado!',
      abilityrounds: 2,
      coolingdownrounds: 2
    },
    'El Náufrago': {
      life: 80,
      attack: 60,
      attackrounds: 2,
      ability: 'Naufragio Invertido',
      abilityDescription: 'Si El Náufrago ataca al barco en su próximo turno, el golpe tendrá un 50% más de PA.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Capitán Plastificado': {
      life: 100,
      attack: 30,
      attackrounds: 1,
      ability: 'Plastificación Cegadora',
      abilityDescription: 'Capitán Plastificado anulará el ataque de un objetivo enemigo en el próximo turno de combate. Únicamente no puede bloquear al barco.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Capitán Extremioxidado': {
      life: 90,
      attack: 30,
      attackrounds: 1,
      ability: 'Regresión Desoxidada',
      abilityDescription: 'Capitán Extremioxidado ha viajado en el pasado y ha regenerado sus extremidades, haciendo que sus PV y PA se dupliquen durante la próxima ronda.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Capitán Loro': {
      life: 80,
      attack: 30,
      attackrounds: 1,
      ability: 'Loro Reforzado',
      abilityDescription: 'Cuando el loro ataque a cualquier objetivo, sus picotazos tendrán un 50% más de eficacia, es decir que tendrá 45 PA en vez de 30 PA en el próximo turno de ataque.',
      abilityrounds: 1,
      coolingdownrounds: 1
    },
    'Capitán Ignoro': {
      life: 100,
      attack: 0,
      attackrounds: 1,
      ability: 'Consejo Anticipado',
      abilityDescription: 'Capitán Ignoro se ha especializado en los turnos de preparación, así que los consejos que lanza harán efecto tanto en la ronda de preparación como en la de combate durante las próximas 2 rondas.',
      abilityrounds: 2,
      coolingdownrounds: 1
    },
    'Pila de Matal': {
      life: 90,
      attack: '20 x 2',
      attackrounds: 1,
      ability: 'Matal Matadol',
      abilityDescription: 'Chiste muy malo, pero cierto. El daño del próximo ataque de Pila de Matal tendrá doble valor, haciendo que cada objetivo sufra 40 PA.',
      abilityrounds: 1,
      coolingdownrounds: 1
    }
  },
  lesscommon: {
    'Pirata Garrapata': {
      life: 75,
      attack: 25,
      attackrounds: 1,
      ability: 'Garrapata Plagada',
      abilityDescription: 'Las garrapatas afectarán a todos los objetivos en el próximo ataque.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Capitán Pata de Hierro': {
      life: 80,
      attack: 25,
      attackrounds: 1,
      ability: 'Fuerza Herrática',
      abilityDescription: 'Todos los piratas aumentan sus PV en 10 y sus PA en 5 durante 2 rondas.',
      abilityrounds: 2,
      coolingdownrounds: 3
    },
    'Punto de Mira': {
      life: 70,
      attack: 20,
      attackrounds: 1,
      ability: 'Mira Letal',
      abilityDescription: 'En los próximos 3 turnos, Punto de Mira duplicará su potencia de ataque, haciendo que sea una contra letal para los piratas.',
      abilityrounds: 3,
      coolingdownrounds: 3
    },
    'Capitán Gorrexplosivo': {
      life: 60,
      attack: 20,
      attackrounds: 1,
      ability: 'Gorroexplosión Mejorada',
      abilityDescription: 'Ahora sí, el próximo ataque alcanzará a todos los objetivos enemigos.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Bumeránicus': {
      life: 65,
      attack: 20,
      attackrounds: 1,
      ability: 'Bumerán Masivo',
      abilityDescription: 'En el próximo turno de combate, este bumerán afectará a todos los piratas con un único golpe que tendrá el doble de valor. ¡Cuidado con este ataque!',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Ratapi Léxicodis': {
      life: 60,
      heal: 50,
      healrounds: 2,
      ability: 'Construcción Acelerada',
      abilityDescription: 'Ratapi Léxicodis reparará tu barco con el doble de eficacia en los próximos 2 reparos.',
      abilityrounds: 2,
      coolingdownrounds: 3
    },
    'Capitán Minado': {
      life: 70,
      attack: 50,
      attackrounds: 2,
      ability: 'Mina Globocida',
      abilityDescription: 'Ahora las minas irán para todos los objetivos en el próximo ataque, pero tendrán 30 PA en vez de 50, porque serías capaz de cargarte a un equipo entero de piratas comunes.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Capitán Coraza Perforada': {
      life: 80,
      attack: 25,
      attackrounds: 1,
      ability: 'Coraza Restaurada',
      abilityDescription: 'Coraza Perforada recuperará 20 PV si al recibir un ataque sus PV se quedan por debajo de 10.',
      abilityrounds: 1,
      coolingdownrounds: 2
    }
  },
  special: {
    'El Cañonazos': {
      life: 100,
      attack: '30 x 2',
      attackrounds: 1,
      ability: 'Perdigón de la Muerte',
      abilityDescription: 'El Cañonazos unirá sus dos escopetas de triple cañón, lanzando dos perdigones que cada uno tendrá un 50% más de potencia.',
      abilityrounds: 1,
      coolingdownrounds: 1
    },
    'Barbarroja': {
      life: 80,
      attack: 25,
      attackrounds: 1,
      ability: 'Latigazo Mortífero',
      abilityDescription: 'Duplicará la potencia de los próximos dos ataques, afectando a un único objetivo, siendo bastante probable que hasta un pirata poco común muera.',
      abilityrounds: 2,
      coolingdownrounds: 3
    },
    'Construcciones Pirantásticas': {
      life: 125,
      heal: 150,
      healrounds: 2,
      ability: 'Reinversión del Tiempo',
      abilityDescription: 'Esta empresa duplica su cantidad de trabajadores y otorgará el doble de curación a tu barco en el próximo turno de restauración.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Submarata': {
      life: 90,
      attack: 25,
      attackrounds: 1,
      ability: 'Locura Embestial',
      abilityDescription: 'El submarino aumenta su velocidad y embiste a 2 objetivos en el próximo turno de combate.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Curánticus Medianus': {
      life: 100,
      heal: 30,
      healrounds: 1,
      ability: 'Curánticus Gigánticus',
      abilityDescription: 'Duplica la curación que ofrece en el próximo turno debido a que su caldero aumenta la velocidad de producción y permite a los piratas tomar el doble de pócimas.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'DJ Piramix': {
      life: 120,
      attack: '10 x 6',
      attackrounds: 1,
      ability: 'Fiesta de 200 dB',
      abilityDescription: 'El daño genérico se duplica en los próximos 2 turnos ya que Piramix ha logrado aumentar la potencia de sus altavoces.',
      abilityrounds: 2,
      coolingdownrounds: 2
    },
    'Propaestriba': {
      life: 100,
      attack: 35,
      attackrounds: 1,
      ability: 'Velocidad de la Luz',
      abilityDescription: 'Propaestriba adquiere tal velocidad que hace que pueda disparar a 2 objetivos en un mismo turno de combate durante 2 rondas.',
      abilityrounds: 2,
      coolingdownrounds: 3
    }
  },
  epic: {
    'Capitán Barbanegra': {
      life: 175,
      attack: 40,
      attackrounds: 1,
      ability: 'Cañón Doble',
      abilityDescription: 'Barbanegra duplica su número de objetivos gracias a un cañón prestado durante 3 turnos.',
      abilityrounds: 3,
      coolingdownrounds: 2
    },
    'Capitán Calavera': {
      life: 150,
      attack: 30,
      attackrounds: 1,
      ability: 'Muerte Súbita',
      abilityDescription: 'Fijará sus ataques en un único objetivo durante 3 rondas duplicando su potencia de ataque.',
      abilityrounds: 3,
      coolingdownrounds: 2
    },
    'Tacañares': {
      life: 170,
      attack: 50,
      attackrounds: 2,
      ability: 'Tenaza Retorcida',
      abilityDescription: 'En los próximos 2 turnos, duplica su potencia de ataque y su número de objetivos, convirtiéndose en el más peligroso de todo Paraíso Pirata.',
      abilityrounds: 2,
      coolingdownrounds: 3
    },
    'Estrellatus': {
      life: 180,
      attack: 40,
      attackrounds: 1,
      ability: 'Estrellatón',
      abilityDescription: 'La potencia de su ataque se duplica durante los próximos 3 turnos, siendo una gran amenaza para las calidades inferiores. Tienen opciones de resistir, ya que solamente ataca a 1 objetivo por turno de combate.',
      abilityrounds: 3,
      coolingdownrounds: 2
    },
    'Bucanero': {
      life: 180,
      attack: 40,
      attackrounds: 1,
      ability: 'Traición Bucanera',
      abilityDescription: 'Su ataque se multiplicará X2 PERMANENTEMENTE si recibe un ataque en los próximos 2 turnos. Además, Bucanero fijará su objetivo en el pirata que le atacó, para asegurar la muerte de ese enemigo.',
      abilityrounds: 2,
      coolingdownrounds: 2
    }
  },
  legendary: {
    'Comanpitán': {
      life: 180,
      attack: 40,
      attackrounds: 1,
      ability: 'Comando Comandado',
      abilityDescription: 'Toma el mando del equipo y dirige a los aliados durante los próximos 3 turnos, haciendo que aumente su ataque en un 50% en el turno de combate, y aumentándose a sí mismo en un 100%.',
      abilityrounds: 3,
      coolingdownrounds: 2
    },
    'Pirabot': {
      life: 300,
      attack: '30 x 2 / 60',
      attackrounds: '1 / 2',
      ability: 'Locura Robótica',
      abilityDescription: 'Su próximo ataque afectará a todo lo que esté en juego (piratas y barcos) con la misma potencia de un ataque a un único objetivo.',
      abilityrounds: '1 / 2',
      coolingdownrounds: 3
    },
    'Myrakles': {
      life: 300,
      attack: '?',
      attackrounds: 1,
      ability: 'Milagro Secundario',
      abilityDescription: 'Myrakles convoca una energía que solo se puede utilizar una vez cada 1000 años, y ésta hace que la vida y el ataque de tus piratas se tripliquen, además de aplicárselo a sí mismo.',
      abilityrounds: 99,
      coolingdownrounds: 99
    }
  },
  mythical: {
    'Holandés Errante': {
      life: 350,
      attack: '50 x 6',
      attackrounds: 2,
      ability: 'Explosión Umbría',
      abilityDescription: 'El Holandés Errante saca su furia interna y genera una onda que produce 75 PA a todos los piratas, sin afectar al barco.',
      abilityrounds: 1,
      coolingdownrounds: 2
    },
    'Pirratatatatatata': {
      life: 300,
      attack: '10 x 8',
      attackrounds: 1,
      ability: 'Ametralladora Controlada',
      abilityDescription: 'Dispara una ráfaga de 15 disparos a cualquier objetivo.',
      abilityrounds: 1,
      coolingdownrounds: 1
    }
  }
};