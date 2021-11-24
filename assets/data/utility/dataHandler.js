const spellTextColor = {
  abjuration: 'black',
  conjuration: 'black',
  divination: 'white',
  enchantment: 'black',
  evocation: 'white',
  illusion: 'black',
  necromancy: 'white',
  transmutation: 'white'
}

const spellTypes = [
  'abjuration',
  'conjuration',
  'divination',
  'enchantment',
  'evocation',
  'illusion',
  'necromancy',
  'transmutation'
]

const classTypes = [
  'bard',
  'cleric',
  'druid',
  'paladin',
  'ranger',
  'sorcerer',
  'warlock',
  'wizard'
]


const spellImages = {
  abjuration: require('../../_img/SpellBackgrounds/abjuration.png'),
  conjuration: require('../../_img/SpellBackgrounds/conjuration.png'),
  divination: require('../../_img/SpellBackgrounds/divination.png'),
  enchantment: require('../../_img/SpellBackgrounds/Enchantment.png'),
  evocation: require('../../_img/SpellBackgrounds/evocation.png'),
  illusion: require('../../_img/SpellBackgrounds/illusion.png'),
  necromancy: require('../../_img/SpellBackgrounds/necromancy.png'),
  transmutation: require('../../_img/SpellBackgrounds/transformation.png')
};

const backgroundImg = require('../../_img/Background.png');
const spellList = {
  spells: require('./5Espells.json'),
  titles: ['Cantrips', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6', 'Level 7', 'Level 8', 'Level 9', 'All'],
  editionName: '5e'
}
const { donateUrl, userSettings, defaultUserSettings } = require('./settings.json');
if (!(Object.keys(userSettings).length > 0)) {
  userSettings = defaultUserSettings;
}

export { spellImages, classTypes, spellTypes, backgroundImg, spellTextColor, userSettings, donateUrl, defaultUserSettings, spellList }