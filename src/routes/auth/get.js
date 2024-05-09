import ImageKit from 'imagekit';

const imagekit = new ImageKit({
  urlEndpoint: 'https://ik.imagekit.io/whiteowl/',
  publicKey: 'public_ZJ5VIUcEhCMulzIAnQt3qGbC2kc=',
  privateKey: 'private_Mc/8UyIAfOspKKLkftsYDnMnvzE='
});

const getImageKitAutParams = (req, res) => {
  try {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

export { getImageKitAutParams };
