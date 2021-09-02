"use strict";(self.webpackChunkhiro_docusaurus=self.webpackChunkhiro_docusaurus||[]).push([[725],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4093:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"command-line-interface",title:"Stacks CLI"},c=void 0,l={unversionedId:"command-line-interface",id:"command-line-interface",isDocsHomePage:!1,title:"Stacks CLI",description:"The Stacks CLI enables interactions with the Stacks 2.0 blockchain through a set of commands. At the current stage, the CLI is intended for developer experimentation on the testnet only.",source:"@site/docs/command-line-interface.md",sourceDirName:".",slug:"/command-line-interface",permalink:"/hiro-docusaurus/docs/command-line-interface",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/command-line-interface.md",tags:[],version:"current",frontMatter:{id:"command-line-interface",title:"Stacks CLI"},sidebar:"docs",previous:{title:"What is Stacks?",permalink:"/hiro-docusaurus/docs/intro-to-stacks"},next:{title:"Smart contracts in Clarity",permalink:"/hiro-docusaurus/docs/write-smart-contracts"}},d=[{value:"Installation",id:"installation",children:[]},{value:"Network selection",id:"network-selection",children:[]},{value:"Account",id:"account",children:[{value:"Creating an account",id:"creating-an-account",children:[]},{value:"Checking balance",id:"checking-balance",children:[]}]},{value:"Transactions",id:"transactions",children:[{value:"Sending Tokens",id:"sending-tokens",children:[]}]}],m={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Stacks CLI enables interactions with the Stacks 2.0 blockchain through a set of commands. At the current stage, the CLI is intended for developer experimentation on the testnet only."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"First, ensure you have ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," installed. Next, run the following command in your terminal:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install -g @stacks/cli")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-g")," flag makes the CLI commands available globally"))),(0,o.kt)("h2",{id:"network-selection"},"Network selection"),(0,o.kt)("p",null,"By default, the CLI will attempt to interact with the mainnet of the Stacks 2.0 blockchain. However, it is possible to override the network and set it to the testnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"stx <command> -t\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For account usage, that means adresses generated will ",(0,o.kt)("em",{parentName:"p"},"only")," be available for the specific network. An account generated for the testnet cannot be used on the mainnet."))),(0,o.kt)("p",null,"By default, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-t")," flag causes the CLI to connect to the testnet node at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://stacks-node-api.blockstack.org:20443"),". To specify a node to connect to, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-I")," flag followed by the URL of the node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'stx <command> -I "http://localhost:20443"\n')),(0,o.kt)("h2",{id:"account"},"Account"),(0,o.kt)("p",null,"This section describes how to use the CLI to manage an account."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is not recommended to use the CLI to handle accounts with real STX tokens on the mainnet. Using an appropriate wallet build to support secure token holding is recommended."))),(0,o.kt)("h3",{id:"creating-an-account"},"Creating an account"),(0,o.kt)("p",null,"You can generate a new account for testnet by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"make_keychain")," command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-t")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"stx make_keychain -t\n")),(0,o.kt)("p",null,"Your response should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mnemonic": "private unhappy random runway boil scissors remove harvest fatigue inherit inquiry still before mountain pet tail mad accuse second milk client rebuild salt chase",\n  "keyInfo": {\n    "privateKey": "381314da39a45f43f45ffd33b5d8767d1a38db0da71fea50ed9508e048765cf301",\n    "address": "ST1BG7MHW2R524WMF7X8PGG3V45ZN040EB9EW0GQJ",\n    "btcAddress": "n4X37UmRZYk9HawtS1w4xRtqJWhByxiz3c",\n    "index": 0\n  }\n}\n')),(0,o.kt)("p",null,"The mnemonic is your 24 word seed phrase which you should back up securely if you want access to this account again in the future. Once lost, it cannot be recovered."),(0,o.kt)("p",null,"The Stacks address associated with the newly generated account is:\n",(0,o.kt)("inlineCode",{parentName:"p"},"ST1BG7MHW2R524WMF7X8PGG3V45ZN040EB9EW0GQJ")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a testnet address for use with the testnet only"))),(0,o.kt)("p",null,"It is best to store the response of the CLI somewhere. You will need the private key, for instance, to send tokens to others."),(0,o.kt)("h3",{id:"checking-balance"},"Checking balance"),(0,o.kt)("p",null,"You can check the balance of your account using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"stx balance ST1BG7MHW2R524WMF7X8PGG3V45ZN040EB9EW0GQJ -t\n")),(0,o.kt)("p",null,"The response will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "balance": "10000",\n  "nonce": 0\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To receive testnet STX tokens, please use the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.stacks.co/sandbox/faucet"},"faucet")))),(0,o.kt)("p",null,"Take note that the nonce for the account is ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),". This number is important for transaction broadcasting."),(0,o.kt)("h2",{id:"transactions"},"Transactions"),(0,o.kt)("p",null,"This section describes how to use the CLI to generate and broadcast transactions."),(0,o.kt)("h3",{id:"sending-tokens"},"Sending Tokens"),(0,o.kt)("p",null,"In order to send tokens, the CLI command requires 5 parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recipient Address"),": The Stacks address of the recipient"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Amount"),": The number of Stacks to send denoted in microstacks (1 STX = 1000000 microstacks)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fee Rate"),": The transaction fee rate for this transaction. You can safely set a fee rate of 200 for Testnet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nonce"),": The nonce is a number that needs to be incremented monotonically for each transaction from the account. This ensures transactions are not duplicated"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Private Key"),": This is the private key corresponding to your account that was generated when")),(0,o.kt)("p",null,"The CLI command to use with these parameters is ",(0,o.kt)("inlineCode",{parentName:"p"},"send_tokens"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"stx send_tokens ST2KMMVJAB00W5Z6XWTFPH6B13JE9RJ2DCSHYX0S7 1000 200 0 381314da39a45f43f45ffd33b5d8767d1a38db0da71fea50ed9508e048765cf301 -t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txid": "0xd32de0d66b4a07e0d7eeca320c37a10111c8c703315e79e17df76de6950c622c",\n  "transaction": "https://explorer.stacks.co/txid/0xd32de0d66b4a07e0d7eeca320c37a10111c8c703315e79e17df76de6950c622c"\n}\n')),(0,o.kt)("p",null,"With this command we\u2019re sending 1000 microstacks to the Stacks address ",(0,o.kt)("inlineCode",{parentName:"p"},"ST2KMMVJAB00W5Z6XWTFPH6B13JE9RJ2DCSHYX0S7"),"."),(0,o.kt)("p",null,"We set the fee rate to ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," microstacks. If you're not sure how much your transaction will cost."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-e")," flag to estimate the transaction fee needed to get processed by the network, without broadcasting your transaction."))),(0,o.kt)("p",null,"The nonce is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," for this transaction, since it will be the first transaction we send from this account. For subsequent transactions, you will need to increment this number by ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," each time. You can check the current nonce for the account using the ",(0,o.kt)("inlineCode",{parentName:"p"},"balance")," command."),(0,o.kt)("p",null,"Finally, the last parameter is the private key for the account. ",(0,o.kt)("inlineCode",{parentName:"p"},"381314da39a45f43f45ffd33b5d8767d1a38db0da71fea50ed9508e048765cf301")),(0,o.kt)("p",null,"Once again, we\u2019re using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-t")," option to indicate that this is a Testnet transaction, so it should be broadcasted to Testnet."),(0,o.kt)("p",null,"If valid, the transaction will be broadcasted to the network and the command will respond with a transaction ID."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To obtain the raw, serialized transaction payload without broadcasting it, you can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"-x")," flag"))))}p.isMDXComponent=!0}}]);