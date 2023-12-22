'use client';
import { FC, useState, useEffect } from "react";
import { FaXmark, FaRegWindowMinimize } from "react-icons/fa6";
import colors from "../styles/colors.json"
import Image from "next/image";
import { darkenButton } from "@/functions/darkenButton";
import { lightenButton } from "@/functions/lightenButton";
import { WebviewWindow } from "@tauri-apps/api/window";

//#67aadf

const Titlebar:FC = () => {

    const [appWindow, setAppWindow] = useState<WebviewWindow | undefined>()

    async function windowSetup() {
        const appWindow: any = (await import('@tauri-apps/api/window')).appWindow
        setAppWindow(appWindow)
    }

    useEffect(() => {
        windowSetup()
    })

    if (appWindow !== undefined) {
        return (
            <div data-tauri-drag-region style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundImage: "linear-gradient(to right, #67aadf, #0b64b8)",
                userSelect: 'none',
                display: 'flex',
                height: 15,
            }}>
                <Image 
                    src="/watanabe-you-icon.png" 
                    width={14} height={14} 
                    alt="" 
                    style={{filter: 'brightness(0%)', marginLeft: 2}}
                />
                <div 
                    style={{marginLeft: 'auto', transitionDuration: '0.5s'}}
                    onMouseEnter={(e) => darkenButton(e, '#002d57')}
                    onMouseLeave={(e) => lightenButton(e, 'initial')}
                    onClick={() => appWindow?.minimize()}
                >
                    <FaRegWindowMinimize 
                        style={{
                            color: 'black', 
                            marginTop: -10, 
                            pointerEvents: 'none', 
                            marginRight: 2,
                            marginLeft: 2,
                        }}
                    />
                </div>
                <div
                    style={{transitionDuration: '0.5s'}}
                    onClick={() => appWindow?.close()}
                    onMouseEnter={(e) => darkenButton(e, '#002d57')}
                    onMouseLeave={(e) => lightenButton(e, 'initial')}
                >
                    <FaXmark 
                        style={{ 
                            color: 'black', 
                            marginRight: 2, 
                            marginLeft: 2, 
                            pointerEvents: 'none' 
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Titlebar