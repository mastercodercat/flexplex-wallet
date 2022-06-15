import React from 'react';
import SettingsView from '@/views/settingsView';
import NavigationStore from '@/store/NavigationStore'


const leftCardOptions = [
  {id: "LanguageSettingsModal", optionHeader: "Display language", optionDescription: "Select the language you prefer."},
  {id: "AddressBookModal", optionHeader: "Address book", optionDescription: "Manage commonly used addresses"},
  {id: "TrustedAppsSettingsModal", optionHeader: "Trusted Apps", optionDescription: "Manage your trusted Applications"},
  {id: "AutoLockerModal", optionHeader: "Auto lock timer", optionDescription: "Change auto lock timer"},
]

const rightCardOptions = [
  {id: "NetworkSettingsModal", optionHeader: "Change network", optionDescription: "Configure network settings"},
  {id: "SecretPhraseModal", optionHeader: "Show secret phrase", optionDescription: "Do not share your secret phrase with anyone"},
  {id: "ExportPrivateKeyModal", optionHeader: "Export private key", optionDescription: "Do not share your secret phrase with anyone"},
  {id: "ResetSecretPhraseModal", optionHeader: "Reset secret phrase", optionDescription: "Do not share your secret phrase with anyone"},
]

function Settings() {
  NavigationStore.active('Settings');

  return (
    <React.Fragment>

      {/* Settings View */}
      <SettingsView walletName={"Wallet 1"} 
        walletAddress={"EP8YfUCpbbLVL3zZUZmDWPboFSjpYaSUYYXKc2HRjft9"}
        onChangeWalletAddress={(e) => {console.log(e.target.value)}}
        onChangeWalletName={(e) => {console.log(e.target.value)}}
        leftCardOptions={leftCardOptions}
        rightCardOptions={rightCardOptions}
      ></SettingsView>

    </React.Fragment>
  )
}

export default Settings
