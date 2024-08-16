export interface SubCategoryI {
    name: string,
    _id: string
}
export interface SubCategoryIState {
    name: string,
    _id: string,
    mainCategoryName: string
}


export interface CategoryI {
    icon: string,
    name : string,
    subCategories: SubCategoryI[],
    _id: string
}