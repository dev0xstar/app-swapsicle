"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3316],{902244:function(e,r,t){t.d(r,{x:function(){return s}});var n=t(262001),o=t(667294),i=t(785893);let s=e=>{let{dataOne:r,dataTwo:t,colors:{backgroundColor:s="#0b1221",lineColorDataTwo:a="rgba(171, 71, 188, 1)",lineColorDataOne:c="rgba(233,30,99,1)",textColor:l="white",areaTopColor:u="rgba(171, 71, 188, 0.56)",areaBottomColor:d="rgba(171, 71, 188, 0.04)",areaTopColorAvax:h="rgba(233,30,99,0.56)",areaBottomColorAvax:f="rgba(233,30,99,0.04)"}={},decimals:m=0,formatter:p=0}=e,b=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=()=>{u.applyOptions({width:b.current.clientWidth})};var o={Dollar:function(e){return"$"+Number(e.toFixed(m)).toLocaleString()},Percent:function(e){return Number(e.toFixed(m)).toLocaleString()+"%"}};let i=Object.keys(o),u=(0,n.C2)(b.current,{layout:{background:{type:n.Mr.Solid,color:s},textColor:l},width:b.current.clientWidth,height:350,grid:{vertLines:{visible:!1},horzLines:{visible:!1}},handleScroll:!1,handleScale:!1,localization:{locale:"en-US",priceFormatter:o[i[p]]}});return u.timeScale().fitContent(),u.addAreaSeries({lineColor:c,topColor:h,bottomColor:f}).setData(r),t&&u.addLineSeries({color:a,lineWidth:3}).setData(t),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),u.remove()}},[r,t,s,a,c,l,u,d,h,f]),(0,i.jsx)("div",{children:(0,i.jsx)("div",{ref:b})})}},335245:function(e,r,t){var n=t(108307),o=t(704730),i=t(775131),s=t(402866),a=t(667294),c=t(538578),l=t(785893);let u=["children","size","className","variant"];function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let f={filled:{group:"border border-dark-800 rounded p-0.5 bg-dark-900",option:{checked:e=>e?"border-transparent bg-gradient-to-r from-[#3551dd] to-[#02dab2]":"border-transparent w-max",default:"py-1 rounded-lg border"}},outlined:{group:"gap-2",option:{checked:e=>e?"border-dark-700 bg-gradient-to-r from-blue to-pink":"border-dark-700",default:"py-3 rounded border"}}},m=e=>{let{children:r,size:t,className:n="",variant:s="filled"}=e,d=(0,o.Z)(e,u);return(0,l.jsx)(i.E,h(h({},d),{},{className:(0,c.AK)(n,"flex bg-dark-1000/90",f[s].group),children:a.Children.map(r,e=>(0,a.isValidElement)(e)?(0,a.cloneElement)(e,{variant:s,size:t,style:{width:`calc(100% / ${a.Children.toArray(r).length})`}}):e)}))};m.Button=e=>{let{value:r,children:t,size:n,style:o,className:c}=e;return(0,l.jsx)(i.E.Option,{value:r,as:a.Fragment,children:e=>{let{checked:i}=e;return(0,l.jsx)(s.ZP,{style:o,size:n,id:`radio-option-${r}`,variant:i?"filled":"empty",className:i?"Button active":"uncheckedBtn",type:"button",children:t})}})},r.Z=m},317591:function(e,r,t){var n;t.d(r,{n:function(){return o}});let o=((n={})[n.Liquidity=0]="Liquidity",n[n.Staking=1]="Staking",n[n.Position=2]="Position",n[n.AddLiquidityConfirm=3]="AddLiquidityConfirm",n)},101097:function(e,r,t){t.d(r,{Z:function(){return w}});var n=t(14744),o=t(341276),i=t(933222),s=(t(108307),t(704730),t(741664),t(811163)),a=(t(667294),t(785893)),c=t(178794),l=t(785910),u=t(322321),d=t(939507),h=t(949552),f=t.n(h),m=t(425675),p=t.n(m),b=t(538578),g=t(799603),N=t(259417),x=t(629936);let v=e=>{let{children:r,feature:t}=e,{i18n:h}=(0,n.mV)(),{chainId:m,provider:v,account:w,disconnect:y}=(0,d.Z)(),O=(0,s.useRouter)(),{onSetDeactivated:E}=(0,x.Uu)();h._(h._("landing page."));let j=[o.ChainId.TELOS_TESTNET,o.ChainId.MANTLE_TESTNET,o.ChainId.TAIKO_TESTNET,o.ChainId.ETHEREUM,o.ChainId.OPTIMISM,o.ChainId.ARBITRUM,o.ChainId.MATIC,o.ChainId.AVALANCHE,o.ChainId.FANTOM,o.ChainId.BSC],k=Object.entries(c.Z).reduce((e,r)=>{let[n,o]=r;return o.includes(t)&&!j.includes(Number(n))&&e.push(n),e},[]),A=1==k.length?"grid-cols-1":k.length>2?"lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3":"grid-cols-2";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z.Controlled,{isOpen:!!w&&!c.Z[m]?.includes(t),onDismiss:()=>null,transparent:!0,children:(0,a.jsxs)("div",{className:"flex flex-col justify-center mt-0 freezer",children:[(0,a.jsx)("div",{className:"flex items-center mt-1 ml-1 text-white align-middle",children:(0,a.jsxs)("button",{type:"button",onClick:()=>O.back(),children:[(0,a.jsx)(g.G,{size:"sm",icon:N.acZ,style:{color:"rgb(255,255,255,100)"},className:"mr-1"}),"Back"]})}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h3",{className:"mb-4 text-center",children:"Incorrect Network"}),(0,a.jsxs)("h4",{className:"mb-4 text-center",children:["This feature is currently unsupported on ",l.z[m]]}),(0,a.jsx)("div",{className:"flex justify-center mb-4",children:(0,a.jsx)("div",{className:"w-[40px] h-[40px] ",children:(0,a.jsx)(p(),{src:l.w[m]?l.w[m]:l.w[o.ChainId.MANTLE],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:40,height:40})})}),(0,a.jsxs)("h5",{className:"mb-4 text-center ",children:["Select an available network below or disconnect your wallet to continue to ",t]}),(0,a.jsxs)("div",{className:"icecard_statsbox",style:{background:"rgb(19, 25, 40, 0.90)"},children:[(0,a.jsx)("h4",{className:"mb-4 text-center",children:"Available Networks"}),(0,a.jsx)("div",{className:(0,b.AK)("grid flex-row justify-center gap-5 overflow-x-auto md:gap-8 ",A),children:k.map((e,r)=>(0,a.jsxs)("button",{className:"flex flex-col items-center justify-start gap-2 min-w-[100px] text-primary hover:text-white",onClick:()=>{let r=u.b[e];f().set("chainId",e),e===o.ChainId.ETHEREUM.toString()?v?.send("wallet_switchEthereumChain",[{chainId:"0x1"},w]):v?.send("wallet_addEthereumChain",[r,w])},children:[(0,a.jsx)("div",{className:"w-[40px] h-[40px]",children:(0,a.jsx)(p(),{src:l.w[e],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:40,height:40})}),(0,a.jsx)("h5",{className:"",children:l.z[e]})]},r))})]}),(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("button",{className:"flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-4 text-sm focus:outline-none focus:ring text-high-emphesis ButtonV2 max-w-[300px]",onClick:()=>{y(),E(!0)},children:"Disconnect Wallet"})})]})]})}),r]})};var w=e=>r=>{let{children:t}=r;return(0,a.jsx)(v,{feature:e,children:t})}},500989:function(e,r,t){t.d(r,{UK:function(){return n.UK},qL:function(){return n.qL},x7:function(){return d},rO:function(){return u.rO},hP:function(){return u.hP},mX:function(){return u.mX},cq:function(){return u.cq},MQ:function(){return u.MQ},hU:function(){return u.hU},TK:function(){return h},ou:function(){return u.ou},RO:function(){return u.RO},JE:function(){return u.JE},oe:function(){return u.oe},i7:function(){return u.i7},sL:function(){return u.sL},oF:function(){return f.ZP},lz:function(){return u.lz}});var n=t(178462),o=t(119485),i=t(609279),s=t(353487),a=t(939507),c=t(828465),l=t(667294),u=t(86083),d=function(){let{account:e,chainId:r}=(0,a.Z)(),t=(0,c.h7)(),n=(0,u.rO)();return{deposit:(0,l.useCallback)(async(a,c)=>{if(c&&r)try{let l=(0,o.getAddress)(a);if(l===s.WNATIVE_ADDRESS[r]){let r=await n?.deposit(i.d,e,e,c,0,{value:c});return t(r,{summary:"Deposit to Bentobox"})}{let r=await n?.deposit(l,e,e,c,0);return t(r,{summary:"Deposit to Bentobox"})}}catch(e){return console.error("bentobox deposit error:",e),e}},[e,t,n,r]),withdraw:(0,l.useCallback)(async(i,a,c)=>{if(a&&r)try{let l=(0,o.getAddress)(i),u=await n?.withdraw(l===s.WNATIVE_ADDRESS[r]?"0x0000000000000000000000000000000000000000":l,e,e,a,c?c.toString():0);return t(u,{summary:"Withdraw from Bentobox"})}catch(e){return console.error("bentobox withdraw error:",e),e}},[e,t,n,r]),harvest:(0,l.useCallback)(async function(e){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r)try{let r=await n?.harvest(e,o,0);return t(r,{summary:o?"Harvest & Rebalance":"Harvest"})}catch(e){return console.error("bentobox harvest error:",e),e}},[])}};t(489638),t(219381),t(229128),t(501082);var h=function(e){let{data:r}=e,{0:t,1:n}=(0,l.useState)("");return{result:function(e){let{data:r,term:t}=e;try{let e=r?.filter(e=>Object.values(e.pair)?.flatMap(Object.values)?.some(e=>"string"==typeof e&&e.toLowerCase().includes(t.toLowerCase())));return t?e:r}catch(e){return r}}({data:r,term:t}),search:n,term:t,reset:()=>n("")}},f=t(911163)},178462:function(e,r,t){t.d(r,{UK:function(){return f},qL:function(){return m},re:function(){return p},NU:function(){return b}}),t(421046);var n,o=t(341276),i=t(353487),s=t(939507),a=t(828465),c=t(667294),l=t(799767),u=t(86083),d=t(243475),h=t(330214);let f=((n={}).UNKNOWN="UNKNOWN",n.NOT_APPROVED="NOT_APPROVED",n.PENDING="PENDING",n.APPROVED="APPROVED",n);function m(e,r){arguments.length>2&&void 0!==arguments[2]&&arguments[2];let{account:t}=(0,s.Z)(),{getGasPrice:n}=(0,h.Z)(),i=e?.currency?.isToken?e.currency:void 0,l=function(e,r,t){let n=(0,u.Ib)(e?.address,!1),i=(0,c.useMemo)(()=>[r,t],[r,t]),s=(0,d.Wk)(n,"allowance",i).result;return(0,c.useMemo)(()=>e&&s?o.CurrencyAmount.fromRawAmount(e,s.toString()):void 0,[e,s])}(i,t??void 0,r),m=(0,a.wB)(i?.address,r),p=(0,c.useMemo)(()=>e&&r?e.currency.isNative?f.APPROVED:l?l.lessThan(e)?m?f.PENDING:f.NOT_APPROVED:f.APPROVED:f.UNKNOWN:f.UNKNOWN,[e,l,m,r]),b=(0,u.Ib)(i?.address),g=(0,a.h7)(),N=(0,c.useCallback)(async()=>{if(p!==f.NOT_APPROVED){console.error("approve was called unnecessarily");return}if(!i){console.error("no token");return}if(!b){console.error("tokenContract is null");return}if(!e){console.error("missing amount to approve");return}if(!r){console.error("no spender");return}let t=n();return b.approve(r,e.quotient.toString(),{gasPrice:t}).then(t=>{g(t,{summary:"Approve "+e.currency.symbol,approval:{tokenAddress:i.address,spender:r}})}).catch(e=>{throw console.debug("Failed to approve token",e),e})},[p,i,b,e,r,g,n]);return[p,N]}function p(e,r){arguments.length>2&&void 0!==arguments[2]&&arguments[2];let{chainId:t}=(0,s.Z)();return m((0,c.useMemo)(()=>e&&e.inputAmount.currency.isToken?e.maximumAmountIn(r):void 0,[e,r]),t?e instanceof o.Trade?i.ROUTER_ADDRESS[t]:e instanceof l.ho?i.V3_SWAP_ROUTER_ADDRESS[t]:void 0:void 0)}let b=(e,r,t)=>{let{account:n}=(0,s.Z)(),{getGasPrice:o}=(0,h.Z)(),i=(0,u.Ib)(e?.address,!1),l=(0,c.useMemo)(()=>[n,t],[n,t]),m=(0,d.Wk)(i,"allowance",l).result,p=(0,a.wB)(e?.address,t),b=(0,c.useMemo)(()=>r&&t&&m?Number(m)<Number(r)?p?f.PENDING:f.NOT_APPROVED:f.APPROVED:f.UNKNOWN,[r,m,p,t]),g=(0,u.Ib)(e?.address),N=(0,a.h7)(),x=(0,c.useCallback)(async()=>{if(b!==f.NOT_APPROVED){console.error("approve was called unnecessarily");return}if(!e){console.error("no token");return}if(!g){console.error("tokenContract is null");return}if(!r){console.error("missing amount to approve");return}if(!t){console.error("no spender");return}let n=o();return g.approve(t,r,{gasPrice:n}).then(r=>{N(r,{summary:"Approve "+e.symbol,approval:{tokenAddress:e.address,spender:t}})}).catch(e=>{throw console.debug("Failed to approve token",e),e})},[b,e,g,r,t,N,o]);return[b,x]}},330214:function(e,r,t){var n=t(939507),o=t(548470);r.Z=function(){let{chainId:e}=(0,n.Z)();return{getGasPrice:()=>{let r;let t=JSON.parse('[{"chainId":5000,"price":0.02},{"chainId":5003,"price":0.02},{"chainId":167000,"price":0.15},{"chainId":167009,"price":0.05}]');return t&&t.map(t=>{t.chainId===e&&(r=o.vz(t.price.toString(),"gwei"))}),r}}}}}]);