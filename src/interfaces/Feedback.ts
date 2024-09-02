export interface FeedbackBlock {
    inputType: string,
    variants?: Variant[],
    placeholder: string,
    name: string,
    description: string,
    fallbackName: string,
    savingData?: boolean
}
export interface FeedBackI {
    _id: string,
    name: string,
    blocks: FeedbackBlock[],
    products: string[]
}
export interface Variant {
    name: string,
    _id: string
}
// inputType: {
//     type: String,
//     enum: ['radio', 'input', 'textarea']
// },
// variants: [
//     {
//         name: String,
//     }
// ],
//     placeholder: String,
//     name: String,
//     description: String,
//     savingData: Boolean