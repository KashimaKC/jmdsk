import { FC, useEffect, useState } from "react";
import { NASA_KEY } from "../../../.secret/API_KEYS"
import Image from "next/image";
import { space } from "@/app/styles/styles";

const Space:FC = () => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        const gatherAPOD = async () => {
            let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
            setData(await response.json())
        }

        gatherAPOD()
    }, [])

    return (
        <div style={space.spaceContainer as React.CSSProperties}>
            <div style={{position: 'absolute', height: 500, width: 500}}>
                {
                    data !== undefined ? <Image src={data.hdurl} alt="" fill objectFit="contain" /> : <></>
                }
            </div>
        </div>
    )
}

export default Space