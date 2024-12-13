(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1211],
  {
    595117: function (e, s, t) {
      "use strict";
      t.d(s, {
        x: function () {
          return I;
        },
      });
      var r = t(667294),
        a = t(203241),
        i = t(548427),
        n = t(256817),
        l = t(14258),
        c = Object.defineProperty,
        o = Object.defineProperties,
        d = Object.getOwnPropertyDescriptors,
        m = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        x = (e, s, t) =>
          s in e
            ? c(e, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[s] = t),
        g = (e, s) => {
          for (var t in s || (s = {})) u.call(s, t) && x(e, t, s[t]);
          if (m) for (var t of m(s)) h.call(s, t) && x(e, t, s[t]);
          return e;
        },
        b = (e, s) => o(e, d(s)),
        f = (0, n.k)(
          (
            e,
            {
              color: s,
              lineClamp: t,
              truncate: r,
              inline: a,
              inherit: i,
              underline: n,
              gradient: c,
              weight: o,
              transform: d,
              align: m,
              strikethrough: u,
              italic: h,
            },
            { size: x }
          ) => {
            let f = e.fn.variant({ variant: "gradient", gradient: c });
            return {
              root: b(
                g(
                  g(
                    g(g({}, e.fn.fontStyles()), e.fn.focusStyles()),
                    "number" == typeof t
                      ? {
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: t,
                          WebkitBoxOrient: "vertical",
                        }
                      : null
                  ),
                  (function ({ theme: e, truncate: s }) {
                    return "start" === s
                      ? {
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          direction: "ltr" === e.dir ? "rtl" : "ltr",
                          textAlign: "ltr" === e.dir ? "right" : "left",
                        }
                      : s
                      ? {
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }
                      : null;
                  })({ theme: e, truncate: r })
                ),
                {
                  color: (function ({ theme: e, color: s }) {
                    return "dimmed" === s
                      ? e.fn.dimmed()
                      : "string" == typeof s &&
                        (s in e.colors || s.split(".")[0] in e.colors)
                      ? e.fn.variant({ variant: "filled", color: s }).background
                      : s || "inherit";
                  })({ color: s, theme: e }),
                  fontFamily: i ? "inherit" : e.fontFamily,
                  fontSize:
                    i || void 0 === x
                      ? "inherit"
                      : (0, l.a)({ size: x, sizes: e.fontSizes }),
                  lineHeight: i ? "inherit" : a ? 1 : e.lineHeight,
                  textDecoration: (function ({
                    underline: e,
                    strikethrough: s,
                  }) {
                    let t = [];
                    return (
                      e && t.push("underline"),
                      s && t.push("line-through"),
                      t.length > 0 ? t.join(" ") : "none"
                    );
                  })({ underline: n, strikethrough: u }),
                  WebkitTapHighlightColor: "transparent",
                  fontWeight: i ? "inherit" : o,
                  textTransform: d,
                  textAlign: m,
                  fontStyle: h ? "italic" : void 0,
                }
              ),
              gradient: {
                backgroundImage: f.background,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            };
          }
        ),
        N = t(7414),
        j = Object.defineProperty,
        p = Object.getOwnPropertySymbols,
        v = Object.prototype.hasOwnProperty,
        y = Object.prototype.propertyIsEnumerable,
        w = (e, s, t) =>
          s in e
            ? j(e, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[s] = t),
        S = (e, s) => {
          for (var t in s || (s = {})) v.call(s, t) && w(e, t, s[t]);
          if (p) for (var t of p(s)) y.call(s, t) && w(e, t, s[t]);
          return e;
        },
        C = (e, s) => {
          var t = {};
          for (var r in e) v.call(e, r) && 0 > s.indexOf(r) && (t[r] = e[r]);
          if (null != e && p)
            for (var r of p(e))
              0 > s.indexOf(r) && y.call(e, r) && (t[r] = e[r]);
          return t;
        };
      let T = { variant: "text" },
        E = (0, r.forwardRef)((e, s) => {
          let t = (0, a.N4)("Text", T, e),
            {
              className: i,
              size: n,
              weight: l,
              transform: c,
              color: o,
              align: d,
              variant: m,
              lineClamp: u,
              truncate: h,
              gradient: x,
              inline: g,
              inherit: b,
              underline: j,
              strikethrough: p,
              italic: v,
              classNames: y,
              styles: w,
              unstyled: E,
              span: I,
              __staticSelector: k,
            } = t,
            O = C(t, [
              "className",
              "size",
              "weight",
              "transform",
              "color",
              "align",
              "variant",
              "lineClamp",
              "truncate",
              "gradient",
              "inline",
              "inherit",
              "underline",
              "strikethrough",
              "italic",
              "classNames",
              "styles",
              "unstyled",
              "span",
              "__staticSelector",
            ]),
            { classes: _, cx: F } = f(
              {
                color: o,
                lineClamp: u,
                truncate: h,
                inline: g,
                inherit: b,
                underline: j,
                strikethrough: p,
                italic: v,
                weight: l,
                transform: c,
                align: d,
                gradient: x,
              },
              { unstyled: E, name: k || "Text", variant: m, size: n }
            );
          return r.createElement(
            N.x,
            S(
              {
                ref: s,
                className: F(_.root, { [_.gradient]: "gradient" === m }, i),
                component: I ? "span" : "div",
              },
              O
            )
          );
        });
      E.displayName = "@mantine/core/Text";
      let I = (0, i.F)(E);
    },
    101097: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return v;
        },
      });
      var r = t(14744),
        a = t(341276),
        i = t(933222),
        n = (t(108307), t(704730), t(741664), t(811163)),
        l = (t(667294), t(785893)),
        c = t(178794),
        o = t(785910),
        d = t(322321),
        m = t(939507),
        u = t(949552),
        h = t.n(u),
        x = t(425675),
        g = t.n(x),
        b = t(538578),
        f = t(799603),
        N = t(259417),
        j = t(629936);
      let p = (e) => {
        let { children: s, feature: t } = e,
          { i18n: u } = (0, r.mV)(),
          { chainId: x, provider: p, account: v, disconnect: y } = (0, m.Z)(),
          w = (0, n.useRouter)(),
          { onSetDeactivated: S } = (0, j.Uu)();
        u._(u._("landing page."));
        let C = [
            a.ChainId.TELOS_TESTNET,
            a.ChainId.MANTLE_TESTNET,
            a.ChainId.TAIKO_TESTNET,
            a.ChainId.ETHEREUM,
            a.ChainId.OPTIMISM,
            a.ChainId.ARBITRUM,
            a.ChainId.MATIC,
            a.ChainId.AVALANCHE,
            a.ChainId.FANTOM,
            a.ChainId.BSC,
          ],
          T = Object.entries(c.Z).reduce((e, s) => {
            let [r, a] = s;
            return a.includes(t) && !C.includes(Number(r)) && e.push(r), e;
          }, []),
          E =
            1 == T.length
              ? "grid-cols-1"
              : T.length > 2
              ? "lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3"
              : "grid-cols-2";
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(i.Z.Controlled, {
              isOpen: !!v && !c.Z[x]?.includes(t),
              onDismiss: () => null,
              transparent: !0,
              children: (0, l.jsxs)("div", {
                className: "flex flex-col justify-center mt-0 freezer",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "flex items-center mt-1 ml-1 text-white align-middle",
                    children: (0, l.jsxs)("button", {
                      type: "button",
                      onClick: () => w.back(),
                      children: [
                        (0, l.jsx)(f.G, {
                          size: "sm",
                          icon: N.acZ,
                          style: { color: "rgb(255,255,255,100)" },
                          className: "mr-1",
                        }),
                        "Back",
                      ],
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: "p-4",
                    children: [
                      (0, l.jsx)("h3", {
                        className: "mb-4 text-center",
                        children: "Incorrect Network",
                      }),
                      (0, l.jsxs)("h4", {
                        className: "mb-4 text-center",
                        children: [
                          "This feature is currently unsupported on ",
                          o.z[x],
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "flex justify-center mb-4",
                        children: (0, l.jsx)("div", {
                          className: "w-[40px] h-[40px] ",
                          children: (0, l.jsx)(g(), {
                            src: o.w[x] ? o.w[x] : o.w[a.ChainId.MANTLE],
                            alt: "Switch Network",
                            className:
                              "rounded-md filter drop-shadow-currencyLogo",
                            width: 40,
                            height: 40,
                          }),
                        }),
                      }),
                      (0, l.jsxs)("h5", {
                        className: "mb-4 text-center ",
                        children: [
                          "Select an available network below or disconnect your wallet to continue to ",
                          t,
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "icecard_statsbox",
                        style: { background: "rgb(19, 25, 40, 0.90)" },
                        children: [
                          (0, l.jsx)("h4", {
                            className: "mb-4 text-center",
                            children: "Available Networks",
                          }),
                          (0, l.jsx)("div", {
                            className: (0, b.AK)(
                              "grid flex-row justify-center gap-5 overflow-x-auto md:gap-8 ",
                              E
                            ),
                            children: T.map((e, s) =>
                              (0, l.jsxs)(
                                "button",
                                {
                                  className:
                                    "flex flex-col items-center justify-start gap-2 min-w-[100px] text-primary hover:text-white",
                                  onClick: () => {
                                    let s = d.b[e];
                                    h().set("chainId", e),
                                      e === a.ChainId.ETHEREUM.toString()
                                        ? p?.send(
                                            "wallet_switchEthereumChain",
                                            [{ chainId: "0x1" }, v]
                                          )
                                        : p?.send("wallet_addEthereumChain", [
                                            s,
                                            v,
                                          ]);
                                  },
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "w-[40px] h-[40px]",
                                      children: (0, l.jsx)(g(), {
                                        src: o.w[e],
                                        alt: "Switch Network",
                                        className:
                                          "rounded-md filter drop-shadow-currencyLogo",
                                        width: 40,
                                        height: 40,
                                      }),
                                    }),
                                    (0, l.jsx)("h5", {
                                      className: "",
                                      children: o.z[e],
                                    }),
                                  ],
                                },
                                s
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "flex items-center justify-center",
                        children: (0, l.jsx)("button", {
                          className:
                            "flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-4 text-sm focus:outline-none focus:ring text-high-emphesis ButtonV2 max-w-[300px]",
                          onClick: () => {
                            y(), S(!0);
                          },
                          children: "Disconnect Wallet",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s,
          ],
        });
      };
      var v = (e) => (s) => {
        let { children: t } = s;
        return (0, l.jsx)(p, { feature: e, children: t });
      };
    },
    178462: function (e, s, t) {
      "use strict";
      t.d(s, {
        UK: function () {
          return h;
        },
        qL: function () {
          return x;
        },
        re: function () {
          return g;
        },
        NU: function () {
          return b;
        },
      }),
        t(421046);
      var r,
        a = t(341276),
        i = t(353487),
        n = t(939507),
        l = t(828465),
        c = t(667294),
        o = t(799767),
        d = t(86083),
        m = t(243475),
        u = t(330214);
      let h =
        (((r = {}).UNKNOWN = "UNKNOWN"),
        (r.NOT_APPROVED = "NOT_APPROVED"),
        (r.PENDING = "PENDING"),
        (r.APPROVED = "APPROVED"),
        r);
      function x(e, s) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { account: t } = (0, n.Z)(),
          { getGasPrice: r } = (0, u.Z)(),
          i = e?.currency?.isToken ? e.currency : void 0,
          o = (function (e, s, t) {
            let r = (0, d.Ib)(e?.address, !1),
              i = (0, c.useMemo)(() => [s, t], [s, t]),
              n = (0, m.Wk)(r, "allowance", i).result;
            return (0, c.useMemo)(
              () =>
                e && n
                  ? a.CurrencyAmount.fromRawAmount(e, n.toString())
                  : void 0,
              [e, n]
            );
          })(i, t ?? void 0, s),
          x = (0, l.wB)(i?.address, s),
          g = (0, c.useMemo)(
            () =>
              e && s
                ? e.currency.isNative
                  ? h.APPROVED
                  : o
                  ? o.lessThan(e)
                    ? x
                      ? h.PENDING
                      : h.NOT_APPROVED
                    : h.APPROVED
                  : h.UNKNOWN
                : h.UNKNOWN,
            [e, o, x, s]
          ),
          b = (0, d.Ib)(i?.address),
          f = (0, l.h7)(),
          N = (0, c.useCallback)(async () => {
            if (g !== h.NOT_APPROVED) {
              console.error("approve was called unnecessarily");
              return;
            }
            if (!i) {
              console.error("no token");
              return;
            }
            if (!b) {
              console.error("tokenContract is null");
              return;
            }
            if (!e) {
              console.error("missing amount to approve");
              return;
            }
            if (!s) {
              console.error("no spender");
              return;
            }
            let t = r();
            return b
              .approve(s, e.quotient.toString(), { gasPrice: t })
              .then((t) => {
                f(t, {
                  summary: "Approve " + e.currency.symbol,
                  approval: { tokenAddress: i.address, spender: s },
                });
              })
              .catch((e) => {
                throw (console.debug("Failed to approve token", e), e);
              });
          }, [g, i, b, e, s, f, r]);
        return [g, N];
      }
      function g(e, s) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { chainId: t } = (0, n.Z)();
        return x(
          (0, c.useMemo)(
            () =>
              e && e.inputAmount.currency.isToken
                ? e.maximumAmountIn(s)
                : void 0,
            [e, s]
          ),
          t
            ? e instanceof a.Trade
              ? i.ROUTER_ADDRESS[t]
              : e instanceof o.ho
              ? i.V3_SWAP_ROUTER_ADDRESS[t]
              : void 0
            : void 0
        );
      }
      let b = (e, s, t) => {
        let { account: r } = (0, n.Z)(),
          { getGasPrice: a } = (0, u.Z)(),
          i = (0, d.Ib)(e?.address, !1),
          o = (0, c.useMemo)(() => [r, t], [r, t]),
          x = (0, m.Wk)(i, "allowance", o).result,
          g = (0, l.wB)(e?.address, t),
          b = (0, c.useMemo)(
            () =>
              s && t && x
                ? Number(x) < Number(s)
                  ? g
                    ? h.PENDING
                    : h.NOT_APPROVED
                  : h.APPROVED
                : h.UNKNOWN,
            [s, x, g, t]
          ),
          f = (0, d.Ib)(e?.address),
          N = (0, l.h7)(),
          j = (0, c.useCallback)(async () => {
            if (b !== h.NOT_APPROVED) {
              console.error("approve was called unnecessarily");
              return;
            }
            if (!e) {
              console.error("no token");
              return;
            }
            if (!f) {
              console.error("tokenContract is null");
              return;
            }
            if (!s) {
              console.error("missing amount to approve");
              return;
            }
            if (!t) {
              console.error("no spender");
              return;
            }
            let r = a();
            return f
              .approve(t, s, { gasPrice: r })
              .then((s) => {
                N(s, {
                  summary: "Approve " + e.symbol,
                  approval: { tokenAddress: e.address, spender: t },
                });
              })
              .catch((e) => {
                throw (console.debug("Failed to approve token", e), e);
              });
          }, [b, e, f, s, t, N, a]);
        return [b, j];
      };
    },
    330214: function (e, s, t) {
      "use strict";
      var r = t(939507),
        a = t(548470);
      s.Z = function () {
        let { chainId: e } = (0, r.Z)();
        return {
          getGasPrice: () => {
            let s;
            let t = JSON.parse(
              '[{"chainId":5000,"price":0.02},{"chainId":5003,"price":0.02},{"chainId":167000,"price":0.15},{"chainId":167009,"price":0.05}]'
            );
            return (
              t &&
                t.map((t) => {
                  t.chainId === e && (s = a.vz(t.price.toString(), "gwei"));
                }),
              s
            );
          },
        };
      };
    },
    613324: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return ej;
          },
        });
      var r = t(667294),
        a = t(341276),
        i = t(353487),
        n = t(569383),
        l = t(884081),
        c = t(809008),
        o = t.n(c),
        d = t(555814),
        m = t(816364),
        u = t(101097),
        h = t(519673),
        x = t(939507),
        g = t(316004),
        b = t(425675),
        f = t.n(b),
        N = t(902962),
        j = t(799603),
        p = t(259417),
        v = t(741664),
        y = t.n(v),
        w = t(534799),
        S = t(220966),
        C = t(615564),
        T = t(828465),
        E = t(86083),
        I = t(330214),
        k = () => {
          let e = (0, T.h7)();
          (0, n.i$)();
          let s = (0, E.nf)(),
            { getGasPrice: t } = (0, I.Z)(),
            a = (0, r.useCallback)(
              async (r) => {
                let a = t();
                if (r?.quotient)
                  try {
                    let t = await s?.convert(r?.quotient.toString(), {
                      gasPrice: a,
                    });
                    return e(t, { summary: "Freeze SLUSH" }), t;
                  } catch (e) {
                    return e;
                  }
              },
              [e, s, t]
            ),
            i = (0, r.useCallback)(
              async (r, a) => {
                let i = t();
                if (r?.quotient && a)
                  try {
                    let t = await s?.redeem(
                      r?.quotient.toString(),
                      a.toString(),
                      { gasPrice: i }
                    );
                    return e(t, { summary: "Defrost ICE" }), t;
                  } catch (e) {
                    return e;
                  }
              },
              [e, s, t]
            ),
            l = (0, r.useCallback)(
              async (r) => {
                let a = t();
                if (
                  (console.log("finalize defrost", r), null != r && !isNaN(r))
                )
                  try {
                    let t = await s?.finalizeRedeem(r, { gasPrice: a });
                    return e(t, { summary: "Defrost Claim" }), t;
                  } catch (e) {
                    return e;
                  }
              },
              [e, s, t]
            ),
            c = (0, r.useCallback)(async () => {
              let r = t();
              console.log("finalize all defrosts");
              try {
                let t = await s?.finalizeRedeems({ gasPrice: r });
                return e(t, { summary: "Claim All" }), t;
              } catch (e) {
                return e;
              }
            }, [e, s, t]);
          return {
            freeze: a,
            defrost: i,
            finalizeDefrost: l,
            cancelDefrost: (0, r.useCallback)(
              async (r) => {
                let a = t();
                if ((console.log("cancel defrost", r), null != r && !isNaN(r)))
                  try {
                    let t = await s?.cancelRedeem(r, { gasPrice: a });
                    return e(t, { summary: "Defrost Cancel" }), t;
                  } catch (e) {
                    return console.log(e), e;
                  }
              },
              [e, s, t]
            ),
            finalizeAllDefrosts: c,
          };
        },
        O = t(178462),
        _ = t(548470),
        F = t(203241),
        A = t(96768),
        L = t(370917),
        D = t(256817),
        R = t(14258);
      let P = {
          xs: (0, A.h)(3),
          sm: (0, A.h)(5),
          md: (0, A.h)(8),
          lg: (0, A.h)(12),
          xl: (0, A.h)(16),
        },
        z = (0, L.F4)({
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: `${(0, A.h)(40)} 0` },
        });
      var B = (0, D.k)((e, { color: s, radius: t }, { size: r }) => ({
          root: {
            position: "relative",
            height: (0, R.a)({ size: r, sizes: P }),
            backgroundColor:
              "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[2],
            borderRadius: e.fn.radius(t),
            overflow: "hidden",
          },
          bar: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: e.fn.variant({
              variant: "filled",
              primaryFallback: !1,
              color: s || e.primaryColor,
            }).background,
            transition: "width 100ms linear",
            "&[data-animate]": { animation: `${z} 1000ms linear infinite` },
            "&[data-striped]": {
              backgroundSize: `${(0, A.h)(20)} ${(0, A.h)(20)}`,
              backgroundImage:
                "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
            },
            "&:last-of-type": {
              borderTopRightRadius: e.fn.radius(t),
              borderBottomRightRadius: e.fn.radius(t),
            },
            "&:first-of-type": {
              borderTopLeftRadius: e.fn.radius(t),
              borderBottomLeftRadius: e.fn.radius(t),
            },
            "@media (prefers-reduced-motion)": {
              transitionDuration: e.respectReducedMotion ? "0ms" : void 0,
            },
          },
          label: {
            color: e.white,
            fontSize: `calc(${(0, R.a)({ size: r, sizes: P })} * 0.65)`,
            fontWeight: 700,
            userSelect: "none",
            overflow: "hidden",
            whiteSpace: "nowrap",
          },
        })),
        M = t(490843),
        U = t(7414),
        W = t(595117),
        Z = Object.defineProperty,
        H = Object.defineProperties,
        V = Object.getOwnPropertyDescriptors,
        $ = Object.getOwnPropertySymbols,
        G = Object.prototype.hasOwnProperty,
        K = Object.prototype.propertyIsEnumerable,
        q = (e, s, t) =>
          s in e
            ? Z(e, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (e[s] = t),
        X = (e, s) => {
          for (var t in s || (s = {})) G.call(s, t) && q(e, t, s[t]);
          if ($) for (var t of $(s)) K.call(s, t) && q(e, t, s[t]);
          return e;
        },
        J = (e, s) => H(e, V(s)),
        Y = (e, s) => {
          var t = {};
          for (var r in e) G.call(e, r) && 0 > s.indexOf(r) && (t[r] = e[r]);
          if (null != e && $)
            for (var r of $(e))
              0 > s.indexOf(r) && K.call(e, r) && (t[r] = e[r]);
          return t;
        };
      let Q = { size: "md", radius: "sm", striped: !1, animate: !1, label: "" },
        ee = (0, r.forwardRef)((e, s) => {
          let t = (0, F.N4)("Progress", Q, e),
            {
              className: a,
              value: i,
              color: n,
              size: l,
              radius: c,
              striped: o,
              animate: d,
              label: m,
              "aria-label": u,
              classNames: h,
              styles: x,
              sections: g,
              unstyled: b,
              variant: f,
            } = t,
            N = Y(t, [
              "className",
              "value",
              "color",
              "size",
              "radius",
              "striped",
              "animate",
              "label",
              "aria-label",
              "classNames",
              "styles",
              "sections",
              "unstyled",
              "variant",
            ]),
            {
              classes: j,
              cx: p,
              theme: v,
            } = B(
              { color: n, radius: c },
              {
                name: "Progress",
                classNames: h,
                styles: x,
                unstyled: b,
                variant: f,
                size: l,
              }
            ),
            y = Array.isArray(g)
              ? g
                  .reduce(
                    (e, s) => (
                      e.sections.push(
                        J(X({}, s), { accumulated: e.accumulated })
                      ),
                      (e.accumulated += s.value),
                      e
                    ),
                    { accumulated: 0, sections: [] }
                  )
                  .sections.map((e, s) => {
                    var {
                        tooltip: t,
                        accumulated: a,
                        value: i,
                        label: n,
                        color: l,
                      } = e,
                      c = Y(e, [
                        "tooltip",
                        "accumulated",
                        "value",
                        "label",
                        "color",
                      ]);
                    return r.createElement(
                      M.u.Floating,
                      { label: t, disabled: !t, key: s },
                      r.createElement(
                        U.x,
                        J(X({}, c), {
                          className: p(j.bar, c.className),
                          "data-striped": o || d || void 0,
                          "data-animate": d || void 0,
                          sx: {
                            width: `${i}%`,
                            left: `${a}%`,
                            backgroundColor: v.fn.variant({
                              variant: "filled",
                              primaryFallback: !1,
                              color: l || v.primaryColor,
                            }).background,
                          },
                        }),
                        n && r.createElement(W.x, { className: j.label }, n)
                      )
                    );
                  })
              : null;
          return r.createElement(
            U.x,
            X({ className: p(j.root, a), ref: s }, N),
            y ||
              r.createElement(
                "div",
                {
                  role: "progressbar",
                  "aria-valuemax": 100,
                  "aria-valuemin": 0,
                  "aria-valuenow": i,
                  "aria-label": u,
                  className: j.bar,
                  style: { width: `${i}%` },
                  "data-striped": o || d || void 0,
                  "data-animate": d || void 0,
                },
                m ? r.createElement(W.x, { className: j.label }, m) : ""
              )
          );
        });
      ee.displayName = "@mantine/core/Progress";
      var es = t(785893);
      function et(e) {
        let {
            defrostId: s,
            slushAmount: t,
            iceAmount: a,
            iceEarned: i,
            endTime: n,
            onClaim: l,
            onCancel: c,
          } = e,
          { 0: o, 1: d } = (0, r.useState)({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          }),
          { 0: m, 1: u } = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = setInterval(() => {
              let e = new Date(),
                s = n.getTime() - e.getTime();
              s <= 0 && u(!0),
                d({
                  days: Math.floor(s / 1e3 / 3600 / 24),
                  hours: Math.floor(s / 1e3 / 3600) % 24,
                  minutes: Math.floor(s / 1e3 / 60) % 60,
                  seconds: Math.floor(s / 1e3) % 60,
                });
            }, 1e3);
            return () => {
              clearInterval(e);
            };
          }, [n]),
          (0, es.jsx)(es.Fragment, {
            children: (0, es.jsxs)("div", {
              className: "p-3 icecard_statsbox !pt-4 bg-dark-1000 my-3",
              children: [
                (0, es.jsxs)("div", {
                  className: "flex justify-between mb-3",
                  children: [
                    (0, es.jsxs)("div", {
                      className: "flex justify-start gap-1",
                      children: [
                        (0, es.jsxs)("div", {
                          className: `flex items-center justify-center text-center ${
                            Number(_.dF(i.toBigInt())) > 0
                              ? "sm:hidden md:flex"
                              : ""
                          }`,
                          children: [
                            (0, es.jsx)("h5", {
                              className: "mr-2",
                              children: Number(
                                Number(_.dF(a.toBigInt())).toFixed(2)
                              ).toLocaleString(),
                            }),
                            (0, es.jsx)(f(), {
                              src: "/images/ice.svg",
                              alt: "",
                              width: 20,
                              height: 20,
                            }),
                          ],
                        }),
                        Number(_.dF(i.toBigInt())) > 0
                          ? (0, es.jsxs)(es.Fragment, {
                              children: [
                                (0, es.jsx)("div", {
                                  className:
                                    "flex items-center justify-center text-center sm:hidden md:flex",
                                  children: (0, es.jsx)(j.G, {
                                    className: "w-[14px] h-[14px]",
                                    icon: p.eFW,
                                    style: { color: "white" },
                                  }),
                                }),
                                (0, es.jsxs)("div", {
                                  className:
                                    "flex items-center justify-center text-center",
                                  children: [
                                    (0, es.jsx)("h5", {
                                      className: "mr-2",
                                      children: Number(
                                        Number(_.dF(t.toBigInt())).toFixed(2)
                                      ).toLocaleString(),
                                    }),
                                    (0, es.jsx)(f(), {
                                      src: "/images/slush.png",
                                      alt: "",
                                      width: 18,
                                      height: 18,
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, es.jsx)(es.Fragment, {}),
                      ],
                    }),
                    Number(_.dF(i.toBigInt())) > 0
                      ? (0, es.jsx)(es.Fragment, {})
                      : (0, es.jsx)(j.G, {
                          className: "w-[14px] h-[14px]",
                          icon: p.eFW,
                          style: { color: "white" },
                        }),
                    Number(_.dF(i.toBigInt())) > 0
                      ? (0, es.jsxs)("div", {
                          className: "flex justify-end",
                          children: [
                            (0, es.jsx)("div", {
                              className:
                                "flex items-center justify-center text-center",
                              children: (0, es.jsx)("h5", {
                                className: "mr-2",
                                children: "Rewards:",
                              }),
                            }),
                            (0, es.jsxs)("div", {
                              className:
                                "flex items-center justify-center text-center",
                              children: [
                                0.01 > Number(_.dF(i.toBigInt()))
                                  ? (0, es.jsx)("h5", {
                                      className: "mr-2",
                                      children: "<0.01",
                                    })
                                  : (0, es.jsx)("h5", {
                                      className: "mr-2",
                                      children: Number(
                                        Number(_.dF(i.toBigInt())).toFixed(2)
                                      ).toLocaleString(),
                                    }),
                                (0, es.jsx)(f(), {
                                  src: "/images/ice.svg",
                                  alt: "",
                                  width: 20,
                                  height: 20,
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, es.jsxs)("div", {
                          className:
                            "flex items-center justify-center text-center",
                          children: [
                            (0, es.jsx)("h5", {
                              className: "mr-2",
                              children: Number(
                                Number(_.dF(t.toBigInt())).toFixed(2)
                              ).toLocaleString(),
                            }),
                            (0, es.jsx)(f(), {
                              src: "/images/slush.png",
                              alt: "",
                              width: 18,
                              height: 18,
                            }),
                          ],
                        }),
                  ],
                }),
                (0, es.jsx)(ee, {
                  className: "my-2",
                  color: "indigo",
                  value: 50,
                }),
                (0, es.jsxs)("div", {
                  className: "flex justify-between",
                  children: [
                    (0, es.jsx)("div", {
                      className: "flex ",
                      children: m
                        ? (0, es.jsxs)("div", {
                            className: "flex items-end justify-end",
                            children: [
                              (0, es.jsx)("h5", {
                                className: "mr-1",
                                children: "Complete",
                              }),
                              (0, es.jsx)(j.G, {
                                className: "w-[20px] h-[20px]",
                                icon: p.LEp,
                                style: { color: "#3adb4c" },
                              }),
                            ],
                          })
                        : (0, es.jsxs)("div", {
                            className: "flex items-end justify-end",
                            children: [
                              (0, es.jsxs)("h5", {
                                className: "mr-1",
                                children: [
                                  o.days,
                                  "D ",
                                  o.hours,
                                  "H ",
                                  o.minutes,
                                  "M",
                                ],
                              }),
                              (0, es.jsx)(j.G, {
                                className: "w-[14px] h-[14px] mb-1",
                                icon: p.SZw,
                                style: { color: "white" },
                              }),
                            ],
                          }),
                    }),
                    (0, es.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, es.jsx)("button", {
                          className: `mr-2 button-minor ${
                            m
                              ? "text-green-500"
                              : "text-gray-400 cursor-not-allowed"
                          }`,
                          onClick: () => l(s),
                          disabled: !m,
                          children: "Claim",
                        }),
                        (0, es.jsx)("button", {
                          className: "text-white button-minor",
                          onClick: () => c(s),
                          children: "Cancel",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function er(e) {
        let { pendingRedeemsList: s, onClaim: t, onCancel: r } = e,
          a = s
            ?.slice()
            .sort(
              (e, s) =>
                new Date(e.endTime).getTime() - new Date(s.endTime).getTime()
            );
        return (0, es.jsx)(es.Fragment, {
          children:
            a && a?.length === 0
              ? (0, es.jsx)("h4", {
                  className: "mt-2",
                  children: "No Pending Defrosts",
                })
              : (0, es.jsx)("div", {
                  children: a?.map((e, s) =>
                    es.jsx(
                      et,
                      {
                        onClaim: t,
                        onCancel: r,
                        defrostId: e.defrostId,
                        slushAmount: e.slushAmount,
                        iceAmount: e.iceAmount,
                        iceEarned: e.iceEarned,
                        endTime: e.endTime,
                      },
                      s
                    )
                  ),
                }),
        });
      }
      var ea = t(933222),
        ei = (e) => {
          let {
            isOpen: s,
            txPending: t,
            heading: r,
            body: a,
            confirmButtonText: i = "Confirm",
            cancelButtonText: n = "Cancel",
            onConfirm: l,
            onDismiss: c,
          } = e;
          return (0, es.jsxs)(ea.Z.Controlled, {
            isOpen: s,
            onDismiss: c,
            children: [
              (0, es.jsx)(ea.Z.Header, { header: "" }),
              (0, es.jsx)("div", {
                className: "flex flex-col gap-4 freezer",
                children: (0, es.jsxs)("div", {
                  className: "wthdrow_mdl_main",
                  children: [
                    (0, es.jsx)("h3", { className: "mt-2 mb-6", children: r }),
                    (0, es.jsx)("h4", { className: "!mb-6", children: a }),
                    (0, es.jsxs)("div", {
                      className: "cncel_cnfrn_btn",
                      children: [
                        (0, es.jsx)("button", {
                          className: "cncl_btn",
                          onClick: c,
                          children: n,
                        }),
                        (0, es.jsx)("button", {
                          className: "cnfrm_btn",
                          onClick: l,
                          children: i,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        en = t(111603),
        el = t(699570),
        ec = t(666997),
        eo = t(334313),
        ed = t(202593),
        em = t(673014),
        eu = t(178794),
        eh = t(538578);
      let ex = (e) => !!(!e || e.match(/^(?!0\d)\d{0,18}(\.\d{0,18})?$/)),
        eg = (e) =>
          e.includes(".") ? e.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, "$1") : e,
        eb =
          "flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-4 text-sm focus:outline-none focus:ring",
        ef = `${eb} text-high-emphesis ButtonV2`,
        eN = `${eb} !cursor-not-allowed text-high-emphesis ButtonV2`;
      function ej() {
        (0, h.T)();
        let { view: e } = (0, h.C)(g.MB),
          {
            freeze: s,
            defrost: t,
            finalizeDefrost: c,
            finalizeAllDefrosts: u,
            cancelDefrost: b,
          } = k(),
          v = (0, n.i$)(),
          { account: T, provider: I } = (0, x.Z)(),
          { chainId: F } = (0, x.Z)(),
          A = async function (e) {
            let s =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              t = !0;
            try {
              let r = await e();
              if (r) {
                if (4001 === r.code)
                  return (
                    v({
                      txn: {
                        hash: "na",
                        success: !1,
                        summary: "Transaction rejected by user",
                      },
                    }),
                    !1
                  );
                if (r?.code === 3e3)
                  return (
                    console.log("Transaction failed:", r),
                    v({
                      txn: {
                        hash: "na",
                        success: !1,
                        summary: "User our of gas",
                      },
                    }),
                    !1
                  );
                if (r?.code === -32603)
                  return (
                    console.log("Transaction failed:", r),
                    v({
                      txn: {
                        hash: "na",
                        success: !1,
                        summary: r?.data?.message
                          ? "Contract Error: " + r?.data?.message
                          : "Execution Reverted",
                      },
                    }),
                    !1
                  );
                if (r?.error)
                  return (
                    console.log("Transaction failed:", r),
                    v({
                      txn: {
                        hash: "na",
                        success: !1,
                        summary: "Transaction failed",
                      },
                    }),
                    !1
                  );
                if (s) {
                  console.log("Waiting for confirmation...");
                  let e = await r.wait();
                  1 === e.status
                    ? (t = !0)
                    : (console.log("Transaction failed or reverted."),
                      (t = !1));
                }
              }
            } catch (e) {
              if ((console.error(e), e?.code === -32603))
                return (
                  e?.data?.message
                    ? v({
                        txn: {
                          hash: "na",
                          success: !1,
                          summary: "Wallet: " + e?.data?.message,
                        },
                      })
                    : v({
                        txn: {
                          hash: "na",
                          success: !1,
                          summary: "Wallet: Internal JSON-RPC error",
                        },
                      }),
                  !1
                );
              t = !1;
            }
            return t;
          },
          L = (0, E.nf)(),
          D = (0, l.mM)(T ?? void 0, em.LR[F]),
          R = (0, l.mM)(T ?? void 0, em.k7[F]),
          { sum: P, isLoading: z } =
            (0, l.pX)(T ?? void 0, [i.ICECREAMZOMBIES_NFT_ADDRESS[F]]) ?? 0,
          { 0: B, 1: M } = (0, r.useState)(14),
          { 0: U, 1: W } = (0, r.useState)(90),
          { 0: Z, 1: H } = (0, r.useState)(),
          { 0: V, 1: $ } = (0, r.useState)(),
          { 0: G, 1: K } = (0, r.useState)(0),
          { 0: q, 1: X } = (0, r.useState)(),
          { 0: J, 1: Y } = (0, r.useState)(),
          { 0: Q, 1: ee } = (0, r.useState)(),
          { 0: et, 1: ea } = (0, r.useState)(),
          { 0: eb, 1: ej } = (0, r.useState)(),
          { 0: ep, 1: ev } = (0, r.useState)(),
          { 0: ey, 1: ew } = (0, r.useState)(),
          { 0: eS, 1: eC } = (0, r.useState)(),
          { 0: eT, 1: eE } = (0, r.useState)(),
          { 0: eI, 1: ek } = (0, r.useState)(),
          { 0: eO, 1: e_ } = (0, r.useState)(""),
          { 0: eF, 1: eA } = (0, r.useState)(""),
          { 0: eL, 1: eD } = (0, r.useState)(""),
          { 0: eR, 1: eP } = (0, r.useState)(14),
          { 0: ez, 1: eB } = (0, r.useState)("0"),
          { 0: eM, 1: eU } = (0, r.useState)(),
          { 0: eW, 1: eZ } = (0, r.useState)(),
          { 0: eH, 1: eV } = (0, r.useState)(),
          { 0: e$, 1: eG } = (0, r.useState)(),
          { 0: eK, 1: eq } = (0, r.useState)(),
          { 0: eX, 1: eJ } = (0, r.useState)(),
          { 0: eY, 1: eQ } = (0, r.useState)(!1),
          { 0: e0, 1: e1 } = (0, r.useState)(!1),
          { 0: e4, 1: e2 } = (0, r.useState)(!1),
          { 0: e5, 1: e3 } = (0, r.useState)(!1),
          { 0: e6, 1: e9 } = (0, r.useState)(!1),
          { 0: e7, 1: e8 } = (0, r.useState)(),
          se = (0, E.O)(),
          ss = (0, E.TD)(),
          st = (0, E.Ox)();
        (0, r.useEffect)(() => {
          F == a.ChainId.TELOS
            ? e_("TLOS")
            : F == a.ChainId.MANTLE || F == a.ChainId.MANTLE_TESTNET
            ? e_("MNT")
            : F == a.ChainId.TAIKO || F == a.ChainId.TAIKO_TESTNET
            ? e_("TAIKO")
            : e_("ICE");
        }, [F, T]);
        let sr = (e) => {
            ex(e) && eD(e);
          },
          sa = (e) => {
            ex(e) && eA(e);
          },
          si = (0, r.useCallback)(async () => {
            if ((eq(!0), I && L))
              try {
                H(void 0);
                let e = await L.getUserRedeemsLength(T);
                if ((H(e), e && e > 0)) {
                  let s = await L.getUserRedeems(T),
                    t = [],
                    r = ed.O$.from("0");
                  if (void 0 != s && s?.length > 0) {
                    let a = async (i) => {
                      let n = {
                        defrostId: i,
                        slushAmount: ed.O$.from(s[i].slushAmount),
                        iceAmount: ed.O$.from(s[i].iceAmount),
                        iceEarned: ed.O$.from(s[i].iceEarned),
                        endTime: new Date(1e3 * s[i].endTime),
                      };
                      (r = r.add(n.iceAmount)),
                        t.push(n),
                        $(t),
                        i + 1 < e
                          ? a(i + 1)
                          : (K(Number(_.dF(r.toBigInt()))), eq(!1));
                    };
                    a(0);
                  } else $(null), K(0), eq(!1);
                } else $(null), K(0), eq(!1);
              } catch (e) {
                console.log("Error: ", e), eq(!1);
              }
            else eq(!1);
          }, [I, L, T]);
        (0, r.useEffect)(() => {
          si();
        }, [F, T, I, L, si]),
          (0, r.useEffect)(() => {
            eW || eH || e$ || si();
          }, [e$, eH, eW, si]);
        let sn = (0, r.useCallback)(async () => {
          if (!I || !T) return;
          Y(0), ew(0), ea(0), ee(0), eC(0), ej(0);
          let e = new en.zt(I, F),
            s = {},
            t = [],
            r = [];
          if (se) {
            let e = new en.CH(se.address, el);
            t.push(e.totalShares()),
              r.push("icvTotalShares"),
              t.push(e.pendingRewards(T)),
              r.push("icvPendingRewards"),
              t.push(e.userInfo(T)),
              r.push("icvUserInfo");
          }
          if (ss) {
            let e = new en.CH(ss.address, ec);
            t.push(e.totalStaked()),
              r.push("zvTotalStaked"),
              t.push(e.userRewards(T)),
              r.push("zvPendingRewards"),
              t.push(e.userDeposits(T)),
              r.push("zvUserDeposits");
          }
          if (st) {
            let e = new en.CH(st.address, eo);
            t.push(e.maxEntries()),
              r.push("cvMaxEntries"),
              t.push(e.round()),
              r.push("cvRound");
          }
          (await e.all(t)).forEach((e, t) => {
            s[r[t]] = e;
          }),
            se &&
              (Y(Number(_.dF(s.icvTotalShares.toBigInt()).toString())),
              ew(Number(_.dF(s.icvPendingRewards.toBigInt()).toString())),
              ea(Number(_.dF(s.icvUserInfo.amount.toBigInt()).toString()))),
            ss &&
              (ee(Number(_.dF(s.zvTotalStaked.toBigInt()).toString())),
              eC(Number(_.dF(s.zvPendingRewards.toBigInt()).toString())),
              ej(Number(_.dF(s.zvUserDeposits.toBigInt()).toString()))),
            ev(
              Number(_.dF(BigInt(s?.icvUserInfo?.amount || 0)).toString()) +
                Number(_.dF(BigInt(s?.zvUserDeposits || 0)).toString())
            ),
            st &&
              (eE(Number(s.cvMaxEntries.toString())),
              ek(Number(s.cvRound.toString())));
        }, [I, T, se, ss, F, st]);
        (0, r.useEffect)(() => {
          sn();
        }, [F, T, I, se, sn]),
          (0, r.useEffect)(() => {
            M(P && P > 0 ? 10 : 14), W(P && P > 0 ? 60 : 90);
          }, [P]);
        let sl = (0, r.useCallback)(async () => {
            if ((eJ(!0), I && L && eR && eL && R))
              try {
                let e = [
                    a.ChainId.MANTLE_TESTNET,
                    F == a.ChainId.TELOS_TESTNET,
                    a.ChainId.TAIKO_TESTNET,
                  ].includes(F)
                    ? (86400 * eR) / 24 / 60 / 10
                    : 86400 * eR,
                  s = await L.getSlushByVestingDuration(
                    (0, m.e)(eL, R?.currency).quotient.toString(),
                    ed.O$.from(e),
                    !!P && P > 0
                  );
                X(Number(_.dF(s.toString()))), eJ(!1);
              } catch (e) {
                console.log("Error: ", e), eJ(!1);
              }
          }, [I, F, eR, R, L, eL, P]),
          [sc, so] = (0, O.qL)((0, m.e)(eF, D?.currency), i.ICE_ADDRESS[F]),
          sd = async () => {
            if (
              (eU(!0),
              eQ(!1),
              !(await A(() => s((0, m.e)(eF, R?.currency)), !1)))
            ) {
              eU(!1);
              return;
            }
            eA(""), eU(!1), sn();
          },
          sm = (0, r.useCallback)(async () => {
            sc !== O.UK.APPROVED ? (eU(!0), await so(), eU(!1)) : eQ(!0);
          }, [sc, so]),
          su = (0, r.useCallback)(async () => {
            await sl(), e1(!0);
          }, [sl]),
          sh = (0, r.useCallback)((e) => {
            e8(e), e2(!0);
          }, []),
          sx = (0, r.useCallback)(() => {
            e3(!0);
          }, []),
          sg = (0, r.useCallback)((e) => {
            e8(e), e9(!0);
          }, []),
          sb = async () => {
            eZ(!0), e1(!1);
            let e = [
              a.ChainId.MANTLE_TESTNET,
              a.ChainId.TELOS_TESTNET,
              a.ChainId.TAIKO_TESTNET,
            ].includes(F)
              ? (86400 * eR) / 24 / 60 / 10
              : 86400 * eR;
            if (!(await A(() => t((0, m.e)(eL, R?.currency), BigInt(e)), !0))) {
              eZ(!1);
              return;
            }
            eD(""), eZ(!1), sn();
          },
          sf = async () => {
            eV(!0), e2(!1), await A(() => c(e7), !0), eV(!1), sn();
          },
          sN = async () => {
            eV(!0), e3(!1), await A(() => u(), !0), eV(!1), sn();
          },
          sj = async () => {
            eG(!0), e9(!1), await A(() => b(e7), !0), eG(!1), sn();
          };
        function sp(e) {
          var s = 50 / (U - B);
          return s * e + (50 - s * B);
        }
        let sv =
          (eR && (P && P > 0 ? 10 > Number(eR) : 14 > Number(eR))) ||
          !eL ||
          0.1 > Number(eL);
        return (0, es.jsxs)(es.Fragment, {
          children: [
            (0, es.jsx)(o(), {
              children: (0, es.jsx)("title", { children: "Swapsicle" }),
            }),
            (0, es.jsx)(N.PB, { title: "Swapsicle" }),
            (0, es.jsx)("div", {
              className: "bgWrap",
              children: (0, es.jsx)(f(), {
                src: "/images/igloo13.jpg",
                alt: "",
                layout: "fill",
                objectFit: "cover",
                quality: 100,
              }),
            }),
            (0, es.jsx)("div", {
              className: "bgWrapMobile",
              children: (0, es.jsx)(f(), {
                src: "/images/igloo13.jpg",
                alt: "",
                layout: "fill",
                objectFit: "cover",
                quality: 100,
              }),
            }),
            (0, es.jsxs)(d.Z, {
              id: "",
              className:
                "z-40 py-4 space-y-6 md:py-8 lg:py-12 cstm_cntnr freezer",
              maxWidth: "2xl",
              children: [
                (0, es.jsxs)("div", {
                  className: "max-1280",
                  children: [
                    (0, es.jsx)("h1", {
                      className: "mb-0",
                      children: "The Igloo",
                    }),
                    (0, es.jsx)("h4", {
                      className: "mt-0",
                      children:
                        "Your central hub for utilizing ICE. Earn ICE throughout the ecosystem or Freeze SLUSH to acquire more ICE",
                    }),
                    (0, es.jsx)("hr", {
                      className: "h-[1px] my-5 border-0",
                      style: { backgroundColor: "rgba(255, 255, 255, 0.15)" },
                    }),
                    (0, es.jsxs)("div", {
                      className:
                        "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4",
                      children: [
                        (0, es.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 icecard",
                          children: (0, es.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, es.jsxs)("div", {
                                children: [
                                  (0, es.jsx)("h4", { children: "Total ICE" }),
                                  em.k7[F]
                                    ? void 0 == R || void 0 == G
                                      ? (0, es.jsx)(S.a, {
                                          size: "xs",
                                          color: "white",
                                          className: "mt-1",
                                        })
                                      : (0, es.jsx)("h3", {
                                          children: R
                                            ? Number(
                                                (
                                                  G + Number(R.toFixed(18))
                                                ).toFixed(2)
                                              ).toLocaleString()
                                            : G.toLocaleString(),
                                        })
                                    : (0, es.jsx)("h3", { children: 0 }),
                                ],
                              }),
                              (0, es.jsx)("div", {
                                children: (0, es.jsx)(f(), {
                                  src: "/icons/apr-01.svg",
                                  alt: " ",
                                  width: 32,
                                  height: 32,
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, es.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 icecard",
                          children: (0, es.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, es.jsxs)("div", {
                                children: [
                                  (0, es.jsx)("h4", {
                                    children: "Available ICE",
                                  }),
                                  em.k7[F]
                                    ? void 0 == R
                                      ? (0, es.jsx)(S.a, {
                                          size: "xs",
                                          color: "white",
                                          className: "mt-1",
                                        })
                                      : (0, es.jsx)("h3", {
                                          children: R
                                            ? Number(
                                                R.toFixed(2)
                                              ).toLocaleString()
                                            : "0",
                                        })
                                    : (0, es.jsx)("h3", { children: 0 }),
                                ],
                              }),
                              (0, es.jsx)("div", {
                                children: (0, es.jsx)(f(), {
                                  src: "/icons/tvl-01.svg",
                                  alt: " ",
                                  width: 32,
                                  height: 32,
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, es.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 icecard",
                          children: (0, es.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, es.jsxs)("div", {
                                children: [
                                  (0, es.jsx)("h4", {
                                    children: "Assigned ICE",
                                  }),
                                  void 0 != ep
                                    ? (0, es.jsx)("h3", {
                                        children: Number(
                                          ep.toFixed(2)
                                        ).toLocaleString(),
                                      })
                                    : (0, es.jsx)(es.Fragment, {
                                        children: (0, es.jsx)(S.a, {
                                          size: "xs",
                                          color: "white",
                                          className: "mt-1",
                                        }),
                                      }),
                                ],
                              }),
                              (0, es.jsx)("div", {
                                children: (0, es.jsx)(f(), {
                                  src: "/icons/volume-24h-01.svg",
                                  alt: " ",
                                  width: 32,
                                  height: 32,
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, es.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 icecard",
                          children: (0, es.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, es.jsxs)("div", {
                                children: [
                                  (0, es.jsx)("h4", {
                                    children: "Defrosting ICE",
                                  }),
                                  eK
                                    ? (0, es.jsx)(es.Fragment, {
                                        children: (0, es.jsx)(S.a, {
                                          size: "xs",
                                          color: "white",
                                          className: "mt-1",
                                        }),
                                      })
                                    : (0, es.jsx)("h3", {
                                        children: Number(
                                          G.toFixed(2)
                                        ).toLocaleString(),
                                      }),
                                ],
                              }),
                              (0, es.jsx)("div", {
                                children: (0, es.jsx)(f(), {
                                  src: "/icons/my-liquidity-01.svg",
                                  alt: " ",
                                  width: 32,
                                  height: 32,
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, es.jsxs)("div", {
                      className:
                        "grid items-start grid-cols-1 gap-3 mt-5 sm:grid-cols-2 xl:grid-cols-5",
                      children: [
                        (0, es.jsxs)("div", {
                          className:
                            "grid grid-cols-1 gap-y-3 sm:gap-x-3 xl:col-end-3 xl:col-start-1",
                          children: [
                            (0, es.jsxs)("div", {
                              className:
                                "col-start-1 col-end-2 px-4 py-5 icecard",
                              children: [
                                (0, es.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [
                                    (0, es.jsx)("h3", { children: "Freeze" }),
                                    eM
                                      ? (0, es.jsx)(S.a, {
                                          color: "white",
                                          size: "sm",
                                        })
                                      : (0, es.jsx)(es.Fragment, {}),
                                  ],
                                }),
                                (0, es.jsx)("h5", {
                                  className: "mt-1",
                                  children:
                                    "Get ICE instantly by freezing SLUSH. Converting SLUSH to ICE is instant and converts 1 to 1.",
                                }),
                                (0, es.jsx)("div", {
                                  className:
                                    "pt-3 pb-1 mt-3 xl:pt-4 xl:pb-2 icecard_statsbox",
                                  style: { background: "rgb(19, 25, 40, 1)" },
                                  children: (0, es.jsxs)("div", {
                                    className: "input_bx_spbt",
                                    children: [
                                      (0, es.jsxs)("div", {
                                        children: [
                                          (0, es.jsxs)("div", {
                                            className: "mr-1 flex_po_bc",
                                            children: [
                                              (0, es.jsx)(f(), {
                                                src: "/images/slush.png",
                                                alt: " ",
                                                width: 30,
                                                height: 30,
                                              }),
                                              (0, es.jsx)("h3", {
                                                children: "SLUSH",
                                              }),
                                            ],
                                          }),
                                          (0, es.jsx)("div", {
                                            className: "mt-2 form_ble_spbt",
                                            children: em.LR[F]
                                              ? D
                                                ? (0, es.jsxs)("p", {
                                                    children: [
                                                      "Balance: ",
                                                      D
                                                        ? Number(
                                                            D.toFixed(2)
                                                          ).toLocaleString()
                                                        : "-",
                                                    ],
                                                  })
                                                : (0, es.jsxs)(es.Fragment, {
                                                    children: [
                                                      (0, es.jsx)("p", {
                                                        children: "Balance:",
                                                      }),
                                                      (0, es.jsx)(S.a, {
                                                        size: "xs",
                                                        color: "white",
                                                        className: "ml-1",
                                                      }),
                                                    ],
                                                  })
                                              : (0, es.jsx)("p", {
                                                  children: "Balance: 0",
                                                }),
                                          }),
                                        ],
                                      }),
                                      (0, es.jsxs)("div", {
                                        className:
                                          "border inp_bx_bg border-white/10",
                                        children: [
                                          (0, es.jsx)("input", {
                                            type: "text",
                                            placeholder: "0.00",
                                            value: eF,
                                            onChange: (e) => sa(e.target.value),
                                          }),
                                          (0, es.jsx)("button", {
                                            onClick: () => {
                                              eA(
                                                D
                                                  ? eg(
                                                      D.toFixed(
                                                        D.currency.decimals,
                                                        void 0,
                                                        a.Rounding.ROUND_DOWN
                                                      )
                                                    )
                                                  : ""
                                              );
                                            },
                                            children: "Max",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, es.jsx)("button", {
                                  className: ef,
                                  onClick: sm,
                                  disabled: !eF || 0 == Number(eF),
                                  children:
                                    sc === O.UK.NOT_APPROVED ||
                                    sc === O.UK.PENDING
                                      ? "Approve"
                                      : "Freeze",
                                }),
                              ],
                            }),
                            (0, es.jsxs)("div", {
                              className:
                                "col-start-1 col-end-2 px-4 py-5 icecard",
                              children: [
                                (0, es.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [
                                    (0, es.jsx)("h3", { children: "Defrost" }),
                                    eW
                                      ? (0, es.jsx)(S.a, {
                                          color: "white",
                                          size: "sm",
                                        })
                                      : (0, es.jsx)(es.Fragment, {}),
                                  ],
                                }),
                                (0, es.jsxs)("h5", {
                                  className: "mt-1",
                                  children: [
                                    "Defrost ICE to convert back to SLUSH. Defrosting takes between 14 and 90 days",
                                    (0, eh.vR)(w.L.ICECREAMZOMBIES_NFT, F) &&
                                      (0, es.jsx)(es.Fragment, {
                                        children:
                                          " but is reduced between 10 and 60 days for Ice Cream Zombie Club NFT holders",
                                      }),
                                    ".",
                                  ],
                                }),
                                (0, es.jsx)("h4", {
                                  className: "my-3 xl:my-4",
                                  children: "Defrost Amount",
                                }),
                                (0, es.jsx)("div", {
                                  className:
                                    "pt-3 pb-1 mt-3 xl:pt-4 xl:pb-2 icecard_statsbox",
                                  style: { background: "rgb(19, 25, 40, 1)" },
                                  children: (0, es.jsxs)("div", {
                                    className: "input_bx_spbt",
                                    children: [
                                      (0, es.jsxs)("div", {
                                        children: [
                                          (0, es.jsxs)("div", {
                                            className: "mr-1 flex_po_bc",
                                            children: [
                                              (0, es.jsx)(f(), {
                                                src: "/images/ice.svg",
                                                alt: " ",
                                                width: 32,
                                                height: 32,
                                              }),
                                              (0, es.jsx)("h3", {
                                                children: "ICE",
                                              }),
                                            ],
                                          }),
                                          (0, es.jsx)("div", {
                                            className: "mt-2 form_ble_spbt",
                                            children: em.k7[F]
                                              ? R
                                                ? (0, es.jsxs)("p", {
                                                    children: [
                                                      "Balance: ",
                                                      R
                                                        ? Number(
                                                            R.toFixed(2)
                                                          ).toLocaleString()
                                                        : "-",
                                                    ],
                                                  })
                                                : (0, es.jsxs)(es.Fragment, {
                                                    children: [
                                                      (0, es.jsx)("p", {
                                                        children: "Balance:",
                                                      }),
                                                      (0, es.jsx)(S.a, {
                                                        size: "xs",
                                                        color: "white",
                                                        className: "ml-1",
                                                      }),
                                                    ],
                                                  })
                                              : (0, es.jsx)("p", {
                                                  children: "Balance: 0",
                                                }),
                                          }),
                                        ],
                                      }),
                                      (0, es.jsxs)("div", {
                                        className:
                                          "border border-white/10 inp_bx_bg",
                                        children: [
                                          (0, es.jsx)("input", {
                                            type: "text",
                                            placeholder: "0.00",
                                            value: eL,
                                            onChange: (e) => sr(e.target.value),
                                          }),
                                          (0, es.jsx)("button", {
                                            onClick: () => {
                                              eD(
                                                R
                                                  ? Number(
                                                      R.toFixed(
                                                        R.currency.decimals,
                                                        void 0,
                                                        a.Rounding.ROUND_DOWN
                                                      )
                                                    ).toString()
                                                  : ""
                                              );
                                            },
                                            children: "Max",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, es.jsx)("h4", {
                                  className: "my-3 xl:my-4",
                                  children: "Defrost Time",
                                }),
                                (0, es.jsx)("div", {
                                  style: {
                                    background:
                                      P && P > 0
                                        ? "linear-gradient(rgba(19, 25, 40, 0.9) 0 0) padding-box, linear-gradient(135deg, #10ff3f 0%, #596f33 50%, #0a352a 100%) border-box"
                                        : "",
                                    border: "2px solid transparent",
                                    borderRadius: "10px",
                                  },
                                  children: (0, es.jsx)("div", {
                                    className:
                                      "!pb-7 p-3 xl:p-4 icecard_statsbox !pt-4 bg-dark-1000/100",
                                    children: (0, es.jsx)(C.i, {
                                      value: eR,
                                      color: "indigo",
                                      onChange: (e) => {
                                        ("" === e ||
                                          Number.isInteger(Number(e))) &&
                                          90 >= Number(e) &&
                                          eP(Number(e));
                                      },
                                      min: P && P > 0 ? 10 : 14,
                                      max: P && P > 0 ? 60 : 90,
                                      thumbSize: 18,
                                      styles: {
                                        label: {
                                          width: "26px",
                                          textAlign: "center",
                                          background: "rgb(19, 25, 40, 1)",
                                          color: "white",
                                          borderColor: "black",
                                        },
                                        markLabel: { color: "white" },
                                        mark: {
                                          borderColor: "black",
                                          backgroundColor: "white",
                                        },
                                        thumb: {
                                          backgroundColor: "black",
                                          borderColor: "white",
                                        },
                                      },
                                      marks:
                                        P && P > 0
                                          ? [
                                              { value: 10, label: "10" },
                                              { value: 30, label: "30" },
                                              { value: 45, label: "45" },
                                              { value: 60, label: "60" },
                                            ]
                                          : [
                                              { value: 14, label: "14" },
                                              { value: 30, label: "30" },
                                              { value: 60, label: "60" },
                                              { value: 90, label: "90" },
                                            ],
                                    }),
                                  }),
                                }),
                                (0, es.jsx)("h4", {
                                  className: "my-3 xl:my-4",
                                  children: "Defrost Output",
                                }),
                                (0, es.jsxs)("div", {
                                  className: "grid grid-cols-3 gap-1 mt-2",
                                  children: [
                                    (0, es.jsxs)("div", {
                                      className:
                                        "!p-3 text-center icecard_statsbox bg-dark-1000/100",
                                      children: [
                                        (0, es.jsx)("h5", { children: "Time" }),
                                        [
                                          a.ChainId.MANTLE_TESTNET,
                                          a.ChainId.TELOS_TESTNET,
                                          a.ChainId.TAIKO_TESTNET,
                                        ].includes(F)
                                          ? (0, es.jsxs)("h4", {
                                              className: "mt-2",
                                              children: [
                                                eR && eR / 10,
                                                " Mins",
                                              ],
                                            })
                                          : (0, es.jsxs)("h4", {
                                              className: "mt-2",
                                              children: [eR && eR, " Days"],
                                            }),
                                      ],
                                    }),
                                    (0, es.jsxs)("div", {
                                      className:
                                        "!p-3 text-center icecard_statsbox bg-dark-1000/100",
                                      children: [
                                        (0, es.jsx)("h5", {
                                          children: "Output",
                                        }),
                                        (0, es.jsxs)("h4", {
                                          className: "mt-2",
                                          children: [
                                            eR && sp(eR).toFixed(1),
                                            "%",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, es.jsxs)("div", {
                                      className:
                                        "!p-3 text-center icecard_statsbox bg-dark-1000/100",
                                      children: [
                                        (0, es.jsx)("h5", {
                                          children: "Amount",
                                        }),
                                        (0, es.jsxs)("h4", {
                                          className: "mt-2",
                                          children: [
                                            eR && eL
                                              ? Number(
                                                  (
                                                    (Number(sp(eR).toFixed(2)) /
                                                      100) *
                                                    Number(eL)
                                                  ).toFixed(2)
                                                ).toLocaleString() + " SLUSH"
                                              : "0 SLUSH",
                                            " ",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, es.jsx)(es.Fragment, {}),
                                (0, es.jsxs)("button", {
                                  className: sv ? eN : ef,
                                  onClick: su,
                                  disabled: sv,
                                  children: [
                                    "Defrost",
                                    eX
                                      ? (0, es.jsx)(S.a, {
                                          size: "xs",
                                          color: "white",
                                          className: "ml-1",
                                        })
                                      : (0, es.jsx)(es.Fragment, {}),
                                  ],
                                }),
                                eL && 0.1 > Number(eL)
                                  ? (0, es.jsx)("h5", {
                                      className: "mt-3 text-center",
                                      children: "0.1 ICE Minimum ",
                                    })
                                  : (0, es.jsx)(es.Fragment, {}),
                              ],
                            }),
                            (0, es.jsxs)("div", {
                              className:
                                "col-start-1 col-end-2 px-4 py-5 icecard",
                              children: [
                                (0, es.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [
                                    (0, es.jsx)("h3", {
                                      children: "Defrosting",
                                    }),
                                    eH || e$ || eK
                                      ? (0, es.jsx)(S.a, {
                                          color: "white",
                                          size: "sm",
                                        })
                                      : V && V.length > 1
                                      ? (0, es.jsx)("button", {
                                          className: " button-small text-white",
                                          onClick: sx,
                                          disabled: !V,
                                          children: "Claim All",
                                        })
                                      : (0, es.jsx)(es.Fragment, {}),
                                  ],
                                }),
                                (0, es.jsx)("h5", {
                                  className: "mt-1",
                                  children:
                                    "Pending defrosts are listed below. Check back after they have matured to claim your SLUSH.",
                                }),
                                (0, es.jsx)(er, {
                                  pendingRedeemsList: V,
                                  onClaim: sh,
                                  onCancel: sg,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, es.jsxs)("div", {
                          className:
                            "grid grid-cols-1 mt-2 gap-y-3 sm:gap-3 sm:mt-0 xl:col-end-6 xl:col-start-3",
                          children: [
                            (0, es.jsx)(y(), {
                              legacyBehavior: !0,
                              href: "/ice-cream-van",
                              passHref: !0,
                              children: (0, es.jsx)("div", {
                                className: "bg-center bg-cover cursor-pointer",
                                children: (0, es.jsxs)("div", {
                                  className: "px-4 pt-5 pb-5 icecard-bgimg",
                                  children: [
                                    (0, es.jsxs)("div", {
                                      className: "flex items-center",
                                      children: [
                                        (0, es.jsx)("div", {
                                          className: "mr-3",
                                          children: (0, es.jsx)(f(), {
                                            src: "/icons/icv_icon2.svg",
                                            alt: "",
                                            width: 34,
                                            height: 34,
                                          }),
                                        }),
                                        (0, es.jsx)("h3", {
                                          children: "Ice Cream Van",
                                        }),
                                        (0, es.jsx)("div", {
                                          className: "ml-auto",
                                          children: (0, es.jsx)(j.G, {
                                            size: "2x",
                                            icon: p.eFW,
                                            style: {
                                              color: "rgb(255,255,255,100)",
                                            },
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, es.jsx)("h5", {
                                      className: "my-4",
                                      children:
                                        "Stake ICE in the Ice Cream Van to earn a share of transaction fees paid in " +
                                        eO,
                                    }),
                                    (0, es.jsx)("hr", {
                                      className:
                                        "h-[1px] my-6 bg-gray-300 border-0",
                                    }),
                                    (0, es.jsxs)("div", {
                                      className:
                                        "grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-0 xl:gap-3",
                                      children: [
                                        (0, es.jsx)("div", {
                                          className: "icecard_statstable",
                                          children: (0, es.jsxs)("div", {
                                            className:
                                              "min-h-full p-3 xl:p-4 icecard_statsbox",
                                            style: {
                                              background: "rgb(19, 25, 40, 1)",
                                            },
                                            children: [
                                              (0, es.jsx)("h5", {
                                                className: "p-0 m-0",
                                                children: "Total Stake",
                                              }),
                                              void 0 !== J
                                                ? (0, es.jsxs)("h4", {
                                                    className: "p-0 m-0",
                                                    children: [
                                                      J?.toLocaleString(),
                                                      " ICE",
                                                    ],
                                                  })
                                                : (0, es.jsx)(S.a, {
                                                    size: "xs",
                                                    color: "white",
                                                    className: "mt-1",
                                                  }),
                                            ],
                                          }),
                                        }),
                                        (0, es.jsx)("div", {
                                          className: "icecard_statstable",
                                          children: (0, es.jsxs)("div", {
                                            className:
                                              "min-h-full p-3 xl:p-4 icecard_statsbox",
                                            style: {
                                              background: "rgb(19, 25, 40, 1)",
                                            },
                                            children: [
                                              (0, es.jsx)("h5", {
                                                className: "p-0 m-0",
                                                children: "My Stake",
                                              }),
                                              void 0 !== et
                                                ? (0, es.jsxs)("h4", {
                                                    className: "p-0 m-0",
                                                    children: [
                                                      Number(
                                                        et.toFixed(2)
                                                      ).toLocaleString(),
                                                      " ICE",
                                                    ],
                                                  })
                                                : (0, es.jsx)(S.a, {
                                                    size: "xs",
                                                    color: "white",
                                                    className: "mt-1",
                                                  }),
                                            ],
                                          }),
                                        }),
                                        (0, es.jsx)("div", {
                                          className: "icecard_statstable",
                                          children: (0, es.jsxs)("div", {
                                            className:
                                              "min-h-full p-3 xl:p-4 icecard_statsbox",
                                            style: {
                                              background: "rgb(19, 25, 40, 1)",
                                            },
                                            children: [
                                              (0, es.jsx)("h5", {
                                                children: "Unclaimed Rewards",
                                              }),
                                              void 0 !== ey && void 0 !== eO
                                                ? (0, es.jsx)("h4", {
                                                    className: "p-0 m-0",
                                                    children:
                                                      Number(
                                                        ey.toFixed(3)
                                                      ).toLocaleString() +
                                                      " " +
                                                      eO,
                                                  })
                                                : (0, es.jsx)(S.a, {
                                                    size: "xs",
                                                    color: "white",
                                                    className: "mt-1",
                                                  }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            eu.Z[F].includes(w.L.ZOMBIEVAN) &&
                              (0, es.jsx)(y(), {
                                legacyBehavior: !0,
                                href: "/zombie-van",
                                passHref: !0,
                                children: (0, es.jsx)("div", {
                                  className:
                                    "bg-center bg-cover cursor-pointer",
                                  children: (0, es.jsxs)("div", {
                                    className: "px-4 pt-5 pb-5 icecard-bgimg",
                                    children: [
                                      (0, es.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                          (0, es.jsx)("div", {
                                            className: "mr-3",
                                            children: (0, es.jsx)(f(), {
                                              src: "/icons/zv_icon5.svg",
                                              alt: "Reward",
                                              height: 34,
                                              width: 34,
                                            }),
                                          }),
                                          (0, es.jsx)("h3", {
                                            children: "Zombie Van",
                                          }),
                                          (0, es.jsx)("div", {
                                            className: "ml-auto",
                                            children: (0, es.jsx)(j.G, {
                                              size: "2x",
                                              icon: p.eFW,
                                              style: {
                                                color: "rgb(255,255,255,100)",
                                              },
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, es.jsx)("h5", {
                                        className: "mt-2 mb-4",
                                        children:
                                          "Stake ICE and boost your returns with Ice Cream Zombie Club NFTs to earn a share of transaction fees paid in " +
                                          (F == a.ChainId.MANTLE ||
                                          F == a.ChainId.MANTLE_TESTNET
                                            ? "MNT"
                                            : F == a.ChainId.TELOS_TESTNET ||
                                              F == a.ChainId.TELOS
                                            ? "TLOS"
                                            : "the chains native token."),
                                      }),
                                      (0, es.jsx)("hr", {
                                        className:
                                          "h-[1px] my-6 bg-gray-300 border-0",
                                      }),
                                      (0, es.jsxs)("div", {
                                        className:
                                          "grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-0 xl:gap-3",
                                        children: [
                                          (0, es.jsx)("div", {
                                            className: "icecard_statstable",
                                            children: (0, es.jsxs)("div", {
                                              className:
                                                "min-h-full p-3 xl:p-4 icecard_statsbox bg-dark-1000",
                                              children: [
                                                (0, es.jsx)("h5", {
                                                  className: "p-0 m-0",
                                                  children: "Total Stake",
                                                }),
                                                void 0 !== Q
                                                  ? (0, es.jsxs)("h4", {
                                                      className: "p-0 m-0",
                                                      children: [
                                                        Q?.toLocaleString(),
                                                        " ICE",
                                                      ],
                                                    })
                                                  : (0, es.jsx)(S.a, {
                                                      size: "xs",
                                                      color: "white",
                                                      className: "mt-1",
                                                    }),
                                              ],
                                            }),
                                          }),
                                          (0, es.jsx)("div", {
                                            className: "icecard_statstable",
                                            children: (0, es.jsxs)("div", {
                                              className:
                                                "min-h-full p-3 xl:p-4 icecard_statsbox bg-dark-1000",
                                              children: [
                                                (0, es.jsx)("h5", {
                                                  className: "p-0 m-0",
                                                  children: "My Stake",
                                                }),
                                                void 0 !== eb
                                                  ? (0, es.jsxs)("h4", {
                                                      className: "p-0 m-0",
                                                      children: [
                                                        Number(
                                                          eb.toFixed(2)
                                                        ).toLocaleString(),
                                                        " ICE",
                                                      ],
                                                    })
                                                  : (0, es.jsx)(S.a, {
                                                      size: "xs",
                                                      color: "white",
                                                      className: "mt-1",
                                                    }),
                                              ],
                                            }),
                                          }),
                                          (0, es.jsx)("div", {
                                            className: "icecard_statstable",
                                            children: (0, es.jsxs)("div", {
                                              className:
                                                "min-h-full p-3 xl:p-4 icecard_statsbox bg-dark-1000",
                                              children: [
                                                (0, es.jsx)("h5", {
                                                  children: "Unclaimed Rewards",
                                                }),
                                                void 0 !== eS && void 0 !== eO
                                                  ? (0, es.jsx)("h4", {
                                                      className: "p-0 m-0",
                                                      children:
                                                        Number(
                                                          eS.toFixed(3)
                                                        ).toLocaleString() +
                                                        " " +
                                                        eO,
                                                    })
                                                  : (0, es.jsx)(S.a, {
                                                      size: "xs",
                                                      color: "white",
                                                      className: "mt-1",
                                                    }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            eu.Z[F].includes(w.L.COMMUNITY_VAULT) &&
                              (0, es.jsx)(y(), {
                                legacyBehavior: !0,
                                href: "/community-vault",
                                passHref: !0,
                                children: (0, es.jsx)("div", {
                                  className:
                                    "bg-center bg-cover cursor-pointer",
                                  children: (0, es.jsxs)("div", {
                                    className: "px-4 pt-5 pb-5 icecard-bgimg",
                                    children: [
                                      (0, es.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                          (0, es.jsx)("div", {
                                            className: "mr-3",
                                            children: (0, es.jsx)(f(), {
                                              src: "/icons/il_icon2.svg",
                                              alt: "Reward",
                                              height: 38,
                                              width: 38,
                                            }),
                                          }),
                                          (0, es.jsx)("h3", {
                                            children: "Community Vault",
                                          }),
                                          (0, es.jsx)("div", {
                                            className: "ml-auto",
                                            children: (0, es.jsx)(j.G, {
                                              size: "2x",
                                              icon: p.eFW,
                                              style: {
                                                color: "rgb(255,255,255,100)",
                                              },
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, es.jsx)("h5", {
                                        className: "mt-2 mb-4",
                                        children:
                                          "Enter regular sustainable giveaways built on real yield by recycling ICE earned throughout the ecosystem",
                                      }),
                                      (0, es.jsx)("hr", {
                                        className:
                                          "h-[1px] my-6 bg-gray-300 border-0",
                                      }),
                                      (0, es.jsxs)("div", {
                                        className:
                                          "grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-0 xl:gap-3",
                                        children: [
                                          (0, es.jsx)("div", {
                                            className: "icecard_statstable",
                                            children: (0, es.jsxs)("div", {
                                              className:
                                                "min-h-full p-3 xl:p-4 icecard_statsbox bg-dark-1000",
                                              children: [
                                                (0, es.jsx)("h5", {
                                                  className: "p-0 m-0",
                                                  children: "Round Number",
                                                }),
                                                void 0 !== Q
                                                  ? (0, es.jsx)("h4", {
                                                      className: "p-0 m-0",
                                                      children: eI,
                                                    })
                                                  : (0, es.jsx)(S.a, {
                                                      size: "xs",
                                                      color: "white",
                                                      className: "mt-1",
                                                    }),
                                              ],
                                            }),
                                          }),
                                          (0, es.jsx)("div", {
                                            className: "icecard_statstable",
                                            children: (0, es.jsxs)("div", {
                                              className:
                                                "min-h-full p-3 xl:p-4 icecard_statsbox bg-dark-1000",
                                              children: [
                                                (0, es.jsx)("h5", {
                                                  className: "p-0 m-0",
                                                  children: "Maximum Entries",
                                                }),
                                                void 0 !== eb
                                                  ? (0, es.jsx)("h4", {
                                                      className: "p-0 m-0",
                                                      children: eT,
                                                    })
                                                  : (0, es.jsx)(S.a, {
                                                      size: "xs",
                                                      color: "white",
                                                      className: "mt-1",
                                                    }),
                                              ],
                                            }),
                                          }),
                                          (0, es.jsx)("div", {
                                            className: "icecard_statstable",
                                            children: (0, es.jsxs)("div", {
                                              className:
                                                "min-h-full p-3 xl:p-4 icecard_statsbox bg-dark-1000",
                                              children: [
                                                (0, es.jsx)("h5", {
                                                  children: "Reward Token",
                                                }),
                                                void 0 !== eS && void 0 !== eO
                                                  ? (0, es.jsx)("h4", {
                                                      className: "p-0 m-0",
                                                      children: eO,
                                                    })
                                                  : (0, es.jsx)(S.a, {
                                                      size: "xs",
                                                      color: "white",
                                                      className: "mt-1",
                                                    }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, es.jsx)(ei, {
                  isOpen: eY,
                  txPending: eM,
                  heading: "Confirm Freeze",
                  body:
                    "Are you sure you would like to Freeze " +
                    Number(Number(eF)?.toFixed(2))?.toLocaleString() +
                    " SLUSH?",
                  onConfirm: () => {
                    sd();
                  },
                  onDismiss: () => eQ(!1),
                  confirmButtonText: "Confirm",
                  cancelButtonText: "Cancel",
                }),
                (0, es.jsx)(ei, {
                  isOpen: e0,
                  txPending: eW,
                  heading: "Confirm Defrost",
                  body:
                    "Are you sure you would like to Defrost " +
                    Number(Number(eL)?.toFixed(2))?.toLocaleString() +
                    " ICE for " +
                    Number(q?.toFixed(2))?.toLocaleString() +
                    " SLUSH",
                  onConfirm: () => {
                    sb();
                  },
                  onDismiss: () => e1(!1),
                  confirmButtonText: "Confirm",
                  cancelButtonText: "Cancel",
                }),
                (0, es.jsx)(ei, {
                  isOpen: e4,
                  txPending: eH,
                  heading: "Confirm Claim",
                  body:
                    V && void 0 != e7 && V[e7]
                      ? "Are you sure you would like to claim " +
                        Number(
                          _.dF(V[e7]?.slushAmount.toBigInt())
                        ).toLocaleString() +
                        " SLUSH?"
                      : "",
                  onConfirm: () => {
                    sf();
                  },
                  onDismiss: () => e2(!1),
                  confirmButtonText: "Confirm",
                  cancelButtonText: "Cancel",
                }),
                (0, es.jsx)(ei, {
                  isOpen: e5,
                  txPending: eH,
                  heading: "Claim All",
                  body: V
                    ? "Are you sure you would like to claim all pending defrosts?"
                    : "",
                  onConfirm: () => {
                    sN();
                  },
                  onDismiss: () => e3(!1),
                  confirmButtonText: "Confirm",
                  cancelButtonText: "Cancel",
                }),
                (0, es.jsx)(ei, {
                  isOpen: e6,
                  txPending: e$,
                  heading: "Confirm Cancel",
                  body:
                    V && void 0 != e7 && V[e7]
                      ? "Are you sure you would like to cancel defrosting " +
                        Number(_.dF(V[e7]?.iceAmount.toBigInt())) +
                        " ICE?"
                      : "",
                  onConfirm: () => {
                    sj();
                  },
                  onDismiss: () => e9(!1),
                  confirmButtonText: "Confirm",
                  cancelButtonText: "Cancel",
                }),
              ],
            }),
          ],
        });
      }
      ej.Guard = (0, u.Z)(w.L.IGLOO);
    },
    599563: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/igloo",
        function () {
          return t(613324);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2962, 7414, 4614, 843, 5564, 2888, 9774, 179], function () {
      return e((e.s = 599563));
    }),
      (_N_E = e.O());
  },
]);
