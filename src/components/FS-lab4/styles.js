import { Platform, StyleSheet } from 'react-native';

    const iosbtnStyle = { color: 'red' };
    const androidbtnStyle = { color: 'red' };
    
const styles = StyleSheet.create( {

    

    container: {
        
        alignSelf: 'stretch',
        // backgroundColor: 'rgba(255, 255, 255, 0.9)', // Set background color with reduced opacity
        backgroundColor : 'white',
        margin: 6,
        padding: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        width: 320,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 7, // For Android
    },
    secondCon : {
        flex : 1,
        flexDirection : 'row',
    },
    thirdCon : {
        flex : 1,
        marginTop : 10,
        marginBottom : 10
    },
    dateView : {
        flex : 1
    },
    statusCon : {
        flex: 2,
        alignItems : 'flex-end'
    },
    idTaskStyle : {
        fontSize : 10,
        marginTop : 13,
        color : 'gray'
    },
    txtStat : {
        fontSize : 12
    },
    txtDate : {
        fontSize : 10
    },
    txtDateFormat : {
        fontSize : 10
    },

    // MODAL STYLE PROPERTIES

    centeredView : {
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : 'rgba(52, 52, 52, 0.3)',
    },
    modalView : {
        width           : 300,
        backgroundColor : 'white',
        borderRadius    : 50,
        padding         : 25,
        alignSelf       : 'center',
        shadowColor     : '#000',
        // shadowOffset : {
        //     width       : 1,
        //     height      : 200,
        // },
        // shadowOpacity   : 0.70,
        // shadowRadius    : 5,
        elevation       : 70,
        flexBasis       :'auto'
    },
    modalBtnX : {
        width : 100
    },
    btnX : {

        borderRadius : 10,
        // color : Platform.OS === 'ios' ? iosbtnStyle : androidbtnStyle
        color : 'red'
    
    }


});

export default styles