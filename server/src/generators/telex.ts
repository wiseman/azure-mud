/* eslint-disable quotes */

var tracery = require('tracery-grammar')

export const actionString = (robot: string) => {
  return `${robot}`
}

export const generate = () => {
  var grammar = tracery.createGrammar({
    origin: [
      'The telex chatters: #options#'
    ],
    options: [
      '#eam#',
      '#disregardEam#',
      'STANDING BY FOR TRAFFIC',
      // Wargames
      'SKYBIRD THIS IS DROPKICK WITH RED ALPHA MESSAGE IN TWO PARTS',
      'ROMEO OSCAR NOVEMBER CHARLIE TANGO LIMA ALPHA AUTHENTICATION 220040 DELTA LIMA',
      '#andromedaStrain#'
    ],
    eam: [
      'SKYKING SKYKING DO NOT ANSWER #codeWord# TIME #time# AUTHENTICATION #nato# #nato#'
    ],
    disregardEam: [
      'DISREGARD MY #codeWord# TRANSMITTED AT #time# AUTH #nato# #nato#'
    ],
    codeWord: [
      'BILBO',
      'GANDALF',
      'NAZGUL',
      'GOLLUM',
      'MORDOR',
      'SPRINGSTEEN',
      'RUSH',
      'DURAN DURAN',
      'SKYNYRD',
      'ROSES',
      'THE DOORS',
      'ROWLING',
      'TALIO',
      'THE WHO',
      'TOOL',
      'POISON',
      'WHITE SNAKE',
      'LEBOWSKI',
      'WEEZER',
      'QUARTERBACK',
      'LINEBACKER',
      'CHEERLEADER'
    ],
    time: [
      '01',
      '07',
      '10',
      '11',
      '19',
      '22',
      '27',
      '30',
      '34',
      '36',
      '47',
      '52',
      '54'
    ],
    nato: [
      'ALPHA',
      'BRAVO',
      'CHARLIE',
      'DELTA',
      'ECHO',
      'FOXTROT',
      'GOLF',
      'HOTEL',
      'INDIA',
      'JULIETT',
      'KILO',
      'LIMA',
      'MIKE',
      'NOVEMBER',
      'OSCAR',
      'PAPA',
      'QUEBEC',
      'ROMEO',
      'SIERRA',
      'TANGO',
      'UNIFORM',
      'WHISKEY',
      'XRAY',
      'YANKEE',
      'ZULU'
    ],
    andromedaStrain: [
      'SCENARIO ▶ WILDFIRE BIOWAR MAP ◀ SIMULATED TOXIC EXCHANGE ▶ WEAPONRY ▶ ANDROMEDA ▶ WEIGHTED FOR WIND AND POP.'
    ]
  })

  grammar.addModifiers(tracery.baseEngModifiers)
  return grammar.flatten('#origin#')
}
/* eslint-enable quotes */
