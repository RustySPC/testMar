(() => {
  var e = {
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
            i = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            o = {
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
            a = function (t) {
              return e({}, o, t);
            },
            l = function (e, t) {
              var n,
                s = "LazyLoad::Initialized",
                i = new e(t);
              try {
                n = new CustomEvent(s, { detail: { instance: i } });
              } catch (e) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  s,
                  !1,
                  !1,
                  { instance: i }
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            p = "poster",
            h = "llOriginalAttrs",
            f = "data",
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
            T = function (e) {
              return S(e, E);
            },
            C = function (e, t) {
              return (function (e, t, n) {
                var s = "data-ll-status";
                null !== n ? e.setAttribute(s, n) : e.removeAttribute(s);
              })(e, 0, t);
            },
            x = function (e) {
              return C(e, null);
            },
            O = function (e) {
              return null === T(e);
            },
            _ = function (e) {
              return T(e) === w;
            },
            L = [m, g, v, b],
            A = function (e, t, n, s) {
              e &&
                (void 0 === s ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, s));
            },
            k = function (e, t) {
              i
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            P = function (e, t) {
              i
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
            N = function (e, t) {
              e && (e.toLoadCount = t);
            },
            R = function (e) {
              for (var t, n = [], s = 0; (t = e.children[s]); s += 1)
                "SOURCE" === t.tagName && n.push(t);
              return n;
            },
            D = function (e, t) {
              var n = e.parentNode;
              n && "PICTURE" === n.tagName && R(n).forEach(t);
            },
            B = function (e, t) {
              R(e).forEach(t);
            },
            j = [c],
            z = [c, p],
            F = [c, d, u],
            q = [f],
            G = function (e) {
              return !!e[h];
            },
            H = function (e) {
              return e[h];
            },
            W = function (e) {
              return delete e[h];
            },
            U = function (e, t) {
              if (!G(e)) {
                var n = {};
                t.forEach(function (t) {
                  n[t] = e.getAttribute(t);
                }),
                  (e[h] = n);
              }
            },
            V = function (e, t) {
              if (G(e)) {
                var n = H(e);
                t.forEach(function (t) {
                  !(function (e, t, n) {
                    n ? e.setAttribute(t, n) : e.removeAttribute(t);
                  })(e, t, n[t]);
                });
              }
            },
            X = function (e, t, n) {
              k(e, t.class_applied),
                C(e, v),
                n &&
                  (t.unobserve_completed && $(e, t),
                  A(t.callback_applied, e, n));
            },
            Y = function (e, t, n) {
              k(e, t.class_loading),
                C(e, m),
                n && (I(n, 1), A(t.callback_loading, e, n));
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
                D(e, function (e) {
                  U(e, F), K(e, t);
                }),
                  U(e, F),
                  K(e, t);
              },
              IFRAME: function (e, t) {
                U(e, j), J(e, c, S(e, t.data_src));
              },
              VIDEO: function (e, t) {
                B(e, function (e) {
                  U(e, j), J(e, c, S(e, t.data_src));
                }),
                  U(e, z),
                  J(e, p, S(e, t.data_poster)),
                  J(e, c, S(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                U(e, q), J(e, f, S(e, t.data_src));
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
                A(e.callback_finish, t);
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
            ie = function (e) {
              if (se(e)) {
                var t = e.llEvLisnrs;
                for (var n in t) {
                  var s = t[n];
                  ne(e, n, s);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, n) {
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
            oe = function (e, t, n) {
              var s = M(e) || e;
              se(s) ||
                (function (e, t, n) {
                  se(e) || (e.llEvLisnrs = {});
                  var s = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, s, t), te(e, "error", n);
                })(
                  s,
                  function (i) {
                    !(function (e, t, n, s) {
                      var i = _(t);
                      re(t, n, s),
                        k(t, n.class_loaded),
                        C(t, g),
                        A(n.callback_loaded, t, s),
                        i || ee(n, s);
                    })(0, e, t, n),
                      ie(s);
                  },
                  function (i) {
                    !(function (e, t, n, s) {
                      var i = _(t);
                      re(t, n, s),
                        k(t, n.class_error),
                        C(t, b),
                        A(n.callback_error, t, s),
                        n.restore_on_error && V(t, F),
                        i || ee(n, s);
                    })(0, e, t, n),
                      ie(s);
                  }
                );
            },
            ae = function (e, t, n) {
              !(function (e) {
                return Z.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, n) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      oe(e, t, n),
                      (function (e) {
                        G(e) ||
                          (e[h] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, n) {
                        var s = S(e, t.data_bg),
                          i = S(e, t.data_bg_hidpi),
                          o = r && i ? i : s;
                        o &&
                          ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                          M(e).setAttribute(c, o),
                          Y(e, t, n));
                      })(e, t, n),
                      (function (e, t, n) {
                        var s = S(e, t.data_bg_multi),
                          i = S(e, t.data_bg_multi_hidpi),
                          o = r && i ? i : s;
                        o && ((e.style.backgroundImage = o), X(e, t, n));
                      })(e, t, n),
                      (function (e, t, n) {
                        var s = S(e, t.data_bg_set);
                        if (s) {
                          var i = s.split("|"),
                            r = i.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = i.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            X(e, t, n);
                        }
                      })(e, t, n);
                  })(e, t, n)
                : (function (e, t, n) {
                    oe(e, t, n),
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
              D(e, function (e) {
                V(e, F);
              }),
                V(e, F);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                V(e, j);
              },
              VIDEO: function (e) {
                B(e, function (e) {
                  V(e, j);
                }),
                  V(e, z),
                  e.load();
              },
              OBJECT: function (e) {
                V(e, q);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (G(e)) {
                        var t = H(e);
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
            he = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, n) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, n, s) {
                      var i = (function (e) {
                        return L.indexOf(T(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        k(e, n.class_entered),
                        P(e, n.class_exited),
                        (function (e, t, n) {
                          t.unobserve_entered && $(e, n);
                        })(e, n, s),
                        A(n.callback_enter, e, t, s),
                        i || ae(e, n, s);
                    })(e.target, e, t, n)
                  : (function (e, t, n, s) {
                      O(e) ||
                        (k(e, n.class_exited),
                        (function (e, t, n, s) {
                          n.cancel_on_exit &&
                            (function (e) {
                              return T(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ie(e),
                            (function (e) {
                              D(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            P(e, n.class_loading),
                            I(s, -1),
                            x(e),
                            A(n.callback_cancel, e, t, s));
                        })(e, t, n, s),
                        A(n.callback_exit, e, t, s));
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
                return T(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return me(e).filter(O);
              })(e || ge(t));
            },
            we = function (e, n) {
              var i = a(e);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (e, t) {
                  s &&
                    !he(e) &&
                    (t._observer = new IntersectionObserver(
                      function (n) {
                        fe(n, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(i, this),
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
                })(i, this),
                this.update(n);
            };
          return (
            (we.prototype = {
              update: function (e) {
                var t,
                  i,
                  r = this._settings,
                  o = be(e, r);
                N(this, o.length),
                  !n && s
                    ? he(r)
                      ? (function (e, t, n) {
                          e.forEach(function (e) {
                            -1 !== pe.indexOf(e.tagName) &&
                              (function (e, t, n) {
                                e.setAttribute("loading", "lazy"),
                                  oe(e, t, n),
                                  (function (e, t) {
                                    var n = Q[e.tagName];
                                    n && n(e, t);
                                  })(e, t),
                                  C(e, w);
                              })(e, t, n);
                          }),
                            N(n, 0);
                        })(o, r, this)
                      : ((i = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, i))
                    : this.loadAll(o);
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
                  $(e, t), ae(e, n, t);
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
              var n = a(t);
              ae(e, n);
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
    },
    t = {};
  function n(s) {
    var i = t[s];
    if (void 0 !== i) return i.exports;
    var r = (t[s] = { exports: {} });
    return e[s].call(r.exports, r, r.exports, n), r.exports;
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
      i = (e = 500) => {
        document.documentElement.classList.contains("lock") ? r(e) : o(e);
      },
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
      o = (e = 500) => {
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
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function l(e) {
      return e.filter(function (e, t, n) {
        return n.indexOf(e) === t;
      });
    }
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const n = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${n}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : i(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            s &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              i(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          n = Array.prototype.slice.call(t),
          s = n.indexOf(document.activeElement);
        e.shiftKey && 0 === s && (n[n.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            s !== n.length - 1 ||
            (n[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && a(`[Попапос]: ${e}`);
      }
    })({});
    let c = (e, t = !1, n = 500, s = 0) => {
      const i = document.querySelector(e);
      if (i) {
        let o = "",
          l = 0;
        t &&
          ((o = "header.header"), (l = document.querySelector(o).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: n,
          header: o,
          offset: s,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (r(), document.documentElement.classList.remove("menu")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(i, "", c);
        else {
          let e = i.getBoundingClientRect().top + scrollY;
          (e = l ? e - l : e),
            (e = s ? e - s : e),
            window.scrollTo({ top: e, behavior: "smooth" });
        }
        a(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else a(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    let d = {
      getErrors(e) {
        let t = 0,
          n = e.querySelectorAll("*[data-required]");
        return (
          n.length &&
            n.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let n = t.querySelectorAll("input,textarea");
            for (let e = 0; e < n.length; e++) {
              const t = n[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                d.removeError(t);
            }
            let s = t.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (e.select) {
              let n = t.querySelectorAll(".select");
              if (n.length)
                for (let t = 0; t < n.length; t++) {
                  const s = n[t].querySelector("select");
                  e.select.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function u(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function p(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : u(t[n]) && u(e[n]) && Object.keys(t[n]).length > 0 && p(e[n], t[n]);
      });
    }
    const h = {
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
    function f() {
      const e = "undefined" != typeof document ? document : {};
      return p(e, h), e;
    }
    const m = {
      document: h,
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
    function g() {
      const e = "undefined" != typeof window ? window : {};
      return p(e, m), e;
    }
    class v extends Array {
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
    function b(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...b(e)) : t.push(e);
        }),
        t
      );
    }
    function w(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function y(e, t) {
      const n = g(),
        s = f();
      let i = [];
      if (!t && e instanceof v) return e;
      if (!e) return new v(i);
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
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              s = t.querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) n.push(s[e]);
            return n;
          })(e.trim(), t || s);
      } else if (e.nodeType || e === n || e === s) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof v) return e;
        i = e;
      }
      return new v(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(i)
      );
    }
    y.fn = v.prototype;
    const E = "resize scroll".split(" ");
    function S(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            E.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : y(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    S("click"),
      S("blur"),
      S("focus"),
      S("focusin"),
      S("focusout"),
      S("keyup"),
      S("keydown"),
      S("keypress"),
      S("submit"),
      S("change"),
      S("mousedown"),
      S("mousemove"),
      S("mouseup"),
      S("mouseenter"),
      S("mouseleave"),
      S("mouseout"),
      S("mouseover"),
      S("touchstart"),
      S("touchend"),
      S("touchmove"),
      S("resize"),
      S("scroll");
    const T = {
      addClass: function (...e) {
        const t = b(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = b(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = b(e.map((e) => e.split(" ")));
        return (
          w(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = b(e.map((e) => e.split(" ")));
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
        let [t, n, s, i] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), y(t).is(n))) s.apply(t, i);
          else {
            const e = y(t).parents();
            for (let t = 0; t < e.length; t += 1)
              y(e[t]).is(n) && s.apply(e[t], i);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        "function" == typeof e[1] && (([t, s, i] = e), (n = void 0)),
          i || (i = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: s, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: s, proxyListener: o }),
                t.addEventListener(e, o, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, s, i] = e;
        "function" == typeof e[1] && (([t, s, i] = e), (n = void 0)),
          i || (i = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!n && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : n && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const n = o[e];
                (s && n.listener === s) ||
                (s &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === s)
                  ? (r.removeEventListener(t, n.proxyListener, i),
                    o.splice(e, 1))
                  : s ||
                    (r.removeEventListener(t, n.proxyListener, i),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = g(),
          n = e[0].split(" "),
          s = e[1];
        for (let i = 0; i < n.length; i += 1) {
          const r = n[i];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(r, {
                detail: s,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(n),
                (i.dom7EventData = []),
                delete i.dom7EventData;
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
        const e = g();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = g(),
            t = f(),
            n = this[0],
            s = n.getBoundingClientRect(),
            i = t.body,
            r = n.clientTop || i.clientTop || 0,
            o = n.clientLeft || i.clientLeft || 0,
            a = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: s.top + a - r, left: s.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const n = g();
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
        const t = g(),
          n = f(),
          s = this[0];
        let i, r;
        if (!s || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (s.matches) return s.matches(e);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          if (s.msMatchesSelector) return s.msMatchesSelector(e);
          for (i = y(e), r = 0; r < i.length; r += 1) if (i[r] === s) return !0;
          return !1;
        }
        if (e === n) return s === n;
        if (e === t) return s === t;
        if (e.nodeType || e instanceof v) {
          for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
            if (i[r] === s) return !0;
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
        if (e > t - 1) return y([]);
        if (e < 0) {
          const n = t + e;
          return y(n < 0 ? [] : [this[n]]);
        }
        return y([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = f();
        for (let s = 0; s < e.length; s += 1) {
          t = e[s];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const s = n.createElement("div");
              for (s.innerHTML = t; s.firstChild; )
                this[e].appendChild(s.firstChild);
            } else if (t instanceof v)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = f();
        let n, s;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1)
              this[n].insertBefore(i.childNodes[s], this[n].childNodes[0]);
          } else if (e instanceof v)
            for (s = 0; s < e.length; s += 1)
              this[n].insertBefore(e[s], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && y(this[0].nextElementSibling).is(e)
              ? y([this[0].nextElementSibling])
              : y([])
            : this[0].nextElementSibling
            ? y([this[0].nextElementSibling])
            : y([])
          : y([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return y([]);
        for (; n.nextElementSibling; ) {
          const s = n.nextElementSibling;
          e ? y(s).is(e) && t.push(s) : t.push(s), (n = s);
        }
        return y(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && y(t.previousElementSibling).is(e)
              ? y([t.previousElementSibling])
              : y([])
            : t.previousElementSibling
            ? y([t.previousElementSibling])
            : y([]);
        }
        return y([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return y([]);
        for (; n.previousElementSibling; ) {
          const s = n.previousElementSibling;
          e ? y(s).is(e) && t.push(s) : t.push(s), (n = s);
        }
        return y(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? y(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return y(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let s = this[n].parentNode;
          for (; s; )
            e ? y(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        }
        return y(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? y([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n].querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) t.push(s[e]);
        }
        return y(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n].children;
          for (let n = 0; n < s.length; n += 1)
            (e && !y(s[n]).is(e)) || t.push(s[n]);
        }
        return y(t);
      },
      filter: function (e) {
        return y(w(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(T).forEach((e) => {
      Object.defineProperty(y.fn, e, { value: T[e], writable: !0 });
    });
    const C = y;
    function x(e, t = 0) {
      return setTimeout(e, t);
    }
    function O() {
      return Date.now();
    }
    function _(e, t = "x") {
      const n = g();
      let s, i, r;
      const o = (function (e) {
        const t = g();
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
          ? ((i = o.transform || o.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new n.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = r.toString().split(","))),
        "x" === t &&
          (i = n.WebKitCSSMatrix
            ? r.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (i = n.WebKitCSSMatrix
            ? r.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        i || 0
      );
    }
    function L(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function A(...e) {
      const t = Object(e[0]),
        n = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < e.length; i += 1) {
        const r = e[i];
        if (
          null != r &&
          ((s = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? s instanceof HTMLElement
            : s && (1 === s.nodeType || 11 === s.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => n.indexOf(e) < 0);
          for (let n = 0, s = e.length; n < s; n += 1) {
            const s = e[n],
              i = Object.getOwnPropertyDescriptor(r, s);
            void 0 !== i &&
              i.enumerable &&
              (L(t[s]) && L(r[s])
                ? r[s].__swiper__
                  ? (t[s] = r[s])
                  : A(t[s], r[s])
                : !L(t[s]) && L(r[s])
                ? ((t[s] = {}), r[s].__swiper__ ? (t[s] = r[s]) : A(t[s], r[s]))
                : (t[s] = r[s]));
          }
        }
      }
      var s;
      return t;
    }
    function k(e, t, n) {
      e.style.setProperty(t, n);
    }
    function P({ swiper: e, targetPosition: t, side: n }) {
      const s = g(),
        i = -e.translate;
      let r,
        o = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        s.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > i ? "next" : "prev",
        c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        d = () => {
          (r = new Date().getTime()), null === o && (o = r);
          const l = Math.max(Math.min((r - o) / a, 1), 0),
            u = 0.5 - Math.cos(l * Math.PI) / 2;
          let p = i + u * (t - i);
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
    let M, $, I;
    function N() {
      return (
        M ||
          (M = (function () {
            const e = g(),
              t = f();
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
        M
      );
    }
    function R(e = {}) {
      return (
        $ ||
          ($ = (function ({ userAgent: e } = {}) {
            const t = N(),
              n = g(),
              s = n.navigator.platform,
              i = e || n.navigator.userAgent,
              r = { ios: !1, android: !1 },
              o = n.screen.width,
              a = n.screen.height,
              l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = i.match(/(iPad).*OS\s([\d_]+)/);
            const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = "Win32" === s;
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
                ].indexOf(`${o}x${a}`) >= 0 &&
                ((c = i.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (h = !1)),
              l && !p && ((r.os = "android"), (r.android = !0)),
              (c || u || d) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        $
      );
    }
    function D() {
      return (
        I ||
          (I = (function () {
            const e = g();
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
        I
      );
    }
    const B = {
      on(e, t, n) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        const i = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            s.eventsListeners[e] || (s.eventsListeners[e] = []),
              s.eventsListeners[e][i](t);
          }),
          s
        );
      },
      once(e, t, n) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof t) return s;
        function i(...n) {
          s.off(e, i),
            i.__emitterProxy && delete i.__emitterProxy,
            t.apply(s, n);
        }
        return (i.__emitterProxy = t), s.on(e, i, n);
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
                  n.eventsListeners[e].forEach((s, i) => {
                    (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(i, 1);
                  });
            }),
            n)
          : n;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let n, s, i;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((n = e[0]), (s = e.slice(1, e.length)), (i = t))
          : ((n = e[0].events), (s = e[0].data), (i = e[0].context || t)),
          s.unshift(i);
        return (
          (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(i, [e, ...s]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(i, s);
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
          { $wrapperEl: i, size: r, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && s.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = i.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let p = [];
        const h = [],
          f = [];
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
        if (void 0 === r) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * r),
          (e.virtualSize = -w),
          o
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          s.centeredSlides &&
            s.cssMode &&
            (k(e.wrapperEl, "--swiper-centered-offset-before", ""),
            k(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const T = s.grid && s.grid.rows > 1 && e.grid;
        let C;
        T && e.grid.initSlides(u);
        const x =
          "auto" === s.slidesPerView &&
          s.breakpoints &&
          Object.keys(s.breakpoints).filter(
            (e) => void 0 !== s.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < u; i += 1) {
          C = 0;
          const o = d.eq(i);
          if (
            (T && e.grid.updateSlide(i, o, u, t), "none" !== o.css("display"))
          ) {
            if ("auto" === s.slidesPerView) {
              x && (d[i].style[t("width")] = "");
              const r = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                s.roundLengths)
              )
                C = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = n(r, "width"),
                  t = n(r, "padding-left"),
                  s = n(r, "padding-right"),
                  i = n(r, "margin-left"),
                  a = n(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) C = e + i + a;
                else {
                  const { clientWidth: n, offsetWidth: r } = o[0];
                  C = e + t + s + i + a + (r - n);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                s.roundLengths && (C = Math.floor(C));
            } else
              (C = (r - (s.slidesPerView - 1) * w) / s.slidesPerView),
                s.roundLengths && (C = Math.floor(C)),
                d[i] && (d[i].style[t("width")] = `${C}px`);
            d[i] && (d[i].swiperSlideSize = C),
              f.push(C),
              s.centeredSlides
                ? ((y = y + C / 2 + E / 2 + w),
                  0 === E && 0 !== i && (y = y - r / 2 - w),
                  0 === i && (y = y - r / 2 - w),
                  Math.abs(y) < 0.001 && (y = 0),
                  s.roundLengths && (y = Math.floor(y)),
                  S % s.slidesPerGroup == 0 && p.push(y),
                  h.push(y))
                : (s.roundLengths && (y = Math.floor(y)),
                  (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(y),
                  h.push(y),
                  (y = y + C + w)),
              (e.virtualSize += C + w),
              (E = C),
              (S += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          o &&
            a &&
            ("slide" === s.effect || "coverflow" === s.effect) &&
            i.css({ width: `${e.virtualSize + s.spaceBetween}px` }),
          s.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + s.spaceBetween}px` }),
          T && e.grid.updateWrapperSize(C, p, t),
          !s.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let i = p[n];
            s.roundLengths && (i = Math.floor(i)),
              p[n] <= e.virtualSize - r && t.push(i);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
          const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !s.cssMode || t !== d.length - 1).css({
            [n]: `${w}px`,
          });
        }
        if (s.centeredSlides && s.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (s.spaceBetween ? s.spaceBetween : 0);
          }),
            (e -= s.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (s.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (s.spaceBetween ? s.spaceBetween : 0);
            }),
            (e -= s.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, n) => {
              p[n] = e - t;
            }),
              h.forEach((e, n) => {
                h[n] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
        ) {
          k(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            k(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
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
          h.length !== b && e.emit("slidesGridLengthChange"),
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
        let i,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          s
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || C([])).each((e) => {
              n.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !s) break;
              n.push(o(e));
            }
        else n.push(o(t.activeIndex));
        for (i = 0; i < n.length; i += 1)
          if (void 0 !== n[i]) {
            const e = n[i].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
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
          { slides: s, rtlTranslate: i, snapGrid: r } = t;
        if (0 === s.length) return;
        void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        i && (o = e),
          s.removeClass(n.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < s.length; e += 1) {
          const a = s[e];
          let l = a.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= s[0].swiperSlideOffset);
          const c =
              (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            d =
              (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            u = -(o - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            s.eq(e).addClass(n.slideVisibleClass)),
            (a.progress = i ? -c : c),
            (a.originalProgress = i ? -d : d);
        }
        t.visibleSlides = C(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          s = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: r, isEnd: o } = t;
        const a = r,
          l = o;
        0 === s
          ? ((i = 0), (r = !0), (o = !0))
          : ((i = (e - t.minTranslate()) / s), (r = i <= 0), (o = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: r, isEnd: o }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !r) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: s,
            activeIndex: i,
            realIndex: r,
          } = e,
          o = e.virtual && n.virtual.enabled;
        let a;
        t.removeClass(
          `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${n.slideClass}[data-swiper-slide-index="${i}"]`
              )
            : t.eq(i)),
          a.addClass(n.slideActiveClass),
          n.loop &&
            (a.hasClass(n.slideDuplicateClass)
              ? s
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : s
                  .children(
                    `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass));
        let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
        n.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(n.slideNextClass));
        let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
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
            snapGrid: i,
            params: r,
            activeIndex: o,
            realIndex: a,
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
          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (i.indexOf(n) >= 0) c = i.indexOf(n);
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((c >= i.length && (c = i.length - 1), d === o))
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
          previousIndex: o,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          n = t.params,
          s = C(e).closest(`.${n.slideClass}`)[0];
        let i,
          r = !1;
        if (s)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === s) {
              (r = !0), (i = e);
              break;
            }
        if (!s || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = s),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                C(s).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const z = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: n,
          translate: s,
          $wrapperEl: i,
        } = this;
        if (t.virtualTranslate) return n ? -s : s;
        if (t.cssMode) return s;
        let r = _(i[0], e);
        return n && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: s,
            params: i,
            $wrapperEl: r,
            wrapperEl: o,
            progress: a,
          } = n;
        let l,
          c = 0,
          d = 0;
        n.isHorizontal() ? (c = s ? -e : e) : (d = e),
          i.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          i.cssMode
            ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -c : -d)
            : i.virtualTranslate ||
              r.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (n.previousTranslate = n.translate),
          (n.translate = n.isHorizontal() ? c : d);
        const u = n.maxTranslate() - n.minTranslate();
        (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
          l !== a && n.updateProgress(e),
          n.emit("setTranslate", n.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, n = !0, s = !0, i) {
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = s && e > l ? l : s && e < c ? c : e),
          r.updateProgress(d),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                P({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              n &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              n &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      n && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function F({ swiper: e, runCallbacks: t, direction: n, step: s }) {
      const { activeIndex: i, previousIndex: r } = e;
      let o = n;
      if (
        (o || (o = i > r ? "next" : i < r ? "prev" : "reset"),
        e.emit(`transition${s}`),
        t && i !== r)
      ) {
        if ("reset" === o) return void e.emit(`slideResetTransition${s}`);
        e.emit(`slideChangeTransition${s}`),
          "next" === o
            ? e.emit(`slideNextTransition${s}`)
            : e.emit(`slidePrevTransition${s}`);
      }
    }
    const q = {
      slideTo: function (e = 0, t = this.params.speed, n = !0, s, i) {
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
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!f && !s && !i)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, o);
        let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1);
        const v = -l[g];
        if (a.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              n = Math.floor(100 * c[e]),
              s = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= n && t < s - (s - n) / 2
                ? (o = e)
                : t >= n && t < s && (o = e + 1)
              : t >= n && (o = e);
          }
        if (r.initialized && o !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let b;
        if (
          (o !== (d || 0) && n && r.emit("beforeSlideChangeStart"),
          r.updateProgress(v),
          (b = o > u ? "next" : o < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== b && (r.transitionStart(n, b), r.transitionEnd(n, b)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            n = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = n),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                P({ swiper: r, targetPosition: n, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, s),
          r.transitionStart(n, b),
          0 === t
            ? r.transitionEnd(n, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(n, b));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
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
        const i = this;
        let r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, n, s);
      },
      slideNext: function (e = this.params.speed, t = !0, n) {
        const s = this,
          { animating: i, enabled: r, params: o } = s;
        if (!r) return s;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const l = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (i && o.loopPreventsSlide) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        return o.rewind && s.isEnd
          ? s.slideTo(0, e, t, n)
          : s.slideTo(s.activeIndex + l, e, t, n);
      },
      slidePrev: function (e = this.params.speed, t = !0, n) {
        const s = this,
          {
            params: i,
            animating: r,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: c,
          } = s;
        if (!c) return s;
        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? s.translate : -s.translate),
          p = o.map((e) => d(e));
        let h = o[p.indexOf(u) - 1];
        if (void 0 === h && i.cssMode) {
          let e;
          o.forEach((t, n) => {
            u >= t && (e = n);
          }),
            void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== h &&
            ((f = a.indexOf(h)),
            f < 0 && (f = s.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          i.rewind && s.isBeginning)
        ) {
          const i =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(i, e, t, n);
        }
        return s.slideTo(f, e, t, n);
      },
      slideReset: function (e = this.params.speed, t = !0, n) {
        return this.slideTo(this.activeIndex, e, t, n);
      },
      slideToClosest: function (e = this.params.speed, t = !0, n, s = 0.5) {
        const i = this;
        let r = i.activeIndex;
        const o = Math.min(i.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[a]) {
          const e = i.snapGrid[a];
          l - e > (i.snapGrid[a + 1] - e) * s && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[a - 1];
          l - e <= (i.snapGrid[a] - e) * s && (r -= i.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          s =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(C(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - s / 2 ||
                r > e.slides.length - e.loopedSlides + s / 2
                ? (e.loopFix(),
                  (r = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  x(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - s
              ? (e.loopFix(),
                (r = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                x(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const G = {
      loopCreate: function () {
        const e = this,
          t = f(),
          { params: n, $wrapperEl: s } = e,
          i = s.children().length > 0 ? C(s.children()[0].parentNode) : s;
        i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let r = i.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (r.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let s = 0; s < e; s += 1) {
              const e = C(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              i.append(e);
            }
            r = i.children(`.${n.slideClass}`);
          }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(n.loopedSlides || n.slidesPerView, 10)
          )),
          (e.loopedSlides += n.loopAdditionalSlides),
          e.loopedSlides > r.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = r.length);
        const o = [],
          a = [];
        r.each((e, t) => {
          C(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / r.length) * r.length;
          a.push(r.eq(e)[0]), o.unshift(r.eq(r.length - e - 1)[0]);
        }
        for (let e = 0; e < a.length; e += 1)
          i.append(C(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          i.prepend(C(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: s,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: o,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -o[t] - e.getTranslate();
        if (t < s) {
          (l = n.length - 3 * s + t), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        } else if (t >= n.length - s) {
          (l = -n.length + t + s), (l += s);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
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
    function H(e) {
      const t = this,
        n = f(),
        s = g(),
        i = t.touchEventsData,
        { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = C(l.target);
      if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === l.type),
        !i.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!i.isTouchEvent && "button" in l && l.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      const d = !!r.noSwipingClass && "" !== r.noSwipingClass,
        u = e.composedPath ? e.composedPath() : e.path;
      d && l.target && l.target.shadowRoot && u && (c = C(u[0]));
      const p = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        h = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (h
          ? (function (e, t = this) {
              return (function t(n) {
                if (!n || n === f() || n === g()) return null;
                n.assignedSlot && (n = n.assignedSlot);
                const s = n.closest(e);
                return s || n.getRootNode ? s || t(n.getRootNode().host) : null;
              })(t);
            })(p, c[0])
          : c.closest(p)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const m = o.currentX,
        v = o.currentY,
        b = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (b && (m <= w || m >= s.innerWidth - w)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = m),
        (o.startY = v),
        (i.touchStartTime = O()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(i.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (i.isTouched = !1)),
          n.activeElement &&
            C(n.activeElement).is(i.focusableElements) &&
            n.activeElement !== c[0] &&
            n.activeElement.blur();
        const s = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !s) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function W(e) {
      const t = f(),
        n = this,
        s = n.touchEventsData,
        { params: i, touches: r, rtlTranslate: o, enabled: a } = n;
      if (!a) return;
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
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        u = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = d), void (r.startY = u);
      if (!n.allowTouchMove)
        return (
          C(l.target).is(s.focusableElements) || (n.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(r, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (s.touchStartTime = O()))
          )
        );
      if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (n.isVertical()) {
          if (
            (u < r.startY && n.translate <= n.maxTranslate()) ||
            (u > r.startY && n.translate >= n.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (d < r.startX && n.translate <= n.maxTranslate()) ||
          (d > r.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        s.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        C(l.target).is(s.focusableElements)
      )
        return (s.isMoved = !0), void (n.allowClick = !1);
      if (
        (s.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = d), (r.currentY = u);
      const p = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (n.params.threshold && Math.sqrt(p ** 2 + h ** 2) < n.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (n.isHorizontal() && r.currentY === r.startY) ||
        (n.isVertical() && r.currentX === r.startX)
          ? (s.isScrolling = !1)
          : p * p + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
            (s.isScrolling = n.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (s.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === s.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (s.startMoving = !0)),
        s.isScrolling)
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (n.allowClick = !1),
        !i.cssMode && l.cancelable && l.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
        s.isMoved ||
          (i.loop && !i.cssMode && n.loopFix(),
          (s.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (s.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (s.isMoved = !0);
      let m = n.isHorizontal() ? p : h;
      (r.diff = m),
        (m *= i.touchRatio),
        o && (m = -m),
        (n.swipeDirection = m > 0 ? "prev" : "next"),
        (s.currentTranslate = m + s.startTranslate);
      let g = !0,
        v = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (v = 0),
        m > 0 && s.currentTranslate > n.minTranslate()
          ? ((g = !1),
            i.resistance &&
              (s.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + s.startTranslate + m) ** v))
          : m < 0 &&
            s.currentTranslate < n.maxTranslate() &&
            ((g = !1),
            i.resistance &&
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
        i.threshold > 0)
      ) {
        if (!(Math.abs(m) > i.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (s.currentTranslate = s.startTranslate),
            void (r.diff = n.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
          i.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          i.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(s.currentTranslate),
        n.setTranslate(s.currentTranslate));
    }
    function U(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: s,
          touches: i,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
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
      const c = O(),
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
        ((n.lastClickTime = O()),
        x(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let u;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (u = s.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        s.cssMode)
      )
        return;
      if (t.params.freeMode && s.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
          : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      let f = null,
        m = null;
      s.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const g = (u - o[p]) / h,
        v = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (d > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= s.longSwipesRatio
            ? t.slideTo(s.rewind && t.isEnd ? f : p + v)
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
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function V() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: i, snapGrid: r } = e;
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
        (e.allowSlidePrev = i),
        (e.allowSlideNext = s),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function X(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function Y() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: s } = e;
      if (!s) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let J = !1;
    function K() {}
    const Q = (e, t) => {
      const n = f(),
        {
          params: s,
          touchEvents: i,
          el: r,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        c = !!s.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== i.start ||
          !l.passiveListener ||
          !s.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[d](i.start, e.onTouchStart, t),
          r[d](
            i.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[d](i.end, e.onTouchEnd, t),
          i.cancel && r[d](i.cancel, e.onTouchEnd, t);
      } else
        r[d](i.start, e.onTouchStart, !1),
          n[d](i.move, e.onTouchMove, c),
          n[d](i.end, e.onTouchEnd, !1);
      (s.preventClicks || s.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
        s.cssMode && o[d]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[u](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              V,
              !0
            )
          : e[u]("observerUpdate", V, !0);
    };
    const Z = {
        attachEvents: function () {
          const e = this,
            t = f(),
            { params: n, support: s } = e;
          (e.onTouchStart = H.bind(e)),
            (e.onTouchMove = W.bind(e)),
            (e.onTouchEnd = U.bind(e)),
            n.cssMode && (e.onScroll = Y.bind(e)),
            (e.onClick = X.bind(e)),
            s.touch && !J && (t.addEventListener("touchstart", K), (J = !0)),
            Q(e, "on");
        },
        detachEvents: function () {
          Q(this, "off");
        },
      },
      ee = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const te = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: n,
            loopedSlides: s = 0,
            params: i,
            $el: r,
          } = e,
          o = i.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          c = ee(e, i),
          d = ee(e, l),
          u = i.enabled;
        c && !d
          ? (r.removeClass(
              `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (r.addClass(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              r.addClass(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const n = i[t] && i[t].enabled,
              s = l[t] && l[t].enabled;
            n && !s && e[t].disable(), !n && s && e[t].enable();
          });
        const p = l.direction && l.direction !== i.direction,
          h = i.loop && (l.slidesPerView !== i.slidesPerView || p);
        p && n && e.changeDirection(), A(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !f ? e.disable() : !u && f && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          h &&
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
        const i = g(),
          r = "window" === t ? i.innerHeight : n.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: r, value: a } = o[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
            : a <= n.clientWidth && (s = r);
        }
        return s || "max";
      },
    };
    const ne = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: s,
            $el: i,
            device: r,
            support: o,
          } = e,
          a = (function (e, t) {
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
              { "pointer-events": !o.touch },
              { "free-mode": e.params.freeMode && n.freeMode.enabled },
              { autoheight: n.autoHeight },
              { rtl: s },
              { grid: n.grid && n.grid.rows > 1 },
              {
                "grid-column":
                  n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": n.cssMode },
              { centered: n.cssMode && n.centeredSlides },
              { "watch-progress": n.watchSlidesProgress },
            ],
            n.containerModifierClass
          );
        t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const se = {
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
    function ie(e, t) {
      return function (n = {}) {
        const s = Object.keys(n)[0],
          i = n[s];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in i
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                A(t, n))
              : A(t, n))
          : A(t, n);
      };
    }
    const re = {
        eventsEmitter: B,
        update: j,
        translate: z,
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
              F({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const n = this,
              { params: s } = n;
            (n.animating = !1),
              s.cssMode ||
                (n.setTransition(0),
                F({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: q,
        loop: G,
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
        events: Z,
        breakpoints: te,
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
        classes: ne,
        images: {
          loadImage: function (e, t, n, s, i, r) {
            const o = g();
            let a;
            function l() {
              r && r();
            }
            C(e).parent("picture")[0] || (e.complete && i)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                s && (a.sizes = s),
                n && (a.srcset = n),
                t && (a.src = t))
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
      oe = {};
    class ae {
      constructor(...e) {
        let t, n;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (n = e[0])
            : ([t, n] = e),
          n || (n = {}),
          (n = A({}, n)),
          t && !n.el && (n.el = t),
          n.el && C(n.el).length > 1)
        ) {
          const e = [];
          return (
            C(n.el).each((t) => {
              const s = A({}, n, { el: t });
              e.push(new ae(s));
            }),
            e
          );
        }
        const s = this;
        (s.__swiper__ = !0),
          (s.support = N()),
          (s.device = R({ userAgent: n.userAgent })),
          (s.browser = D()),
          (s.eventsListeners = {}),
          (s.eventsAnyListeners = []),
          (s.modules = [...s.__modules__]),
          n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules);
        const i = {};
        s.modules.forEach((e) => {
          e({
            swiper: s,
            extendParams: ie(n, i),
            on: s.on.bind(s),
            once: s.once.bind(s),
            off: s.off.bind(s),
            emit: s.emit.bind(s),
          });
        });
        const r = A({}, se, i);
        return (
          (s.params = A({}, r, oe, n)),
          (s.originalParams = A({}, s.params)),
          (s.passedParams = A({}, n)),
          s.params &&
            s.params.on &&
            Object.keys(s.params.on).forEach((e) => {
              s.on(e, s.params.on[e]);
            }),
          s.params && s.params.onAny && s.onAny(s.params.onAny),
          (s.$ = C),
          Object.assign(s, {
            enabled: s.params.enabled,
            el: t,
            classNames: [],
            slides: C(),
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
              lastClickTime: O(),
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
          i = (n.maxTranslate() - s) * e + s;
        n.translateTo(i, void 0 === t ? 0 : t),
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
          slidesGrid: i,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = s[a].swiperSlideSize;
          for (let n = a + 1; n < s.length; n += 1)
            s[n] &&
              !e &&
              ((t += s[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let n = a - 1; n >= 0; n -= 1)
            s[n] &&
              !e &&
              ((t += s[n].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < s.length; e += 1) {
            (t ? i[e] + r[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            i[a] - i[e] < o && (l += 1);
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
        let i;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (s(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || s()),
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
        const n = C(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const s = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = C(e.shadowRoot.querySelector(s()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children ? n.children(s()) : C(n).children(s());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = f().createElement("div");
          (i = C(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
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
          { params: s, $el: i, $wrapperEl: r, slides: o } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            s.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
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
        A(oe, e);
      }
      static get extendedDefaults() {
        return oe;
      }
      static get defaults() {
        return se;
      }
      static installModule(e) {
        ae.prototype.__modules__ || (ae.prototype.__modules__ = []);
        const t = ae.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => ae.installModule(e)), ae)
          : (ae.installModule(e), ae);
      }
    }
    Object.keys(re).forEach((e) => {
      Object.keys(re[e]).forEach((t) => {
        ae.prototype[t] = re[e][t];
      });
    }),
      ae.use([
        function ({ swiper: e, on: t, emit: n }) {
          const s = g();
          let i = null,
            r = null;
          const o = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (n("beforeResize"), n("resize"));
            },
            a = () => {
              e && !e.destroyed && e.initialized && n("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== s.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((i = new ResizeObserver((t) => {
                  r = s.requestAnimationFrame(() => {
                    const { width: n, height: s } = e;
                    let i = n,
                      r = s;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: n, target: s }) => {
                        (s && s !== e.el) ||
                          ((i = n ? n.width : (t[0] || t).inlineSize),
                          (r = n ? n.height : (t[0] || t).blockSize));
                      }
                    ),
                      (i === n && r === s) || o();
                  });
                })),
                i.observe(e.el))
              : (s.addEventListener("resize", o),
                s.addEventListener("orientationchange", a));
          }),
            t("destroy", () => {
              r && s.cancelAnimationFrame(r),
                i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                s.removeEventListener("resize", o),
                s.removeEventListener("orientationchange", a);
            });
        },
        function ({ swiper: e, extendParams: t, on: n, emit: s }) {
          const i = [],
            r = g(),
            o = (e, t = {}) => {
              const n = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void s("observerUpdate", e[0]);
                  const t = function () {
                    s("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.push(n);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) o(t[e]);
                }
                o(e.$el[0], { childList: e.params.observeSlideChildren }),
                  o(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              i.forEach((e) => {
                e.disconnect();
              }),
                i.splice(0, i.length);
            });
        },
      ]);
    const le = ae;
    function ce(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function de({ swiper: e, extendParams: t, on: n, emit: s }) {
      const i = "swiper-pagination";
      let r;
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
          bulletClass: `${i}-bullet`,
          bulletActiveClass: `${i}-bullet-active`,
          modifierClass: `${i}-`,
          currentClass: `${i}-current`,
          totalClass: `${i}-total`,
          hiddenClass: `${i}-hidden`,
          progressbarFillClass: `${i}-progressbar-fill`,
          progressbarOppositeClass: `${i}-progressbar-opposite`,
          clickableClass: `${i}-clickable`,
          lockClass: `${i}-lock`,
          horizontalClass: `${i}-horizontal`,
          verticalClass: `${i}-vertical`,
          paginationDisabledClass: `${i}-disabled`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let o = 0;
      function a() {
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
        if (a()) return;
        const i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          c = e.pagination.$el;
        let d;
        const u = e.params.loop
          ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((d = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              d > i - 1 - 2 * e.loopedSlides && (d -= i - 2 * e.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
            : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === n.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const s = e.pagination.bullets;
          let i, a, u;
          if (
            (n.dynamicBullets &&
              ((r = s
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              c.css(
                e.isHorizontal() ? "width" : "height",
                r * (n.dynamicMainBullets + 4) + "px"
              ),
              n.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((o += d - (e.previousIndex - e.loopedSlides || 0)),
                o > n.dynamicMainBullets - 1
                  ? (o = n.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (i = Math.max(d - o, 0)),
              (a = i + (Math.min(s.length, n.dynamicMainBullets) - 1)),
              (u = (a + i) / 2)),
            s.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${n.bulletActiveClass}${e}`)
                .join(" ")
            ),
            c.length > 1)
          )
            s.each((e) => {
              const t = C(e),
                s = t.index();
              s === d && t.addClass(n.bulletActiveClass),
                n.dynamicBullets &&
                  (s >= i &&
                    s <= a &&
                    t.addClass(`${n.bulletActiveClass}-main`),
                  s === i && l(t, "prev"),
                  s === a && l(t, "next"));
            });
          else {
            const t = s.eq(d),
              r = t.index();
            if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
              const t = s.eq(i),
                o = s.eq(a);
              for (let e = i; e <= a; e += 1)
                s.eq(e).addClass(`${n.bulletActiveClass}-main`);
              if (e.params.loop)
                if (r >= s.length) {
                  for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                    s.eq(s.length - e).addClass(`${n.bulletActiveClass}-main`);
                  s.eq(s.length - n.dynamicMainBullets - 1).addClass(
                    `${n.bulletActiveClass}-prev`
                  );
                } else l(t, "prev"), l(o, "next");
              else l(t, "prev"), l(o, "next");
            }
          }
          if (n.dynamicBullets) {
            const i = Math.min(s.length, n.dynamicMainBullets + 4),
              o = (r * i - r) / 2 - u * r,
              a = t ? "right" : "left";
            s.css(e.isHorizontal() ? a : "top", `${o}px`);
          }
        }
        if (
          ("fraction" === n.type &&
            (c.find(ce(n.currentClass)).text(n.formatFractionCurrent(d + 1)),
            c.find(ce(n.totalClass)).text(n.formatFractionTotal(u))),
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
          let i = 1,
            r = 1;
          "horizontal" === t ? (i = s) : (r = s),
            c
              .find(ce(n.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`)
              .transition(e.params.speed);
        }
        "custom" === n.type && n.renderCustom
          ? (c.html(n.renderCustom(e, d + 1, u)), s("paginationRender", c[0]))
          : s("paginationUpdate", c[0]),
          e.params.watchOverflow &&
            e.enabled &&
            c[e.isLocked ? "addClass" : "removeClass"](n.lockClass);
      }
      function d() {
        const t = e.params.pagination;
        if (a()) return;
        const n =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          i = e.pagination.$el;
        let r = "";
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
              ? (r += t.renderBullet.call(e, n, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          i.html(r), (e.pagination.bullets = i.find(ce(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          i.html(r)),
          "progressbar" === t.type &&
            ((r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            i.html(r)),
          "custom" !== t.type && s("paginationRender", e.pagination.$el[0]);
      }
      function u() {
        e.params.pagination = (function (e, t, n, s) {
          const i = f();
          return (
            e.params.createElements &&
              Object.keys(s).forEach((r) => {
                if (!n[r] && !0 === n.auto) {
                  let o = e.$el.children(`.${s[r]}`)[0];
                  o ||
                    ((o = i.createElement("div")),
                    (o.className = s[r]),
                    e.$el.append(o)),
                    (n[r] = o),
                    (t[r] = o);
                }
              }),
            n
          );
        })(e, e.originalParams.pagination, e.params.pagination, {
          el: "swiper-pagination",
        });
        const t = e.params.pagination;
        if (!t.el) return;
        let n = C(t.el);
        0 !== n.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            n.length > 1 &&
            ((n = e.$el.find(t.el)),
            n.length > 1 &&
              (n = n.filter((t) => C(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
          n.addClass(t.modifierClass + t.type),
          n.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (o = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            n.addClass(t.progressbarOppositeClass),
          t.clickable &&
            n.on("click", ce(t.bulletClass), function (t) {
              t.preventDefault();
              let n = C(this).index() * e.params.slidesPerGroup;
              e.params.loop && (n += e.loopedSlides), e.slideTo(n);
            }),
          Object.assign(e.pagination, { $el: n, el: n[0] }),
          e.enabled || n.addClass(t.lockClass));
      }
      function p() {
        const t = e.params.pagination;
        if (a()) return;
        const n = e.pagination.$el;
        n.removeClass(t.hiddenClass),
          n.removeClass(t.modifierClass + t.type),
          n.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && n.off("click", ce(t.bulletClass));
      }
      n("init", () => {
        !1 === e.params.pagination.enabled ? h() : (u(), d(), c());
      }),
        n("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && c();
        }),
        n("snapIndexChange", () => {
          e.params.loop || c();
        }),
        n("slidesLengthChange", () => {
          e.params.loop && (d(), c());
        }),
        n("snapGridLengthChange", () => {
          e.params.loop || (d(), c());
        }),
        n("destroy", () => {
          p();
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
          const i = n.target,
            { $el: r } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !C(i).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                (e.navigation.prevEl && i === e.navigation.prevEl))
            )
              return;
            const t = r.hasClass(e.params.pagination.hiddenClass);
            s(!0 === t ? "paginationShow" : "paginationHide"),
              r.toggleClass(e.params.pagination.hiddenClass);
          }
        });
      const h = () => {
        e.$el.addClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.addClass(
              e.params.pagination.paginationDisabledClass
            ),
          p();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.$el.removeClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el &&
              e.pagination.$el.removeClass(
                e.params.pagination.paginationDisabledClass
              ),
            u(),
            d(),
            c();
        },
        disable: h,
        render: d,
        update: c,
        init: u,
        destroy: p,
      });
    }
    function ue({ swiper: e, extendParams: t, on: n, emit: s }) {
      let i;
      function r() {
        if (!e.size)
          return (e.autoplay.running = !1), void (e.autoplay.paused = !1);
        const t = e.slides.eq(e.activeIndex);
        let n = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(i),
          (i = x(() => {
            let t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  s("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? a()
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
                ? a()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)), s("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), s("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) && r();
          }, n));
      }
      function o() {
        return (
          void 0 === i &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0), s("autoplayStart"), r(), !0)
        );
      }
      function a() {
        return (
          !!e.autoplay.running &&
          void 0 !== i &&
          (i && (clearTimeout(i), (i = void 0)),
          (e.autoplay.running = !1),
          s("autoplayStop"),
          !0)
        );
      }
      function l(t) {
        e.autoplay.running &&
          (e.autoplay.paused ||
            (i && clearTimeout(i),
            (e.autoplay.paused = !0),
            0 !== t && e.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].addEventListener(t, d);
                })
              : ((e.autoplay.paused = !1), r())));
      }
      function c() {
        const t = f();
        "hidden" === t.visibilityState && e.autoplay.running && l(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (r(), (e.autoplay.paused = !1));
      }
      function d(t) {
        e &&
          !e.destroyed &&
          e.$wrapperEl &&
          t.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, d);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? r() : a());
      }
      function u() {
        e.params.autoplay.disableOnInteraction
          ? a()
          : (s("autoplayPause"), l()),
          ["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, d);
          });
      }
      function p() {
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), s("autoplayResume"), r());
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
            o();
            f().addEventListener("visibilitychange", c),
              e.params.autoplay.pauseOnMouseEnter &&
                (e.$el.on("mouseenter", u), e.$el.on("mouseleave", p));
          }
        }),
        n("beforeTransitionStart", (t, n, s) => {
          e.autoplay.running &&
            (s || !e.params.autoplay.disableOnInteraction
              ? e.autoplay.pause(n)
              : a());
        }),
        n("sliderFirstMove", () => {
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction ? a() : l());
        }),
        n("touchEnd", () => {
          e.params.cssMode &&
            e.autoplay.paused &&
            !e.params.autoplay.disableOnInteraction &&
            r();
        }),
        n("destroy", () => {
          e.$el.off("mouseenter", u),
            e.$el.off("mouseleave", p),
            e.autoplay.running && a();
          f().removeEventListener("visibilitychange", c);
        }),
        Object.assign(e.autoplay, { pause: l, run: r, start: o, stop: a });
    }
    function pe(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    function he({ swiper: e, extendParams: t, on: n }) {
      t({ fadeEffect: { crossFade: !1, transformEl: null } });
      !(function (e) {
        const {
          effect: t,
          swiper: n,
          on: s,
          setTranslate: i,
          setTransition: r,
          overwriteParams: o,
          perspective: a,
          recreateShadows: l,
          getEffectParams: c,
        } = e;
        let d;
        s("beforeInit", () => {
          if (n.params.effect !== t) return;
          n.classNames.push(`${n.params.containerModifierClass}${t}`),
            a &&
              a() &&
              n.classNames.push(`${n.params.containerModifierClass}3d`);
          const e = o ? o() : {};
          Object.assign(n.params, e), Object.assign(n.originalParams, e);
        }),
          s("setTranslate", () => {
            n.params.effect === t && i();
          }),
          s("setTransition", (e, s) => {
            n.params.effect === t && r(s);
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
                d && n.slides && n.slides.length && (i(), (d = !1));
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
            let i = -t[0].swiperSlideOffset;
            e.params.virtualTranslate || (i -= e.translate);
            let r = 0;
            e.isHorizontal() || ((r = i), (i = 0));
            const o = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(t[0].progress), 0)
              : 1 + Math.min(Math.max(t[0].progress, -1), 0);
            pe(n, t)
              .css({ opacity: o })
              .transform(`translate3d(${i}px, ${r}px, 0px)`);
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
              const { slides: i, activeIndex: r, $wrapperEl: o } = e;
              if (e.params.virtualTranslate && 0 !== t) {
                let t,
                  a = !1;
                (t = s ? (n ? i.find(n) : i) : n ? i.eq(r).find(n) : i.eq(r)),
                  t.transitionEnd(() => {
                    if (a) return;
                    if (!e || e.destroyed) return;
                    (a = !0), (e.animating = !1);
                    const t = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < t.length; e += 1) o.trigger(t[e]);
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
    function fe() {
      !(function () {
        const e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      })(),
        document.querySelector(".swiper") &&
          new le(".swiper", {
            modules: [he, de, ue],
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
              el: ".home__pagination",
              clickable: !0,
              renderBullet: function (e, t) {
                const n = document
                  .querySelector(".home__pagination")
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
          });
    }
    window.addEventListener("load", function () {
      fe();
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
            l(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let n = t.split("|"),
                s = { root: n[0], margin: n[1], threshold: n[2] },
                i = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    n = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    i = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === s.root &&
                    String(n) === s.margin &&
                    String(i) === s.threshold
                  )
                    return e;
                }),
                r = this.getScrollWatcherConfig(s);
              this.scrollWatcherInit(i, r);
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
        this.config.logging && a(`[Наблюдатель]: ${e}`);
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
    let me = !1;
    function ge(e) {
      this.type = e;
    }
    setTimeout(() => {
      if (me) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (ge.prototype.init = function () {
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
            i = window.matchMedia(s[0]),
            r = s[1],
            o = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === r;
            });
          i.addListener(function () {
            e.mediaHandler(i, o);
          }),
            this.mediaHandler(i, o);
        }
      }),
      (ge.prototype.mediaHandler = function (e, t) {
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
      (ge.prototype.moveTo = function (e, t, n) {
        t.classList.add(this.daClassname),
          "last" === e || e >= n.children.length
            ? n.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? n.children[e].insertAdjacentElement("beforebegin", t)
            : n.insertAdjacentElement("afterbegin", t);
      }),
      (ge.prototype.moveBack = function (e, t, n) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[n]
            ? e.children[n].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (ge.prototype.indexInParent = function (e, t) {
        const n = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(n, t);
      }),
      (ge.prototype.arraySort = function (e) {
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
    function ve(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    new ge("max").init();
    const { toString: be } = Object.prototype,
      { getPrototypeOf: we } = Object,
      ye =
        ((Ee = Object.create(null)),
        (e) => {
          const t = be.call(e);
          return Ee[t] || (Ee[t] = t.slice(8, -1).toLowerCase());
        });
    var Ee;
    const Se = (e) => ((e = e.toLowerCase()), (t) => ye(t) === e),
      Te = (e) => (t) => typeof t === e,
      { isArray: Ce } = Array,
      xe = Te("undefined");
    const Oe = Se("ArrayBuffer");
    const _e = Te("string"),
      Le = Te("function"),
      Ae = Te("number"),
      ke = (e) => null !== e && "object" == typeof e,
      Pe = (e) => {
        if ("object" !== ye(e)) return !1;
        const t = we(e);
        return !(
          (null !== t &&
            t !== Object.prototype &&
            null !== Object.getPrototypeOf(t)) ||
          Symbol.toStringTag in e ||
          Symbol.iterator in e
        );
      },
      Me = Se("Date"),
      $e = Se("File"),
      Ie = Se("Blob"),
      Ne = Se("FileList"),
      Re = Se("URLSearchParams");
    function De(e, t, { allOwnKeys: n = !1 } = {}) {
      if (null == e) return;
      let s, i;
      if (("object" != typeof e && (e = [e]), Ce(e)))
        for (s = 0, i = e.length; s < i; s++) t.call(null, e[s], s, e);
      else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
          r = i.length;
        let o;
        for (s = 0; s < r; s++) (o = i[s]), t.call(null, e[o], o, e);
      }
    }
    function Be(e, t) {
      t = t.toLowerCase();
      const n = Object.keys(e);
      let s,
        i = n.length;
      for (; i-- > 0; ) if (((s = n[i]), t === s.toLowerCase())) return s;
      return null;
    }
    const je =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : global,
      ze = (e) => !xe(e) && e !== je;
    const Fe =
      ((qe = "undefined" != typeof Uint8Array && we(Uint8Array)),
      (e) => qe && e instanceof qe);
    var qe;
    const Ge = Se("HTMLFormElement"),
      He = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
          e.call(t, n)
      )(Object.prototype),
      We = Se("RegExp"),
      Ue = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
          s = {};
        De(n, (n, i) => {
          !1 !== t(n, i, e) && (s[i] = n);
        }),
          Object.defineProperties(e, s);
      },
      Ve = {
        isArray: Ce,
        isArrayBuffer: Oe,
        isBuffer: function (e) {
          return (
            null !== e &&
            !xe(e) &&
            null !== e.constructor &&
            !xe(e.constructor) &&
            Le(e.constructor.isBuffer) &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: (e) => {
          const t = "[object FormData]";
          return (
            e &&
            (("function" == typeof FormData && e instanceof FormData) ||
              be.call(e) === t ||
              (Le(e.toString) && e.toString() === t))
          );
        },
        isArrayBufferView: function (e) {
          let t;
          return (
            (t =
              "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(e)
                : e && e.buffer && Oe(e.buffer)),
            t
          );
        },
        isString: _e,
        isNumber: Ae,
        isBoolean: (e) => !0 === e || !1 === e,
        isObject: ke,
        isPlainObject: Pe,
        isUndefined: xe,
        isDate: Me,
        isFile: $e,
        isBlob: Ie,
        isRegExp: We,
        isFunction: Le,
        isStream: (e) => ke(e) && Le(e.pipe),
        isURLSearchParams: Re,
        isTypedArray: Fe,
        isFileList: Ne,
        forEach: De,
        merge: function e() {
          const { caseless: t } = (ze(this) && this) || {},
            n = {},
            s = (s, i) => {
              const r = (t && Be(n, i)) || i;
              Pe(n[r]) && Pe(s)
                ? (n[r] = e(n[r], s))
                : Pe(s)
                ? (n[r] = e({}, s))
                : Ce(s)
                ? (n[r] = s.slice())
                : (n[r] = s);
            };
          for (let e = 0, t = arguments.length; e < t; e++)
            arguments[e] && De(arguments[e], s);
          return n;
        },
        extend: (e, t, n, { allOwnKeys: s } = {}) => (
          De(
            t,
            (t, s) => {
              n && Le(t) ? (e[s] = ve(t, n)) : (e[s] = t);
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
          let i, r, o;
          const a = {};
          if (((t = t || {}), null == e)) return t;
          do {
            for (i = Object.getOwnPropertyNames(e), r = i.length; r-- > 0; )
              (o = i[r]),
                (s && !s(o, e, t)) || a[o] || ((t[o] = e[o]), (a[o] = !0));
            e = !1 !== n && we(e);
          } while (e && (!n || n(e, t)) && e !== Object.prototype);
          return t;
        },
        kindOf: ye,
        kindOfTest: Se,
        endsWith: (e, t, n) => {
          (e = String(e)),
            (void 0 === n || n > e.length) && (n = e.length),
            (n -= t.length);
          const s = e.indexOf(t, n);
          return -1 !== s && s === n;
        },
        toArray: (e) => {
          if (!e) return null;
          if (Ce(e)) return e;
          let t = e.length;
          if (!Ae(t)) return null;
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
        isHTMLForm: Ge,
        hasOwnProperty: He,
        hasOwnProp: He,
        reduceDescriptors: Ue,
        freezeMethods: (e) => {
          Ue(e, (t, n) => {
            if (Le(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
              return !1;
            const s = e[n];
            Le(s) &&
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
          return Ce(e) ? s(e) : s(String(e).split(t)), n;
        },
        toCamelCase: (e) =>
          e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (e, t, n) {
            return t.toUpperCase() + n;
          }),
        noop: () => {},
        toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
        findKey: Be,
        global: je,
        isContextDefined: ze,
        toJSONObject: (e) => {
          const t = new Array(10),
            n = (e, s) => {
              if (ke(e)) {
                if (t.indexOf(e) >= 0) return;
                if (!("toJSON" in e)) {
                  t[s] = e;
                  const i = Ce(e) ? [] : {};
                  return (
                    De(e, (e, t) => {
                      const r = n(e, s + 1);
                      !xe(r) && (i[t] = r);
                    }),
                    (t[s] = void 0),
                    i
                  );
                }
              }
              return e;
            };
          return n(e, 0);
        },
      };
    function Xe(e, t, n, s, i) {
      Error.call(this),
        Error.captureStackTrace
          ? Error.captureStackTrace(this, this.constructor)
          : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = "AxiosError"),
        t && (this.code = t),
        n && (this.config = n),
        s && (this.request = s),
        i && (this.response = i);
    }
    Ve.inherits(Xe, Error, {
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
          config: Ve.toJSONObject(this.config),
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      },
    });
    const Ye = Xe.prototype,
      Je = {};
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
      Je[e] = { value: e };
    }),
      Object.defineProperties(Xe, Je),
      Object.defineProperty(Ye, "isAxiosError", { value: !0 }),
      (Xe.from = (e, t, n, s, i, r) => {
        const o = Object.create(Ye);
        return (
          Ve.toFlatObject(
            e,
            o,
            function (e) {
              return e !== Error.prototype;
            },
            (e) => "isAxiosError" !== e
          ),
          Xe.call(o, e.message, t, n, s, i),
          (o.cause = e),
          (o.name = e.name),
          r && Object.assign(o, r),
          o
        );
      });
    const Ke = Xe;
    const Qe = n(230);
    function Ze(e) {
      return Ve.isPlainObject(e) || Ve.isArray(e);
    }
    function et(e) {
      return Ve.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }
    function tt(e, t, n) {
      return e
        ? e
            .concat(t)
            .map(function (e, t) {
              return (e = et(e)), !n && t ? "[" + e + "]" : e;
            })
            .join(n ? "." : "")
        : t;
    }
    const nt = Ve.toFlatObject(Ve, {}, null, function (e) {
      return /^is[A-Z]/.test(e);
    });
    const st = function (e, t, n) {
      if (!Ve.isObject(e)) throw new TypeError("target must be an object");
      t = t || new (Qe || FormData)();
      const s = (n = Ve.toFlatObject(
          n,
          { metaTokens: !0, dots: !1, indexes: !1 },
          !1,
          function (e, t) {
            return !Ve.isUndefined(t[e]);
          }
        )).metaTokens,
        i = n.visitor || d,
        r = n.dots,
        o = n.indexes,
        a =
          (n.Blob || ("undefined" != typeof Blob && Blob)) &&
          (l = t) &&
          Ve.isFunction(l.append) &&
          "FormData" === l[Symbol.toStringTag] &&
          l[Symbol.iterator];
      var l;
      if (!Ve.isFunction(i)) throw new TypeError("visitor must be a function");
      function c(e) {
        if (null === e) return "";
        if (Ve.isDate(e)) return e.toISOString();
        if (!a && Ve.isBlob(e))
          throw new Ke("Blob is not supported. Use a Buffer instead.");
        return Ve.isArrayBuffer(e) || Ve.isTypedArray(e)
          ? a && "function" == typeof Blob
            ? new Blob([e])
            : Buffer.from(e)
          : e;
      }
      function d(e, n, i) {
        let a = e;
        if (e && !i && "object" == typeof e)
          if (Ve.endsWith(n, "{}"))
            (n = s ? n : n.slice(0, -2)), (e = JSON.stringify(e));
          else if (
            (Ve.isArray(e) &&
              (function (e) {
                return Ve.isArray(e) && !e.some(Ze);
              })(e)) ||
            Ve.isFileList(e) ||
            (Ve.endsWith(n, "[]") && (a = Ve.toArray(e)))
          )
            return (
              (n = et(n)),
              a.forEach(function (e, s) {
                !Ve.isUndefined(e) &&
                  null !== e &&
                  t.append(
                    !0 === o ? tt([n], s, r) : null === o ? n : n + "[]",
                    c(e)
                  );
              }),
              !1
            );
        return !!Ze(e) || (t.append(tt(i, n, r), c(e)), !1);
      }
      const u = [],
        p = Object.assign(nt, {
          defaultVisitor: d,
          convertValue: c,
          isVisitable: Ze,
        });
      if (!Ve.isObject(e)) throw new TypeError("data must be an object");
      return (
        (function e(n, s) {
          if (!Ve.isUndefined(n)) {
            if (-1 !== u.indexOf(n))
              throw Error("Circular reference detected in " + s.join("."));
            u.push(n),
              Ve.forEach(n, function (n, r) {
                !0 ===
                  (!(Ve.isUndefined(n) || null === n) &&
                    i.call(t, n, Ve.isString(r) ? r.trim() : r, s, p)) &&
                  e(n, s ? s.concat(r) : [r]);
              }),
              u.pop();
          }
        })(e),
        t
      );
    };
    function it(e) {
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
    function rt(e, t) {
      (this._pairs = []), e && st(e, this, t);
    }
    const ot = rt.prototype;
    (ot.append = function (e, t) {
      this._pairs.push([e, t]);
    }),
      (ot.toString = function (e) {
        const t = e
          ? function (t) {
              return e.call(this, t, it);
            }
          : it;
        return this._pairs
          .map(function (e) {
            return t(e[0]) + "=" + t(e[1]);
          }, "")
          .join("&");
      });
    const at = rt;
    function lt(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    function ct(e, t, n) {
      if (!t) return e;
      const s = (n && n.encode) || lt,
        i = n && n.serialize;
      let r;
      if (
        ((r = i
          ? i(t, n)
          : Ve.isURLSearchParams(t)
          ? t.toString()
          : new at(t, n).toString(s)),
        r)
      ) {
        const t = e.indexOf("#");
        -1 !== t && (e = e.slice(0, t)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
      }
      return e;
    }
    const dt = class {
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
          Ve.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }
      },
      ut = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      },
      pt = "undefined" != typeof URLSearchParams ? URLSearchParams : at,
      ht = FormData,
      ft = (() => {
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
      mt =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        "function" == typeof self.importScripts,
      gt = {
        isBrowser: !0,
        classes: { URLSearchParams: pt, FormData: ht, Blob },
        isStandardBrowserEnv: ft,
        isStandardBrowserWebWorkerEnv: mt,
        protocols: ["http", "https", "file", "blob", "url", "data"],
      };
    const vt = function (e) {
        function t(e, n, s, i) {
          let r = e[i++];
          const o = Number.isFinite(+r),
            a = i >= e.length;
          if (((r = !r && Ve.isArray(s) ? s.length : r), a))
            return Ve.hasOwnProp(s, r) ? (s[r] = [s[r], n]) : (s[r] = n), !o;
          (s[r] && Ve.isObject(s[r])) || (s[r] = []);
          return (
            t(e, n, s[r], i) &&
              Ve.isArray(s[r]) &&
              (s[r] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let s;
                const i = n.length;
                let r;
                for (s = 0; s < i; s++) (r = n[s]), (t[r] = e[r]);
                return t;
              })(s[r])),
            !o
          );
        }
        if (Ve.isFormData(e) && Ve.isFunction(e.entries)) {
          const n = {};
          return (
            Ve.forEachEntry(e, (e, s) => {
              t(
                (function (e) {
                  return Ve.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
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
      bt = { "Content-Type": void 0 };
    const wt = {
      transitional: ut,
      adapter: ["xhr", "http"],
      transformRequest: [
        function (e, t) {
          const n = t.getContentType() || "",
            s = n.indexOf("application/json") > -1,
            i = Ve.isObject(e);
          i && Ve.isHTMLForm(e) && (e = new FormData(e));
          if (Ve.isFormData(e)) return s && s ? JSON.stringify(vt(e)) : e;
          if (
            Ve.isArrayBuffer(e) ||
            Ve.isBuffer(e) ||
            Ve.isStream(e) ||
            Ve.isFile(e) ||
            Ve.isBlob(e)
          )
            return e;
          if (Ve.isArrayBufferView(e)) return e.buffer;
          if (Ve.isURLSearchParams(e))
            return (
              t.setContentType(
                "application/x-www-form-urlencoded;charset=utf-8",
                !1
              ),
              e.toString()
            );
          let r;
          if (i) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1)
              return (function (e, t) {
                return st(
                  e,
                  new gt.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (e, t, n, s) {
                        return gt.isNode && Ve.isBuffer(e)
                          ? (this.append(t, e.toString("base64")), !1)
                          : s.defaultVisitor.apply(this, arguments);
                      },
                    },
                    t
                  )
                );
              })(e, this.formSerializer).toString();
            if (
              (r = Ve.isFileList(e)) ||
              n.indexOf("multipart/form-data") > -1
            ) {
              const t = this.env && this.env.FormData;
              return st(
                r ? { "files[]": e } : e,
                t && new t(),
                this.formSerializer
              );
            }
          }
          return i || s
            ? (t.setContentType("application/json", !1),
              (function (e, t, n) {
                if (Ve.isString(e))
                  try {
                    return (t || JSON.parse)(e), Ve.trim(e);
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
          const t = this.transitional || wt.transitional,
            n = t && t.forcedJSONParsing,
            s = "json" === this.responseType;
          if (e && Ve.isString(e) && ((n && !this.responseType) || s)) {
            const n = !(t && t.silentJSONParsing) && s;
            try {
              return JSON.parse(e);
            } catch (e) {
              if (n) {
                if ("SyntaxError" === e.name)
                  throw Ke.from(
                    e,
                    Ke.ERR_BAD_RESPONSE,
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
      env: { FormData: gt.classes.FormData, Blob: gt.classes.Blob },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: { common: { Accept: "application/json, text/plain, */*" } },
    };
    Ve.forEach(["delete", "get", "head"], function (e) {
      wt.headers[e] = {};
    }),
      Ve.forEach(["post", "put", "patch"], function (e) {
        wt.headers[e] = Ve.merge(bt);
      });
    const yt = wt,
      Et = Ve.toObjectSet([
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
      St = Symbol("internals");
    function Tt(e) {
      return e && String(e).trim().toLowerCase();
    }
    function Ct(e) {
      return !1 === e || null == e ? e : Ve.isArray(e) ? e.map(Ct) : String(e);
    }
    function xt(e, t, n, s) {
      return Ve.isFunction(s)
        ? s.call(this, t, n)
        : Ve.isString(t)
        ? Ve.isString(s)
          ? -1 !== t.indexOf(s)
          : Ve.isRegExp(s)
          ? s.test(t)
          : void 0
        : void 0;
    }
    class Ot {
      constructor(e) {
        e && this.set(e);
      }
      set(e, t, n) {
        const s = this;
        function i(e, t, n) {
          const i = Tt(t);
          if (!i) throw new Error("header name must be a non-empty string");
          const r = Ve.findKey(s, i);
          (!r ||
            void 0 === s[r] ||
            !0 === n ||
            (void 0 === n && !1 !== s[r])) &&
            (s[r || t] = Ct(e));
        }
        const r = (e, t) => Ve.forEach(e, (e, n) => i(e, n, t));
        return (
          Ve.isPlainObject(e) || e instanceof this.constructor
            ? r(e, t)
            : Ve.isString(e) &&
              (e = e.trim()) &&
              !/^[-_a-zA-Z]+$/.test(e.trim())
            ? r(
                ((e) => {
                  const t = {};
                  let n, s, i;
                  return (
                    e &&
                      e.split("\n").forEach(function (e) {
                        (i = e.indexOf(":")),
                          (n = e.substring(0, i).trim().toLowerCase()),
                          (s = e.substring(i + 1).trim()),
                          !n ||
                            (t[n] && Et[n]) ||
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
            : null != e && i(t, e, n),
          this
        );
      }
      get(e, t) {
        if ((e = Tt(e))) {
          const n = Ve.findKey(this, e);
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
            if (Ve.isFunction(t)) return t.call(this, e, n);
            if (Ve.isRegExp(t)) return t.exec(e);
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(e, t) {
        if ((e = Tt(e))) {
          const n = Ve.findKey(this, e);
          return !(!n || (t && !xt(0, this[n], n, t)));
        }
        return !1;
      }
      delete(e, t) {
        const n = this;
        let s = !1;
        function i(e) {
          if ((e = Tt(e))) {
            const i = Ve.findKey(n, e);
            !i || (t && !xt(0, n[i], i, t)) || (delete n[i], (s = !0));
          }
        }
        return Ve.isArray(e) ? e.forEach(i) : i(e), s;
      }
      clear() {
        return Object.keys(this).forEach(this.delete.bind(this));
      }
      normalize(e) {
        const t = this,
          n = {};
        return (
          Ve.forEach(this, (s, i) => {
            const r = Ve.findKey(n, i);
            if (r) return (t[r] = Ct(s)), void delete t[i];
            const o = e
              ? (function (e) {
                  return e
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, t, n) => t.toUpperCase() + n
                    );
                })(i)
              : String(i).trim();
            o !== i && delete t[i], (t[o] = Ct(s)), (n[o] = !0);
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
          Ve.forEach(this, (n, s) => {
            null != n &&
              !1 !== n &&
              (t[s] = e && Ve.isArray(n) ? n.join(", ") : n);
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
        const t = (this[St] = this[St] = { accessors: {} }).accessors,
          n = this.prototype;
        function s(e) {
          const s = Tt(e);
          t[s] ||
            (!(function (e, t) {
              const n = Ve.toCamelCase(" " + t);
              ["get", "set", "has"].forEach((s) => {
                Object.defineProperty(e, s + n, {
                  value: function (e, n, i) {
                    return this[s].call(this, t, e, n, i);
                  },
                  configurable: !0,
                });
              });
            })(n, e),
            (t[s] = !0));
        }
        return Ve.isArray(e) ? e.forEach(s) : s(e), this;
      }
    }
    Ot.accessor([
      "Content-Type",
      "Content-Length",
      "Accept",
      "Accept-Encoding",
      "User-Agent",
    ]),
      Ve.freezeMethods(Ot.prototype),
      Ve.freezeMethods(Ot);
    const _t = Ot;
    function Lt(e, t) {
      const n = this || yt,
        s = t || n,
        i = _t.from(s.headers);
      let r = s.data;
      return (
        Ve.forEach(e, function (e) {
          r = e.call(n, r, i.normalize(), t ? t.status : void 0);
        }),
        i.normalize(),
        r
      );
    }
    function At(e) {
      return !(!e || !e.__CANCEL__);
    }
    function kt(e, t, n) {
      Ke.call(this, null == e ? "canceled" : e, Ke.ERR_CANCELED, t, n),
        (this.name = "CanceledError");
    }
    Ve.inherits(kt, Ke, { __CANCEL__: !0 });
    const Pt = kt;
    const Mt = gt.isStandardBrowserEnv
      ? {
          write: function (e, t, n, s, i, r) {
            const o = [];
            o.push(e + "=" + encodeURIComponent(t)),
              Ve.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
              Ve.isString(s) && o.push("path=" + s),
              Ve.isString(i) && o.push("domain=" + i),
              !0 === r && o.push("secure"),
              (document.cookie = o.join("; "));
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
    function $t(e, t) {
      return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
        ? (function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
          })(e, t)
        : t;
    }
    const It = gt.isStandardBrowserEnv
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
              const t = Ve.isString(e) ? s(e) : e;
              return t.protocol === n.protocol && t.host === n.host;
            }
          );
        })()
      : function () {
          return !0;
        };
    const Nt = function (e, t) {
      e = e || 10;
      const n = new Array(e),
        s = new Array(e);
      let i,
        r = 0,
        o = 0;
      return (
        (t = void 0 !== t ? t : 1e3),
        function (a) {
          const l = Date.now(),
            c = s[o];
          i || (i = l), (n[r] = a), (s[r] = l);
          let d = o,
            u = 0;
          for (; d !== r; ) (u += n[d++]), (d %= e);
          if (((r = (r + 1) % e), r === o && (o = (o + 1) % e), l - i < t))
            return;
          const p = c && l - c;
          return p ? Math.round((1e3 * u) / p) : void 0;
        }
      );
    };
    function Rt(e, t) {
      let n = 0;
      const s = Nt(50, 250);
      return (i) => {
        const r = i.loaded,
          o = i.lengthComputable ? i.total : void 0,
          a = r - n,
          l = s(a);
        n = r;
        const c = {
          loaded: r,
          total: o,
          progress: o ? r / o : void 0,
          bytes: a,
          rate: l || void 0,
          estimated: l && o && r <= o ? (o - r) / l : void 0,
          event: i,
        };
        (c[t ? "download" : "upload"] = !0), e(c);
      };
    }
    const Dt =
        "undefined" != typeof XMLHttpRequest &&
        function (e) {
          return new Promise(function (t, n) {
            let s = e.data;
            const i = _t.from(e.headers).normalize(),
              r = e.responseType;
            let o;
            function a() {
              e.cancelToken && e.cancelToken.unsubscribe(o),
                e.signal && e.signal.removeEventListener("abort", o);
            }
            Ve.isFormData(s) &&
              (gt.isStandardBrowserEnv || gt.isStandardBrowserWebWorkerEnv) &&
              i.setContentType(!1);
            let l = new XMLHttpRequest();
            if (e.auth) {
              const t = e.auth.username || "",
                n = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              i.set("Authorization", "Basic " + btoa(t + ":" + n));
            }
            const c = $t(e.baseURL, e.url);
            function d() {
              if (!l) return;
              const s = _t.from(
                "getAllResponseHeaders" in l && l.getAllResponseHeaders()
              );
              !(function (e, t, n) {
                const s = n.config.validateStatus;
                n.status && s && !s(n.status)
                  ? t(
                      new Ke(
                        "Request failed with status code " + n.status,
                        [Ke.ERR_BAD_REQUEST, Ke.ERR_BAD_RESPONSE][
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
                  t(e), a();
                },
                function (e) {
                  n(e), a();
                },
                {
                  data:
                    r && "text" !== r && "json" !== r
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
                ct(c, e.params, e.paramsSerializer),
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
                  (n(new Ke("Request aborted", Ke.ECONNABORTED, e, l)),
                  (l = null));
              }),
              (l.onerror = function () {
                n(new Ke("Network Error", Ke.ERR_NETWORK, e, l)), (l = null);
              }),
              (l.ontimeout = function () {
                let t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded";
                const s = e.transitional || ut;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  n(
                    new Ke(
                      t,
                      s.clarifyTimeoutError ? Ke.ETIMEDOUT : Ke.ECONNABORTED,
                      e,
                      l
                    )
                  ),
                  (l = null);
              }),
              gt.isStandardBrowserEnv)
            ) {
              const t =
                (e.withCredentials || It(c)) &&
                e.xsrfCookieName &&
                Mt.read(e.xsrfCookieName);
              t && i.set(e.xsrfHeaderName, t);
            }
            void 0 === s && i.setContentType(null),
              "setRequestHeader" in l &&
                Ve.forEach(i.toJSON(), function (e, t) {
                  l.setRequestHeader(t, e);
                }),
              Ve.isUndefined(e.withCredentials) ||
                (l.withCredentials = !!e.withCredentials),
              r && "json" !== r && (l.responseType = e.responseType),
              "function" == typeof e.onDownloadProgress &&
                l.addEventListener("progress", Rt(e.onDownloadProgress, !0)),
              "function" == typeof e.onUploadProgress &&
                l.upload &&
                l.upload.addEventListener("progress", Rt(e.onUploadProgress)),
              (e.cancelToken || e.signal) &&
                ((o = (t) => {
                  l &&
                    (n(!t || t.type ? new Pt(null, e, l) : t),
                    l.abort(),
                    (l = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(o),
                e.signal &&
                  (e.signal.aborted
                    ? o()
                    : e.signal.addEventListener("abort", o)));
            const u = (function (e) {
              const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
              return (t && t[1]) || "";
            })(c);
            u && -1 === gt.protocols.indexOf(u)
              ? n(
                  new Ke(
                    "Unsupported protocol " + u + ":",
                    Ke.ERR_BAD_REQUEST,
                    e
                  )
                )
              : l.send(s || null);
          });
        },
      Bt = { http: null, xhr: Dt };
    Ve.forEach(Bt, (e, t) => {
      if (e) {
        try {
          Object.defineProperty(e, "name", { value: t });
        } catch (e) {}
        Object.defineProperty(e, "adapterName", { value: t });
      }
    });
    const jt = (e) => {
      e = Ve.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, s;
      for (
        let i = 0;
        i < t && ((n = e[i]), !(s = Ve.isString(n) ? Bt[n.toLowerCase()] : n));
        i++
      );
      if (!s) {
        if (!1 === s)
          throw new Ke(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          );
        throw new Error(
          Ve.hasOwnProp(Bt, n)
            ? `Adapter '${n}' is not available in the build`
            : `Unknown adapter '${n}'`
        );
      }
      if (!Ve.isFunction(s)) throw new TypeError("adapter is not a function");
      return s;
    };
    function zt(e) {
      if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
      )
        throw new Pt(null, e);
    }
    function Ft(e) {
      zt(e),
        (e.headers = _t.from(e.headers)),
        (e.data = Lt.call(e, e.transformRequest)),
        -1 !== ["post", "put", "patch"].indexOf(e.method) &&
          e.headers.setContentType("application/x-www-form-urlencoded", !1);
      return jt(e.adapter || yt.adapter)(e).then(
        function (t) {
          return (
            zt(e),
            (t.data = Lt.call(e, e.transformResponse, t)),
            (t.headers = _t.from(t.headers)),
            t
          );
        },
        function (t) {
          return (
            At(t) ||
              (zt(e),
              t &&
                t.response &&
                ((t.response.data = Lt.call(
                  e,
                  e.transformResponse,
                  t.response
                )),
                (t.response.headers = _t.from(t.response.headers)))),
            Promise.reject(t)
          );
        }
      );
    }
    const qt = (e) => (e instanceof _t ? e.toJSON() : e);
    function Gt(e, t) {
      t = t || {};
      const n = {};
      function s(e, t, n) {
        return Ve.isPlainObject(e) && Ve.isPlainObject(t)
          ? Ve.merge.call({ caseless: n }, e, t)
          : Ve.isPlainObject(t)
          ? Ve.merge({}, t)
          : Ve.isArray(t)
          ? t.slice()
          : t;
      }
      function i(e, t, n) {
        return Ve.isUndefined(t)
          ? Ve.isUndefined(e)
            ? void 0
            : s(void 0, e, n)
          : s(e, t, n);
      }
      function r(e, t) {
        if (!Ve.isUndefined(t)) return s(void 0, t);
      }
      function o(e, t) {
        return Ve.isUndefined(t)
          ? Ve.isUndefined(e)
            ? void 0
            : s(void 0, e)
          : s(void 0, t);
      }
      function a(n, i, r) {
        return r in t ? s(n, i) : r in e ? s(void 0, n) : void 0;
      }
      const l = {
        url: r,
        method: r,
        data: r,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (e, t) => i(qt(e), qt(t), !0),
      };
      return (
        Ve.forEach(Object.keys(e).concat(Object.keys(t)), function (s) {
          const r = l[s] || i,
            o = r(e[s], t[s], s);
          (Ve.isUndefined(o) && r !== a) || (n[s] = o);
        }),
        n
      );
    }
    const Ht = "1.2.3",
      Wt = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      (e, t) => {
        Wt[e] = function (n) {
          return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
        };
      }
    );
    const Ut = {};
    Wt.transitional = function (e, t, n) {
      function s(e, t) {
        return (
          "[Axios v1.2.3] Transitional option '" +
          e +
          "'" +
          t +
          (n ? ". " + n : "")
        );
      }
      return (n, i, r) => {
        if (!1 === e)
          throw new Ke(
            s(i, " has been removed" + (t ? " in " + t : "")),
            Ke.ERR_DEPRECATED
          );
        return (
          t &&
            !Ut[i] &&
            ((Ut[i] = !0),
            console.warn(
              s(
                i,
                " has been deprecated since v" +
                  t +
                  " and will be removed in the near future"
              )
            )),
          !e || e(n, i, r)
        );
      };
    };
    const Vt = {
        assertOptions: function (e, t, n) {
          if ("object" != typeof e)
            throw new Ke("options must be an object", Ke.ERR_BAD_OPTION_VALUE);
          const s = Object.keys(e);
          let i = s.length;
          for (; i-- > 0; ) {
            const r = s[i],
              o = t[r];
            if (o) {
              const t = e[r],
                n = void 0 === t || o(t, r, e);
              if (!0 !== n)
                throw new Ke(
                  "option " + r + " must be " + n,
                  Ke.ERR_BAD_OPTION_VALUE
                );
            } else if (!0 !== n)
              throw new Ke("Unknown option " + r, Ke.ERR_BAD_OPTION);
          }
        },
        validators: Wt,
      },
      Xt = Vt.validators;
    class Yt {
      constructor(e) {
        (this.defaults = e),
          (this.interceptors = { request: new dt(), response: new dt() });
      }
      request(e, t) {
        "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
          (t = Gt(this.defaults, t));
        const { transitional: n, paramsSerializer: s, headers: i } = t;
        let r;
        void 0 !== n &&
          Vt.assertOptions(
            n,
            {
              silentJSONParsing: Xt.transitional(Xt.boolean),
              forcedJSONParsing: Xt.transitional(Xt.boolean),
              clarifyTimeoutError: Xt.transitional(Xt.boolean),
            },
            !1
          ),
          void 0 !== s &&
            Vt.assertOptions(
              s,
              { encode: Xt.function, serialize: Xt.function },
              !0
            ),
          (t.method = (
            t.method ||
            this.defaults.method ||
            "get"
          ).toLowerCase()),
          (r = i && Ve.merge(i.common, i[t.method])),
          r &&
            Ve.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete i[e];
              }
            ),
          (t.headers = _t.concat(r, i));
        const o = [];
        let a = !0;
        this.interceptors.request.forEach(function (e) {
          ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
            ((a = a && e.synchronous), o.unshift(e.fulfilled, e.rejected));
        });
        const l = [];
        let c;
        this.interceptors.response.forEach(function (e) {
          l.push(e.fulfilled, e.rejected);
        });
        let d,
          u = 0;
        if (!a) {
          const e = [Ft.bind(this), void 0];
          for (
            e.unshift.apply(e, o),
              e.push.apply(e, l),
              d = e.length,
              c = Promise.resolve(t);
            u < d;

          )
            c = c.then(e[u++], e[u++]);
          return c;
        }
        d = o.length;
        let p = t;
        for (u = 0; u < d; ) {
          const e = o[u++],
            t = o[u++];
          try {
            p = e(p);
          } catch (e) {
            t.call(this, e);
            break;
          }
        }
        try {
          c = Ft.call(this, p);
        } catch (e) {
          return Promise.reject(e);
        }
        for (u = 0, d = l.length; u < d; ) c = c.then(l[u++], l[u++]);
        return c;
      }
      getUri(e) {
        return ct(
          $t((e = Gt(this.defaults, e)).baseURL, e.url),
          e.params,
          e.paramsSerializer
        );
      }
    }
    Ve.forEach(["delete", "get", "head", "options"], function (e) {
      Yt.prototype[e] = function (t, n) {
        return this.request(
          Gt(n || {}, { method: e, url: t, data: (n || {}).data })
        );
      };
    }),
      Ve.forEach(["post", "put", "patch"], function (e) {
        function t(t) {
          return function (n, s, i) {
            return this.request(
              Gt(i || {}, {
                method: e,
                headers: t ? { "Content-Type": "multipart/form-data" } : {},
                url: n,
                data: s,
              })
            );
          };
        }
        (Yt.prototype[e] = t()), (Yt.prototype[e + "Form"] = t(!0));
      });
    const Jt = Yt;
    class Kt {
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
          e(function (e, s, i) {
            n.reason || ((n.reason = new Pt(e, s, i)), t(n.reason));
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
          token: new Kt(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }
    }
    const Qt = Kt;
    const Zt = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
    };
    Object.entries(Zt).forEach(([e, t]) => {
      Zt[t] = e;
    });
    const en = Zt;
    const tn = (function e(t) {
      const n = new Jt(t),
        s = ve(Jt.prototype.request, n);
      return (
        Ve.extend(s, Jt.prototype, n, { allOwnKeys: !0 }),
        Ve.extend(s, n, null, { allOwnKeys: !0 }),
        (s.create = function (n) {
          return e(Gt(t, n));
        }),
        s
      );
    })(yt);
    (tn.Axios = Jt),
      (tn.CanceledError = Pt),
      (tn.CancelToken = Qt),
      (tn.isCancel = At),
      (tn.VERSION = Ht),
      (tn.toFormData = st),
      (tn.AxiosError = Ke),
      (tn.Cancel = tn.CanceledError),
      (tn.all = function (e) {
        return Promise.all(e);
      }),
      (tn.spread = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      }),
      (tn.isAxiosError = function (e) {
        return Ve.isObject(e) && !0 === e.isAxiosError;
      }),
      (tn.mergeConfig = Gt),
      (tn.AxiosHeaders = _t),
      (tn.formToJSON = (e) => vt(Ve.isHTMLForm(e) ? new FormData(e) : e)),
      (tn.HttpStatusCode = en),
      (tn.default = tn);
    const nn = tn;
    let sn = document.querySelector(".loadmore-btn");
    if (sn) {
      let e = 0;
      sn.addEventListener("click", () => {
        nn({
          method: "get",
          url: "https://my-json-server.typicode.com/RustySPC/testMar/posts",
          withCredentials: !1,
        }).then((t) => {
          15 == e && (sn.style.display = "none");
          const n = document.querySelector(".cards__row");
          for (let s = e; s < e + 5; s++) {
            let e = rn(t.data[s]);
            n.innerHTML = n.innerHTML + e;
          }
          e += 5;
        });
      });
    }
    function rn(e) {
      return (
        '<div class="cards__article"><div class="cards__image"><img src="' +
        e.image +
        '" alt=""></div><div class="cards__content"><div class="cards__name">' +
        e.name +
        '</div><div class="cards__info">' +
        e.info +
        '</div><div class="cards__about">' +
        e.about +
        '</div><div class="cards__data">' +
        e.data +
        '</div><div class="cards__btn btn btn-black"><a href="" class="btnBlack__link">Continue reading</a></div></div></div>'
      );
    }
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
              (i(),
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
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              d.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              "" == t.value &&
                (t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus")),
              t.hasAttribute("data-validate") && d.validateInput(t));
          });
      })(),
      (function () {
        const e = function (e) {
            let t = e.target,
              n = t.dataset.phoneClear,
              s = t.dataset.phonePattern,
              i = s || "+7(___) ___-__-__",
              r = 0,
              o = i.replace(/\D/g, ""),
              a = e.target.value.replace(/\D/g, "");
            if (
              "false" !== n &&
              "blur" === e.type &&
              a.length < i.match(/([\_\d])/g).length
            )
              return (
                e.target.classList.add("_form-error"),
                e.target.parentElement.classList.add("_form-error"),
                void console.log(e.target)
              );
            o.length >= a.length && (a = o),
              (e.target.value = i.replace(/./g, function (e) {
                return /[_\d]/.test(e) && r < a.length
                  ? a.charAt(r++)
                  : r >= a.length
                  ? ""
                  : e;
              }));
          },
          t = document.querySelectorAll("[data-phone-pattern]");
        for (let n of t)
          for (let t of ["input", "blur", "focus"]) n.addEventListener(t, e);
      })(),
      (function (t) {
        const n = document.forms;
        if (n.length)
          for (const e of n)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                d.formClean(t);
              });
        async function s(e, n) {
          if (0 === (t ? d.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              n.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                s = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                r = new FormData(e);
              e.classList.add("_sending");
              const o = await fetch(t, { method: s, body: r });
              if (o.ok) {
                await o.json();
                e.classList.remove("_sending"), i(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (n.preventDefault(), i(e));
          } else {
            n.preventDefault();
            const t = e.querySelector("._form-error");
            t && e.hasAttribute("data-goto-error") && c(t, !0, 1e3);
          }
        }
        function i(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } })
          ),
            setTimeout(() => {
              if (e.popup) {
                const n = t.dataset.popupMessage;
                n && e.popup.open(n);
              }
            }, 0),
            d.formClean(t),
            a(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (function () {
        me = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          n = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          s = e.dataset.scroll ? e.dataset.scroll : 1;
        let i,
          r = 0;
        document.addEventListener("windowScroll", function (o) {
          const a = window.scrollY;
          clearTimeout(i),
            a >= s
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (a > r
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (i = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, n))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (r = a <= 0 ? 0 : a);
        });
      })();
  })();
})();
