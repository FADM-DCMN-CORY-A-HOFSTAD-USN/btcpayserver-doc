(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{522:function(e,t,n){e.exports=n.p+"assets/img/LightningNetworkNodeSetup1.4825790a.png"},523:function(e,t,n){e.exports=n.p+"assets/img/LightningNetworkNodeSetup2.7fd453fc.png"},524:function(e,t,n){e.exports=n.p+"assets/img/LightningNetworkNodeSetup3.c89bc70a.png"},525:function(e,t,n){e.exports=n.p+"assets/img/LightningNetworkNodeSetupCustom.68862c8b.png"},526:function(e,t,n){e.exports=n.p+"assets/img/RideTheLightning.b51de51a.png"},527:function(e,t,n){e.exports=n.p+"assets/img/RideTheLightningServices.f78a7987.png"},528:function(e,t,n){e.exports=n.p+"assets/img/SparkConnect.c32564ac.jpg"},529:function(e,t,n){e.exports=n.p+"assets/img/SparkConnect2.jpg.38b90d2b.png"},705:function(e,t,n){"use strict";n.r(t);var o=n(25),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"lightning-network-and-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lightning-network-and-btcpay"}},[e._v("#")]),e._v(" Lightning Network and BTCPay")]),e._v(" "),o("p",[e._v("After deploying BTCPay Server, you may want to experiment with an innovative second-layer payment system built on top of Bitcoin protocol - the "),o("a",{attrs:{href:"https://en.bitcoin.it/wiki/Lightning_Network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lightning Network"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("This guide will show you how to "),o("strong",[e._v("set up your Lightning Network node in BTCPay")]),e._v(" and guide you through the basics.")]),e._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[o("strong",[e._v("Before you proceed, please understand that the Lightning Network is still in the experimental stage.\nDo not put the money you can't afford to lose. There is a high risk of you losing the money.")])])]),e._v(" "),o("p",[e._v("Take time to familiarize yourself with the risks associated with using the Lightning Network.\n"),o("strong",[e._v("Your keys are in a hot-wallet.\nSome implementations do not have a backup for lightning keys in BTCPay.")]),e._v("\nThis means:")]),e._v(" "),o("ol",[o("li",[e._v("If you erase your BTCPay Server or your machine crashes - you lose all the funds.")]),e._v(" "),o("li",[e._v("If your server gets hacked - a hacker can take all of your funds by accessing your keys.")])]),e._v(" "),o("p",[e._v("While the keys from your "),o("strong",[e._v("Lightning Network")]),e._v(" don't have a backup and someone can steal them theoretically, your on-chain Bitcoin funds are safe and are never uploaded on the server.")]),e._v(" "),o("p",[e._v("As the technology matures and develops, things like a proper backup will be easier to implement in BTCPay.\nAs of "),o("a",{attrs:{href:"https://blog.btcpayserver.org/btcpay-lnd-migration/",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.0.3.138"),o("OutboundLink")],1),e._v(", LND is the only lightning network implementation that allows for "),o("RouterLink",{attrs:{to:"/FAQ/LightningNetwork/#where-can-i-find-recovery-seed-backup-for-my-lightning-network-wallet-in-btcpay-server"}},[e._v("lightning seed backups with BTCPay Server")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("BTCPay currently offers three implementations of the Lightning Network")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/lightningnetwork/lnd",target:"_blank",rel:"noopener noreferrer"}},[e._v("LND"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/ElementsProject/lightning",target:"_blank",rel:"noopener noreferrer"}},[e._v("c-lightning"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/ACINQ/eclair",target:"_blank",rel:"noopener noreferrer"}},[e._v("eclair"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"choosing-the-lightning-network-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#choosing-the-lightning-network-implementation"}},[e._v("#")]),e._v(" Choosing the Lightning Network implementation")]),e._v(" "),o("p",[e._v("First, read "),o("RouterLink",{attrs:{to:"/FAQ/LightningNetwork/#can-i-use-a-pruned-node-with-ln-in-btcpay"}},[e._v("here")]),e._v(" about using pruned Bitcoin nodes with lightning network implementations before deploying.")],1),e._v(" "),o("p",[e._v("On the installation, you'll have the option to choose the implementation.\nFor "),o("RouterLink",{attrs:{to:"/Deployment/LunaNode/"}},[e._v("web-interface installations")]),e._v(", you can simply select the implementation from the drop-down menu.\nFor other "),o("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker"),o("OutboundLink")],1),e._v(" based "),o("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("deployment methods")]),e._v(" you need to:")],1),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_LIGHTNING")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"implementationgoeshere"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" ./btcpay-setup.sh -i\n")])])]),o("p",[e._v("For "),o("strong",[e._v("c-lightning")]),e._v(" use "),o("code",[e._v('export BTCPAYGEN_LIGHTNING="clightning"')])]),e._v(" "),o("p",[e._v("For "),o("strong",[e._v("LND")]),e._v(" use "),o("code",[e._v('export BTCPAYGEN_LIGHTNING="lnd"')])]),e._v(" "),o("p",[e._v("For "),o("strong",[e._v("eclair")]),e._v(" use "),o("code",[e._v('export BTCPAYGEN_LIGHTNING="eclair"')])]),e._v(" "),o("p",[e._v("For eclair it also requires "),o("code",[e._v('export BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-txindex"')])]),e._v(" "),o("p",[e._v("Finally, to begin using Lightning, your blockchain needs to be fully synced.")]),e._v(" "),o("h2",{attrs:{id:"connecting-your-internal-lightning-node-in-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-your-internal-lightning-node-in-btcpay"}},[e._v("#")]),e._v(" Connecting your internal Lightning Node in BTCPay")]),e._v(" "),o("p",[e._v("Regardless of the implementation (c-lightning or LND) you've decided to use, the process of "),o("strong",[e._v("connecting your internal Lightning Node in BTCPay Server")]),e._v(" is the same.")]),e._v(" "),o("ol",[o("li",[e._v("If you do not have a store, create one.")]),e._v(" "),o("li",[e._v("Store > Settings > Lightning > Modify")]),e._v(" "),o("li",[e._v('Select "Use internal node"')]),e._v(" "),o("li",[e._v('Click "Save"')]),e._v(" "),o("li",[e._v('See "BTC Lightning node updated" message')]),e._v(" "),o("li",[e._v("Make sure it is enabled")])]),e._v(" "),o("p",[o("strong",[e._v("Your blockchain needs to be fully synced before you try to connect your internal Lightning Node, otherwise the connection will fail.")])]),e._v(" "),o("figure",[o("img",{attrs:{src:n(522),alt:"BTCPay Server Lightning Network Setup 1",title:"BTCPay Server Lightning Network Setup 1"}})]),e._v(" "),o("figure",[o("img",{attrs:{src:n(523),alt:"BTCPay Server Lightning Network Setup 2",title:"Use the internal node"}})]),e._v(" "),o("figure",[o("img",{attrs:{src:n(524),alt:"BTCPay Server Lightning Network Setup 3",title:"Test the Lightning Network connection"}})]),e._v(" "),o("p",[e._v('To ensure that your Lightning node is connected and accessible for use in your store\'s invoices, try to test your Lightning connection by clicking the "Public Node Info" link. Verify that a successful connection is displayed. If your internal node connection fails, make sure you have a Lightning implementation '),o("RouterLink",{attrs:{to:"/FAQ/LightningNetwork/#i-previously-installed-btcpayserver-without-lightning-can-i-enable-it"}},[e._v("enabled")]),e._v(" on your server.")],1),e._v(" "),o("p",[e._v("If you are unable to connect to your Lightning node, try "),o("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-restart-btcpay-server"}},[e._v("restarting your server")]),e._v(" or reviewing our "),o("RouterLink",{attrs:{to:"/Troubleshooting/"}},[e._v("troubleshooting guide")]),e._v(". You will not be able to accept lightning payments in your store until your test connection shows as successful.")],1),e._v(" "),o("h2",{attrs:{id:"connecting-an-external-lightning-node-in-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-an-external-lightning-node-in-btcpay"}},[e._v("#")]),e._v(" Connecting an external Lightning Node in BTCPay")]),e._v(" "),o("p",[e._v('If you would like to provide your own Lightning node connection string, select the "Use custom node" option. If you aren\'t sure of which settings to use, there are some examples provided on this page to help guide you. This is typically used to connect an external Lightning node to a BTCPay Server.')]),e._v(" "),o("figure",[o("img",{attrs:{src:n(525),alt:"BTCPay Server Lightning Network Setup Custom",title:"BTCPay Server Lightning Network Setup Custom"}})]),e._v(" "),o("h2",{attrs:{id:"getting-started-with-btcpay-and-lnd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-btcpay-and-lnd"}},[e._v("#")]),e._v(" Getting Started with BTCPay and LND")]),e._v(" "),o("p",[e._v("The easiest way to use "),o("strong",[e._v("LND implementation with BTCPay")]),e._v(" is to use "),o("strong",[o("a",{attrs:{href:"https://github.com/ShahanaFarooqui/RTL",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ride The Lightning"),o("OutboundLink")],1)]),e._v(" (RTL).")]),e._v(" "),o("figure",[o("img",{attrs:{src:n(526),alt:"Ride The Lightning in BTCPay Server",title:"Ride The Lightning in BTCPay Server"}})]),e._v(" "),o("p",[e._v("RTL is a device agnostic "),o("strong",[e._v("web user interface for Lightning Network")]),e._v(" that allows you to operate your node without leaving BTCPay, from your browser.")]),e._v(" "),o("figure",[o("img",{attrs:{src:n(527),alt:"Ride The Lightning Service in BTCPay Server",title:"Ride The Lightning Service in BTCPay Server"}})]),e._v(" "),o("p",[e._v("To initiate RTL in BTCPay, Go to "),o("strong",[e._v("Server Settings > Services > RTL > See information")]),e._v(".")]),e._v(" "),o("p",[e._v("Read the "),o("a",{attrs:{href:"https://medium.com/@suheb.khan/how-to-ride-the-lightning-447af999dcd2",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTL Getting Started Guide"),o("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),o("p",[e._v("For remote use of your LND node on iOS or PC, you can use "),o("a",{attrs:{href:"https://github.com/LN-Zap/zap-tutorials/blob/master/docs/desktop/btcpay-server.mdx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zap wallet integration"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/CWhTOunTb2Q/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=CWhTOunTb2Q","data-id":"CWhTOunTb2Q"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/CWhTOunTb2Q?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),o("p",[e._v("Besides Zap, there are a few more wallets that allow remote control of the LND node, "),o("a",{attrs:{href:"https://nayuta.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Nayuta wallet"),o("OutboundLink")],1),e._v(" and the "),o("a",{attrs:{href:"https://github.com/ZeusLN/zeus",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZeusLN"),o("OutboundLink")],1),e._v(". Both of which have not yet extensively been tested by the community.")]),e._v(" "),o("p",[e._v("To remotely control your LND node via web browser, you can use Lightning Joule.")]),e._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/a9_uHJhnKR4/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=a9_uHJhnKR4","data-id":"a9_uHJhnKR4"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/a9_uHJhnKR4?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),o("h3",{attrs:{id:"lnd-commands-lncli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lnd-commands-lncli"}},[e._v("#")]),e._v(" LND Commands lncli")]),e._v(" "),o("p",[e._v("You can use "),o("strong",[e._v("lncli commands")]),e._v(" like described in their "),o("a",{attrs:{href:"https://api.lightning.community/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API docs"),o("OutboundLink")],1),e._v(" but instead of using lncli you use the shell script in of the btcpayserver-docker repository calles bitcoin-lncli.sh.")]),e._v(" "),o("p",[e._v("If you're on Docker make sure you're in docker directory.")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n./bitcoin-lncli.sh\n")])])]),o("p",[e._v("So instead of running lncli getinfo you would run "),o("code",[e._v("./bitcoin-lncli.sh getinfo")])]),e._v(" "),o("p",[e._v("Run "),o("code",[e._v("./bitcoin-lncli.sh --help")]),e._v(" to see a full list of commands or check above mentioned API docs.")]),e._v(" "),o("h2",{attrs:{id:"getting-started-with-btcpay-and-c-lightning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-btcpay-and-c-lightning"}},[e._v("#")]),e._v(" Getting Started with BTCPay and c-lightning")]),e._v(" "),o("p",[e._v("The most straightforward way to start using the "),o("strong",[e._v("c-lightning implementation in BTCPay")]),e._v(" is to use "),o("a",{attrs:{href:"https://github.com/shesek/spark-wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spark Wallet"),o("OutboundLink")],1),e._v(" integration. Just like Zap for LND, Spark is a graphical interface of your internal c-lightning node.")]),e._v(" "),o("p",[e._v("You can use "),o("strong",[e._v("Spark")]),e._v(" as an internal or external wallet. Internal wallet allows users to use Spark via the web-browser inside their BTCPay Server. You can also connect externally to a Spark mobile or desktop app just by scanning a QR code.")]),e._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/uV1R6IQpmg8/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=uV1R6IQpmg8","data-id":"uV1R6IQpmg8"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/uV1R6IQpmg8?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),o("p",[e._v("Go to "),o("strong",[e._v("Server Settings > Services > Spark Server > See information")])]),e._v(" "),o("figure",[o("img",{attrs:{src:n(528),alt:"Accessing Spark wallet",title:"Accessing Spark wallet"}})]),e._v(" "),o("figure",[o("img",{attrs:{src:n(529),alt:"Accessing Spark wallet",title:"Accessing Spark wallet"}})]),e._v(" "),o("h3",{attrs:{id:"c-lightning-commands-lightning-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#c-lightning-commands-lightning-cli"}},[e._v("#")]),e._v(" c-lightning Commands lightning-cli")]),e._v(" "),o("p",[e._v("To use "),o("strong",[e._v("clightning CLI")]),e._v(" it is the same like above for "),o("code",[e._v("lncli")]),e._v(" but instead you use the shell script "),o("code",[e._v("bitcoin-lightning-cli.sh")])]),e._v(" "),o("p",[e._v("If you're on Docker make sure you're in docker directory.")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n./bitcoin-lightning-cli.sh\n")])])]),o("p",[e._v("E.g. to list all commands: "),o("code",[e._v("./bitcoin-lightning-cli.sh help")]),e._v("\nor show info about the node "),o("code",[e._v("./bitcoin-lightning-cli.sh getinfo")])]),e._v(" "),o("h3",{attrs:{id:"lapps-lightning-network-apps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lapps-lightning-network-apps"}},[e._v("#")]),e._v(" Lapps (Lightning Network Apps)")]),e._v(" "),o("p",[o("strong",[o("a",{attrs:{href:"https://blockstream.com/2018/03/29/blockstreams-week-of-lapps-ends/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lapps"),o("OutboundLink")],1),e._v(" are applications built on top of the "),o("a",{attrs:{href:"https://blockstream.com/2018/01/16/lightning-charge/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lightning Charge"),o("OutboundLink")],1)]),e._v(", a complimentary package that allows users and developers to easier use and develop on top of c-lightning. If you decided to use c-lightning, you can easily "),o("strong",[e._v("connect your BTCPay to any of the Lapps")]),e._v(".")]),e._v(" "),o("p",[e._v("BTCPay exposes all the necessary information required to "),o("strong",[e._v("connect your internal BTCPay c-lightning node to a Lightning Network App")]),e._v(".  Go to Server Settings > Services > Lightning charge server > See information > Credentials.")]),e._v(" "),o("p",[e._v("Below are videos that showcase how to connect some of the lapps to your BTCPay.")]),e._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/6EHNq1anD1k/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=6EHNq1anD1k","data-id":"6EHNq1anD1k"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/6EHNq1anD1k?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/ZbM3jcxau0o/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=ZbM3jcxau0o","data-id":"ZbM3jcxau0o"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/ZbM3jcxau0o?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/EYrsU3LGpbI/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=EYrsU3LGpbI","data-id":"EYrsU3LGpbI"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/EYrsU3LGpbI?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);t.default=a.exports}}]);