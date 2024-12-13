(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3400],
  {
    584730: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return Y;
          },
        });
      var i = a(667294),
        r = a(341276),
        l = a(353487),
        t = a(101097),
        c = a(809008),
        n = a.n(c),
        d = a(555814),
        o = a(425675),
        h = a.n(o),
        x = a(538578),
        m = a(816364),
        u = a(178462),
        j = a(519673),
        g = a(884081),
        v = a(939507),
        b = a(828465),
        N = a(86083),
        f = a(330214),
        p = () => {
          let e = (0, b.h7)(),
            s = (0, N.TD)(),
            { getGasPrice: a } = (0, f.Z)(),
            r = a(),
            l = (0, i.useCallback)(
              async (a) => {
                if (a?.quotient)
                  try {
                    let i = await s?.stake(a?.quotient.toString(), {
                      gasPrice: r,
                    });
                    return e(i, { summary: "Enter Zombie Van" }), i;
                  } catch (e) {
                    return e;
                  }
              },
              [e, s, r]
            ),
            t = (0, i.useCallback)(
              async (a) => {
                if (a?.quotient)
                  try {
                    let i = await s?.unstake(a?.quotient.toString(), {
                      gasPrice: r,
                    });
                    return e(i, { summary: "Leave Zombie Van" }), i;
                  } catch (e) {
                    return e;
                  }
              },
              [e, s, r]
            );
          return {
            stake: l,
            unstake: t,
            claim: (0, i.useCallback)(async () => {
              try {
                let a = await s?.claim({ gasPrice: r });
                return e(a, { summary: "Zombie Van Claim" }), a;
              } catch (e) {
                return e;
              }
            }, [e, s, r]),
            distribute: (0, i.useCallback)(async () => {
              try {
                let a = await s?.updateUserRewards({ gasPrice: r });
                return e(a, { summary: "Zombie Van Distribute" }), a;
              } catch (e) {
                return e;
              }
            }, [e, s, r]),
            updateShares: (0, i.useCallback)(async () => {
              try {
                let a = await s?.updateTotalShares({ gasPrice: r });
                return e(a, { summary: "Zombie Van Update Shares" }), a;
              } catch (e) {
                return e;
              }
            }, [e, s, r]),
          };
        },
        w = a(335245),
        y = a(316004),
        S = a(317591),
        C = a(548470),
        k = a(902962),
        E = a(799603),
        _ = a(259417),
        T = a(220966),
        F = a(544602),
        z = a(39801),
        A = a(778791),
        I = a(902244),
        L = a(534799),
        R = a(569383),
        O = a(600840),
        Z = a(111603),
        D = a(666997),
        B = a(741664),
        P = a.n(B),
        V = a(673014),
        M = a(785893);
      let U = (e) => !!(!e || e.match(/^(?!0\d)\d{0,18}(\.\d{0,18})?$/)),
        W = (e) =>
          e.includes(".") ? e.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, "$1") : e,
        G = "flex flex-col flex-grow gap-4",
        q =
          "flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-5 text-sm focus:outline-none focus:ring",
        $ = `${q} text-high-emphesis zombieButton`,
        K = `${q} text-white bg-dark-700 zombieButton !cursor-not-allowed`,
        H =
          "flex justify-center items-center w-full h-14 rounded font-bold md:font-medium md:text-lg mt-5 text-sm focus:outline-none focus:ring text-white bg-red border-red",
        X = {
          backgroundColor: "rgba(140, 201, 127, 0)",
          lineColorDataTwo: "white",
          lineColorDataOne: "white",
          textColor: "white",
          areaTopColor: "rgba(171, 71, 188, 0.56)",
          areaBottomColor: "rgba(171, 71, 188, 0.04)",
          areaTopColorAvax: "rgba(39,232,30,0.7)",
          areaBottomColorAvax: "rgba(39,232,30,0.04)",
        };
      function Y() {
        let e = (0, j.T)(),
          { view: s } = (0, j.C)(y.MB),
          {
            account: a,
            provider: t,
            chainId: c,
            openWeb3Modal: o,
          } = (0, v.Z)(),
          b = (0, R.i$)(),
          f = async function (e) {
            let s =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = !0;
            try {
              let i = await e();
              if (i) {
                if (4001 === i.code)
                  return (
                    b({
                      txn: {
                        hash: "na",
                        success: !1,
                        summary: "Transaction rejected by user",
                      },
                    }),
                    !1
                  );
                if (i?.code === 3e3)
                  return (
                    console.log("Transaction failed:", i),
                    b({
                      txn: {
                        hash: "na",
                        success: !1,
                        summary: "User our of gas",
                      },
                    }),
                    !1
                  );
                if (i?.code === -32603)
                  return (
                    console.log("Transaction failed:", i),
                    b({
                      txn: {
                        hash: "na",
                        success: !1,
                        summary: i?.data?.message
                          ? "Contract Error: " + i?.data?.message
                          : "Execution Reverted",
                      },
                    }),
                    !1
                  );
                if (i?.error)
                  return (
                    console.log("Transaction failed:", i),
                    b({
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
                  let e = await i.wait();
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
                    ? b({
                        txn: {
                          hash: "na",
                          success: !1,
                          summary: "Wallet: " + e?.data?.message,
                        },
                      })
                    : b({
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
          L = (0, N.TD)(),
          B = (0, O.cb)({ chainId: c }),
          q = (0, g.mM)(a ?? void 0, V.k7[c]),
          Y = (0, O.pQ)([V.LR[c]?.address.toLowerCase()], c),
          {
            stake: J,
            unstake: Q,
            claim: ee,
            distribute: es,
            updateShares: ea,
          } = p(),
          ei = !!a,
          { 0: er, 1: el } = (0, i.useState)(0),
          { 0: et, 1: ec } = (0, i.useState)(""),
          { 0: en, 1: ed } = (0, i.useState)(""),
          { sum: eo, isLoading: eh } =
            (0, g.pX)(a ?? void 0, [l.ICECREAMZOMBIES_NFT_ADDRESS[c]]) ?? 0,
          { 0: ex, 1: em } = (0, i.useState)(),
          { 0: eu, 1: ej } = (0, i.useState)(),
          { 0: eg, 1: ev } = (0, i.useState)("ICE"),
          { 0: eb, 1: eN } = (0, i.useState)(""),
          { 0: ef, 1: ep } = (0, i.useState)(),
          { 0: ew, 1: ey } = (0, i.useState)(),
          { 0: eS, 1: eC } = (0, i.useState)(),
          { 0: ek, 1: eE } = (0, i.useState)(0),
          { 0: e_, 1: eT } = (0, i.useState)(0),
          { 0: eF, 1: ez } = (0, i.useState)(0),
          { 0: eA, 1: eI } = (0, i.useState)(0),
          { 0: eL, 1: eR } = (0, i.useState)(100),
          { 0: eO, 1: eZ } = (0, i.useState)(!1),
          eD = (0, i.useRef)(),
          eB = (0, i.useRef)(),
          { 0: eP, 1: eV } = (0, i.useState)(2),
          { 0: eM, 1: eU } = (0, i.useState)(500),
          { 0: eW, 1: eG } = (0, i.useState)(0),
          { 0: eq, 1: e$ } = (0, i.useState)(!1),
          { 0: eK, 1: eH } = (0, i.useState)(!1),
          { 0: eX, 1: eY } = (0, i.useState)(!1),
          { 0: eJ, 1: eQ } = (0, i.useState)(!1),
          { 0: e0, 1: e1 } = (0, i.useState)(!1),
          e5 = (0, i.useCallback)(async () => {
            if (t && a) {
              if (L) {
                em(void 0), ej(void 0), eC(void 0), ey(void 0), ep(void 0);
                let e = new Z.zt(t, c),
                  s = new Z.CH(L.address, D),
                  [i, r, l, n, d] = await e
                    .all([
                      s.userDeposits(a),
                      s.userRewards(a),
                      s.totalShares(),
                      s.totalStaked(),
                      s.getUndistributedRewards(),
                    ])
                    .catch(
                      (e) => (
                        console.error("ZombieVan: Error getting user info:", e),
                        [0, 0, 0, 0, 0]
                      )
                    );
                em(Number(C.dF(i.toString()))),
                  ej(Number(C.dF(r.toString()))),
                  eC(Number(C.dF(l.toString()))),
                  ey(Number(C.dF(n.toString()))),
                  ep(Number(C.dF(d.toString())));
              } else em(0), ej(0), eC(0), ey(0), ep(0);
            }
          }, [t, a, L, c]);
        (0, i.useEffect)(() => {
          t && L && e5();
        }, [c, a, t, L, e5]),
          (0, i.useEffect)(() => {
            c == r.ChainId.TELOS
              ? eN("WTLOS")
              : c == r.ChainId.TELOS_TESTNET
              ? eN("LAMBO")
              : c == r.ChainId.MANTLE || c == r.ChainId.MANTLE_TESTNET
              ? eN("WMNT")
              : eN("ICE");
          }, [c, a]),
          (0, i.useEffect)(() => {
            eT(Y ? Y[0] : 0), ez(Y ? Y[1] : 0);
          }, [c, a, Y]),
          (0, i.useEffect)(() => {
            void 0 != eP &&
              void 0 != eM &&
              void 0 != eS &&
              eG((eP * eM) / (eS + eP * eM));
          }, [eP, eM, eS]),
          (0, i.useEffect)(() => {
            void 0 != eo &&
              void 0 != ex &&
              void 0 != eS &&
              (eE((ex * eo) / eS), eI((2 * eL) / eS));
          }, [eo, ex, eS, eL]);
        let e2 = () =>
            0 === er ? (0, m.e)(et, q?.currency) : (0, m.e)(en, q?.currency),
          [e3, e4] = (0, u.qL)(e2(), l.ZOMBIEVAN_ADDRESS[c]),
          e6 = (e) => {
            U(e) && ec(e);
          },
          e9 = (e) => {
            U(e) && ed(e);
          },
          e7 = 0 === er ? q || 0 : ex || 0,
          e8 =
            (e7 && 0 == Number(e7)) ||
            (e2() && Number(e2().toFixed(18)) > Number(e7.toFixed(18))),
          se = !et || eq || e8 || (e2() && e2().equalTo(r.ZERO)),
          ss = !en || eK || e8 || (e2() && e2().equalTo(r.ZERO)),
          sa = eX || !eu,
          si = eJ || !ef,
          sr = async () => {
            if ((e$(!0), e3 !== u.UK.APPROVED)) await e4();
            else {
              if (!(await f(() => J(e2()), !0))) {
                e$(!1);
                return;
              }
              e6(""), e5();
            }
            e$(!1);
          },
          sl = async () => {
            if ((eH(!0), !(await f(() => Q(e2()), !0)))) {
              eH(!1);
              return;
            }
            e9(""), eH(!1), e5();
          },
          st = async () => {
            if ((eY(!0), !(await f(() => ee(), !0)))) {
              eY(!1);
              return;
            }
            eY(!1), e5();
          },
          sc = async () => {
            if ((eQ(!0), !(await f(() => es(), !0)))) {
              eQ(!1);
              return;
            }
            eQ(!1), e5();
          },
          sn = async () => {
            if ((e1(!0), !(await f(() => ea(), !0)))) {
              e1(!1);
              return;
            }
            e1(!1), e5();
          },
          sd = r.ChainId.TELOS || r.ChainId.TELOS_TESTNET ? 0.05 : 0.0666666,
          {
            tvlByDay: so,
            averageCalculatorAPR: sh,
            averageAPR: sx,
            displayApr: sm,
            displayAprNoStake: su,
          } = (0, i.useMemo)(() => {
            let e = new Date();
            e.setMonth(e.getMonth() - 3);
            let s = B?.map((e) => {
                let { date: s, feesUSD: a } = e;
                return {
                  time: new Date(1e3 * s).toISOString().substring(0, 10),
                  value: eO
                    ? 1.25 * parseFloat(a) * sd * eW * 365.25
                    : ((1.25 * parseFloat(a) * sd * eW * 365.25) / (e_ * eM)) *
                      100,
                  actualValueFees:
                    0 == ex
                      ? 0
                      : ((1.25 * parseFloat(a) * sd * ek * 365.25) /
                          (e_ * ex)) *
                        100,
                  actualValueFeesNoStake:
                    ((1.25 * parseFloat(a) * sd * eA * 365.25) / (e_ * eL)) *
                    100,
                };
              })
                .filter((s) => {
                  let { time: a } = s;
                  return new Date(a) >= e;
                })
                .sort((e, s) => e.time.localeCompare(s.time)),
              a = s?.reduce((e, s) => e + s.value, 0) / s?.length,
              i = s?.slice(0, -1).slice(-7),
              r = i?.reduce((e, s) => e + s.actualValueFees, 0) / i?.length;
            return {
              tvlByDay: s,
              averageCalculatorAPR: a,
              averageAPR: r,
              displayApr: r,
              displayAprNoStake:
                (((i?.reduce((e, s) => e + s.actualValueFeesNoStake, 0) /
                  i?.length) *
                  1.25 *
                  eA *
                  365.25) /
                  (e_ * eL)) *
                100,
            };
          }, [B, ek, e_, ex, eA, eL, eO, sd, eW, eM]);
        return (
          (0, i.useEffect)(
            () => (
              e((0, y.l)(0)),
              document.body.classList.add("zombie-van-bg"),
              () => {
                document.body.classList.remove("zombie-van-bg");
              }
            ),
            [e]
          ),
          (0, M.jsxs)(M.Fragment, {
            children: [
              (0, M.jsx)(n(), {
                children: (0, M.jsx)("title", { children: "Swapsicle" }),
              }),
              (0, M.jsx)(k.PB, { title: "Swapsicle" }),
              (0, M.jsx)("div", {
                className: "bgWrap",
                children: (0, M.jsx)(h(), {
                  src: "/images/zombie van ice1c.jpg",
                  alt: "",
                  layout: "fill",
                  objectFit: "cover",
                  quality: 100,
                  className: "z-0",
                }),
              }),
              (0, M.jsx)("div", {
                className: "bgWrapMobile",
                children: (0, M.jsx)(h(), {
                  src: "/images/zombie van ice1c.jpg",
                  alt: "",
                  layout: "fill",
                  objectFit: "cover",
                  quality: 100,
                  className: "z-0",
                }),
              }),
              (0, M.jsx)(d.Z, {
                id: "",
                className:
                  "z-10 pt-4 space-t-6 md:pt-8 lg:pt-12 cstm_cntnr freezer",
                maxWidth: "2xl",
                children: (0, M.jsxs)("div", {
                  className: "max-1280",
                  children: [
                    (0, M.jsx)("h1", {
                      className: "mb-0",
                      children: "Zombie Van",
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
                            "flex flex-col items-center justify-between px-4 py-5 zombievan-card",
                          children: (0, M.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, M.jsxs)("div", {
                                children: [
                                  (0, M.jsx)("h4", {
                                    className: "mb-1",
                                    children: "Stake",
                                  }),
                                  void 0 != ex && void 0 != eg
                                    ? (0, M.jsxs)(M.Fragment, {
                                        children: [
                                          (0, M.jsx)("h3", {
                                            children: Number(
                                              ex.toFixed(2)
                                            ).toLocaleString(),
                                          }),
                                          (0, M.jsx)("h5", { children: eg }),
                                        ],
                                      })
                                    : (0, M.jsx)(M.Fragment, {
                                        children: (0, M.jsx)(T.a, {
                                          size: "xs",
                                          color: "green",
                                          className: "mt-2 ml-1",
                                        }),
                                      }),
                                ],
                              }),
                              (0, M.jsx)("div", {
                                children: (0, M.jsx)(h(), {
                                  src: "/images/ice.svg",
                                  alt: " ",
                                  width: 50,
                                  height: 50,
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, M.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 zombievan-card",
                          children: (0, M.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, M.jsxs)("div", {
                                children: [
                                  (0, M.jsx)("h4", {
                                    className: "mb-1",
                                    children: "Boosted Stake",
                                  }),
                                  void 0 != ex && void 0 != eo && void 0 != eg
                                    ? (0, M.jsxs)(M.Fragment, {
                                        children: [
                                          (0, M.jsx)("h3", {
                                            children: Number(
                                              (ex * eo).toFixed(2)
                                            ).toLocaleString(),
                                          }),
                                          (0, M.jsx)("h5", { children: eg }),
                                        ],
                                      })
                                    : (0, M.jsx)(M.Fragment, {
                                        children: (0, M.jsx)(T.a, {
                                          size: "xs",
                                          color: "green",
                                          className: "mt-2 ml-1",
                                        }),
                                      }),
                                ],
                              }),
                              (0, M.jsx)("div", {
                                children: (0, M.jsx)(h(), {
                                  src: "/images/ice.svg",
                                  alt: " ",
                                  width: 50,
                                  height: 50,
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, M.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 zombievan-card",
                          children: (0, M.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, M.jsxs)("div", {
                                children: [
                                  (0, M.jsx)("h4", {
                                    children: 0 == ex ? "APR" : "Your APR",
                                  }),
                                  0 == ex
                                    ? (0, M.jsxs)(M.Fragment, {
                                        children: [
                                          (0, M.jsx)("div", {
                                            className: "flex",
                                            children: (0, M.jsx)("h3", {
                                              className: "p-0 m-0",
                                              children: su
                                                ? Number(
                                                    su.toFixed(2)
                                                  ).toLocaleString()
                                                : "0%*",
                                            }),
                                          }),
                                          (0, M.jsx)("h5", {
                                            children: "100 ICE + 2 NFTs",
                                          }),
                                        ],
                                      })
                                    : so && !sm
                                    ? (0, M.jsx)(M.Fragment, {
                                        children: (0, M.jsxs)("div", {
                                          className: "flex",
                                          children: [
                                            (0, M.jsx)("h3", {
                                              className: "p-0 m-0",
                                              children: "0%",
                                            }),
                                            (0, M.jsx)("h4", { children: "*" }),
                                          ],
                                        }),
                                      })
                                    : so && sm && Number(sm) >= 0
                                    ? (0, M.jsxs)(M.Fragment, {
                                        children: [
                                          (0, M.jsx)("div", {
                                            className: "flex",
                                            children: (0, M.jsx)("h3", {
                                              className: "p-0 m-0",
                                              children:
                                                Number(
                                                  sm.toFixed(2)
                                                ).toLocaleString() + "%*",
                                            }),
                                          }),
                                          (0, M.jsx)("h5", {
                                            children: "Previous 7 Days",
                                          }),
                                        ],
                                      })
                                    : (0, M.jsx)(M.Fragment, {
                                        children: (0, M.jsx)(T.a, {
                                          size: "xs",
                                          color: "green",
                                          className: "mt-2 ml-1",
                                        }),
                                      }),
                                ],
                              }),
                              (0, M.jsx)("div", {
                                children: (0, M.jsx)(E.G, {
                                  size: "2x",
                                  icon: _.LjC,
                                  style: { color: "rgb(255,255,255,100)" },
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, M.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-between px-4 py-5 zombievan-card",
                          children: (0, M.jsxs)("div", {
                            className:
                              "flex items-center justify-between w-full",
                            children: [
                              (0, M.jsxs)("div", {
                                children: [
                                  (0, M.jsx)("h4", { children: "NFT Count" }),
                                  void 0 != eo
                                    ? (0, M.jsxs)(M.Fragment, {
                                        children: [
                                          (0, M.jsx)("h3", { children: eo }),
                                          (0, M.jsx)(P(), {
                                            href: "https://mint.swapsicle.io/mint",
                                            passHref: !0,
                                            children: (0, M.jsxs)("div", {
                                              className:
                                                "flex items-center cursor-pointer",
                                              children: [
                                                (0, M.jsx)("h5", {
                                                  children: "MINT NOW",
                                                }),
                                                (0, M.jsx)(E.G, {
                                                  icon: _.wlW,
                                                  size: "xs",
                                                  className: "ml-1 text-white",
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      })
                                    : (0, M.jsx)(M.Fragment, {
                                        children: (0, M.jsx)(T.a, {
                                          size: "xs",
                                          color: "white",
                                          className: "mt-2 ml-1",
                                        }),
                                      }),
                                ],
                              }),
                              (0, M.jsx)("div", {
                                children: (0, M.jsx)(E.G, {
                                  size: "2x",
                                  icon: _.LH4,
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
                            "order-1 sm:row-span-2 xl:row-span-1 xl:order-1 xl:col-span-2",
                          children: (0, M.jsxs)("div", {
                            className: "px-4 py-5 zombievan-card",
                            children: [
                              (0, M.jsxs)(w.Z, {
                                size: "sm",
                                value: 0 == s ? 1 : s,
                                onChange: (s) => e((0, y.l)(s)),
                                variant: "filled",
                                className: "btn_chang_pop_freezer",
                                children: [
                                  (0, M.jsx)(w.Z.Button, {
                                    value: S.n.Staking,
                                    children: (0, M.jsx)("span", {
                                      className: "creamWrap",
                                      onClick: () => {
                                        el(0), e6("");
                                      },
                                      children: (0, M.jsx)("h4", {
                                        children: "Stake",
                                      }),
                                    }),
                                  }),
                                  (0, M.jsx)(w.Z.Button, {
                                    value: S.n.Position,
                                    children: (0, M.jsx)("span", {
                                      className: "creamWrap",
                                      onClick: () => {
                                        el(1), e9("");
                                      },
                                      children: (0, M.jsx)("h4", {
                                        children: "Unstake",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, M.jsx)("div", {
                                className: (0, x.AK)(
                                  G,
                                  s === S.n.Staking || 0 === s
                                    ? "block"
                                    : "hidden"
                                ),
                                children: (0, M.jsxs)("div", {
                                  children: [
                                    (0, M.jsx)("div", {
                                      className: "teb_inrr_data",
                                      children: (0, M.jsxs)("div", {
                                        className: "flex mb-4",
                                        children: [
                                          (0, M.jsx)("div", {
                                            className: "mr-3",
                                            children: (0, M.jsx)(E.G, {
                                              size: "2x",
                                              icon: _.FKd,
                                              style: {
                                                color: "rgb(255,255,255,100)",
                                              },
                                            }),
                                          }),
                                          void 0 != eg
                                            ? (0, M.jsxs)("h3", {
                                                children: ["Stake ", eg],
                                              })
                                            : (0, M.jsx)("h3", {
                                                children: "Stake ICE",
                                              }),
                                        ],
                                      }),
                                    }),
                                    (0, M.jsx)("div", {
                                      className:
                                        "icecard_statsbox bg-dark-1000",
                                      children: (0, M.jsxs)("div", {
                                        className: "input_bx_spbt",
                                        children: [
                                          (0, M.jsxs)("div", {
                                            children: [
                                              (0, M.jsxs)("div", {
                                                className: "mt-2 flex_po_bc",
                                                children: [
                                                  (0, M.jsx)(h(), {
                                                    src: "/images/ice.svg",
                                                    alt: " ",
                                                    width: 30,
                                                    height: 30,
                                                  }),
                                                  void 0 != eg
                                                    ? (0, M.jsx)("h3", {
                                                        children: eg,
                                                      })
                                                    : (0, M.jsx)("h3", {
                                                        children: "ICE",
                                                      }),
                                                ],
                                              }),
                                              (0, M.jsx)("div", {
                                                className: "mt-2 form_ble_spbt",
                                                children:
                                                  void 0 != q
                                                    ? (0, M.jsxs)("p", {
                                                        children: [
                                                          "Balance: ",
                                                          Number(
                                                            q.toFixed(2)
                                                          ).toLocaleString(),
                                                        ],
                                                      })
                                                    : (0, M.jsxs)(M.Fragment, {
                                                        children: [
                                                          (0, M.jsx)("p", {
                                                            children:
                                                              "Balance:",
                                                          }),
                                                          (0, M.jsx)(T.a, {
                                                            size: "xs",
                                                            color: "green",
                                                            className: "ml-1",
                                                          }),
                                                        ],
                                                      }),
                                              }),
                                            ],
                                          }),
                                          (0, M.jsxs)("div", {
                                            className:
                                              "border inp_bx_bg border-white/10",
                                            children: [
                                              (0, M.jsx)("input", {
                                                type: "text",
                                                placeholder: "0.00",
                                                value: et,
                                                onChange: (e) =>
                                                  e6(e.target.value),
                                              }),
                                              (0, M.jsx)("button", {
                                                onClick: () => {
                                                  ec(
                                                    q
                                                      ? W(
                                                          q.toFixed(
                                                            q.currency.decimals,
                                                            void 0,
                                                            r.Rounding
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
                                    (0, M.jsxs)("div", {
                                      className:
                                        "grid grid-cols-1 gap-2 mt-5 sm:grid-cols-2 xl:gap-5",
                                      children: [
                                        (0, M.jsxs)("div", {
                                          className:
                                            "icecard_statsbox bg-dark-1000",
                                          children: [
                                            (0, M.jsx)("h5", {
                                              children: "NFT Count",
                                            }),
                                            void 0 != eo
                                              ? (0, M.jsx)("h4", {
                                                  children: eo,
                                                })
                                              : (0, M.jsx)(T.a, {
                                                  size: "xs",
                                                  color: "green",
                                                  className: "mt-1",
                                                }),
                                          ],
                                        }),
                                        (0, M.jsxs)("div", {
                                          className:
                                            "icecard_statsbox bg-dark-1000",
                                          children: [
                                            (0, M.jsx)("h5", {
                                              className: "p-0 m-0",
                                              children: "Boosted Stake",
                                            }),
                                            et && Number(et) > 0
                                              ? eo
                                                ? (0, M.jsx)("h4", {
                                                    className: "p-0 m-0",
                                                    children:
                                                      (eo * Number(et)).toFixed(
                                                        2
                                                      ) + " ICE",
                                                  })
                                                : (0, M.jsx)(T.a, {
                                                    size: "xs",
                                                    color: "green",
                                                  })
                                              : (0, M.jsx)("h4", {
                                                  className: "p-0 m-0",
                                                  children: "-",
                                                }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    L
                                      ? (0, M.jsx)("button", {
                                          className: se ? K : $,
                                          onClick: ei ? sr : () => o(),
                                          disabled: !!ei && se,
                                          children: ei
                                            ? et
                                              ? e3 === u.UK.NOT_APPROVED ||
                                                e3 === u.UK.PENDING
                                                ? "Approve"
                                                : "Stake"
                                              : "Enter Amount"
                                            : "Connect Wallet",
                                        })
                                      : (0, M.jsxs)("button", {
                                          className: H,
                                          disabled: !0,
                                          children: [
                                            " ",
                                            "Unsupported Network",
                                          ],
                                        }),
                                  ],
                                }),
                              }),
                              (0, M.jsx)("div", {
                                className: (0, x.AK)(
                                  G,
                                  s === S.n.Position ? "block" : "hidden"
                                ),
                                children: (0, M.jsxs)("div", {
                                  children: [
                                    (0, M.jsx)("div", {
                                      className: "teb_inrr_data",
                                      children: (0, M.jsxs)("div", {
                                        className: "flex mb-4",
                                        children: [
                                          (0, M.jsx)("div", {
                                            className: "mr-3",
                                            children: (0, M.jsx)(E.G, {
                                              size: "2x",
                                              icon: _.k9h,
                                              style: {
                                                color: "rgb(255,255,255,100)",
                                              },
                                            }),
                                          }),
                                          void 0 != eg
                                            ? (0, M.jsxs)("h3", {
                                                children: ["Stake ", eg],
                                              })
                                            : (0, M.jsx)("h3", {
                                                children: "Stake ICE",
                                              }),
                                        ],
                                      }),
                                    }),
                                    (0, M.jsx)("div", {
                                      className:
                                        "icecard_statsbox bg-dark-1000/100",
                                      children: (0, M.jsxs)("div", {
                                        className: "input_bx_spbt",
                                        children: [
                                          (0, M.jsxs)("div", {
                                            children: [
                                              (0, M.jsxs)("div", {
                                                className: "mt-2 flex_po_bc",
                                                children: [
                                                  (0, M.jsx)(h(), {
                                                    src: "/images/ice.svg",
                                                    alt: " ",
                                                    width: 30,
                                                    height: 30,
                                                  }),
                                                  void 0 != eg
                                                    ? (0, M.jsx)("h3", {
                                                        children: eg,
                                                      })
                                                    : (0, M.jsx)("h3", {
                                                        children: "ICE",
                                                      }),
                                                ],
                                              }),
                                              (0, M.jsx)("div", {
                                                className: "mt-2 form_ble_spbt",
                                                children:
                                                  void 0 != ex
                                                    ? (0, M.jsxs)("p", {
                                                        children: [
                                                          "Balance: ",
                                                          Number(
                                                            ex.toFixed(2)
                                                          ).toLocaleString(),
                                                        ],
                                                      })
                                                    : (0, M.jsxs)(M.Fragment, {
                                                        children: [
                                                          (0, M.jsx)("p", {
                                                            children:
                                                              "Balance:",
                                                          }),
                                                          (0, M.jsx)(T.a, {
                                                            size: "xs",
                                                            color: "green",
                                                            className: "l-1 ",
                                                          }),
                                                        ],
                                                      }),
                                              }),
                                            ],
                                          }),
                                          (0, M.jsxs)("div", {
                                            className:
                                              "border inp_bx_bg border-white/10",
                                            children: [
                                              (0, M.jsx)("input", {
                                                type: "text",
                                                placeholder: "0.00",
                                                value: en,
                                                onChange: (e) =>
                                                  e9(e.target.value),
                                              }),
                                              (0, M.jsx)("button", {
                                                onClick: () => {
                                                  ed(ex ? ex.toString() : "");
                                                },
                                                children: "Max",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, M.jsx)("button", {
                                      className: ss ? K : $,
                                      onClick: ei ? sl : () => o(),
                                      disabled: !!ei && ss,
                                      children: ei
                                        ? en
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
                        (0, M.jsx)("div", {
                          className:
                            "order-4 row-span-3 sm:col-span-2 xl:col-span-3 xl:order-2",
                          children: (0, M.jsxs)("div", {
                            className: "zombievan-card",
                            children: [
                              (0, M.jsxs)("div", {
                                className: "flex pt-6 pl-6",
                                children: [
                                  (0, M.jsx)("div", {
                                    className: "mr-3",
                                    children: (0, M.jsx)(E.G, {
                                      size: "2x",
                                      icon: _.lTt,
                                      style: { color: "rgb(255,255,255,100)" },
                                    }),
                                  }),
                                  (0, M.jsx)("h3", {
                                    children: "Reward Calculator",
                                  }),
                                ],
                              }),
                              so
                                ? (0, M.jsxs)("div", {
                                    children: [
                                      (0, M.jsx)("div", {
                                        className: "m-4",
                                        children: (0, M.jsx)("h5", {
                                          className: "my-4",
                                          children:
                                            "Use this tool to simulate the APR after adding an additional ICE stake into the Zombie Van",
                                        }),
                                      }),
                                      (0, M.jsxs)("div", {
                                        className:
                                          "grid grid-cols-1 px-4 py-2 align-middle xs:grid-cols-2 md:grid-cols-3",
                                        children: [
                                          (0, M.jsxs)("div", {
                                            children: [
                                              (0, M.jsx)("h4", {
                                                className: "text-center",
                                                children: "Zombie Count",
                                              }),
                                              (0, M.jsxs)("div", {
                                                className:
                                                  "flex justify-center",
                                                children: [
                                                  (0, M.jsx)(F.A, {
                                                    className: "text-white",
                                                    style: {
                                                      background:
                                                        "rgb(19, 25, 40, 0.9)",
                                                    },
                                                    size: 36,
                                                    variant: "default",
                                                    onClick: () =>
                                                      eD.current.decrement(),
                                                    children: "–",
                                                  }),
                                                  (0, M.jsx)(z.Y, {
                                                    className:
                                                      "items-start mx-2 align-top",
                                                    hideControls: !0,
                                                    value: eP,
                                                    onChange: (e) => {
                                                      eV(e), eG((eM * e) / eS);
                                                    },
                                                    min: 1,
                                                    handlersRef: eD,
                                                    style: {},
                                                    styles: {
                                                      input: {
                                                        width: "60px",
                                                        textAlign: "center",
                                                        background:
                                                          "rgb(19, 25, 40, 0.9)",
                                                        color: "white",
                                                        borderColor: "black",
                                                      },
                                                    },
                                                  }),
                                                  (0, M.jsx)(F.A, {
                                                    className: "text-white",
                                                    style: {
                                                      background:
                                                        "rgb(19, 25, 40, 0.9)",
                                                    },
                                                    size: 36,
                                                    variant: "default",
                                                    onClick: () =>
                                                      eD.current.increment(),
                                                    children: "+",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, M.jsxs)("div", {
                                            children: [
                                              (0, M.jsx)("h4", {
                                                className: "text-center",
                                                children: "Staked ICE",
                                              }),
                                              (0, M.jsxs)("div", {
                                                className:
                                                  "flex justify-center",
                                                children: [
                                                  (0, M.jsx)(F.A, {
                                                    className: "text-white",
                                                    style: {
                                                      background:
                                                        "rgb(19, 25, 40, 0.9)",
                                                    },
                                                    size: 36,
                                                    variant: "default",
                                                    onClick: () =>
                                                      eB.current.decrement(),
                                                    children: "–",
                                                  }),
                                                  (0, M.jsx)(z.Y, {
                                                    className:
                                                      "items-start mx-2 align-top",
                                                    hideControls: !0,
                                                    value: eM,
                                                    onChange: (e) => {
                                                      eU(e), eG((e * eP) / eS);
                                                    },
                                                    min: 1,
                                                    step: 1e3,
                                                    thousandsSeparator: ",",
                                                    handlersRef: eB,
                                                    styles: {
                                                      input: {
                                                        width: "100px",
                                                        textAlign: "center",
                                                        background:
                                                          "rgb(19, 25, 40, 0.9)",
                                                        color: "white",
                                                        borderColor: "black",
                                                      },
                                                    },
                                                  }),
                                                  (0, M.jsx)(F.A, {
                                                    className: "text-white",
                                                    style: {
                                                      background:
                                                        "rgb(19, 25, 40, 0.9)",
                                                    },
                                                    size: 36,
                                                    variant: "default",
                                                    onClick: () =>
                                                      eB.current.increment(),
                                                    children: "+",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, M.jsxs)("div", {
                                            className:
                                              "mt-3 xs:col-span-2 md:col-span-1 md:mt-0",
                                            children: [
                                              (0, M.jsx)("h4", {
                                                className: "text-center",
                                                children: "Show USD",
                                              }),
                                              (0, M.jsx)("div", {
                                                className:
                                                  "flex justify-center",
                                                children: (0, M.jsx)(A.r, {
                                                  className:
                                                    "items-start ml-2 align-top",
                                                  size: "lg",
                                                  color: "dark",
                                                  checked: eO,
                                                  onChange: (e) =>
                                                    eZ(e.currentTarget.checked),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, M.jsx)("div", {
                                        className: "mx-2 mt-4",
                                        children: (0, M.jsx)("div", {
                                          className:
                                            "icecard_statsbox bg-dark-1000",
                                          children: (0, M.jsx)("div", {
                                            className: "ml-2",
                                            children: (0, M.jsxs)("div", {
                                              children: [
                                                (0, M.jsx)("h4", {
                                                  children: "Fee APR by Day",
                                                }),
                                                (0, M.jsx)(I.x, {
                                                  dataOne: so,
                                                  colors: X,
                                                  decimals: 2,
                                                  formatter: eO ? 0 : 1,
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      }),
                                      (0, M.jsxs)("div", {
                                        className:
                                          "grid grid-cols-1 gap-2 m-6 sm:grid-cols-3 xl:gap-5",
                                        children: [
                                          (0, M.jsx)("div", {
                                            className: "",
                                            children: (0, M.jsxs)("div", {
                                              className:
                                                "icecard_statsbox bg-dark-1000",
                                              children: [
                                                (0, M.jsx)("h5", {
                                                  children: "Boosted Stake",
                                                }),
                                                eP && eM && eS
                                                  ? (0, M.jsx)("h4", {
                                                      children:
                                                        (
                                                          eP * eM
                                                        ).toLocaleString() +
                                                        " ICE",
                                                    })
                                                  : (0, M.jsx)(T.a, {
                                                      size: "xs",
                                                      color: "green",
                                                      className: "mt-1",
                                                    }),
                                              ],
                                            }),
                                          }),
                                          (0, M.jsx)("div", {
                                            className: "",
                                            children: (0, M.jsxs)("div", {
                                              className:
                                                "icecard_statsbox bg-dark-1000",
                                              children: [
                                                (0, M.jsx)("h5", {
                                                  className: "p-0 m-0",
                                                  children: "Zombie Van Share",
                                                }),
                                                eP && eM && eS
                                                  ? (0, M.jsxs)("h4", {
                                                      className: "p-0 m-0",
                                                      children: [
                                                        (
                                                          ((eP * eM) /
                                                            (eS + eP * eM)) *
                                                          100
                                                        ).toFixed(2),
                                                        "%",
                                                      ],
                                                    })
                                                  : (0, M.jsx)(T.a, {
                                                      size: "xs",
                                                      color: "green",
                                                      className: "mt-1",
                                                    }),
                                              ],
                                            }),
                                          }),
                                          (0, M.jsx)("div", {
                                            className: "",
                                            children: (0, M.jsxs)("div", {
                                              className:
                                                "icecard_statsbox bg-dark-1000",
                                              children: [
                                                (0, M.jsx)("h5", {
                                                  className: "p-0 m-0",
                                                  children: "Average APR**",
                                                }),
                                                so && sh && sh >= 0
                                                  ? (0, M.jsx)("h4", {
                                                      className: "p-0 m-0",
                                                      children:
                                                        (eO ? "$" : "") +
                                                        (sh
                                                          ? sh.toFixed(2)
                                                          : 0) +
                                                        (eO ? "" : "%"),
                                                    })
                                                  : (0, M.jsx)(T.a, {
                                                      size: "xs",
                                                      color: "green",
                                                      className: "mt-1",
                                                    }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, M.jsx)("h5", {
                                        className: "mx-6 mt-6",
                                        children:
                                          "*Average based on current van share using the previous weeks rewards",
                                      }),
                                      (0, M.jsx)("h5", {
                                        className: "mx-6 mt-1 mb-6",
                                        children:
                                          "**Average based on current van share using the previous 3 months rewards",
                                      }),
                                    ],
                                  })
                                : (0, M.jsx)("div", {
                                    className: "flex justify-center",
                                    children: (0, M.jsx)(T.a, {
                                      size: "sm",
                                      color: "green",
                                      className: "m-6",
                                    }),
                                  }),
                            ],
                          }),
                        }),
                        (0, M.jsx)("div", {
                          className: "order-2 xl:col-span-2 xl:order-3",
                          children: (0, M.jsxs)("div", {
                            className: "px-4 py-5 zombievan-card",
                            children: [
                              (0, M.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  (0, M.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                      (0, M.jsx)("div", {
                                        className: "mr-3",
                                        children: (0, M.jsx)(E.G, {
                                          size: "2x",
                                          icon: _.uVn,
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
                                  eX || void 0 == eu
                                    ? (0, M.jsx)(T.a, {
                                        color: "white",
                                        size: "sm",
                                      })
                                    : (0, M.jsx)(M.Fragment, {}),
                                ],
                              }),
                              (0, M.jsxs)("div", {
                                children: [
                                  (0, M.jsx)("div", {
                                    className:
                                      "mt-4 icecard_statsbox bg-dark-1000",
                                    children: (0, M.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between w-full",
                                      children: [
                                        (0, M.jsx)("div", {
                                          children:
                                            void 0 == eu
                                              ? (0, M.jsxs)("div", {
                                                  children: [
                                                    (0, M.jsx)("h3", {
                                                      children: "0",
                                                    }),
                                                    (0, M.jsx)("h5", {
                                                      children: eb,
                                                    }),
                                                  ],
                                                })
                                              : (0, M.jsxs)("div", {
                                                  children: [
                                                    (0, M.jsx)("h3", {
                                                      children: Number(
                                                        eu.toFixed(3)
                                                      ).toLocaleString(),
                                                    }),
                                                    (0, M.jsx)("h5", {
                                                      children: eb,
                                                    }),
                                                  ],
                                                }),
                                        }),
                                        (0, M.jsx)("div", {
                                          children:
                                            c == r.ChainId.TELOS ||
                                            c == r.ChainId.TELOS_TESTNET
                                              ? (0, M.jsx)(h(), {
                                                  src: "/img/telos.png",
                                                  alt: " ",
                                                  width: 50,
                                                  height: 50,
                                                })
                                              : (0, M.jsx)(h(), {
                                                  src: "/img/mantle.svg",
                                                  alt: " ",
                                                  width: 42,
                                                  height: 42,
                                                }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, M.jsx)("div", {
                                    children: L
                                      ? (0, M.jsx)("button", {
                                          className: sa ? K : $,
                                          onClick: ei ? st : () => o(),
                                          disabled: !!ei && sa,
                                          children: ei
                                            ? "Claim"
                                            : "Connect Wallet",
                                        })
                                      : (0, M.jsxs)("button", {
                                          className: H,
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
                        (0, M.jsx)("div", {
                          className: "order-3 xl:col-span-2 xl:order-4",
                          children: (0, M.jsxs)("div", {
                            className: "px-4 py-5 zombievan-card",
                            children: [
                              (0, M.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  (0, M.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                      (0, M.jsx)("div", {
                                        className: "mr-3",
                                        children: (0, M.jsx)(E.G, {
                                          size: "2x",
                                          icon: _.EsM,
                                          style: {
                                            color: "rgb(255,255,255,100)",
                                          },
                                        }),
                                      }),
                                      (0, M.jsx)("h3", {
                                        children: "Undistributed Rewards",
                                      }),
                                    ],
                                  }),
                                  eJ || e0 || void 0 == ef || !eb
                                    ? (0, M.jsx)(T.a, {
                                        color: "white",
                                        size: "sm",
                                      })
                                    : (0, M.jsx)(M.Fragment, {}),
                                ],
                              }),
                              (0, M.jsxs)("div", {
                                children: [
                                  (0, M.jsx)("h5", {
                                    className: "my-4",
                                    children:
                                      "Pending rewards available for distribution to all participants",
                                  }),
                                  (0, M.jsx)("div", {
                                    className: "",
                                    children: (0, M.jsx)("div", {
                                      className:
                                        "icecard_statsbox bg-dark-1000",
                                      children: (0, M.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between w-full",
                                        children: [
                                          (0, M.jsx)("div", {
                                            children:
                                              void 0 == ef
                                                ? (0, M.jsxs)("div", {
                                                    children: [
                                                      (0, M.jsx)("h3", {
                                                        children: "0",
                                                      }),
                                                      (0, M.jsx)("h5", {
                                                        children: eb,
                                                      }),
                                                    ],
                                                  })
                                                : (0, M.jsxs)("div", {
                                                    children: [
                                                      (0, M.jsx)("h3", {
                                                        children: Number(
                                                          ef.toFixed(3)
                                                        ).toLocaleString(),
                                                      }),
                                                      (0, M.jsx)("h5", {
                                                        children: eb,
                                                      }),
                                                    ],
                                                  }),
                                          }),
                                          (0, M.jsx)("div", {
                                            children:
                                              c == r.ChainId.TELOS ||
                                              c == r.ChainId.TELOS_TESTNET
                                                ? (0, M.jsx)(h(), {
                                                    src: "/img/telos.png",
                                                    alt: " ",
                                                    width: 50,
                                                    height: 50,
                                                  })
                                                : (0, M.jsx)(h(), {
                                                    src: "/img/mantle.svg",
                                                    alt: " ",
                                                    width: 42,
                                                    height: 42,
                                                  }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, M.jsxs)("div", {
                                    children: [
                                      L
                                        ? (0, M.jsxs)("div", {
                                            className: "flex gap-2",
                                            children: [
                                              (0, M.jsx)("button", {
                                                className: e0 ? K : $,
                                                onClick: ei ? sn : () => o(),
                                                disabled: !!ei && e0,
                                                children: ei
                                                  ? "Update Shares"
                                                  : "Connect Wallet",
                                              }),
                                              (0, M.jsx)("button", {
                                                className: si ? K : $,
                                                onClick: ei ? sc : () => o(),
                                                disabled: !!ei && si,
                                                children: ei
                                                  ? "Distribute"
                                                  : "Connect Wallet",
                                              }),
                                            ],
                                          })
                                        : (0, M.jsx)("div", {
                                            children: (0, M.jsxs)("button", {
                                              className: H,
                                              disabled: !0,
                                              children: [
                                                " ",
                                                "Unsupported Network",
                                              ],
                                            }),
                                          }),
                                      (0, M.jsx)("h5", {
                                        className: "mt-3",
                                        children:
                                          "Update shares to recalculate your share of the Zombie Van.",
                                      }),
                                      (0, M.jsx)("h5", {
                                        className: "mt-3",
                                        children:
                                          "If rewards are available, manually distribute now or wait for Swapsicle to batch distribute at regular intervals.",
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
            ],
          })
        );
      }
      Y.Guard = (0, t.Z)(L.L.ZOMBIEVAN);
    },
    271431: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/zombie-van",
        function () {
          return a(584730);
        },
      ]);
    },
  },
  function (e) {
    e.O(
      0,
      [
        3662, 1082, 7098, 8100, 5729, 2962, 7066, 3062, 9934, 7414, 4614, 7892,
        1457, 1163, 840, 3316, 2888, 9774, 179,
      ],
      function () {
        return e((e.s = 271431));
      }
    ),
      (_N_E = e.O());
  },
]);
