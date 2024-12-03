import React from 'react'

function Map({width, height}) {
  return (
    <div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps/10309/bishkek/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Бишкек</a><a href="https://yandex.com/maps/10309/bishkek/house/Y00YcAdmSUwOQFpofXR0d3RmbQ==/?ll=74.606735%2C42.857018&utm_medium=mapframe&utm_source=maps&z=17.2" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.com/map-widget/v1/?ll=74.606735%2C42.857018&mode=whatshere&whatshere%5Bpoint%5D=74.605995%2C42.856811&whatshere%5Bzoom%5D=17&z=17.2" width={width} height={height} frameBorder="1" allowFullScreen={true} style={{position:relative,}}></iframe></div>
  )
}

export default Map