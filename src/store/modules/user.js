import * as nearAPI from "near-api-js";

// const { connect, keyStores } = nearAPI;
const { connect, keyStores, WalletConnection } = nearAPI;

// async function nearSetup(){
// 
  // mutations.changeTest("22222")
// 
  // const keyStore = new keyStores.BrowserLocalStorageKeyStore();
  // 
  // const config = {
    // networkId: "testnet",
    // keyStore, // optional if not signing transactions
    // nodeUrl: "https://rpc.testnet.near.org",
    // walletUrl: "https://wallet.testnet.near.org",
    // helperUrl: "https://helper.testnet.near.org",
    // explorerUrl: "https://explorer.testnet.near.org",
    // //contractId: 'nepheline.testnet',
    // //marketId: "market." + 'nepheline.testnet',
    // //GAS: "200000000000000",
  // };
  // 
  // const near = await connect({ ...config, keyStore });
  // state.nearWallet = new WalletConnection(near);
// 
  ////let walletId = state.nearWallet.getAccountId()
  ////mutations.changeWallet(walletId)
// 
  // state.nearWalletId = state.nearWallet.getAccountId()
// 
  // state.wallet.id = state.nearWallet.getAccountId()
// 
  // console.log(state.wallet.id)
// 
  // localStorage.setItem('walletId', state.wallet.id)
// 
  // console.log(localStorage.getItem('undefined_wallet_auth_key'))
// 
  // if(localStorage.getItem('undefined_wallet_auth_key')){
    // state.walletConnected = localStorage.getItem('undefined_wallet_auth_key').accountId !== ''
    // console.log('WalletConnected - ' + state.walletConnected)
  // }
// 
  ////if(localStorage.getItem('undefined_wallet_auth_key') !== null){
  ////  state.walletConnected = true
  ////}
// 
  ////state.walletConnected = state.wallet.id !== ''
// }

// function checkIfNearConnected(){
//   console.log(nearWallet)
//   // state.nearWalletId = nearWallet.getAccountId()
// }

// actions.nearSetup()

// checkIfNearConnected()

// async function connectNear(){
  // await state.nearWallet.requestSignIn(
    // "example-contract.testnet", // contract requesting access
    // ).then(
      // state.walletConnected = localStorage.getItem('undefined_wallet_auth_key').accountId !== ''
    // )
    // checkIfConnected()
    ////if(localStorage.getItem('undefined_wallet_auth_key')){
    ////  state.walletConnected = localStorage.getItem('undefined_wallet_auth_key').accountId !== ''
    ////}
// }
// 
// async function leaveNear(){
  // await state.nearWallet.signOut()
// 
  // let result = state.nearWallet.isSignedIn()
  // let id = state.nearWallet.getAccountId()
  // console.log(result, id)
// 
  // localStorage.setItem('undefined_wallet_auth_key', null)
  // state.nearWallet = null
  // state.nearWalletId = null
// 
  // checkIfConnected()
// }

// localStorage.getItem('undefined_wallet_auth_key')

const state = {
  user:{
    logo: {
      src: '',
    },
    username: '',
  },
  wallet:{
   id: '', 
  },
  nearWallet: null,
  nearWalletId: null,
  walletConnected: false,

  useFalse: false,


  test: "shsjskksk",
};

// function checkIfConnected(){
  // if(localStorage.getItem('walletId') === ''){
    // state.walletConnected = false
  // }else{
    // state.walletConnected = true
  // }
// }

// checkIfConnected()

const getters = {
  userLogged: state => state.username !== '',
  user: state => state.user,
  wallet: state => state.wallet,
  walletConnected: state => state.walletConnected,
  // walletConnected: state => state.wallet,
  nearWallet: state => state.nearWallet,
  nearWalletId: state => state.nearWalletId,

  test: state => state.test,
};

