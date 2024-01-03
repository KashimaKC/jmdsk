import { FC } from "react"
import { banner } from "../styles/styles"
import bannermod from "../styles/modules/banner.module.css"
import Image from "next/image"

const Banner:FC = () => {
    return (
        <div style={banner.bannerContainer}>
            {/* first years */}
            <Image 
                src={"/icons/kurosawa-ruby-icon.png"}
                height={20}
                width={20}
                alt=""
                className={bannermod.slide}
                style={{position: 'relative'}}
            />
            <Image 
                src={"/icons/kunikida-hanamaru-icon.png"}
                height={20}
                width={20}
                alt=""
                className={bannermod.slide}
                style={{position: 'relative', animationDelay: '1s'}}
            />
            <Image 
                src={"/icons/tsushima-yoshiko-icon.png"}
                height={20}
                width={20}
                alt=""
                className={bannermod.slide}
                style={{position: 'relative', animationDelay: '2s'}}
            />
            {/* second years */}
            <Image 
                src={"/icons/takami-chika-icon.png"}
                height={20}
                width={20}
                alt=""
                className={bannermod.slide}
                style={{position: 'relative', animationDelay: '3s'}}
            />
            <Image 
                src={"/icons/watanabe-you-icon.png"}
                height={20}
                width={20}
                alt=""
                className={bannermod.slide}
                style={{position: 'relative', animationDelay: '4s'}}
            />
            <Image 
                src={"/icons/sakurauchi-riko-icon.png"}
                height={20}
                width={20}
                alt=""
                className={bannermod.slide}
                style={{position: 'relative', animationDelay: '5s'}}
            />
            {/* third years */}
            <Image 
                src={"/icons/kurosawa-dia-icon.png"}
                height={20}
                width={20}
                alt=""
                className={bannermod.slide}
                style={{position: 'relative', animationDelay: '6s'}}
            />
            <Image 
                src={"/icons/matsuura-kanan-icon.png"}
                height={20}
                width={20}
                alt=""
                className={bannermod.slide}
                style={{position: 'relative', animationDelay: '7s'}}
            />
            <Image 
                src={"/icons/ohara-mari-icon.png"}
                height={20}
                width={20}
                alt=""
                className={bannermod.slide}
                style={{position: 'relative', animationDelay: '8s'}}
            />
        </div>
    )
}

export default Banner