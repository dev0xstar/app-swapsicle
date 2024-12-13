(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7259],
  {
    101097: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return y;
        },
      });
      var r = a(14744),
        l = a(341276),
        i = a(933222),
        t = (a(108307), a(704730), a(741664), a(811163)),
        n = (a(667294), a(785893)),
        c = a(178794),
        d = a(785910),
        o = a(322321),
        m = a(939507),
        h = a(949552),
        x = a.n(h),
        u = a(425675),
        j = a.n(u),
        N = a(538578),
        b = a(799603),
        f = a(259417),
        g = a(629936);
      let v = (e) => {
        let { children: s, feature: a } = e,
          { i18n: h } = (0, r.mV)(),
          { chainId: u, provider: v, account: y, disconnect: p } = (0, m.Z)(),
          w = (0, t.useRouter)(),
          { onSetDeactivated: T } = (0, g.Uu)();
        h._(h._("landing page."));
        let E = [
            l.ChainId.TELOS_TESTNET,
            l.ChainId.MANTLE_TESTNET,
            l.ChainId.TAIKO_TESTNET,
            l.ChainId.ETHEREUM,
            l.ChainId.OPTIMISM,
            l.ChainId.ARBITRUM,
            l.ChainId.MATIC,
            l.ChainId.AVALANCHE,
            l.ChainId.FANTOM,
            l.ChainId.BSC,
          ],
          C = Object.entries(c.Z).reduce((e, s) => {
            let [r, l] = s;
            return l.includes(a) && !E.includes(Number(r)) && e.push(r), e;
          }, []),
          S =
            1 == C.length
              ? "grid-cols-1"
              : C.length > 2
              ? "lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3"
              : "grid-cols-2";
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.Z.Controlled, {
              isOpen: !!y && !c.Z[u]?.includes(a),
              onDismiss: () => null,
              transparent: !0,
              children: (0, n.jsxs)("div", {
                className: "flex flex-col justify-center mt-0 freezer",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "flex items-center mt-1 ml-1 text-white align-middle",
                    children: (0, n.jsxs)("button", {
                      type: "button",
                      onClick: () => w.back(),
                      children: [
                        (0, n.jsx)(b.G, {
                          size: "sm",
                          icon: f.acZ,
                          style: { color: "rgb(255,255,255,100)" },
                          className: "mr-1",
                        }),
                        "Back",
                      ],
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "p-4",
                    children: [
                      (0, n.jsx)("h3", {
                        className: "mb-4 text-center",
                        children: "Incorrect Network",
                      }),
                      (0, n.jsxs)("h4", {
                        className: "mb-4 text-center",
                        children: [
                          "This feature is currently unsupported on ",
                          d.z[u],
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "flex justify-center mb-4",
                        children: (0, n.jsx)("div", {
                          className: "w-[40px] h-[40px] ",
                          children: (0, n.jsx)(j(), {
                            src: d.w[u] ? d.w[u] : d.w[l.ChainId.MANTLE],
                            alt: "Switch Network",
                            className:
                              "rounded-md filter drop-shadow-currencyLogo",
                            width: 40,
                            height: 40,
                          }),
                        }),
                      }),
                      (0, n.jsxs)("h5", {
                        className: "mb-4 text-center ",
                        children: [
                          "Select an available network below or disconnect your wallet to continue to ",
                          a,
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "icecard_statsbox",
                        style: { background: "rgb(19, 25, 40, 0.90)" },
                        children: [
                          (0, n.jsx)("h4", {
                            className: "mb-4 text-center",
                            children: "Available Networks",
                          }),
                          (0, n.jsx)("div", {
                            className: (0, N.AK)(
                              "grid flex-row justify-center gap-5 overflow-x-auto md:gap-8 ",
                              S
                            ),
                            children: C.map((e, s) =>
                              (0, n.jsxs)(
                                "button",
                                {
                                  className:
                                    "flex flex-col items-center justify-start gap-2 min-w-[100px] text-primary hover:text-white",
                                  onClick: () => {
                                    let s = o.b[e];
                                    x().set("chainId", e),
                                      e === l.ChainId.ETHEREUM.toString()
                                        ? v?.send(
                                            "wallet_switchEthereumChain",
                                            [{ chainId: "0x1" }, y]
                                          )
                                        : v?.send("wallet_addEthereumChain", [
                                            s,
                                            y,
                                          ]);
                                  },
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: "w-[40px] h-[40px]",
                                      children: (0, n.jsx)(j(), {
                                        src: d.w[e],
                                        alt: "Switch Network",
                                        className:
                                          "rounded-md filter drop-shadow-currencyLogo",
                                        width: 40,
                                        height: 40,
                                      }),
                                    }),
                                    (0, n.jsx)("h5", {
                                      className: "",
                                      children: d.z[e],
                                    }),
                                  ],
                                },
                                s
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "flex items-center justify-center",
                        children: (0, n.jsx)("button", {
                          className:
                            "flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-4 text-sm focus:outline-none focus:ring text-high-emphesis ButtonV2 max-w-[300px]",
                          onClick: () => {
                            p(), T(!0);
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
      var y = (e) => (s) => {
        let { children: a } = s;
        return (0, n.jsx)(v, { feature: e, children: a });
      };
    },
    178462: function (e, s, a) {
      "use strict";
      a.d(s, {
        UK: function () {
          return x;
        },
        qL: function () {
          return u;
        },
        re: function () {
          return j;
        },
        NU: function () {
          return N;
        },
      }),
        a(421046);
      var r,
        l = a(341276),
        i = a(353487),
        t = a(939507),
        n = a(828465),
        c = a(667294),
        d = a(799767),
        o = a(86083),
        m = a(243475),
        h = a(330214);
      let x =
        (((r = {}).UNKNOWN = "UNKNOWN"),
        (r.NOT_APPROVED = "NOT_APPROVED"),
        (r.PENDING = "PENDING"),
        (r.APPROVED = "APPROVED"),
        r);
      function u(e, s) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { account: a } = (0, t.Z)(),
          { getGasPrice: r } = (0, h.Z)(),
          i = e?.currency?.isToken ? e.currency : void 0,
          d = (function (e, s, a) {
            let r = (0, o.Ib)(e?.address, !1),
              i = (0, c.useMemo)(() => [s, a], [s, a]),
              t = (0, m.Wk)(r, "allowance", i).result;
            return (0, c.useMemo)(
              () =>
                e && t
                  ? l.CurrencyAmount.fromRawAmount(e, t.toString())
                  : void 0,
              [e, t]
            );
          })(i, a ?? void 0, s),
          u = (0, n.wB)(i?.address, s),
          j = (0, c.useMemo)(
            () =>
              e && s
                ? e.currency.isNative
                  ? x.APPROVED
                  : d
                  ? d.lessThan(e)
                    ? u
                      ? x.PENDING
                      : x.NOT_APPROVED
                    : x.APPROVED
                  : x.UNKNOWN
                : x.UNKNOWN,
            [e, d, u, s]
          ),
          N = (0, o.Ib)(i?.address),
          b = (0, n.h7)(),
          f = (0, c.useCallback)(async () => {
            if (j !== x.NOT_APPROVED) {
              console.error("approve was called unnecessarily");
              return;
            }
            if (!i) {
              console.error("no token");
              return;
            }
            if (!N) {
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
            let a = r();
            return N.approve(s, e.quotient.toString(), { gasPrice: a })
              .then((a) => {
                b(a, {
                  summary: "Approve " + e.currency.symbol,
                  approval: { tokenAddress: i.address, spender: s },
                });
              })
              .catch((e) => {
                throw (console.debug("Failed to approve token", e), e);
              });
          }, [j, i, N, e, s, b, r]);
        return [j, f];
      }
      function j(e, s) {
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let { chainId: a } = (0, t.Z)();
        return u(
          (0, c.useMemo)(
            () =>
              e && e.inputAmount.currency.isToken
                ? e.maximumAmountIn(s)
                : void 0,
            [e, s]
          ),
          a
            ? e instanceof l.Trade
              ? i.ROUTER_ADDRESS[a]
              : e instanceof d.ho
              ? i.V3_SWAP_ROUTER_ADDRESS[a]
              : void 0
            : void 0
        );
      }
      let N = (e, s, a) => {
        let { account: r } = (0, t.Z)(),
          { getGasPrice: l } = (0, h.Z)(),
          i = (0, o.Ib)(e?.address, !1),
          d = (0, c.useMemo)(() => [r, a], [r, a]),
          u = (0, m.Wk)(i, "allowance", d).result,
          j = (0, n.wB)(e?.address, a),
          N = (0, c.useMemo)(
            () =>
              s && a && u
                ? Number(u) < Number(s)
                  ? j
                    ? x.PENDING
                    : x.NOT_APPROVED
                  : x.APPROVED
                : x.UNKNOWN,
            [s, u, j, a]
          ),
          b = (0, o.Ib)(e?.address),
          f = (0, n.h7)(),
          g = (0, c.useCallback)(async () => {
            if (N !== x.NOT_APPROVED) {
              console.error("approve was called unnecessarily");
              return;
            }
            if (!e) {
              console.error("no token");
              return;
            }
            if (!b) {
              console.error("tokenContract is null");
              return;
            }
            if (!s) {
              console.error("missing amount to approve");
              return;
            }
            if (!a) {
              console.error("no spender");
              return;
            }
            let r = l();
            return b
              .approve(a, s, { gasPrice: r })
              .then((s) => {
                f(s, {
                  summary: "Approve " + e.symbol,
                  approval: { tokenAddress: e.address, spender: a },
                });
              })
              .catch((e) => {
                throw (console.debug("Failed to approve token", e), e);
              });
          }, [N, e, b, s, a, f, l]);
        return [N, g];
      };
    },
    330214: function (e, s, a) {
      "use strict";
      var r = a(939507),
        l = a(548470);
      s.Z = function () {
        let { chainId: e } = (0, r.Z)();
        return {
          getGasPrice: () => {
            let s;
            let a = JSON.parse(
              '[{"chainId":5000,"price":0.02},{"chainId":5003,"price":0.02},{"chainId":167000,"price":0.15},{"chainId":167009,"price":0.05}]'
            );
            return (
              a &&
                a.map((a) => {
                  a.chainId === e && (s = l.vz(a.price.toString(), "gwei"));
                }),
              s
            );
          },
        };
      };
    },
    366345: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return K;
          },
        });
      var r = a(667294),
        l = a(341276),
        i = a(741664),
        t = a.n(i),
        n = a(202593),
        c = a(809008),
        d = a.n(c),
        o = a(555814),
        m = a(425675),
        h = a.n(m),
        x = a(101097),
        u = a(178462),
        j = a(884081),
        N = a(939507),
        b = a(548470),
        f = a(816364),
        g = a(902962),
        v = a(799603),
        y = a(259417),
        p = a(634288),
        w = a(220966),
        T = a(615564),
        E = a(86083),
        C = a(534799),
        S = a(569383),
        k = a(828465),
        A = a(330214),
        I = () => {
          let { getGasPrice: e } = (0, A.Z)(),
            s = (0, k.h7)(),
            a = (0, E.Ox)(),
            l = e();
          return {
            enter: (0, r.useCallback)(
              async (e) => {
                try {
                  let r = await a?.buy(e?.toString(), { gasPrice: l });
                  return s(r, { summary: "Enter Community Vault" }), r;
                } catch (e) {
                  return e;
                }
              },
              [s, a, l]
            ),
            claim: (0, r.useCallback)(async () => {
              try {
                let e = await a?.claim({ gasPrice: l });
                return s(e, { summary: "Community Vault Claim" }), e;
              } catch (e) {
                return e;
              }
            }, [s, a, l]),
          };
        },
        _ = a(111603),
        F = a(334313),
        O = a(3751),
        M = a(785893),
        R = function (e) {
          let { expiryTimestamp: s } = e,
            {
              totalSeconds: a,
              seconds: r,
              minutes: l,
              hours: i,
              days: t,
              isRunning: n,
              start: c,
              pause: d,
              resume: o,
              restart: m,
            } = (0, O.useTimer)({
              expiryTimestamp: s,
              onExpire: () => console.warn("onExpire called"),
            });
          return (0, M.jsxs)("div", {
            className: "flex justify-between",
            children: [
              (0, M.jsxs)("div", {
                className:
                  "flex-col items-center justify-center text-center min-w-10",
                children: [
                  (0, M.jsx)("h3", { children: t < 10 ? `0${t}` : t }),
                  (0, M.jsx)("h5", { children: "Days" }),
                ],
              }),
              (0, M.jsx)("h3", {
                className: "flex items-start text-white",
                children: ":",
              }),
              (0, M.jsxs)("div", {
                className:
                  "flex-col items-center justify-center text-center min-w-10",
                children: [
                  (0, M.jsx)("h3", { children: i < 10 ? `0${i}` : i }),
                  (0, M.jsx)("h5", { children: "Hours" }),
                ],
              }),
              (0, M.jsx)("h3", {
                className: "flex items-start text-white",
                children: ":",
              }),
              (0, M.jsxs)("div", {
                className:
                  "flex-col items-center justify-center text-center min-w-10",
                children: [
                  (0, M.jsx)("h3", { children: l < 10 ? `0${l}` : l }),
                  (0, M.jsx)("h5", { children: "Mins" }),
                ],
              }),
              (0, M.jsx)("h3", {
                className: "flex items-start text-white",
                children: ":",
              }),
              (0, M.jsxs)("div", {
                className:
                  "flex-col items-center justify-center text-center min-w-10",
                children: [
                  (0, M.jsx)("h3", { children: r < 10 ? `0${r}` : r }),
                  (0, M.jsx)("h5", { children: "Secs" }),
                ],
              }),
            ],
          });
        },
        L = a(18646),
        D = a(353487);
      let z = {
          [l.ChainId.MANTLE]: {
            name: "Citizens of Mantle",
            address: "0x7cf4aC414C94E03Ecb2A7d6EA8F79087453cAEf0",
          },
          [l.ChainId.MANTLE_TESTNET]: {
            name: "Citizens of Mantle",
            address: "0xB38239b39f141CB9CdBf25e86f5eD37a6915d2DD",
          },
          [l.ChainId.TELOS]: {
            name: "Mino NFT",
            address: "0x8e1DDd46F663CB53254337D2134BAfe0170a29BA",
          },
          [l.ChainId.TELOS_TESTNET]: {
            name: "Mino NFT",
            address: "0x2c541666bb94448d0a4f8cfd012be28352353269",
          },
        },
        V = {
          [l.ChainId.TELOS]: {
            name: "Tekika",
            address: "0x5c00D81F7E00188751258a0DA0dd8198681D1fFA",
          },
          [l.ChainId.TELOS_TESTNET]: {
            name: "Tekika",
            address: "0x9db3e556121404771d91ded4efd1b8f8bfffaaa2",
          },
        },
        Z = {
          [l.ChainId.MANTLE]: "WMNT",
          [l.ChainId.MANTLE_TESTNET]: "WMNT",
          [l.ChainId.TELOS]: "WTLOS",
          [l.ChainId.TELOS_TESTNET]: "WTLOS",
          [l.ChainId.TAIKO]: "TAIKO",
          [l.ChainId.TAIKO_TESTNET]: "TAIKO",
        },
        G = {
          [l.ChainId.MANTLE]: "/img/mantle.svg",
          [l.ChainId.MANTLE_TESTNET]: "/img/mantle.svg",
          [l.ChainId.TELOS]: "/img/telos.png",
          [l.ChainId.TELOS_TESTNET]: "/img/telos.png",
          [l.ChainId.TAIKO]: "/img/taiko.svg",
          [l.ChainId.TAIKO_TESTNET]: "/img/taiko.svg",
        },
        U =
          "flex justify-center items-center rounded font-bold md:font-medium md:text-lg mt-4 text-sm focus:outline-none focus:ring",
        W = `${U} text-high-emphesis ButtonV2`,
        B = `${U} !cursor-not-allowed text-high-emphesis ButtonV2`;
      function K() {
        let {
            account: e,
            provider: s,
            openWeb3Modal: a,
            chainId: i,
          } = (0, N.Z)(),
          c = (0, S.i$)(),
          m = async function (e) {
            let s =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = !0;
            try {
              let r = await e();
              if (r) {
                if (4001 === r.code)
                  return (
                    c({
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
                    c({
                      txn: {
                        hash: "na",
                        success: !1,
                        summary: "User our of gas",
                      },
                    }),
                    !1
                  );
                if (r?.error?.code === -32603)
                  return (
                    console.log("Transaction failed:", r),
                    c({
                      txn: {
                        hash: "na",
                        success: !1,
                        summary: r?.error?.data?.message
                          ? "Contract Error: " + r?.error?.data?.message
                          : "Execution Reverted",
                      },
                    }),
                    !1
                  );
                if (r?.error)
                  return (
                    console.log("Transaction failed:", r),
                    c({
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
                    ? (a = !0)
                    : (console.log("Transaction failed or reverted."),
                      (a = !1));
                }
              }
            } catch (e) {
              if ((console.error(e), e?.code === -32603))
                return (
                  e?.data?.message
                    ? c({
                        txn: {
                          hash: "na",
                          success: !1,
                          summary: "Wallet: " + e?.data?.message,
                        },
                      })
                    : c({
                        txn: {
                          hash: "na",
                          success: !1,
                          summary: "Wallet: Internal JSON-RPC error",
                        },
                      }),
                  !1
                );
              a = !1;
            }
            return a;
          },
          x = (0, E.Ox)(),
          { 0: C, 1: k } = (0, r.useState)(-1),
          { 0: A, 1: O } = (0, r.useState)(0),
          { 0: U, 1: K } = (0, r.useState)(4),
          { 0: $, 1: H } = (0, r.useState)(0),
          { 0: J, 1: q } = (0, r.useState)(),
          { 0: X, 1: Y } = (0, r.useState)(!1),
          { 0: Q, 1: ee } = (0, r.useState)(),
          { 0: es, 1: ea } = (0, r.useState)(),
          { 0: er, 1: el } = (0, r.useState)(),
          { 0: ei, 1: et } = (0, r.useState)(0),
          { 0: en, 1: ec } = (0, r.useState)(100),
          { 0: ed, 1: eo } = (0, r.useState)(),
          { 0: em, 1: eh } = (0, r.useState)(0),
          { 0: ex, 1: eu } = (0, r.useState)(),
          { 0: ej, 1: eN } = (0, r.useState)(0),
          { 0: eb, 1: ef } = (0, r.useState)(0),
          { 0: eg, 1: ev } = (0, r.useState)(0),
          { 0: ey, 1: ep } = (0, r.useState)(0),
          { 0: ew, 1: eT } = (0, r.useState)(),
          { 0: eE, 1: eC } = (0, r.useState)(),
          { 0: eS, 1: ek } = (0, r.useState)(),
          { 0: eA, 1: eI } = (0, r.useState)(),
          { 0: e_, 1: eF } = (0, r.useState)(1e3),
          { 0: eO, 1: eM } = (0, r.useState)(15),
          { 0: eR, 1: eL } = (0, r.useState)(!1),
          { 0: eD, 1: eP } = (0, r.useState)(!1),
          { 0: ez, 1: eV } = (0, r.useState)(!1),
          { 0: eZ, 1: eG } = (0, r.useState)(!1),
          { enter: eU, claim: eW } = I(),
          eB = !!e,
          { sum: eK, isLoading: e$ } =
            (0, j.pX)(e ?? void 0, [D.ICECREAMZOMBIES_NFT_ADDRESS[i]]) ?? 0,
          { sum: eH, isLoading: eJ } = (0, j.$F)(e ?? void 0, [z[i]?.address]),
          { sum: eq, isLoading: eX } = (0, j.$F)(e ?? void 0, [V[i]?.address]),
          eY = (0, j.mM)(e ?? void 0, es),
          eQ = (e) =>
            L.tokens
              .filter((e) => e.chainId === i)
              .find((s) => s.address.toLowerCase() === e?.toLowerCase()),
          e0 = (0, r.useCallback)(async () => {
            eX ||
              eJ ||
              e$ ||
              !e ||
              (ev(
                eb
                  ? eb?.reduce(
                      (e, s) => (
                        (e[
                          D.ICECREAMZOMBIES_NFT_ADDRESS[i]?.toLowerCase() ===
                          s[0].toLowerCase()
                            ? "NFT0"
                            : z[i].address.toLowerCase() === s[0].toLowerCase()
                            ? "NFT1"
                            : V[i].address.toLowerCase() === s[0].toLowerCase()
                            ? "NFT2"
                            : "Unknown"
                        ] = {
                          limit: Number(s[1]),
                          active:
                            D.ICECREAMZOMBIES_NFT_ADDRESS[i]?.toLowerCase() ===
                            s[0].toLowerCase()
                              ? eK <= Number(s[1])
                                ? eK
                                : Number(s[1])
                              : z[i].address?.toLowerCase() ===
                                s[0].toLowerCase()
                              ? eH <= Number(s[1])
                                ? eH
                                : Number(s[1])
                              : V[i].address?.toLowerCase() ===
                                s[0].toLowerCase()
                              ? eq <= Number(s[1])
                                ? eq
                                : Number(s[1])
                              : 0,
                        }),
                        e
                      ),
                      {}
                    )
                  : void 0
              ),
              eP(!0));
          }, [i, eK, eH, eq, eb, e$, eJ, eX, e]),
          e2 = (0, r.useCallback)(async () => {
            try {
              if (!s || !e || eR) return;
              if (x) {
                let a = new _.zt(s, i),
                  r = new _.CH(x.address, F);
                await a
                  .all([
                    r.round(),
                    r.maxEntries(),
                    r.maxUserEntries(),
                    r.isActive(),
                    r.rewardsToken(),
                    r.buyToken(),
                    r.getEntryCaps(),
                    r.entryPrice(),
                    r.deadline(),
                  ])
                  .catch(
                    (e) => (console.error("Multicall error: " + e), [void 0])
                  )
                  .then(async (s) => {
                    let [t, c, d, o, m, h, x, u, j] = s;
                    k(Number(t)), O(Number(c)), K(Number(d)), q(o);
                    let N = eQ(h);
                    ea(new l.Token(i, h, 18, N.symbol, N.name)),
                      ee(eQ(m)),
                      ef(x),
                      et(Number(b.dF(n.O$.from(u).toString()))),
                      eu(new Date(1e3 * Number(j))),
                      await a
                        .all([
                          r.totalShares(Number(s[0])?.toString()),
                          r.userEntries(e),
                          r.rewardsPool(),
                          r.getEligibleQuantity(e),
                          r.roundData(t),
                          r.roundData(
                            Number(s[0]) >= 1
                              ? (Number(s[0]) - 1)?.toString()
                              : "0"
                          ),
                          r.totalShares(
                            Number(s[0]) >= 1
                              ? (Number(s[0]) - 1)?.toString()
                              : "0"
                          ),
                          r.getClaimableRewards(e),
                          r.roundData(
                            Number(s[0]) >= 1 ? Number(s[0])?.toString() : "0"
                          ),
                        ])
                        .catch(
                          (e) => (
                            console.error("Multicall 2 error: " + e), [void 0]
                          )
                        )
                        .then((e) => {
                          let [s, a, r, l, i, t, c, d, o] = e;
                          eN(Number(s)),
                            H(Number(a)),
                            el(Number(b.dF(n.O$.from(r).toString()))),
                            eh(Number(l)),
                            eT(i),
                            eC(t),
                            ec(Number(c)),
                            eI(eQ(t.buyToken.toString())),
                            ek(eQ(t.rewardsToken.toString())),
                            eF(
                              Number(b.dF(n.O$.from(t.rewardsPool).toString()))
                            ),
                            eM(
                              Number(b.dF(n.O$.from(t.entryPrice).toString()))
                            ),
                            Y(Number(o?.round) !== C);
                          let m = [],
                            h = d?.length;
                          if (void 0 != d && d?.length > 0) {
                            let e = async (s) => {
                              let a = {
                                balance: Number(b.dF(d[s]?.balance?._hex)),
                                decimals: d[s]?.decimals,
                                round: d[s]?.round,
                                tokenAddress: d[s]?.token,
                                claimDeadline: new Date(
                                  1e3 * Number(d[s]?.claimDeadline)
                                ),
                              };
                              m.push(a), eo(m), s + 1 < h && e(s + 1);
                            };
                            e(0);
                          }
                        });
                  });
              } else
                k(0),
                  O(0),
                  K(0),
                  q(!1),
                  setRewardsTokenAddress(""),
                  setBuyTokenAddress(""),
                  ef(null),
                  et(0),
                  eu(new Date(0));
            } catch (e) {
              console.error(
                "Failed to read from community vault contract: " + e
              );
            }
          }, [e, i, x, eR, s]);
        (0, r.useEffect)(() => {
          (async function () {
            s && e && !eR && (eL(!0), await e2(), eL(!1));
          })();
        }, [e, s]),
          (0, r.useEffect)(() => {
            (async function () {
              s && e && !(C < 0) && (await e0());
            })();
          }, [e, s, C, e0]);
        let e1 = async () => {
            if ((eG(!0), e3 !== u.UK.APPROVED)) await e6();
            else {
              if (!(await m(() => eU(ey), !0))) {
                eG(!1);
                return;
              }
              ep(0);
            }
            await e2(), eG(!1);
          },
          e5 = async () => {
            if ((eV(!0), !(await m(() => eW(), !0)))) {
              eV(!1);
              return;
            }
            await e2(), eV(!1);
          },
          e4 = () => (0, f.e)((ei * ey).toString(), eY?.currency),
          [e3, e6] = (0, u.qL)(e4(), x?.address),
          e7 = eY || 0,
          e8 =
            (e7 && 0 == Number(e7)) ||
            (e4() && Number(b.dF(e4().toFixed(0))) > Number(e7.toFixed(18))),
          e9 = ey < 1 || eZ || e8 || !J || (e4() && e4().equalTo(l.ZERO));
        return (0, M.jsxs)(M.Fragment, {
          children: [
            (0, M.jsx)(d(), {
              children: (0, M.jsx)("title", { children: "Swapsicle" }),
            }),
            (0, M.jsx)(g.PB, { title: "Swapsicle" }),
            (0, M.jsx)("div", {
              className: "bgWrap",
              children: (0, M.jsx)(h(), {
                src: "/images/cv_bk.jpg",
                alt: "",
                layout: "fill",
                objectFit: "cover",
                quality: 100,
                className: "z-0 opacity-50",
              }),
            }),
            (0, M.jsx)("div", {
              className: "bgWrapMobile",
              children: (0, M.jsx)(h(), {
                src: "/images/cv_bk.jpg",
                alt: "",
                layout: "fill",
                objectFit: "cover",
                quality: 100,
                className: "z-0",
              }),
            }),
            (0, M.jsx)(o.Z, {
              id: "",
              className:
                "z-10 pt-4 space-t-6 md:pt-8 lg:pt-12 cstm_cntnr freezer",
              maxWidth: "2xl",
              children: (0, M.jsxs)("div", {
                className: "max-1280",
                children: [
                  (0, M.jsx)("div", {
                    className: "flex justify-between",
                    children: (0, M.jsxs)("div", {
                      children: [
                        (0, M.jsx)("h1", {
                          className: "mb-0",
                          children: "Community Vault",
                        }),
                        (0, M.jsx)("h4", {
                          className: "mt-0",
                          children:
                            "Enter the monthly giveaway to claim a share of the rewards",
                        }),
                      ],
                    }),
                  }),
                  (0, M.jsx)("hr", {
                    className: "h-[1px] my-5 border-0",
                    style: { backgroundColor: "rgba(255, 255, 255, 0.15)" },
                  }),
                  (0, M.jsxs)("div", {
                    className:
                      "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4",
                    children: [
                      (0, M.jsx)("div", {
                        className:
                          "flex flex-col items-center justify-between px-4 py-5 modal-icecard",
                        children: (0, M.jsxs)("div", {
                          className: "flex items-center justify-between w-full",
                          children: [
                            (0, M.jsxs)("div", {
                              children: [
                                (0, M.jsx)("h4", {
                                  className: "mb-1",
                                  children: "Your Entries",
                                }),
                                (0, M.jsx)(M.Fragment, {
                                  children: eR
                                    ? (0, M.jsx)(w.a, {
                                        size: "xs",
                                        color: "white",
                                        className: "mt-2 ml-1",
                                      })
                                    : (0, M.jsxs)(M.Fragment, {
                                        children: [
                                          (0, M.jsx)("h3", {
                                            children: $ + " / " + em,
                                          }),
                                          (0, M.jsx)("h5", {
                                            children: "Round " + C,
                                          }),
                                        ],
                                      }),
                                }),
                              ],
                            }),
                            (0, M.jsx)("div", {
                              children: (0, M.jsx)(v.G, {
                                size: "2x",
                                icon: y.RMc,
                                style: { color: "rgb(255,255,255,100)" },
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, M.jsx)("div", {
                        className:
                          "flex flex-col items-center justify-between px-4 py-5 modal-icecard",
                        children: (0, M.jsxs)("div", {
                          className: "flex items-center justify-between w-full",
                          children: [
                            (0, M.jsxs)("div", {
                              children: [
                                (0, M.jsx)("h4", {
                                  className: "mb-1",
                                  children: "Total Entries",
                                }),
                                eR
                                  ? (0, M.jsx)(w.a, {
                                      size: "xs",
                                      color: "white",
                                      className: "mt-2 ml-1",
                                    })
                                  : (0, M.jsxs)(M.Fragment, {
                                      children: [
                                        (0, M.jsx)("h3", {
                                          children: ej + " / " + A,
                                        }),
                                        (0, M.jsx)("h5", {
                                          children: "Round " + C,
                                        }),
                                      ],
                                    }),
                              ],
                            }),
                            (0, M.jsx)("div", {
                              children: (0, M.jsx)(v.G, {
                                size: "2x",
                                icon: y.NdV,
                                style: { color: "rgb(255,255,255,100)" },
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, M.jsx)("div", {
                        className:
                          "flex flex-col items-center justify-between px-4 py-5 modal-icecard",
                        children: (0, M.jsxs)("div", {
                          className: "flex items-center justify-between w-full",
                          children: [
                            (0, M.jsxs)("div", {
                              children: [
                                (0, M.jsx)("h4", {
                                  className: "mb-1",
                                  children: "Reward",
                                }),
                                (0, M.jsx)(M.Fragment, {
                                  children: (0, M.jsxs)(M.Fragment, {
                                    children: [
                                      (0, M.jsx)("h3", {
                                        children: Q?.symbol ? Q?.symbol : Z[i],
                                      }),
                                      (0, M.jsx)("h5", { children: "Token" }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, M.jsx)("div", {
                              children: (0, M.jsx)(v.G, {
                                size: "2x",
                                icon: y.LjC,
                                style: { color: "rgb(255,255,255,100)" },
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, M.jsx)("div", {
                        className:
                          "flex flex-col items-center justify-between px-4 py-5 modal-icecard",
                        children: (0, M.jsxs)("div", {
                          className: "flex items-center justify-between w-full",
                          children: [
                            (0, M.jsxs)("div", {
                              children: [
                                (0, M.jsx)("h4", {
                                  className: "mb-1",
                                  children: J
                                    ? "Entries Close"
                                    : "Vault Status",
                                }),
                                (0, M.jsx)("div", {
                                  children: eR
                                    ? (0, M.jsx)(M.Fragment, {
                                        children: (0, M.jsx)(w.a, {
                                          size: "xs",
                                          color: "white",
                                          className: "mt-2 ml-1",
                                        }),
                                      })
                                    : J
                                    ? (0, M.jsx)(R, {
                                        expiryTimestamp: Number(ex),
                                      })
                                    : X
                                    ? (0, M.jsxs)(M.Fragment, {
                                        children: [
                                          (0, M.jsx)("h3", {
                                            children: "Round " + C,
                                          }),
                                          (0, M.jsx)("h5", {
                                            children: "Coming Soon",
                                          }),
                                        ],
                                      })
                                    : (0, M.jsxs)(M.Fragment, {
                                        children: [
                                          (0, M.jsx)("h3", {
                                            children: "Round " + C,
                                          }),
                                          (0, M.jsx)("h5", {
                                            children: "Ended",
                                          }),
                                        ],
                                      }),
                                }),
                              ],
                            }),
                            (0, M.jsx)("div", {
                              children: (0, M.jsx)(v.G, {
                                size: "2x",
                                icon: y.SZw,
                                style: { color: "rgb(255,255,255,100)" },
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, M.jsxs)("div", {
                    className:
                      "grid items-start grid-cols-1 gap-3 pt-5 sm:grid-cols-2 xl:grid-cols-5",
                    children: [
                      (0, M.jsx)("div", {
                        className:
                          "order-1 row-span-1 sm:col-span-5 xl:col-span-2 xl:order-1",
                        children: (0, M.jsxs)("div", {
                          className: "modal-icecard",
                          children: [
                            (0, M.jsxs)("div", {
                              className: "flex justify-between pt-6 pl-6",
                              children: [
                                (0, M.jsxs)("div", {
                                  className: "flex",
                                  children: [
                                    (0, M.jsx)("div", {
                                      className: "mr-3",
                                      children: (0, M.jsx)(v.G, {
                                        size: "2x",
                                        icon: y.Bkr,
                                        style: {
                                          color: "rgb(255,255,255,100)",
                                        },
                                      }),
                                    }),
                                    (0, M.jsx)("h3", { children: "The Vault" }),
                                  ],
                                }),
                                (eR || eZ || !eD) &&
                                  (0, M.jsx)(w.a, {
                                    size: "sm",
                                    color: "white",
                                    className: "mr-6",
                                  }),
                              ],
                            }),
                            (0, M.jsxs)("div", {
                              children: [
                                (0, M.jsx)("div", {
                                  className: "m-4",
                                  children: (0, M.jsx)("h5", {
                                    className: "my-4",
                                    children:
                                      "Enter the monthly community giveaway by holding valid NFTs",
                                  }),
                                }),
                                (0, M.jsxs)("div", {
                                  className: "mx-2 my-4",
                                  children: [
                                    (0, M.jsxs)("div", {
                                      className: "grid grid-cols-2 gap-2",
                                      children: [
                                        (0, M.jsxs)("div", {
                                          children: [
                                            (0, M.jsx)("h4", {
                                              className: "mb-3 ml-2 xl:mb-4",
                                              children: P[i]?.name,
                                            }),
                                            (0, M.jsx)("div", {
                                              className:
                                                "mt-2 icecard_statsbox bg-dark-1000",
                                              children: (0, M.jsx)("div", {
                                                className:
                                                  "flex items-center justify-start gap-2",
                                                children: (0, M.jsx)("div", {
                                                  className:
                                                    "flex items-center justify-start gap-2",
                                                  children:
                                                    !eR && eD && eg
                                                      ? (0, M.jsxs)(
                                                          M.Fragment,
                                                          {
                                                            children: [
                                                              Array(
                                                                eg.NFT0?.active
                                                              )
                                                                .fill(null)
                                                                .map((e, s) =>
                                                                  (0, M.jsx)(
                                                                    v.G,
                                                                    {
                                                                      icon: p.fV7,
                                                                      style: {
                                                                        color:
                                                                          "#63E6BE",
                                                                      },
                                                                      size: "2xl",
                                                                    },
                                                                    s
                                                                  )
                                                                ),
                                                              Array(
                                                                eg.NFT0?.limit -
                                                                  eg.NFT0
                                                                    ?.active
                                                              )
                                                                .fill(null)
                                                                .map((e, s) =>
                                                                  (0, M.jsx)(
                                                                    v.G,
                                                                    {
                                                                      icon: p.WA2,
                                                                      style: {
                                                                        color:
                                                                          "#d3d3d3",
                                                                      },
                                                                      size: "2xl",
                                                                    },
                                                                    s
                                                                  )
                                                                ),
                                                            ],
                                                          }
                                                        )
                                                      : (0, M.jsxs)(
                                                          M.Fragment,
                                                          {
                                                            children: [
                                                              " ",
                                                              (0, M.jsx)(v.G, {
                                                                icon: p.WA2,
                                                                style: {
                                                                  color:
                                                                    "#d3d3d3",
                                                                },
                                                                size: "2xl",
                                                              }),
                                                            ],
                                                          }
                                                        ),
                                                }),
                                              }),
                                            }),
                                            !eR && eD && eg
                                              ? (0, M.jsx)("h5", {
                                                  className: "mt-2 ml-2",
                                                  children:
                                                    "Maximum Entries: " +
                                                    eg.NFT0?.limit,
                                                })
                                              : (0, M.jsx)("h5", {
                                                  className: "mt-2 ml-2",
                                                  children:
                                                    "Maximum Entries: 0",
                                                }),
                                          ],
                                        }),
                                        (0, M.jsxs)("div", {
                                          children: [
                                            (0, M.jsx)("h4", {
                                              className: "mb-3 ml-2 xl:mb-4",
                                              children: z[i]?.name,
                                            }),
                                            (0, M.jsx)("div", {
                                              className:
                                                "mt-2 icecard_statsbox bg-dark-1000",
                                              children: (0, M.jsx)("div", {
                                                className:
                                                  "flex items-center justify-start gap-2",
                                                children:
                                                  !eR && eD && eg
                                                    ? (0, M.jsxs)(M.Fragment, {
                                                        children: [
                                                          Array(eg.NFT1?.active)
                                                            .fill(null)
                                                            .map((e, s) =>
                                                              (0, M.jsx)(
                                                                v.G,
                                                                {
                                                                  icon: p.fV7,
                                                                  style: {
                                                                    color:
                                                                      "#63E6BE",
                                                                  },
                                                                  size: "2xl",
                                                                },
                                                                s
                                                              )
                                                            ),
                                                          Array(
                                                            eg.NFT1?.limit -
                                                              eg.NFT1?.active
                                                          )
                                                            .fill(null)
                                                            .map((e, s) =>
                                                              (0, M.jsx)(
                                                                v.G,
                                                                {
                                                                  icon: p.WA2,
                                                                  style: {
                                                                    color:
                                                                      "#d3d3d3",
                                                                  },
                                                                  size: "2xl",
                                                                },
                                                                s
                                                              )
                                                            ),
                                                        ],
                                                      })
                                                    : (0, M.jsxs)(M.Fragment, {
                                                        children: [
                                                          " ",
                                                          (0, M.jsx)(v.G, {
                                                            icon: p.WA2,
                                                            style: {
                                                              color: "#d3d3d3",
                                                            },
                                                            size: "2xl",
                                                          }),
                                                        ],
                                                      }),
                                              }),
                                            }),
                                            !eR && eD && eg
                                              ? (0, M.jsx)("h5", {
                                                  className: "mt-2 ml-2",
                                                  children:
                                                    "Maximum Entries: " +
                                                    eg.NFT1?.limit,
                                                })
                                              : (0, M.jsx)("h5", {
                                                  className: "mt-2 ml-2",
                                                  children:
                                                    "Maximum Entries: 0",
                                                }),
                                          ],
                                        }),
                                        V[i] &&
                                          (0, M.jsxs)("div", {
                                            children: [
                                              (0, M.jsx)("h4", {
                                                className: "mb-3 ml-2 xl:mb-4",
                                                children: V[i]?.name,
                                              }),
                                              (0, M.jsx)("div", {
                                                className:
                                                  "mt-2 icecard_statsbox bg-dark-1000",
                                                children: (0, M.jsx)("div", {
                                                  className:
                                                    "flex items-center justify-start gap-2",
                                                  children:
                                                    !eR && eD && eg
                                                      ? (0, M.jsxs)(
                                                          M.Fragment,
                                                          {
                                                            children: [
                                                              Array(
                                                                eg.NFT2?.active
                                                              )
                                                                .fill(null)
                                                                .map((e, s) =>
                                                                  (0, M.jsx)(
                                                                    v.G,
                                                                    {
                                                                      icon: p.fV7,
                                                                      style: {
                                                                        color:
                                                                          "#63E6BE",
                                                                      },
                                                                      size: "2xl",
                                                                    },
                                                                    s
                                                                  )
                                                                ),
                                                              Array(
                                                                eg.NFT2?.limit -
                                                                  eg.NFT2
                                                                    ?.active
                                                              )
                                                                .fill(null)
                                                                .map((e, s) =>
                                                                  (0, M.jsx)(
                                                                    v.G,
                                                                    {
                                                                      icon: p.WA2,
                                                                      style: {
                                                                        color:
                                                                          "#d3d3d3",
                                                                      },
                                                                      size: "2xl",
                                                                    },
                                                                    s
                                                                  )
                                                                ),
                                                            ],
                                                          }
                                                        )
                                                      : (0, M.jsxs)(
                                                          M.Fragment,
                                                          {
                                                            children: [
                                                              " ",
                                                              (0, M.jsx)(v.G, {
                                                                icon: p.WA2,
                                                                style: {
                                                                  color:
                                                                    "#d3d3d3",
                                                                },
                                                                size: "2xl",
                                                              }),
                                                            ],
                                                          }
                                                        ),
                                                }),
                                              }),
                                              !eR && eD && eg
                                                ? (0, M.jsx)("h5", {
                                                    className: "mt-2 ml-2",
                                                    children:
                                                      "Maximum Entries: " +
                                                      eg.NFT2?.limit,
                                                  })
                                                : (0, M.jsx)("h5", {
                                                    className: "mt-2 ml-2",
                                                    children:
                                                      "Maximum Entries: 0",
                                                  }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, M.jsx)("h4", {
                                      className: "my-3 ml-2 xl:my-4",
                                      children: "Entries",
                                    }),
                                    (0, M.jsx)("div", {
                                      className: "mt-2",
                                      style: {
                                        background: "",
                                        border: "2px solid transparent",
                                        borderRadius: "10px",
                                      },
                                      children: (0, M.jsx)("div", {
                                        className:
                                          "!pb-7 p-3 xl:p-4 icecard_statsbox !pt-4 bg-dark-1000/100",
                                        children: (0, M.jsx)(T.i, {
                                          value: ey,
                                          color: "indigo",
                                          onChange: (e) => {
                                            ("" === e ||
                                              Number.isInteger(Number(e))) &&
                                              Number(e) <= em - $ &&
                                              ep(Number(e));
                                          },
                                          min: 0,
                                          max: U,
                                          disabled: em <= 0,
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
                                          marks: [
                                            { value: 0, label: "0" },
                                            { value: 1, label: "1" },
                                            { value: 2, label: "2" },
                                            { value: 3, label: "3" },
                                            { value: 4, label: "4" },
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, M.jsx)("h4", {
                                      className: "my-3 ml-2 xl:my-4",
                                      children: "Summary",
                                    }),
                                    (0, M.jsxs)("div", {
                                      className: "grid grid-cols-3 gap-2",
                                      children: [
                                        (0, M.jsx)("div", {
                                          className:
                                            "mt-0 icecard_statsbox bg-dark-1000",
                                          children: (0, M.jsxs)("div", {
                                            className:
                                              "flex flex-col items-center justify-between h-12",
                                            children: [
                                              (0, M.jsx)("h5", {
                                                className: "ml-2",
                                                children: "Entries",
                                              }),
                                              (0, M.jsx)("h4", {
                                                className: "ml-2",
                                                children: ey,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, M.jsx)("div", {
                                          className:
                                            "mt-0 icecard_statsbox bg-dark-1000",
                                          children: (0, M.jsxs)("div", {
                                            className:
                                              "flex flex-col items-center justify-between h-12",
                                            children: [
                                              (0, M.jsx)("h5", {
                                                className: "ml-2",
                                                children: "Valid NFTs",
                                              }),
                                              (0, M.jsx)("h4", {
                                                className: "ml-2",
                                                children: em,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, M.jsx)("div", {
                                          className:
                                            "mt-0 icecard_statsbox bg-dark-1000",
                                          children: (0, M.jsxs)("div", {
                                            className:
                                              "flex flex-col items-center justify-between h-12",
                                            children: [
                                              (0, M.jsx)("h5", {
                                                className: "ml-2",
                                                children: "Entry Fee",
                                              }),
                                              (0, M.jsx)("h4", {
                                                className: "ml-2",
                                                children:
                                                  ei > 0 && ey
                                                    ? (ei * ey).toFixed(0)
                                                    : "0 ICE",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, M.jsxs)("h5", {
                                      className: "my-4 ml-2",
                                      children: [
                                        "Entry fee: ",
                                        ei > 0 ? ei.toFixed(0) : "0",
                                        " ICE per entry",
                                      ],
                                    }),
                                    x
                                      ? (0, M.jsx)("button", {
                                          className:
                                            (e9 ? B : W) + " w-full h-14",
                                          onClick: eB ? e1 : () => a(),
                                          disabled: !!eB && e9,
                                          children: eB
                                            ? J
                                              ? $ >= em
                                                ? "Max Entries Reached"
                                                : ey < 1
                                                ? "Set Entries"
                                                : e3 === u.UK.NOT_APPROVED ||
                                                  e3 === u.UK.PENDING
                                                ? "Approve"
                                                : "Enter Round"
                                              : "Entries Closed"
                                            : "Connect Wallet",
                                        })
                                      : (0, M.jsxs)("button", {
                                          className:
                                            "flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-5 text-sm focus:outline-none focus:ring text-white bg-red border-red",
                                          disabled: !0,
                                          children: [
                                            " ",
                                            "Unsupported Network",
                                          ],
                                        }),
                                    (0, M.jsxs)("h5", {
                                      className: "my-4 ml-2",
                                      children: [
                                        [
                                          l.ChainId.MANTLE,
                                          l.ChainId.MANTLE_TESTNET,
                                        ].includes(i) &&
                                          (0, M.jsxs)(M.Fragment, {
                                            children: [
                                              "A maximum of ",
                                              eb[0]?.cap?.toString(),
                                              " ",
                                              P[i]?.name,
                                              " and ",
                                              eb[1]?.cap?.toString(),
                                              " ",
                                              z[i]?.name,
                                              " can be used to enter each round.",
                                            ],
                                          }),
                                        [
                                          l.ChainId.TELOS,
                                          l.ChainId.TELOS_TESTNET,
                                        ].includes(i) &&
                                          (0, M.jsxs)(M.Fragment, {
                                            children: [
                                              "A maximum of ",
                                              eb[0]?.cap?.toString(),
                                              " ",
                                              P[i]?.name,
                                              ", ",
                                              eb[1]?.cap?.toString(),
                                              " ",
                                              z[i]?.name,
                                              " and ",
                                              eb[2]?.cap?.toString(),
                                              " ",
                                              V[i]?.name,
                                              " can be used to enter each round.",
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, M.jsx)("hr", {
                                      className: "h-[1px] my-5 border-0",
                                      style: {
                                        backgroundColor:
                                          "rgba(255, 255, 255, 0.15)",
                                      },
                                    }),
                                    (0, M.jsx)("h4", {
                                      className: "my-3 ml-2 xl:my-4",
                                      children: "Previous Round Rewards",
                                    }),
                                    (0, M.jsxs)("div", {
                                      className: "grid grid-cols-3 gap-2",
                                      children: [
                                        (0, M.jsx)("div", {
                                          className:
                                            "mt-0 icecard_statsbox bg-dark-1000",
                                          children: (0, M.jsxs)("div", {
                                            className:
                                              "flex flex-col items-center justify-between h-12",
                                            children: [
                                              (0, M.jsx)("h5", {
                                                className: "ml-2",
                                                children: "Total",
                                              }),
                                              (0, M.jsx)("h4", {
                                                className: "ml-2",
                                                children:
                                                  e_?.toFixed(0) +
                                                  " " +
                                                  (eS?.symbol ?? Z[i]),
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, M.jsx)("div", {
                                          className:
                                            "mt-0 icecard_statsbox bg-dark-1000",
                                          children: (0, M.jsxs)("div", {
                                            className:
                                              "flex flex-col items-center justify-between h-12",
                                            children: [
                                              (0, M.jsx)("h5", {
                                                className: "ml-2",
                                                children: "Per Entry",
                                              }),
                                              (0, M.jsx)("h4", {
                                                className: "ml-2",
                                                children:
                                                  (0 !== en && e_
                                                    ? (e_ / en).toFixed(0)
                                                    : 0) +
                                                  " " +
                                                  (eS?.symbol ?? Z[i]),
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, M.jsx)("div", {
                                          className:
                                            "mt-0 icecard_statsbox bg-dark-1000",
                                          children: (0, M.jsxs)("div", {
                                            className:
                                              "flex flex-col items-center justify-between h-12",
                                            children: [
                                              (0, M.jsx)("h5", {
                                                className: "ml-2",
                                                children: "Entry Fee",
                                              }),
                                              (0, M.jsx)("h4", {
                                                className: "ml-2",
                                                children:
                                                  eO?.toLocaleString() +
                                                  " " +
                                                  (eA?.symbol ?? Z[i]),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, M.jsx)("div", {
                        className:
                          "order-1 row-span-2 sm:col-span-5 xl:col-span-3 xl:order-2",
                        children: (0, M.jsxs)("div", {
                          className: "modal-icecard",
                          children: [
                            (0, M.jsxs)("div", {
                              className: "flex pt-6 pl-6",
                              children: [
                                (0, M.jsx)("div", {
                                  className: "mr-3",
                                  children: (0, M.jsx)(v.G, {
                                    size: "2x",
                                    icon: y.WC0,
                                    style: { color: "rgb(255,255,255,100)" },
                                  }),
                                }),
                                (0, M.jsx)("h3", {
                                  children: "Sustainability",
                                }),
                              ],
                            }),
                            (0, M.jsxs)("div", {
                              children: [
                                (0, M.jsx)("div", {
                                  className: "m-4",
                                  children: (0, M.jsx)("h5", {
                                    className: "my-4",
                                    children:
                                      "The community vault is funded through a variety of sustainable means, enabling users to receive regular token drops in exchange for ICE tokens earned through farming and other means",
                                  }),
                                }),
                                (0, M.jsx)("div", {
                                  className: "mx-2 my-4",
                                  children: (0, M.jsxs)("div", {
                                    children: [
                                      [
                                        l.ChainId.MANTLE,
                                        l.ChainId.MANTLE_TESTNET,
                                      ].includes(i) &&
                                        (0, M.jsxs)("div", {
                                          children: [
                                            (0, M.jsx)("h4", {
                                              className: "mb-3 ml-2 xl:mb-4",
                                              children: "Mantle Journey",
                                            }),
                                            (0, M.jsx)("div", {
                                              className:
                                                "mt-2 icecard_statsbox bg-dark-1000",
                                              children: (0, M.jsxs)("div", {
                                                className:
                                                  "flex items-center justify-start gap-2",
                                                children: [
                                                  (0, M.jsx)("h5", {
                                                    className: "ml-2",
                                                    children:
                                                      "Mantle Journey is a program that tracks activities and interactions on the Mantle Network and converts them into journey miles. Swapsicle is a proud partner of the Mantle Journey and rewards users with MNT tokens for their participation.",
                                                  }),
                                                  (0, M.jsx)(h(), {
                                                    src: "/img/mantle.svg",
                                                    alt: " ",
                                                    width: 150,
                                                    height: 150,
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, M.jsxs)("div", {
                                              className:
                                                "grid grid-cols-3 gap-2",
                                              children: [
                                                (0, M.jsxs)("div", {
                                                  children: [
                                                    (0, M.jsx)("h5", {
                                                      className: "mt-2 ml-2",
                                                      children: "Reward Chain",
                                                    }),
                                                    (0, M.jsx)("div", {
                                                      className:
                                                        "flex items-center justify-between mt-2 icecard_statsbox bg-dark-1000",
                                                      children: (0, M.jsx)(
                                                        "h4",
                                                        {
                                                          className: "ml-2",
                                                          children: "Mantle",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, M.jsxs)("div", {
                                                  children: [
                                                    (0, M.jsx)("h5", {
                                                      className: "mt-2 ml-2",
                                                      children: "Reward Token",
                                                    }),
                                                    (0, M.jsx)("div", {
                                                      className:
                                                        "flex items-center justify-between mt-2 icecard_statsbox bg-dark-1000",
                                                      children: (0, M.jsx)(
                                                        "h4",
                                                        {
                                                          className: "ml-2",
                                                          children: "MNT",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, M.jsxs)("div", {
                                                  children: [
                                                    (0, M.jsx)("h5", {
                                                      className: "mt-2 ml-2",
                                                      children: "Support Us",
                                                    }),
                                                    (0, M.jsx)(t(), {
                                                      href: "https://journey.mantle.xyz/en",
                                                      passHref: !0,
                                                      children: (0, M.jsxs)(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex items-center justify-between mt-2 icecard_statsbox bg-dark-1000",
                                                          children: [
                                                            (0, M.jsx)("h4", {
                                                              className: "ml-2",
                                                              children:
                                                                "Read More",
                                                            }),
                                                            (0, M.jsx)("div", {
                                                              className: "ml-3",
                                                              children: (0,
                                                              M.jsx)(v.G, {
                                                                icon: y.FR9,
                                                                style: {
                                                                  color:
                                                                    "rgb(255,255,255,100)",
                                                                },
                                                                size: "lg",
                                                                className:
                                                                  "w-[21px] h-[21px]",
                                                              }),
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      (0, M.jsx)("hr", {
                                        className: "h-[1px] my-5 border-0",
                                        style: {
                                          backgroundColor:
                                            "rgba(255, 255, 255, 0.15)",
                                        },
                                      }),
                                      (0, M.jsxs)("div", {
                                        className: "",
                                        children: [
                                          (0, M.jsx)("h4", {
                                            className: "mb-3 ml-2 xl:mb-4",
                                            children: "Telos Block Producer",
                                          }),
                                          (0, M.jsx)("div", {
                                            className:
                                              "mt-2 icecard_statsbox bg-dark-1000",
                                            children: (0, M.jsxs)("div", {
                                              className:
                                                "flex items-center justify-start gap-2",
                                              children: [
                                                (0, M.jsx)("h5", {
                                                  className: "ml-2",
                                                  children:
                                                    "As a protocol-owned Telos block producer, Swapsicle aims to position itself at the forefront of Telos' infrastructure by helping to provide the reliable and secure network that the community enjoys.",
                                                }),
                                                (0, M.jsx)(h(), {
                                                  src: "/img/telos.png",
                                                  alt: " ",
                                                  width: 60,
                                                  height: 60,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, M.jsxs)("div", {
                                            className: "grid grid-cols-3 gap-2",
                                            children: [
                                              (0, M.jsxs)("div", {
                                                children: [
                                                  (0, M.jsx)("h5", {
                                                    className: "mt-2 ml-2",
                                                    children: "Reward Chain",
                                                  }),
                                                  (0, M.jsx)("div", {
                                                    className:
                                                      "flex items-center justify-between mt-2 icecard_statsbox bg-dark-1000",
                                                    children: (0, M.jsx)("h4", {
                                                      className: "ml-2",
                                                      children: "Telos",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              (0, M.jsxs)("div", {
                                                children: [
                                                  (0, M.jsx)("h5", {
                                                    className: "mt-2 ml-2",
                                                    children: "Reward Token",
                                                  }),
                                                  (0, M.jsx)("div", {
                                                    className:
                                                      "flex items-center justify-between mt-2 icecard_statsbox bg-dark-1000",
                                                    children: (0, M.jsx)("h4", {
                                                      className: "ml-2",
                                                      children: "TLOS",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              (0, M.jsxs)("div", {
                                                children: [
                                                  (0, M.jsx)("h5", {
                                                    className: "mt-2 ml-2",
                                                    children: "Support Us",
                                                  }),
                                                  (0, M.jsx)(t(), {
                                                    href: "https://explorer.telos.net/vote",
                                                    passHref: !0,
                                                    children: (0, M.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex items-center justify-between mt-2 icecard_statsbox bg-dark-1000",
                                                        children: [
                                                          (0, M.jsx)("h4", {
                                                            className: "ml-2",
                                                            children:
                                                              "Vote now",
                                                          }),
                                                          (0, M.jsx)("div", {
                                                            className: "ml-3",
                                                            children: (0,
                                                            M.jsx)(v.G, {
                                                              icon: y.FR9,
                                                              style: {
                                                                color:
                                                                  "rgb(255,255,255,100)",
                                                              },
                                                              size: "lg",
                                                              className:
                                                                "w-[21px] h-[21px]",
                                                            }),
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, M.jsx)("hr", {
                                        className: "h-[1px] my-5 border-0",
                                        style: {
                                          backgroundColor:
                                            "rgba(255, 255, 255, 0.15)",
                                        },
                                      }),
                                      (0, M.jsxs)("div", {
                                        children: [
                                          (0, M.jsx)("h4", {
                                            className: "mb-3 ml-2 xl:mb-4",
                                            children: "Avalanche Validator",
                                          }),
                                          (0, M.jsx)("div", {
                                            className:
                                              "mt-2 icecard_statsbox bg-dark-1000",
                                            children: (0, M.jsxs)("div", {
                                              className:
                                                "flex items-center justify-start gap-2",
                                              children: [
                                                (0, M.jsx)("h5", {
                                                  className: "ml-2",
                                                  children:
                                                    "Swapsicle has been running a reliable and secure Validator on the Avalanche network now for close to 2 years. Users can delegate their AVAX to our validator to both support the protocol and earn rewards.",
                                                }),
                                                (0, M.jsx)(h(), {
                                                  src: "/img/avx_ic.svg",
                                                  alt: " ",
                                                  width: 150,
                                                  height: 150,
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, M.jsxs)("div", {
                                            className: "grid grid-cols-3 gap-2",
                                            children: [
                                              (0, M.jsxs)("div", {
                                                children: [
                                                  (0, M.jsx)("h5", {
                                                    className: "mt-2 ml-2",
                                                    children: "Reward Chain",
                                                  }),
                                                  (0, M.jsx)("div", {
                                                    className:
                                                      "flex items-center justify-between mt-2 icecard_statsbox bg-dark-1000",
                                                    children: (0, M.jsx)("h4", {
                                                      className: "ml-2",
                                                      children: "All",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              (0, M.jsxs)("div", {
                                                children: [
                                                  (0, M.jsx)("h5", {
                                                    className: "mt-2 ml-2",
                                                    children: "Reward Token",
                                                  }),
                                                  (0, M.jsx)("div", {
                                                    className:
                                                      "flex items-center justify-between mt-2 icecard_statsbox bg-dark-1000",
                                                    children: (0, M.jsx)("h4", {
                                                      className: "ml-2",
                                                      children: "AVAX",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              (0, M.jsxs)("div", {
                                                children: [
                                                  (0, M.jsx)("h5", {
                                                    className: "mt-2 ml-2",
                                                    children: "Support Us",
                                                  }),
                                                  (0, M.jsx)(t(), {
                                                    href: "https://subnets.avax.network/validators/NodeID-NMfBW4PDVkVZhJzJa6SiCDZ4M7wAkXbAc",
                                                    passHref: !0,
                                                    children: (0, M.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex items-center justify-between mt-2 icecard_statsbox bg-dark-1000",
                                                        children: [
                                                          (0, M.jsx)("h4", {
                                                            className: "ml-2",
                                                            children:
                                                              "Delegate now",
                                                          }),
                                                          (0, M.jsx)("div", {
                                                            className: "ml-3",
                                                            children: (0,
                                                            M.jsx)(v.G, {
                                                              icon: y.FR9,
                                                              style: {
                                                                color:
                                                                  "rgb(255,255,255,100)",
                                                              },
                                                              size: "lg",
                                                              className:
                                                                "w-[21px] h-[21px]",
                                                            }),
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, M.jsx)("div", {
                        className:
                          "order-1 row-span-1 sm:col-span-5 xl:col-span-2 xl:order-2",
                        children: (0, M.jsxs)("div", {
                          className: "modal-icecard",
                          children: [
                            (0, M.jsxs)("div", {
                              className: "flex justify-between pt-6 pl-6",
                              children: [
                                (0, M.jsxs)("div", {
                                  className: "flex",
                                  children: [
                                    (0, M.jsx)("div", {
                                      className: "mr-3",
                                      children: (0, M.jsx)(v.G, {
                                        size: "2x",
                                        icon: y.aLp,
                                        style: {
                                          color: "rgb(255,255,255,100)",
                                        },
                                      }),
                                    }),
                                    (0, M.jsx)("h3", {
                                      children: "Claim Rewards",
                                    }),
                                  ],
                                }),
                                ez &&
                                  (0, M.jsx)(w.a, {
                                    size: "sm",
                                    color: "white",
                                    className: "mr-6",
                                  }),
                              ],
                            }),
                            (0, M.jsx)("div", {
                              className: "mx-2 mt-2 mb-4",
                              children: (0, M.jsxs)("div", {
                                className: "grid grid-cols-1",
                                children: [
                                  (0, M.jsx)("div", {
                                    children:
                                      void 0 === ed || ed?.length === 0
                                        ? (0, M.jsx)("div", {
                                            className:
                                              "w-full mt-4 icecard_statsbox bg-dark-1000",
                                            children: (0, M.jsxs)("div", {
                                              className:
                                                "flex items-center justify-between w-full",
                                              children: [
                                                (0, M.jsxs)("div", {
                                                  children: [
                                                    (0, M.jsx)("h3", {
                                                      children: "0",
                                                    }),
                                                    (0, M.jsx)("h5", {
                                                      children: Z[i],
                                                    }),
                                                  ],
                                                }),
                                                (0, M.jsx)("div", {
                                                  children: (0, M.jsx)(h(), {
                                                    src: G[i],
                                                    alt: " ",
                                                    width: 42,
                                                    height: 42,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          })
                                        : (0, M.jsx)(M.Fragment, {
                                            children: ed.map((e, s) =>
                                              (0, M.jsxs)(
                                                "div",
                                                {
                                                  children: [
                                                    (0, M.jsx)("h4", {
                                                      className: "mt-4 ml-2",
                                                      children:
                                                        "Round " + e?.round,
                                                    }),
                                                    (0, M.jsx)("div", {
                                                      className:
                                                        "w-full mt-2 icecard_statsbox bg-dark-1000",
                                                      children: (0, M.jsxs)(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex items-center justify-between w-full",
                                                          children: [
                                                            (0, M.jsxs)("div", {
                                                              children: [
                                                                (0, M.jsx)(
                                                                  "h3",
                                                                  {
                                                                    children:
                                                                      Number(
                                                                        e?.balance?.toFixed(
                                                                          6
                                                                        )
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, M.jsx)(
                                                                  "h5",
                                                                  {
                                                                    children:
                                                                      eQ(
                                                                        e?.tokenAddress
                                                                      )?.symbol,
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, M.jsx)("div", {
                                                              children: eQ(
                                                                e?.tokenAddress
                                                              ).logoURI
                                                                ? (0, M.jsx)(
                                                                    h(),
                                                                    {
                                                                      src: eQ(
                                                                        e?.tokenAddress
                                                                      ).logoURI,
                                                                      alt: " ",
                                                                      width: 42,
                                                                      height: 42,
                                                                    }
                                                                  )
                                                                : (0, M.jsx)(
                                                                    h(),
                                                                    {
                                                                      src: "/img/mantle.svg",
                                                                      alt: " ",
                                                                      width: 42,
                                                                      height: 42,
                                                                    }
                                                                  ),
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, M.jsxs)("div", {
                                                      className:
                                                        "flex items-center justify-between mt-2 mr-2",
                                                      children: [
                                                        (0, M.jsx)("div", {
                                                          children: (0, M.jsx)(
                                                            "h5",
                                                            {
                                                              className: "ml-2",
                                                              children:
                                                                "Claim Deadline: ",
                                                            }
                                                          ),
                                                        }),
                                                        (0, M.jsxs)("div", {
                                                          className:
                                                            "flex items-center",
                                                          children: [
                                                            (0, M.jsx)("h5", {
                                                              className: "mr-2",
                                                              children:
                                                                e?.claimDeadline?.toLocaleDateString(),
                                                            }),
                                                            (0, M.jsx)(v.G, {
                                                              className:
                                                                "w-[13px] h-[13px]",
                                                              icon: y.SZw,
                                                              style: {
                                                                color: "white",
                                                              },
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                s
                                              )
                                            ),
                                          }),
                                  }),
                                  (0, M.jsx)("button", {
                                    className:
                                      (ez ? B : W) + " w-full h-14 col-span-2",
                                    onClick: eB ? e5 : () => a(),
                                    disabled: !!eB && ez,
                                    children: "Claim",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      K.Guard = (0, x.Z)(C.L.COMMUNITY_VAULT);
    },
    263200: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/community-vault",
        function () {
          return a(366345);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [2962, 7414, 4614, 5564, 4714, 2888, 9774, 179], function () {
      return e((e.s = 263200));
    }),
      (_N_E = e.O());
  },
]);
