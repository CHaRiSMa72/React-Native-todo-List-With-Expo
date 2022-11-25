import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        paddingTop: 15,
    },
    title: {
        fontSize: 30,

    },
    subtitle: {
        fontSize: 20,
        marginTop: 4,
        color: "#666"
    },
    input: {
        fontSize: 18,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#ddd",
        marginTop: 32,

    },
    buttonContainer: {
        backgroundColor: "lightgreen",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 6,
        alignItems: "center",
        marginTop: 8,
        alignSelf: "flex-end",
    },
    buttonText: {
        fontSize: 18,
    },
    divider: {
        height: 1,
        backgroundColor: "#ddd",
        marginVertical: 32,
    },
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#ddd",
        paddingVertical: 12,
    },
    taskText: { fontSize: 18, },
    taskDelete: { backgroundColor: "red", width: 23, height: 23, borderRadius: 13, justifyContent: "center", alignItems: "center", },
    taskDeleteText: { fontSize: 18, color: "white", },

});