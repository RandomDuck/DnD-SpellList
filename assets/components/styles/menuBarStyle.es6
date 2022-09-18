import { StyleSheet } from "react-native";
let radius = 20;
export default StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center"
  },
  hidden: { display: "none" },
  searchBar: {
    flex: 2,
    textAlign: "center",
    borderBottomLeftRadius: radius,
    color: "#fff"
  },
  levelSelect: {
    borderTopRightRadius: radius,
    flex: 1,
    justifyContent: "space-around",
    borderLeftWidth: 0
  },
  navBarCon: {
    width: '72%',
    alignItems: "center",
    zIndex: 12,
    elevation: 12
  },
  levelSelectText: {
    textAlign: "center",
    color: "#fff"
  },
  menuBar: {
    zIndex: 2,
    elevation: 2,
    backgroundColor: "#555",
    borderColor: "#000",
    borderWidth: 2
  },
  navButton: {
    padding: 20,
    backgroundColor: "#0f0"
  },
  menuBarCon: {
    flexDirection: "row",
    paddingHorizontal: "10%",
    paddingVertical: "3%",
    zIndex: 20,
    elevation: 20,
  },
  navBar: {
    borderWidth: 2,
    borderColor: '#111',
    backgroundColor: '#353',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: -20,
    flexDirection: "row",
    justifyContent: 'center',
    width: '100%'
  },
  selectorMain: { padding: '2%' },
  selector: {
    padding: '2%',
    backgroundColor: '#aaa',
    color: '#000',
    textAlign: 'center'
  },
  levelView: {
    zIndex: 14,
    elevation: 14,
    position: 'absolute',
    alignContent: 'center',
    width: '30%',
    right: '12%',
    top: 34,
    padding: '4%',
    paddingTop: 15,
    backgroundColor: '#333'
  }
})