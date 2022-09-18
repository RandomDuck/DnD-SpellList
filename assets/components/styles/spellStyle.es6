import { StyleSheet } from "react-native";
export default StyleSheet.create({
  white: { color: '#fff' },
  black: { color: '#000' },
  spellName: {
    textAlign: 'center',
    flexWrap: 'wrap',
    width: '64%'
  },
  header: {
    backgroundColor: '#353',
    margin: 10,
    padding: 10,
    color: '#fff',
    textAlign: 'center',
    borderRadius: 10
  },
  imageDisplay: {
    height: 40,
    width: 40,
    resizeMode: 'contain'
  },
  spell: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    width: '48%',
    borderRadius: 12,
    marginLeft: '1%',
    marginRight: '1%',
    marginBottom: '1%',
    borderColor: '#fa0',
    borderWidth: 0.5
  },
  spellLarge: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    width: '96%',
    borderRadius: 12,
    marginLeft: '1%',
    marginRight: '1%',
    marginBottom: '1%',
    borderColor: '#fa0',
    borderWidth: 0.5
  },
  flexRow: { flexDirection: 'row' },
  evocation: { backgroundColor: '#900' },
  conjuration: { backgroundColor: '#cb0' },
  transmutation: { backgroundColor: '#606' },
  necromancy: { backgroundColor: '#222' },
  divination: { backgroundColor: '#008' },
  enchantment: { backgroundColor: '#08a' },
  illusion: { backgroundColor: '#4a5' },
  abjuration: { backgroundColor: '#0a0' },
  description: { height: '60%' },
  imageView: {
    height: 80,
    width: 80,
    resizeMode: 'contain'
  },
  spellViewTop: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  spellView: {
    borderRadius: 20,
    padding: '4%',
    margin: '5%',
    height: '90%',
    borderColor: '#f80',
    borderWidth: 1
  },
})
