var t = function(t) {
    return t instanceof Date;
  },
  e = 36e5,
  a = 6e4,
  s = 2,
  n = /[T ]/,
  r = /:/,
  i = /^(\d{2})$/,
  p = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  u = /^(\d{4})/,
  o = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  l = /^-(\d{2})$/,
  f = /^-?(\d{3})$/,
  c = /^-?(\d{2})-?(\d{2})$/,
  d = /^-?W(\d{2})$/,
  h = /^-?W(\d{2})-?(\d{1})$/,
  M = /^(\d{2}([.,]\d*)?)$/,
  v = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  D = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  g = /([Z+-].*)$/,
  I = /^(Z)$/,
  m = /^([+-])(\d{2})$/,
  x = /^([+-])(\d{2}):?(\d{2})$/;
function N(t, e, a) {
  (e = e || 0), (a = a || 0);
  var s = new Date(0);
  s.setUTCFullYear(t, 0, 4);
  var n = 7 * e + a + 1 - (s.getUTCDay() || 7);
  return s.setUTCDate(s.getUTCDate() + n), s;
}
var w = function(w, C) {
    if (t(w)) return new Date(w.getTime());
    if ('string' != typeof w) return new Date(w);
    var A = (C || {}).additionalDigits;
    A = null == A ? s : Number(A);
    var T = (function(t) {
        var e,
          a = {},
          s = t.split(n);
        if (
          (r.test(s[0])
            ? ((a.date = null), (e = s[0]))
            : ((a.date = s[0]), (e = s[1])),
          e)
        ) {
          var i = g.exec(e);
          i
            ? ((a.time = e.replace(i[1], '')), (a.timezone = i[1]))
            : (a.time = e);
        }
        return a;
      })(w),
      y = (function(t, e) {
        var a,
          s = p[e],
          n = o[e];
        if ((a = u.exec(t) || n.exec(t))) {
          var r = a[1];
          return { year: parseInt(r, 10), restDateString: t.slice(r.length) };
        }
        if ((a = i.exec(t) || s.exec(t))) {
          var l = a[1];
          return {
            year: 100 * parseInt(l, 10),
            restDateString: t.slice(l.length),
          };
        }
        return { year: null };
      })(T.date, A),
      S = (function(t, e) {
        if (null === e) return null;
        var a, s, n, r;
        if (0 === t.length) return (s = new Date(0)).setUTCFullYear(e), s;
        if ((a = l.exec(t)))
          return (
            (s = new Date(0)),
            (n = parseInt(a[1], 10) - 1),
            s.setUTCFullYear(e, n),
            s
          );
        if ((a = f.exec(t))) {
          s = new Date(0);
          var i = parseInt(a[1], 10);
          return s.setUTCFullYear(e, 0, i), s;
        }
        if ((a = c.exec(t))) {
          (s = new Date(0)), (n = parseInt(a[1], 10) - 1);
          var p = parseInt(a[2], 10);
          return s.setUTCFullYear(e, n, p), s;
        }
        if ((a = d.exec(t))) return (r = parseInt(a[1], 10) - 1), N(e, r);
        if ((a = h.exec(t))) {
          r = parseInt(a[1], 10) - 1;
          var u = parseInt(a[2], 10) - 1;
          return N(e, r, u);
        }
        return null;
      })(y.restDateString, y.year);
    if (S) {
      var O,
        $ = S.getTime(),
        U = 0;
      return (
        T.time &&
          (U = (function(t) {
            var s, n, r;
            if ((s = M.exec(t)))
              return ((n = parseFloat(s[1].replace(',', '.'))) % 24) * e;
            if ((s = v.exec(t)))
              return (
                (n = parseInt(s[1], 10)),
                (r = parseFloat(s[2].replace(',', '.'))),
                (n % 24) * e + r * a
              );
            if ((s = D.exec(t))) {
              (n = parseInt(s[1], 10)), (r = parseInt(s[2], 10));
              var i = parseFloat(s[3].replace(',', '.'));
              return (n % 24) * e + r * a + 1e3 * i;
            }
            return null;
          })(T.time)),
        T.timezone
          ? (O = (W = I.exec((F = T.timezone)))
              ? 0
              : (W = m.exec(F))
                ? ((V = 60 * parseInt(W[2], 10)), '+' === W[1] ? -V : V)
                : (W = x.exec(F))
                  ? ((V = 60 * parseInt(W[2], 10) + parseInt(W[3], 10)),
                    '+' === W[1] ? -V : V)
                  : 0)
          : ((O = new Date($ + U).getTimezoneOffset()),
            (O = new Date($ + U + O * a).getTimezoneOffset())),
        new Date($ + U + O * a)
      );
    }
    var F, W, V;
    return new Date(w);
  },
  C = {
    0: 'Jan.',
    1: 'Feb.',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'Aug.',
    8: 'Sept.',
    9: 'Oct.',
    10: 'Nov.',
    11: 'Dec.',
  };
