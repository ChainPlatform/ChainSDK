import { Dimensions } from 'react-native';
import mobileCheck from '../helpers/DeviceDetect';

const DESKTOP = mobileCheck.isMobile ? false : true;
const entireScreenWidth = Dimensions.get('window').width;
const SCREEN_WIDTH = DESKTOP && entireScreenWidth >= 1440 ? 1440 : entireScreenWidth;
const screenWidth = DESKTOP ? Dimensions.get('window').width : 375;
const REM = entireScreenWidth / screenWidth;
const barHeight = DESKTOP ? (57 * REM) : (50 * REM);

export default {
    HEIGHT: Dimensions.get('window').height,
    WIDTH: Dimensions.get('window').width,
    SCREEN_WIDTH: SCREEN_WIDTH,
    DESKTOP: DESKTOP,
    REM: REM,
    barHeight: barHeight,
    headerHeight: mobileCheck.os == "mini_app" ? { height: 39 * REM } : { height: barHeight },
    headerRightContainerStyle: mobileCheck.os == "mini_app" ? { paddingRight: 80 * REM } : {},
    image_course_width: 356,
    image_course_height: 267,
    aspectRatio: 16 / 9,
    small_logo: 1 / 1,
    four_three: 4 / 3,
    six_five: 6 / 5,
    logo: 96 / 40,
    banner: 1200 / 600,
    image_course_rate: 9 / 16,
    base_banner_width: 345,
    base_banner_height: 195,
    image_banner_rate: 195 / 345,
    activeOpacity: 0.8,
    fw800: "800",
    fw400: "400",
    fw500: "500",
    fw600: "600",
    fw700: "700",
    flexstart: 'flex-start',
    flexend: 'flex-end',
    lineThrough: 'line-through',
    flexWrap: 'wrap',
    center: "center",
    left: "left",
    right: "right",
    hidden: "hidden",
    fwNormal: 'normal',
    fwMedium: 'medium',
    fwBold: 'bold',
    w20pc: "20%",
    w30pc: "30%",
    w40pc: "40%",
    w45pc: "45%",
    w50pc: "50%",
    w80pc: "80%",
    w85pc: "85%",
    w90pc: "90%",
    w92pc: "92%",
    w100pc: "100%",
    w130pc: "130%",
    w150pc: "150%",
    absolute: "absolute",
    uppercase: "uppercase",
    spaceBetween: "space-between",
    mw500: 500 * REM,
    flexRow: 'row',
    flexCol: 'column',
    textUnderline: 'underline',
    textItalic: "italic",
    justify: 'justify',
    button: {
        marginLeft: 20 * REM,
        marginRight: 20 * REM,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5 * REM,
    },
    buttonTitle: {
        fontSize: 15 * REM,
        padding: 11 * REM,
        fontWeight: 'bold'
    },
    label: {
        marginTop: 10 * REM,
        fontWeight: '500',
        fontSize: 14 * REM,
        marginBottom: 3 * REM,
        marginLeft: 20 * REM
    },
    textInput: {
        padding: 10.5 * REM,
        marginRight: 20 * REM,
        marginLeft: 20 * REM,
        borderRadius: 5 * REM,
        color: "#333333",
        fontSize: 14 * REM,
        borderWidth: 1.5 * REM,
        borderColor: '#DADADA80'
    },
    auto: 'auto',
    base_desktop: 767,
    split_desktop: 991,
    wide_split_desktop: 1439,
    base: (100 * (335 * REM) / (375 * REM)) + "%",
    main_container: {
        width: "100%",
        maxWidth: 500 * REM,
        flex: 1,
        margin: 0,
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: 'flex-start'
    },
    container_text: {
        width: 375 * REM,
        alignItems: 'flex-start',
        marginTop: 20 * REM,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5 * REM,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 11,
    },
    textShadow: {
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: -1 * REM, height: 2 * REM },
        textShadowRadius: 10
    }
}

export function setSize(size) {
    return size * REM;
}