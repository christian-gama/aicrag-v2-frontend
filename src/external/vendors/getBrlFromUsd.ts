export const getBrlFromUsd = async () => {
  try {
    const res = await fetch(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL'
    )

    const BRL = +(await res.json()).USDBRL.ask

    return BRL
  } catch (err) {
    return 5
  }
}
