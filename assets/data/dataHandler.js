const spellTextColor={
    abjuration:"black",
    conjuration:"black",
    divination:"white",
    enchantment:"black",
    evocation:"white",
    illusion:"black",
    necromancy:"white",
    transmutation:"white"
}

const spellTypes=[
    "abjuration",
    "conjuration",
    "divination",
    "enchantment",
    "evocation",
    "illusion",
    "necromancy",
    "transmutation"
]

const classTypes=[
    "bard",
    "cleric",
    "druid",
    "paladin",
    "ranger",
    "sorcerer",
    "warlock",
    "wizard"
]

const spellImages={
    abjuration:require("../_img/SpellBackgrounds/abjuration.png"),
    conjuration:require("../_img/SpellBackgrounds/conjuration.png"),
    divination:require("../_img/SpellBackgrounds/divination.png"),
    enchantment:require("../_img/SpellBackgrounds/Enchantment.png"),
    evocation:require("../_img/SpellBackgrounds/evocation.png"),
    illusion:require("../_img/SpellBackgrounds/illusion.png"),
    necromancy:require("../_img/SpellBackgrounds/necromancy.png"),
    transmutation:require("../_img/SpellBackgrounds/transformation.png")
};

const backgroundImg=require("../_img/Background.png");
const spellList=require("./spells.json");
const settings=require("./settings.json");

export {spellImages,classTypes,spellTypes,spellList,backgroundImg,spellTextColor,settings}