function A(t) {
  var e = w(t || new Date());
  return C[e.getMonth()];
}
function T(t) {
  return null == t;
}
function y(t) {
  return 'number' == typeof t && isFinite(t);
}
function S(t) {
  return y(t) && Math.floor(t) === t;
}
var O = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
function $(t, e, a, s, n) {
  if (((e = e || !1), T(t))) return '';
  if ('string' != typeof t) return t;
  var r, i;
  e ? ((r = n), (i = s)) : ((r = s), (i = n));
  var p = (function(t, e) {
    if ('function' != typeof e)
      throw new TypeError('predicate must be a function');
    for (var a = 0; a < t.length; a++) if (e(t[a], a, t)) return t[a];
  })(a, function(e) {
    return e[r] === t;
  });
  if (!p) return t;
  var u = p[i];
  return 0 === u.length || T(u) ? t : u;
}
var U = [
  { state: 'Alabama', ap: 'Ala.', usps: 'AL' },
  { state: 'Alaska', ap: 'Alaska', usps: 'AK' },
  { state: 'Arizona', ap: 'Ariz.', usps: 'AZ' },
  { state: 'Arkansas', ap: 'Ark.', usps: 'AR' },
  { state: 'California', ap: 'Calif.', usps: 'CA' },
  { state: 'Colorado', ap: 'Colo.', usps: 'CO' },
  { state: 'Connecticut', ap: 'Conn.', usps: 'CT' },
  { state: 'Delaware', ap: 'Del.', usps: 'DE' },
  { state: 'District of Columbia', ap: 'D.C.', usps: 'DC' },
  { state: 'Florida', ap: 'Fla.', usps: 'FL' },
  { state: 'Georgia', ap: 'Ga.', usps: 'GA' },
  { state: 'Hawaii', ap: 'Hawaii', usps: 'HI' },
  { state: 'Idaho', ap: 'Idaho', usps: 'ID' },
  { state: 'Illinois', ap: 'Ill.', usps: 'IL' },
  { state: 'Indiana', ap: 'Ind.', usps: 'IN' },
  { state: 'Iowa', ap: 'Iowa', usps: 'IA' },
  { state: 'Kansas', ap: 'Kan.', usps: 'KS' },
  { state: 'Kentucky', ap: 'Ky.', usps: 'KY' },
  { state: 'Louisiana', ap: 'La.', usps: 'LA' },
  { state: 'Maine', ap: 'Maine', usps: 'ME' },
  { state: 'Maryland', ap: 'Md.', usps: 'MD' },
  { state: 'Massachusetts', ap: 'Mass.', usps: 'MA' },
  { state: 'Michigan', ap: 'Mich.', usps: 'MI' },
  { state: 'Minnesota', ap: 'Minn.', usps: 'MN' },
  { state: 'Mississippi', ap: 'Miss.', usps: 'MS' },
  { state: 'Missouri', ap: 'Mo.', usps: 'MO' },
  { state: 'Montana', ap: 'Mont.', usps: 'MT' },
  { state: 'Nebraska', ap: 'Neb.', usps: 'NE' },
  { state: 'Nevada', ap: 'Nev.', usps: 'NV' },
  { state: 'New Hampshire', ap: 'N.H.', usps: 'NH' },
  { state: 'New Jersey', ap: 'N.J.', usps: 'NJ' },
  { state: 'New Mexico', ap: 'N.M.', usps: 'NM' },
  { state: 'New York', ap: 'N.Y.', usps: 'NY' },
  { state: 'North Carolina', ap: 'N.C.', usps: 'NC' },
  { state: 'North Dakota', ap: 'N.D.', usps: 'ND' },
  { state: 'Ohio', ap: 'Ohio', usps: 'OH' },
  { state: 'Oklahoma', ap: 'Okla.', usps: 'OK' },
  { state: 'Oregon', ap: 'Ore.', usps: 'OR' },
  { state: 'Pennsylvania', ap: 'Pa.', usps: 'PA' },
  { state: 'Rhode Island', ap: 'R.I.', usps: 'RI' },
  { state: 'South Carolina', ap: 'S.C.', usps: 'SC' },
  { state: 'South Dakota', ap: 'S.D.', usps: 'SD' },
  { state: 'Tennessee', ap: 'Tenn.', usps: 'TN' },
  { state: 'Texas', ap: 'Texas', usps: 'TX' },
  { state: 'Utah', ap: 'Utah', usps: 'UT' },
  { state: 'Vermont', ap: 'Vt.', usps: 'VT' },
  { state: 'Virginia', ap: 'Va.', usps: 'VA' },
  { state: 'Washington', ap: 'Wash.', usps: 'WA' },
  { state: 'West Virginia', ap: 'W.Va.', usps: 'WV' },
  { state: 'Wisconsin', ap: 'Wis.', usps: 'WI' },
  { state: 'Wyoming', ap: 'Wyo.', usps: 'WY' },
  { state: 'American Samoa', ap: '', usps: 'AS' },
  { state: 'Guam', ap: '', usps: 'GU' },
  { state: 'Northern Mariana Islands', ap: '', usps: 'MP' },
  { state: 'Puerto Rico', ap: '', usps: 'PR' },
  { state: 'U.S. Minor Outlying Islands', ap: '', usps: 'UM' },
  { state: 'U.S. Virgin Islands', ap: '', usps: 'VI' },
];
var F = [
  'million',
  'billion',
  'trillion',
  'quadrillion',
  'quintillion',
  'sextillion',
  'septillion',
  'octillion',
  'nonillion',
  'decillion',
];
var W = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'],
  V = [11, 12, 13];
