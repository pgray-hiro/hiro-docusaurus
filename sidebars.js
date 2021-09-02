/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: {
    Basics: ["get-started", "intro-to-stacks", "command-line-interface"],
    "Smart contracts": ["write-smart-contracts"],
    "Contract integration": [
      "integrate-contracts",
      "devnet",
      "stacks-js-integration",
      "web-wallet-integration",
      "observe-events",
      "live-chain-integration",
    ],
  },
  wallets: {
    "Stacks wallets": ["wallets"],
  },
  tutorials: {
    "Web applications": ["tutorials"],
  },
  "example-apps": {
    React: ["example-apps"],
  },
};
