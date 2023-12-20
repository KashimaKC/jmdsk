import { header } from "../../styles/styles"
import { Button, createTheme, ThemeProvider } from "@mui/material"
import Image from "next/image"
import Clock from "../clock"
import TodayW from "../todayw"
import { invoke } from '@tauri-apps/api/tauri'
import React, { useState, useEffect, FC } from "react"
import { FaCloudSun, FaHouseUser, FaSlidersH, FaSatellite, FaListOl } from "react-icons/fa"
import colors from "../../styles/colors.json"

interface NavProps {
    setPageState: React.Dispatch<React.SetStateAction<String>>;
}

const Header:FC<NavProps> = ( { setPageState }) => {

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

                    {/* 
                    
                        home page button 
                        
                    */}
                    <Button 
                        variant="contained" 
                        sx={{width: 100, backgroundColor: colors.indigo_dye}}
                        onClick={() => setPageState("Home")}
                    >
                        <FaHouseUser style={{fontSize: 30}} />
                    </Button>

                    {/* 
                    
                        weather page button 
                        
                    */}
                    <Button 
                        variant="contained"
                        sx={{width: 100, backgroundColor: colors.indigo_dye}}
                        onClick={() => setPageState("Weather")}
                    >
                        <FaCloudSun style={{fontSize: 30}} />
                    </Button>

                    {/* 
                    
                        todo list page button 
                        
                    */}
                    <Button 
                        variant="contained"
                        sx={{width: 100, backgroundColor: colors.indigo_dye}}
                        onClick={() => setPageState("TodoList")}
                    >
                        <FaListOl style={{fontSize: 30}} />
                    </Button>

                    {/* 
                    
                        space page button 
                        
                    */}
                    <Button 
                        onClick={() => setPageState("Space")}
                        variant="contained"
                        sx={{width: 100, backgroundColor: colors.indigo_dye}}
                    >
                        <FaSatellite style={{fontSize: 30}} />
                    </Button>

                    {/* 
                    
                        settings page button 
                        
                    */}
                    <Button 
                        onClick={() => setPageState("Settings")}
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