import React, { FC } from 'react'
import { SubCategoryIState } from '../../../../interfaces/Category'
import { Pencil, Trash } from '../Svg'
import s from '../CategoriesAndProducts.module.scss';
import axios from 'axios';
import { url } from '../../../../core/fetch';
import { useSWRConfig } from 'swr';

interface SubCategoryItemI {
    setCurrentCategory: (a : SubCategoryIState) => void,
    name: string,
    mainCategoryName: string,
    _id: string,
    currentCatgeoryId: string | undefined
    inModal?: boolean
    itemId: string


}

const SubCategoryItem : FC<SubCategoryItemI> = ({setCurrentCategory, name, mainCategoryName, _id, currentCatgeoryId, inModal, itemId}) => {
    const {mutate} = useSWRConfig()
    const [isUpdating, setIsUpdating] = React.useState(false)
    const [newName, setNewName] = React.useState(name)
    
    const deleteSubCategory = async (id : string, name : string) => {
        const token = localStorage.getItem('token')
        await axios.delete(`${url}/api/category/sub/${id}`, {
            data: {
                name,
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        mutate(`${url}/api/categories`)
    }
    const renameSubCategory = async (id : string, newName : string, oldName : string) => {
        const token = localStorage.getItem('token')
        await axios.put(`${url}/api/category/sub/${id}`, {
            name: oldName, newName
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        mutate(`${url}/api/categories`)
    }
    const stopUpdating = () => {
        renameSubCategory(_id, newName, name)
        setIsUpdating(false)
    }
  return (
    <div onClick={isUpdating ? () => null : () => {
        setCurrentCategory({name, mainCategoryName, _id: itemId})
        console.log(currentCatgeoryId)
    }} key={name} className={`${s.sub} ${currentCatgeoryId === itemId ? s.activeCategory : ''}`}>
        {isUpdating ? <input value={newName} onChange={(e) => setNewName(e.target.value)}/> : name}
        {inModal && <div onClick={(e) => {
            e.stopPropagation()
        }} className={s.deleteIcon2}>{isUpdating ? <div onClick={() => stopUpdating()}>➕</div>: <div onClick={() => setIsUpdating(true)}><Pencil/></div>}<div onClick={() => deleteSubCategory(_id, name)}><Trash /></div></div>}
    </div>
  )
}

export default SubCategoryItem