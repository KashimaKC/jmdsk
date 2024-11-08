import colors from './colors.json'

const globals = {
    global : {
        backgroundColor: colors.oxford_blue,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
    }
}

const header = {
    headerContainer : {
        display: 'flex',
        backgroundColor: colors.indigo_dye,
        width: '40vw',
        margin: 10,
        padding: 5,
        borderRadius: 5,
        flexDirection: 'column',
        minWidth: '40vw',
        maxWidth: '40vw',
        marginTop: 20,
        backgroundImage: `linear-gradient(to bottom, ${colors.indigo_dye}, #03194a)`
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
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 2,
        marginRight: 2
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
        width: '35vw',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'column',
        minWidth: '25vw',
        marginTop: 20,
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
        opacity: 1,
        marginLeft: 2,
        marginRight: 2
    },
    logDateSeparator : {
        backgroundColor: colors.oxford_blue,
        marginTop: 20,
        padding: 10,
        color: 'white',
        borderRadius: 5,
        marginRight: 5,
        paddingRight: 30
    },
    separatorContainer : {
        display: 'flex'
    },
    dateGraphic : {
        backgroundColor: colors.oxford_blue,
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        flexGrow: 1,
        marginLeft: 5,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url("/wavesNegative-02.svg")',
        backgroundPosition: '0% 0%',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
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
        flexDirection: 'column',
        marginTop: 20
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
        overflowY: type === 'three' ? 'initial' : 'scroll',
        marginTop: type === 'full' ? 20 : type === 'three' ? 20 : 10
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

const space = {
    spaceContainer : {
        display: 'flex',
        backgroundColor: colors.indigo_dye,
        width: '55vw',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'column',
        marginTop: 20
    }
}

const banner = {
    bannerContainer : {
        backgroundColor: colors.oxford_blue,
        marginTop: 10,
        padding: 5,
        overflow: 'hidden',
        borderRadius: 5
    },
    bannerItem : {

    }
}

const vocab = {
    vocabContainer : {
        display: 'flex',
        backgroundColor: colors.cerulean,
        margin: 10, 
        padding: 10,
        width: '60vw',
        marginTop: 20,
        borderRadius: 5,
        flexDirection: 'column'
    },
    entryContainer : {
        backgroundColor: colors.penn_blue,
        padding: 5,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    entryField : ( basis: string ) => ({
        flexBasis: basis,
        margin: 5
    }),
    cardContainer : {
        backgroundColor: colors.oxford_blue,
        padding: 10,
        margin: 5,
        borderRadius: 3,
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    categorySelector : {
        backgroundColor: colors.penn_blue,
        height: 40,
        marginTop: 10,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center'
    }
}

export { 
    header, globals, journal, 
    logs, currentWeatherStyles, weatherPage,
    todo, space, banner, vocab
}