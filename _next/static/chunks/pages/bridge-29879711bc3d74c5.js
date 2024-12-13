(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7869],
  {
    297078: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return I;
        },
      });
      var r = t(667294),
        s = t(80628),
        a = t(939507),
        i = t(168019),
        o = t(611794),
        l = t(960239),
        c = t(425675),
        u = t.n(c),
        d = t(192886),
        h = t(280544),
        f = t(685089),
        m = t(132601),
        N = t(141842),
        p = t(590526),
        T = t(538578),
        g = t(926146),
        x = t(785893),
        b = function (e) {
          let {
              currency: n,
              balance: t,
              onSelect: s,
              onDismiss: i,
              selectedCurrency: c,
              chainNames: f,
            } = e,
            { account: m } = (0, a.Z)(),
            N = (0, r.useMemo)(() => (n ? (0, h.LH)(t) : null), [n, t]),
            p = (0, r.useMemo)(
              () =>
                N
                  ? (0, x.jsx)(g.Z, { balance: N })
                  : m
                  ? (0, x.jsx)(o.Z, {})
                  : null,
              [m, N]
            ),
            b = (0, r.useMemo)(() => (n ? f[n.chainId] : ""), [n, f]),
            v = (0, r.useCallback)(() => {
              n !== c && (s(n), i());
            }, [n, i, s, c]);
          return (0, x.jsx)("div", {
            className: (0, T.AK)(
              n === c && "opacity-20 pointer-events-none",
              "flex items-center w-full hover:bg-dark-800/40 px-4 py-2"
            ),
            onClick: v,
            children: (0, x.jsxs)("div", {
              className:
                "flex items-center justify-between flex-grow gap-2 rounded cursor-pointer",
              children: [
                (0, x.jsxs)("div", {
                  className: "flex flex-row items-center flex-grow gap-3",
                  children: [
                    (0, x.jsx)(u(), {
                      className: "rounded-full",
                      src: n?.logoURI || l.R,
                      alt: "",
                      width: 32,
                      height: 32,
                    }),
                    (0, x.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, x.jsx)(d.Z, {
                          variant: "base",
                          weight: 700,
                          className: "text-high-emphesis",
                          children: n.symbol,
                        }),
                        (0, x.jsxs)(d.Z, {
                          variant: "xs",
                          className: "text-secondary",
                          children: ["On ", b],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, x.jsx)("div", {
                  className: "flex items-center",
                  children: p,
                }),
              ],
            }),
          });
        },
        v = function (e) {
          let {
            tokens: n,
            balances: t,
            onSelect: r,
            onDismiss: s,
            selectedCurrency: a,
            chainNames: i,
          } = e;
          return n.length
            ? (0, x.jsx)("div", {
                className:
                  "flex flex-col flex-1 flex-grow min-h-[50vh] lg:min-h-fit overflow-hidden h-full divide-y divide-dark-800",
                children: n.map((e, n) =>
                  (0, x.jsx)(
                    b,
                    {
                      currency: e,
                      balance: (0, f.UG)(e, t),
                      onSelect: r,
                      onDismiss: s,
                      selectedCurrency: a,
                      chainNames: i,
                    },
                    n
                  )
                ),
              })
            : (0, x.jsx)("div", {
                className: "px-4 py-2 text-base text-secondary",
                children: "No results found",
              });
        },
        y = function (e) {
          let {
              tokens: n,
              balances: t,
              isOpen: s,
              onDismiss: a,
              onCurrencySelect: o,
              selectedCurrency: l,
              chainNames: c,
            } = e,
            { 0: u, 1: d } = (0, r.useState)(""),
            h = (0, r.useMemo)(
              () =>
                u
                  ? n.filter((e) =>
                      [e.symbol, e.name, e.address].some((e) =>
                        e.toLowerCase().includes(u.toLowerCase())
                      )
                    )
                  : n,
              [u, n]
            );
          return (0, x.jsxs)(N.S.Controlled, {
            isOpen: s,
            onDismiss: a,
            children: [
              (0, x.jsx)(N.S.Header, {
                onClose: a,
                header: m.ag._(m.ag._("Select a token")),
              }),
              (0, x.jsx)(i.Z.Base, {
                placeholder: m.ag._(m.ag._("Search name or paste address")),
                value: u,
                onChange: (e) => {
                  d((0, p.UJ)(e) || e);
                },
              }),
              (0, x.jsx)("div", {
                className:
                  "max-h-[450px] h-full mt-4 overflow-hidden overflow-y-auto border rounded border-dark-800 bg-dark-1000",
                children: (0, x.jsx)(v, {
                  tokens: h,
                  balances: t,
                  onSelect: o,
                  onDismiss: a,
                  selectedCurrency: l,
                  chainNames: c,
                }),
              }),
            ],
          });
        },
        E = r.memo(function (e) {
          let {
              onCurrencySelect: n,
              onChange: t,
              value: c,
              currency: m,
              tokens: N,
              balances: p,
              balancesLoading: T,
              isOutputCurrency: g = !1,
              chainNames: b,
            } = e,
            { account: v, openWeb3Modal: E } = (0, a.Z)(),
            { 0: w, 1: I } = (0, r.useState)(!1),
            C = (0, r.useMemo)(() => (m ? (0, f.UG)(m, p) : null), [m, p]),
            O = (0, r.useMemo)(() => {
              let e = +Number(
                "string" == typeof C ? C.replace(/[^0-9.]/g, "") : C
              ).toFixed(4);
              return 0 === e ? "0" : e < 1e-4 ? "< 0.0001" : (0, h.LH)(e);
            }, [C]),
            j = (0, r.useMemo)(() => (m ? b[m.chainId] : ""), [m, b]),
            S = (0, r.useCallback)(() => {
              if (!v) {
                E();
                return;
              }
              I(!0);
            }, [I, E, v]),
            k = (0, r.useCallback)(
              (e) => {
                t && t(e);
              },
              [t]
            ),
            P = (0, r.useCallback)(
              (e) => {
                let n = (0, h.KH)(() => {
                  let n = e.trim(),
                    t = C || "0";
                  return "" === n
                    ? ""
                    : "." === n
                    ? "0."
                    : Number(n) > Number(t)
                    ? t
                    : 18 >= (0, f.ol)(n)
                    ? n
                    : null;
                });
                null !== n && k(n);
              },
              [k, C]
            ),
            U = (0, r.useCallback)(() => {
              C && !g && k(String(C));
            }, [g, k, C]);
          return (0,
          x.jsxs)("div", { className: "p-4 rounded bg-dark-card", children: [(0, x.jsx)(y, { tokens: N, isOpen: w, onDismiss: () => I(!1), onCurrencySelect: n, selectedCurrency: m, balances: p, chainNames: b }), (0, x.jsxs)("div", { className: "flex flex-col items-center sm:flex-row", children: [(0, x.jsxs)("div", { className: "flex flex-col w-full", children: [(0, x.jsxs)("button", { className: "text-2xl font-bold text-white whitespace-nowrap px-2.5 py-2 rounded flex items-center justify-between w-max hover:bg-dark-card-hover", onClick: S, children: [(0, x.jsx)("div", { className: "w-8 h-8 mr-2.5 rounded-full", children: (0, x.jsx)(u(), { src: m?.logoURI || l.R, alt: "", width: 32, height: 32 }) }), (0, x.jsxs)("div", { className: "flex flex-col items-start", children: [(0, x.jsx)(d.Z, { variant: "base", weight: 700, className: "text-high-emphesis", children: m ? m.symbol : "Select a token" }), m && (0, x.jsxs)(d.Z, { variant: "xs", className: "text-secondary", children: ["On ", j] })] }), (0, x.jsx)("span", { className: "duration-[0.3s] ml-4", children: (0, x.jsx)(s.Z, { size: 18 }) })] }), m && v ? (0, x.jsx)("div", { className: "mt-2 form_ble_spbt", children: (0, x.jsxs)("p", { className: "flex items-center w-max", children: [(0, x.jsxs)("span", { className: "mr-2", children: ["Balance: ", !T && O] }), " ", T && (0, x.jsx)(o.Z, { size: "14px", color: "white" })] }) }) : (0, x.jsx)("div", { className: "flex mt-7" })] }), (0, x.jsxs)("div", { className: "w-full border inp_bx_bg border-white/10", children: [(0, x.jsx)(i.Z.Numeric, { value: c, disabled: T, id: `amount-${m?.symbol}`, readOnly: g, onUserInput: P, className: "w-full text-3xl bg-transparent pr-0 py-1 text-left text-white", placeholder: "0" }), !g && (0, x.jsx)("button", { onClick: U, children: "Max" })] })] })] });
        }),
        w = t(827434),
        I = function (e) {
          let {
            inputValue: n,
            onInput: t,
            outputValue: r,
            inputCurrency: s,
            outputCurrency: a,
            inputCurrencyTokens: i,
            outputCurrencyTokens: o,
            inputTokenBalances: l,
            outputTokenBalances: c,
            balancesLoading: u,
            onInputCurrencySelect: d,
            onOutputCurrencySelect: h,
            chainNames: f,
          } = e;
          return (0, x.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, x.jsx)(E, {
                value: n,
                onChange: t,
                currency: s,
                onCurrencySelect: d,
                tokens: i,
                balances: l,
                balancesLoading: u,
                chainNames: f,
              }),
              (0, x.jsx)("span", {
                className: "flex items-center justify-center w-full",
                children: (0, x.jsx)(w.Z, {}),
              }),
              (0, x.jsx)(E, {
                value: r,
                currency: a,
                onCurrencySelect: h,
                tokens: o,
                balances: c,
                balancesLoading: u,
                chainNames: f,
                isOutputCurrency: !0,
              }),
            ],
          });
        };
    },
    500989: function (e, n, t) {
      "use strict";
      t.d(n, {
        UK: function () {
          return r.UK;
        },
        qL: function () {
          return r.qL;
        },
        x7: function () {
          return d;
        },
        rO: function () {
          return u.rO;
        },
        hP: function () {
          return u.hP;
        },
        mX: function () {
          return u.mX;
        },
        cq: function () {
          return u.cq;
        },
        MQ: function () {
          return u.MQ;
        },
        hU: function () {
          return u.hU;
        },
        TK: function () {
          return h;
        },
        ou: function () {
          return u.ou;
        },
        RO: function () {
          return u.RO;
        },
        JE: function () {
          return u.JE;
        },
        oe: function () {
          return u.oe;
        },
        i7: function () {
          return u.i7;
        },
        sL: function () {
          return u.sL;
        },
        oF: function () {
          return f.ZP;
        },
        lz: function () {
          return u.lz;
        },
      });
      var r = t(178462),
        s = t(119485),
        a = t(609279),
        i = t(353487),
        o = t(939507),
        l = t(828465),
        c = t(667294),
        u = t(86083),
        d = function () {
          let { account: e, chainId: n } = (0, o.Z)(),
            t = (0, l.h7)(),
            r = (0, u.rO)();
          return {
            deposit: (0, c.useCallback)(
              async (o, l) => {
                if (l && n)
                  try {
                    let c = (0, s.getAddress)(o);
                    if (c === i.WNATIVE_ADDRESS[n]) {
                      let n = await r?.deposit(a.d, e, e, l, 0, { value: l });
                      return t(n, { summary: "Deposit to Bentobox" });
                    }
                    {
                      let n = await r?.deposit(c, e, e, l, 0);
                      return t(n, { summary: "Deposit to Bentobox" });
                    }
                  } catch (e) {
                    return console.error("bentobox deposit error:", e), e;
                  }
              },
              [e, t, r, n]
            ),
            withdraw: (0, c.useCallback)(
              async (a, o, l) => {
                if (o && n)
                  try {
                    let c = (0, s.getAddress)(a),
                      u = await r?.withdraw(
                        c === i.WNATIVE_ADDRESS[n]
                          ? "0x0000000000000000000000000000000000000000"
                          : c,
                        e,
                        e,
                        o,
                        l ? l.toString() : 0
                      );
                    return t(u, { summary: "Withdraw from Bentobox" });
                  } catch (e) {
                    return console.error("bentobox withdraw error:", e), e;
                  }
              },
              [e, t, r, n]
            ),
            harvest: (0, c.useCallback)(async function (e) {
              let s =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (n)
                try {
                  let n = await r?.harvest(e, s, 0);
                  return t(n, {
                    summary: s ? "Harvest & Rebalance" : "Harvest",
                  });
                } catch (e) {
                  return console.error("bentobox harvest error:", e), e;
                }
            }, []),
          };
        };
      t(489638), t(219381), t(229128), t(501082);
      var h = function (e) {
          let { data: n } = e,
            { 0: t, 1: r } = (0, c.useState)("");
          return {
            result: (function (e) {
              let { data: n, term: t } = e;
              try {
                let e = n?.filter((e) =>
                  Object.values(e.pair)
                    ?.flatMap(Object.values)
                    ?.some(
                      (e) =>
                        "string" == typeof e &&
                        e.toLowerCase().includes(t.toLowerCase())
                    )
                );
                return t ? e : n;
              } catch (e) {
                return n;
              }
            })({ data: n, term: t }),
            search: r,
            term: t,
            reset: () => r(""),
          };
        },
        f = t(911163);
    },
    178462: function (e, n, t) {
      "use strict";
      t.d(n, {
        UK: function () {
          return f;
        },
        qL: function () {
          return m;
        },
        re: function () {
          return N;
        },
        NU: function () {
          return p;
        },
      }),
        t(421046);
      var r,
        s = t(341276),
        a = t(353487),
        i = t(939507),
        o = t(828465),
        l = t(667294),
        c = t(799767),
        u = t(86083),
        d = t(243475),
        h = t(330214);
      let f =
        (((r = {}).UNKNOWN = "UNKNOWN"),
        (r.NOT_APPROVED = "NOT_APPROVED"),
        (r.PENDING = "PENDING"),
        (r.APPROVED = "APPROVED"),
        r);
      function m(e, n) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { account: t } = (0, i.Z)(),
          { getGasPrice: r } = (0, h.Z)(),
          a = e?.currency?.isToken ? e.currency : void 0,
          c = (function (e, n, t) {
            let r = (0, u.Ib)(e?.address, !1),
              a = (0, l.useMemo)(() => [n, t], [n, t]),
              i = (0, d.Wk)(r, "allowance", a).result;
            return (0, l.useMemo)(
              () =>
                e && i
                  ? s.CurrencyAmount.fromRawAmount(e, i.toString())
                  : void 0,
              [e, i]
            );
          })(a, t ?? void 0, n),
          m = (0, o.wB)(a?.address, n),
          N = (0, l.useMemo)(
            () =>
              e && n
                ? e.currency.isNative
                  ? f.APPROVED
                  : c
                  ? c.lessThan(e)
                    ? m
                      ? f.PENDING
                      : f.NOT_APPROVED
                    : f.APPROVED
                  : f.UNKNOWN
                : f.UNKNOWN,
            [e, c, m, n]
          ),
          p = (0, u.Ib)(a?.address),
          T = (0, o.h7)(),
          g = (0, l.useCallback)(async () => {
            if (N !== f.NOT_APPROVED) {
              console.error("approve was called unnecessarily");
              return;
            }
            if (!a) {
              console.error("no token");
              return;
            }
            if (!p) {
              console.error("tokenContract is null");
              return;
            }
            if (!e) {
              console.error("missing amount to approve");
              return;
            }
            if (!n) {
              console.error("no spender");
              return;
            }
            let t = r();
            return p
              .approve(n, e.quotient.toString(), { gasPrice: t })
              .then((t) => {
                T(t, {
                  summary: "Approve " + e.currency.symbol,
                  approval: { tokenAddress: a.address, spender: n },
                });
              })
              .catch((e) => {
                throw (console.debug("Failed to approve token", e), e);
              });
          }, [N, a, p, e, n, T, r]);
        return [N, g];
      }
      function N(e, n) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { chainId: t } = (0, i.Z)();
        return m(
          (0, l.useMemo)(
            () =>
              e && e.inputAmount.currency.isToken
                ? e.maximumAmountIn(n)
                : void 0,
            [e, n]
          ),
          t
            ? e instanceof s.Trade
              ? a.ROUTER_ADDRESS[t]
              : e instanceof c.ho
              ? a.V3_SWAP_ROUTER_ADDRESS[t]
              : void 0
            : void 0
        );
      }
      let p = (e, n, t) => {
        let { account: r } = (0, i.Z)(),
          { getGasPrice: s } = (0, h.Z)(),
          a = (0, u.Ib)(e?.address, !1),
          c = (0, l.useMemo)(() => [r, t], [r, t]),
          m = (0, d.Wk)(a, "allowance", c).result,
          N = (0, o.wB)(e?.address, t),
          p = (0, l.useMemo)(
            () =>
              n && t && m
                ? Number(m) < Number(n)
                  ? N
                    ? f.PENDING
                    : f.NOT_APPROVED
                  : f.APPROVED
                : f.UNKNOWN,
            [n, m, N, t]
          ),
          T = (0, u.Ib)(e?.address),
          g = (0, o.h7)(),
          x = (0, l.useCallback)(async () => {
            if (p !== f.NOT_APPROVED) {
              console.error("approve was called unnecessarily");
              return;
            }
            if (!e) {
              console.error("no token");
              return;
            }
            if (!T) {
              console.error("tokenContract is null");
              return;
            }
            if (!n) {
              console.error("missing amount to approve");
              return;
            }
            if (!t) {
              console.error("no spender");
              return;
            }
            let r = s();
            return T.approve(t, n, { gasPrice: r })
              .then((n) => {
                g(n, {
                  summary: "Approve " + e.symbol,
                  approval: { tokenAddress: e.address, spender: t },
                });
              })
              .catch((e) => {
                throw (console.debug("Failed to approve token", e), e);
              });
          }, [p, e, T, n, t, g, s]);
        return [p, x];
      };
    },
    330214: function (e, n, t) {
      "use strict";
      var r = t(939507),
        s = t(548470);
      n.Z = function () {
        let { chainId: e } = (0, r.Z)();
        return {
          getGasPrice: () => {
            let n;
            let t = JSON.parse(
              '[{"chainId":5000,"price":0.02},{"chainId":5003,"price":0.02},{"chainId":167000,"price":0.15},{"chainId":167009,"price":0.05}]'
            );
            return (
              t &&
                t.map((t) => {
                  t.chainId === e && (n = s.vz(t.price.toString(), "gwei"));
                }),
              n
            );
          },
        };
      };
    },
    364270: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return ep;
          },
        });
      var r = t(809008),
        s = t.n(r),
        a = t(902962),
        i = t(534799),
        o = t(101097),
        l = t(667294),
        c = t(341276),
        u = t(492452);
      let d = {
          [c.ChainId.MANTLE]: {
            chainName: "Mantle",
            native: "MNT",
            tokens: [
              (0, u.F1)("SLUSH", c.ChainId.MANTLE),
              (0, u.F1)("ICE", c.ChainId.MANTLE),
              (0, u.F1)("RBN", c.ChainId.MANTLE),
            ],
          },
          [c.ChainId.MANTLE_TESTNET]: {
            chainName: "Mantle Testnet",
            native: "MNT",
            tokens: [
              (0, u.F1)("SLUSH", c.ChainId.MANTLE_TESTNET),
              (0, u.F1)("ICE", c.ChainId.MANTLE_TESTNET),
              (0, u.F1)("RBN", c.ChainId.MANTLE_TESTNET),
            ],
          },
          [c.ChainId.TELOS]: {
            chainName: "Telos",
            native: "TLOS",
            tokens: [
              (0, u.F1)("SLUSH", c.ChainId.TELOS),
              (0, u.F1)("ICE", c.ChainId.TELOS),
              (0, u.F1)("RBN", c.ChainId.TELOS),
            ],
          },
          [c.ChainId.TELOS_TESTNET]: {
            chainName: "Telos Testnet",
            native: "TLOS",
            tokens: [
              (0, u.F1)("SLUSH", c.ChainId.TELOS_TESTNET),
              (0, u.F1)("ICE", c.ChainId.TELOS_TESTNET),
              (0, u.F1)("RBN", c.ChainId.TELOS_TESTNET),
            ],
          },
          [c.ChainId.AVALANCHE_TESTNET]: {
            chainName: "Avalanche Fuji",
            native: "AVAX",
            tokens: [
              (0, u.F1)("SLUSH", c.ChainId.AVALANCHE_TESTNET),
              (0, u.F1)("ICE", c.ChainId.AVALANCHE_TESTNET),
            ],
          },
          [c.ChainId.TAIKO]: {
            chainName: "Taiko",
            native: "ETH",
            tokens: [
              (0, u.F1)("SLUSH", c.ChainId.TAIKO),
              (0, u.F1)("ICE", c.ChainId.TAIKO),
              (0, u.F1)("RBN", c.ChainId.TAIKO),
            ],
          },
          [c.ChainId.TAIKO_TESTNET]: {
            chainName: "Taiko Testnet",
            native: "ETH",
            tokens: [
              (0, u.F1)("SLUSH", c.ChainId.TAIKO_TESTNET),
              (0, u.F1)("ICE", c.ChainId.TAIKO_TESTNET),
              (0, u.F1)("RBN", c.ChainId.TAIKO_TESTNET),
            ],
          },
        },
        h = Object.values(d).flatMap((e) => {
          let { tokens: n } = e;
          return n;
        });
      var f = t(939507),
        m = t(38952),
        N = t(519673),
        p = t(369361),
        T = t(609279),
        g = t(626880),
        x = t(742160),
        b = t(462985),
        v = t(707583),
        y = t(538578);
      async function E(e, n, t) {
        try {
          let r = new b.r6(g.Z[t], "any");
          if (e === T.d) return r.getBalance(n);
          if (!(0, y.UJ)(e)) throw Error("Invalid contract address");
          let s = new v.CH(e, x.RB, r);
          return await s.balanceOf(n);
        } catch (n) {
          return (
            console.error(
              `Error fetching token balance for ${e} on chain ${t}`,
              n
            ),
            BigInt(0)
          );
        }
      }
      async function w(e, n) {
        return Promise.all(
          e.map(async (e) => {
            let { chainId: t, address: r } = e;
            return { chainId: t, address: r, balance: await E(r, n, t) };
          })
        );
      }
      function I() {
        return (0, N.C)((e) => e.bridgeV2);
      }
      function C() {
        let e = (0, N.T)(),
          n = (0, l.useCallback)(
            (n, t) => {
              e(
                (0, p.j)({
                  field: n,
                  currencyId: t?.address,
                  chainId: t?.chainId,
                })
              );
            },
            [e]
          ),
          t = (0, l.useCallback)(
            (n, t) => {
              e((0, p.LC)({ field: n, typedValue: t }));
            },
            [e]
          );
        return {
          onCurrencySelection: n,
          onUserInput: t,
          onSetAmount: (0, l.useCallback)(
            (n) => {
              e((0, p.T1)(n));
            },
            [e]
          ),
          onChangeRecipient: (0, l.useCallback)(
            (n) => {
              e((0, p.He)(n));
            },
            [e]
          ),
          onSetFeeMultiplier: (0, l.useCallback)(
            (n) => {
              e((0, p.kw)(n));
            },
            [e]
          ),
        };
      }
      let O = (e, n) => {
        if (!e || !n) return "0";
        let t = e.toString().split(".")[1]?.length,
          r = parseFloat(e.toFixed(t)),
          s = parseFloat(e.toFixed(n)),
          a = parseFloat(e.toFixed(9));
        return t < 9 && t < n
          ? r.toString()
          : n < 9
          ? s.toString()
          : a.toString();
      };
      function j(e, n) {
        return (
          (e && n
            ? d[n].tokens.find(
                (n) => n.address.toLowerCase() === e.toLowerCase()
              )
            : void 0) || (null === e ? null : void 0)
        );
      }
      function S() {
        let {
            [p.gN.INPUT]: { currencyId: e, chainId: n },
            [p.gN.OUTPUT]: { currencyId: t, chainId: r },
            typedValue: s,
            feeMultiplier: a,
          } = I(),
          i = j(e, n),
          o = j(t, r),
          c = (0, l.useMemo)(
            () => ({ [p.gN.INPUT]: i ?? void 0, [p.gN.OUTPUT]: o ?? void 0 }),
            [i, o]
          ),
          u = (0, l.useMemo)(() => {
            let e = Number(s) * (a / 1e4);
            return void 0 === a
              ? ""
              : O(Number(s) - e, c[p.gN.OUTPUT]?.decimals);
          }, [s, a, c]);
        return {
          currencies: c,
          outputAmount: u,
          inputCurrency: c[p.gN.INPUT],
          outputCurrency: c[p.gN.OUTPUT],
        };
      }
      let k = () => {
        let { account: e } = (0, f.Z)(),
          n = (0, N.T)(),
          { recipient: t } = I(),
          r = (0, l.useCallback)(
            async (e) => {
              n((0, p.BM)(!0));
              let t = await w(h, e);
              return n((0, p.BM)(!1)), t;
            },
            [n]
          );
        return {
          handleSetBalances: (0, l.useCallback)(async () => {
            let t = await r(e);
            n((0, p.J)(t));
          }, [e, n, r]),
          handleSetRecipientBalances: (0, l.useCallback)(async () => {
            if (t.toLowerCase() === e.toLowerCase()) {
              n((0, p.hu)([]));
              return;
            }
            if (42 !== t.length) return;
            let s = await r(t);
            n((0, p.hu)(s));
          }, [t, e, r, n]),
        };
      };
      var P = t(500989),
        U = t(548470),
        A = t(555814),
        L = t(280544),
        _ = t(797444),
        R = t(297078),
        M = t(685089),
        Z = t(569383),
        F = t(611794),
        D = t(534588),
        B = t(45697),
        K = t.n(B);
      function V() {
        return (V =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var z = (0, l.forwardRef)(function (e, n) {
        var t = e.color,
          r = e.size,
          s = void 0 === r ? 24 : r,
          a = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              s = (function (e, n) {
                if (null == e) return {};
                var t,
                  r,
                  s = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (t = a[r]), n.indexOf(t) >= 0 || (s[t] = e[t]);
                return s;
              })(e, n);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                (t = a[r]),
                  !(n.indexOf(t) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (s[t] = e[t]);
            }
            return s;
          })(e, ["color", "size"]);
        return l.createElement(
          "svg",
          V(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              width: s,
              height: s,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: void 0 === t ? "currentColor" : t,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            a
          ),
          l.createElement("circle", { cx: "12", cy: "12", r: "10" }),
          l.createElement("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
          l.createElement("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
        );
      });
      (z.propTypes = {
        color: K().string,
        size: K().oneOfType([K().string, K().number]),
      }),
        (z.displayName = "Info");
      var H = t(723939),
        W = t(178462),
        $ = t(805556),
        G = t(700455),
        q = t(397155),
        J = t(832423),
        X = t(312229);
      let Q = RegExp("^bytes([0-9]+)$"),
        Y = RegExp("^(u?int)([0-9]*)$"),
        ee = RegExp("^(.*)\\[([0-9]*)\\]$");
      var en = t(353487),
        et = t(828465),
        er = t(380203),
        es = t(330214),
        ea = t(490843),
        ei = t(785893),
        eo = function (e) {
          let { children: n, label: t, position: r = "top" } = e,
            { 0: s, 1: a } = (0, l.useState)(!1);
          return (0, ei.jsx)(ea.u, {
            width: "auto",
            multiline: !0,
            opened: s,
            label: t,
            position: r,
            children: (0, ei.jsx)("div", {
              className: "cursor-pointer",
              onMouseMove: () => {
                a(!0);
              },
              onMouseLeave: () => {
                a(!1);
              },
              children: n,
            }),
          });
        },
        el = t(732543),
        ec = t(738706);
      function eu() {
        let { account: e, chainId: n, openWeb3Modal: t } = (0, f.Z)(),
          { getGasPrice: r } = (0, es.Z)(),
          s = (0, P.hP)(),
          { waitForBalance: a } = {
            waitForBalance: (0, l.useCallback)(async (e, n, t) => {
              for (;;) {
                if ((await e.balanceOf(t)) >= n) return !0;
                await new Promise((e) => setTimeout(e, 5e3));
              }
            }, []),
          },
          i = (0, Z.i$)(),
          o = (0, et.h7)(),
          c = (function (e, n) {
            (0, J.en)(
              e.length === n.length,
              "wrong number of values; expected ${ types.length }",
              "values",
              n
            );
            let t = [];
            return (
              e.forEach(function (e, r) {
                t.push(
                  (function e(n, t, r) {
                    switch (n) {
                      case "address":
                        if (r) return (0, G.Pw)((0, G.U3)(t, 32));
                        return (0, G.Pw)((0, $.K)(t));
                      case "string":
                        return (0, q.Y0)(t);
                      case "bytes":
                        return (0, G.Pw)(t);
                      case "bool":
                        if (((t = t ? "0x01" : "0x00"), r))
                          return (0, G.Pw)((0, G.U3)(t, 32));
                        return (0, G.Pw)(t);
                    }
                    let s = n.match(Y);
                    if (s) {
                      let e = "int" === s[1],
                        a = parseInt(s[2] || "256");
                      return (
                        (0, J.en)(
                          (!s[2] || s[2] === String(a)) &&
                            a % 8 == 0 &&
                            0 !== a &&
                            a <= 256,
                          "invalid number type",
                          "type",
                          n
                        ),
                        r && (a = 256),
                        e && (t = (0, X.$j)(t, a)),
                        (0, G.Pw)((0, G.U3)((0, X.ot)(t), a / 8))
                      );
                    }
                    if ((s = n.match(Q))) {
                      let e = parseInt(s[1]);
                      return ((0, J.en)(
                        String(e) === s[1] && 0 !== e && e <= 32,
                        "invalid bytes type",
                        "type",
                        n
                      ),
                      (0, J.en)(
                        (0, G.M5)(t) === e,
                        `invalid value for ${n}`,
                        "value",
                        t
                      ),
                      r)
                        ? (0, G.Pw)((0, G.SK)(t, 32))
                        : t;
                    }
                    if ((s = n.match(ee)) && Array.isArray(t)) {
                      let r = s[1],
                        a = parseInt(s[2] || String(t.length));
                      (0, J.en)(
                        a === t.length,
                        `invalid array length for ${n}`,
                        "value",
                        t
                      );
                      let i = [];
                      return (
                        t.forEach(function (n) {
                          i.push(e(r, n, !0));
                        }),
                        (0, G.Pw)((0, G.zo)(i))
                      );
                    }
                    (0, J.en)(!1, "invalid type", "type", n);
                  })(e, n[r])
                );
              }),
              (0, G.Dv)((0, G.zo)(t))
            );
          })(["uint16", "uint256"], [1, 2e5]),
          { 0: u, 1: h } = (0, l.useState)(null),
          { 0: m, 1: N } = (0, l.useState)(""),
          { 0: T, 1: y } = (0, l.useState)(""),
          { 0: E, 1: w } = (0, l.useState)("0.000"),
          { 0: O, 1: j } = (0, l.useState)("0.000"),
          { 0: A, 1: L } = (0, l.useState)(!1),
          { 0: _, 1: R } = (0, l.useState)(!1),
          { 0: M, 1: B } = (0, l.useState)(!1),
          {
            typedValue: K,
            amount: V,
            recipient: ea,
            balances: eu,
            recipientBalances: ed,
            balancesLoading: ef,
            feeMultiplier: em,
          } = I(),
          { onUserInput: eN } = C(),
          { handleSetBalances: ep, handleSetRecipientBalances: eT } = k(),
          { currencies: eg, outputAmount: ex } = S(),
          eb = (0, l.useRef)(eg).current,
          [ev, ey] = (0, W.NU)(
            eg[p.gN.INPUT],
            V.toString(),
            en.BRIDGE_V2_ADDRESS[n]
          ),
          eE = (0, l.useCallback)(() => {
            let e = (0.004 * Number(K)).toFixed(3),
              n = (0.002 * Number(K)).toFixed(3),
              t = 40 === em ? (Number(K) - Number(ex)).toFixed(3) : e,
              r = 40 === em ? n : (Number(K) - Number(ex)).toFixed(3);
            w(t), j(r);
          }, [em, ex, K]),
          ew = (0, l.useCallback)(async () => {
            if (
              (y(""),
              h(null),
              N(""),
              eg[p.gN.INPUT]?.address && ea && 0 !== Number(V))
            )
              try {
                let e = await s.getLzNativeFee(
                    eg[p.gN.INPUT]?.address,
                    ea,
                    eh(eg[p.gN.OUTPUT]?.chainId),
                    V,
                    !1,
                    c
                  ),
                  n = Number(U.dF(BigInt(e))).toFixed(5);
                h(e), N(n);
              } catch (e) {
                console.log(e), y(e), h(0);
              }
          }, [eg, ea, c, s, V]),
          eI = (0, l.useCallback)(async () => {
            try {
              await ey();
            } catch (e) {
              console.log(e);
            }
          }, [ey]),
          eC = (0, l.useCallback)(async () => {
            let n;
            (n =
              ea.toLowerCase() !== e.toLowerCase()
                ? ed.find(
                    (e) =>
                      e.address === eg[p.gN.OUTPUT]?.address &&
                      e.chainId === eg[p.gN.OUTPUT]?.chainId
                  )?.balance
                : eu.find(
                    (e) =>
                      e.address === eg[p.gN.OUTPUT]?.address &&
                      e.chainId === eg[p.gN.OUTPUT]?.chainId
                  )?.balance),
              R(!0);
            let t = new b.r6(g.Z[eg[p.gN.OUTPUT]?.chainId]),
              r = new v.CH(eg[p.gN.OUTPUT]?.address, x.RB, t),
              s = Number(V) * (em / 1e4),
              i = Number(V) - s,
              o =
                Math.floor(
                  (Number(n) + i) * 10 ** -eg[p.gN.OUTPUT]?.decimals * 1e6
                ) / 1e6,
              l = (0, er.r0)(o, eg[p.gN.OUTPUT]?.decimals);
            (await a(r, l, ea)) &&
              (ep(),
              ea.toLowerCase() !== e.toLowerCase() && eT(),
              L(!1),
              R(!1));
          }, [eg, ea, ep, eT, e, eu, ed, a, V, em]),
          eO = (0, l.useCallback)(() => {
            h(null),
              N("0"),
              y(""),
              eN(p.gN.INPUT, ""),
              eN(p.gN.OUTPUT, ""),
              B(!1);
          }, [eN]),
          ej = (0, l.useCallback)(
            async (e, n, t) => {
              let a;
              let i = r(),
                l = u.mul(11).div(10).toString();
              ew();
              try {
                return (
                  (t = eh(t)),
                  (a = await s.bridge(e, n, ea, t, c, {
                    gasPrice: i,
                    value: l,
                  })),
                  o(a, { summary: `Bridge ${eg[p.gN.INPUT].symbol}` }),
                  eO(),
                  a
                );
              } catch (e) {
                return console.log(e), eO(), a;
              }
            },
            [c, o, s, eg, u, ea, eO, ew, r]
          ),
          eS = (0, l.useCallback)(
            async function (e) {
              let n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                t = { success: !1, hash: "na" };
              try {
                let r = await e();
                if (r) {
                  if (4001 === r.code)
                    return (
                      i({
                        txn: {
                          hash: "na",
                          success: !1,
                          summary: "Transaction rejected by user",
                        },
                      }),
                      (t.success = !1),
                      t
                    );
                  if (r?.code === 3e3)
                    return (
                      console.log("Transaction failed:", r),
                      i({
                        txn: {
                          hash: "na",
                          success: !1,
                          summary: "User our of gas",
                        },
                      }),
                      (t.success = !1),
                      t
                    );
                  if (r?.code === -32603)
                    return (
                      console.log("Transaction failed:", r),
                      i({
                        txn: {
                          hash: "na",
                          success: !1,
                          summary: r?.data?.message
                            ? "Contract Error: " + r?.data?.message
                            : "Execution Reverted",
                        },
                      }),
                      (t.success = !1),
                      t
                    );
                  if (r?.error)
                    return (
                      console.log("Transaction failed:", r),
                      i({
                        txn: {
                          hash: "na",
                          success: !1,
                          summary: "Transaction failed",
                        },
                      }),
                      (t.success = !1),
                      t
                    );
                  if (((t.success = !0), r?.hash && (t.hash = r.hash), n)) {
                    let e = await r.wait();
                    1 === e.status
                      ? (t.success = !0)
                      : (console.log("Transaction failed or reverted."),
                        (t.success = !1));
                  }
                }
              } catch (e) {
                console.error(e),
                  e?.code === -32603 &&
                    (e?.data?.message
                      ? i({
                          txn: {
                            hash: "na",
                            success: !1,
                            summary: "Wallet: " + e?.data?.message,
                          },
                        })
                      : i({
                          txn: {
                            hash: "na",
                            success: !1,
                            summary: "Wallet: Internal JSON-RPC error",
                          },
                        }),
                    (t.success = !1)),
                  (t.success = !1);
              }
              return t;
            },
            [i]
          ),
          ek = (0, l.useCallback)(async () => {
            if (
              e &&
              eg[p.gN.INPUT]?.address &&
              ea &&
              0 !== Number(V) &&
              u &&
              !T
            ) {
              L(!0);
              try {
                let e = await eS(
                  () =>
                    ej(V, eg[p.gN.INPUT]?.address, eg[p.gN.OUTPUT]?.chainId),
                  !0
                );
                e.success
                  ? (eC(), eO())
                  : (i({
                      txn: {
                        hash: e?.hash ?? null,
                        success: !1,
                        summary: "Transaction Failed",
                      },
                    }),
                    L(!1));
              } catch (e) {
                console.log(e), L(!1);
              }
            }
          }, [eO, e, eg, ea, u, i, eC, T, ej, eS, V]);
        return ((0, l.useEffect)(() => {
          ev === W.UK.PENDING ? B(!0) : B(!1);
        }, [ev, M]),
        (0, l.useEffect)(() => {
          B(!1), h(null), N("0"), y(""), eE();
        }, [eb, K, n, eE]),
        (0, l.useEffect)(() => {
          e && eE();
        }, [e, eE]),
        (0, l.useEffect)(() => {
          T || u || ew();
        }, [ew, u, T]),
        e)
          ? (0, ei.jsxs)("div", {
              children: [
                (0, ei.jsx)(ec.Z, {
                  Header: (0, ei.jsxs)("div", {
                    className:
                      "rounded select-none pointer px-1.5 py-1 flex items-center relative",
                    children: [
                      (0, ei.jsx)(D.Z, {
                        className: "mr-2",
                        strokeWidth: 1,
                        fill: "white",
                        size: 16,
                      }),
                      (0, ei.jsx)("span", {
                        children: (0, ei.jsx)("h5", {
                          children: `${em / 100}% fee`,
                        }),
                      }),
                    ],
                  }),
                  ButtonContent: (0, ei.jsxs)(ei.Fragment, {
                    children: [
                      (0, ei.jsx)(z, {
                        className: "mr-2",
                        strokeWidth: 2,
                        size: 16,
                      }),
                      (0, ei.jsx)("span", {
                        className: "mr-2",
                        children: (0, ei.jsx)("h5", {
                          children: "Bridge details",
                        }),
                      }),
                    ],
                  }),
                  Rows: [
                    {
                      title: (0, ei.jsx)("h5", { children: "Gas required" }),
                      value: (0, ei.jsx)("h5", {
                        children: `${m} ${d[n]?.native}`,
                      }),
                    },
                    {
                      title: (0, ei.jsx)("h5", { children: "Bridge fee" }),
                      value: (0, ei.jsx)("h5", {
                        className: 20 === em ? "line-through" : "",
                        children: `${E} ${eg[p.gN.INPUT]?.symbol}`,
                      }),
                    },
                  ],
                }),
                _ &&
                  (0, ei.jsxs)("div", {
                    className: "flex items-center mb-4 animate-fade",
                    children: [
                      (0, ei.jsx)(F.Z, { stroke: "white", size: "16px" }),
                      (0, ei.jsxs)("h5", {
                        className: "ml-2",
                        children: [
                          "Waiting for token on ",
                          d[eg[p.gN.OUTPUT]?.chainId].chainName,
                        ],
                      }),
                    ],
                  }),
                (0, ei.jsxs)("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [
                    (0, ei.jsxs)(el.Z, {
                      onClick: eI,
                      disabled:
                        (ev !== W.UK.NOT_APPROVED && 0 === Number(K)) ||
                        M ||
                        A ||
                        !eu ||
                        ef ||
                        !u ||
                        !eg[p.gN.INPUT]?.address ||
                        !eg[p.gN.OUTPUT]?.address,
                      loading: ev === W.UK.PENDING,
                      children: [
                        ev === W.UK.APPROVED &&
                          Number(K) > 0 &&
                          (0, ei.jsx)(H.Z, {
                            size: "20",
                            className: "hidden ml-1 sm:block",
                            color: "#00ffcf",
                          }),
                        (0, ei.jsx)("span", {
                          className:
                            ev === W.UK.APPROVED || ev === W.UK.PENDING
                              ? "ml-2"
                              : "",
                          children:
                            ev === W.UK.PENDING
                              ? "Approving"
                              : 0 === Number(K)
                              ? "1. Enter amount"
                              : ev === W.UK.APPROVED
                              ? `1. ${eg[p.gN.INPUT]?.symbol} approved`
                              : `1. Approve ${eg[p.gN.INPUT]?.symbol}`,
                        }),
                      ],
                    }),
                    (0, ei.jsx)(el.Z, {
                      onClick: ek,
                      disabled:
                        ev !== W.UK.APPROVED ||
                        M ||
                        0 === Number(K) ||
                        A ||
                        !u ||
                        ef ||
                        !eu,
                      loading: A,
                      children: (0, ei.jsx)("span", {
                        className: A ? "ml-2" : "",
                        children: A ? "Bridging" : "2. Bridge",
                      }),
                    }),
                  ],
                }),
              ],
            })
          : (0, ei.jsx)(el.Z, { onClick: t, children: "Connect Wallet" });
      }
      let ed = {
          [c.ChainId.TELOS]: {
            input: d[c.ChainId.TELOS].tokens[0],
            output: d[c.ChainId.MANTLE].tokens[0],
          },
          [c.ChainId.MANTLE]: {
            input: d[c.ChainId.MANTLE].tokens[0],
            output: d[c.ChainId.TELOS].tokens[0],
          },
          [c.ChainId.TELOS_TESTNET]: {
            input: d[c.ChainId.TELOS_TESTNET].tokens[0],
            output: d[c.ChainId.MANTLE_TESTNET].tokens[0],
          },
          [c.ChainId.MANTLE_TESTNET]: {
            input: d[c.ChainId.MANTLE_TESTNET].tokens[0],
            output: d[c.ChainId.TELOS_TESTNET].tokens[0],
          },
          [c.ChainId.AVALANCHE_TESTNET]: {
            input: d[c.ChainId.AVALANCHE_TESTNET].tokens[0],
            output: d[c.ChainId.MANTLE_TESTNET].tokens[0],
          },
          [c.ChainId.TAIKO]: {
            input: d[c.ChainId.TAIKO].tokens[0],
            output: d[c.ChainId.TELOS].tokens[0],
          },
          [c.ChainId.TAIKO_TESTNET]: {
            input: d[c.ChainId.TAIKO_TESTNET].tokens[0],
            output: d[c.ChainId.TELOS_TESTNET].tokens[0],
          },
        },
        eh = (e) => (
          [c.ChainId.TAIKO, c.ChainId.TAIKO_TESTNET].includes(e) &&
            (e = parseInt(e.toString().replace("00", ""))),
          e
        ),
        ef = (0, L.Xc)(d, (e) => {
          let { chainName: n } = e;
          return n;
        });
      var em = function () {
          let { chainId: e, account: n } = (0, f.Z)(),
            {
              typedValue: t,
              recipient: r,
              feeMultiplier: s,
              balancesLoading: a,
              balances: i,
              recipientBalances: o,
            } = I(),
            { inputCurrency: c, outputCurrency: u, outputAmount: d } = S(),
            { handleSetBalances: N, handleSetRecipientBalances: T } = k(),
            {
              onCurrencySelection: g,
              onUserInput: x,
              onChangeRecipient: b,
              onSetFeeMultiplier: v,
              onSetAmount: y,
            } = C(),
            E = (0, P.hP)(),
            w = ed[e]?.input,
            O = ed[e]?.output,
            j = (0, l.useMemo)(
              () => h.filter((n) => (0, m.Jg)(n.chainId) === (0, m.Jg)(e)),
              [e]
            ),
            Z = (0, l.useMemo)(
              () => new Map(j.map((e) => [(0, M.Xq)(e.chainId, e.address), e])),
              [j]
            ),
            F = (0, l.useMemo)(
              () => j.filter((e) => e.chainId === c?.chainId),
              [j, c?.chainId]
            ),
            D = (0, l.useMemo)(
              () =>
                j.filter((e) => e.chainId !== c?.chainId && e.name === c?.name),
              [c?.chainId, c?.name, j]
            ),
            B = (0, l.useCallback)(
              (e) =>
                e
                  .filter((e) => {
                    let { chainId: n, address: t } = e;
                    return Z.has((0, M.Xq)(n, t));
                  })
                  .map((e) => {
                    let { address: n, balance: t, chainId: r } = e,
                      s = Z.get((0, M.Xq)(r, n));
                    return {
                      address: n,
                      chainId: r,
                      balance: (0, L.LH)(t, s.decimals),
                    };
                  }),
              [Z]
            ),
            K = (0, l.useMemo)(() => (0, M.GF)(B(i)), [i, B]),
            V = (0, l.useMemo)(
              () =>
                o && r && r.toLowerCase() !== n?.toLowerCase()
                  ? (0, M.GF)(B(o))
                  : K,
              [n, B, K, r, o]
            ),
            z = (0, l.useCallback)(
              (e) => {
                y((0, U.vz)(e || "0", c?.decimals)), x(p.gN.INPUT, e);
              },
              [c?.decimals, y, x]
            ),
            H = (0, l.useCallback)(
              async (e) => {
                if (u?.name !== e.name) {
                  let n = j.find(
                    (n) => n.name === e.name && n.chainId === u?.chainId
                  );
                  g(p.gN.OUTPUT, n);
                }
                g(p.gN.INPUT, e), b(n);
              },
              [u?.name, u?.chainId, g, b, n, j]
            ),
            W = (0, l.useCallback)(
              async (e) => {
                let t;
                g(p.gN.OUTPUT, e);
                try {
                  let r = eh(e.chainId);
                  t = await E.getBridgingFee(c.address, r, n);
                  let s = Number(t);
                  v(s);
                } catch (e) {
                  console.log(e), v(0);
                }
              },
              [g, c, u, n, E]
            ),
            $ = (0, l.useCallback)(async () => {
              let e;
              if (c && u && n && !s)
                try {
                  let t = eh(u.chainId);
                  e = await E.getBridgingFee(c.address, t, n);
                  let r = Number(e);
                  v(r);
                } catch (e) {
                  console.log(e), v(0);
                }
            }, [c, u, n, s, E, v]);
          return (
            (0, l.useEffect)(() => {
              w &&
                O &&
                e !== c?.chainId &&
                (g(p.gN.INPUT, w), g(p.gN.OUTPUT, O), b(n));
            }, [w, O, e, c?.chainId, b, n, g]),
            (0, l.useEffect)(() => {
              n ? b(n) : b(""), n && N();
            }, [n, b, N]),
            (0, l.useEffect)(() => {
              r && n && T();
            }, [r, n, T]),
            (0, l.useEffect)(() => {
              n && $();
            }, [n, $, s]),
            (0, ei.jsx)(A.Z, {
              className:
                "z-10 pt-4 mt-[6%] space-t-6 md:pt-8 lg:pt-12 cstm_cntnr freezer",
              maxWidth: "2xl",
              children: (0, ei.jsx)("div", {
                className: "px-0 sm:max-1280",
                children: (0, ei.jsx)("div", {
                  className: "flex justify-center",
                  children: (0, ei.jsx)("div", {
                    className: "w-[95%] sm:w-[80%] max-w-[550px] min-w-[310px]",
                    children: (0, ei.jsxs)("div", {
                      className:
                        "flex flex-col order-first gap-2 p-4 icecard h-fit xl:col-span-2 2xl:col-span-2",
                      children: [
                        (0, ei.jsx)("div", {
                          className: "flex justify-between mb-3",
                          children: (0, ei.jsx)("div", {
                            children: (0, ei.jsx)("h3", { children: "Bridge" }),
                          }),
                        }),
                        (0, ei.jsx)(R.Z, {
                          inputValue: t,
                          onInput: z,
                          outputValue: d,
                          inputCurrency: c,
                          outputCurrency: u,
                          inputCurrencyTokens: F,
                          outputCurrencyTokens: D,
                          inputTokenBalances: K,
                          outputTokenBalances: V,
                          balancesLoading: a,
                          onInputCurrencySelect: H,
                          onOutputCurrencySelect: W,
                          chainNames: ef,
                        }),
                        (0, ei.jsx)(_.Z, {
                          value: r,
                          onChange: b,
                          disabled: !n || !c?.transferrable,
                        }),
                        (0, ei.jsx)(eu, {}),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        },
        eN = t(925575);
      function ep() {
        return (0, ei.jsxs)(ei.Fragment, {
          children: [
            (0, ei.jsx)(s(), {
              children: (0, ei.jsx)("title", { children: "Swapsicle" }),
            }),
            (0, ei.jsx)(a.PB, { title: "Swapsicle" }),
            (0, ei.jsx)(eN.Z, { image: "icebgtokenswap2" }),
            (0, ei.jsx)(em, {}),
          ],
        });
      }
      ep.Guard = (0, o.Z)(i.L.BRIDGE);
    },
    380203: function (e, n, t) {
      "use strict";
      t.d(n, {
        mb: function () {
          return a;
        },
        r0: function () {
          return i;
        },
      });
      var r = t(970794);
      new r.Z(0), new r.Z(1), new r.Z(2), new r.Z(9), new r.Z(10);
      let s = (e) => new r.Z(e.toString()),
        a = function (e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 18,
            t = Number(e) / 10 ** n;
          return isNaN(t) ? 0 : Number(t).toFixed(n);
        },
        i = function (e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 18,
            t = s(e),
            r = s(10 ** n);
          return t.multipliedBy(r);
        };
    },
    45376: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/bridge",
        function () {
          return t(364270);
        },
      ]);
    },
    827434: function (e, n, t) {
      "use strict";
      var r = t(667294),
        s = t(45697),
        a = t.n(s);
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var o = (0, r.forwardRef)(function (e, n) {
        var t = e.color,
          s = e.size,
          a = void 0 === s ? 24 : s,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              s = (function (e, n) {
                if (null == e) return {};
                var t,
                  r,
                  s = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (t = a[r]), n.indexOf(t) >= 0 || (s[t] = e[t]);
                return s;
              })(e, n);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                (t = a[r]),
                  !(n.indexOf(t) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (s[t] = e[t]);
            }
            return s;
          })(e, ["color", "size"]);
        return r.createElement(
          "svg",
          i(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              width: a,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: void 0 === t ? "currentColor" : t,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            o
          ),
          r.createElement("polyline", { points: "6 9 12 15 18 9" })
        );
      });
      (o.propTypes = {
        color: a().string,
        size: a().oneOfType([a().string, a().number]),
      }),
        (o.displayName = "ChevronDown"),
        (n.Z = o);
    },
    80628: function (e, n, t) {
      "use strict";
      var r = t(667294),
        s = t(45697),
        a = t.n(s);
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var o = (0, r.forwardRef)(function (e, n) {
        var t = e.color,
          s = e.size,
          a = void 0 === s ? 24 : s,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              s = (function (e, n) {
                if (null == e) return {};
                var t,
                  r,
                  s = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (t = a[r]), n.indexOf(t) >= 0 || (s[t] = e[t]);
                return s;
              })(e, n);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                (t = a[r]),
                  !(n.indexOf(t) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (s[t] = e[t]);
            }
            return s;
          })(e, ["color", "size"]);
        return r.createElement(
          "svg",
          i(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              width: a,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: void 0 === t ? "currentColor" : t,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            o
          ),
          r.createElement("polyline", { points: "9 18 15 12 9 6" })
        );
      });
      (o.propTypes = {
        color: a().string,
        size: a().oneOfType([a().string, a().number]),
      }),
        (o.displayName = "ChevronRight"),
        (n.Z = o);
    },
    534588: function (e, n, t) {
      "use strict";
      var r = t(667294),
        s = t(45697),
        a = t.n(s);
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var o = (0, r.forwardRef)(function (e, n) {
        var t = e.color,
          s = e.size,
          a = void 0 === s ? 24 : s,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              s = (function (e, n) {
                if (null == e) return {};
                var t,
                  r,
                  s = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (t = a[r]), n.indexOf(t) >= 0 || (s[t] = e[t]);
                return s;
              })(e, n);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (r = 0; r < a.length; r++)
                (t = a[r]),
                  !(n.indexOf(t) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (s[t] = e[t]);
            }
            return s;
          })(e, ["color", "size"]);
        return r.createElement(
          "svg",
          i(
            {
              ref: n,
              xmlns: "http://www.w3.org/2000/svg",
              width: a,
              height: a,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: void 0 === t ? "currentColor" : t,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            o
          ),
          r.createElement("polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
          })
        );
      });
      (o.propTypes = {
        color: a().string,
        size: a().oneOfType([a().string, a().number]),
      }),
        (o.displayName = "Zap"),
        (n.Z = o);
    },
  },
  function (e) {
    e.O(
      0,
      [1082, 2962, 7414, 794, 843, 1163, 930, 2888, 9774, 179],
      function () {
        return e((e.s = 45376));
      }
    ),
      (_N_E = e.O());
  },
]);
