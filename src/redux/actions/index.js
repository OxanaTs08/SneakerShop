export const DELETE_ITEM = 'DELETE_ITEM'

export const SAVE_CART_LIST = 'SAVE_CART_LIST'




export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: id
})

export const saveCartList = (items) => ({
    type: SAVE_CART_LIST,
    payload: items
})



