import axios from 'axios';

export default async function mintGameNft(userwalletaddress, metadatauri) {
  const url = "https://api.r3x.tech/game/mint-cubs-game-nft";
  const headers = {
    "Content-Type": "application/json"
  };

  const data = {
    "userwalletaddress": `${userwalletaddress}`,
    "gamename": `PITCHAR - Cubs Game Ticket`,
    "metadatauri": `${metadatauri}`
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.log('Error while minting: ', error.message);
    return "Failed to mint!"
  }
}
