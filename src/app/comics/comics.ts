export interface Comics{
    id : number
    title : string
    description : string
    thumbnail : Image
    
}

export interface Image {
    path : string
    extension : string
}