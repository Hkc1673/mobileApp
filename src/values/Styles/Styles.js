import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { myColors } from "../Colors/Colors"

export const shadowStyle = {
    shadowColor: myColors.shadowColor,
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    elevation: 5,
};

export const SplashScreenStyles = {
    container: {
        flex: 1,
        backgroundColor: myColors.mainColor,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        color: myColors.titleTextColor,
        fontSize: hp(3),
        fontWeight: 'bold',
        letterSpacing: 4,
    },
    linearButton: {
        width: wp(85),
        height: hp(6),
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
    },
    buttonText: {
        color: myColors.lightTextColor,
        fontWeight: 'bold',
        fontSize: hp(2),
    },
    sigupButton: {
        width: wp(85),
        height: hp(6),
        borderWidth:2,
        borderColor:myColors.gradientColor3,
        marginVertical:10,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupBtnText: {
        color: myColors.gradientColor3,
        fontWeight: 'bold',
        fontSize: hp(2),
    }
}

export const SignInStyles = {
    inputContainer: {
        flex: 1
    },
    errorMsg: {
        color: myColors.errorColor,
        fontSize: hp(1.8),
        marginLeft:hp(1)
    }
}

export const AlertStyles = {
    container: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: hp(3),
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'left',
        color: myColors.errorColor,
    },
    titleText: {
        fontSize: hp('1.8%'),
        fontWeight: '600',
        fontStyle: 'normal',
        letterSpacing: 0.5,
        textAlign: 'left',
        color: myColors.titleTextColor,
    },
}

export const pageContainerStyle = {
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1
};

export const inputStyle = ({
    container: {
        marginVertical: 5
    },
    titleText: {
        marginTop: 3,
        fontSize: hp("1.8%"),
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "left",
        color: myColors.titleTextColor,
    },
    inputText: {
        color: "#aeaeae",
    },
    picker: {
        marginVertical: 5,
        borderStyle: "solid",
        borderWidth: 1.5,
        borderColor: myColors.mainColor,
        backgroundColor: "white",
        borderRadius: 5,
        height: hp(5.5),
        justifyContent: 'center',
        ...shadowStyle
    }
})