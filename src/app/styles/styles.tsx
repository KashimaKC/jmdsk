import colors from './colors.json'

const globals = {
    global : {
        backgroundColor: colors.oxford_blue,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'space-between'
    }
}

const header = {
    headerContainer : {
        display: 'flex',
        backgroundColor: colors.indigo_dye,
        width: '40vw',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'column',
        minWidth: '40vw',
        maxWidth: '40vw'
    },
    headerText : {
        color: colors.white,
        fontSize: 20,
        padding: 10
    },
    navContainer : {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
    },
    imageContainer : {
        display: 'flex',
        alignSelf: 'center',
        flexDirection: 'column'
    },
    clockContainer : {
        display: 'flex',
        alignSelf: 'center',
        fontSize: 24,
        margin: 20,
        color: colors.white,
        flexDirection: 'column'
    },
    weatherContainer : {
        display: 'flex',
        alignSelf: 'center',
        color: colors.white,
        flexDirection: 'column',
        marginBottom: 10,
    },
    weatherCell : {
        fontSize: 12,
        margin: 15,
        padding: 13,
        textAlign: 'center'
    },
    pageNavContainer : {
        display: 'flex',
        width: 150,
        height: 421,
        backgroundColor: colors.cerulean,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5
    }
}

const journal = {
    journalContainer : {
        display: 'flex',
        backgroundColor: colors.penn_blue,
        width: '30vw',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'column'
    },
    journalHeaderText : {
        color: colors.white,
        fontSize: 20,
        padding: 10
    }
}

const logs = {
    logsContainer : {
        display: 'flex',
        backgroundColor: colors.indigo_dye,
        width: '25vw',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'column',
        minWidth: '25vw'
    },
    logHeaderText : {
        color: colors.white,
        fontSize: 20,
        padding: 10,
        marginBottom: 6
    },
    logCard : {  
        display: 'flex',
        backgroundColor: colors.cerulean,
        padding: 20,
        paddingRight: 0,
        marginTop: 20,
        borderRadius: 5,
        filter: 'drop-shadow(0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5))'
    },
    logViewContainer : {
        display: 'flex',
        backgroundColor: colors.cerulean,
        width: '30vw',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'column',
        transition: 'opacity 0.5s',
        opacity: 1
    }
}

const currentWeatherStyles = {
    weatherContainer : {
        display: 'flex',
        backgroundColor: colors.oxford_blue,
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
        textAlign: 'middle'
    }
}

const weatherPage = {
    weatherPageContainer : {
        display: 'flex',
        backgroundColor: colors.indigo_dye,
        width: '55vw',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'column'
    }
}

const todo = {
    todoContainer : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    todoSection : ( type: string ) => ({
        backgroundColor: type === 'three' ? colors.indigo_dye : colors.cerulean,
        width: type === 'half' ? '26vw' : type === 'three' ? '17vw' : '35vw',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        height: '45vh',
        overflowY: type === 'three' ? 'initial' : 'scroll'
    }),
    todoHeader : {
        backgroundColor: colors.penn_blue,
        color: 'white',
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        filter: 'drop-shadow(0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5))',
    },
    todoCard : (small: boolean) => ({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.oxford_blue,
        color: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: small ? '23.2vw' : '35vw',
        filter: 'drop-shadow(0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.5))'
    }),
    inputField : {
        display: 'flex',
        flexDirection: 'column',
        height: '40vh',
        marginTop: 10
    },
    itemContainer : {
        display: 'flex',
    }
}

export { 
    header, globals, journal, 
    logs, currentWeatherStyles, weatherPage,
    todo
}