const mutations = {
  saveUserSettings(state, payload){
    state.user = JSON.parse(JSON.stringify(payload))
  },

  // connectWallet(){
    // connectNear().then(
      ////state.walletConnected = localStorage.getItem('undefined_wallet_auth_key')
      // console.log(localStorage.getItem('undefined_wallet_auth_key'))
    // )
  // },
  // quitWallet(){
// 
    // leaveNear()
  // },
  // connectWallet(state){

  clearWalletData(){
    localStorage.setItem('undefined_wallet_auth_key', null)
    state.nearWallet = null
    state.nearWalletId = null
  },
  
  // changeWallet(state, payload){
  //   state.wallet.id = payload
  // },
  clearUserLogo(state){
    state.user.logo = {src: ''}
  }
};

const actions = {
  async connectNear({state, dispatch}){
    await state.nearWallet.requestSignIn(
      "example-contract.testnet", // contract requesting access
      ).then(
        state.walletConnected = localStorage.getItem('undefined_wallet_auth_key').accountId !== ''
      )
      // checkIfConnected()
      dispatch("checkIfConnected")
      // if(localStorage.getItem('undefined_wallet_auth_key')){
      //   state.walletConnected = localStorage.getItem('undefined_wallet_auth_key').accountId !== ''
      // }
  },
  async leaveNear({state, dispatch}){
    await state.nearWallet.signOut()
  
    let result = state.nearWallet.isSignedIn()
    let id = state.nearWallet.getAccountId()
    console.log(result, id)
  
    // localStorage.setItem('undefined_wallet_auth_key', "")
    localStorage.setItem('walletId', "")
  
    dispatch("checkIfConnected")
  },
  checkIfConnected({state}){
    console.log("222222222")
    console.log(localStorage.getItem('walletId') === "")
    console.log(localStorage.getItem('walletId'))
    console.log(state.walletConnected)
    console.log("222222222")

    if(localStorage.getItem('walletId') === ''){
      state.walletConnected = false
    }else{
      state.walletConnected = true
    } 

    console.log(window.location)
    window.location.search.substr(1);
    // window.location.search.substr(1);

    console.log(state.walletConnected)
    console.log("222222222")
  },
  async nearSetup({state, dispatch}){

    // mutations.changeTest("22222")

    state.test = "223232323"

    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    
    const config = {
      networkId: "testnet",
      keyStore, // optional if not signing transactions
      nodeUrl: "https://rpc.testnet.near.org",
      walletUrl: "https://wallet.testnet.near.org",
      helperUrl: "https://helper.testnet.near.org",
      explorerUrl: "https://explorer.testnet.near.org",
      // contractId: 'nepheline.testnet',
      // marketId: "market." + 'nepheline.testnet',
      // GAS: "200000000000000",
    };
    
    const near = await connect({ ...config, keyStore });
    state.nearWallet = new WalletConnection(near);
  
    // let walletId = state.nearWallet.getAccountId()
    // mutations.changeWallet(walletId)
  
    state.nearWalletId = state.nearWallet.getAccountId()
  
    state.wallet.id = state.nearWallet.getAccountId()
  
    console.log(state.wallet.id)
  
    localStorage.setItem('walletId', state.wallet.id)
  
    console.log("ACTION CONSOLE LOG")
    console.log(localStorage.getItem('undefined_wallet_auth_key'))
  
    // if(localStorage.getItem('undefined_wallet_auth_key')){
      // state.walletConnected = localStorage.getItem('undefined_wallet_auth_key').accountId !== ''
      // console.log('WalletConnected - ' + state.walletConnected)
    // }
    dispatch("checkIfConnected")

    // location.replace(location.origin + location.pathname)
    // if(localStorage.getItem('undefined_wallet_auth_key') !== null){
    //   state.walletConnected = true
    // }
  
    // state.walletConnected = state.wallet.id !== ''
  },
  
  async connectWallet({state}){
    await state.nearWallet.requestSignIn(
      "example-contract.testnet", // contract requesting access
      );
  },
  quitWallet({state, dispatch}){
    state.nearWallet.signOut()
    dispatch('clearWalletData')
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
};