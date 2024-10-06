export interface Wallpaper {
    url: string;
    name: string;
}
interface FullWallpaper extends Wallpaper {
    liked: boolean;
    suggested:boolean;
    library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper []{
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.suggested);
}
export function useLikedWallpapers(): FullWallpaper []{
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.liked);
}
export function useLibraryWallpapers(): FullWallpaper []{
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.library);
}
export function useWallpapers(): FullWallpaper[] {
    return [{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/1gxh4lcFR8-304kyluHGRw",
        "name":"Square",
        liked: true ,
        suggested:true ,
        library: false,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/6bPjiUQVSaud-6eoLsxSNg",
        "name":"Heritage",
        liked: true ,
        suggested:false ,
        library: true,
    },{       
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/G3q6JDFsQOKYnQVExpIhPw",
        "name":"late night",
        liked: false ,
        suggested:true ,
        library: false,
    },
    {
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/p5vay64YSYeQcsd_EW0lAA",
        "name":"Sea Horse",
        liked: false ,
        suggested:true ,
        library: false,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/lk97pXC_SGm10CslWGQmOA",
        "name":"Futuristic Ship",
        liked: false ,
        suggested:true ,
        library: false,
    },{       
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/XeMJXUgoT4u1DiC2MihJkQ",
        "name":"Cat",
        liked: true ,
        suggested:false ,
        library: true,
    },
    {
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/4AN_v0_CTVSTIy_I2rbdkQ",
        "name":"Exposure",
        liked: true ,
        suggested:true ,
        library: false,
    },{
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/uplFB5OWSQaVy3YG2ssC2w",
        "name":"Random",
        liked: false ,
        suggested:true ,
        library: false,
    },{       
        url:"https://ideogram.ai/assets/progressive-image/balanced/response/G3q6JDFsQOKYnQVExpIhPw",
        "name":"Women on Train",
        liked: true ,
        suggested:true ,
        library: false,
    }
]
}