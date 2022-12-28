import { StyleSheet, Dimensions } from "react-native"


const width = Dimensions.get("window").width
const height = Dimensions.get("window").height


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "row", 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: 0,
      },
      imageBackground: {
          opacity: 1,
          height: "100%",
          width: "100%",
          backgroundColor: "#d4d4d2",
          overflow: "hidden",
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
      },
      paczkiImageBackground: {
        opacity: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
        overflow: "hidden",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
    },
       itemHeader: {
        opacity: 1,
        color: "white",
        fontSize: 39,
        marginTop: 10,
        textAlign: "center",
        fontWeight: "bold",
       },
      image1: {
        flexDirection: "row",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: "white", 
        marginHorizontal: 0,
        marginTop: 0,
        overflow: "hidden",
      },
      image2: {
        flexDirection: "row",
        justifyContent: "center",
        width: 330,
        height: 330,
        borderRadius: 200,
        borderWidth: 7,
        borderColor: "white",
        marginHorizontal: 25,
        marginBottom: 0,
      },
       image3: {
        flexDirection: "row",
        justifyContent: "center",
        width: 330,
        height: 330,
        borderRadius: 200,
        borderWidth: 7,
        borderColor: "white",
        marginHorizontal: 25,
        marginBottom: 0,
     },
      // modal display position on screen
      centeredView: {
       flexDirection: "row",
       justifyContent: "center",
       alignItems: "center",
       marginRight: 10,
       marginLeft: 0,
       marginTop: 0,
     },
     // view when you open modal
     areaView: {
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "transparent",
       width: width,
       height: height,
       elevation: 3.3,
       overflow: "visible",
       marginBottom: 50
     },
     openView: {
       backgroundColor: "transparent",
     },
      itemText: {
        fontSize: 25,
        letterSpacing: 1,
        padding: 12,
        color: "black",
        borderRadius: 10,
        marginVertical: -5,
        alignItems: "center",
        textAlign: "center"
       },
       ratingText: {
        fontSize: 18,
        letterSpacing: 1,
        padding: 12,
        color: "black",
        borderRadius: 10,
        marginVertical: -5,
        alignItems: "center",
        textAlign: "center"
       },
       caloriesText: {
        fontSize: 18,
        letterSpacing: 1,
        padding: 12,
        color: "black",
        borderRadius: 10,
        marginVertical: -5,
        alignItems: "center",
        textAlign: "center"
       },
    //  addItemButton: {
    //   justifyContent: "center",
    //   alignItems: "center",
    //   borderRadius: 10,
    //   borderWidth: 2,
    //   borderColor: "turquoise",
    //   padding: 10,
    //   width: 120,
    //   elevation: 3,
    //   marginTop: 20,
    //   backgroundColor: "white",
    // },
     dotIndicator: {
      margin: 5, 
      marginBottom: 0, 
      width: 25, 
      height: 25, 
      backgroundColor: "blue", 
      borderRadius: 100
     },
     orderButton: {
       justifyContent: "center",
       alignItems: "center",
       borderRadius: 5,
       padding: 10,
       width: 100,
       height: 50,
       elevation: 2,
       marginVertical: 50,
       backgroundColor: "white",
     },
     textStyle: {
       color: "black",
       textAlign: "center",
     },
     titleText: {
       fontSize: 20,
       color: "black",
       textAlign: "center",
       marginTop: 100
     },
     text: {
       color: "white",
       justifyContent: "center",
       textAlign: "center",
       alignItems: "center",
       marginHorizontal: 5,
       marginBottom: 10,
       marginTop: 15,
       backgroundColor: "transparent",
       padding: 10,
       borderRadius: 5,
       borderWidth: 1,
       borderColor: "white",
     },
})

export default styles