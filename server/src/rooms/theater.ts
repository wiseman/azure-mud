/* eslint-disable no-useless-escape */
export const theater = {
  id: 'theater',
  displayName: 'Theater',
  shortName: 'the theater',
  // kawa: fixed typo, changed src to Twitch per issue #89. Note 'parent' will need to be changed if we change domains, see issue #88. Twitch documentation about 'parent': https://discuss.dev.twitch.tv/t/twitch-embedded-player-updates-in-2020/23956
  description: `A large, dark room with many large screens on the walls, like the war
  room from Dr. Strangelove. For some reason there is a 12 foot tall
  plastic skeleton standing here.<br/><br/>
  
  The largest screen is showing a live feed from Information Zulu,
  combining live ATC radio with ADS-B data in a simulated LAX
  airport.<br/><br/>
  
  There are a few dozen flimsy metal chairs you can sit in,
  plus some comfy couches in the back.<br/><br/>
  
  You can return to the [[hall]]. Or if you'd like to speak to one of
  our speakers after their talk, you can head to breakout rooms:
  [[Warrior->warrior]], [[Mage->mage]], [[Rogue->rogue]], or
  [[Tourist->tourist]]. (Check the "Happening Now" button on the left
  for speaker room assignments!)
  
  <br/>
  <br/>
  <a href="stream.html" onClick="window.open(\'stream.html#\' + window.getComputedStyle(document.body).getPropertyValue(\'background-color\'), \'stream\', \'width=560,height=460\'); return false">Pop Out Stream</a>. <a href="https://www.streamtext.net/player?event=RoguelikeCelebration" target="_blank">Pop Out Live Captions</a>.<br/>
  `,
  noMediaChat: true,
  hasNoteWall: true,
  noteWallData: {
    roomWallDescription: 'There is a whiteboard set up to the side with "SPEAKER QUESTIONS" written at the top. "Questions for speakers not questions from speakers!" is hastily scrawled below it.',
    noteWallButton: 'Write a question',
    addNoteLinkText: 'add a question',
    addNotePrompt: 'What would you like to ask?',
    noteWallDescription: 'Questions for the current speaker, ranked by upvotes.'
  }
}

export const warrior = {
  id: 'warrior',
  displayName: 'Breakout room: Warrior\'s Training Grounds',
  shortName: 'Warrior Breakout',
  description: 'Stout training dummies, plenty of armour, a large variety of weapons - polearms with funny names, extremely sharp swords. A poster on the wall describes creatures that should not be attacked with blades - hydras, puddings. Or you can head back to the [[theater]].'
}

export const mage = {
  id: 'mage',
  displayName: 'Breakout room: Mage\'s Circle',
  shortName: 'Mage Breakout',
  description: 'Ever-changing sigils on the ground, pulsing with an eerie glow. A cauldrun bubbling in the corner, being stirred continuously by a capybara with a purple cape. Or you can head back to the [[theater]].'
}

export const rogue = {
  id: 'rogue',
  displayName: 'Breakout room: Rogue\'s Hideaway',
  shortName: 'Rogue Breakout',
  description: 'A mostly dark room; what you can see looks like scrolls in incomprehensible codes, and cloaks that flicker in and out of view. In another corner, targets, plus bows and crossbows and plenty of arrows and bolts. Or you can head back to the [[theater]].'
}

// Really not sure what the GNU Terry Pratchett should do here, but want to acknowledge it.
export const tourist = {
  id: 'tourist',
  displayName: 'Breakout room: Tourist\'s Gate',
  shortName: 'Tourist Breakout',
  description: 'Shockingly modern - the gate to an airport. Two very good dogs are manning the desk. One dog wants to give you a [[Platinum Yendorian Express Card->item]]. The other has a dog tag labeled "GNU Terry Pratchett" and wants you to tell it about the clacks. A nearby kiosk is selling aloha shirts, staffed by an argyle terrier. Despite there being tons of travelers milling about the airport, you can only see a dozen shirts at the terrier\'s shack, and sadly none of them are your size. Or you can head back to the [[theater]].'
}
