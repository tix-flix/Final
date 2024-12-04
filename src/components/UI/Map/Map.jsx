import React from 'react'

function Map({wid, hei}) {
  const map = `<div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс Карты</a><a href="https://yandex.com/maps/geo/2228453653/?ll=12.812679%2C47.913470&utm_medium=mapframe&utm_source=maps&z=12.45" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.com/map-widget/v1/?ll=12.812679%2C47.913470&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyMjI4NDUzNjUzEihEZXV0c2NobGFuZCwgQmF5ZXJuLCBUcmF1bnN0ZWluLCBQZXR0aW5nIgoNvQBNQRVlpz9C&z=12.45" width=${wid} height=${hei} frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>`
  return (
    <div dangerouslySetInnerHTML={{__html: map}}></div>
  )
}

export default Map