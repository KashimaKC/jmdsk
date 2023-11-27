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
        flexDirection: 'column'
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
        width: 300,
        height: 421,
        backgroundColor: colors.cerulean,
        flexDirection: 'column'
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
        flexDirection: 'column'
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
        margin: 10,
        flexDirection: 'column',
        borderRadius: 5
    }
}

export { header, globals, journal, logs }