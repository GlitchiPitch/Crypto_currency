import {Card} from "antd";

function CryptoCurrencyCard(props) {
  const { currency } = props
  const price = Math.round(currency.quote.USD.price)
  const priceChanged = Math.round(currency.quote.USD.percent_change_24h)
  const currentVolume = Math.round(currency.quote.USD.volume_24h)
  return (
    <div>
      <Card
        title={
            <div className="flex items-center gap-3">
                <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}></img>
                <span>{currency.name}</span>
            </div>
        }
        bordered={false}
        style={{
        width: 300,
        }}
      >
          <p>Current cost: {price}$</p>
          <p color="green">Price changed 24h: {priceChanged}% </p>
          <p>Current volume: ${currentVolume}</p>
      </Card>
    </div>
  )
}
  
  export default CryptoCurrencyCard