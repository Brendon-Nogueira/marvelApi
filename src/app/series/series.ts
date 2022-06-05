export interface Series{
    title : string
    description : string
    startYear : number
    endYear : number
    rating : string
    thumnail : Image

}

export interface Image{
    path : string
    extension : string
}