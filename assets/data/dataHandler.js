import {StyleSheet} from "react-native"

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

const classType=[
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
const styles=StyleSheet.create(require("./style.json"));

export {spellImages,styles,classType,spellTypes,spellList,backgroundImg}