import {configureStore} from "@reduxjs/toolkit"
import { LocalData } from "./Reducer"
const store= configureStore({
    reducer:{
        Local :LocalData
    }
})
export default store 