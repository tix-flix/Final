import React from 'react'
import st from './Map.module.css'

function Map({wid, hei}) {
  const map = `<div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс Карты</a><a href="https://yandex.com/maps/geo/vorkuta/1493624693/?ll=64.421166%2C66.601588&utm_medium=mapframe&utm_source=maps&z=6.2" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.com/map-widget/v1/?ll=64.421166%2C66.601588&mode=poi&poi%5Bpoint%5D=64.049673%2C67.493430&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDkzNjI0NjkzEjvQoNC-0YHRgdC40Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCa0L7QvNC4LCDQktC-0YDQutGD0YLQsCIKDakZgEIVrPyGQg%2C%2C&z=6.2" width=${wid} height=${hei} frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>`
  return (
    <div className={st.map} dangerouslySetInnerHTML={{__html: map}}></div>
  )
}

export default Map