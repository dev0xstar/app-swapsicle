(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3551],
  {
    801170: function (e, a, r) {
      "use strict";
      r.r(a),
        r.d(a, {
          default: function () {
            return p;
          },
        });
      var s = r(14744),
        t = r(809008),
        l = r.n(t);
      r(667294);
      var i = r(785893);
      function n(e) {
        let { destAddress: a } = e;
        return (0, i.jsx)("iframe", {
          className: "onramp",
          src:
            "https://buy.onramper.com?themeName=dark&primaryColor=00ffcfff&containerColor=131928&cardColor=1d2231&apiKey=pk_prod_01GZPZ5NN4BW0NDXMZM9NGS7S0&darkMode=false&supportSwap=false&supportSell=true&fontFamily=sans-serif&wallets=BTC:" +
            a +
            "BNB:" +
            a +
            "MATIC:" +
            a +
            "AVAX_CCHAIN:" +
            a +
            "ETH:" +
            a +
            "&defaultAmount=50&defaultCrypto=AVAX_CCHAIN&defaultFiat=USD&recommendedCryptoCurrencies=ETH,AVAX_CCHAIN,MATIC,BNB_BEP20,FTM_FANTOM&redirectURL=http://swapsicle.io/swap",
          title: "OnRamp",
          frameBorder: "0",
          allow: "accelerometer; autoplay; camera; gyroscope; payment",
        });
      }
      var c = r(939507),
        o = r(555814),
        m = r(425675),
        d = r.n(m),
        p = () => {
          let { i18n: e } = (0, s.mV)(),
            { account: a, chainId: r, provider: t } = (0, c.Z)();
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(l(), {
                children: (0, i.jsx)("title", { children: "Swapsicle" }),
              }),
              (0, i.jsx)("div", {
                className: "bgWrap",
                children: (0, i.jsx)(d(), {
                  src: "/images/igloo13.jpg",
                  alt: "",
                  layout: "fill",
                  objectFit: "cover",
                  quality: 100,
                }),
              }),
              (0, i.jsx)("div", {
                className: "bgWrapMobile",
                children: (0, i.jsx)(d(), {
                  src: "/images/igloo13.jpg",
                  alt: "",
                  layout: "fill",
                  objectFit: "cover",
                  quality: 100,
                  className: "z-0",
                }),
              }),
              (0, i.jsx)(o.Z, {
                id: "",
                className:
                  "z-10 flex items-center justify-center pt-4 space-t-6 md:pt-8 lg:pt-12 cstm_cntnr freezer",
                maxWidth: "2xl",
                children: (0, i.jsxs)("div", {
                  className: "px-3 ",
                  children: [
                    (0, i.jsx)("h4", {
                      className: "mt-0",
                      children:
                        "Get the best of all fiat onramps in one single solution",
                    }),
                    (0, i.jsx)("hr", {
                      className: "h-[1px] my-5 bg-gray-300 border-0",
                    }),
                    (0, i.jsx)("div", {
                      className: "flex justify-center",
                      children: (0, i.jsx)(n, { destAddress: a }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    961272: function (e, a, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/fiat",
        function () {
          return r(801170);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2888, 9774, 179], function () {
      return e((e.s = 961272));
    }),
      (_N_E = e.O());
  },
]);
