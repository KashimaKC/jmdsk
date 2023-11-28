import { header } from "../styles/styles"
import { Button, createTheme, ThemeProvider } from "@mui/material"
import Image from "next/image"
import Clock from "./clock"
import TodayW from "./todayw"
import { invoke } from '@tauri-apps/api/tauri'
import { useState, useEffect } from "react"
import { FaCloudSun, FaHouseUser, FaSlidersH } from "react-icons/fa"
import colors from "../styles/colors.json"

const Header = () => {

    const [image, setImage] = useState("");

    const randomImage = async () => {

       let image: string = await invoke('select_random_image')

       if(image === 'failed') {
        image = await invoke('select_random_image')
       } else {
        setImage(image)
       }
    }

    useEffect(() => {
        randomImage()
    }, [])

    return(
        <div style={header.headerContainer as React.CSSProperties}>
            <div style={header.headerText}>Welcome to your dashboard, Joshua.</div>
            <div style={header.navContainer as React.CSSProperties}>
            </div>
            <div style={header.clockContainer as React.CSSProperties}>
                <Clock />
                <TodayW />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={header.imageContainer as React.CSSProperties}>
                    <Image src={`data:image/png;base64, ${image}`} alt="" width="300" height="421"/>
                    <Button
                        variant="contained"
                        onClick={randomImage}
                    >Refresh Card</Button>
                </div>
                <div style={header.pageNavContainer as React.CSSProperties}>
                    <Button 
                        variant="contained" 
                        sx={{width: 100, backgroundColor: colors.indigo_dye}}
                    >
                        <FaHouseUser style={{fontSize: 30}} />
                    </Button>
                    <Button 
                        variant="contained"
                        sx={{width: 100, backgroundColor: colors.indigo_dye}}
                    >
                        <FaCloudSun style={{fontSize: 30}} />
                    </Button>
                    <Button 
                        variant="contained"
                        sx={{width: 100, backgroundColor: colors.indigo_dye}}
                    >
                        <FaSlidersH style={{fontSize: 30}} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header