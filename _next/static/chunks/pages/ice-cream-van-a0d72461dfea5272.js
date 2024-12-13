(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2676],
  {
    832008: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return H;
          },
        });
      var r = a(667294),
        t = a(341276),
        i = a(353487),
        l = a(809008),
        n = a.n(l),
        c = a(555814),
        d = a(425675),
        o = a.n(d),
        u = a(101097),
        h = a(538578),
        m = a(816364),
        x = a(178462),
        j = a(519673),
        v = a(884081),
        p = a(600840),
        f = a(939507),
        g = a(335245),
        b = a(316004),
        N = a(317591),
        w = a(548470),
        y = a(902962),
        C = a(799603),
        E = a(259417),
        T = a(220966),
        S = a(902244),
        k = a(86083),
        R = a(534799),
        _ = a(569383),
        I = a(828465),
        A = a(330214),
        O = () => {
          let { getGasPrice: e } = (0, A.Z)(),
            s = (0, I.h7)(),
            a = (0, k.O)(),
            t = (0, k.a3)(),
            i = e(),
            l = (0, r.useCallback)(
              async (e) => {
                if (e?.quotient)
                  try {
                    let r = await a?.deposit(e?.quotient.toString(), {
                      gasPrice: i,
                    });
                    return s(r, { summary: "Enter Ice Cream Van" }), r;
                  } catch (e) {
                    return e;
                  }
              },
              [s, a, i]
            ),
            n = (0, r.useCallback)(
              async (e) => {
                if (e?.quotient)
                  try {
                    let r = await a?.withdraw(e?.quotient.toString(), {
                      gasPrice: i,
                    });
                    return s(r, { summary: "Leave Ice Cream Van" }), r;
                  } catch (e) {
                    return e;
                  }
              },
              [s, a, i]
            );
          return {
            stake: l,
            unstake: n,
            claim: (0, r.useCallback)(async () => {
              try {
                let e = await a?.deposit(0, { gasPrice: i });
                return s(e, { summary: "Ice Cream Van Claim" }), e;
              } catch (e) {
                return e;
              }
            }, [s, a, i]),
            forceUnstake: (0, r.useCallback)(async () => {
              try {
                let e = await a?.emergencyWithdraw({ gasPrice: i });
                return s(e, { summary: "Ice Cream Van Withdraw" }), e;
              } catch (e) {
                return e;
              }
            }, [s, a, i]),
            forceUnstakeOldContract: (0, r.useCallback)(async () => {
              try {
                let e = await t?.emergencyWithdraw({ gasPrice: i });
                return s(e, { summary: "Ice Cream Van Withdraw" }), e;
              } catch (e) {
                return e;
              }
            }, [s, t, i]),
          };
        },
        z = a(111603),
        P = a(699570),
        F = a(995578),
        D = a(673014),
        L = a(785893);
      let M = (e) => !e || e.match(/^(?!0\d)\d{0,18}(\.\d{0,18})?$/),
        U = (e) =>
          e.includes(".") ? e.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, "$1") : e,
        V = (e, s) =>
          (0, r.useMemo)(
            () => (s ? e.map((e) => e[s]?.address.toLowerCase()) : []),
            [e, s]
          ),
        W = (e) => Number(w.dF(BigInt(e))),
        G = "flex flex-col flex-grow gap-4",
        K =
          "flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-4 text-sm focus:outline-none focus:ring",
        B = `${K} text-high-emphesis ButtonV2`,
        $ = `${K} !cursor-not-allowed text-high-emphesis ButtonV2`,
        q =
          "flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-5 text-sm focus:outline-none focus:ring text-white bg-red border-red",
        Z = {
          backgroundColor: "rgba(140, 201, 127, 0)",
          lineColorDataTwo: "white",
          lineColorDataOne: "white",
          textColor: "white",
          areaTopColor: "rgba(255, 117, 222, 1)",
          areaBottomColor: "rgba(255, 206, 76, 1)",
          areaTopColorAvax: "rgba(255, 119, 231, 1)",
          areaBottomColorAvax: "rgba(226, 52, 187, 0.2)",
        };
      function H() {
        let e = (0, j.T)(),
          { view: s } = (0, j.C)(b.MB),
          {
            account: a,
            provider: l,
            openWeb3Modal: d,
            chainId: u,
          } = (0, f.Z)(),
          w = (0, _.i$)(),
          R = async function (e) {
            let s =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = !0;
            try {
              let r = await e();
              if (r) {
                if (4001 === r.code)
                  return (
                    w({
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
                    w({
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
                    w({
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
                    w({
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
                    ? w({
                        txn: {
                          hash: "na",
                          success: !1,
                          summary: "Wallet: " + e?.data?.message,
                        },
                      })
                    : w({
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
          I = (0, k.O)(),
          A = (0, k.a3)(),
          K = (0, p.cb)({ chainId: u }),
          H = (0, v.mM)(a ?? void 0, D.k7[u]),
          X = V([D.LR, D.FX], u),
          J = (0, p.pQ)(X, u),
          {
            stake: Y,
            unstake: Q,
            claim: ee,
            forceUnstake: es,
            forceUnstakeOldContract: ea,
          } = O(),
          er = !!a,
          { 0: et, 1: ei } = (0, r.useState)(0),
          { 0: el, 1: en } = (0, r.useState)(""),
          { 0: ec, 1: ed } = (0, r.useState)(""),
          { 0: eo, 1: eu } = (0, r.useState)(),
          { 0: eh, 1: em } = (0, r.useState)(),
          { 0: ex } = (0, r.useState)("ICE"),
          { 0: ej, 1: ev } = (0, r.useState)(""),
          { 0: ep, 1: ef } = (0, r.useState)(),
          { 0: eg, 1: eb } = (0, r.useState)(),
          { 0: eN, 1: ew } = (0, r.useState)(0),
          { 0: ey, 1: eC } = (0, r.useState)(0),
          { 0: eE, 1: eT } = (0, r.useState)(!1),
          { 0: eS, 1: ek } = (0, r.useState)(!1),
          { 0: eR, 1: e_ } = (0, r.useState)(!1),
          { 0: eI, 1: eA } = (0, r.useState)(!1),
          { 0: eO, 1: ez } = (0, r.useState)(0),
          eP = (0, r.useCallback)(async () => {
            if (l && a) {
              if (I) {
                eu(void 0), em(void 0), ef(void 0), eb(void 0);
                let e = new z.zt(l, u),
                  s = ![t.ChainId.TELOS_TESTNET, t.ChainId.TELOS].includes(u),
                  r = s ? F : P,
                  i = new z.CH(I.address, r);
                if ([t.ChainId.MANTLE].includes(u)) {
                  let s = new z.CH(A.address, r),
                    [t] = await e
                      .all([s.userInfo(a)])
                      .catch((e) => (console.error(e), [void 0]));
                  ez(W(t.amount));
                }
                let [n, c, d, o] = await e
                  .all([
                    i.pendingRewards(a),
                    i.userInfo(a),
                    i.totalShares(),
                    s ? i.rewardsPerSecond() : i.rewardsPerBlock(),
                  ])
                  .catch(
                    (e) => (
                      console.error(
                        "Ice Cream Van: Error getting user info",
                        e
                      ),
                      [void 0, void 0, void 0, void 0]
                    )
                  );
                em(W(n)), ef(W(d)), eu(W(c.amount)), eb(o);
              } else ez(0), eu(0), em(0), ef(0), eb("0");
            }
          }, [l, a, I, u, A?.address]);
        (0, r.useEffect)(() => {
          a && I && eP();
        }, [u, a, I, eP]),
          (0, r.useEffect)(() => {
            ez(0),
              u == t.ChainId.TELOS
                ? ev("WTLOS")
                : u == t.ChainId.MANTLE || u == t.ChainId.MANTLE_TESTNET
                ? ev("WMNT")
                : u == t.ChainId.TAIKO || u == t.ChainId.TAIKO_TESTNET
                ? ev("TAIKO")
                : ev("REWARDS");
          }, [u, a]);
        let eF = () =>
            eI
              ? (0, m.e)(String(eO), H?.currency)
              : 0 === et
              ? (0, m.e)(el, H?.currency)
              : (0, m.e)(ec, H?.currency),
          eD = i.ICECREAMVAN_V2_ADDRESS[u],
          [eL, eM] = (0, x.qL)(eF(), eD),
          eU = (e) => {
            M(e) && en(e);
          },
          eV = (e) => {
            M(e) && ed(e);
          },
          eW = 0 === et ? H || 0 : eo || 0,
          eG =
            (eW && 0 == Number(eW)) ||
            (eF() && Number(eF().toFixed(18)) > Number(eW.toFixed(18))),
          eK = !el || eE || eG || (eF() && eF().equalTo(t.ZERO)),
          eB = !ec || eS || eG || (eF() && eF().equalTo(t.ZERO)),
          e$ = eS || eG;
        (0, r.useEffect)(() => {
          ew(J[0] ? J[0] : 0), eC(J[1] ? J[1] : 0);
        }, [u, a, J]);
        let eq = async () => {
            if ((eT(!0), eL !== x.UK.APPROVED)) await eM();
            else {
              if (!(await R(() => Y(eF()), !0))) {
                eT(!1);
                return;
              }
              eU(""), eP();
            }
            eT(!1);
          },
          eZ = async () => {
            if ((ek(!0), !(await R(() => Q(eF()), !0)))) {
              ek(!1);
              return;
            }
            eV(""), ek(!1), eP();
          },
          eH = async function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if ((ek(!0), e)) {
              let e = await R(() => ea(), !0);
              if ((ek(!1), !e)) return;
              eA(!0), en(String(eO));
              return;
            }
            if (!(await R(() => es(), !0))) {
              ek(!1);
              return;
            }
            eV(""), ek(!1), eP();
          },
          eX = async () => {
            if ((e_(!0), !(await R(() => ee(), !0)))) {
              e_(!1);
              return;
            }
            e_(!1), eP();
          },
          eJ = eg ?? 0,
          eY = [t.ChainId.MANTLE_TESTNET, t.ChainId.MANTLE].includes(u),
          {
            annualRewardsUSD: eQ,
            totalStakeUSD: e0,
            tvlByDay: e1,
          } = (0, r.useMemo)(() => {
            let e = new Date();
            e.setMonth(e.getMonth() - 3);
            let s = eY ? 1 : 2,
              a = W(eJ) * s * 31557600 * ey,
              r = eN * ep,
              t = K?.map((e) => {
                let { date: s, feesUSD: a } = e;
                return {
                  time: new Date(1e3 * s).toISOString().substring(0, 10),
                  value: ((0.1 * parseFloat(a) * 365.25) / r) * 100,
                };
              })
                .filter((s) => {
                  let { time: a } = s;
                  return (
                    new Date(a) >= e && new Date(a) < new Date(1e3 * K[0].date)
                  );
                })
                .sort((e, s) => e.time.localeCompare(s.time));
            return { annualRewardsUSD: a, totalStakeUSD: r, tvlByDay: t };
          }, [eY, eJ, ey, eN, ep, K]),
          { todaysBoostedAPR: e2, averageAPR: e5 } = (0, r.useMemo)(() => {
            let e =
                e1?.length > 0
                  ? e1?.length >= 3
                    ? e1?.slice(-4)
                    : e1.slice(e1.length)
                  : 0,
              s = e
                ? e?.reduce((e, s) => (s.value >= 0 ? e + s.value : 0), 0)
                : 0,
              a = e?.length > 0 ? s / e.length : 0,
              r = (eQ / e0) * 100;
            return {
              todaysBoostedAPR: e1?.length > 0 ? (eQ / e0) * 100 - a : 0,
              averageAPR: r,
            };
          }, [e1, eQ, e0]);
        return (
          (0, r.useEffect)(
            () => (
              e((0, b.l)(0)),
              document.body.classList.add("zombie-van-bg"),
              () => {
                document.body.classList.remove("zombie-van-bg");
              }
            ),
            [e]
          ),
          (0, L.jsxs)(L.Fragment, {
            children: [
              (0, L.jsx)(n(), {
                children: (0, L.jsx)("title", { children: "Swapsicle" }),
              }),
              (0, L.jsx)(y.PB, { title: "Swapsicle" }),
              (0, L.jsx)("div", {
                className: "bgWrap",
                children: (0, L.jsx)(o(), {
                  src: "/images/ICVsnow1.jpg",
                  alt: "",
                  layout: "fill",
                  objectFit: "cover",
                  quality: 100,
                  className: "z-0",
                }),
              }),
              (0, L.jsx)("div", {
                className: "bgWrapMobile",
                children: (0, L.jsx)(o(), {
                  src: "/images/ICVsnow1.jpg",
                  alt: "",
                  layout: "fill",
                  objectFit: "cover",
                  quality: 100,
                  className: "z-0",
                }),
              }),
              (0, L.jsx)(c.Z, {
                id: "",
                className:
                  "z-10 pt-4 space-t-6 md:pt-8 lg:pt-12 cstm_cntnr freezer",
                maxWidth: "2xl",
                children: (0, L.jsxs)("div", {
                  className: "max-1280",
                  children: [
                    (0, L.jsx)("h1", {
                      className: "mb-0",
                      children: "Ice Cream Van",
                    }),
                    (0, L.jsxs)("h4", {
                      className: "mt-0",
                      children: [
                        "Stake ICE and collect regular payouts in",
                        " ",
                        void 0 != ej ? ej + " " : "the chains native token ",
                        " generated from transaction fees.",
                      ],
                    }),
                    (0, L.jsx)("hr", {
                      className: "h-[1px] my-5 border-0",
                      style: { backgroundColor: "rgba(255, 255, 255, 0.15)" },
                    }),
                    (0, L.jsxs)("div", {
                      className:
                        "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4",
                      children: [
                        (0, L.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 zombievan-card",
                          children: (0, L.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, L.jsxs)("div", {
                                children: [
                                  (0, L.jsx)("h4", {
                                    className: "mb-1",
                                    children: "Stake",
                                  }),
                                  void 0 != eo && void 0 != ex
                                    ? (0, L.jsxs)(L.Fragment, {
                                        children: [
                                          (0, L.jsx)("h3", {
                                            children: Number(
                                              eo.toFixed(2)
                                            ).toLocaleString(),
                                          }),
                                          (0, L.jsx)("h5", { children: ex }),
                                        ],
                                      })
                                    : (0, L.jsx)(L.Fragment, {
                                        children: (0, L.jsx)(T.a, {
                                          size: "xs",
                                          color: "white",
                                          className: "mt-2 ml-1",
                                        }),
                                      }),
                                ],
                              }),
                              (0, L.jsx)("div", {
                                children: (0, L.jsx)(o(), {
                                  src: "/images/ice.svg",
                                  alt: " ",
                                  width: 50,
                                  height: 50,
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, L.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 zombievan-card",
                          children: (0, L.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, L.jsxs)("div", {
                                children: [
                                  (0, L.jsx)("h4", {
                                    className: "mb-1",
                                    children: "Unstaked",
                                  }),
                                  void 0 != H
                                    ? (0, L.jsxs)(L.Fragment, {
                                        children: [
                                          (0, L.jsx)("h3", {
                                            children: Number(
                                              H.toFixed(2)
                                            ).toLocaleString(),
                                          }),
                                          (0, L.jsx)("h5", { children: ex }),
                                        ],
                                      })
                                    : (0, L.jsx)(L.Fragment, {
                                        children: (0, L.jsx)(T.a, {
                                          size: "xs",
                                          color: "white",
                                          className: "mt-2 ml-1",
                                        }),
                                      }),
                                ],
                              }),
                              (0, L.jsx)("div", {
                                children: (0, L.jsx)(o(), {
                                  src: "/images/ice.svg",
                                  alt: " ",
                                  width: 50,
                                  height: 50,
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, L.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 zombievan-card",
                          children: (0, L.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, L.jsxs)("div", {
                                children: [
                                  (0, L.jsx)("h4", { children: "APR" }),
                                  e1 && e5 && e5 >= 0
                                    ? (0, L.jsxs)("div", {
                                        children: [
                                          (0, L.jsx)("h3", {
                                            className: "p-0 m-0",
                                            children:
                                              Number(
                                                e5.toFixed()
                                              ).toLocaleString() + "%",
                                          }),
                                          e2 > 0
                                            ? (0, L.jsx)("h5", {
                                                children:
                                                  "Boosted By " +
                                                  Number(
                                                    e2.toFixed()
                                                  ).toLocaleString() +
                                                  "%",
                                              })
                                            : (0, L.jsx)("h5", {}),
                                        ],
                                      })
                                    : (0, L.jsx)(L.Fragment, {
                                        children: (0, L.jsx)(T.a, {
                                          size: "xs",
                                          color: "white",
                                          className: "mt-2 ml-1",
                                        }),
                                      }),
                                ],
                              }),
                              (0, L.jsx)("div", {
                                children: (0, L.jsx)(C.G, {
                                  size: "2x",
                                  icon: E.LjC,
                                  style: { color: "rgb(255,255,255,100)" },
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, L.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 zombievan-card",
                          children: (0, L.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, L.jsxs)("div", {
                                children: [
                                  (0, L.jsx)("h4", {
                                    children: "Deallocation Fee",
                                  }),
                                  (0, L.jsx)("h3", { children: "0%" }),
                                ],
                              }),
                              (0, L.jsx)("div", {
                                children: (0, L.jsx)(C.G, {
                                  size: "2x",
                                  icon: E.mXR,
                                  style: { color: "rgb(255,255,255,100)" },
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, L.jsxs)("div", {
                      className:
                        "grid items-start grid-cols-1 gap-3 pt-5 sm:grid-cols-2 xl:grid-cols-5",
                      children: [
                        (0, L.jsx)("div", {
                          className:
                            "order-1 sm:row-span-2 xl:row-span-1 xl:order-1 xl:col-span-2",
                          children: (0, L.jsxs)("div", {
                            className: "px-4 py-5 zombievan-card",
                            children: [
                              (0, L.jsxs)(g.Z, {
                                size: "sm",
                                value: 0 == s ? 1 : s,
                                onChange: (s) => e((0, b.l)(s)),
                                variant: "filled",
                                className: "btn_chang_pop_freezer",
                                children: [
                                  (0, L.jsx)(g.Z.Button, {
                                    value: N.n.Staking,
                                    children: (0, L.jsx)("span", {
                                      className: "creamWrap",
                                      onClick: () => {
                                        ei(0), eU("");
                                      },
                                      children: (0, L.jsx)("h4", {
                                        children: "Stake",
                                      }),
                                    }),
                                  }),
                                  (0, L.jsx)(g.Z.Button, {
                                    value: N.n.Position,
                                    children: (0, L.jsx)("span", {
                                      className: "creamWrap",
                                      onClick: () => {
                                        ei(1), eV("");
                                      },
                                      children: (0, L.jsx)("h4", {
                                        children: "Unstake",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, L.jsx)("div", {
                                className: (0, h.AK)(
                                  G,
                                  s === N.n.Staking || 0 === s
                                    ? "block"
                                    : "hidden"
                                ),
                                children: (0, L.jsxs)("div", {
                                  children: [
                                    (0, L.jsx)("div", {
                                      className: "teb_inrr_data",
                                      children: (0, L.jsxs)("div", {
                                        className: "flex mb-4",
                                        children: [
                                          (0, L.jsx)("div", {
                                            className: "mr-3",
                                            children: (0, L.jsx)(C.G, {
                                              size: "2x",
                                              icon: E.FKd,
                                              style: {
                                                color: "rgb(255,255,255,100)",
                                              },
                                            }),
                                          }),
                                          void 0 != ex
                                            ? (0, L.jsxs)("h3", {
                                                children: ["Stake ", ex],
                                              })
                                            : (0, L.jsx)("h3", {
                                                children: "Stake ICE",
                                              }),
                                        ],
                                      }),
                                    }),
                                    (0, L.jsx)("div", {
                                      className:
                                        "icecard_statsbox bg-dark-1000",
                                      children: (0, L.jsxs)("div", {
                                        className: "input_bx_spbt",
                                        children: [
                                          (0, L.jsxs)("div", {
                                            children: [
                                              (0, L.jsxs)("div", {
                                                className: "mt-2 flex_po_bc",
                                                children: [
                                                  (0, L.jsx)(o(), {
                                                    src: "/images/ice.svg",
                                                    alt: " ",
                                                    width: 30,
                                                    height: 30,
                                                  }),
                                                  void 0 != ex
                                                    ? (0, L.jsx)("h3", {
                                                        children: ex,
                                                      })
                                                    : (0, L.jsx)("h3", {
                                                        children: "ICE",
                                                      }),
                                                ],
                                              }),
                                              (0, L.jsx)("div", {
                                                className: "mt-2 form_ble_spbt",
                                                children:
                                                  void 0 != H
                                                    ? (0, L.jsxs)("p", {
                                                        children: [
                                                          "Balance: ",
                                                          Number(
                                                            H.toFixed(2)
                                                          ).toLocaleString(),
                                                        ],
                                                      })
                                                    : (0, L.jsxs)(L.Fragment, {
                                                        children: [
                                                          (0, L.jsx)("p", {
                                                            children:
                                                              "Balance:",
                                                          }),
                                                          (0, L.jsx)(T.a, {
                                                            size: "xs",
                                                            color: "white",
                                                            className: "ml-1",
                                                          }),
                                                        ],
                                                      }),
                                              }),
                                            ],
                                          }),
                                          (0, L.jsxs)("div", {
                                            className:
                                              "border inp_bx_bg border-white/10",
                                            children: [
                                              (0, L.jsx)("input", {
                                                type: "text",
                                                placeholder: "0.00",
                                                value: el,
                                                onChange: (e) =>
                                                  eU(e.target.value),
                                              }),
                                              (0, L.jsx)("button", {
                                                onClick: () => {
                                                  en(
                                                    H
                                                      ? U(
                                                          H.toFixed(
                                                            H.currency.decimals,
                                                            void 0,
                                                            t.Rounding
                                                              .ROUND_DOWN
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
                                    I
                                      ? (0, L.jsx)("button", {
                                          className: eK ? $ : B,
                                          onClick: er ? eq : () => d(),
                                          disabled: !!er && eK,
                                          children: er
                                            ? el
                                              ? eL === x.UK.NOT_APPROVED ||
                                                eL === x.UK.PENDING
                                                ? "Approve"
                                                : "Stake"
                                              : "Enter Amount"
                                            : "Connect Wallet",
                                        })
                                      : (0, L.jsxs)("button", {
                                          className: q,
                                          disabled: !0,
                                          children: [
                                            " ",
                                            "Unsupported Network",
                                          ],
                                        }),
                                  ],
                                }),
                              }),
                              (0, L.jsx)("div", {
                                className: (0, h.AK)(
                                  G,
                                  s === N.n.Position ? "block" : "hidden"
                                ),
                                children: (0, L.jsxs)("div", {
                                  children: [
                                    (0, L.jsx)("div", {
                                      className: "teb_inrr_data",
                                      children: (0, L.jsxs)("div", {
                                        className: "flex mb-4",
                                        children: [
                                          (0, L.jsx)("div", {
                                            className: "mr-3",
                                            children: (0, L.jsx)(C.G, {
                                              size: "2x",
                                              icon: E.k9h,
                                              style: {
                                                color: "rgb(255,255,255,100)",
                                              },
                                            }),
                                          }),
                                          void 0 != ex
                                            ? (0, L.jsxs)("h3", {
                                                children: ["Stake ", ex],
                                              })
                                            : (0, L.jsx)("h3", {
                                                children: "Stake ICE",
                                              }),
                                        ],
                                      }),
                                    }),
                                    (0, L.jsx)("div", {
                                      className:
                                        "icecard_statsbox bg-dark-1000",
                                      children: (0, L.jsxs)("div", {
                                        className: "input_bx_spbt",
                                        children: [
                                          (0, L.jsxs)("div", {
                                            children: [
                                              (0, L.jsxs)("div", {
                                                className: "mt-2 flex_po_bc",
                                                children: [
                                                  (0, L.jsx)(o(), {
                                                    src: "/images/ice.svg",
                                                    alt: " ",
                                                    width: 30,
                                                    height: 30,
                                                  }),
                                                  void 0 != ex
                                                    ? (0, L.jsx)("h3", {
                                                        children: ex,
                                                      })
                                                    : (0, L.jsx)("h3", {
                                                        children: "ICE",
                                                      }),
                                                ],
                                              }),
                                              (0, L.jsx)("div", {
                                                className: "mt-2 form_ble_spbt",
                                                children:
                                                  void 0 != eo
                                                    ? (0, L.jsxs)("p", {
                                                        children: [
                                                          "Balance: ",
                                                          Number(
                                                            eo.toFixed(2)
                                                          ).toLocaleString(),
                                                        ],
                                                      })
                                                    : (0, L.jsxs)(L.Fragment, {
                                                        children: [
                                                          (0, L.jsx)("p", {
                                                            children:
                                                              "Balance:",
                                                          }),
                                                          (0, L.jsx)(T.a, {
                                                            size: "xs",
                                                            color: "white",
                                                            className: "ml-1",
                                                          }),
                                                        ],
                                                      }),
                                              }),
                                            ],
                                          }),
                                          (0, L.jsxs)("div", {
                                            className:
                                              "border inp_bx_bg border-white/10 ",
                                            children: [
                                              (0, L.jsx)("input", {
                                                type: "text",
                                                placeholder: "0.00",
                                                value: ec,
                                                onChange: (e) =>
                                                  eV(e.target.value),
                                              }),
                                              (0, L.jsx)("button", {
                                                onClick: () => {
                                                  ed(eo ? eo.toString() : "");
                                                },
                                                children: "Max",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, L.jsx)("button", {
                                      className: eB ? $ : B,
                                      onClick: er ? eZ : () => d(),
                                      disabled: !!er && eB,
                                      children: er
                                        ? ec
                                          ? "Unstake"
                                          : "Enter Amount"
                                        : "Connect Wallet",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, L.jsx)("div", {
                          className:
                            "order-4 row-span-3 sm:col-span-2 xl:col-span-3 xl:order-2",
                          children: (0, L.jsxs)("div", {
                            className: "zombievan-card",
                            children: [
                              (0, L.jsxs)("div", {
                                className: "flex pt-6 pl-6",
                                children: [
                                  (0, L.jsx)("div", {
                                    className: "mr-3",
                                    children: (0, L.jsx)(C.G, {
                                      size: "2x",
                                      icon: E.Stf,
                                      style: { color: "rgb(255,255,255,100)" },
                                    }),
                                  }),
                                  (0, L.jsx)("h3", {
                                    children: "Ice Cream Van Statistics",
                                  }),
                                ],
                              }),
                              e1
                                ? (0, L.jsxs)("div", {
                                    children: [
                                      (0, L.jsx)("div", {
                                        className: "m-4",
                                        children: (0, L.jsx)("h5", {
                                          className: "my-4",
                                          children:
                                            "Historic data showing daily APR from staking in the Ice Cream Van",
                                        }),
                                      }),
                                      (0, L.jsx)("div", {
                                        className: "mx-2 mt-4",
                                        children: (0, L.jsx)("div", {
                                          className:
                                            "icecard_statsbox bg-dark-1000",
                                          children: (0, L.jsx)("div", {
                                            className: "ml-2",
                                            children: (0, L.jsxs)("div", {
                                              children: [
                                                (0, L.jsx)("h4", {
                                                  children: "Fee APR by Day",
                                                }),
                                                (0, L.jsx)(S.x, {
                                                  dataOne: e1,
                                                  colors: Z,
                                                  decimals: 2,
                                                  formatter: 1,
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                      (0, L.jsx)("h5", {
                                        className: "m-6",
                                        children:
                                          "APR from fees collected from swaps shown above. The actual APR may fluctuate if additional rewards are distributed",
                                      }),
                                    ],
                                  })
                                : (0, L.jsx)("div", {
                                    className: "flex justify-center",
                                    children: (0, L.jsx)(T.a, {
                                      size: "sm",
                                      color: "white",
                                      className: "m-6",
                                    }),
                                  }),
                            ],
                          }),
                        }),
                        (0, L.jsx)("div", {
                          className: "order-2 xl:col-span-2 xl:order-3",
                          children: (0, L.jsxs)("div", {
                            className: "px-4 py-5 zombievan-card",
                            children: [
                              (0, L.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  (0, L.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                      (0, L.jsx)("div", {
                                        className: "mr-3",
                                        children: (0, L.jsx)(C.G, {
                                          size: "2x",
                                          icon: E.uVn,
                                          style: {
                                            color: "rgb(255,255,255,100)",
                                          },
                                        }),
                                      }),
                                      (0, L.jsx)("h3", {
                                        children: "Claim Rewards",
                                      }),
                                    ],
                                  }),
                                  eR || void 0 == eh
                                    ? (0, L.jsx)(T.a, {
                                        color: "white",
                                        size: "sm",
                                      })
                                    : (0, L.jsx)(L.Fragment, {}),
                                ],
                              }),
                              (0, L.jsxs)("div", {
                                children: [
                                  (0, L.jsx)("div", {
                                    className: "",
                                    children: (0, L.jsx)("div", {
                                      className:
                                        "mt-4 icecard_statsbox bg-dark-1000",
                                      children: (0, L.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between w-full",
                                        children: [
                                          (0, L.jsx)("div", {
                                            children:
                                              void 0 == eh
                                                ? (0, L.jsxs)("div", {
                                                    children: [
                                                      (0, L.jsx)("h3", {
                                                        children: "0",
                                                      }),
                                                      (0, L.jsx)("h5", {
                                                        children: ej,
                                                      }),
                                                    ],
                                                  })
                                                : (0, L.jsxs)("div", {
                                                    children: [
                                                      (0, L.jsx)("h3", {
                                                        children: Number(
                                                          eh.toFixed(6)
                                                        ),
                                                      }),
                                                      (0, L.jsx)("h5", {
                                                        children: ej,
                                                      }),
                                                    ],
                                                  }),
                                          }),
                                          (0, L.jsxs)("div", {
                                            children: [
                                              u == t.ChainId.TELOS ||
                                                (u == t.ChainId.TELOS_TESTNET &&
                                                  (0, L.jsx)(o(), {
                                                    src: "/img/telos.png",
                                                    alt: " ",
                                                    width: 50,
                                                    height: 50,
                                                  })),
                                              u == t.ChainId.MANTLE ||
                                                (u ==
                                                  t.ChainId.MANTLE_TESTNET &&
                                                  (0, L.jsx)(o(), {
                                                    src: "/img/mantle.svg",
                                                    alt: " ",
                                                    width: 42,
                                                    height: 42,
                                                  })),
                                              u == t.ChainId.TAIKO ||
                                                (u == t.ChainId.TAIKO_TESTNET &&
                                                  (0, L.jsx)(o(), {
                                                    src: "/img/taiko.svg",
                                                    alt: " ",
                                                    width: 42,
                                                    height: 42,
                                                  })),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, L.jsx)("div", {
                                    children: I
                                      ? (0, L.jsx)("button", {
                                          className: eR ? $ : B,
                                          onClick: er ? eX : () => d(),
                                          disabled: !!er && eR,
                                          children: er
                                            ? "Claim"
                                            : "Connect Wallet",
                                        })
                                      : (0, L.jsxs)("button", {
                                          className: q,
                                          disabled: !0,
                                          children: [
                                            " ",
                                            "Unsupported Network",
                                          ],
                                        }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        eO > 0 &&
                          (0, L.jsx)("div", {
                            className: "order-2 xl:col-span-2 xl:order-3",
                            children: (0, L.jsxs)("div", {
                              className: "px-4 py-5 zombievan-card",
                              children: [
                                (0, L.jsxs)("div", {
                                  className: "flex justify-between",
                                  children: [
                                    (0, L.jsxs)("div", {
                                      className: "flex",
                                      children: [
                                        (0, L.jsx)("div", {
                                          className: "mr-3",
                                          children: (0, L.jsx)(C.G, {
                                            size: "2x",
                                            icon: E.A$k,
                                            style: {
                                              color: "rgb(255,255,255,100)",
                                            },
                                          }),
                                        }),
                                        (0, L.jsx)("h3", {
                                          children: "Migrate",
                                        }),
                                      ],
                                    }),
                                    eS || eE
                                      ? (0, L.jsx)(T.a, {
                                          color: "white",
                                          size: "sm",
                                        })
                                      : (0, L.jsx)(L.Fragment, {}),
                                  ],
                                }),
                                (0, L.jsxs)("div", {
                                  children: [
                                    (0, L.jsx)("div", {
                                      className: "",
                                      children: (0, L.jsx)("div", {
                                        className:
                                          "mt-4 icecard_statsbox bg-dark-1000",
                                        children: (0, L.jsxs)("div", {
                                          className:
                                            "flex items-center justify-between w-full",
                                          children: [
                                            (0, L.jsx)("div", {
                                              children:
                                                void 0 == eh
                                                  ? (0, L.jsxs)("div", {
                                                      children: [
                                                        (0, L.jsx)("h3", {
                                                          children: "0",
                                                        }),
                                                        (0, L.jsx)("h5", {
                                                          children: ex,
                                                        }),
                                                      ],
                                                    })
                                                  : (0, L.jsxs)("div", {
                                                      children: [
                                                        (0, L.jsx)("h3", {
                                                          children: Number(
                                                            eO.toFixed(6)
                                                          ),
                                                        }),
                                                        (0, L.jsx)("h5", {
                                                          children: ex,
                                                        }),
                                                      ],
                                                    }),
                                            }),
                                            (0, L.jsx)("div", {
                                              children: (0, L.jsx)(o(), {
                                                src: "/images/ice.svg",
                                                alt: " ",
                                                width: 42,
                                                height: 42,
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, L.jsx)("h5", {
                                      className: "my-4",
                                      children:
                                        "Migrate your tokens to the new Ice Cream Van to continue to earn rewards. Unclaimed Rewards will be lost.",
                                    }),
                                    (0, L.jsx)("div", {
                                      children: I
                                        ? eI
                                          ? (0, L.jsxs)("div", {
                                              className: "flex w-full gap-x-4",
                                              children: [
                                                (0, L.jsx)("button", {
                                                  className: `${e$ ? $ : B} ${
                                                    eL === x.UK.NOT_APPROVED ||
                                                    eL === x.UK.PENDING ||
                                                    eL === x.UK.UNKNOWN
                                                      ? "w-1/2"
                                                      : "hidden"
                                                  }`,
                                                  onClick: () => {
                                                    er ? eq() : d();
                                                  },
                                                  disabled: !!er && eK,
                                                  children: er
                                                    ? "Approve"
                                                    : "Connect Wallet",
                                                }),
                                                (0, L.jsx)("button", {
                                                  className: `${e$ ? $ : B} ${
                                                    eL === x.UK.NOT_APPROVED ||
                                                    eL === x.UK.PENDING ||
                                                    eL === x.UK.UNKNOWN
                                                      ? "w-1/2"
                                                      : "w-full"
                                                  }`,
                                                  onClick: () => {
                                                    er ? eq() : d();
                                                  },
                                                  disabled: !!er && e$,
                                                  children: er
                                                    ? "Deposit"
                                                    : "Connect Wallet",
                                                }),
                                              ],
                                            })
                                          : (0, L.jsx)("button", {
                                              className: e$ ? $ : B,
                                              onClick: () => {
                                                er ? eH(!0) : d();
                                              },
                                              disabled: !!er && e$,
                                              children: er
                                                ? "Withdraw"
                                                : "Connect Wallet",
                                            })
                                        : (0, L.jsxs)("button", {
                                            className: q,
                                            disabled: !0,
                                            children: [
                                              " ",
                                              "Unsupported Network",
                                            ],
                                          }),
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
            ],
          })
        );
      }
      H.Guard = (0, u.Z)(R.L.ICECREAMVAN_V2);
    },
    322374: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/ice-cream-van",
        function () {
          return a(832008);
        },
      ]);
    },
    775131: function (e, s, a) {
      "use strict";
      a.d(s, {
        E: function () {
          return I;
        },
      });
      var r,
        t,
        i = a(667294),
        l = a(539516),
        n = a(561363),
        c = a(295389),
        d = a(131147),
        o = a(694192),
        u = a(173781),
        h = a(114227),
        m = a(919946),
        x = a(216723),
        j = a(403855),
        v = a(523784),
        p = a(331591),
        f = a(746045),
        g = a(364103),
        b = a(484575),
        N = a(618689),
        w = a(332984),
        y = a(15466),
        C = a(312351),
        E =
          (((r = E || {})[(r.RegisterOption = 0)] = "RegisterOption"),
          (r[(r.UnregisterOption = 1)] = "UnregisterOption"),
          r);
      let T = {
          0(e, s) {
            let a = [
              ...e.options,
              { id: s.id, element: s.element, propsRef: s.propsRef },
            ];
            return { ...e, options: (0, b.z2)(a, (e) => e.element.current) };
          },
          1(e, s) {
            let a = e.options.slice(),
              r = e.options.findIndex((e) => e.id === s.id);
            return -1 === r ? e : (a.splice(r, 1), { ...e, options: a });
          },
        },
        S = (0, i.createContext)(null);
      S.displayName = "RadioGroupDataContext";
      let k = (0, i.createContext)(null);
      function R(e, s) {
        return (0, w.E)(s.type, T, e, s);
      }
      k.displayName = "RadioGroupActionsContext";
      var _ =
        (((t = _ || {})[(t.Empty = 1)] = "Empty"),
        (t[(t.Active = 2)] = "Active"),
        t);
      let I = Object.assign(
        (0, C.yV)(function (e, s) {
          let a = (0, m.M)(),
            {
              id: r = `headlessui-radiogroup-${a}`,
              value: t,
              defaultValue: h,
              form: x,
              name: j,
              onChange: g,
              by: w = (e, s) => e === s,
              disabled: E = !1,
              ...T
            } = e,
            _ = (0, u.z)(
              "string" == typeof w
                ? (e, s) =>
                    (null == e ? void 0 : e[w]) === (null == s ? void 0 : s[w])
                : w
            ),
            [I, A] = (0, i.useReducer)(R, { options: [] }),
            O = I.options,
            [z, P] = (0, c.b)(),
            [F, D] = (0, l.f)(),
            L = (0, i.useRef)(null),
            M = (0, v.T)(L, s),
            [U, V] = (0, d.q)(t, g, h),
            W = (0, i.useMemo)(
              () => O.find((e) => !e.propsRef.current.disabled),
              [O]
            ),
            G = (0, i.useMemo)(
              () => O.some((e) => _(e.propsRef.current.value, U)),
              [O, U]
            ),
            K = (0, u.z)((e) => {
              var s;
              if (E || _(e, U)) return !1;
              let a =
                null == (s = O.find((s) => _(s.propsRef.current.value, e)))
                  ? void 0
                  : s.propsRef.current;
              return (null == a || !a.disabled) && (null == V || V(e), !0);
            });
          (0, p.B)({
            container: L.current,
            accept: (e) =>
              "radio" === e.getAttribute("role")
                ? NodeFilter.FILTER_REJECT
                : e.hasAttribute("role")
                ? NodeFilter.FILTER_SKIP
                : NodeFilter.FILTER_ACCEPT,
            walk(e) {
              e.setAttribute("role", "none");
            },
          });
          let B = (0, u.z)((e) => {
              let s = L.current;
              if (!s) return;
              let a = (0, y.r)(s),
                r = O.filter((e) => !1 === e.propsRef.current.disabled).map(
                  (e) => e.element.current
                );
              switch (e.key) {
                case n.R.Enter:
                  (0, N.g)(e.currentTarget);
                  break;
                case n.R.ArrowLeft:
                case n.R.ArrowUp:
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    (0, b.jA)(r, b.TO.Previous | b.TO.WrapAround) ===
                      b.fE.Success)
                  ) {
                    let e = O.find(
                      (e) =>
                        e.element.current ===
                        (null == a ? void 0 : a.activeElement)
                    );
                    e && K(e.propsRef.current.value);
                  }
                  break;
                case n.R.ArrowRight:
                case n.R.ArrowDown:
                  if (
                    (e.preventDefault(),
                    e.stopPropagation(),
                    (0, b.jA)(r, b.TO.Next | b.TO.WrapAround) === b.fE.Success)
                  ) {
                    let e = O.find(
                      (e) =>
                        e.element.current ===
                        (null == a ? void 0 : a.activeElement)
                    );
                    e && K(e.propsRef.current.value);
                  }
                  break;
                case n.R.Space: {
                  e.preventDefault(), e.stopPropagation();
                  let s = O.find(
                    (e) =>
                      e.element.current ===
                      (null == a ? void 0 : a.activeElement)
                  );
                  s && K(s.propsRef.current.value);
                }
              }
            }),
            $ = (0, u.z)(
              (e) => (A({ type: 0, ...e }), () => A({ type: 1, id: e.id }))
            ),
            q = (0, i.useMemo)(
              () => ({
                value: U,
                firstOption: W,
                containsCheckedOption: G,
                disabled: E,
                compare: _,
                ...I,
              }),
              [U, W, G, E, _, I]
            ),
            Z = (0, i.useMemo)(
              () => ({ registerOption: $, change: K }),
              [$, K]
            ),
            H = (0, i.useMemo)(() => ({ value: U }), [U]),
            X = (0, i.useRef)(null),
            J = (0, o.G)();
          return (
            (0, i.useEffect)(() => {
              X.current &&
                void 0 !== h &&
                J.addEventListener(X.current, "reset", () => {
                  K(h);
                });
            }, [X, K]),
            i.createElement(
              D,
              { name: "RadioGroup.Description" },
              i.createElement(
                P,
                { name: "RadioGroup.Label" },
                i.createElement(
                  k.Provider,
                  { value: Z },
                  i.createElement(
                    S.Provider,
                    { value: q },
                    null != j &&
                      null != U &&
                      (0, N.t)({ [j]: U }).map(([e, s], a) =>
                        i.createElement(f._, {
                          features: f.A.Hidden,
                          ref:
                            0 === a
                              ? (e) => {
                                  var s;
                                  X.current =
                                    null !=
                                    (s = null == e ? void 0 : e.closest("form"))
                                      ? s
                                      : null;
                                }
                              : void 0,
                          ...(0, C.oA)({
                            key: e,
                            as: "input",
                            type: "radio",
                            checked: null != s,
                            hidden: !0,
                            readOnly: !0,
                            form: x,
                            name: e,
                            value: s,
                          }),
                        })
                      ),
                    (0, C.sY)({
                      ourProps: {
                        ref: M,
                        id: r,
                        role: "radiogroup",
                        "aria-labelledby": z,
                        "aria-describedby": F,
                        onKeyDown: B,
                      },
                      theirProps: T,
                      slot: H,
                      defaultTag: "div",
                      name: "RadioGroup",
                    })
                  )
                )
              )
            )
          );
        }),
        {
          Option: (0, C.yV)(function (e, s) {
            var a;
            let r = (0, m.M)(),
              {
                id: t = `headlessui-radiogroup-option-${r}`,
                value: n,
                disabled: d = !1,
                ...o
              } = e,
              p = (0, i.useRef)(null),
              f = (0, v.T)(p, s),
              [b, N] = (0, c.b)(),
              [w, y] = (0, l.f)(),
              { addFlag: E, removeFlag: T, hasFlag: R } = (0, h.V)(1),
              _ = (0, j.E)({ value: n, disabled: d }),
              I = (function e(s) {
                let a = (0, i.useContext)(S);
                if (null === a) {
                  let a = Error(
                    `<${s} /> is missing a parent <RadioGroup /> component.`
                  );
                  throw (
                    (Error.captureStackTrace && Error.captureStackTrace(a, e),
                    a)
                  );
                }
                return a;
              })("RadioGroup.Option"),
              A = (function e(s) {
                let a = (0, i.useContext)(k);
                if (null === a) {
                  let a = Error(
                    `<${s} /> is missing a parent <RadioGroup /> component.`
                  );
                  throw (
                    (Error.captureStackTrace && Error.captureStackTrace(a, e),
                    a)
                  );
                }
                return a;
              })("RadioGroup.Option");
            (0,
            x.e)(() => A.registerOption({ id: t, element: p, propsRef: _ }), [t, A, p, _]);
            let O = (0, u.z)((e) => {
                var s;
                if ((0, g.P)(e.currentTarget)) return e.preventDefault();
                A.change(n) && (E(2), null == (s = p.current) || s.focus());
              }),
              z = (0, u.z)((e) => {
                if ((0, g.P)(e.currentTarget)) return e.preventDefault();
                E(2);
              }),
              P = (0, u.z)(() => T(2)),
              F = (null == (a = I.firstOption) ? void 0 : a.id) === t,
              D = I.disabled || d,
              L = I.compare(I.value, n),
              M = {
                ref: f,
                id: t,
                role: "radio",
                "aria-checked": L ? "true" : "false",
                "aria-labelledby": b,
                "aria-describedby": w,
                "aria-disabled": !!D || void 0,
                tabIndex: D
                  ? -1
                  : L || (!I.containsCheckedOption && F)
                  ? 0
                  : -1,
                onClick: D ? void 0 : O,
                onFocus: D ? void 0 : z,
                onBlur: D ? void 0 : P,
              },
              U = (0, i.useMemo)(
                () => ({ checked: L, disabled: D, active: R(2) }),
                [L, D, R]
              );
            return i.createElement(
              y,
              { name: "RadioGroup.Description" },
              i.createElement(
                N,
                { name: "RadioGroup.Label" },
                (0, C.sY)({
                  ourProps: M,
                  theirProps: o,
                  slot: U,
                  defaultTag: "div",
                  name: "RadioGroup.Option",
                })
              )
            );
          }),
          Label: c._,
          Description: l.d,
        }
      );
    },
  },
  function (e) {
    e.O(
      0,
      [
        3662, 1082, 7098, 8100, 5729, 2962, 7066, 3062, 9934, 7414, 4614, 7892,
        1163, 840, 3316, 2888, 9774, 179,
      ],
      function () {
        return e((e.s = 322374));
      }
    ),
      (_N_E = e.O());
  },
]);
