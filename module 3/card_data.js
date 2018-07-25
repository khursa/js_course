export default class CardData {
  getInfo(card) {
    // return Promise.resolve({ name: 'Value', card });
    return fetch(`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${card}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }

        return {};
      })
      .then((result) => {
        localStorage.setItem(card, JSON.stringify(result));

        return result;
      });
  }
}
