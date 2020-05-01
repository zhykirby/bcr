/* eslint-disable indent */
import { Loading } from 'element-ui'

let loadingCount = 0
// eslint-disable-next-line init-declarations
let loading

const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: '努力加载中~',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}

const endLoading = () => {
    loading.close()
}

export const showLoading = () => {
    if (loadingCount === 0) {
        startLoading()
    }
    loadingCount++
}

export const hideLoading = () =>{
    if (loadingCount <= 0) {
        return
    }
    loadingCount--
    if (loadingCount === 0) {
        endLoading()
    }
}