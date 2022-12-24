/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      846: (e, t, n) => {
        !(function () {
          "use strict";
          var t = n(131),
            s = n(181),
            r = {
              origin: "*",
              methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
              preflightContinue: !1,
              optionsSuccessStatus: 204,
            };
          function i(e) {
            return "string" == typeof e || e instanceof String;
          }
          function a(e, t) {
            if (Array.isArray(t)) {
              for (var n = 0; n < t.length; ++n) if (a(e, t[n])) return !0;
              return !1;
            }
            return i(t) ? e === t : t instanceof RegExp ? t.test(e) : !!t;
          }
          function o(e, t) {
            var n,
              s = t.headers.origin,
              r = [];
            return (
              e.origin && "*" !== e.origin
                ? i(e.origin)
                  ? (r.push([
                      { key: "Access-Control-Allow-Origin", value: e.origin },
                    ]),
                    r.push([{ key: "Vary", value: "Origin" }]))
                  : ((n = a(s, e.origin)),
                    r.push([
                      { key: "Access-Control-Allow-Origin", value: !!n && s },
                    ]),
                    r.push([{ key: "Vary", value: "Origin" }]))
                : r.push([{ key: "Access-Control-Allow-Origin", value: "*" }]),
              r
            );
          }
          function l(e) {
            return !0 === e.credentials
              ? { key: "Access-Control-Allow-Credentials", value: "true" }
              : null;
          }
          function c(e) {
            var t = e.exposedHeaders;
            return t
              ? (t.join && (t = t.join(",")),
                t && t.length
                  ? { key: "Access-Control-Expose-Headers", value: t }
                  : null)
              : null;
          }
          function d(e, t) {
            for (var n = 0, r = e.length; n < r; n++) {
              var i = e[n];
              i &&
                (Array.isArray(i)
                  ? d(i, t)
                  : "Vary" === i.key && i.value
                  ? s(t, i.value)
                  : i.value && t.setHeader(i.key, i.value));
            }
          }
          e.exports = function (e) {
            var n = null;
            return (
              (n =
                "function" == typeof e
                  ? e
                  : function (t, n) {
                      n(null, e);
                    }),
              function (e, s, i) {
                n(e, function (n, a) {
                  if (n) i(n);
                  else {
                    var u = t({}, r, a),
                      p = null;
                    u.origin && "function" == typeof u.origin
                      ? (p = u.origin)
                      : u.origin &&
                        (p = function (e, t) {
                          t(null, u.origin);
                        }),
                      p
                        ? p(e.headers.origin, function (t, n) {
                            t || !n
                              ? i(t)
                              : ((u.origin = n),
                                (function (e, t, n, s) {
                                  var r = [];
                                  "OPTIONS" ===
                                  (t.method &&
                                    t.method.toUpperCase &&
                                    t.method.toUpperCase())
                                    ? (r.push(o(e, t)),
                                      r.push(l(e)),
                                      r.push(
                                        (function (e) {
                                          var t = e.methods;
                                          return (
                                            t.join && (t = e.methods.join(",")),
                                            {
                                              key: "Access-Control-Allow-Methods",
                                              value: t,
                                            }
                                          );
                                        })(e)
                                      ),
                                      r.push(
                                        (function (e, t) {
                                          var n = e.allowedHeaders || e.headers,
                                            s = [];
                                          return (
                                            n
                                              ? n.join && (n = n.join(","))
                                              : ((n =
                                                  t.headers[
                                                    "access-control-request-headers"
                                                  ]),
                                                s.push([
                                                  {
                                                    key: "Vary",
                                                    value:
                                                      "Access-Control-Request-Headers",
                                                  },
                                                ])),
                                            n &&
                                              n.length &&
                                              s.push([
                                                {
                                                  key: "Access-Control-Allow-Headers",
                                                  value: n,
                                                },
                                              ]),
                                            s
                                          );
                                        })(e, t)
                                      ),
                                      r.push(
                                        (function (e) {
                                          var t =
                                            ("number" == typeof e.maxAge ||
                                              e.maxAge) &&
                                            e.maxAge.toString();
                                          return t && t.length
                                            ? {
                                                key: "Access-Control-Max-Age",
                                                value: t,
                                              }
                                            : null;
                                        })(e)
                                      ),
                                      r.push(c(e)),
                                      d(r, n),
                                      e.preflightContinue
                                        ? s()
                                        : ((n.statusCode =
                                            e.optionsSuccessStatus),
                                          n.setHeader("Content-Length", "0"),
                                          n.end()))
                                    : (r.push(o(e, t)),
                                      r.push(l(e)),
                                      r.push(c(e)),
                                      d(r, n),
                                      s());
                                })(u, e, s, i));
                          })
                        : i();
                  }
                });
              }
            );
          };
        })();
      },
      131: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          s = Object.prototype.propertyIsEnumerable;
        function r(e) {
          if (null == e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var s = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                s[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, s)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, i) {
              for (var a, o, l = r(e), c = 1; c < arguments.length; c++) {
                for (var d in (a = Object(arguments[c])))
                  n.call(a, d) && (l[d] = a[d]);
                if (t) {
                  o = t(a);
                  for (var u = 0; u < o.length; u++)
                    s.call(a, o[u]) && (l[o[u]] = a[o[u]]);
                }
              }
              return l;
            };
      },
      230: (e) => {
        e.exports = "object" == typeof self ? self.FormData : window.FormData;
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var s in n)
                      Object.prototype.hasOwnProperty.call(n, s) &&
                        (e[s] = n[s]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            n =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            s = t && "IntersectionObserver" in window,
            r = t && "classList" in document.createElement("p"),
            i = t && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: n || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            o = function (t) {
              return e({}, a, t);
            },
            l = function (e, t) {
              var n,
                s = "LazyLoad::Initialized",
                r = new e(t);
              try {
                n = new CustomEvent(s, { detail: { instance: r } });
              } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  s,
                  !1,
                  !1,
                  { instance: r }
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            p = "poster",
            f = "llOriginalAttrs",
            h = "data",
            m = "loading",
            g = "loaded",
            v = "applied",
            b = "error",
            w = "native",
            y = "data-",
            E = "ll-status",
            S = function (e, t) {
              return e.getAttribute(y + t);
            },
            C = function (e) {
              return S(e, E);
            },
            T = function (e, t) {
              return (function (e, t, n) {
                var s = "data-ll-status";
                null !== n ? e.setAttribute(s, n) : e.removeAttribute(s);
              })(e, 0, t);
            },
            x = function (e) {
              return T(e, null);
            },
            O = function (e) {
              return null === C(e);
            },
            _ = function (e) {
              return C(e) === w;
            },
            A = [m, g, v, b],
            L = function (e, t, n, s) {
              e &&
                (void 0 === s ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, s));
            },
            k = function (e, t) {
              r
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            P = function (e, t) {
              r
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            M = function (e) {
              return e.llTempImage;
            },
            $ = function (e, t) {
              if (t) {
                var n = t._observer;
                n && n.unobserve(e);
              }
            },
            I = function (e, t) {
              e && (e.loadingCount += t);
            },
            j = function (e, t) {
              e && (e.toLoadCount = t);
            },
            R = function (e) {
              for (var t, n = [], s = 0; (t = e.children[s]); s += 1)
                "SOURCE" === t.tagName && n.push(t);
              return n;
            },
            N = function (e, t) {
              var n = e.parentNode;
              n && "PICTURE" === n.tagName && R(n).forEach(t);
            },
            D = function (e, t) {
              R(e).forEach(t);
            },
            B = [c],
            z = [c, p],
            F = [c, d, u],
            G = [h],
            H = function (e) {
              return !!e[f];
            },
            q = function (e) {
              return e[f];
            },
            W = function (e) {
              return delete e[f];
            },
            V = function (e, t) {
              if (!H(e)) {
                var n = {};
                t.forEach(function (t) {
                  n[t] = e.getAttribute(t);
                }),
                  (e[f] = n);
              }
            },
            U = function (e, t) {
              if (H(e)) {
                var n = q(e);
                t.forEach(function (t) {
                  !(function (e, t, n) {
                    n ? e.setAttribute(t, n) : e.removeAttribute(t);
                  })(e, t, n[t]);
                });
              }
            },
            X = function (e, t, n) {
              k(e, t.class_applied),
                T(e, v),
                n &&
                  (t.unobserve_completed && $(e, t),
                  L(t.callback_applied, e, n));
            },
            Y = function (e, t, n) {
              k(e, t.class_loading),
                T(e, m),
                n && (I(n, 1), L(t.callback_loading, e, n));
            },
            J = function (e, t, n) {
              n && e.setAttribute(t, n);
            },
            K = function (e, t) {
              J(e, u, S(e, t.data_sizes)),
                J(e, d, S(e, t.data_srcset)),
                J(e, c, S(e, t.data_src));
            },
            Q = {
              IMG: function (e, t) {
                N(e, function (e) {
                  V(e, F), K(e, t);
                }),
                  V(e, F),
                  K(e, t);
              },
              IFRAME: function (e, t) {
                V(e, B), J(e, c, S(e, t.data_src));
              },
              VIDEO: function (e, t) {
                D(e, function (e) {
                  V(e, B), J(e, c, S(e, t.data_src));
                }),
                  V(e, z),
                  J(e, p, S(e, t.data_poster)),
                  J(e, c, S(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                V(e, G), J(e, h, S(e, t.data_src));
              },
            },
            Z = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                L(e.callback_finish, t);
            },
            te = function (e, t, n) {
              e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
            },
            ne = function (e, t, n) {
              e.removeEventListener(t, n);
            },
            se = function (e) {
              return !!e.llEvLisnrs;
            },
            re = function (e) {
              if (se(e)) {
                var t = e.llEvLisnrs;
                for (var n in t) {
                  var s = t[n];
                  ne(e, n, s);
                }
                delete e.llEvLisnrs;
              }
            },
            ie = function (e, t, n) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                I(n, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(n),
                P(e, t.class_loading),
                t.unobserve_completed && $(e, n);
            },
            ae = function (e, t, n) {
              var s = M(e) || e;
              se(s) ||
                (function (e, t, n) {
                  se(e) || (e.llEvLisnrs = {});
                  var s = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, s, t), te(e, "error", n);
                })(
                  s,
                  function (r) {
                    !(function (e, t, n, s) {
                      var r = _(t);
                      ie(t, n, s),
                        k(t, n.class_loaded),
                        T(t, g),
                        L(n.callback_loaded, t, s),
                        r || ee(n, s);
                    })(0, e, t, n),
                      re(s);
                  },
                  function (r) {
                    !(function (e, t, n, s) {
                      var r = _(t);
                      ie(t, n, s),
                        k(t, n.class_error),
                        T(t, b),
                        L(n.callback_error, t, s),
                        n.restore_on_error && U(t, F),
                        r || ee(n, s);
                    })(0, e, t, n),
                      re(s);
                  }
                );
            },
            oe = function (e, t, n) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, n) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      ae(e, t, n),
                      (function (e) {
                        H(e) ||
                          (e[f] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, n) {
                        var s = S(e, t.data_bg),
                          r = S(e, t.data_bg_hidpi),
                          a = i && r ? r : s;
                        a &&
                          ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                          M(e).setAttribute(c, a),
                          Y(e, t, n));
                      })(e, t, n),
                      (function (e, t, n) {
                        var s = S(e, t.data_bg_multi),
                          r = S(e, t.data_bg_multi_hidpi),
                          a = i && r ? r : s;
                        a && ((e.style.backgroundImage = a), X(e, t, n));
                      })(e, t, n),
                      (function (e, t, n) {
                        var s = S(e, t.data_bg_set);
                        if (s) {
                          var r = s.split("|"),
                            i = r.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = i.join()),
                            "" === e.style.backgroundImage &&
                              ((i = r.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = i.join())),
                            X(e, t, n);
                        }
                      })(e, t, n);
                  })(e, t, n)
                : (function (e, t, n) {
                    ae(e, t, n),
                      (function (e, t, n) {
                        var s = Q[e.tagName];
                        s && (s(e, t), Y(e, t, n));
                      })(e, t, n);
                  })(e, t, n);
            },
            le = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              N(e, function (e) {
                U(e, F);
              }),
                U(e, F);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                U(e, B);
              },
              VIDEO: function (e) {
                D(e, function (e) {
                  U(e, B);
                }),
                  U(e, z),
                  e.load();
              },
              OBJECT: function (e) {
                U(e, G);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (H(e)) {
                        var t = q(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  O(e) ||
                    _(e) ||
                    (P(e, t.class_entered),
                    P(e, t.class_exited),
                    P(e, t.class_applied),
                    P(e, t.class_loading),
                    P(e, t.class_loaded),
                    P(e, t.class_error));
                })(e, t),
                x(e),
                W(e);
            },
            pe = ["IMG", "IFRAME", "VIDEO"],
            fe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            he = function (e, t, n) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, n, s) {
                      var r = (function (e) {
                        return A.indexOf(C(e)) >= 0;
                      })(e);
                      T(e, "entered"),
                        k(e, n.class_entered),
                        P(e, n.class_exited),
                        (function (e, t, n) {
                          t.unobserve_entered && $(e, n);
                        })(e, n, s),
                        L(n.callback_enter, e, t, s),
                        r || oe(e, n, s);
                    })(e.target, e, t, n)
                  : (function (e, t, n, s) {
                      O(e) ||
                        (k(e, n.class_exited),
                        (function (e, t, n, s) {
                          n.cancel_on_exit &&
                            (function (e) {
                              return C(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (re(e),
                            (function (e) {
                              N(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            P(e, n.class_loading),
                            I(s, -1),
                            x(e),
                            L(n.callback_cancel, e, t, s));
                        })(e, t, n, s),
                        L(n.callback_exit, e, t, s));
                    })(e.target, e, t, n);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            ge = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return C(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return me(e).filter(O);
              })(e || ge(t));
            },
            we = function (e, n) {
              var r = o(e);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (e, t) {
                  s &&
                    !fe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (n) {
                        he(n, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(r, this),
                (function (e, n) {
                  t &&
                    ((n._onlineHandler = function () {
                      !(function (e, t) {
                        var n;
                        ((n = ge(e)), me(n).filter(ve)).forEach(function (t) {
                          P(t, e.class_error), x(t);
                        }),
                          t.update();
                      })(e, n);
                    }),
                    window.addEventListener("online", n._onlineHandler));
                })(r, this),
                this.update(n);
            };
          return (
            (we.prototype = {
              update: function (e) {
                var t,
                  r,
                  i = this._settings,
                  a = be(e, i);
                j(this, a.length),
                  !n && s
                    ? fe(i)
                      ? (function (e, t, n) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, n) {
                                e.setAttribute("loading", "lazy"),
                                  ae(e, t, n),
                                  (function (e, t) {
                                    var n = Q[e.tagName];
                                    n && n(e, t);
                                  })(e, t),
                                  T(e, w);
                              })(e, t, n);
                          }),
                            j(n, 0);
                        })(a, i, this)
                      : ((r = a),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, r))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  ge(this._settings).forEach(function (e) {
                    W(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  n = this._settings;
                be(e, n).forEach(function (e) {
                  $(e, t), oe(e, n, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                ge(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (we.load = function (e, t) {
              var n = o(t);
              oe(e, n);
            }),
            (we.resetStatus = function (e) {
              x(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var n, s = 0; (n = t[s]); s += 1) l(e, n);
                  else l(e, t);
              })(we, window.lazyLoadOptions),
            we
          );
        })();
      },
      181: (e) => {
        "use strict";
        (e.exports = function (e, t) {
          if (!e || !e.getHeader || !e.setHeader)
            throw new TypeError("res argument is required");
          var s = e.getHeader("Vary") || "",
            r = Array.isArray(s) ? s.join(", ") : String(s);
          (s = n(r, t)) && e.setHeader("Vary", s);
        }),
          (e.exports.append = n);
        var t = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
        function n(e, n) {
          if ("string" != typeof e)
            throw new TypeError("header argument is required");
          if (!n) throw new TypeError("field argument is required");
          for (
            var r = Array.isArray(n) ? n : s(String(n)), i = 0;
            i < r.length;
            i++
          )
            if (!t.test(r[i]))
              throw new TypeError(
                "field argument contains an invalid header name"
              );
          if ("*" === e) return e;
          var a = e,
            o = s(e.toLowerCase());
          if (-1 !== r.indexOf("*") || -1 !== o.indexOf("*")) return "*";
          for (var l = 0; l < r.length; l++) {
            var c = r[l].toLowerCase();
            -1 === o.indexOf(c) &&
              (o.push(c), (a = a ? a + ", " + r[l] : r[l]));
          }
          return a;
        }
        function s(e) {
          for (var t = 0, n = [], s = 0, r = 0, i = e.length; r < i; r++)
            switch (e.charCodeAt(r)) {
              case 32:
                s === t && (s = t = r + 1);
                break;
              case 44:
                n.push(e.substring(s, t)), (s = t = r + 1);
                break;
              default:
                t = r + 1;
            }
          return n.push(e.substring(s, t)), n;
        }
      },
    },
    t = {};
  function n(s) {
    var r = t[s];
    if (void 0 !== r) return r.exports;
    var i = (t[s] = { exports: {} });
    return e[s].call(i.exports, i, i.exports, n), i.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
        );
      },
    };
    let s = !0,
      r = (e = 500) => {
        let t = document.querySelector("body");
        if (s) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (s = !1),
            setTimeout(function () {
              s = !0;
            }, e);
        }
      },
      i = (e = 500) => {
        let t = document.querySelector("body");
        if (s) {
          let n = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (s = !1),
            setTimeout(function () {
              s = !0;
            }, e);
        }
      };
    function a(e) {
      return e.filter(function (e, t, n) {
        return n.indexOf(e) === t;
      });
    }
    function o(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function l(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : o(t[n]) && o(e[n]) && Object.keys(t[n]).length > 0 && l(e[n], t[n]);
      });
    }
    const c = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function d() {
      const e = "undefined" != typeof document ? document : {};
      return l(e, c), e;
    }
    const u = {
      document: c,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function p() {
      const e = "undefined" != typeof window ? window : {};
      return l(e, u), e;
    }
    class f extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function h(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...h(e)) : t.push(e);
        }),
        t
      );
    }
    function m(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function g(e, t) {
      const n = p(),
        s = d();
      let r = [];
      if (!t && e instanceof f) return e;
      if (!e) return new f(r);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = s.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            r.push(t.childNodes[e]);
        } else
          r = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              s = t.querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) n.push(s[e]);
            return n;
          })(e.trim(), t || s);
      } else if (e.nodeType || e === n || e === s) r.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof f) return e;
        r = e;
      }
      return new f(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(r)
      );
    }
    g.fn = f.prototype;
    const v = "resize scroll".split(" ");
    function b(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            v.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : g(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    b("click"),
      b("blur"),
      b("focus"),
      b("focusin"),
      b("focusout"),
      b("keyup"),
      b("keydown"),
      b("keypress"),
      b("submit"),
      b("change"),
      b("mousedown"),
      b("mousemove"),
      b("mouseup"),
      b("mouseenter"),
      b("mouseleave"),
      b("mouseout"),
      b("mouseover"),
      b("touchstart"),
      b("touchend"),
      b("touchmove"),
      b("resize"),
      b("scroll");
    const w = {
      addClass: function (...e) {
        const t = h(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = h(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = h(e.map((e) => e.split(" ")));
        return (
          m(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = h(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, n, s, r] = e;
        function i(e) {
          const t = e.target;
          if (!t) return;
          const r = e.target.dom7EventData || [];
          if ((r.indexOf(e) < 0 && r.unshift(e), g(t).is(n))) s.apply(t, r);
          else {
            const e = g(t).parents();
            for (let t = 0; t < e.length; t += 1)
              g(e[t]).is(n) && s.apply(e[t], r);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        "function" == typeof e[1] && (([t, s, r] = e), (n = void 0)),
          r || (r = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: s, proxyListener: i }),
                t.addEventListener(e, i, r);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: s, proxyListener: a }),
                t.addEventListener(e, a, r);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, s, r] = e;
        "function" == typeof e[1] && (([t, s, r] = e), (n = void 0)),
          r || (r = !1);
        const i = t.split(" ");
        for (let e = 0; e < i.length; e += 1) {
          const t = i[e];
          for (let e = 0; e < this.length; e += 1) {
            const i = this[e];
            let a;
            if (
              (!n && i.dom7Listeners
                ? (a = i.dom7Listeners[t])
                : n && i.dom7LiveListeners && (a = i.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const n = a[e];
                (s && n.listener === s) ||
                (s &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === s)
                  ? (i.removeEventListener(t, n.proxyListener, r),
                    a.splice(e, 1))
                  : s ||
                    (i.removeEventListener(t, n.proxyListener, r),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = p(),
          n = e[0].split(" "),
          s = e[1];
        for (let r = 0; r < n.length; r += 1) {
          const i = n[r];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(i, {
                detail: s,
                bubbles: !0,
                cancelable: !0,
              });
              (r.dom7EventData = e.filter((e, t) => t > 0)),
                r.dispatchEvent(n),
                (r.dom7EventData = []),
                delete r.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(s) {
              s.target === this && (e.call(this, s), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = p();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = p(),
            t = d(),
            n = this[0],
            s = n.getBoundingClientRect(),
            r = t.body,
            i = n.clientTop || r.clientTop || 0,
            a = n.clientLeft || r.clientLeft || 0,
            o = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: s.top + o - i, left: s.left + l - a };
        }
        return null;
      },
      css: function (e, t) {
        const n = p();
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (s = 0; s < this.length; s += 1)
              for (const t in e) this[s].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = p(),
          n = d(),
          s = this[0];
        let r, i;
        if (!s || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (s.matches) return s.matches(e);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          if (s.msMatchesSelector) return s.msMatchesSelector(e);
          for (r = g(e), i = 0; i < r.length; i += 1) if (r[i] === s) return !0;
          return !1;
        }
        if (e === n) return s === n;
        if (e === t) return s === t;
        if (e.nodeType || e instanceof f) {
          for (r = e.nodeType ? [e] : e, i = 0; i < r.length; i += 1)
            if (r[i] === s) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return g([]);
        if (e < 0) {
          const n = t + e;
          return g(n < 0 ? [] : [this[n]]);
        }
        return g([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = d();
        for (let s = 0; s < e.length; s += 1) {
          t = e[s];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const s = n.createElement("div");
              for (s.innerHTML = t; s.firstChild; )
                this[e].appendChild(s.firstChild);
            } else if (t instanceof f)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = d();
        let n, s;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const r = t.createElement("div");
            for (r.innerHTML = e, s = r.childNodes.length - 1; s >= 0; s -= 1)
              this[n].insertBefore(r.childNodes[s], this[n].childNodes[0]);
          } else if (e instanceof f)
            for (s = 0; s < e.length; s += 1)
              this[n].insertBefore(e[s], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && g(this[0].nextElementSibling).is(e)
              ? g([this[0].nextElementSibling])
              : g([])
            : this[0].nextElementSibling
            ? g([this[0].nextElementSibling])
            : g([])
          : g([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return g([]);
        for (; n.nextElementSibling; ) {
          const s = n.nextElementSibling;
          e ? g(s).is(e) && t.push(s) : t.push(s), (n = s);
        }
        return g(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && g(t.previousElementSibling).is(e)
              ? g([t.previousElementSibling])
              : g([])
            : t.previousElementSibling
            ? g([t.previousElementSibling])
            : g([]);
        }
        return g([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return g([]);
        for (; n.previousElementSibling; ) {
          const s = n.previousElementSibling;
          e ? g(s).is(e) && t.push(s) : t.push(s), (n = s);
        }
        return g(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? g(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return g(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let s = this[n].parentNode;
          for (; s; )
            e ? g(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        }
        return g(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? g([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n].querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) t.push(s[e]);
        }
        return g(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n].children;
          for (let n = 0; n < s.length; n += 1)
            (e && !g(s[n]).is(e)) || t.push(s[n]);
        }
        return g(t);
      },
      filter: function (e) {
        return g(m(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(w).forEach((e) => {
      Object.defineProperty(g.fn, e, { value: w[e], writable: !0 });
    });
    const y = g;
    function E(e, t = 0) {
      return setTimeout(e, t);
    }
    function S() {
      return Date.now();
    }
    function C(e, t = "x") {
      const n = p();
      let s, r, i;
      const a = (function (e) {
        const t = p();
        let n;
        return (
          t.getComputedStyle && (n = t.getComputedStyle(e, null)),
          !n && e.currentStyle && (n = e.currentStyle),
          n || (n = e.style),
          n
        );
      })(e);
      return (
        n.WebKitCSSMatrix
          ? ((r = a.transform || a.webkitTransform),
            r.split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (i = new n.WebKitCSSMatrix("none" === r ? "" : r)))
          : ((i =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = i.toString().split(","))),
        "x" === t &&
          (r = n.WebKitCSSMatrix
            ? i.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (r = n.WebKitCSSMatrix
            ? i.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        r || 0
      );
    }
    function T(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function x(...e) {
      const t = Object(e[0]),
        n = ["__proto__", "constructor", "prototype"];
      for (let r = 1; r < e.length; r += 1) {
        const i = e[r];
        if (
          null != i &&
          ((s = i),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
        ) {
          const e = Object.keys(Object(i)).filter((e) => n.indexOf(e) < 0);
          for (let n = 0, s = e.length; n < s; n += 1) {
            const s = e[n],
              r = Object.getOwnPropertyDescriptor(i, s);
            void 0 !== r &&
              r.enumerable &&
              (T(t[s]) && T(i[s])
                ? i[s].__swiper__
                  ? (t[s] = i[s])
                  : x(t[s], i[s])
                : !T(t[s]) && T(i[s])
                ? ((t[s] = {}), i[s].__swiper__ ? (t[s] = i[s]) : x(t[s], i[s]))
                : (t[s] = i[s]));
          }
        }
      }
      var s;
      return t;
    }
    function O(e, t, n) {
      e.style.setProperty(t, n);
    }
    function _({ swiper: e, targetPosition: t, side: n }) {
      const s = p(),
        r = -e.translate;
      let i,
        a = null;
      const o = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        s.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > r ? "next" : "prev",
        c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        d = () => {
          (i = new Date().getTime()), null === a && (a = i);
          const l = Math.max(Math.min((i - a) / o, 1), 0),
            u = 0.5 - Math.cos(l * Math.PI) / 2;
          let p = r + u * (t - r);
          if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [n]: p }), c(p, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [n]: p });
              }),
              void s.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = s.requestAnimationFrame(d);
        };
      d();
    }
    let A, L, k;
    function P() {
      return (
        A ||
          (A = (function () {
            const e = p(),
              t = d();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        A
      );
    }
    function M(e = {}) {
      return (
        L ||
          (L = (function ({ userAgent: e } = {}) {
            const t = P(),
              n = p(),
              s = n.navigator.platform,
              r = e || n.navigator.userAgent,
              i = { ios: !1, android: !1 },
              a = n.screen.width,
              o = n.screen.height,
              l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = r.match(/(iPad).*OS\s([\d_]+)/);
            const d = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === s;
            let h = "MacIntel" === s;
            return (
              !c &&
                h &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${o}`) >= 0 &&
                ((c = r.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (h = !1)),
              l && !f && ((i.os = "android"), (i.android = !0)),
              (c || u || d) && ((i.os = "ios"), (i.ios = !0)),
              i
            );
          })(e)),
        L
      );
    }
    function $() {
      return (
        k ||
          (k = (function () {
            const e = p();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        k
      );
    }
    const I = {
      on(e, t, n) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        const r = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][r](t);
          }),
          s
        );
      },
      once(e, t, n) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        function r(...n) {
          s.off(e, r),
            r.__emitterProxy && delete r.__emitterProxy,
            t.apply(s, n);
        }
        return (r.__emitterProxy = t), s.on(e, r, n);
      },
      onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof e) return n;
        const s = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[s](e), n
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
      },
      off(e, t) {
        const n = this;
        return !n.eventsListeners || n.destroyed
          ? n
          : n.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                  n.eventsListeners[e].forEach((s, r) => {
                    (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(r, 1);
                  });
            }),
            n)
          : n;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let n, s, r;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((n = e[0]), (s = e.slice(1, e.length)), (r = t))
          : ((n = e[0].events), (s = e[0].data), (r = e[0].context || t)),
          s.unshift(r);
        return (
          (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(r, [e, ...s]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(r, s);
                });
          }),
          t
        );
      },
    };
    const j = {
      updateSize: function () {
        const e = this;
        let t, n;
        const s = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : s[0].clientWidth),
          (n =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : s[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === n && e.isVertical()) ||
            ((t =
              t -
              parseInt(s.css("padding-left") || 0, 10) -
              parseInt(s.css("padding-right") || 0, 10)),
            (n =
              n -
              parseInt(s.css("padding-top") || 0, 10) -
              parseInt(s.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function n(e, n) {
          return parseFloat(e.getPropertyValue(t(n)) || 0);
        }
        const s = e.params,
          { $wrapperEl: r, size: i, rtlTranslate: a, wrongRTL: o } = e,
          l = e.virtual && s.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = r.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let p = [];
        const f = [],
          h = [];
        let m = s.slidesOffsetBefore;
        "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
        let g = s.slidesOffsetAfter;
        "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let w = s.spaceBetween,
          y = -m,
          E = 0,
          S = 0;
        if (void 0 === i) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * i),
          (e.virtualSize = -w),
          a
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          s.centeredSlides &&
            s.cssMode &&
            (O(e.wrapperEl, "--swiper-centered-offset-before", ""),
            O(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = s.grid && s.grid.rows > 1 && e.grid;
        let T;
        C && e.grid.initSlides(u);
        const x =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView
          ).length > 0;
        for (let r = 0; r < u; r += 1) {
          T = 0;
          const a = d.eq(r);
          if (
            (C && e.grid.updateSlide(r, a, u, t), "none" !== a.css("display"))
          ) {
            if ("auto" === s.slidesPerView) {
              x && (d[r].style[t("width")] = "");
              const i = getComputedStyle(a[0]),
                o = a[0].style.transform,
                l = a[0].style.webkitTransform;
              if (
                (o && (a[0].style.transform = "none"),
                l && (a[0].style.webkitTransform = "none"),
                s.roundLengths)
              )
                T = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
              else {
                const e = n(i, "width"),
                  t = n(i, "padding-left"),
                  s = n(i, "padding-right"),
                  r = n(i, "margin-left"),
                  o = n(i, "margin-right"),
                  l = i.getPropertyValue("box-sizing");
                if (l && "border-box" === l) T = e + r + o;
                else {
                  const { clientWidth: n, offsetWidth: i } = a[0];
                  T = e + t + s + r + o + (i - n);
                }
              }
              o && (a[0].style.transform = o),
                l && (a[0].style.webkitTransform = l),
                s.roundLengths && (T = Math.floor(T));
            } else
              (T = (i - (s.slidesPerView - 1) * w) / s.slidesPerView),
                s.roundLengths && (T = Math.floor(T)),
                d[r] && (d[r].style[t("width")] = `${T}px`);
            d[r] && (d[r].swiperSlideSize = T),
              h.push(T),
              s.centeredSlides
                ? ((y = y + T / 2 + E / 2 + w),
                  0 === E && 0 !== r && (y = y - i / 2 - w),
                  0 === r && (y = y - i / 2 - w),
                  Math.abs(y) < 0.001 && (y = 0),
                  s.roundLengths && (y = Math.floor(y)),
                  S % s.slidesPerGroup == 0 && p.push(y),
                  f.push(y))
                : (s.roundLengths && (y = Math.floor(y)),
                  (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(y),
                  f.push(y),
                  (y = y + T + w)),
              (e.virtualSize += T + w),
              (E = T),
              (S += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, i) + g),
          a &&
            o &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            r.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
          s.setWrapperSize &&
            r.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(T, p, t),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let r = p[n];
            s.roundLengths && (r = Math.floor(r)),
              p[n] <= e.virtualSize - i && t.push(r);
          }
          (p = t),
            Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - i);
        }
        if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
          const n = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
            [n]: `${w}px`,
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (s.spaceBetween ? s.spaceBetween : 0);
          }),
            (e -= s.spaceBetween);
          const t = e - i;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
            (e -= s.spaceBetween),
            e < i)
          ) {
            const t = (i - e) / 2;
            p.forEach((e, n) => {
              p[n] = e - t;
            }),
              f.forEach((e, n) => {
                f[n] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          O(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            O(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            n = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + n));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== b && e.emit("slidesGridLengthChange"),
          s.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || s.cssMode || ("slide" !== s.effect && "fade" !== s.effect)))
        ) {
          const t = `${s.containerModifierClass}backface-hidden`,
            n = e.$el.hasClass(t);
          u <= s.maxBackfaceHiddenSlides
            ? n || e.$el.addClass(t)
            : n && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          s = t.virtual && t.params.virtual.enabled;
        let r,
          i = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          s
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || y([])).each((e) => {
              n.push(e);
            });
          else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
              const e = t.activeIndex + r;
              if (e > t.slides.length && !s) break;
              n.push(a(e));
            }
        else n.push(a(t.activeIndex));
        for (r = 0; r < n.length; r += 1)
          if (void 0 !== n[r]) {
            const e = n[r].offsetHeight;
            i = e > i ? e : i;
          }
        (i || 0 === i) && t.$wrapperEl.css("height", `${i}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let n = 0; n < t.length; n += 1)
          t[n].swiperSlideOffset = e.isHorizontal()
            ? t[n].offsetLeft
            : t[n].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          n = t.params,
          { slides: s, rtlTranslate: r, snapGrid: i } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        r && (a = e),
          s.removeClass(n.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < s.length; e += 1) {
          const o = s[e];
          let l = o.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= s[0].swiperSlideOffset);
          const c =
              (a + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + n.spaceBetween),
            d =
              (a - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + n.spaceBetween),
            u = -(a - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            s.eq(e).addClass(n.slideVisibleClass)),
            (o.progress = r ? -c : c),
            (o.originalProgress = r ? -d : d);
        }
        t.visibleSlides = y(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: r, isBeginning: i, isEnd: a } = t;
        const o = i,
          l = a;
        0 === s
          ? ((r = 0), (i = !0), (a = !0))
          : ((r = (e - t.minTranslate()) / s), (i = r <= 0), (a = r >= 1)),
          Object.assign(t, { progress: r, isBeginning: i, isEnd: a }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          i && !o && t.emit("reachBeginning toEdge"),
          a && !l && t.emit("reachEnd toEdge"),
          ((o && !i) || (l && !a)) && t.emit("fromEdge"),
          t.emit("progress", r);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: s,
            activeIndex: r,
            realIndex: i,
          } = e,
          a = e.virtual && n.virtual.enabled;
        let o;
        t.removeClass(
          `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
        ),
          (o = a
            ? e.$wrapperEl.find(
                `.${n.slideClass}[data-swiper-slide-index="${r}"]`
              )
            : t.eq(r)),
          o.addClass(n.slideActiveClass),
          n.loop &&
            (o.hasClass(n.slideDuplicateClass)
              ? s
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${i}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : s
                  .children(
                    `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${i}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass));
        let l = o.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
        n.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(n.slideNextClass));
        let c = o.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
        n.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
          n.loop &&
            (l.hasClass(n.slideDuplicateClass)
              ? s
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass)
              : s
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass),
            c.hasClass(n.slideDuplicateClass)
              ? s
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)
              : s
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          n = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: s,
            snapGrid: r,
            params: i,
            activeIndex: a,
            realIndex: o,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < s.length; e += 1)
            void 0 !== s[e + 1]
              ? n >= s[e] && n < s[e + 1] - (s[e + 1] - s[e]) / 2
                ? (d = e)
                : n >= s[e] && n < s[e + 1] && (d = e + 1)
              : n >= s[e] && (d = e);
          i.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (r.indexOf(n) >= 0) c = r.indexOf(n);
        else {
          const e = Math.min(i.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / i.slidesPerGroup);
        }
        if ((c >= r.length && (c = r.length - 1), d === a))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: a,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          n = t.params,
          s = y(e).closest(`.${n.slideClass}`)[0];
        let r,
          i = !1;
        if (s)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === s) {
              (i = !0), (r = e);
              break;
            }
        if (!s || !i)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = s),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                y(s).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = r),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const R = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: n,
          translate: s,
          $wrapperEl: r,
        } = this;
        if (t.virtualTranslate) return n ? -s : s;
        if (t.cssMode) return s;
        let i = C(r[0], e);
        return n && (i = -i), i || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: s,
            params: r,
            $wrapperEl: i,
            wrapperEl: a,
            progress: o,
          } = n;
        let l,
          c = 0,
          d = 0;
        n.isHorizontal() ? (c = s ? -e : e) : (d = e),
          r.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          r.cssMode
            ? (a[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -c : -d)
            : r.virtualTranslate ||
              i.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (n.previousTranslate = n.translate),
          (n.translate = n.isHorizontal() ? c : d);
        const u = n.maxTranslate() - n.minTranslate();
        (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
          l !== o && n.updateProgress(e),
          n.emit("setTranslate", n.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, n = !0, s = !0, r) {
        const i = this,
          { params: a, wrapperEl: o } = i;
        if (i.animating && a.preventInteractionOnTransition) return !1;
        const l = i.minTranslate(),
          c = i.maxTranslate();
        let d;
        if (
          ((d = s && e > l ? l : s && e < c ? c : e),
          i.updateProgress(d),
          a.cssMode)
        ) {
          const e = i.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!i.support.smoothScroll)
              return (
                _({ swiper: i, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (i.setTransition(0),
              i.setTranslate(d),
              n &&
                (i.emit("beforeTransitionStart", t, r),
                i.emit("transitionEnd")))
            : (i.setTransition(t),
              i.setTranslate(d),
              n &&
                (i.emit("beforeTransitionStart", t, r),
                i.emit("transitionStart")),
              i.animating ||
                ((i.animating = !0),
                i.onTranslateToWrapperTransitionEnd ||
                  (i.onTranslateToWrapperTransitionEnd = function (e) {
                    i &&
                      !i.destroyed &&
                      e.target === this &&
                      (i.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        i.onTranslateToWrapperTransitionEnd
                      ),
                      i.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        i.onTranslateToWrapperTransitionEnd
                      ),
                      (i.onTranslateToWrapperTransitionEnd = null),
                      delete i.onTranslateToWrapperTransitionEnd,
                      n && i.emit("transitionEnd"));
                  }),
                i.$wrapperEl[0].addEventListener(
                  "transitionend",
                  i.onTranslateToWrapperTransitionEnd
                ),
                i.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  i.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function N({ swiper: e, runCallbacks: t, direction: n, step: s }) {
      const { activeIndex: r, previousIndex: i } = e;
      let a = n;
      if (
        (a || (a = r > i ? "next" : r < i ? "prev" : "reset"),
        e.emit(`transition${s}`),
        t && r !== i)
      ) {
        if ("reset" === a) return void e.emit(`slideResetTransition${s}`);
        e.emit(`slideChangeTransition${s}`),
          "next" === a
            ? e.emit(`slideNextTransition${s}`)
            : e.emit(`slidePrevTransition${s}`);
      }
    }
    const D = {
      slideTo: function (e = 0, t = this.params.speed, n = !0, s, r) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const i = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = i;
        if (
          (i.animating && o.preventInteractionOnTransition) ||
          (!h && !s && !r)
        )
          return !1;
        const m = Math.min(i.params.slidesPerGroupSkip, a);
        let g = m + Math.floor((a - m) / i.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1);
        const v = -l[g];
        if (o.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              n = Math.floor(100 * c[e]),
              s = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= n && t < s - (s - n) / 2
                ? (a = e)
                : t >= n && t < s && (a = e + 1)
              : t >= n && (a = e);
          }
        if (i.initialized && a !== u) {
          if (!i.allowSlideNext && v < i.translate && v < i.minTranslate())
            return !1;
          if (
            !i.allowSlidePrev &&
            v > i.translate &&
            v > i.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let b;
        if (
          (a !== (d || 0) && n && i.emit("beforeSlideChangeStart"),
          i.updateProgress(v),
          (b = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -v === i.translate) || (!p && v === i.translate))
        )
          return (
            i.updateActiveIndex(a),
            o.autoHeight && i.updateAutoHeight(),
            i.updateSlidesClasses(),
            "slide" !== o.effect && i.setTranslate(v),
            "reset" !== b && (i.transitionStart(n, b), i.transitionEnd(n, b)),
            !1
          );
        if (o.cssMode) {
          const e = i.isHorizontal(),
            n = p ? v : -v;
          if (0 === t) {
            const t = i.virtual && i.params.virtual.enabled;
            t &&
              ((i.wrapperEl.style.scrollSnapType = "none"),
              (i._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = n),
              t &&
                requestAnimationFrame(() => {
                  (i.wrapperEl.style.scrollSnapType = ""),
                    (i._swiperImmediateVirtual = !1);
                });
          } else {
            if (!i.support.smoothScroll)
              return (
                _({ swiper: i, targetPosition: n, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
          }
          return !0;
        }
        return (
          i.setTransition(t),
          i.setTranslate(v),
          i.updateActiveIndex(a),
          i.updateSlidesClasses(),
          i.emit("beforeTransitionStart", t, s),
          i.transitionStart(n, b),
          0 === t
            ? i.transitionEnd(n, b)
            : i.animating ||
              ((i.animating = !0),
              i.onSlideToWrapperTransitionEnd ||
                (i.onSlideToWrapperTransitionEnd = function (e) {
                  i &&
                    !i.destroyed &&
                    e.target === this &&
                    (i.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      i.onSlideToWrapperTransitionEnd
                    ),
                    i.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      i.onSlideToWrapperTransitionEnd
                    ),
                    (i.onSlideToWrapperTransitionEnd = null),
                    delete i.onSlideToWrapperTransitionEnd,
                    i.transitionEnd(n, b));
                }),
              i.$wrapperEl[0].addEventListener(
                "transitionend",
                i.onSlideToWrapperTransitionEnd
              ),
              i.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                i.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, n = !0, s) {
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let i = e;
        return r.params.loop && (i += r.loopedSlides), r.slideTo(i, t, n, s);
      },
      slideNext: function (e = this.params.speed, t = !0, n) {
        const s = this,
          { animating: r, enabled: i, params: a } = s;
        if (!i) return s;
        let o = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
        if (a.loop) {
          if (r && a.loopPreventsSlide) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        return a.rewind && s.isEnd
          ? s.slideTo(0, e, t, n)
          : s.slideTo(s.activeIndex + l, e, t, n);
      },
      slidePrev: function (e = this.params.speed, t = !0, n) {
        const s = this,
          {
            params: r,
            animating: i,
            snapGrid: a,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: c,
          } = s;
        if (!c) return s;
        if (r.loop) {
          if (i && r.loopPreventsSlide) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? s.translate : -s.translate),
          p = a.map((e) => d(e));
        let f = a[p.indexOf(u) - 1];
        if (void 0 === f && r.cssMode) {
          let e;
          a.forEach((t, n) => {
            u >= t && (e = n);
          }),
            void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = o.indexOf(f)),
            h < 0 && (h = s.activeIndex - 1),
            "auto" === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              ((h = h - s.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          r.rewind && s.isBeginning)
        ) {
          const r =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(r, e, t, n);
        }
        return s.slideTo(h, e, t, n);
      },
      slideReset: function (e = this.params.speed, t = !0, n) {
        return this.slideTo(this.activeIndex, e, t, n);
      },
      slideToClosest: function (e = this.params.speed, t = !0, n, s = 0.5) {
        const r = this;
        let i = r.activeIndex;
        const a = Math.min(r.params.slidesPerGroupSkip, i),
          o = a + Math.floor((i - a) / r.params.slidesPerGroup),
          l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[o]) {
          const e = r.snapGrid[o];
          l - e > (r.snapGrid[o + 1] - e) * s && (i += r.params.slidesPerGroup);
        } else {
          const e = r.snapGrid[o - 1];
          l - e <= (r.snapGrid[o] - e) * s && (i -= r.params.slidesPerGroup);
        }
        return (
          (i = Math.max(i, 0)),
          (i = Math.min(i, r.slidesGrid.length - 1)),
          r.slideTo(i, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let r,
          i = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (r = parseInt(y(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? i < e.loopedSlides - s / 2 ||
                i > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (i = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  E(() => {
                    e.slideTo(i);
                  }))
                : e.slideTo(i)
              : i > e.slides.length - s
              ? (e.loopFix(),
                (i = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                E(() => {
                  e.slideTo(i);
                }))
              : e.slideTo(i);
        } else e.slideTo(i);
      },
    };
    const B = {
      loopCreate: function () {
        const e = this,
          t = d(),
          { params: n, $wrapperEl: s } = e,
          r = s.children().length > 0 ? y(s.children()[0].parentNode) : s;
        r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let i = r.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (i.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let s = 0; s < e; s += 1) {
              const e = y(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              r.append(e);
            }
            i = r.children(`.${n.slideClass}`);
          }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = i.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(n.loopedSlides || n.slidesPerView, 10)
          )),
          (e.loopedSlides += n.loopAdditionalSlides),
          e.loopedSlides > i.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = i.length);
        const a = [],
          o = [];
        i.each((e, t) => {
          y(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / i.length) * i.length;
          o.push(i.eq(e)[0]), a.unshift(i.eq(i.length - e - 1)[0]);
        }
        for (let e = 0; e < o.length; e += 1)
          r.append(y(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1)
          r.prepend(y(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: s,
          allowSlidePrev: r,
          allowSlideNext: i,
          snapGrid: a,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -a[t] - e.getTranslate();
        if (t < s) {
          (l = n.length - 3 * s + t), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        } else if (t >= n.length - s) {
          (l = -n.length + t + s), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = r), (e.allowSlideNext = i), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: n } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          n.removeAttr("data-swiper-slide-index");
      },
    };
    function z(e) {
      const t = this,
        n = d(),
        s = p(),
        r = t.touchEventsData,
        { params: i, touches: a, enabled: o } = t;
      if (!o) return;
      if (t.animating && i.preventInteractionOnTransition) return;
      !t.animating && i.cssMode && i.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = y(l.target);
      if ("wrapper" === i.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((r.isTouchEvent = "touchstart" === l.type),
        !r.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!r.isTouchEvent && "button" in l && l.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      const u = !!i.noSwipingClass && "" !== i.noSwipingClass,
        f = e.composedPath ? e.composedPath() : e.path;
      u && l.target && l.target.shadowRoot && f && (c = y(f[0]));
      const h = i.noSwipingSelector
          ? i.noSwipingSelector
          : `.${i.noSwipingClass}`,
        m = !(!l.target || !l.target.shadowRoot);
      if (
        i.noSwiping &&
        (m
          ? (function (e, t = this) {
              return (function t(n) {
                if (!n || n === d() || n === p()) return null;
                n.assignedSlot && (n = n.assignedSlot);
                const s = n.closest(e);
                return s || n.getRootNode ? s || t(n.getRootNode().host) : null;
              })(t);
            })(h, c[0])
          : c.closest(h)[0])
      )
        return void (t.allowClick = !0);
      if (i.swipeHandler && !c.closest(i.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (a.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const g = a.currentX,
        v = a.currentY,
        b = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
        w = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
      if (b && (g <= w || g >= s.innerWidth - w)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      if (
        (Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = g),
        (a.startY = v),
        (r.touchStartTime = S()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        i.threshold > 0 && (r.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(r.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (r.isTouched = !1)),
          n.activeElement &&
            y(n.activeElement).is(r.focusableElements) &&
            n.activeElement !== c[0] &&
            n.activeElement.blur();
        const s = e && t.allowTouchMove && i.touchStartPreventDefault;
        (!i.touchStartForcePreventDefault && !s) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !i.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function F(e) {
      const t = d(),
        n = this,
        s = n.touchEventsData,
        { params: r, touches: i, rtlTranslate: a, enabled: o } = n;
      if (!o) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
        return void (
          s.startMoving &&
          s.isScrolling &&
          n.emit("touchMoveOpposite", l)
        );
      if (s.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        u = "touchmove" === l.type ? c.pageX : l.pageX,
        p = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (i.startX = u), void (i.startY = p);
      if (!n.allowTouchMove)
        return (
          y(l.target).is(s.focusableElements) || (n.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(i, {
              startX: u,
              startY: p,
              currentX: u,
              currentY: p,
            }),
            (s.touchStartTime = S()))
          )
        );
      if (s.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
        if (n.isVertical()) {
          if (
            (p < i.startY && n.translate <= n.maxTranslate()) ||
            (p > i.startY && n.translate >= n.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (u < i.startX && n.translate <= n.maxTranslate()) ||
          (u > i.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        s.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        y(l.target).is(s.focusableElements)
      )
        return (s.isMoved = !0), void (n.allowClick = !1);
      if (
        (s.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (i.currentX = u), (i.currentY = p);
      const f = i.currentX - i.startX,
        h = i.currentY - i.startY;
      if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (n.isHorizontal() && i.currentY === i.startY) ||
        (n.isVertical() && i.currentX === i.startX)
          ? (s.isScrolling = !1)
          : f * f + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
            (s.isScrolling = n.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (s.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === s.startMoving &&
          ((i.currentX === i.startX && i.currentY === i.startY) ||
            (s.startMoving = !0)),
        s.isScrolling)
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (n.allowClick = !1),
        !r.cssMode && l.cancelable && l.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
        s.isMoved ||
          (r.loop && !r.cssMode && n.loopFix(),
          (s.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (s.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (s.isMoved = !0);
      let m = n.isHorizontal() ? f : h;
      (i.diff = m),
        (m *= r.touchRatio),
        a && (m = -m),
        (n.swipeDirection = m > 0 ? "prev" : "next"),
        (s.currentTranslate = m + s.startTranslate);
      let g = !0,
        v = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (v = 0),
        m > 0 && s.currentTranslate > n.minTranslate()
          ? ((g = !1),
            r.resistance &&
              (s.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + s.startTranslate + m) ** v))
          : m < 0 &&
            s.currentTranslate < n.maxTranslate() &&
            ((g = !1),
            r.resistance &&
              (s.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - s.startTranslate - m) ** v)),
        g && (l.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          s.currentTranslate < s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          s.currentTranslate > s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (s.currentTranslate = s.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(m) > r.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (i.startX = i.currentX),
            (i.startY = i.currentY),
            (s.currentTranslate = s.startTranslate),
            void (i.diff = n.isHorizontal()
              ? i.currentX - i.startX
              : i.currentY - i.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
          r.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          r.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(s.currentTranslate),
        n.setTranslate(s.currentTranslate));
    }
    function G(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: s,
          touches: r,
          rtlTranslate: i,
          slidesGrid: a,
          enabled: o,
        } = t;
      if (!o) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", l),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && s.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      s.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = S(),
        d = c - n.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = S()),
        E(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let u;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (u = s.followFinger
          ? i
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        s.cssMode)
      )
        return;
      if (t.params.freeMode && s.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== a[e + t]
          ? u >= a[e] && u < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
          : u >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
      }
      let h = null,
        m = null;
      s.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const g = (u - a[p]) / f,
        v = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (d > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= s.longSwipesRatio
            ? t.slideTo(s.rewind && t.isEnd ? h : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (g > 1 - s.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== m && g < 0 && Math.abs(g) > s.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function H() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: r, snapGrid: i } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = s),
        e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
    }
    function q(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function W() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: s } = e;
      if (!s) return;
      let r;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const i = e.maxTranslate() - e.minTranslate();
      (r = 0 === i ? 0 : (e.translate - e.minTranslate()) / i),
        r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let V = !1;
    function U() {}
    const X = (e, t) => {
      const n = d(),
        {
          params: s,
          touchEvents: r,
          el: i,
          wrapperEl: a,
          device: o,
          support: l,
        } = e,
        c = !!s.nested,
        u = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== r.start ||
          !l.passiveListener ||
          !s.passiveListeners
        ) && { passive: !0, capture: !1 };
        i[u](r.start, e.onTouchStart, t),
          i[u](
            r.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          i[u](r.end, e.onTouchEnd, t),
          r.cancel && i[u](r.cancel, e.onTouchEnd, t);
      } else
        i[u](r.start, e.onTouchStart, !1),
          n[u](r.move, e.onTouchMove, c),
          n[u](r.end, e.onTouchEnd, !1);
      (s.preventClicks || s.preventClicksPropagation) &&
        i[u]("click", e.onClick, !0),
        s.cssMode && a[u]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[p](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              H,
              !0
            )
          : e[p]("observerUpdate", H, !0);
    };
    const Y = {
        attachEvents: function () {
          const e = this,
            t = d(),
            { params: n, support: s } = e;
          (e.onTouchStart = z.bind(e)),
            (e.onTouchMove = F.bind(e)),
            (e.onTouchEnd = G.bind(e)),
            n.cssMode && (e.onScroll = W.bind(e)),
            (e.onClick = q.bind(e)),
            s.touch && !V && (t.addEventListener("touchstart", U), (V = !0)),
            X(e, "on");
        },
        detachEvents: function () {
          X(this, "off");
        },
      },
      J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const K = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: n,
            loopedSlides: s = 0,
            params: r,
            $el: i,
          } = e,
          a = r.breakpoints;
        if (!a || (a && 0 === Object.keys(a).length)) return;
        const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
        if (!o || e.currentBreakpoint === o) return;
        const l = (o in a ? a[o] : void 0) || e.originalParams,
          c = J(e, r),
          d = J(e, l),
          u = r.enabled;
        c && !d
          ? (i.removeClass(
              `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (i.addClass(`${r.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === r.grid.fill)) &&
              i.addClass(`${r.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const n = r[t] && r[t].enabled,
              s = l[t] && l[t].enabled;
            n && !s && e[t].disable(), !n && s && e[t].enable();
          });
        const p = l.direction && l.direction !== r.direction,
          f = r.loop && (l.slidesPerView !== r.slidesPerView || p);
        p && n && e.changeDirection(), x(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !h ? e.disable() : !u && h && e.enable(),
          (e.currentBreakpoint = o),
          e.emit("_beforeBreakpoint", l),
          f &&
            n &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - s + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", n) {
        if (!e || ("container" === t && !n)) return;
        let s = !1;
        const r = p(),
          i = "window" === t ? r.innerHeight : n.clientHeight,
          a = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: i * t, point: e };
            }
            return { value: e, point: e };
          });
        a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < a.length; e += 1) {
          const { point: i, value: o } = a[e];
          "window" === t
            ? r.matchMedia(`(min-width: ${o}px)`).matches && (s = i)
            : o <= n.clientWidth && (s = i);
        }
        return s || "max";
      },
    };
    const Q = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: s,
            $el: r,
            device: i,
            support: a,
          } = e,
          o = (function (e, t) {
            const n = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((s) => {
                      e[s] && n.push(t + s);
                    })
                  : "string" == typeof e && n.push(t + e);
              }),
              n
            );
          })(
            [
              "initialized",
              n.direction,
              { "pointer-events": !a.touch },
              { "free-mode": e.params.freeMode && n.freeMode.enabled },
              { autoheight: n.autoHeight },
              { rtl: s },
              { grid: n.grid && n.grid.rows > 1 },
              {
                "grid-column":
                  n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
              },
              { android: i.android },
              { ios: i.ios },
              { "css-mode": n.cssMode },
              { centered: n.cssMode && n.centeredSlides },
              { "watch-progress": n.watchSlidesProgress },
            ],
            n.containerModifierClass
          );
        t.push(...o), r.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const Z = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ee(e, t) {
      return function (n = {}) {
        const s = Object.keys(n)[0],
          r = n[s];
        "object" == typeof r && null !== r
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in r
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                x(t, n))
              : x(t, n))
          : x(t, n);
      };
    }
    const te = {
        eventsEmitter: I,
        update: j,
        translate: R,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const n = this,
              { params: s } = n;
            s.cssMode ||
              (s.autoHeight && n.updateAutoHeight(),
              N({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const n = this,
              { params: s } = n;
            (n.animating = !1),
              s.cssMode ||
                (n.setTransition(0),
                N({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: D,
        loop: B,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const n =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (n.style.cursor = "move"),
              (n.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: Y,
        breakpoints: K,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: s } = n;
            if (s) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: Q,
        images: {
          loadImage: function (e, t, n, s, r, i) {
            const a = p();
            let o;
            function l() {
              i && i();
            }
            y(e).parent("picture")[0] || (e.complete && r)
              ? l()
              : t
              ? ((o = new a.Image()),
                (o.onload = l),
                (o.onerror = l),
                s && (o.sizes = s),
                n && (o.srcset = n),
                t && (o.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const s = e.imagesToLoad[n];
              e.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ne = {};
    class se {
      constructor(...e) {
        let t, n;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (n = e[0])
            : ([t, n] = e),
          n || (n = {}),
          (n = x({}, n)),
          t && !n.el && (n.el = t),
          n.el && y(n.el).length > 1)
        ) {
          const e = [];
          return (
            y(n.el).each((t) => {
              const s = x({}, n, { el: t });
              e.push(new se(s));
            }),
            e
          );
        }
        const s = this;
        (s.__swiper__ = !0),
          (s.support = P()),
          (s.device = M({ userAgent: n.userAgent })),
          (s.browser = $()),
          (s.eventsListeners = {}),
          (s.eventsAnyListeners = []),
          (s.modules = [...s.__modules__]),
          n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules);
        const r = {};
        s.modules.forEach((e) => {
          e({
            swiper: s,
            extendParams: ee(n, r),
            on: s.on.bind(s),
            once: s.once.bind(s),
            off: s.off.bind(s),
            emit: s.emit.bind(s),
          });
        });
        const i = x({}, Z, r);
        return (
          (s.params = x({}, i, ne, n)),
          (s.originalParams = x({}, s.params)),
          (s.passedParams = x({}, n)),
          s.params &&
            s.params.on &&
            Object.keys(s.params.on).forEach((e) => {
              s.on(e, s.params.on[e]);
            }),
          s.params && s.params.onAny && s.onAny(s.params.onAny),
          (s.$ = y),
          Object.assign(s, {
            enabled: s.params.enabled,
            el: t,
            classNames: [],
            slides: y(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === s.params.direction,
            isVertical: () => "vertical" === s.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: s.params.allowSlideNext,
            allowSlidePrev: s.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (s.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (s.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                s.support.touch || !s.params.simulateTouch
                  ? s.touchEventsTouch
                  : s.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: s.params.focusableElements,
              lastClickTime: S(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: s.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          s.emit("_swiper"),
          s.params.init && s.init(),
          s
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const s = n.minTranslate(),
          r = (n.maxTranslate() - s) * e + s;
        n.translateTo(r, void 0 === t ? 0 : t),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const s = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: s }), e.emit("_slideClass", n, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: n,
          slides: s,
          slidesGrid: r,
          slidesSizesGrid: i,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = s[o].swiperSlideSize;
          for (let n = o + 1; n < s.length; n += 1)
            s[n] &&
              !e &&
              ((t += s[n].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let n = o - 1; n >= 0; n -= 1)
            s[n] &&
              !e &&
              ((t += s[n].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < s.length; e += 1) {
            (t ? r[e] + i[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            r[o] - r[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (s(), e.params.autoHeight && e.updateAutoHeight())
            : ((r =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              r || s()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const n = this,
          s = n.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${s}`)
              .addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = y(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const s = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = y(e.shadowRoot.querySelector(s()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children ? n.children(s()) : y(n).children(s());
        })();
        if (0 === r.length && t.params.createElements) {
          const e = d().createElement("div");
          (r = y(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              r.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const n = this,
          { params: s, $el: r, $wrapperEl: i, slides: a } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            s.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              r.removeAttr("style"),
              i.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        x(ne, e);
      }
      static get extendedDefaults() {
        return ne;
      }
      static get defaults() {
        return Z;
      }
      static installModule(e) {
        se.prototype.__modules__ || (se.prototype.__modules__ = []);
        const t = se.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => se.installModule(e)), se)
          : (se.installModule(e), se);
      }
    }
    Object.keys(te).forEach((e) => {
      Object.keys(te[e]).forEach((t) => {
        se.prototype[t] = te[e][t];
      });
    }),
      se.use([
        function ({ swiper: e, on: t, emit: n }) {
          const s = p();
          let r = null,
            i = null;
          const a = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (n("beforeResize"), n("resize"));
            },
            o = () => {
              e && !e.destroyed && e.initialized && n("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== s.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((r = new ResizeObserver((t) => {
                  i = s.requestAnimationFrame(() => {
                    const { width: n, height: s } = e;
                    let r = n,
                      i = s;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: n, target: s }) => {
                        (s && s !== e.el) ||
                          ((r = n ? n.width : (t[0] || t).inlineSize),
                          (i = n ? n.height : (t[0] || t).blockSize));
                      }
                    ),
                      (r === n && i === s) || a();
                  });
                })),
                r.observe(e.el))
              : (s.addEventListener("resize", a),
                s.addEventListener("orientationchange", o));
          }),
            t("destroy", () => {
              i && s.cancelAnimationFrame(i),
                r && r.unobserve && e.el && (r.unobserve(e.el), (r = null)),
                s.removeEventListener("resize", a),
                s.removeEventListener("orientationchange", o);
            });
        },
        function ({ swiper: e, extendParams: t, on: n, emit: s }) {
          const r = [],
            i = p(),
            a = (e, t = {}) => {
              const n = new (i.MutationObserver || i.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void s("observerUpdate", e[0]);
                  const t = function () {
                    s("observerUpdate", e[0]);
                  };
                  i.requestAnimationFrame
                    ? i.requestAnimationFrame(t)
                    : i.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(n);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) a(t[e]);
                }
                a(e.$el[0], { childList: e.params.observeSlideChildren }),
                  a(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const re = se;
    function ie(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function ae({ swiper: e, extendParams: t, on: n, emit: s }) {
      const r = "swiper-pagination";
      let i;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let a = 0;
      function o() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function l(t, n) {
        const { bulletActiveClass: s } = e.params.pagination;
        t[n]().addClass(`${s}-${n}`)[n]().addClass(`${s}-${n}-${n}`);
      }
      function c() {
        const t = e.rtl,
          n = e.params.pagination;
        if (o()) return;
        const r =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          c = e.pagination.$el;
        let d;
        const u = e.params.loop
          ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((d = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              d > r - 1 - 2 * e.loopedSlides && (d -= r - 2 * e.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
            : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === n.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const s = e.pagination.bullets;
          let r, o, u;
          if (
            (n.dynamicBullets &&
              ((i = s
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              c.css(
                e.isHorizontal() ? "width" : "height",
                i * (n.dynamicMainBullets + 4) + "px"
              ),
              n.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((a += d - (e.previousIndex - e.loopedSlides || 0)),
                a > n.dynamicMainBullets - 1
                  ? (a = n.dynamicMainBullets - 1)
                  : a < 0 && (a = 0)),
              (r = Math.max(d - a, 0)),
              (o = r + (Math.min(s.length, n.dynamicMainBullets) - 1)),
              (u = (o + r) / 2)),
            s.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${n.bulletActiveClass}${e}`)
                .join(" ")
            ),
            c.length > 1)
          )
            s.each((e) => {
              const t = y(e),
                s = t.index();
              s === d && t.addClass(n.bulletActiveClass),
                n.dynamicBullets &&
                  (s >= r &&
                    s <= o &&
                    t.addClass(`${n.bulletActiveClass}-main`),
                  s === r && l(t, "prev"),
                  s === o && l(t, "next"));
            });
          else {
            const t = s.eq(d),
              i = t.index();
            if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
              const t = s.eq(r),
                a = s.eq(o);
              for (let e = r; e <= o; e += 1)
                s.eq(e).addClass(`${n.bulletActiveClass}-main`);
              if (e.params.loop)
                if (i >= s.length) {
                  for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                    s.eq(s.length - e).addClass(`${n.bulletActiveClass}-main`);
                  s.eq(s.length - n.dynamicMainBullets - 1).addClass(
                    `${n.bulletActiveClass}-prev`
                  );
                } else l(t, "prev"), l(a, "next");
              else l(t, "prev"), l(a, "next");
            }
          }
          if (n.dynamicBullets) {
            const r = Math.min(s.length, n.dynamicMainBullets + 4),
              a = (i * r - i) / 2 - u * i,
              o = t ? "right" : "left";
            s.css(e.isHorizontal() ? o : "top", `${a}px`);
          }
        }
        if (
          ("fraction" === n.type &&
            (c.find(ie(n.currentClass)).text(n.formatFractionCurrent(d + 1)),
            c.find(ie(n.totalClass)).text(n.formatFractionTotal(u))),
          "progressbar" === n.type)
        ) {
          let t;
          t = n.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const s = (d + 1) / u;
          let r = 1,
            i = 1;
          "horizontal" === t ? (r = s) : (i = s),
            c
              .find(ie(n.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${i})`)
              .transition(e.params.speed);
        }
        "custom" === n.type && n.renderCustom
          ? (c.html(n.renderCustom(e, d + 1, u)), s("paginationRender", c[0]))
          : s("paginationUpdate", c[0]),
          e.params.watchOverflow &&
            e.enabled &&
            c[e.isLocked ? "addClass" : "removeClass"](n.lockClass);
      }
      function u() {
        const t = e.params.pagination;
        if (o()) return;
        const n =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          r = e.pagination.$el;
        let i = "";
        if ("bullets" === t.type) {
          let s = e.params.loop
            ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            s > n &&
            (s = n);
          for (let n = 0; n < s; n += 1)
            t.renderBullet
              ? (i += t.renderBullet.call(e, n, t.bulletClass))
              : (i += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          r.html(i), (e.pagination.bullets = r.find(ie(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((i = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          r.html(i)),
          "progressbar" === t.type &&
            ((i = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            r.html(i)),
          "custom" !== t.type && s("paginationRender", e.pagination.$el[0]);
      }
      function p() {
        e.params.pagination = (function (e, t, n, s) {
          const r = d();
          return (
            e.params.createElements &&
              Object.keys(s).forEach((i) => {
                if (!n[i] && !0 === n.auto) {
                  let a = e.$el.children(`.${s[i]}`)[0];
                  a ||
                    ((a = r.createElement("div")),
                    (a.className = s[i]),
                    e.$el.append(a)),
                    (n[i] = a),
                    (t[i] = a);
                }
              }),
            n
          );
        })(e, e.originalParams.pagination, e.params.pagination, {
          el: "swiper-pagination",
        });
        const t = e.params.pagination;
        if (!t.el) return;
        let n = y(t.el);
        0 !== n.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            n.length > 1 &&
            ((n = e.$el.find(t.el)),
            n.length > 1 &&
              (n = n.filter((t) => y(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
          n.addClass(t.modifierClass + t.type),
          n.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (a = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            n.addClass(t.progressbarOppositeClass),
          t.clickable &&
            n.on("click", ie(t.bulletClass), function (t) {
              t.preventDefault();
              let n = y(this).index() * e.params.slidesPerGroup;
              e.params.loop && (n += e.loopedSlides), e.slideTo(n);
            }),
          Object.assign(e.pagination, { $el: n, el: n[0] }),
          e.enabled || n.addClass(t.lockClass));
      }
      function f() {
        const t = e.params.pagination;
        if (o()) return;
        const n = e.pagination.$el;
        n.removeClass(t.hiddenClass),
          n.removeClass(t.modifierClass + t.type),
          n.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && n.off("click", ie(t.bulletClass));
      }
      n("init", () => {
        !1 === e.params.pagination.enabled ? h() : (p(), u(), c());
      }),
        n("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && c();
        }),
        n("snapIndexChange", () => {
          e.params.loop || c();
        }),
        n("slidesLengthChange", () => {
          e.params.loop && (u(), c());
        }),
        n("snapGridLengthChange", () => {
          e.params.loop || (u(), c());
        }),
        n("destroy", () => {
          f();
        }),
        n("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        n("lock unlock", () => {
          c();
        }),
        n("click", (t, n) => {
          const r = n.target,
            { $el: i } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            i &&
            i.length > 0 &&
            !y(r).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && r === e.navigation.nextEl) ||
                (e.navigation.prevEl && r === e.navigation.prevEl))
            )
              return;
            const t = i.hasClass(e.params.pagination.hiddenClass);
            s(!0 === t ? "paginationShow" : "paginationHide"),
              i.toggleClass(e.params.pagination.hiddenClass);
          }
        });
      const h = () => {
        e.$el.addClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.addClass(
              e.params.pagination.paginationDisabledClass
            ),
          f();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.$el.removeClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el &&
              e.pagination.$el.removeClass(
                e.params.pagination.paginationDisabledClass
              ),
            p(),
            u(),
            c();
        },
        disable: h,
        render: u,
        update: c,
        init: p,
        destroy: f,
      });
    }
    function oe({ swiper: e, extendParams: t, on: n, emit: s }) {
      let r;
      function i() {
        if (!e.size)
          return (e.autoplay.running = !1), void (e.autoplay.paused = !1);
        const t = e.slides.eq(e.activeIndex);
        let n = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(r),
          (r = E(() => {
            let t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  s("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? o()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    s("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)), s("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                s("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? o()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)), s("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), s("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) && i();
          }, n));
      }
      function a() {
        return (
          void 0 === r &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0), s("autoplayStart"), i(), !0)
        );
      }
      function o() {
        return (
          !!e.autoplay.running &&
          void 0 !== r &&
          (r && (clearTimeout(r), (r = void 0)),
          (e.autoplay.running = !1),
          s("autoplayStop"),
          !0)
        );
      }
      function l(t) {
        e.autoplay.running &&
          (e.autoplay.paused ||
            (r && clearTimeout(r),
            (e.autoplay.paused = !0),
            0 !== t && e.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].addEventListener(t, u);
                })
              : ((e.autoplay.paused = !1), i())));
      }
      function c() {
        const t = d();
        "hidden" === t.visibilityState && e.autoplay.running && l(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (i(), (e.autoplay.paused = !1));
      }
      function u(t) {
        e &&
          !e.destroyed &&
          e.$wrapperEl &&
          t.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, u);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? i() : o());
      }
      function p() {
        e.params.autoplay.disableOnInteraction
          ? o()
          : (s("autoplayPause"), l()),
          ["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, u);
          });
      }
      function f() {
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), s("autoplayResume"), i());
      }
      (e.autoplay = { running: !1, paused: !1 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        n("init", () => {
          if (e.params.autoplay.enabled) {
            a();
            d().addEventListener("visibilitychange", c),
              e.params.autoplay.pauseOnMouseEnter &&
                (e.$el.on("mouseenter", p), e.$el.on("mouseleave", f));
          }
        }),
        n("beforeTransitionStart", (t, n, s) => {
          e.autoplay.running &&
            (s || !e.params.autoplay.disableOnInteraction
              ? e.autoplay.pause(n)
              : o());
        }),
        n("sliderFirstMove", () => {
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction ? o() : l());
        }),
        n("touchEnd", () => {
          e.params.cssMode &&
            e.autoplay.paused &&
            !e.params.autoplay.disableOnInteraction &&
            i();
        }),
        n("destroy", () => {
          e.$el.off("mouseenter", p),
            e.$el.off("mouseleave", f),
            e.autoplay.running && o();
          d().removeEventListener("visibilitychange", c);
        }),
        Object.assign(e.autoplay, { pause: l, run: i, start: a, stop: o });
    }
    function le(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    function ce({ swiper: e, extendParams: t, on: n }) {
      t({ fadeEffect: { crossFade: !1, transformEl: null } });
      !(function (e) {
        const {
          effect: t,
          swiper: n,
          on: s,
          setTranslate: r,
          setTransition: i,
          overwriteParams: a,
          perspective: o,
          recreateShadows: l,
          getEffectParams: c,
        } = e;
        let d;
        s("beforeInit", () => {
          if (n.params.effect !== t) return;
          n.classNames.push(`${n.params.containerModifierClass}${t}`),
            o &&
              o() &&
              n.classNames.push(`${n.params.containerModifierClass}3d`);
          const e = a ? a() : {};
          Object.assign(n.params, e), Object.assign(n.originalParams, e);
        }),
          s("setTranslate", () => {
            n.params.effect === t && r();
          }),
          s("setTransition", (e, s) => {
            n.params.effect === t && i(s);
          }),
          s("transitionEnd", () => {
            if (n.params.effect === t && l) {
              if (!c || !c().slideShadows) return;
              n.slides.each((e) => {
                n.$(e)
                  .find(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .remove();
              }),
                l();
            }
          }),
          s("virtualUpdate", () => {
            n.params.effect === t &&
              (n.slides.length || (d = !0),
              requestAnimationFrame(() => {
                d && n.slides && n.slides.length && (r(), (d = !1));
              }));
          });
      })({
        effect: "fade",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { slides: t } = e,
            n = e.params.fadeEffect;
          for (let s = 0; s < t.length; s += 1) {
            const t = e.slides.eq(s);
            let r = -t[0].swiperSlideOffset;
            e.params.virtualTranslate || (r -= e.translate);
            let i = 0;
            e.isHorizontal() || ((i = r), (r = 0));
            const a = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(t[0].progress), 0)
              : 1 + Math.min(Math.max(t[0].progress, -1), 0);
            le(n, t)
              .css({ opacity: a })
              .transform(`translate3d(${r}px, ${i}px, 0px)`);
          }
        },
        setTransition: (t) => {
          const { transformEl: n } = e.params.fadeEffect;
          (n ? e.slides.find(n) : e.slides).transition(t),
            (function ({
              swiper: e,
              duration: t,
              transformEl: n,
              allSlides: s,
            }) {
              const { slides: r, activeIndex: i, $wrapperEl: a } = e;
              if (e.params.virtualTranslate && 0 !== t) {
                let t,
                  o = !1;
                (t = s ? (n ? r.find(n) : r) : n ? r.eq(i).find(n) : r.eq(i)),
                  t.transitionEnd(() => {
                    if (o) return;
                    if (!e || e.destroyed) return;
                    (o = !0), (e.animating = !1);
                    const t = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < t.length; e += 1) a.trigger(t[e]);
                  });
              }
            })({ swiper: e, duration: t, transformEl: n, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    }
    function de() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      de(),
        document.querySelector(".swiper") &&
          new re(".swiper", {
            modules: [ce, ae, oe],
            effect: "fade",
            autoplay: { delay: 5e3 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: !0,
            speed: 800,
            simulateTouch: !0,
            pagination: {
              el: ".pagination__list",
              clickable: !0,
              renderBullet: function (e, t) {
                let n = document
                  .querySelector(".pagination__list")
                  .dataset.pagg.split(",");
                return void 0 !== n[e]
                  ? '<li class="' +
                      t +
                      ' pagination__item">' +
                      (null != n[e] ? n[e] : "") +
                      "</li>"
                  : "";
              },
            },
            navigation: {
              nextEl: ".about__more .more__item_next",
              prevEl: ".about__more .more__item_prev",
            },
            on: {},
          });
    });
    new (n(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            a(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let n = t.split("|"),
                s = { root: n[0], margin: n[1], threshold: n[2] },
                r = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    n = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    r = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === s.root &&
                    String(n) === s.margin &&
                    String(r) === s.threshold
                  )
                    return e;
                }),
                i = this.getScrollWatcherConfig(s);
              this.scrollWatcherInit(r, i);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging &&
          (function (e) {
            setTimeout(() => {
              window.FLS && console.log(e);
            }, 0);
          })(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const n = e.target;
        this.scrollWatcherIntersecting(e, n),
          n.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(n, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let ue = !1;
    function pe(e) {
      this.type = e;
    }
    setTimeout(() => {
      if (ue) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (pe.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            n = t.dataset.da.trim().split(","),
            s = {};
          (s.element = t),
            (s.parent = t.parentNode),
            (s.destination = document.querySelector(n[0].trim())),
            (s.breakpoint = n[1] ? n[1].trim() : "767"),
            (s.place = n[2] ? n[2].trim() : "last"),
            (s.index = this.indexInParent(s.parent, s.element)),
            this.оbjects.push(s);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, n) {
              return Array.prototype.indexOf.call(n, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const n = this.mediaQueries[t],
            s = String.prototype.split.call(n, ","),
            r = window.matchMedia(s[0]),
            i = s[1],
            a = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === i;
            });
          r.addListener(function () {
            e.mediaHandler(r, a);
          }),
            this.mediaHandler(r, a);
        }
      }),
      (pe.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const n = t[e];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (pe.prototype.moveTo = function (e, t, n) {
        t.classList.add(this.daClassname),
          "last" === e || e >= n.children.length
            ? n.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? n.children[e].insertAdjacentElement("beforebegin", t)
            : n.insertAdjacentElement("afterbegin", t);
      }),
      (pe.prototype.moveBack = function (e, t, n) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[n]
            ? e.children[n].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (pe.prototype.indexInParent = function (e, t) {
        const n = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(n, t);
      }),
      (pe.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new pe("max").init();
    n(846);
    function fe(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    const { toString: he } = Object.prototype,
      { getPrototypeOf: me } = Object,
      ge =
        ((ve = Object.create(null)),
        (e) => {
          const t = he.call(e);
          return ve[t] || (ve[t] = t.slice(8, -1).toLowerCase());
        });
    var ve;
    const be = (e) => ((e = e.toLowerCase()), (t) => ge(t) === e),
      we = (e) => (t) => typeof t === e,
      { isArray: ye } = Array,
      Ee = we("undefined");
    const Se = be("ArrayBuffer");
    const Ce = we("string"),
      Te = we("function"),
      xe = we("number"),
      Oe = (e) => null !== e && "object" == typeof e,
      _e = (e) => {
        if ("object" !== ge(e)) return !1;
        const t = me(e);
        return !(
          (null !== t &&
            t !== Object.prototype &&
            null !== Object.getPrototypeOf(t)) ||
          Symbol.toStringTag in e ||
          Symbol.iterator in e
        );
      },
      Ae = be("Date"),
      Le = be("File"),
      ke = be("Blob"),
      Pe = be("FileList"),
      Me = be("URLSearchParams");
    function $e(e, t, { allOwnKeys: n = !1 } = {}) {
      if (null == e) return;
      let s, r;
      if (("object" != typeof e && (e = [e]), ye(e)))
        for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e);
      else {
        const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
          i = r.length;
        let a;
        for (s = 0; s < i; s++) (a = r[s]), t.call(null, e[a], a, e);
      }
    }
    function Ie(e, t) {
      t = t.toLowerCase();
      const n = Object.keys(e);
      let s,
        r = n.length;
      for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
      return null;
    }
    const je =
        "undefined" == typeof self
          ? "undefined" == typeof global
            ? void 0
            : global
          : self,
      Re = (e) => !Ee(e) && e !== je;
    const Ne =
      ((De = "undefined" != typeof Uint8Array && me(Uint8Array)),
      (e) => De && e instanceof De);
    var De;
    const Be = be("HTMLFormElement"),
      ze = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
          e.call(t, n)
      )(Object.prototype),
      Fe = be("RegExp"),
      Ge = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
          s = {};
        $e(n, (n, r) => {
          !1 !== t(n, r, e) && (s[r] = n);
        }),
          Object.defineProperties(e, s);
      },
      He = {
        isArray: ye,
        isArrayBuffer: Se,
        isBuffer: function (e) {
          return (
            null !== e &&
            !Ee(e) &&
            null !== e.constructor &&
            !Ee(e.constructor) &&
            Te(e.constructor.isBuffer) &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: (e) => {
          const t = "[object FormData]";
          return (
            e &&
            (("function" == typeof FormData && e instanceof FormData) ||
              he.call(e) === t ||
              (Te(e.toString) && e.toString() === t))
          );
        },
        isArrayBufferView: function (e) {
          let t;
          return (
            (t =
              "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(e)
                : e && e.buffer && Se(e.buffer)),
            t
          );
        },
        isString: Ce,
        isNumber: xe,
        isBoolean: (e) => !0 === e || !1 === e,
        isObject: Oe,
        isPlainObject: _e,
        isUndefined: Ee,
        isDate: Ae,
        isFile: Le,
        isBlob: ke,
        isRegExp: Fe,
        isFunction: Te,
        isStream: (e) => Oe(e) && Te(e.pipe),
        isURLSearchParams: Me,
        isTypedArray: Ne,
        isFileList: Pe,
        forEach: $e,
        merge: function e() {
          const { caseless: t } = (Re(this) && this) || {},
            n = {},
            s = (s, r) => {
              const i = (t && Ie(n, r)) || r;
              _e(n[i]) && _e(s)
                ? (n[i] = e(n[i], s))
                : _e(s)
                ? (n[i] = e({}, s))
                : ye(s)
                ? (n[i] = s.slice())
                : (n[i] = s);
            };
          for (let e = 0, t = arguments.length; e < t; e++)
            arguments[e] && $e(arguments[e], s);
          return n;
        },
        extend: (e, t, n, { allOwnKeys: s } = {}) => (
          $e(
            t,
            (t, s) => {
              n && Te(t) ? (e[s] = fe(t, n)) : (e[s] = t);
            },
            { allOwnKeys: s }
          ),
          e
        ),
        trim: (e) =>
          e.trim
            ? e.trim()
            : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        inherits: (e, t, n, s) => {
          (e.prototype = Object.create(t.prototype, s)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            n && Object.assign(e.prototype, n);
        },
        toFlatObject: (e, t, n, s) => {
          let r, i, a;
          const o = {};
          if (((t = t || {}), null == e)) return t;
          do {
            for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
              (a = r[i]),
                (s && !s(a, e, t)) || o[a] || ((t[a] = e[a]), (o[a] = !0));
            e = !1 !== n && me(e);
          } while (e && (!n || n(e, t)) && e !== Object.prototype);
          return t;
        },
        kindOf: ge,
        kindOfTest: be,
        endsWith: (e, t, n) => {
          (e = String(e)),
            (void 0 === n || n > e.length) && (n = e.length),
            (n -= t.length);
          const s = e.indexOf(t, n);
          return -1 !== s && s === n;
        },
        toArray: (e) => {
          if (!e) return null;
          if (ye(e)) return e;
          let t = e.length;
          if (!xe(t)) return null;
          const n = new Array(t);
          for (; t-- > 0; ) n[t] = e[t];
          return n;
        },
        forEachEntry: (e, t) => {
          const n = (e && e[Symbol.iterator]).call(e);
          let s;
          for (; (s = n.next()) && !s.done; ) {
            const n = s.value;
            t.call(e, n[0], n[1]);
          }
        },
        matchAll: (e, t) => {
          let n;
          const s = [];
          for (; null !== (n = e.exec(t)); ) s.push(n);
          return s;
        },
        isHTMLForm: Be,
        hasOwnProperty: ze,
        hasOwnProp: ze,
        reduceDescriptors: Ge,
        freezeMethods: (e) => {
          Ge(e, (t, n) => {
            if (Te(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
              return !1;
            const s = e[n];
            Te(s) &&
              ((t.enumerable = !1),
              "writable" in t
                ? (t.writable = !1)
                : t.set ||
                  (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'");
                  }));
          });
        },
        toObjectSet: (e, t) => {
          const n = {},
            s = (e) => {
              e.forEach((e) => {
                n[e] = !0;
              });
            };
          return ye(e) ? s(e) : s(String(e).split(t)), n;
        },
        toCamelCase: (e) =>
          e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (e, t, n) {
            return t.toUpperCase() + n;
          }),
        noop: () => {},
        toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
        findKey: Ie,
        global: je,
        isContextDefined: Re,
        toJSONObject: (e) => {
          const t = new Array(10),
            n = (e, s) => {
              if (Oe(e)) {
                if (t.indexOf(e) >= 0) return;
                if (!("toJSON" in e)) {
                  t[s] = e;
                  const r = ye(e) ? [] : {};
                  return (
                    $e(e, (e, t) => {
                      const i = n(e, s + 1);
                      !Ee(i) && (r[t] = i);
                    }),
                    (t[s] = void 0),
                    r
                  );
                }
              }
              return e;
            };
          return n(e, 0);
        },
      };
    function qe(e, t, n, s, r) {
      Error.call(this),
        Error.captureStackTrace
          ? Error.captureStackTrace(this, this.constructor)
          : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = "AxiosError"),
        t && (this.code = t),
        n && (this.config = n),
        s && (this.request = s),
        r && (this.response = r);
    }
    He.inherits(qe, Error, {
      toJSON: function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: He.toJSONObject(this.config),
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      },
    });
    const We = qe.prototype,
      Ve = {};
    [
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED",
      "ERR_NOT_SUPPORT",
      "ERR_INVALID_URL",
    ].forEach((e) => {
      Ve[e] = { value: e };
    }),
      Object.defineProperties(qe, Ve),
      Object.defineProperty(We, "isAxiosError", { value: !0 }),
      (qe.from = (e, t, n, s, r, i) => {
        const a = Object.create(We);
        return (
          He.toFlatObject(
            e,
            a,
            function (e) {
              return e !== Error.prototype;
            },
            (e) => "isAxiosError" !== e
          ),
          qe.call(a, e.message, t, n, s, r),
          (a.cause = e),
          (a.name = e.name),
          i && Object.assign(a, i),
          a
        );
      });
    const Ue = qe;
    const Xe = n(230);
    function Ye(e) {
      return He.isPlainObject(e) || He.isArray(e);
    }
    function Je(e) {
      return He.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }
    function Ke(e, t, n) {
      return e
        ? e
            .concat(t)
            .map(function (e, t) {
              return (e = Je(e)), !n && t ? "[" + e + "]" : e;
            })
            .join(n ? "." : "")
        : t;
    }
    const Qe = He.toFlatObject(He, {}, null, function (e) {
      return /^is[A-Z]/.test(e);
    });
    const Ze = function (e, t, n) {
      if (!He.isObject(e)) throw new TypeError("target must be an object");
      t = t || new (Xe || FormData)();
      const s = (n = He.toFlatObject(
          n,
          { metaTokens: !0, dots: !1, indexes: !1 },
          !1,
          function (e, t) {
            return !He.isUndefined(t[e]);
          }
        )).metaTokens,
        r = n.visitor || d,
        i = n.dots,
        a = n.indexes,
        o =
          (n.Blob || ("undefined" != typeof Blob && Blob)) &&
          (l = t) &&
          He.isFunction(l.append) &&
          "FormData" === l[Symbol.toStringTag] &&
          l[Symbol.iterator];
      var l;
      if (!He.isFunction(r)) throw new TypeError("visitor must be a function");
      function c(e) {
        if (null === e) return "";
        if (He.isDate(e)) return e.toISOString();
        if (!o && He.isBlob(e))
          throw new Ue("Blob is not supported. Use a Buffer instead.");
        return He.isArrayBuffer(e) || He.isTypedArray(e)
          ? o && "function" == typeof Blob
            ? new Blob([e])
            : Buffer.from(e)
          : e;
      }
      function d(e, n, r) {
        let o = e;
        if (e && !r && "object" == typeof e)
          if (He.endsWith(n, "{}"))
            (n = s ? n : n.slice(0, -2)), (e = JSON.stringify(e));
          else if (
            (He.isArray(e) &&
              (function (e) {
                return He.isArray(e) && !e.some(Ye);
              })(e)) ||
            He.isFileList(e) ||
            (He.endsWith(n, "[]") && (o = He.toArray(e)))
          )
            return (
              (n = Je(n)),
              o.forEach(function (e, s) {
                !He.isUndefined(e) &&
                  null !== e &&
                  t.append(
                    !0 === a ? Ke([n], s, i) : null === a ? n : n + "[]",
                    c(e)
                  );
              }),
              !1
            );
        return !!Ye(e) || (t.append(Ke(r, n, i), c(e)), !1);
      }
      const u = [],
        p = Object.assign(Qe, {
          defaultVisitor: d,
          convertValue: c,
          isVisitable: Ye,
        });
      if (!He.isObject(e)) throw new TypeError("data must be an object");
      return (
        (function e(n, s) {
          if (!He.isUndefined(n)) {
            if (-1 !== u.indexOf(n))
              throw Error("Circular reference detected in " + s.join("."));
            u.push(n),
              He.forEach(n, function (n, i) {
                !0 ===
                  (!(He.isUndefined(n) || null === n) &&
                    r.call(t, n, He.isString(i) ? i.trim() : i, s, p)) &&
                  e(n, s ? s.concat(i) : [i]);
              }),
              u.pop();
          }
        })(e),
        t
      );
    };
    function et(e) {
      const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
      };
      return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
        return t[e];
      });
    }
    function tt(e, t) {
      (this._pairs = []), e && Ze(e, this, t);
    }
    const nt = tt.prototype;
    (nt.append = function (e, t) {
      this._pairs.push([e, t]);
    }),
      (nt.toString = function (e) {
        const t = e
          ? function (t) {
              return e.call(this, t, et);
            }
          : et;
        return this._pairs
          .map(function (e) {
            return t(e[0]) + "=" + t(e[1]);
          }, "")
          .join("&");
      });
    const st = tt;
    function rt(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    function it(e, t, n) {
      if (!t) return e;
      const s = (n && n.encode) || rt,
        r = n && n.serialize;
      let i;
      if (
        ((i = r
          ? r(t, n)
          : He.isURLSearchParams(t)
          ? t.toString()
          : new st(t, n).toString(s)),
        i)
      ) {
        const t = e.indexOf("#");
        -1 !== t && (e = e.slice(0, t)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
      }
      return e;
    }
    const at = class {
        constructor() {
          this.handlers = [];
        }
        use(e, t, n) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!n && n.synchronous,
              runWhen: n ? n.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(e) {
          He.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }
      },
      ot = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      },
      lt = "undefined" != typeof URLSearchParams ? URLSearchParams : st,
      ct = FormData,
      dt = (() => {
        let e;
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== (e = navigator.product) &&
              "NativeScript" !== e &&
              "NS" !== e)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      })(),
      ut =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        "function" == typeof self.importScripts,
      pt = {
        isBrowser: !0,
        classes: { URLSearchParams: lt, FormData: ct, Blob },
        isStandardBrowserEnv: dt,
        isStandardBrowserWebWorkerEnv: ut,
        protocols: ["http", "https", "file", "blob", "url", "data"],
      };
    const ft = function (e) {
        function t(e, n, s, r) {
          let i = e[r++];
          const a = Number.isFinite(+i),
            o = r >= e.length;
          if (((i = !i && He.isArray(s) ? s.length : i), o))
            return He.hasOwnProp(s, i) ? (s[i] = [s[i], n]) : (s[i] = n), !a;
          (s[i] && He.isObject(s[i])) || (s[i] = []);
          return (
            t(e, n, s[i], r) &&
              He.isArray(s[i]) &&
              (s[i] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let s;
                const r = n.length;
                let i;
                for (s = 0; s < r; s++) (i = n[s]), (t[i] = e[i]);
                return t;
              })(s[i])),
            !a
          );
        }
        if (He.isFormData(e) && He.isFunction(e.entries)) {
          const n = {};
          return (
            He.forEachEntry(e, (e, s) => {
              t(
                (function (e) {
                  return He.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                    "[]" === e[0] ? "" : e[1] || e[0]
                  );
                })(e),
                s,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      },
      ht = { "Content-Type": void 0 };
    const mt = {
      transitional: ot,
      adapter: ["xhr", "http"],
      transformRequest: [
        function (e, t) {
          const n = t.getContentType() || "",
            s = n.indexOf("application/json") > -1,
            r = He.isObject(e);
          r && He.isHTMLForm(e) && (e = new FormData(e));
          if (He.isFormData(e)) return s && s ? JSON.stringify(ft(e)) : e;
          if (
            He.isArrayBuffer(e) ||
            He.isBuffer(e) ||
            He.isStream(e) ||
            He.isFile(e) ||
            He.isBlob(e)
          )
            return e;
          if (He.isArrayBufferView(e)) return e.buffer;
          if (He.isURLSearchParams(e))
            return (
              t.setContentType(
                "application/x-www-form-urlencoded;charset=utf-8",
                !1
              ),
              e.toString()
            );
          let i;
          if (r) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1)
              return (function (e, t) {
                return Ze(
                  e,
                  new pt.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (e, t, n, s) {
                        return pt.isNode && He.isBuffer(e)
                          ? (this.append(t, e.toString("base64")), !1)
                          : s.defaultVisitor.apply(this, arguments);
                      },
                    },
                    t
                  )
                );
              })(e, this.formSerializer).toString();
            if (
              (i = He.isFileList(e)) ||
              n.indexOf("multipart/form-data") > -1
            ) {
              const t = this.env && this.env.FormData;
              return Ze(
                i ? { "files[]": e } : e,
                t && new t(),
                this.formSerializer
              );
            }
          }
          return r || s
            ? (t.setContentType("application/json", !1),
              (function (e, t, n) {
                if (He.isString(e))
                  try {
                    return (t || JSON.parse)(e), He.trim(e);
                  } catch (e) {
                    if ("SyntaxError" !== e.name) throw e;
                  }
                return (n || JSON.stringify)(e);
              })(e))
            : e;
        },
      ],
      transformResponse: [
        function (e) {
          const t = this.transitional || mt.transitional,
            n = t && t.forcedJSONParsing,
            s = "json" === this.responseType;
          if (e && He.isString(e) && ((n && !this.responseType) || s)) {
            const n = !(t && t.silentJSONParsing) && s;
            try {
              return JSON.parse(e);
            } catch (e) {
              if (n) {
                if ("SyntaxError" === e.name)
                  throw Ue.from(
                    e,
                    Ue.ERR_BAD_RESPONSE,
                    this,
                    null,
                    this.response
                  );
                throw e;
              }
            }
          }
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: pt.classes.FormData, Blob: pt.classes.Blob },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: { common: { Accept: "application/json, text/plain, */*" } },
    };
    He.forEach(["delete", "get", "head"], function (e) {
      mt.headers[e] = {};
    }),
      He.forEach(["post", "put", "patch"], function (e) {
        mt.headers[e] = He.merge(ht);
      });
    const gt = mt,
      vt = He.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ]),
      bt = Symbol("internals");
    function wt(e) {
      return e && String(e).trim().toLowerCase();
    }
    function yt(e) {
      return !1 === e || null == e ? e : He.isArray(e) ? e.map(yt) : String(e);
    }
    function Et(e, t, n, s) {
      return He.isFunction(s)
        ? s.call(this, t, n)
        : He.isString(t)
        ? He.isString(s)
          ? -1 !== t.indexOf(s)
          : He.isRegExp(s)
          ? s.test(t)
          : void 0
        : void 0;
    }
    class St {
      constructor(e) {
        e && this.set(e);
      }
      set(e, t, n) {
        const s = this;
        function r(e, t, n) {
          const r = wt(t);
          if (!r) throw new Error("header name must be a non-empty string");
          const i = He.findKey(s, r);
          (!i ||
            void 0 === s[i] ||
            !0 === n ||
            (void 0 === n && !1 !== s[i])) &&
            (s[i || t] = yt(e));
        }
        const i = (e, t) => He.forEach(e, (e, n) => r(e, n, t));
        return (
          He.isPlainObject(e) || e instanceof this.constructor
            ? i(e, t)
            : He.isString(e) &&
              (e = e.trim()) &&
              !/^[-_a-zA-Z]+$/.test(e.trim())
            ? i(
                ((e) => {
                  const t = {};
                  let n, s, r;
                  return (
                    e &&
                      e.split("\n").forEach(function (e) {
                        (r = e.indexOf(":")),
                          (n = e.substring(0, r).trim().toLowerCase()),
                          (s = e.substring(r + 1).trim()),
                          !n ||
                            (t[n] && vt[n]) ||
                            ("set-cookie" === n
                              ? t[n]
                                ? t[n].push(s)
                                : (t[n] = [s])
                              : (t[n] = t[n] ? t[n] + ", " + s : s));
                      }),
                    t
                  );
                })(e),
                t
              )
            : null != e && r(t, e, n),
          this
        );
      }
      get(e, t) {
        if ((e = wt(e))) {
          const n = He.findKey(this, e);
          if (n) {
            const e = this[n];
            if (!t) return e;
            if (!0 === t)
              return (function (e) {
                const t = Object.create(null),
                  n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                let s;
                for (; (s = n.exec(e)); ) t[s[1]] = s[2];
                return t;
              })(e);
            if (He.isFunction(t)) return t.call(this, e, n);
            if (He.isRegExp(t)) return t.exec(e);
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(e, t) {
        if ((e = wt(e))) {
          const n = He.findKey(this, e);
          return !(!n || (t && !Et(0, this[n], n, t)));
        }
        return !1;
      }
      delete(e, t) {
        const n = this;
        let s = !1;
        function r(e) {
          if ((e = wt(e))) {
            const r = He.findKey(n, e);
            !r || (t && !Et(0, n[r], r, t)) || (delete n[r], (s = !0));
          }
        }
        return He.isArray(e) ? e.forEach(r) : r(e), s;
      }
      clear() {
        return Object.keys(this).forEach(this.delete.bind(this));
      }
      normalize(e) {
        const t = this,
          n = {};
        return (
          He.forEach(this, (s, r) => {
            const i = He.findKey(n, r);
            if (i) return (t[i] = yt(s)), void delete t[r];
            const a = e
              ? (function (e) {
                  return e
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, t, n) => t.toUpperCase() + n
                    );
                })(r)
              : String(r).trim();
            a !== r && delete t[r], (t[a] = yt(s)), (n[a] = !0);
          }),
          this
        );
      }
      concat(...e) {
        return this.constructor.concat(this, ...e);
      }
      toJSON(e) {
        const t = Object.create(null);
        return (
          He.forEach(this, (n, s) => {
            null != n &&
              !1 !== n &&
              (t[s] = e && He.isArray(n) ? n.join(", ") : n);
          }),
          t
        );
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON())
          .map(([e, t]) => e + ": " + t)
          .join("\n");
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(e) {
        return e instanceof this ? e : new this(e);
      }
      static concat(e, ...t) {
        const n = new this(e);
        return t.forEach((e) => n.set(e)), n;
      }
      static accessor(e) {
        const t = (this[bt] = this[bt] = { accessors: {} }).accessors,
          n = this.prototype;
        function s(e) {
          const s = wt(e);
          t[s] ||
            (!(function (e, t) {
              const n = He.toCamelCase(" " + t);
              ["get", "set", "has"].forEach((s) => {
                Object.defineProperty(e, s + n, {
                  value: function (e, n, r) {
                    return this[s].call(this, t, e, n, r);
                  },
                  configurable: !0,
                });
              });
            })(n, e),
            (t[s] = !0));
        }
        return He.isArray(e) ? e.forEach(s) : s(e), this;
      }
    }
    St.accessor([
      "Content-Type",
      "Content-Length",
      "Accept",
      "Accept-Encoding",
      "User-Agent",
    ]),
      He.freezeMethods(St.prototype),
      He.freezeMethods(St);
    const Ct = St;
    function Tt(e, t) {
      const n = this || gt,
        s = t || n,
        r = Ct.from(s.headers);
      let i = s.data;
      return (
        He.forEach(e, function (e) {
          i = e.call(n, i, r.normalize(), t ? t.status : void 0);
        }),
        r.normalize(),
        i
      );
    }
    function xt(e) {
      return !(!e || !e.__CANCEL__);
    }
    function Ot(e, t, n) {
      Ue.call(this, null == e ? "canceled" : e, Ue.ERR_CANCELED, t, n),
        (this.name = "CanceledError");
    }
    He.inherits(Ot, Ue, { __CANCEL__: !0 });
    const _t = Ot;
    const At = pt.isStandardBrowserEnv
      ? {
          write: function (e, t, n, s, r, i) {
            const a = [];
            a.push(e + "=" + encodeURIComponent(t)),
              He.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
              He.isString(s) && a.push("path=" + s),
              He.isString(r) && a.push("domain=" + r),
              !0 === i && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
    function Lt(e, t) {
      return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
        ? (function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
          })(e, t)
        : t;
    }
    const kt = pt.isStandardBrowserEnv
      ? (function () {
          const e = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement("a");
          let n;
          function s(n) {
            let s = n;
            return (
              e && (t.setAttribute("href", s), (s = t.href)),
              t.setAttribute("href", s),
              {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, "") : "",
                hash: t.hash ? t.hash.replace(/^#/, "") : "",
                hostname: t.hostname,
                port: t.port,
                pathname:
                  "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
              }
            );
          }
          return (
            (n = s(window.location.href)),
            function (e) {
              const t = He.isString(e) ? s(e) : e;
              return t.protocol === n.protocol && t.host === n.host;
            }
          );
        })()
      : function () {
          return !0;
        };
    const Pt = function (e, t) {
      e = e || 10;
      const n = new Array(e),
        s = new Array(e);
      let r,
        i = 0,
        a = 0;
      return (
        (t = void 0 !== t ? t : 1e3),
        function (o) {
          const l = Date.now(),
            c = s[a];
          r || (r = l), (n[i] = o), (s[i] = l);
          let d = a,
            u = 0;
          for (; d !== i; ) (u += n[d++]), (d %= e);
          if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), l - r < t))
            return;
          const p = c && l - c;
          return p ? Math.round((1e3 * u) / p) : void 0;
        }
      );
    };
    function Mt(e, t) {
      let n = 0;
      const s = Pt(50, 250);
      return (r) => {
        const i = r.loaded,
          a = r.lengthComputable ? r.total : void 0,
          o = i - n,
          l = s(o);
        n = i;
        const c = {
          loaded: i,
          total: a,
          progress: a ? i / a : void 0,
          bytes: o,
          rate: l || void 0,
          estimated: l && a && i <= a ? (a - i) / l : void 0,
          event: r,
        };
        (c[t ? "download" : "upload"] = !0), e(c);
      };
    }
    const $t =
        "undefined" != typeof XMLHttpRequest &&
        function (e) {
          return new Promise(function (t, n) {
            let s = e.data;
            const r = Ct.from(e.headers).normalize(),
              i = e.responseType;
            let a;
            function o() {
              e.cancelToken && e.cancelToken.unsubscribe(a),
                e.signal && e.signal.removeEventListener("abort", a);
            }
            He.isFormData(s) &&
              (pt.isStandardBrowserEnv || pt.isStandardBrowserWebWorkerEnv) &&
              r.setContentType(!1);
            let l = new XMLHttpRequest();
            if (e.auth) {
              const t = e.auth.username || "",
                n = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              r.set("Authorization", "Basic " + btoa(t + ":" + n));
            }
            const c = Lt(e.baseURL, e.url);
            function d() {
              if (!l) return;
              const s = Ct.from(
                "getAllResponseHeaders" in l && l.getAllResponseHeaders()
              );
              !(function (e, t, n) {
                const s = n.config.validateStatus;
                n.status && s && !s(n.status)
                  ? t(
                      new Ue(
                        "Request failed with status code " + n.status,
                        [Ue.ERR_BAD_REQUEST, Ue.ERR_BAD_RESPONSE][
                          Math.floor(n.status / 100) - 4
                        ],
                        n.config,
                        n.request,
                        n
                      )
                    )
                  : e(n);
              })(
                function (e) {
                  t(e), o();
                },
                function (e) {
                  n(e), o();
                },
                {
                  data:
                    i && "text" !== i && "json" !== i
                      ? l.response
                      : l.responseText,
                  status: l.status,
                  statusText: l.statusText,
                  headers: s,
                  config: e,
                  request: l,
                }
              ),
                (l = null);
            }
            if (
              (l.open(
                e.method.toUpperCase(),
                it(c, e.params, e.paramsSerializer),
                !0
              ),
              (l.timeout = e.timeout),
              "onloadend" in l
                ? (l.onloadend = d)
                : (l.onreadystatechange = function () {
                    l &&
                      4 === l.readyState &&
                      (0 !== l.status ||
                        (l.responseURL &&
                          0 === l.responseURL.indexOf("file:"))) &&
                      setTimeout(d);
                  }),
              (l.onabort = function () {
                l &&
                  (n(new Ue("Request aborted", Ue.ECONNABORTED, e, l)),
                  (l = null));
              }),
              (l.onerror = function () {
                n(new Ue("Network Error", Ue.ERR_NETWORK, e, l)), (l = null);
              }),
              (l.ontimeout = function () {
                let t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded";
                const s = e.transitional || ot;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  n(
                    new Ue(
                      t,
                      s.clarifyTimeoutError ? Ue.ETIMEDOUT : Ue.ECONNABORTED,
                      e,
                      l
                    )
                  ),
                  (l = null);
              }),
              pt.isStandardBrowserEnv)
            ) {
              const t =
                (e.withCredentials || kt(c)) &&
                e.xsrfCookieName &&
                At.read(e.xsrfCookieName);
              t && r.set(e.xsrfHeaderName, t);
            }
            void 0 === s && r.setContentType(null),
              "setRequestHeader" in l &&
                He.forEach(r.toJSON(), function (e, t) {
                  l.setRequestHeader(t, e);
                }),
              He.isUndefined(e.withCredentials) ||
                (l.withCredentials = !!e.withCredentials),
              i && "json" !== i && (l.responseType = e.responseType),
              "function" == typeof e.onDownloadProgress &&
                l.addEventListener("progress", Mt(e.onDownloadProgress, !0)),
              "function" == typeof e.onUploadProgress &&
                l.upload &&
                l.upload.addEventListener("progress", Mt(e.onUploadProgress)),
              (e.cancelToken || e.signal) &&
                ((a = (t) => {
                  l &&
                    (n(!t || t.type ? new _t(null, e, l) : t),
                    l.abort(),
                    (l = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(a),
                e.signal &&
                  (e.signal.aborted
                    ? a()
                    : e.signal.addEventListener("abort", a)));
            const u = (function (e) {
              const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
              return (t && t[1]) || "";
            })(c);
            u && -1 === pt.protocols.indexOf(u)
              ? n(
                  new Ue(
                    "Unsupported protocol " + u + ":",
                    Ue.ERR_BAD_REQUEST,
                    e
                  )
                )
              : l.send(s || null);
          });
        },
      It = { http: null, xhr: $t };
    He.forEach(It, (e, t) => {
      if (e) {
        try {
          Object.defineProperty(e, "name", { value: t });
        } catch (e) {}
        Object.defineProperty(e, "adapterName", { value: t });
      }
    });
    const jt = (e) => {
      e = He.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, s;
      for (
        let r = 0;
        r < t && ((n = e[r]), !(s = He.isString(n) ? It[n.toLowerCase()] : n));
        r++
      );
      if (!s) {
        if (!1 === s)
          throw new Ue(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          );
        throw new Error(
          He.hasOwnProp(It, n)
            ? `Adapter '${n}' is not available in the build`
            : `Unknown adapter '${n}'`
        );
      }
      if (!He.isFunction(s)) throw new TypeError("adapter is not a function");
      return s;
    };
    function Rt(e) {
      if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
      )
        throw new _t(null, e);
    }
    function Nt(e) {
      Rt(e),
        (e.headers = Ct.from(e.headers)),
        (e.data = Tt.call(e, e.transformRequest)),
        -1 !== ["post", "put", "patch"].indexOf(e.method) &&
          e.headers.setContentType("application/x-www-form-urlencoded", !1);
      return jt(e.adapter || gt.adapter)(e).then(
        function (t) {
          return (
            Rt(e),
            (t.data = Tt.call(e, e.transformResponse, t)),
            (t.headers = Ct.from(t.headers)),
            t
          );
        },
        function (t) {
          return (
            xt(t) ||
              (Rt(e),
              t &&
                t.response &&
                ((t.response.data = Tt.call(
                  e,
                  e.transformResponse,
                  t.response
                )),
                (t.response.headers = Ct.from(t.response.headers)))),
            Promise.reject(t)
          );
        }
      );
    }
    const Dt = (e) => (e instanceof Ct ? e.toJSON() : e);
    function Bt(e, t) {
      t = t || {};
      const n = {};
      function s(e, t, n) {
        return He.isPlainObject(e) && He.isPlainObject(t)
          ? He.merge.call({ caseless: n }, e, t)
          : He.isPlainObject(t)
          ? He.merge({}, t)
          : He.isArray(t)
          ? t.slice()
          : t;
      }
      function r(e, t, n) {
        return He.isUndefined(t)
          ? He.isUndefined(e)
            ? void 0
            : s(void 0, e, n)
          : s(e, t, n);
      }
      function i(e, t) {
        if (!He.isUndefined(t)) return s(void 0, t);
      }
      function a(e, t) {
        return He.isUndefined(t)
          ? He.isUndefined(e)
            ? void 0
            : s(void 0, e)
          : s(void 0, t);
      }
      function o(n, r, i) {
        return i in t ? s(n, r) : i in e ? s(void 0, n) : void 0;
      }
      const l = {
        url: i,
        method: i,
        data: i,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: o,
        headers: (e, t) => r(Dt(e), Dt(t), !0),
      };
      return (
        He.forEach(Object.keys(e).concat(Object.keys(t)), function (s) {
          const i = l[s] || r,
            a = i(e[s], t[s], s);
          (He.isUndefined(a) && i !== o) || (n[s] = a);
        }),
        n
      );
    }
    const zt = "1.2.1",
      Ft = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      (e, t) => {
        Ft[e] = function (n) {
          return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
        };
      }
    );
    const Gt = {};
    Ft.transitional = function (e, t, n) {
      function s(e, t) {
        return (
          "[Axios v1.2.1] Transitional option '" +
          e +
          "'" +
          t +
          (n ? ". " + n : "")
        );
      }
      return (n, r, i) => {
        if (!1 === e)
          throw new Ue(
            s(r, " has been removed" + (t ? " in " + t : "")),
            Ue.ERR_DEPRECATED
          );
        return (
          t &&
            !Gt[r] &&
            ((Gt[r] = !0),
            console.warn(
              s(
                r,
                " has been deprecated since v" +
                  t +
                  " and will be removed in the near future"
              )
            )),
          !e || e(n, r, i)
        );
      };
    };
    const Ht = {
        assertOptions: function (e, t, n) {
          if ("object" != typeof e)
            throw new Ue("options must be an object", Ue.ERR_BAD_OPTION_VALUE);
          const s = Object.keys(e);
          let r = s.length;
          for (; r-- > 0; ) {
            const i = s[r],
              a = t[i];
            if (a) {
              const t = e[i],
                n = void 0 === t || a(t, i, e);
              if (!0 !== n)
                throw new Ue(
                  "option " + i + " must be " + n,
                  Ue.ERR_BAD_OPTION_VALUE
                );
            } else if (!0 !== n)
              throw new Ue("Unknown option " + i, Ue.ERR_BAD_OPTION);
          }
        },
        validators: Ft,
      },
      qt = Ht.validators;
    class Wt {
      constructor(e) {
        (this.defaults = e),
          (this.interceptors = { request: new at(), response: new at() });
      }
      request(e, t) {
        "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
          (t = Bt(this.defaults, t));
        const { transitional: n, paramsSerializer: s, headers: r } = t;
        let i;
        void 0 !== n &&
          Ht.assertOptions(
            n,
            {
              silentJSONParsing: qt.transitional(qt.boolean),
              forcedJSONParsing: qt.transitional(qt.boolean),
              clarifyTimeoutError: qt.transitional(qt.boolean),
            },
            !1
          ),
          void 0 !== s &&
            Ht.assertOptions(
              s,
              { encode: qt.function, serialize: qt.function },
              !0
            ),
          (t.method = (
            t.method ||
            this.defaults.method ||
            "get"
          ).toLowerCase()),
          (i = r && He.merge(r.common, r[t.method])),
          i &&
            He.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete r[e];
              }
            ),
          (t.headers = Ct.concat(i, r));
        const a = [];
        let o = !0;
        this.interceptors.request.forEach(function (e) {
          ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
            ((o = o && e.synchronous), a.unshift(e.fulfilled, e.rejected));
        });
        const l = [];
        let c;
        this.interceptors.response.forEach(function (e) {
          l.push(e.fulfilled, e.rejected);
        });
        let d,
          u = 0;
        if (!o) {
          const e = [Nt.bind(this), void 0];
          for (
            e.unshift.apply(e, a),
              e.push.apply(e, l),
              d = e.length,
              c = Promise.resolve(t);
            u < d;

          )
            c = c.then(e[u++], e[u++]);
          return c;
        }
        d = a.length;
        let p = t;
        for (u = 0; u < d; ) {
          const e = a[u++],
            t = a[u++];
          try {
            p = e(p);
          } catch (e) {
            t.call(this, e);
            break;
          }
        }
        try {
          c = Nt.call(this, p);
        } catch (e) {
          return Promise.reject(e);
        }
        for (u = 0, d = l.length; u < d; ) c = c.then(l[u++], l[u++]);
        return c;
      }
      getUri(e) {
        return it(
          Lt((e = Bt(this.defaults, e)).baseURL, e.url),
          e.params,
          e.paramsSerializer
        );
      }
    }
    He.forEach(["delete", "get", "head", "options"], function (e) {
      Wt.prototype[e] = function (t, n) {
        return this.request(
          Bt(n || {}, { method: e, url: t, data: (n || {}).data })
        );
      };
    }),
      He.forEach(["post", "put", "patch"], function (e) {
        function t(t) {
          return function (n, s, r) {
            return this.request(
              Bt(r || {}, {
                method: e,
                headers: t ? { "Content-Type": "multipart/form-data" } : {},
                url: n,
                data: s,
              })
            );
          };
        }
        (Wt.prototype[e] = t()), (Wt.prototype[e + "Form"] = t(!0));
      });
    const Vt = Wt;
    class Ut {
      constructor(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        const n = this;
        this.promise.then((e) => {
          if (!n._listeners) return;
          let t = n._listeners.length;
          for (; t-- > 0; ) n._listeners[t](e);
          n._listeners = null;
        }),
          (this.promise.then = (e) => {
            let t;
            const s = new Promise((e) => {
              n.subscribe(e), (t = e);
            }).then(e);
            return (
              (s.cancel = function () {
                n.unsubscribe(t);
              }),
              s
            );
          }),
          e(function (e, s, r) {
            n.reason || ((n.reason = new _t(e, s, r)), t(n.reason));
          });
      }
      throwIfRequested() {
        if (this.reason) throw this.reason;
      }
      subscribe(e) {
        this.reason
          ? e(this.reason)
          : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
      }
      unsubscribe(e) {
        if (!this._listeners) return;
        const t = this._listeners.indexOf(e);
        -1 !== t && this._listeners.splice(t, 1);
      }
      static source() {
        let e;
        return {
          token: new Ut(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }
    }
    const Xt = Ut;
    const Yt = (function e(t) {
      const n = new Vt(t),
        s = fe(Vt.prototype.request, n);
      return (
        He.extend(s, Vt.prototype, n, { allOwnKeys: !0 }),
        He.extend(s, n, null, { allOwnKeys: !0 }),
        (s.create = function (n) {
          return e(Bt(t, n));
        }),
        s
      );
    })(gt);
    (Yt.Axios = Vt),
      (Yt.CanceledError = _t),
      (Yt.CancelToken = Xt),
      (Yt.isCancel = xt),
      (Yt.VERSION = zt),
      (Yt.toFormData = Ze),
      (Yt.AxiosError = Ue),
      (Yt.Cancel = Yt.CanceledError),
      (Yt.all = function (e) {
        return Promise.all(e);
      }),
      (Yt.spread = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      }),
      (Yt.isAxiosError = function (e) {
        return He.isObject(e) && !0 === e.isAxiosError;
      }),
      (Yt.mergeConfig = Bt),
      (Yt.AxiosHeaders = Ct),
      (Yt.formToJSON = (e) => ft(He.isHTMLForm(e) ? new FormData(e) : e)),
      (Yt.default = Yt);
    const Jt = Yt;
    let Kt = document.querySelector(".loadmore-btn");
    if (Kt) {
      let e = 0;
      Kt.addEventListener("click", () => {
        Jt({
          method: "get",
          url: "https://my-json-server.typicode.com/RustySPC/testMar/posts",
          withCredentials: !1,
        }).then((t) => {
          15 == e && (Kt.style.display = "none"), console.log(e);
          const n = document.querySelector(".cards__row");
          document.querySelector(".cards__column").innerHTML;
          for (let s = e; s < e + 5; s++) {
            let e = Qt(t.data[s]);
            n.innerHTML = n.innerHTML + e;
          }
          e += 5;
        });
      });
    }
    function Qt(e) {
      return (
        '<div class="cards__column"><div class="cards__image"><img src="' +
        e.image +
        '" alt=""></div><div class="cards__content"><div class="cards__name">' +
        e.name +
        '</div><div class="cards__info">' +
        e.info +
        '</div><div class="cards__about">' +
        e.about +
        '</div><div class="cards__data">' +
        e.data +
        '</div><div class="cards__btn btn-black"><a href="" class="btn-black__link">Continue reading</a></div></div></div>'
      );
    }
    let Zt = document.querySelectorAll(".input");
    if (Zt.length > 0)
      for (let e = 0; e < Zt.length; e++) {
        const t = Zt[e];
        t.addEventListener("focusin", () => {
          t.parentElement.classList.add("_focus");
        }),
          t.addEventListener("focusout", () => {
            "" === t.value && t.parentElement.classList.remove("_focus");
          });
      }
    [].forEach.call(document.querySelectorAll(".tel"), function (e) {
      var t;
      function n(e) {
        e.keyCode && (t = e.keyCode),
          this.selectionStart < 3 && e.preventDefault();
        var n = "+7 (___) ___ __ __",
          s = 0,
          r = n.replace(/\D/g, ""),
          i = this.value.replace(/\D/g, ""),
          a = n.replace(/[_\d]/g, function (e) {
            return s < i.length ? i.charAt(s++) || r.charAt(s) : e;
          });
        -1 != (s = a.indexOf("_")) && (s < 5 && (s = 3), (a = a.slice(0, s)));
        var o = n
          .substr(0, this.value.length)
          .replace(/_+/g, function (e) {
            return "\\d{1," + e.length + "}";
          })
          .replace(/[+()]/g, "\\$&");
        (!(o = new RegExp("^" + o + "$")).test(this.value) ||
          this.value.length < 5 ||
          (t > 47 && t < 58)) &&
          (this.value = a),
          "blur" == e.type && this.value.length < 5 && (this.value = "");
      }
      e.addEventListener("input", n, !1),
        e.addEventListener("focus", n, !1),
        e.addEventListener("blur", n, !1),
        e.addEventListener("keydown", n, !1);
    }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 0);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            s &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? r(e)
                  : i(e);
              })(),
              document.querySelector(".menu").classList.toggle("menu-open"),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && t.any()) {
          function e() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", e), e();
        }
      })(),
      (function () {
        ue = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          n = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          s = e.dataset.scroll ? e.dataset.scroll : 1;
        let r,
          i = 0;
        document.addEventListener("windowScroll", function (a) {
          const o = window.scrollY;
          clearTimeout(r),
            o >= s
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (o > i
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (r = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, n))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (i = o <= 0 ? 0 : o);
        });
      })();
  })();
})();
