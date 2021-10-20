/* eslint-disable quotes */

var tracery = require('tracery-grammar')

export const actionString = (robot: string) => {
  return `${robot}`
}

export const generate = () => {
  var grammar = tracery.createGrammar({
    origin: [
      '#eam#',
      '#soundEffect#! You watch #visualCues.a# #robot# rolls off the assembly line that #activities#.',
      'You see #visualCues.a# #robot# roll off the assembly line. A part of you wishes you could adopt it for yourself.',
      'You watch as #visualCues.a# #robot# is made.',
      'You watch as #robot.a# that #activities# is made.'
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
