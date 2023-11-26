import colors from './colors.json'

const globals = {
    global : {
        backgroundColor: colors.oxford_blue,
        minHeight: '100vh',
        display: 'flex'
    }
}

const header = {
    headerContainer : {
        display: 'flex',
        backgroundColor: colors.indigo_dye,
        width: '30vw',
        margin: 20,
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
        marginTop: 50
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
        color: colors.white
    }
}

const journal = {
    journalContainer : {
        display: 'flex',
        backgroundColor: colors.penn_blue,
        width: '30vw',
        margin: 20,
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
        width: '30vw',
        margin: 20,
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