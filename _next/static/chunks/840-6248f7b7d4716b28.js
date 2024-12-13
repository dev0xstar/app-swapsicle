(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [840],
  {
    747304: function (e) {
      let t = {
          ETHEREUM: 1,
          MANTLE: 5e3,
          MANTLE_TESTNET: 5003,
          TELOS: 40,
          TELOS_TESTNET: 41,
          TAIKO: 167e3,
          TAIKO_TESTNET: 167009,
        },
        r = {
          ANALYTICS: "cryptoalgebra/analytics",
          FARMS: "cryptoalgebra/farms",
          BLOCKS: "cryptoalgebra/blocks",
          ICE_TOKEN: "swapsicle/ice-token",
        },
        a = {
          [r.ANALYTICS]: {
            [t.MANTLE]:
              "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/analytics/prod/gn",
            [t.MANTLE_TESTNET]:
              "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/analytics-testnet/prod/gn",
            [t.TELOS]:
              "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/analytics/prod/gn",
            [t.TELOS_TESTNET]:
              "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/analytics-testnet/prod/gn",
            [t.TAIKO]:
              "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-analytics-taiko/prod/gn",
            [t.TAIKO_TESTNET]:
              "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-analytics-taiko-hekla/prod/gn",
          },
          [r.FARMS]: {
            [t.MANTLE]:
              "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/cryptoalgebra/farms/-/gn",
            [t.MANTLE_TESTNET]:
              "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/farms-testnet/prod/gn",
            [t.TELOS]:
              "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/farms/prod/gn",
            [t.TELOS_TESTNET]:
              "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/farms-testnet/prod/gn",
            [t.TAIKO]:
              "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-farms-taiko/prod/gn",
            [t.TAIKO_TESTNET]:
              "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-farms-taiko-hekla/prod/gn",
          },
          [r.BLOCKS]: {
            [t.MANTLE]:
              "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/blocks/prod/gn",
            [t.MANTLE_TESTNET]:
              "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/blocks-testnet/prod/gn",
            [t.TELOS]:
              "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/blocks/prod/gn",
            [t.TELOS_TESTNET]:
              "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/blocks-testnet/prod/gn",
            [t.TAIKO]:
              "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-blocks-taiko/prod/gn",
            [t.TAIKO_TESTNET]:
              "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-blocks-taiko-hekla/prod/gn",
          },
          [r.ICE_TOKEN]: {
            [t.MANTLE]:
              "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/icetoken/prod/gn",
            [t.MANTLE_TESTNET]:
              "https://subgraph-api.mantle.xyz/api/public/f077c8d4-0d6c-42d4-9bbd-050948dc5c86/subgraphs/swapsicle/icetoken-testnet/prod/gn",
            [t.TELOS]:
              "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/icetoken/prod/gn",
            [t.TELOS_TESTNET]:
              "https://telosapi.0xgraph.xyz/api/public/f59149ee-c99a-41d0-afe4-1c86170a98b0/subgraphs/swapsicle/icetoken-testnet/prod/gn",
            [t.TAIKO]:
              "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-icetoken-taiko/prod/gn",
            [t.TAIKO_TESTNET]:
              "https://api.goldsky.com/api/public/project_clr6mlufzbtuy01vd012wgt5k/subgraphs/swapsicle-icetoken-taiko-hekla/prod/gn",
          },
        };
      e.exports = {
        ChainId: t,
        SUBGRAPH_NAMES: r,
        getSubgraphUrl: (e, t) => a[e][t],
      };
    },
    415697: function (e, t, r) {
      "use strict";
      r.d(t, {
        AM: function () {
          return s;
        },
        c5: function () {
          return l;
        },
        qf: function () {
          return i;
        },
      });
      var a = r(341276);
      let n = "https://api.thegraph.com",
        o = "https://subgraph-api.mantle.xyz",
        i = {
          [a.ChainId.ETHEREUM]: n,
          [a.ChainId.MATIC]: n,
          [a.ChainId.FANTOM]: n,
          [a.ChainId.BSC]: n,
          [a.ChainId.AVALANCHE]: n,
          [a.ChainId.ARBITRUM]: n,
          [a.ChainId.OPTIMISM]: n,
          [a.ChainId.HARMONY]: "https://sushi.graph.t.hmny.io",
          [a.ChainId.TELOS]: "https://telos.subgraph.swapsicle.io",
          [a.ChainId.TELOS_TESTNET]:
            "https://testnet.telos.subgraph.swapsicle.io",
          [a.ChainId.MANTLE]: o,
          [a.ChainId.MANTLE_TESTNET]: o,
        },
        l = { [a.ChainId.MATIC]: "sushiswap/trident-polygon" },
        s = {
          farmsAverageAPR: {
            [a.ChainId.MANTLE]:
              "https://api.algebra.finance/api/APR/eternalFarmings/?network=mantle",
            [a.ChainId.MANTLE_TESTNET]:
              "https://api.algebra.finance/api/APR/eternalFarmings/?network=mantle-testnet",
            [a.ChainId.TELOS]:
              "https://api.algebra.finance/api/APR/eternalFarmings/?network=telos",
            [a.ChainId.TELOS_TESTNET]:
              "https://api.algebra.finance/api/APR/eternalFarmings/?network=telos-testnet",
            [a.ChainId.TAIKO]:
              "https://api.algebra.finance/api/APR/eternalFarmings/?network=taiko",
            [a.ChainId.TAIKO_TESTNET]:
              "https://api.algebra.finance/api/APR/eternalFarmings/?network=taiko-hekla",
          },
          poolsAverageAPR: {
            [a.ChainId.MANTLE]:
              "https://api.algebra.finance/api/APR/pools/?network=mantle",
            [a.ChainId.MANTLE_TESTNET]:
              "https://api.algebra.finance/api/APR/pools/?network=mantle-testnet",
            [a.ChainId.TELOS]:
              "https://api.algebra.finance/api/APR/pools/?network=telos",
            [a.ChainId.TELOS_TESTNET]:
              "https://api.algebra.finance/api/APR/pools/?network=telos-testnet",
            [a.ChainId.TAIKO]:
              "https://api.algebra.finance/api/APR/pools/?network=taiko",
            [a.ChainId.TAIKO_TESTNET]:
              "https://api.algebra.finance/api/APR/pools/?network=taiko-hekla",
          },
          farmsMaxAPR: {
            [a.ChainId.MANTLE]:
              "https://api.algebra.finance/api/APR/eternalFarmings/max?network=mantle",
            [a.ChainId.MANTLE_TESTNET]:
              "https://api.algebra.finance/api/APR/eternalFarmings/max?network=mantle-testnet",
            [a.ChainId.TELOS]:
              "https://api.algebra.finance/api/APR/eternalFarmings/max?network=telos",
            [a.ChainId.TELOS_TESTNET]:
              "https://api.algebra.finance/api/APR/eternalFarmings/max?network=telos-testnet",
            [a.ChainId.TAIKO]:
              "https://api.algebra.finance/api/APR/eternalFarmings/max?network=taiko",
            [a.ChainId.TAIKO_TESTNET]:
              "https://api.algebra.finance/api/APR/eternalFarmings/max?network=taiko-hekla",
          },
          poolsMaxAPR: {
            [a.ChainId.MANTLE]:
              "https://api.algebra.finance/api/APR/pools/max?network=mantle",
            [a.ChainId.MANTLE_TESTNET]:
              "https://api.algebra.finance/api/APR/pools/max?network=mantle-testnet",
            [a.ChainId.TELOS]:
              "https://api.algebra.finance/api/APR/pools/max?network=telos",
            [a.ChainId.TELOS_TESTNET]:
              "https://api.algebra.finance/api/APR/pools/max?network=telos-testnet",
            [a.ChainId.TAIKO]:
              "https://api.algebra.finance/api/APR/pools/max?network=taiko",
            [a.ChainId.TAIKO_TESTNET]:
              "https://api.algebra.finance/api/APR/pools/max?network=taiko-hekla",
          },
          farmsTVL: {
            [a.ChainId.MANTLE]:
              "https://api.algebra.finance/api/TVL/eternalFarmings/?network=mantle",
            [a.ChainId.MANTLE_TESTNET]:
              "https://api.algebra.finance/api/TVL/eternalFarmings/?network=mantle-testnet",
            [a.ChainId.TELOS]:
              "https://api.algebra.finance/api/TVL/eternalFarmings/?network=telos",
            [a.ChainId.TELOS_TESTNET]:
              "https://api.algebra.finance/api/TVL/eternalFarmings/?network=telos-testnet",
            [a.ChainId.TAIKO]:
              "https://api.algebra.finance/api/TVL/eternalFarmings/?network=taiko",
            [a.ChainId.TAIKO_TESTNET]:
              "https://api.algebra.finance/api/TVL/eternalFarmings/?network=taiko-hekla",
          },
        };
    },
    719130: function (e, t, r) {
      "use strict";
      r.d(t, {
        Fu: function () {
          return l;
        },
        JD: function () {
          return $;
        },
        Ut: function () {
          return _;
        },
        lG: function () {
          return R;
        },
        zo: function () {
          return x;
        },
        ME: function () {
          return q;
        },
        Q_: function () {
          return b;
        },
        JV: function () {
          return O;
        },
        R4: function () {
          return w;
        },
        aR: function () {
          return u;
        },
        pd: function () {
          return E;
        },
        qB: function () {
          return I;
        },
        Av: function () {
          return F;
        },
        q3: function () {
          return D;
        },
        Xi: function () {
          return f;
        },
        y$: function () {
          return C;
        },
        pg: function () {
          return y;
        },
        $Z: function () {
          return N;
        },
        ck: function () {
          return L;
        },
        kI: function () {
          return k;
        },
        ZZ: function () {
          return v;
        },
        C0: function () {
          return A;
        },
        bt: function () {
          return U;
        },
        do: function () {
          return g;
        },
        JY: function () {
          return P;
        },
        iy: function () {
          return c;
        },
        T8: function () {
          return d;
        },
        gE: function () {
          return p;
        },
        jQ: function () {
          return s;
        },
        KS: function () {
          return m;
        },
      });
      var a = r(228687),
        n = r.n(a),
        o = r(764763),
        i = r(747304);
      let l = async function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : void 0,
            a = (0, i.getSubgraphUrl)(i.SUBGRAPH_NAMES.FARMS, t);
          return n()(a, e, r);
        },
        s = async (e, t, r, a, n) =>
          Promise.allSettled(t.map((t) => r(a, e, { [n]: t }))).then((e) =>
            e.map((e) => ("fulfilled" === e.status ? e.value : null))
          ),
        u = async (e) => {
          let { eternalFarmings: t } = await l(o.Y5, e);
          return t;
        },
        c = async (e, t, r) => {
          let { deposits: a } = await l(o.J8, r, { account: e, poolId: t });
          return [...a];
        },
        d = async (e, t, r, a) => {
          let { deposits: n } = await l(o.MO, a, {
            account: e,
            poolId: t,
            minRangeLength: r,
          });
          return [...n];
        },
        p = async (e, t) => {
          let { rewards: r } = await l(o.Mv, t, { account: e });
          return r;
        },
        g = async (e, t) => {
          let { deposit: r } = await l(o.M7, t, { positionId: e });
          return r;
        },
        f = async (e) => await l(o.wW, e);
      var h = r(287066),
        T = r(572318);
      let m = async function (e, t) {
          let r,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : void 0,
            o = (0, i.getSubgraphUrl)(i.SUBGRAPH_NAMES.ANALYTICS, t),
            l =
              o.includes("analytics") &&
              "string" == typeof e &&
              (e.includes("query pools") || e.includes("query topPools")) &&
              e.includes(
                "orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow"
              );
          try {
            r = await n()(o, e, a);
          } catch (e) {
            console.log(e, `Error fetching from subgraph ${o}`);
          }
          if (l && !r?.pools?.length) {
            console.log("Falling back to cached pools");
            let e = await (0, h.Z)({
              method: "get",
              url: `${T.ms}/v2/cached/pools/${t}`,
              headers: { Accept: "application/json" },
            });
            return e?.data?.data?.pools?.length ? e?.data?.data : {};
          }
          return r;
        },
        S = async function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : void 0,
            a = (0, i.getSubgraphUrl)(i.SUBGRAPH_NAMES.BLOCKS, t);
          return await n()(a, e, r);
        },
        b = async (e, t) => {
          let { ticks: r } = await m(o.Jq, e, t);
          return r;
        },
        k = async (e, t) => {
          let { pool: r } = await m(o.B$, e, t);
          return r;
        },
        E = async (e) => {
          let { pools: t } = await m(o.R0, e);
          return t.map((e) => e.id);
        },
        y = async (e, t) => {
          let { positions: r } = await m(o.Gj, e, t);
          return r.map((e) => e.pool.id);
        },
        A = async function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : void 0,
            { pools: a } = await m((0, o.eV)(r, e), t);
          return a;
        },
        w = async (e, t) => {
          let { eternalFarmings: r } = await l((0, o.MI)(e), t);
          return r;
        },
        I = async (e, t) => await m((0, o.sN)(!1), e, { tokenId: t }),
        P = async function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : void 0,
            { tokens: a } = await m((0, o.VZ)(r, e), t);
          return a;
        },
        v = async function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : void 0,
            { pool: a } = await m((0, o.mM)(t, r), e);
          return a;
        },
        N = async (e) => {
          let { bundle: t } = await m(o.Oz, e);
          return t;
        },
        C = async (e, t, r) => {
          let { positions: a } = await m((0, o.Pw)(t, r), e);
          return a;
        },
        O = async (e) => {
          let { algebraDayDatas: t } = await m(o.We, e);
          return t;
        },
        L = async (e, t) => {
          let { poolDayDatas: r, pool: a } = await m((0, o.B5)(t), e);
          return { poolDayDatas: r, pool: a };
        },
        U = async (e, t) => {
          let { position: r } = await m((0, o.Vr)(t), e);
          return r;
        },
        D = async (e) => await S(o.JO, e),
        F = async (e) => await m(o.JO, e);
      var M = r(415697);
      let _ = async (e) =>
          await fetch(M.AM.farmsAverageAPR[e]).then((e) => e.json()),
        R = async (e) => await fetch(M.AM.farmsMaxAPR[e]).then((e) => e.json()),
        $ = async (e) => await fetch(M.AM.farmsTVL[e]).then((e) => e.json()),
        x = async (e) =>
          await fetch(M.AM.poolsAverageAPR[e]).then((e) => e.json()),
        q = async (e) => await fetch(M.AM.poolsMaxAPR[e]).then((e) => e.json());
    },
    600840: function (e, t, r) {
      "use strict";
      r.d(t, {
        zu: function () {
          return B;
        },
        qh: function () {
          return h;
        },
        cb: function () {
          return K;
        },
        gI: function () {
          return T;
        },
        FK: function () {
          return D;
        },
        wm: function () {
          return U;
        },
        XT: function () {
          return C;
        },
        bS: function () {
          return N;
        },
        mi: function () {
          return v;
        },
        pP: function () {
          return M;
        },
        m8: function () {
          return V;
        },
        mb: function () {
          return E;
        },
        KZ: function () {
          return Z;
        },
        x6: function () {
          return k;
        },
        cf: function () {
          return S;
        },
        pQ: function () {
          return O;
        },
        g6: function () {
          return m;
        },
        Uw: function () {
          return b;
        },
        kF: function () {
          return _;
        },
        Fr: function () {
          return F;
        },
      });
      var a = r(108307);
      r(939499), r(496486);
      var n = r(108100),
        o = r(939507);
      r(341276), r(799767);
      var i = r(719130);
      function l(e) {
        let { data: t, error: r } = (0, n.ZP)([e, "v3PoolsAverageAPRs"], i.zo, {
          refreshInterval: 3e4,
        });
        return { data: t, error: r, loading: !t && !r };
      }
      function s(e) {
        let { data: t, error: r } = (0, n.ZP)(
          [e, "v3FarmingsAverageAPRs"],
          i.Ut,
          { refreshInterval: 3e4 }
        );
        return { data: t, error: r, loading: !t && !r };
      }
      var u = r(548470),
        c = r(667294),
        d = r(764763),
        p = r(500989);
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      let h = { revalidateOnFocus: !1, revalidateOnReconnect: !1 };
      function T() {
        let { chainId: e } = (0, o.Z)(),
          { data: t, error: r } = (0, n.ZP)(
            ["eternalFarmings", e],
            (e, t) => (0, i.aR)(t),
            h
          ),
          { data: a, error: l } = (0, n.ZP)(
            t ? [e, ...t.map((e) => e.pool)] : null,
            function (e) {
              for (
                var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1;
                a < t;
                a++
              )
                r[a - 1] = arguments[a];
              return (0, i.jQ)(e, r, i.KS, d.B$, "poolId");
            },
            h
          ),
          { data: p, error: g } = (0, n.ZP)(
            t ? [e, ...t.map((e) => e.rewardToken)] : null,
            function (e) {
              for (
                var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1;
                a < t;
                a++
              )
                r[a - 1] = arguments[a];
              return (0, i.jQ)(e, r, i.Fu, (0, d.sN)(!0), "tokenId");
            },
            h
          ),
          { data: T, error: m } = (0, n.ZP)(
            t ? [e, ...t.map((e) => e.bonusRewardToken)] : null,
            function (e) {
              for (
                var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1;
                a < t;
                a++
              )
                r[a - 1] = arguments[a];
              return (0, i.jQ)(e, r, i.Fu, (0, d.sN)(!0), "tokenId");
            },
            h
          ),
          { data: S, error: b } = s(e),
          { data: k, error: E } = (function (e) {
            let { data: t, error: r } = (0, n.ZP)([e, "v3FarmingsTVL"], i.JD, {
              refreshInterval: 3e4,
            });
            return { data: t, error: r, loading: !t && !r };
          })(e),
          { data: y, error: A } = (0, n.ZP)(
            ["v3NativePrice", e],
            (e, t) => (0, i.$Z)(t),
            h
          );
        return (0, c.useMemo)(
          () =>
            l || g || m
              ? { data: [], loading: !1, error: l || g || m || r }
              : a && p && T
              ? {
                  data: t.map((e, t) => {
                    let r = u.bM(
                        BigInt(e.rewardRate),
                        Number(p[t].token.decimals)
                      ),
                      n = u.bM(
                        BigInt(e.bonusRewardRate),
                        Number(T[t].token.decimals)
                      ),
                      o = Number(y.maticPriceUSD);
                    return f(
                      f({}, e),
                      {},
                      {
                        pool: a[t].pool,
                        pair: {
                          token0: a[t].pool?.token0,
                          token1: a[t].pool?.token1,
                          id: a[t].pool?.id,
                        },
                        rewards: {
                          rewardToken: p[t].token,
                          bonusRewardToken: T[t].token,
                          dailyRewardRate: Math.round(86400 * +r),
                          dailyBonusRewardRate: Math.round(86400 * +n),
                          reward: e.reward,
                          bonusReward: e.bonusReward,
                        },
                        apr: S && S[e.id] && S[e.id] > 0 ? S[e.id] : 0,
                        tvl: k && k[e.id] && o ? Math.round(k[e.id] * o) : 0,
                      }
                    );
                  }),
                  error: null,
                  loading: !1,
                }
              : { data: [], loading: !0, error: null },
          [a, p, T, t]
        );
      }
      function m(e, t) {
        let { account: r, chainId: a } = (0, o.Z)(),
          l = r && e,
          { data: s, error: u } = (0, n.ZP)(
            l ? ["v3TransferredPositionsForPool", r, e, t, a] : null,
            (e, t, r, a, n) => (0, i.T8)(t, r, a, n),
            { refreshInterval: 1e4 }
          );
        return u
          ? { data: void 0, loading: !1, error: u }
          : s
          ? { data: s, loading: !1, error: null }
          : { data: void 0, loading: !0, error: null };
      }
      function S(e) {
        let { account: t, chainId: r } = (0, o.Z)(),
          a = (0, p.hU)(),
          { 0: l, 1: s } = (0, c.useState)(),
          { rewardToken: u, bonusRewardToken: d, pool: g, nonce: h } = e,
          {
            data: T,
            error: m,
            isValidating: S,
          } = (0, n.ZP)(
            t ? ["v3PositionsOnFarmingQ", t, r, g] : null,
            (e, t, r, a) => (0, i.iy)(t, a.id, r),
            { refreshInterval: 1e4 }
          );
        return (
          (0, c.useEffect)(() => {
            (async function () {
              if (!T) return;
              let e = [];
              for (let r of T) {
                let { reward: n, bonusReward: o } =
                  await a.callStatic.collectRewards([u, d, g.id, h], r.id, {
                    from: t,
                  });
                e.push(f(f({}, r), {}, { reward: n, bonusReward: o }));
              }
              s(e);
            })();
          }, [T, S, t]),
          { data: l, error: m, loading: !T && !m }
        );
      }
      function b(e) {
        let { chainId: t, account: r } = (0, o.Z)(),
          { data: a } = (0, n.ZP)(
            t && r && ["unclaimedRewards", t, r, e],
            (e, t, r) => (0, i.gE)(r, t)
          );
        return a;
      }
      function k(e) {
        let { chainId: t } = (0, o.Z)(),
          { data: r } = (0, n.ZP)(
            t && e && ["positionOnFarming", t, e],
            (e, t, r) => (0, i.do)(r, t)
          );
        return E(r && r.eternalFarming && r.pool);
      }
      function E(e) {
        let { chainId: t } = (0, o.Z)(),
          { data: r } = (0, n.ZP)(
            t && e && ["eternalFarmingDataFromPoolId", t, e],
            (e, t, r) => (0, i.R4)([r], t)
          );
        return r && r[0];
      }
      var y = r(727484),
        A = r.n(y),
        w = r(719208);
      function I(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(r), !0).forEach(function (t) {
                (0, a.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : I(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function v(e) {
        let { data: t, error: r } = (0, n.ZP)(
          ["latestBlock_Farms", e],
          (e, t) => (0, i.Xi)(t),
          h
        );
        return t ? t?._meta?.block : void 0;
      }
      function N(e) {
        let { data: t, error: r } = (0, n.ZP)(
          ["latestBlock_Blocks", e],
          (e, t) => (0, i.q3)(t),
          h
        );
        return t ? t?._meta?.block : void 0;
      }
      function O(e, t) {
        let r = (function (e) {
            let { data: t, error: r } = (0, n.ZP)(
              ["v3NativePrice", e],
              (e, t) => (0, i.$Z)(t),
              h
            );
            return t;
          })(t),
          a = (function (e, t) {
            let { data: r, error: a } = (0, n.ZP)(
              ["tokensFromAddresses", e, t],
              (e, t, r) => (0, i.JY)(t, r),
              h
            );
            return r;
          })(e, t);
        if (r && r.maticPriceUSD && a) {
          let t = {};
          return (
            a.forEach((e) => {
              let a = Number(e.derivedMatic),
                n = Number(r.maticPriceUSD);
              t[e.id] = a * n;
            }),
            e.map((e) => t[e])
          );
        }
        return [];
      }
      function L(e) {
        return "string" == typeof e
          ? {}
          : e
          ? e.reduce((e, t) => ((e[t.id] = t), e), {})
          : {};
      }
      function U(e) {
        let { chainId: t } = (0, o.Z)(),
          { data: r } = (0, n.ZP)(
            t && e && ["fetchInfoToken", t, e],
            (e, t, r) => (0, i.qB)(t, r),
            h
          );
        return r;
      }
      function D() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0;
        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        let r = e && t,
          { data: a } = (0, n.ZP)(
            r ? [e, "v3Pool"] : null,
            (e) => (0, i.kI)(e, t),
            { refreshInterval: 6e4 }
          );
        return a;
      }
      function F() {
        let { chainId: e } = (0, o.Z)(),
          t = !!e,
          [r, a, u] = R(),
          { blocks: c, error: d } = $([r, a, u]),
          [p, g, f] = c?.sort((e, t) => +t.timestamp - +e.timestamp) ?? [],
          { data: T, error: m } = (0, n.ZP)(
            t ? [e, "v3InfoPools"] : null,
            (e) => (0, i.pd)(e),
            h
          ),
          { data: S, error: b } = (0, n.ZP)(
            T ? [e, ...T] : null,
            function (e) {
              for (
                var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1;
                a < t;
                a++
              )
                r[a - 1] = arguments[a];
              return (0, i.C0)(r, e);
            },
            h
          ),
          k = S?.map((e) => e.id),
          [E, y, A] = [p, g, f].sort((e, t) => +t.timestamp - +e.timestamp),
          { data: w, error: I } = (0, n.ZP)(
            T ? [E, e, ...T] : null,
            function (e, t) {
              for (
                var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), n = 2;
                n < r;
                n++
              )
                a[n - 2] = arguments[n];
              return (0, i.C0)(a, t, e.number);
            },
            h
          ),
          { data: v, error: N } = (0, n.ZP)(
            T ? [y, e, ...T] : null,
            function (e, t) {
              for (
                var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), n = 2;
                n < r;
                n++
              )
                a[n - 2] = arguments[n];
              return (0, i.C0)(a, t, e.number);
            },
            h
          ),
          { data: C, error: O } = (0, n.ZP)(
            T ? [A, e, ...T] : null,
            function (e, t) {
              for (
                var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), n = 2;
                n < r;
                n++
              )
                a[n - 2] = arguments[n];
              return (0, i.C0)(a, t, e.number);
            },
            h
          ),
          { data: U } = l(e),
          { data: D } = (function (e) {
            let { data: t, error: r } = (0, n.ZP)([e, "v3PoolsMaxAPRs"], i.ME, {
              refreshInterval: 3e4,
            });
            return { data: t, error: r, loading: !t && !r };
          })(e),
          { data: F } = s(e),
          { data: M } = (function (e) {
            let { data: t, error: r } = (0, n.ZP)(
              [e, "v3FarmingsMaxAPRs"],
              i.lG,
              { refreshInterval: 3e4 }
            );
            return { data: t, error: r, loading: !t && !r };
          })(e),
          { data: _, error: x } = (0, n.ZP)(
            T ? ["v3EtenralFarmingsFromPools", e, ...T] : null,
            function (e, t) {
              for (
                var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), n = 2;
                n < r;
                n++
              )
                a[n - 2] = arguments[n];
              return (0, i.R4)(a, t);
            },
            h
          );
        if (!T || !S || !U || !D || !F || !M)
          return { data: void 0, loading: !0, error: null };
        let B = L(S),
          Z = w ? L(w) : {},
          V = v ? L(v) : {},
          K = C ? L(C) : {};
        return {
          data: Object.values(
            k?.reduce((e, t, r) => {
              let a = B[t],
                n = Z[t],
                o = V[t],
                i = K[t],
                l = (a.volumeUSD, "volumeUSD"),
                s = (a.totalValueLockedUSD, "totalValueLockedUSD"),
                [u, c] =
                  a && n && o
                    ? (function (e, t, r) {
                        let a = parseFloat(e) - parseFloat(t),
                          n = parseFloat(t) - parseFloat(r),
                          o = ((a - n) / n) * 100;
                        return isNaN(o) || !isFinite(o) ? [a, 0] : [a, o];
                      })(a[l], n[l], o[l])
                    : a && n
                    ? [parseFloat(a[l]) - parseFloat(n[l]), 0]
                    : a
                    ? [parseFloat(a[l]), 0]
                    : [0, 0],
                d =
                  a && i
                    ? parseFloat(a[l]) - parseFloat(i[l])
                    : a
                    ? parseFloat(a[l])
                    : 0,
                p = a ? parseFloat(a[l]) : 0,
                g =
                  a && n
                    ? parseFloat(a.txCount) - parseFloat(n.txCount)
                    : a
                    ? parseFloat(a.txCount)
                    : 0,
                f =
                  a && n
                    ? parseFloat(a.feesUSD) - parseFloat(n.feesUSD)
                    : a
                    ? parseFloat(a.feesUSD)
                    : 0,
                h = a ? parseFloat(a[s]) : 0,
                T = q(a ? a[s] : void 0, n ? n[s] : void 0),
                m = _?.reduce(
                  (e, t) => P(P({}, e), {}, { [t.pool]: F[t.id] }),
                  {}
                ),
                S = _?.reduce(
                  (e, t) => P(P({}, e), {}, { [t.pool]: M[t.id] }),
                  {}
                ),
                b = U[t] ? U[t] : 0,
                k = m && m[t?.toLowerCase()] ? +m[t?.toLowerCase()] : 0,
                E = D[t] ? D[t] : 0,
                y = S && S[t?.toLowerCase()] ? +S[t?.toLowerCase()] : 0,
                A = {
                  averagePool: b,
                  averageFarming: k < 0 ? 0 : k,
                  maxPool: E,
                  maxFarming: y < 0 ? 0 : y,
                };
              return (
                (e[t] = {
                  pair: {
                    token0: a.token0,
                    token1: a.token1,
                    id: a.id,
                    fee: a.fee,
                    farming: _?.some((e) => e.pool === a.id),
                    version: "V3",
                    volume1D: u,
                    fees1D: f,
                    liquidity: h,
                    aprs: A,
                  },
                  fee: a.fee,
                  exists: !!a,
                  address: t,
                  volumeUSD: u,
                  volumeUSDChange: c,
                  volumeUSDWeek: d,
                  volumeUSDMonth: p,
                  tvlUSD: h,
                  txCount: g,
                  tvlUSDChange: T,
                  feesCollected: f,
                  aprs: A,
                }),
                e
              );
            }, {})
          ),
          loading: !1,
          error: null,
        };
      }
      function M() {
        let { chainId: e, account: t } = (0, o.Z)(),
          r = !!e,
          { data: a, error: l } = (0, n.ZP)(
            r ? [e, "v3MyPools"] : null,
            (e) => (0, i.pg)(e, { account: t.toLowerCase() }),
            { refreshInterval: 5e3 }
          );
        return l
          ? { data: void 0, loading: !1, error: l }
          : a
          ? { data: a, loading: !1, error: !1 }
          : { data: void 0, loading: !0, error: null };
      }
      function _(e) {
        let { chainId: t, account: r } = (0, o.Z)(),
          [a, u, c] = R(),
          { blocks: d, error: p } = $([a, u, c]),
          [g, f, T] = d?.sort((e, t) => +t.timestamp - +e.timestamp) ?? [],
          { data: m } = s(t),
          { data: S } = l(t),
          { data: b } = (0, n.ZP)(
            e ? ["v3EtenralFarmingsFromPools", t, e] : null,
            (e, t, r) => (0, i.R4)([r], t),
            h
          ),
          { data: k, error: E } = (0, n.ZP)(
            ["v3NativePrice", t],
            (e, t) => (0, i.$Z)(t),
            h
          ),
          { data: y, error: A } = (0, n.ZP)(
            ["v3MyLiquidityInPool", t, r, e],
            (e, t, r, a) => (0, i.y$)(t, r, a),
            h
          ),
          { data: w, error: I } = (0, n.ZP)(
            ["v3TotalStats", t, e],
            (e, t, r) => (0, i.ZZ)(t, r),
            h
          ),
          { data: v, error: N } = (0, n.ZP)(
            ["v3TotalStats24", t, e, g],
            (e, t, r, a) => (0, i.ZZ)(t, r, a.number),
            h
          ),
          C = p || I || N || E;
        if (C) return { data: void 0, loading: !1, error: C };
        if (!w || !k || !m || !S || !b)
          return { data: void 0, loading: !0, error: null };
        let O =
            w && v
              ? parseFloat(w?.volumeUSD) - parseFloat(v?.volumeUSD)
              : parseFloat(w?.volumeUSD),
          L =
            w && v
              ? parseFloat(w.txCount) - parseFloat(v.txCount)
              : w
              ? parseFloat(w.txCount)
              : 0,
          U =
            w && v
              ? parseFloat(w.feesUSD) - parseFloat(v.feesUSD)
              : w
              ? parseFloat(w.feesUSD)
              : 0,
          D =
            (Number(k.maticPriceUSD) || 0) *
            (Number(w?.token0.derivedMatic) || 0),
          F =
            (Number(k.maticPriceUSD) || 0) *
            (Number(w?.token1.derivedMatic) || 0),
          M = y
            ? y.reduce(
                (e, t) =>
                  e +
                  D * Number(t.depositedToken0) +
                  F * Number(t.depositedToken1),
                0
              )
            : 0,
          _ = b?.reduce((e, t) => P(P({}, e), {}, { [t.pool]: m[t.id] }), {}),
          x = S[e] ? S[e].toFixed(2) : 0,
          q = _[e?.toLowerCase()] ? +_[e?.toLowerCase()].toFixed(2) : 0;
        return {
          data: {
            tvlUSD: parseFloat(w?.totalValueLockedUSD),
            volumeUSD: O,
            txCount: L,
            feesCollected: U,
            myLiquidity: M,
            aprPercent: x,
            farmingAprPercent: q,
          },
          loading: !1,
          error: null,
        };
      }
      function R() {
        let e = A()(),
          t = e.subtract(1, "day").startOf("minute").unix();
        return [
          t,
          e.subtract(2, "day").startOf("minute").unix(),
          e.subtract(1, "week").startOf("minute").unix(),
          e.subtract(1, "month").startOf("minute").unix(),
        ];
      }
      function $(e) {
        let { chainId: t } = (0, o.Z)(),
          { 0: r, 1: a } = (0, c.useState)(),
          { 0: n, 1: i } = (0, c.useState)(!1),
          { blockClient: l } = (0, w.av)(),
          s = r?.[t];
        return (
          (0, c.useEffect)(() => {
            async function o() {
              let n = await x(d.FC, l, [], e);
              n ? a(P(P({}, r ?? {}), {}, { [t]: n })) : i(!0);
            }
            s || n || o();
          }),
          {
            blocks: (0, c.useMemo)(() => {
              if (r?.[t]) {
                let e = r?.[t],
                  a = [];
                for (let t in e)
                  e[t].length > 0 &&
                    a.push({
                      timestamp: t.split("t")[1],
                      number: e[t][0].number,
                    });
                return a;
              }
            }, [t, r]),
            error: n,
          }
        );
      }
      async function x(e, t, r, a) {
        let n =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : 1e3,
          o = {},
          i = !1,
          l = 0;
        try {
          for (; !i; ) {
            let s = a.length;
            l + n < a.length && (s = l + n);
            let u = a.slice(l, s),
              c = await t.query({
                query: e(...r, u),
                fetchPolicy: "network-only",
              });
            (o = P(P({}, o), c.data)),
              Object.keys(c.data).length < n || l + n > a.length
                ? (i = !0)
                : (l += n);
          }
          return o;
        } catch (e) {
          console.log(e);
          return;
        }
      }
      let q = (e, t) => {
        if (e && t) {
          let r = ((parseFloat(e) - parseFloat(t)) / parseFloat(t)) * 100;
          if (isFinite(r)) return r;
        }
        return 0;
      };
      async function B(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 500;
        if (e?.length === 0) return [];
        let a = await x(d.FC, t, [], e, r),
          n = [];
        if (a)
          for (let e in a)
            a[e].length > 0 &&
              n.push({ timestamp: e.split("t")[1], number: a[e][0].number });
        return n;
      }
      function Z(e, t) {
        let { data: r } = (0, n.ZP)(
          e && t && ["poolFeesData", e, t],
          (e, t, r) => (0, i.ck)(t, r)
        );
        return r;
      }
      function V(e) {
        let { data: t } = (0, n.ZP)(
          ["v3NativePrice", e],
          (e, t) => (0, i.$Z)(t),
          h
        );
        return t;
      }
      function K(e) {
        let { chainId: t, variables: r, shouldFetch: a = !0, swrConfig: o } = e,
          { data: l } = (0, n.ZP)(
            a && t ? ["dayData", t] : null,
            (e, t) => (0, i.JV)(t),
            o
          );
        return l;
      }
    },
    764763: function (e, t, r) {
      "use strict";
      r.d(t, {
        Pw: function () {
          return d;
        },
        eV: function () {
          return l;
        },
        B5: function () {
          return p;
        },
        Vr: function () {
          return g;
        },
        VZ: function () {
          return s;
        },
        mM: function () {
          return u;
        },
        Jq: function () {
          return n;
        },
        Oz: function () {
          return c;
        },
        We: function () {
          return h;
        },
        FC: function () {
          return w;
        },
        Y5: function () {
          return k;
        },
        MI: function () {
          return I;
        },
        JO: function () {
          return T;
        },
        wW: function () {
          return v;
        },
        B$: function () {
          return b;
        },
        M7: function () {
          return A;
        },
        sN: function () {
          return S;
        },
        MO: function () {
          return y;
        },
        J8: function () {
          return E;
        },
        Mv: function () {
          return P;
        },
        Gj: function () {
          return i;
        },
        R0: function () {
          return o;
        },
      });
      var a = r(228687);
      a.gql`
  query popularPools {
    pools(orderBy: totalValueLockedUSD, orderDirection: desc, first: 5) {
      token0 {
        id
      }
      token1 {
        id
      }
    }
  }
`;
      let n = a.gql`
  query allV3Ticks($poolAddress: String!, $skip: Int!) {
    ticks(first: 1000, skip: $skip, where: { poolAddress: $poolAddress }, orderBy: tickIdx) {
      tickIdx
      liquidityNet
      liquidityGross
      price0
      price1
    }
  }
`;
      a.gql`
  query fetchToken($tokenId: ID) {
    token(id: $tokenId) {
      id
      symbol
      name
      decimals
    }
  }
`;
      let o = a.gql`
  query topPools {
    pools(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
      id
    }
  }
`,
        i = a.gql`
  query myPools($account: String!) {
    positions(where: { owner: $account, liquidity_not: 0 }) {
      pool {
        id
      }
    }
  }
`,
        l = (e, t) => {
          let r = "[";
          t.map((e) => (r += `"${e}",`)), (r += "]");
          let n =
            `
      query pools {
        pools(where: {id_in: ${r}},` +
            (e ? `block: {number: ${e}} ,` : "") +
            ` orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
          id
          fee
          liquidity
          sqrtPrice
          tick
          token0 {
              id
              symbol
              name
              decimals
              derivedMatic
          }
          token1 {
              id
              symbol
              name
              decimals
              derivedMatic
          }
          token0Price
          token1Price
          volumeUSD
          txCount
          totalValueLockedToken0
          totalValueLockedToken1
          totalValueLockedUSD
          totalValueLockedUSDUntracked
          untrackedVolumeUSD
          feesUSD
        }
      }
      `;
          return a.gql`
    ${n}
  `;
        };
      a.gql`
  query feeHourData($pool: String, $startTimestamp: BigInt, $endTimestamp: BigInt) {
    feeHourDatas(first: 1000, where: { pool: $pool, timestamp_gte: $startTimestamp, timestamp_lte: $endTimestamp }) {
      id
      pool
      fee
      changesCount
      timestamp
      minFee
      maxFee
      startFee
      endFee
    }
  }
`,
        a.gql`
  query poolHourData($pool: String, $startTimestamp: Int, $endTimestamp: Int) {
    poolHourDatas(
      first: 1000
      where: { pool: $pool, periodStartUnix_gte: $startTimestamp, periodStartUnix_lte: $endTimestamp }
      orderBy: periodStartUnix
      orderDirection: asc
      subgraphError: allow
    ) {
      periodStartUnix
      volumeUSD
      tvlUSD
      feesUSD
      untrackedVolumeUSD
      token0Price
      token1Price
    }
  }
`,
        a.gql`
  query lastFeeHourData($pool: String) {
    feeHourDatas(first: 1, orderBy: timestamp, orderDirection: desc, where: { pool: $pool }) {
      id
      pool
      fee
      changesCount
      timestamp
      minFee
      maxFee
      startFee
      endFee
    }
  }
`,
        a.gql`
  query lastNotEmptyHourData($pool: String, $timestamp: BigInt) {
    feeHourDatas(first: 1, orderBy: timestamp, orderDirection: desc, where: { pool: $pool, timestamp_lt: $timestamp }) {
      id
      pool
      fee
      changesCount
      timestamp
      minFee
      maxFee
      startFee
      endFee
    }
  }
`,
        a.gql`
  query lastNotEmptyPoolHourData($pool: String, $timestamp: Int) {
    poolHourDatas(
      first: 1
      orderBy: periodStartUnix
      orderDirection: desc
      where: { pool: $pool, periodStartUnix_lt: $timestamp }
    ) {
      periodStartUnix
      volumeUSD
      tvlUSD
      feesUSD
      untrackedVolumeUSD
      token1Price
      token0Price
    }
  }
`,
        a.gql`
  query lastPoolHourData($pool: String) {
    poolHourDatas(first: 1, where: { pool: $pool }, orderBy: periodStartUnix, orderDirection: desc) {
      periodStartUnix
      volumeUSD
      tvlUSD
      feesUSD
      untrackedVolumeUSD
    }
  }
`,
        a.gql`
  query topTokens {
    tokens(first: 50, orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
      id
    }
  }
`;
      let s = (e, t) => {
          let r = "[";
          t.map((e) => (r += `"${e}",`)), (r += "]");
          let n =
            `
      query tokens {
        tokens(where: {id_in: ${r}},` +
            (e ? `block: {number: ${e}} ,` : "") +
            ` orderBy: totalValueLockedUSD, orderDirection: desc, subgraphError: allow) {
          id
          symbol
          name
          derivedMatic
          volumeUSD
          volume
          txCount
          totalValueLocked
          untrackedVolumeUSD
          feesUSD
          totalValueLockedUSD
          totalValueLockedUSDUntracked
        }
      }
      `;
          return a.gql`
    ${n}
  `;
        },
        u = (e, t) => {
          let r = `
  query totalPoolStats {
    pool ( id: "${e}" ${t ? `block: { number: ${t} }` : ""} ) {
      volumeUSD
      untrackedVolumeUSD
      totalValueLockedUSD
      totalValueLockedUSDUntracked
      txCount
      feesUSD
      token0 {
        derivedMatic
      }
      token1 {
        derivedMatic
      }
    }
  }
`;
          return a.gql`
    ${r}
  `;
        },
        c = a.gql`
  query bundleQuery {
    bundle(id: 1) {
      maticPriceUSD
    }
  }
`,
        d = (e, t) => a.gql`
  query myPositionsTVL {
    positions (where: { owner: "${e}", pool: "${t}", liquidity_not: 0 }) {
      depositedToken0
      depositedToken1
    }
  }
`,
        p = (e) => a.gql`
  query PoolFeeData {
    poolDayDatas(where: { pool: "${e}" }, orderBy: date, orderDirection: desc, first: 1) {
      feesUSD
    }
    pool(id: "${e}") {
      token0 {
        derivedMatic
      }
      token1 {
        derivedMatic
      }
    }
  }
`,
        g = (e) => a.gql`
  query PositionById {
    position (id: ${e}) {
      liquidity
      tickLower {
        tickIdx
      }
      tickUpper {
        tickIdx
      }
    }
  }
`,
        f = a.gql`
  fragment dayDataFields on AlgebraDayData {
    id
    date
    volumeETH: volumeMatic
    volumeUSD
    untrackedVolume: volumeUSDUntracked
    liquidityUSD: tvlUSD
    liquidityETH: tvlUSD
    txCount
    feesUSD
  }
`,
        h = a.gql`
  query dayDatasQuery($first: Int! = 1000, $date: Int! = 0, $where: AlgebraDayData_filter) {
    algebraDayDatas(first: $first, orderBy: date, orderDirection: desc, where: $where) {
      ...dayDataFields
    }
  }
  ${f}
`,
        T = a.gql`
  query getBlocks {
    _meta {
      block {
        number
        timestamp
      }
    }
  }
`;
      var m = r(31230);
      let S = (e) => m.ZP`
  query fetchToken($tokenId: ID) {
    token(id: $tokenId) {
      id
      symbol
      name
      decimals
      ${e ? "" : "derivedMatic"}
    }
  }
`,
        b = m.ZP`
  query fetchPool($poolId: ID) {
    pool(id: $poolId) {
      id
      fee
      token0 {
        id
        decimals
        symbol
      }
      token1 {
        id
        decimals
        symbol
      }
      sqrtPrice
      liquidity
      tick
      tickSpacing
      feesUSD
      untrackedFeesUSD
      totalValueLockedToken0
      totalValueLockedToken1
    }
  }
`,
        k = m.ZP`
  query fetchEternalFarmings {
    eternalFarmings {
      id
      rewardToken
      bonusRewardToken
      pool
      reward
      bonusReward
      rewardRate
      bonusRewardRate
      nonce
      isDeactivated
    }
  }
`,
        E = m.ZP`
  query transferedPositions($account: Bytes, $poolId: String) {
    deposits(orderBy: id, orderDirection: desc, where: { owner: $account, pool: $poolId, eternalFarming_not: null, liquidity_not: 0 }) {
      id
      owner
      pool
      eternalFarming
      rangeLength
    }
  }
`;
      m.ZP`
  query positionsOnEternalFarming($account: Bytes) {
    deposits(orderBy: id, orderDirection: desc, where: { owner: $account, eternalFarming_not: null }) {
      id
      owner
      pool
      eternalFarming
      enteredInEternalFarming
    }
  }
`;
      let y = m.ZP`
  query transferedPositionsForPool($account: Bytes, $poolId: Bytes) {
    deposits(where: { owner: $account, pool: $poolId, liquidity_not: "0" }) {
      id
      owner
      pool
      eternalFarming
      rangeLength
    }
  }
`,
        A = m.ZP`
  query fetchPositionOnFarming($positionId: ID!) {
    deposit(id: $positionId) {
      eternalFarming
      pool
    }
  }
`;
      m.ZP`
  query surroundingTicks($poolAddress: String!, $tickIdxLowerBound: BigInt!, $tickIdxUpperBound: BigInt!, $skip: Int!) {
    ticks(
      subgraphError: allow
      first: 1000
      skip: $skip
      where: { poolAddress: $poolAddress, tickIdx_lte: $tickIdxUpperBound, tickIdx_gte: $tickIdxLowerBound }
    ) {
      tickIdx
      liquidityGross
      liquidityNet
      price0
      price1
    }
  }
`;
      let w = (e) => {
          let t = "query blocks {";
          return (
            (t +=
              e.map(
                (
                  e
                ) => `t${e}:blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ${e}, timestamp_lt: ${
                  e + 600
                } }) {
          number
        }`
              ) + "}"),
            (0, m.ZP)(t)
          );
        },
        I = (e) => {
          let t = "[";
          e.map((e) => (t += `"${e}",`)), (t += "]");
          let r = `
      query eternalFarmingsFromPools {
        eternalFarmings(where: {pool_in: ${t}, isDeactivated: false}) {
          id
          rewardToken
          bonusRewardToken
          pool
          reward
          bonusReward
          rewardRate
          bonusRewardRate
          isDeactivated
          nonce
          virtualPool
        }
      }
      `;
          return (0, m.ZP)(r);
        },
        P = m.ZP`
  query unclaimedRewards($account: BigInt!) {
    rewards(where: { owner: $account, amount_gt: 0 }) {
      amount
      rewardAddress
    }
  }
`,
        v = m.ZP`
  query getBlocks {
    _meta {
      block {
        number
        timestamp
      }
    }
  }
`;
    },
    719208: function (e, t, r) {
      "use strict";
      r.d(t, {
        av: function () {
          return c;
        },
      });
      var a = r(946252),
        n = r(821259),
        o = r(341276),
        i = r(939507),
        l = r(747304);
      let s = (e) =>
        new a.f({
          uri: e,
          cache: new n.h(),
          queryDeduplication: !0,
          defaultOptions: {
            watchQuery: { fetchPolicy: "no-cache" },
            query: { fetchPolicy: "no-cache", errorPolicy: "all" },
          },
        });
      new a.f({
        uri: "https://api.thegraph.com/index-node/graphql",
        cache: new n.h(),
      });
      let u = {
        info: {
          [o.ChainId.MANTLE]: s(
            (0, l.getSubgraphUrl)(l.SUBGRAPH_NAMES.ANALYTICS, o.ChainId.MANTLE)
          ),
          [o.ChainId.MANTLE_TESTNET]: s(
            (0, l.getSubgraphUrl)(
              l.SUBGRAPH_NAMES.ANALYTICS,
              o.ChainId.MANTLE_TESTNET
            )
          ),
          [o.ChainId.TELOS]: s(
            (0, l.getSubgraphUrl)(l.SUBGRAPH_NAMES.ANALYTICS, o.ChainId.TELOS)
          ),
          [o.ChainId.TELOS_TESTNET]: s(
            (0, l.getSubgraphUrl)(
              l.SUBGRAPH_NAMES.ANALYTICS,
              o.ChainId.TELOS_TESTNET
            )
          ),
          [o.ChainId.TAIKO]: s(
            (0, l.getSubgraphUrl)(l.SUBGRAPH_NAMES.ANALYTICS, o.ChainId.TAIKO)
          ),
          [o.ChainId.TAIKO_TESTNET]: s(
            (0, l.getSubgraphUrl)(
              l.SUBGRAPH_NAMES.ANALYTICS,
              o.ChainId.TAIKO_TESTNET
            )
          ),
        },
        farming: {
          [o.ChainId.MANTLE]: s(
            (0, l.getSubgraphUrl)(l.SUBGRAPH_NAMES.FARMS, o.ChainId.MANTLE)
          ),
          [o.ChainId.MANTLE_TESTNET]: s(
            (0, l.getSubgraphUrl)(
              l.SUBGRAPH_NAMES.FARMS,
              o.ChainId.MANTLE_TESTNET
            )
          ),
          [o.ChainId.TELOS]: s(
            (0, l.getSubgraphUrl)(l.SUBGRAPH_NAMES.FARMS, o.ChainId.TELOS)
          ),
          [o.ChainId.TELOS_TESTNET]: s(
            (0, l.getSubgraphUrl)(
              l.SUBGRAPH_NAMES.FARMS,
              o.ChainId.TELOS_TESTNET
            )
          ),
          [o.ChainId.TAIKO]: s(
            (0, l.getSubgraphUrl)(l.SUBGRAPH_NAMES.FARMS, o.ChainId.TAIKO)
          ),
          [o.ChainId.TAIKO_TESTNET]: s(
            (0, l.getSubgraphUrl)(
              l.SUBGRAPH_NAMES.FARMS,
              o.ChainId.TAIKO_TESTNET
            )
          ),
        },
        blocks: {
          [o.ChainId.MANTLE]: s(
            (0, l.getSubgraphUrl)(l.SUBGRAPH_NAMES.BLOCKS, o.ChainId.MANTLE)
          ),
          [o.ChainId.MANTLE_TESTNET]: s(
            (0, l.getSubgraphUrl)(
              l.SUBGRAPH_NAMES.BLOCKS,
              o.ChainId.MANTLE_TESTNET
            )
          ),
          [o.ChainId.TELOS]: s(
            (0, l.getSubgraphUrl)(l.SUBGRAPH_NAMES.BLOCKS, o.ChainId.TELOS)
          ),
          [o.ChainId.TELOS_TESTNET]: s(
            (0, l.getSubgraphUrl)(
              l.SUBGRAPH_NAMES.BLOCKS,
              o.ChainId.TELOS_TESTNET
            )
          ),
          [o.ChainId.TAIKO]: s(
            (0, l.getSubgraphUrl)(l.SUBGRAPH_NAMES.BLOCKS, o.ChainId.TAIKO)
          ),
          [o.ChainId.TAIKO_TESTNET]: s(
            (0, l.getSubgraphUrl)(
              l.SUBGRAPH_NAMES.BLOCKS,
              o.ChainId.TAIKO_TESTNET
            )
          ),
        },
      };
      function c() {
        return {
          dataClient: (function () {
            let { chainId: e } = (0, i.Z)();
            return e in u.info ? u.info[e] : u.info[o.ChainId.MANTLE_TESTNET];
          })(),
          farmingClient: (function () {
            let { chainId: e } = (0, i.Z)();
            return e in u.farming
              ? u.farming[e]
              : u.farming[o.ChainId.MANTLE_TESTNET];
          })(),
          blockClient: (function () {
            let { chainId: e } = (0, i.Z)();
            return e in u.blocks
              ? u.blocks[e]
              : u.blocks[o.ChainId.MANTLE_TESTNET];
          })(),
        };
      }
    },
  },
]);
