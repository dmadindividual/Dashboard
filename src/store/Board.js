import { boardData } from '../data/data'
import {create} from 'zustand'  

const useBoard = create((set)=>({
    board: boardData,
    setboard: (board)=>set((state)=>({board}))



}))

export default useBoard