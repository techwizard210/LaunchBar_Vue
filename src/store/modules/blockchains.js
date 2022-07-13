const state = {
  allBlockchains:[
    {
      label: 'Immutable X',
      value: 'immutablex',
      image: require('@/assets/images/blockchain-immux.svg'),
      themeImage: require('@/assets/images/blockchain-immux-theme.svg')
    },
    {
      label: 'BSC',
      value: 'bsc',
      image: require('@/assets/images/blockchain-bsc.svg'),
      themeImage: require('@/assets/images/blockchain-bsc-theme.svg'),
    },
    // {
    //   label: 'Polygon',
    //   value: 'polygon',
    //   image: require('@/assets/images/blockchain-polygon.svg')
    // },
    // {
    //   label: 'Ethereum',
    //   value: 'ethereum',
    //   image: require('@/assets/images/blockchain-ethereum.svg')
    // },
    // {
    //   label: 'Avalanche',
    //   value: 'avalanche',
    //   image: require('@/assets/images/blockchain-avalanche.svg')
    // },
    // {
    //   label: 'Moonriver',
    //   value: 'moonriver',
    //   image: require('@/assets/images/blockchain-moonriver.svg')
    // },
    {
      label: 'Near',
      value: 'near',
      image: require('@/assets/images/blockchain-near.svg'),
    },
    // {
    //   label: 'Solana',
    //   value: 'solana',
    //   image: require('@/assets/images/blockchain-solana.svg')
    // },
    // {
    //   label: 'Dfinity',
    //   value: 'dfinity',
    //   image: require('@/assets/images/blockchain-dfinity.png')
    // },
    // {
    //   label: 'Flow',
    //   value: 'flow',
    //   image: require('@/assets/images/blockchain-flow.svg')
    // },
  ],
  allWallets:[
    {
      label: 'MetaMask',
      value: 'metamask',
      image: require('@/assets/images/wallet-metamask.png')
    },
    {
      label: 'Near wallet',
      value: 'nearwallet',
      image: require('@/assets/images/blockchain-near.svg'),
      darkImage: require('@/assets/images/blockchain-near.svg'),
    },
  ],
  currentBlockchain: {
    label: 'Immutable X',
    value: 'immutablex',
    image: require('@/assets/images/blockchain-immux.svg'),
    themeImage: require('@/assets/images/blockchain-immux-theme.svg')
  },
  currentWallet: {
    label: 'MetaMask',
    value: 'metamask',
    image: require('@/assets/images/wallet-metamask.png')
  },
  openedBlockchains: false,
  openedWallets: false,
  openedProfile: false,
};

const getters = {
  allBlockchains: state => state.allBlockchains,
  allWallets: state => state.allWallets,
  currentBlockchain: state => state.currentBlockchain,
  currentWallet: state => state.currentWallet,
  openedBlockchains: state => state.openedBlockchains,
  openedWallets: state => state.openedWallets,
  openedProfile: state => state.openedProfile,
};

const mutations = {
  setNewBlockchain(state, payload){
    state.currentBlockchain = payload
  },
  setNewWallet(state, payload){
    state.currentWallet = payload
  },
  togglePopUpBlockchains(state){
    state.openedWallets = false
    state.openedProfile = false
    state.openedBlockchains = !state.openedBlockchains
  },
  togglePopUpWallets(state){
    state.openedBlockchains = false
    state.openedProfile = false
    state.openedWallets = !state.openedWallets
  },
  togglePopUpProfile(state){
    state.openedBlockchains = false
    state.openedWallets = false
    state.openedProfile = !state.openedProfile
  },
};

export default {
  state,
  getters,
  mutations,
};