/* eslint-disable quotes */

var tracery = require('tracery-grammar')

export const actionString = (robot: string) => {
  return `${robot}`
}

export const generate = () => {
  var grammar = tracery.createGrammar({
    origin: [
      '#eam#'
    ],
    eam: [
      'SKYKING SKYKING DO NOT ANSWER #codeWord# TIME #time# AUTHENTICATION #nato# #nato#'
    ],
    codeWord: [
      'BILBO',
      'GANDALF',
      'NAZGUL',
      'GOLLUM',
      'MORDOR'
    ],
    time: [
      '22',
      '34',
      '19'
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
    ]
  })

  grammar.addModifiers(tracery.baseEngModifiers)
  return grammar.flatten('#origin#')
}
/* eslint-enable quotes */
