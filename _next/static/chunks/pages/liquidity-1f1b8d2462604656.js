(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7385],
  {
    326904: function (e, t, r) {
      "use strict";
      r.d(t, {
        B0: function () {
          return m;
        },
        Ne: function () {
          return h;
        },
      });
      var n = r(341276),
        s = r(833607),
        i = r(789667),
        l = r(667294),
        a = r(960239),
        o = r(673014),
        c = r(492452),
        d = r(785893);
      let u = {
          [n.ChainId.ETHEREUM]: "ethereum",
          [n.ChainId.OPTIMISM]: "optimism",
          [n.ChainId.ARBITRUM]: "arbitrum",
          [n.ChainId.MATIC]: "matic",
          [n.ChainId.BSC]: "binance",
          [n.ChainId.FANTOM]: "fantom",
          [n.ChainId.AVALANCHE]: "avalanche",
          [n.ChainId.AVALANCHE_TESTNET]: "fuji",
          [n.ChainId.HARMONY]: "harmony",
          [n.ChainId.TELOS]: "telos",
          [n.ChainId.MANTLE]: "mantle",
        },
        h = (e) => {
          let t = [];
          if (e.chainId in u)
            t.push(
              `https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/${
                u[e.chainId]
              }/${e.address}/logo.svg`
            ),
              t.push(
                `https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/${
                  u[e.chainId]
                }/${e.address}/logo.png`
              );
          else {
            let r = (0, c.dc)(e.symbol, e.chainId);
            r && r.logoURI && t.push(r.logoURI);
          }
          return t;
        },
        m = (e) => {
          let t = [];
          return (
            e.chainId in u &&
              (t.push(
                `https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/${
                  u[e.chainId]
                }/${e.address}/logo.svg`
              ),
              t.push(
                `https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/${
                  u[e.chainId]
                }/${e.address}/logo.png`
              )),
            t
          );
        },
        f =
          "https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/avalanche/AVAX/logo.png",
        p = "https://ethereum-optimism.github.io/data/ETH/logo.svg",
        x =
          "https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/mantle/MNT/logo.svg",
        g = {
          [n.ChainId.ETHEREUM]: p,
          [n.ChainId.OPTIMISM]: p,
          [n.ChainId.ARBITRUM]: p,
          [n.ChainId.MATIC]:
            "https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/matic/MATIC/logo.png",
          [n.ChainId.FANTOM]:
            "https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/ftm/FTM/logo.svg",
          [n.ChainId.BSC]:
            "https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/binance/BSC/logo.png",
          [n.ChainId.AVALANCHE]: f,
          [n.ChainId.AVALANCHE_TESTNET]: f,
          [n.ChainId.HARMONY]:
            "https://raw.githubusercontent.com/sushiswap/logos/main/token/one.jpg",
          [n.ChainId.TELOS]:
            "https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/telos/TLOS/logo.png",
          [n.ChainId.TELOS_TESTNET]:
            "https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/master/logos/telos/TLOS/logo.png",
          [n.ChainId.MANTLE_TESTNET]: x,
          [n.ChainId.MANTLE]: x,
          [n.ChainId.TAIKO]: p,
          [n.ChainId.TAIKO_TESTNET]: p,
        };
      t.ZP = (e) => {
        let { currency: t, size: r = 24, className: n, style: c } = e,
          u = (0, s.Z)(
            t instanceof i.D ? t.logoURI || t.tokenInfo.logoURI : void 0
          ),
          m = (0, l.useMemo)(() => {
            if (t?.isNative || t?.equals(o.FX[t.chainId]))
              return [g[t.chainId], a.R];
            if (t?.isToken) {
              let e = [...h(t)];
              return t instanceof i.D ? [...u, ...e, a.R] : e;
            }
            return [a.R];
          }, [t, u]);
        return (0, d.jsx)(a.Z, {
          srcs: m,
          width: r,
          height: r,
          alt: t?.symbol,
          className: n,
          style: c,
        });
      };
    },
    505867: function (e, t, r) {
      "use strict";
      r.d(t, {
        X: function () {
          return n.ZP;
        },
        B: function () {
          return d;
        },
      });
      var n = r(326904),
        s = r(108307),
        i = r(704730);
      r(667294);
      var l = r(192886),
        a = r(785893);
      let o = ["currencies", "dense", "maxLogos", "size"];
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var d = (e) => {
        let { currencies: t, dense: r = !1, maxLogos: d = 3, size: u = 24 } = e,
          h = (0, i.Z)(e, o),
          m =
            t.length <= d
              ? t
              : t.slice(0, Math.max(0, Math.min(t.length, d) - 1)),
          f = t.length - m.length;
        return (0, a.jsxs)("div", {
          className: "flex",
          children: [
            m.map(
              (e, t) =>
                (0, a.jsx)(
                  "div",
                  {
                    className: "overflow-hidden rounded-full",
                    style: {
                      marginLeft:
                        d > 1
                          ? 0 === t
                            ? ""
                            : r
                            ? -Math.floor(u / 2 - 4)
                            : 6
                          : 0,
                      filter: "drop-shadow(0px 3px 6px rgba(15, 15, 15, 0.25))",
                    },
                    children: (0, a.jsx)(
                      n.ZP,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? c(Object(r), !0).forEach(function (t) {
                                (0, s.Z)(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(r)
                              )
                            : c(Object(r)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(r, t)
                                );
                              });
                        }
                        return e;
                      })({ currency: e, size: u }, h)
                    ),
                  },
                  t
                ),
              []
            ),
            f > 0 &&
              (0, a.jsx)("div", {
                className:
                  "rounded-full overflow-hidden flex items-center justify-center z-[1]",
                style: {
                  marginLeft: d > 1 ? (r ? -Math.floor(u / 2 + 2) : -6) : 0,
                  width: u,
                  height: u,
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #DBDBDB 100%)",
                  filter: "drop-shadow(0px 3px 6px rgba(15, 15, 15, 0.25))",
                },
                children: (0, a.jsxs)(l.Z, {
                  weight: 700,
                  className: "text-low-emphesis",
                  variant: "sm",
                  children: ["+", t.length - d + 1],
                }),
              }),
          ],
        });
      };
    },
    70514: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(538578);
      r(667294);
      var s = r(505867),
        i = r(785893);
      function l(e) {
        let {
          currency0: t,
          currency1: r,
          className: l = "",
          logoClassName: a = "",
          size: o = 16,
        } = e;
        return (0, i.jsxs)("div", {
          className: (0, n.AK)("flex items-center space-x-2", l),
          children: [
            (0, i.jsx)(s.X, { className: a, currency: t, size: o }),
            (0, i.jsx)(s.X, { className: a, currency: r, size: o }),
          ],
        });
      }
    },
    572432: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return m;
        },
      });
      var n = r(108307),
        s = r(704730),
        i = r(425675),
        l = r.n(i);
      let a = (e, t) => `
<svg width="${e}" height="${t}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${e}" height="${t}" fill="#333" />
  <rect id="r" width="${e}" height="${t}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${e}" to="${e}" dur="1s" repeatCount="indefinite"  />
</svg>`;
      var o = r(785893);
      let c = ["src", "width", "height", "layout"];
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                (0, n.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let h = (e) => window.btoa(e);
      var m = (e) => {
        let { src: t, width: r, height: n, layout: i } = e,
          d = (0, s.Z)(e, c),
          m = parseInt(String(n), 10) >= 40 && parseInt(String(r), 10) >= 40,
          f = void 0;
        return (0, o.jsx)("div", {
          style: { width: r, height: n },
          className: "overflow-hidden rounded",
          children: m
            ? (0, o.jsx)(
                l(),
                u(
                  {
                    loader: f,
                    src: t,
                    width: r,
                    height: n,
                    layout: i,
                    placeholder: "blur",
                    blurDataURL: `data:image/svg+xml;base64,${h(a(r, n))}`,
                  },
                  d
                )
              )
            : (0, o.jsx)(
                l(),
                u(
                  {
                    loader: f,
                    src: t,
                    width: r,
                    height: n,
                    layout: i,
                    placeholder: "empty",
                  },
                  d
                )
              ),
        });
      };
    },
    960239: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return c;
        },
      });
      var n = r(108307),
        s = r(538578),
        i = r(667294),
        l = r(572432),
        a = r(785893);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      let c =
          "https://raw.githubusercontent.com/swapsicledex/swapsicle-token-list/40a82475eb7857d38f9f458aca7699c1f064118f/logos/unknown.svg",
        d = {};
      t.Z = (e) => {
        let {
            srcs: t,
            width: r,
            height: u,
            alt: h = "",
            className: m,
            style: f,
          } = e,
          { 1: p } = (0, i.useState)(0),
          x = t.find((e) => !d[e]);
        return (0, a.jsx)("div", {
          className: "rounded-full",
          style: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? o(Object(r), !0).forEach(function (t) {
                    (0, n.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : o(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({ width: r, height: u }, f),
          children: (0, a.jsx)(l.Z, {
            src: x || c,
            onError: () => {
              x && (d[x] = !0), p((e) => e + 1);
            },
            width: r,
            height: u,
            alt: h,
            layout: "fixed",
            className: (0, s.AK)("rounded-full", m),
          }),
        });
      };
    },
    101097: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return v;
        },
      });
      var n = r(14744),
        s = r(341276),
        i = r(933222),
        l = (r(108307), r(704730), r(741664), r(811163)),
        a = (r(667294), r(785893)),
        o = r(178794),
        c = r(785910),
        d = r(322321),
        u = r(939507),
        h = r(949552),
        m = r.n(h),
        f = r(425675),
        p = r.n(f),
        x = r(538578),
        g = r(799603),
        w = r(259417),
        b = r(629936);
      let j = (e) => {
        let { children: t, feature: r } = e,
          { i18n: h } = (0, n.mV)(),
          { chainId: f, provider: j, account: v, disconnect: N } = (0, u.Z)(),
          y = (0, l.useRouter)(),
          { onSetDeactivated: O } = (0, b.Uu)();
        h._(h._("landing page."));
        let P = [
            s.ChainId.TELOS_TESTNET,
            s.ChainId.MANTLE_TESTNET,
            s.ChainId.TAIKO_TESTNET,
            s.ChainId.ETHEREUM,
            s.ChainId.OPTIMISM,
            s.ChainId.ARBITRUM,
            s.ChainId.MATIC,
            s.ChainId.AVALANCHE,
            s.ChainId.FANTOM,
            s.ChainId.BSC,
          ],
          k = Object.entries(o.Z).reduce((e, t) => {
            let [n, s] = t;
            return s.includes(r) && !P.includes(Number(n)) && e.push(n), e;
          }, []),
          C =
            1 == k.length
              ? "grid-cols-1"
              : k.length > 2
              ? "lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3"
              : "grid-cols-2";
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i.Z.Controlled, {
              isOpen: !!v && !o.Z[f]?.includes(r),
              onDismiss: () => null,
              transparent: !0,
              children: (0, a.jsxs)("div", {
                className: "flex flex-col justify-center mt-0 freezer",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "flex items-center mt-1 ml-1 text-white align-middle",
                    children: (0, a.jsxs)("button", {
                      type: "button",
                      onClick: () => y.back(),
                      children: [
                        (0, a.jsx)(g.G, {
                          size: "sm",
                          icon: w.acZ,
                          style: { color: "rgb(255,255,255,100)" },
                          className: "mr-1",
                        }),
                        "Back",
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "p-4",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "mb-4 text-center",
                        children: "Incorrect Network",
                      }),
                      (0, a.jsxs)("h4", {
                        className: "mb-4 text-center",
                        children: [
                          "This feature is currently unsupported on ",
                          c.z[f],
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex justify-center mb-4",
                        children: (0, a.jsx)("div", {
                          className: "w-[40px] h-[40px] ",
                          children: (0, a.jsx)(p(), {
                            src: c.w[f] ? c.w[f] : c.w[s.ChainId.MANTLE],
                            alt: "Switch Network",
                            className:
                              "rounded-md filter drop-shadow-currencyLogo",
                            width: 40,
                            height: 40,
                          }),
                        }),
                      }),
                      (0, a.jsxs)("h5", {
                        className: "mb-4 text-center ",
                        children: [
                          "Select an available network below or disconnect your wallet to continue to ",
                          r,
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "icecard_statsbox",
                        style: { background: "rgb(19, 25, 40, 0.90)" },
                        children: [
                          (0, a.jsx)("h4", {
                            className: "mb-4 text-center",
                            children: "Available Networks",
                          }),
                          (0, a.jsx)("div", {
                            className: (0, x.AK)(
                              "grid flex-row justify-center gap-5 overflow-x-auto md:gap-8 ",
                              C
                            ),
                            children: k.map((e, t) =>
                              (0, a.jsxs)(
                                "button",
                                {
                                  className:
                                    "flex flex-col items-center justify-start gap-2 min-w-[100px] text-primary hover:text-white",
                                  onClick: () => {
                                    let t = d.b[e];
                                    m().set("chainId", e),
                                      e === s.ChainId.ETHEREUM.toString()
                                        ? j?.send(
                                            "wallet_switchEthereumChain",
                                            [{ chainId: "0x1" }, v]
                                          )
                                        : j?.send("wallet_addEthereumChain", [
                                            t,
                                            v,
                                          ]);
                                  },
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "w-[40px] h-[40px]",
                                      children: (0, a.jsx)(p(), {
                                        src: c.w[e],
                                        alt: "Switch Network",
                                        className:
                                          "rounded-md filter drop-shadow-currencyLogo",
                                        width: 40,
                                        height: 40,
                                      }),
                                    }),
                                    (0, a.jsx)("h5", {
                                      className: "",
                                      children: c.z[e],
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "flex items-center justify-center",
                        children: (0, a.jsx)("button", {
                          className:
                            "flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-4 text-sm focus:outline-none focus:ring text-high-emphesis ButtonV2 max-w-[300px]",
                          onClick: () => {
                            N(), O(!0);
                          },
                          children: "Disconnect Wallet",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            t,
          ],
        });
      };
      var v = (e) => (t) => {
        let { children: r } = t;
        return (0, a.jsx)(j, { feature: e, children: r });
      };
    },
    500989: function (e, t, r) {
      "use strict";
      r.d(t, {
        UK: function () {
          return n.UK;
        },
        qL: function () {
          return n.qL;
        },
        x7: function () {
          return u;
        },
        rO: function () {
          return d.rO;
        },
        hP: function () {
          return d.hP;
        },
        mX: function () {
          return d.mX;
        },
        cq: function () {
          return d.cq;
        },
        MQ: function () {
          return d.MQ;
        },
        hU: function () {
          return d.hU;
        },
        TK: function () {
          return h;
        },
        ou: function () {
          return d.ou;
        },
        RO: function () {
          return d.RO;
        },
        JE: function () {
          return d.JE;
        },
        oe: function () {
          return d.oe;
        },
        i7: function () {
          return d.i7;
        },
        sL: function () {
          return d.sL;
        },
        oF: function () {
          return m.ZP;
        },
        lz: function () {
          return d.lz;
        },
      });
      var n = r(178462),
        s = r(119485),
        i = r(609279),
        l = r(353487),
        a = r(939507),
        o = r(828465),
        c = r(667294),
        d = r(86083),
        u = function () {
          let { account: e, chainId: t } = (0, a.Z)(),
            r = (0, o.h7)(),
            n = (0, d.rO)();
          return {
            deposit: (0, c.useCallback)(
              async (a, o) => {
                if (o && t)
                  try {
                    let c = (0, s.getAddress)(a);
                    if (c === l.WNATIVE_ADDRESS[t]) {
                      let t = await n?.deposit(i.d, e, e, o, 0, { value: o });
                      return r(t, { summary: "Deposit to Bentobox" });
                    }
                    {
                      let t = await n?.deposit(c, e, e, o, 0);
                      return r(t, { summary: "Deposit to Bentobox" });
                    }
                  } catch (e) {
                    return console.error("bentobox deposit error:", e), e;
                  }
              },
              [e, r, n, t]
            ),
            withdraw: (0, c.useCallback)(
              async (i, a, o) => {
                if (a && t)
                  try {
                    let c = (0, s.getAddress)(i),
                      d = await n?.withdraw(
                        c === l.WNATIVE_ADDRESS[t]
                          ? "0x0000000000000000000000000000000000000000"
                          : c,
                        e,
                        e,
                        a,
                        o ? o.toString() : 0
                      );
                    return r(d, { summary: "Withdraw from Bentobox" });
                  } catch (e) {
                    return console.error("bentobox withdraw error:", e), e;
                  }
              },
              [e, r, n, t]
            ),
            harvest: (0, c.useCallback)(async function (e) {
              let s =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (t)
                try {
                  let t = await n?.harvest(e, s, 0);
                  return r(t, {
                    summary: s ? "Harvest & Rebalance" : "Harvest",
                  });
                } catch (e) {
                  return console.error("bentobox harvest error:", e), e;
                }
            }, []),
          };
        };
      r(489638), r(219381), r(229128), r(501082);
      var h = function (e) {
          let { data: t } = e,
            { 0: r, 1: n } = (0, c.useState)("");
          return {
            result: (function (e) {
              let { data: t, term: r } = e;
              try {
                let e = t?.filter((e) =>
                  Object.values(e.pair)
                    ?.flatMap(Object.values)
                    ?.some(
                      (e) =>
                        "string" == typeof e &&
                        e.toLowerCase().includes(r.toLowerCase())
                    )
                );
                return r ? e : t;
              } catch (e) {
                return t;
              }
            })({ data: t, term: r }),
            search: n,
            term: r,
            reset: () => n(""),
          };
        },
        m = r(911163);
    },
    178462: function (e, t, r) {
      "use strict";
      r.d(t, {
        UK: function () {
          return m;
        },
        qL: function () {
          return f;
        },
        re: function () {
          return p;
        },
        NU: function () {
          return x;
        },
      }),
        r(421046);
      var n,
        s = r(341276),
        i = r(353487),
        l = r(939507),
        a = r(828465),
        o = r(667294),
        c = r(799767),
        d = r(86083),
        u = r(243475),
        h = r(330214);
      let m =
        (((n = {}).UNKNOWN = "UNKNOWN"),
        (n.NOT_APPROVED = "NOT_APPROVED"),
        (n.PENDING = "PENDING"),
        (n.APPROVED = "APPROVED"),
        n);
      function f(e, t) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { account: r } = (0, l.Z)(),
          { getGasPrice: n } = (0, h.Z)(),
          i = e?.currency?.isToken ? e.currency : void 0,
          c = (function (e, t, r) {
            let n = (0, d.Ib)(e?.address, !1),
              i = (0, o.useMemo)(() => [t, r], [t, r]),
              l = (0, u.Wk)(n, "allowance", i).result;
            return (0, o.useMemo)(
              () =>
                e && l
                  ? s.CurrencyAmount.fromRawAmount(e, l.toString())
                  : void 0,
              [e, l]
            );
          })(i, r ?? void 0, t),
          f = (0, a.wB)(i?.address, t),
          p = (0, o.useMemo)(
            () =>
              e && t
                ? e.currency.isNative
                  ? m.APPROVED
                  : c
                  ? c.lessThan(e)
                    ? f
                      ? m.PENDING
                      : m.NOT_APPROVED
                    : m.APPROVED
                  : m.UNKNOWN
                : m.UNKNOWN,
            [e, c, f, t]
          ),
          x = (0, d.Ib)(i?.address),
          g = (0, a.h7)(),
          w = (0, o.useCallback)(async () => {
            if (p !== m.NOT_APPROVED) {
              console.error("approve was called unnecessarily");
              return;
            }
            if (!i) {
              console.error("no token");
              return;
            }
            if (!x) {
              console.error("tokenContract is null");
              return;
            }
            if (!e) {
              console.error("missing amount to approve");
              return;
            }
            if (!t) {
              console.error("no spender");
              return;
            }
            let r = n();
            return x
              .approve(t, e.quotient.toString(), { gasPrice: r })
              .then((r) => {
                g(r, {
                  summary: "Approve " + e.currency.symbol,
                  approval: { tokenAddress: i.address, spender: t },
                });
              })
              .catch((e) => {
                throw (console.debug("Failed to approve token", e), e);
              });
          }, [p, i, x, e, t, g, n]);
        return [p, w];
      }
      function p(e, t) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { chainId: r } = (0, l.Z)();
        return f(
          (0, o.useMemo)(
            () =>
              e && e.inputAmount.currency.isToken
                ? e.maximumAmountIn(t)
                : void 0,
            [e, t]
          ),
          r
            ? e instanceof s.Trade
              ? i.ROUTER_ADDRESS[r]
              : e instanceof c.ho
              ? i.V3_SWAP_ROUTER_ADDRESS[r]
              : void 0
            : void 0
        );
      }
      let x = (e, t, r) => {
        let { account: n } = (0, l.Z)(),
          { getGasPrice: s } = (0, h.Z)(),
          i = (0, d.Ib)(e?.address, !1),
          c = (0, o.useMemo)(() => [n, r], [n, r]),
          f = (0, u.Wk)(i, "allowance", c).result,
          p = (0, a.wB)(e?.address, r),
          x = (0, o.useMemo)(
            () =>
              t && r && f
                ? Number(f) < Number(t)
                  ? p
                    ? m.PENDING
                    : m.NOT_APPROVED
                  : m.APPROVED
                : m.UNKNOWN,
            [t, f, p, r]
          ),
          g = (0, d.Ib)(e?.address),
          w = (0, a.h7)(),
          b = (0, o.useCallback)(async () => {
            if (x !== m.NOT_APPROVED) {
              console.error("approve was called unnecessarily");
              return;
            }
            if (!e) {
              console.error("no token");
              return;
            }
            if (!g) {
              console.error("tokenContract is null");
              return;
            }
            if (!t) {
              console.error("missing amount to approve");
              return;
            }
            if (!r) {
              console.error("no spender");
              return;
            }
            let n = s();
            return g
              .approve(r, t, { gasPrice: n })
              .then((t) => {
                w(t, {
                  summary: "Approve " + e.symbol,
                  approval: { tokenAddress: e.address, spender: r },
                });
              })
              .catch((e) => {
                throw (console.debug("Failed to approve token", e), e);
              });
          }, [x, e, g, t, r, w, s]);
        return [x, b];
      };
    },
    330214: function (e, t, r) {
      "use strict";
      var n = r(939507),
        s = r(548470);
      t.Z = function () {
        let { chainId: e } = (0, n.Z)();
        return {
          getGasPrice: () => {
            let t;
            let r = JSON.parse(
              '[{"chainId":5000,"price":0.02},{"chainId":5003,"price":0.02},{"chainId":167000,"price":0.15},{"chainId":167009,"price":0.05}]'
            );
            return (
              r &&
                r.map((r) => {
                  r.chainId === e && (t = s.vz(r.price.toString(), "gwei"));
                }),
              t
            );
          },
        };
      };
    },
    833607: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = r(667294),
        s = r(229128),
        i = r(625199),
        l = r(827586),
        a = r(538578),
        o = r(243475),
        c = r(86083);
      function d(e) {
        let t = (0, n.useMemo)(() => (e ? (0, i.y)(e) : void 0), [e]),
          r = (function (e) {
            let t = (0, n.useMemo)(() => {
                if (!e) return [void 0];
                try {
                  return e ? [(0, l.VM)(e)] : [void 0];
                } catch (e) {
                  return [void 0];
                }
              }, [e]),
              r = (0, c.zb)(!1),
              s = (0, o.Wk)(r, "resolver", t),
              i = s.result?.[0],
              d = (0, c.uU)(i && (0, a.Fr)(i) ? void 0 : i, !1),
              u = (0, o.Wk)(d, "contenthash", t);
            return {
              contenthash: u.result?.[0] ?? null,
              loading: s.loading || u.loading,
            };
          })(t?.ensName);
        return (0, n.useMemo)(
          () =>
            t
              ? r.contenthash
                ? (0, s.ie)((0, s.il)(r.contenthash))
                : []
              : e
              ? (0, s.ie)(e)
              : [],
          [t, r.contenthash, e]
        );
      }
    },
    319623: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return Y;
          },
        });
      var n,
        s = r(259417),
        i = r(799603),
        l = r(555814),
        a = r(14744),
        o = r(667294),
        c = r(45697),
        d = r.n(c);
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var h = (0, o.forwardRef)(function (e, t) {
        var r = e.color,
          n = e.size,
          s = void 0 === n ? 24 : n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              s = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  s = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (s[r] = e[r]);
                return s;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (s[r] = e[r]);
            }
            return s;
          })(e, ["color", "size"]);
        return o.createElement(
          "svg",
          u(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: s,
              height: s,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: void 0 === r ? "currentColor" : r,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            i
          ),
          o.createElement("circle", { cx: "11", cy: "11", r: "8" }),
          o.createElement("line", {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65",
          })
        );
      });
      (h.propTypes = {
        color: d().string,
        size: d().oneOfType([d().string, d().number]),
      }),
        (h.displayName = "Search");
      var m = r(785893),
        f = (e) => {
          let { term: t, search: r, description: n, width: s, height: i } = e,
            { i18n: l } = (0, a.mV)();
          return (0, m.jsxs)("div", {
            className: `items-center gap-4 ${s ? `w-${s}` : "w-[350px]"}`,
            children: [
              (0, m.jsx)("p", {
                className: "ml-1 text-[#7f7f7f]",
                style: { fontSize: "14px" },
                children: n,
              }),
              (0, m.jsxs)("div", {
                className: `flex h-[${
                  i || "50px"
                }] items-center flex-grow w-full gap-2 px-3 py-2 bg-opacity-50 border rounded focus-within:ring-2 ring-blue border-dark-800 bg-dark-900 sm:w-auto`,
                children: [
                  (0, m.jsx)(h, { strokeWidth: 3, width: 20, height: 20 }),
                  (0, m.jsx)("input", {
                    className:
                      "w-full bg-transparent text-high-emphesis placeholder:text-low-emphesis",
                    placeholder: "Search",
                    onChange: (e) => r(e.target.value),
                    value: t,
                  }),
                ],
              }),
            ],
          });
        },
        p = r(534799),
        x = r(70514),
        g = r(611794),
        w = r(108307),
        b = r(25287);
      let j = o.forwardRef(function (e, t) {
        return o.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: t,
            },
            e
          ),
          o.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14 5l7 7m0 0l-7 7m7-7H3",
          })
        );
      });
      var v = r(811163),
        N = r(379521),
        y = r(538578);
      let O = (((n = {}).RESET_PAGE = "resetPage"), n);
      function P(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? P(Object(r), !0).forEach(function (t) {
                (0, w.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : P(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function C(e) {
        let {
            columns: t,
            data: r,
            columnsHideable: n = [],
            defaultSortBy: s = { id: "", desc: !1 },
            link: i,
            callback: l,
            shouldStopPageReset: a,
          } = e,
          { 0: c, 1: d } = (0, o.useState)(0 !== n.length),
          { 0: u, 1: h } = (0, o.useState)(!1),
          {
            getTableProps: f,
            getTableBodyProps: p,
            headerGroups: x,
            prepareRow: g,
            rows: w,
            page: v,
            nextPage: P,
            previousPage: C,
            canPreviousPage: I,
            canNextPage: A,
            setPageSize: T,
            allColumns: S,
            state: { pageIndex: R, pageSize: M },
          } = (0, N.useTable)(
            {
              columns: t,
              data: r,
              defaultCanSort: !1,
              autoResetSortBy: !1,
              stateReducer: (e, t, r) =>
                t.type === O.RESET_PAGE && a && a() ? r : e,
              initialState: {
                hiddenColumns: n,
                sortBy: [{ id: s.id, desc: s.desc }],
              },
            },
            N.useSortBy,
            N.usePagination
          ),
          D = (e) => {
            S.filter((e) => n.find((t) => t === e.id)).forEach((e) =>
              e.toggleHidden(!c)
            ),
              d(!c),
              e.stopPropagation();
          };
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)("div", {
              className: "pools-table p-4 !pt-0 icecard rounded-l",
              children: (0, m.jsxs)(
                "table",
                k(
                  k(
                    {
                      className:
                        "w-auto min-w-full mt-2 -mb-2 border-separate table-fixed",
                    },
                    f()
                  ),
                  {},
                  {
                    style: { borderSpacing: "0 0.5rem" },
                    children: [
                      (0, m.jsx)("thead", {
                        className: "hidden md:table-header-group",
                        children: x.map((e) =>
                          (0, m.jsx)(
                            "tr",
                            k(
                              k({}, e.getHeaderGroupProps()),
                              {},
                              {
                                children: e.headers.map((t, r, n) =>
                                  (0, m.jsx)(
                                    "th",
                                    k(
                                      k(
                                        {},
                                        t.getHeaderProps(
                                          t.getSortByToggleProps()
                                        )
                                      ),
                                      {},
                                      {
                                        children: (0, m.jsx)("div", {
                                          className: (0, y.AK)(
                                            (3 === r || 4 === r) &&
                                              "row-hidden",
                                            0 === r && "pl-2",
                                            r === e.headers.length - 1 &&
                                              "pr-2",
                                            "select-none w-full"
                                          ),
                                          children: (0, m.jsx)("div", {
                                            className:
                                              "flex flex-row text-sm text-white",
                                            children: (0, m.jsxs)("div", {
                                              className: (0, y.AK)(
                                                0 !== r &&
                                                  "right" === t.align &&
                                                  "justify-end",
                                                0 !== r &&
                                                  "left" === t.align &&
                                                  "justify-start",
                                                0 !== r &&
                                                  "center" === t.align &&
                                                  "justify-center",
                                                !t.align &&
                                                  (0 !== r
                                                    ? "justify-start"
                                                    : "justify-end"),
                                                0 !== r && "ml-2",
                                                r !== n.length - 1 && "mr-2",
                                                0 === r && "flex-row-reverse",
                                                (3 === r || 4 === r) &&
                                                  "row-hidden",
                                                0 === r
                                                  ? "right" === t.align
                                                    ? "justify-start"
                                                    : "justify-end"
                                                  : "",
                                                "w-full flex whitespace-nowrap xl:mx-auto"
                                              ),
                                              children: [
                                                (0, m.jsx)("span", {
                                                  className: (0, y.AK)(
                                                    "flex items-center",
                                                    t.isSorted
                                                      ? "block"
                                                      : "hidden"
                                                  ),
                                                  children: (0, m.jsx)("div", {
                                                    className: (0, y.AK)(
                                                      "fill-current text-white",
                                                      !t.isSortedDesc &&
                                                        "rotate-180 transform"
                                                    ),
                                                    children: (0, m.jsx)(
                                                      "svg",
                                                      {
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        className: "w-5 h-5",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: (0, m.jsx)(
                                                          "path",
                                                          {
                                                            fillRule: "evenodd",
                                                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                            clipRule: "evenodd",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                }),
                                                t.render("Header"),
                                                t.HideHeader &&
                                                  c &&
                                                  (0, m.jsx)("button", {
                                                    onClick: (e) => D(e),
                                                    className:
                                                      "ml-1 text-dark-700",
                                                    children:
                                                      t.render("HideHeader"),
                                                  }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      }
                                    ),
                                    r
                                  )
                                ),
                              }
                            ),
                            "tr"
                          )
                        ),
                      }),
                      (0, m.jsxs)("div", {
                        className: "flex flex-col md:hidden",
                        children: [
                          (0, m.jsxs)("button", {
                            onClick: () => h(!u),
                            className: "flex items-center pl-2",
                            children: [
                              "Sort Options",
                              " ",
                              (0, m.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: `${
                                  u ? "" : "-scale-100"
                                } w-5 h-5 ml-2 my-2 transition-all ease-in-out duration-300`,
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: (0, m.jsx)("path", {
                                  fillRule: "evenodd",
                                  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                  clipRule: "evenodd",
                                }),
                              }),
                            ],
                          }),
                          x.map((e) =>
                            (0, m.jsx)(
                              "div",
                              k(
                                k(
                                  {
                                    className: `flex flex-col w-full space-y-4 transition-all duration-300 ease-in-out rounded px-4 ${
                                      u
                                        ? "max-h-screen bg-dark-card p-4"
                                        : "max-h-0 overflow-hidden"
                                    }`,
                                  },
                                  e.getHeaderGroupProps()
                                ),
                                {},
                                {
                                  children: e.headers.map((e, t, r) =>
                                    (0, m.jsx)(
                                      "div",
                                      k(
                                        k(
                                          { className: "" },
                                          e.getHeaderProps(
                                            e.getSortByToggleProps()
                                          )
                                        ),
                                        {},
                                        {
                                          children: (0, m.jsx)("div", {
                                            className: "select-none",
                                            children: (0, m.jsx)("div", {
                                              className: "text-sm text-white",
                                              children: (0, m.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                  e.render("Header"),
                                                  (0, m.jsx)("span", {
                                                    className: (0, y.AK)(
                                                      "flex items-center",
                                                      e.isSorted
                                                        ? "block"
                                                        : "hidden"
                                                    ),
                                                    children: (0, m.jsx)(
                                                      "div",
                                                      {
                                                        className: (0, y.AK)(
                                                          "fill-current text-white",
                                                          !e.isSortedDesc &&
                                                            "rotate-180 transform"
                                                        ),
                                                        children: (0, m.jsx)(
                                                          "svg",
                                                          {
                                                            xmlns:
                                                              "http://www.w3.org/2000/svg",
                                                            className:
                                                              "w-5 h-5",
                                                            viewBox:
                                                              "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: (0,
                                                            m.jsx)("path", {
                                                              fillRule:
                                                                "evenodd",
                                                              d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                              clipRule:
                                                                "evenodd",
                                                            }),
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  e.HideHeader &&
                                                    c &&
                                                    (0, m.jsx)("button", {
                                                      onClick: (e) => D(e),
                                                      className:
                                                        "ml-1 text-dark-700",
                                                      children:
                                                        e.render("HideHeader"),
                                                    }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }
                                      ),
                                      t
                                    )
                                  ),
                                }
                              ),
                              "tr"
                            )
                          ),
                        ],
                      }),
                      (0, m.jsx)(
                        "tbody",
                        k(
                          k({}, p()),
                          {},
                          {
                            children: v.map(
                              (e, t) => (
                                g(e),
                                (0, m.jsx)(
                                  "tr",
                                  k(
                                    k({}, e.getRowProps()),
                                    {},
                                    {
                                      className:
                                        "h-[210px] sm:h-[130px] md:h-fit",
                                      children: e.cells.map((t, r) =>
                                        (0, m.jsx)(
                                          "td",
                                          k(
                                            k(
                                              {
                                                className: `pl-0 pr-0 ${
                                                  0 !== r && "row-hidden"
                                                } text-white bg-dark-card rounded md:rounded-none md:first:rounded-l md:last:rounded-r`,
                                              },
                                              t.getCellProps()
                                            ),
                                            {},
                                            {
                                              children: (0, m.jsx)(E, {
                                                row: e,
                                                cell: t,
                                                cI: r,
                                                callback: l,
                                                link: i,
                                              }),
                                            }
                                          ),
                                          r
                                        )
                                      ),
                                    }
                                  ),
                                  t
                                )
                              )
                            ),
                          }
                        )
                      ),
                    ],
                  }
                )
              ),
            }),
            r?.length > 10 &&
              (0, m.jsxs)("div", {
                className: "flex justify-between w-full",
                children: [
                  (0, m.jsxs)("div", {
                    className: "flex text-sm font-bold text-white",
                    children: [
                      (0, m.jsx)("div", { children: "Rows per page: " }),
                      (0, m.jsx)("select", {
                        value: M,
                        onChange: (e) => T(Number(e.target.value)),
                        className: "ml-1 bg-transparent",
                        children: [10, 20, 30, 40, 50, 60].map((e) =>
                          (0, m.jsx)(
                            "option",
                            {
                              className: "bg-dark-1000",
                              value: e,
                              children: e,
                            },
                            e
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: "flex",
                    children: [
                      (0, m.jsx)("div", {
                        className: "text-sm text-white",
                        children: `${M * R + 1}-${M * (R + 1)} of ${w.length}`,
                      }),
                      (0, m.jsx)("button", {
                        onClick: () => C(),
                        className: (0, y.AK)(
                          I ? "" : "opacity-50 hover:cursor-default",
                          "ml-3"
                        ),
                        children: (0, m.jsx)(b.Z, { width: 16, height: 16 }),
                      }),
                      (0, m.jsx)("button", {
                        onClick: () => P(),
                        className: (0, y.AK)(
                          A ? "" : "opacity-50 hover:cursor-default",
                          "ml-3"
                        ),
                        children: (0, m.jsx)(j, { width: 16, height: 16 }),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      function E(e) {
        let { link: t, callback: r, row: n, cell: s, cI: i } = e,
          l = (0, v.useRouter)(),
          a = (e, t) => {
            var r = t.split(".");
            if (1 === r.length) return e[t];
            if (Array.isArray(r)) {
              for (
                var n = r.pop(), s = r.length, i = 1, l = r[0];
                (e = e[l]) && i < s;

              )
                (l = r[i]), i++;
              if (e) return e[n];
            } else throw "parts is not valid array";
          };
        return (
          (0, o.useEffect)(() => {
            t &&
              (t.id2
                ? l.prefetch(
                    `${t.href}${a(s.row.original, t.id)}/${a(
                      s.row.original,
                      t.id2
                    )}`
                  )
                : l.prefetch(`${t.href}${a(s.row.original, t.id)}`));
          }, []),
          (0, m.jsx)("div", {
            onClick: () => {
              if (t) {
                if (!window) return;
                t.id2
                  ? l.push(
                      t.href +
                        a(s.row.original, t.id) +
                        "/" +
                        a(s.row.original, t.id2)
                    )
                  : l.push(t.href + a(s.row.original, t.id));
              }
              r && r(s.row.original);
            },
            children: (0, m.jsx)("div", {
              className: (0, y.AK)(
                0 === i && "rounded-l pl-4",
                i === n.cells.length - 1 && "rounded-r pr-4",
                t && "cursor-pointer",
                "h-16 text-white  flex items-center"
              ),
              children: (0, m.jsx)("div", {
                className: (0, y.AK)(
                  "right" === s.column.align && "text-right",
                  "left" === s.column.align && "text-left",
                  "center" === s.column.align && "text-center",
                  0 !== i && "ml-2",
                  i !== n.cells.length - 1 && "mr-2",
                  "w-full xl:mx-auto text-white"
                ),
                children: s.render("Cell"),
              }),
            }),
          })
        );
      }
      var I = r(579542);
      function A(e) {
        let { pair: t } = e,
          r = (0, I.U8)(t?.token0?.id),
          n = (0, I.U8)(t?.token1?.id),
          s = Number(t.fee) / 1e4;
        return (0, m.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [
            (0, m.jsxs)("div", {
              className:
                "flex flex-col gap-3 font-sans font-bold md:flex-row md:items-center",
              children: [
                (0, m.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, m.jsx)(x.Z, {
                      className: "-space-x-3",
                      logoClassName: "rounded-full",
                      currency0: r,
                      currency1: n,
                      size: 32,
                    }),
                    (0, m.jsx)("div", {
                      className: "flex flex-col whitespace-nowrap",
                      children: (0, m.jsxs)("div", {
                        className: "font-bold text-high-emphesis",
                        children: [r?.symbol, " — ", n?.symbol],
                      }),
                    }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  className: "flex gap-3",
                  children: [
                    (0, m.jsx)("div", {
                      className: "py-1 px-2 bg-[#2b3347] rounded-xl text-sm",
                      children: `${s}%`,
                    }),
                    t.farming &&
                      (0, m.jsx)("div", {
                        className:
                          "py-1 px-2 bg-[#9bf7c3] rounded-xl text-sm text-[#105a31]",
                        children: "Farm",
                      }),
                  ],
                }),
              ],
            }),
            (0, m.jsxs)("div", {
              className: "grid grid-cols-2 gap-4 sm:grid-cols-4 md:hidden",
              children: [
                (0, m.jsxs)("div", {
                  children: [
                    (0, m.jsx)("div", {
                      className: "font-bold",
                      children: "Liquidity: ",
                    }),
                    (0, m.jsx)("div", { children: (0, y.nH)(t.liquidity, !0) }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  children: [
                    (0, m.jsx)("div", {
                      className: "font-bold",
                      children: "Volume(24H): ",
                    }),
                    (0, m.jsx)("div", {
                      children: (0, y.uf)(t.volume1D, !0, !1, 2),
                    }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  children: [
                    (0, m.jsx)("div", {
                      className: "font-bold",
                      children: "Av. APR:",
                    }),
                    (0, m.jsxs)("div", {
                      children: [
                        (
                          Number(t.aprs.averagePool) +
                          Number(t.aprs.averageFarming)
                        )?.toLocaleString(),
                        "%",
                      ],
                    }),
                  ],
                }),
                (0, m.jsxs)("div", {
                  children: [
                    (0, m.jsx)("div", {
                      className: "font-bold",
                      children: "Max APR:",
                    }),
                    (0, m.jsxs)("div", {
                      children: [
                        (
                          Number(t.aprs.maxPool) + Number(t.aprs.maxFarming)
                        )?.toLocaleString(),
                        "%",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let T = { id: "tvlUSD", desc: !0 };
      function S(e, t, r) {
        let n = r(e.original.pair),
          s = r(t.original.pair);
        return n === s ? 0 : n > s ? 1 : -1;
      }
      let R = [
        {
          Header: "Pool name",
          accessor: "pair",
          Cell: (e) => (0, m.jsx)(A, { pair: e.value }),
          align: "left",
        },
        {
          Header: "Volume (24H)",
          accessor: "pair.volume1D",
          Cell: (e) =>
            (0, m.jsx)("span", {
              className: "hidden font-bold text-white md:inline",
              children: (0, y.uf)(e.value, !0, !1, 2),
            }),
          align: "center",
        },
        {
          Header: "Liquidity",
          accessor: "tvlUSD",
          Cell: (e) =>
            (0, m.jsx)("span", {
              className: "hidden font-bold text-white md:inline",
              children: (0, y.nH)(e.value, !0),
            }),
          align: "center",
          class: "pool_browse",
        },
        {
          Header: "Max APR",
          accessor: "pair.aprs",
          Cell: (e) =>
            (0, m.jsxs)("span", {
              className: "hidden font-bold text-white md:inline",
              children: [
                Number(
                  (
                    Number(e.value.maxPool) + Number(e.value.maxFarming)
                  )?.toFixed()
                )?.toLocaleString(),
                "%",
              ],
            }),
          align: "center",
          sortType: (e, t) =>
            S(e, t, (e) => {
              let { aprs: t } = e;
              return t.maxPool + t.maxFarming;
            }),
        },
        {
          Header: "Av. APR",
          accessor: "aprs",
          Cell: (e) =>
            (0, m.jsxs)("span", {
              className: "hidden font-bold text-white md:inline",
              children: [
                Number(
                  (
                    Number(e.value.averagePool) + Number(e.value.averageFarming)
                  )?.toFixed()
                )?.toLocaleString(),
                "%",
              ],
            }),
          align: "center",
          sortType: (e, t) =>
            S(e, t, (e) => {
              let { aprs: t } = e;
              return t.averagePool + t.averageFarming;
            }),
        },
      ];
      function M(e) {
        let {
          pairs: t,
          type: r,
          network: n,
          isLoading: s,
          shouldStopPageReset: i,
        } = e;
        return (0, m.jsx)(m.Fragment, {
          children: s
            ? (0, m.jsx)("div", {
                className: "flex justify-center w-full p-8",
                children: (0, m.jsx)(g.Z, { size: "18px", stroke: "white" }),
              })
            : t
            ? (0, m.jsx)(C, {
                columns: R,
                data: t,
                defaultSortBy: T,
                link: { href: `/liquidity/${r}/${n}/`, id: "address" },
                shouldStopPageReset: i,
              })
            : (0, m.jsx)("div", {
                className: "w-full p-8 text-center",
                children: "No pools",
              }),
        });
      }
      var D = r(101097),
        L = r(500989),
        _ = r(322321),
        F = r(600840),
        H = r(939507),
        Z = r(902962),
        B = r(809008),
        $ = r.n(B),
        U = r(425675),
        V = r.n(U),
        K = r(741664),
        z = r.n(K);
      let W = { ALL_POOLS: "All pools", MY_POOLS: "My pools", FARM: "Farm" },
        q = {
          keys: [
            "pair.token0.symbol",
            "pair.token1.symbol",
            "pair.token0.name",
            "pair.token1.name",
          ],
          threshold: 0.4,
        };
      function G(e) {
        let { items: t, selected: r, onSelect: n } = e;
        return (0, m.jsx)("div", {
          className:
            "flex p-1 border border-[#ffffff26] rounded-2xl bg-dark-card w-fit",
          children: t.map((e) =>
            (0, m.jsx)(
              "button",
              {
                className: `flex items-center py-1 px-3 h-[40px] rounded-xl whitespace-nowrap !font-sans font-bold ${
                  e === r ? "bg-violet-button" : "hover:text-[#a6afff]"
                }`,
                onClick: () => n(e),
                children: e,
              },
              `button-tab-${e}`
            )
          ),
        });
      }
      function X() {
        let { chainId: e } = (0, H.Z)(),
          { push: t, pathname: r, query: n } = (0, v.useRouter)(),
          s = _.b[e]?.chainName.toLowerCase(),
          { data: i, loading: l } = (0, F.Fr)(),
          { data: a, loading: c } = (0, F.pP)(),
          { 0: d, 1: u } = (0, o.useState)(W.ALL_POOLS),
          { 0: h, 1: p } = (0, o.useState)(!0),
          x = (0, o.useMemo)(() => {
            if (!i) return;
            let e = i,
              t =
                "0x3f2c3eb5e8c1fac4b06ea48345e0769a2e9abaf2,0x9ff958b4da17a37a619e02d8d0fd2f010413e13c,0x34090f850aca7ab21dcf7b6f692ff9468d4f8bed,0x96ff77beffa6669bab52e5073473caff82a3ec91,0x4de85cbe17454f7d1bb822c2e08be015c70e55e0,0xb06c0d95c74081e294b597cd4b8657c627ef8edb";
            if (t) {
              let r = t.split(",").map((e) => e.toLowerCase());
              e = e.filter((e) => !r.includes(e.address.toLowerCase()));
            }
            return (
              (e = e.filter((e) => "V3" === e.pair.version)),
              d === W.FARM
                ? (e = e.filter((e) => !!e.pair.farming))
                : d === W.MY_POOLS &&
                  a &&
                  (e = e.filter((e) => a.includes(e.pair.id))),
              e
            );
          }, [i, d, a]),
          {
            result: g,
            term: w,
            search: b,
          } = (0, L.TK)({ data: x, options: q }),
          j = (0, o.useCallback)(() => !!h || (p(!0), !1), [h]);
        return (
          (0, o.useEffect)(() => {
            "string" == typeof n.tab &&
              u(W[n.tab.split("-").join("_").toUpperCase()]);
          }, []),
          (0, m.jsxs)("div", {
            className: "flex flex-col w-full gap-4 text-white",
            children: [
              (0, m.jsxs)("div", {
                className: "flex flex-col w-full gap-4 p-2 md:flex-row icecard",
                children: [
                  (0, m.jsx)("div", {
                    className: "flex flex-col gap-4 xs:flex-row",
                    children: (0, m.jsx)(G, {
                      items: Object.values(W),
                      selected: d,
                      onSelect: (e) => {
                        p(!1),
                          u(e),
                          t({
                            pathname: r,
                            query: {
                              tab: e.split(" ").join("-").toLowerCase(),
                            },
                          });
                      },
                    }),
                  }),
                  (0, m.jsx)(f, {
                    term: w,
                    search: b,
                    description: "",
                    width: "full",
                    height: "50px",
                  }),
                  (0, m.jsx)(z(), {
                    legacyBehavior: !0,
                    href: "/liquidity/create",
                    children: (0, m.jsx)("a", {
                      className:
                        "inline-flex items-center justify-center px-4 py-4 text-center bg-violet-button min-w-fit rounded-xl",
                      children: "Create New Pool",
                    }),
                  }),
                ],
              }),
              (0, m.jsx)(M, {
                pairs: g,
                type: "v3",
                network: s,
                isLoading: c || l,
                shouldStopPageReset: j,
              }),
            ],
          })
        );
      }
      function Y() {
        let { chainId: e } = (0, H.Z)(),
          t = (0, F.bS)(e),
          r = (0, F.mi)(e),
          n = (0, F.XT)(e),
          { 0: a, 1: c } = (0, o.useState)(new Date());
        (0, o.useEffect)(() => {
          let e = setInterval(() => {
            c(new Date());
          }, 2e4);
          return () => clearInterval(e);
        }, []);
        let d = (e) =>
            e?.timestamp
              ? new Date(1e3 * e.timestamp).toLocaleString("en-us", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })
              : "block " + e.number,
          {
            farmsBehind: u,
            blocksBehind: h,
            analyticsBehind: f,
          } = (0, o.useMemo)(() => {
            let e = new Date(r?.timestamp * 1e3),
              s = new Date(t?.timestamp * 1e3),
              i = new Date(n?.timestamp * 1e3);
            return {
              farmsBehind: Math.round((a.getTime() - e.getTime()) / 6e4) > 30,
              blocksBehind: Math.round((a.getTime() - s.getTime()) / 6e4) > 30,
              analyticsBehind:
                Math.round((a.getTime() - i.getTime()) / 6e4) > 30,
            };
          }, [r, t, n, a]);
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsx)($(), {
              children: (0, m.jsx)("title", { children: "Swapsicle" }),
            }),
            (0, m.jsx)(Z.PB, { title: "Swapsicle" }),
            (0, m.jsx)("div", {
              className: "bgWrap",
              children: (0, m.jsx)(V(), {
                src: "/images/igloo13.jpg",
                alt: "",
                layout: "fill",
                objectFit: "cover",
                quality: 100,
              }),
            }),
            (0, m.jsx)("div", {
              className: "bgWrapMobile",
              children: (0, m.jsx)(V(), {
                src: "/images/igloo13.jpg",
                alt: "",
                layout: "fill",
                objectFit: "cover",
                quality: 100,
              }),
            }),
            (0, m.jsx)(l.Z, {
              className:
                "z-40 py-4 space-y-6 md:py-8 lg:py-12 cstm_cntnr freezer",
              maxWidth: "2xl",
              children: (0, m.jsxs)("div", {
                className: "max-1280",
                children: [
                  (0, m.jsx)("h1", {
                    className: "mb-0",
                    children: "Liquidity",
                  }),
                  (0, m.jsx)("h4", {
                    className: "mt-0 mb-5",
                    children: "Provide liquidity and earn",
                  }),
                  u || h || f
                    ? (0, m.jsx)(m.Fragment, {
                        children: (0, m.jsxs)("div", {
                          className:
                            "flex flex-col sm:items-center sm:flex-row",
                          children: [
                            (0, m.jsxs)("div", {
                              className: "flex",
                              children: [
                                (0, m.jsx)(i.G, {
                                  className: "text-orange-400 ",
                                  icon: s.ik8,
                                }),
                                (0, m.jsx)("h4", {
                                  className: "mx-2",
                                  children: "Chain out of sync",
                                }),
                                (0, m.jsx)(i.G, {
                                  className: "mr-2 text-orange-400",
                                  icon: s.ik8,
                                }),
                              ],
                            }),
                            u
                              ? (0, m.jsx)(m.Fragment, {
                                  children: (0, m.jsx)("h4", {
                                    className: "mr-2",
                                    children: "Farms synced to " + d(r),
                                  }),
                                })
                              : (0, m.jsx)(m.Fragment, {}),
                            h
                              ? (0, m.jsx)(m.Fragment, {
                                  children: (0, m.jsx)("h4", {
                                    className: "mr-2",
                                    children:
                                      (u ? "/ " : "") +
                                      "Blocks synced to " +
                                      d(t),
                                  }),
                                })
                              : (0, m.jsx)(m.Fragment, {}),
                            f
                              ? (0, m.jsx)(m.Fragment, {
                                  children: (0, m.jsx)("h4", {
                                    className: "mr-2",
                                    children:
                                      (u || h ? "/ " : "") +
                                      "Analytics synced to " +
                                      d(n),
                                  }),
                                })
                              : (0, m.jsx)(m.Fragment, {}),
                          ],
                        }),
                      })
                    : (0, m.jsx)(m.Fragment, {}),
                  (0, m.jsx)("hr", {
                    className: "h-[1px] my-5 border-0",
                    style: { backgroundColor: "rgba(255, 255, 255, 0.15)" },
                  }),
                  (0, m.jsx)("div", {
                    className: "flex items-start w-full gap-4 mt-5",
                    children: (0, m.jsx)(X, {}),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      Y.Guard = (0, D.Z)(p.L.LIQUIDITY_V2);
    },
    139488: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/liquidity",
        function () {
          return r(319623);
        },
      ]);
    },
  },
  function (e) {
    e.O(
      0,
      [
        3662, 1082, 7098, 8100, 5729, 2962, 7066, 9521, 3062, 9934, 1163, 840,
        2888, 9774, 179,
      ],
      function () {
        return e((e.s = 139488));
      }
    ),
      (_N_E = e.O());
  },
]);