(exports.apdate = function(t) {
  var e = w(t || new Date());
  return A(e) + ' ' + e.getDate() + ', ' + e.getFullYear();
}),
  (exports.apmonth = A),
  (exports.apnumber = function(t) {
    if (T(t)) return '';
    var e = +t;
    return S(e) ? (e <= 0 || e >= 10 ? t : O[e - 1]) : t;
  }),
  (exports.apstate = function(t, e) {
    return $(t, e, U, 'state', 'ap');
  }),
  (exports.aptime = function(t) {
    var e,
      a,
      s = w(t || new Date()),
      n = s.getHours(),
      r = s.getMinutes(),
      i = 0 === r;
    if (i) {
      if (0 === n) return 'midnight';
      if (12 === n) return 'noon';
    }
    return (
      n < 12 ? ((e = 'a.m.'), (a = n)) : ((e = 'p.m.'), (a = n - 12)),
      i ? a + ' ' + e : a + ':' + (r < 10 ? '0' + r : r) + ' ' + e
    );
  }),
  (exports.intcomma = function(t) {
    if (T(t)) return '';
    var e,
      a = +t;
    return y(a)
      ? (((e = a.toString().split('.'))[0] = e[0].replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ','
        )),
        e.join('.'))
      : t;
  }),
  (exports.intword = function(t) {
    if (T(t)) return '';
    var e = +t;
    if (!S(e)) return t;
    if (e < 1e6) return t;
    var a = Math.ceil(Math.log(e + 1) / Math.LN10) - 1,
      s = a - a % 3,
      n = e / Math.pow(10, s);
    return (n = Math.round(10 * n) / 10) + ' ' + F[Math.floor(s / 3) - 2];
  }),
  (exports.ordinal = function(t) {
    if (T(t)) return '';
    var e = +t;
    return S(e) ? (V.indexOf(e % 100) > -1 ? e + W[0] : e + W[e % 10]) : t;
  }),
  (exports.postal = function(t, e) {
    return $(t, e, U, 'state', 'usps');
  });
//# sourceMappingURL=journalize.js.map