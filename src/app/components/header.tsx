import { header } from "../styles/styles"
import { Button } from "@mui/material"
import Image from "next/image"
import Clock from "./clock"
import { invoke } from '@tauri-apps/api/tauri'
import { useState, useEffect } from "react"

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
                    <Button variant="contained">Weather</Button>
                </div>
            </div>
        </div>
    )
}

export default Header