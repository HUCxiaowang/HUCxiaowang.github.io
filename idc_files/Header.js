!function($) { !function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define1015 && define.amd ? define([], t) : "object" == typeof exports ? exports["header-china"] = t() : (e.HeaderAndFooter = e.HeaderAndFooter || {},
        e.HeaderAndFooter["header-china"] = t())
    } (window, (function() {
        return function(e) {
            var t = {};
            function n(r) {
                if (t[r]) return t[r].exports;
                var o = t[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(o.exports, o, o.exports, n),
                o.l = !0,
                o.exports
            }
            return n.m = e,
            n.c = t,
            n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            },
            n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            },
            n.t = function(e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o,
                function(t) {
                    return e[t]
                }.bind(null, o));
                return r
            },
            n.n = function(e) {
                var t = e && e.__esModule ?
                function() {
                    return e.
                default
                }:
                function() {
                    return e
                };
                return n.d(t, "a", t),
                t
            },
            n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            n.p = "/build/",
            n(n.s = 42)
        } ([function(e, t) {
            e.exports = function(e) {
                return e && e.__esModule ? e: {
                default:
                    e
                }
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function(e) {
                var t;
                return function(n, r) {
                    var o = r;
                    "number" != typeof r && (o = e),
                    "number" == typeof t && clearTimeout(t),
                    t = setTimeout(n, o)
                }
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = void 0;
            var r = [];
            $(document).mousemove((function(e) {
                var t = {
                    x: e.pageX,
                    y: e.pageY
                };
                if (0 === r.length) for (var n = 0; n < 2; n++) r.push(t);
                r.push(t),
                r.length > 3 && r.shift()
            }));
            var o = {
                getDirectionAngle: function(e, t, n, r) {
                    var o = r - t,
                    i = n - e,
                    a = Math.atan(o / i) / Math.PI * 180;
                    return i < 0 && o > 0 ? a = 180 + a: i < 0 && o < 0 && (a -= 180),
                    a
                },
                getMoveAngle: function() {
                    var e = r[0],
                    t = r[r.length - 1];
                    return e ? this.getDirectionAngle(e.x, e.y, t.x, t.y) : 0
                },
                getMouseLocus: function() {
                    return r
                }
            };
            t.
        default = o
        },
        , ,
        function(e, t) {
            function n(t) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(e) {
                    return typeof e
                }: e.exports = n = function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
                },
                n(t)
            }
            e.exports = n
        },
        , ,
        function(e, t, n) {},
        function(e, t, n) {
            "use strict";
            n(10)
        },
        function(e, t, n) {
            "use strict";
            var r = n(0),
            o = r(n(11)),
            i = r(n(12));
            $((function() {
                new i.
            default(""),
                $(document).on("click", ".weixin-sh", (function() { (0, o.
                default)(1024) || $(".wx-pop-wrapper").fadeIn(300)
                })),
                $(document).on("click", ".wx-pop-wrapper", (function() { (0, o.
                default)(1024) || $(".wx-pop-wrapper").fadeOut(300)
                })),
                $(document).on("click", ".footer-collapse-icon", (function() {
                    $(".footer-hot-recommend-content").toggleClass("expand")
                })),
                $(".content-center").height() <= 115 && $(".footer-collapse-icon").css("display", "none");
                var e = $(".footer-copyright").html();
                e && (e = e.replace(String((new Date).getFullYear() - 1), String((new Date).getFullYear())), $(".footer-copyright").html(e))
            }))
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function(e) {
                var t = "mediaQuery" + (new Date).getTime(),
                n = '\n    <span class="'.concat(t, '">\n    <style>\n        .').concat(t, "{\n            font-size: 0 !important;\n        }\n        @media(min-width: ").concat(e, "px){\n            .").concat(t, "{\n                font-size: 20px !important;\n            }\n        }\n    </style>\n    </span>"),
                r = $(n).appendTo("body"),
                o = "20px" === r.css("font-size");
                return r.remove(),
                o
            }
        },
        function(e, t, n) {
            "use strict"; (function(e) {
                var r, o, i, a, s = n(0)(n(5));
                window,
                a = function() {
                    return function(e) {
                        var t = {};
                        function n(r) {
                            if (t[r]) return t[r].exports;
                            var o = t[r] = {
                                i: r,
                                l: !1,
                                exports: {}
                            };
                            return e[r].call(o.exports, o, o.exports, n),
                            o.l = !0,
                            o.exports
                        }
                        return n.m = e,
                        n.c = t,
                        n.d = function(e, t, r) {
                            n.o(e, t) || Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: r
                            })
                        },
                        n.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }),
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        },
                        n.t = function(e, t) {
                            if (1 & t && (e = n(e)), 8 & t) return e;
                            if (4 & t && "object" == (0, s.
                        default)(e) && e && e.__esModule) return e;
                            var r = Object.create(null);
                            if (n.r(r), Object.defineProperty(r, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o,
                            function(t) {
                                return e[t]
                            }.bind(null, o));
                            return r
                        },
                        n.n = function(e) {
                            var t = e && e.__esModule ?
                            function() {
                                return e.
                            default
                            }:
                            function() {
                                return e
                            };
                            return n.d(t, "a", t),
                            t
                        },
                        n.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        },
                        n.p = "/build/",
                        n(n.s = 1)
                    } ([function(e, t, n) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = Date.now(),
                        o = {
                            ajaxGet: function(e, t, n) {
                                void 0 === n && (n = !0);
                                var o = new XMLHttpRequest;
                                n || (e = e + "?_=" + r++),
                                o.onreadystatechange = function() {
                                    4 === o.readyState && 200 === o.status && t(o)
                                },
                                o.open("GET", e, !0),
                                o.send()
                            },
                            getSvgXML: function(e, t, n) {
                                void 0 === n && (n = !0),
                                o.ajaxGet(e, (function(e) {
                                    if (e.responseXML) {
                                        var n = e.responseXML.querySelector("svg");
                                        n && t(n)
                                    }
                                }), n)
                            },
                            isElement: function(e) {
                                return "object" == ("undefined" == typeof HTMLElement ? "undefined": (0, s.
                            default)(HTMLElement)) ? e instanceof HTMLElement: e && "object" == (0, s.
                            default)(e) && 1 === e.nodeType && "string" == typeof e.nodeName
                            }
                        };
                        t.
                    default = o
                    },
                    function(e, t, n) {
                        e.exports = n(2)
                    },
                    function(e, t, n) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = n(3),
                        o = n(4),
                        i = n(0),
                        a = {
                            selector: ".svgicon",
                            srcAttrName: "svg-src",
                            appendStyle: !0,
                            cleanTags: ["title", "desc"],
                            cleanAttrs: ["id", "class"],
                            cache: !0,
                            onBeforeSvgCreate: function() {},
                            onSvgCreated: function() {}
                        },
                        c = ["onBeforeSvgCreate", "onSvgCreated"],
                        l = function() {
                            function e(e) {
                                var t = this;
                                void 0 === e && (e = {}),
                                this.opts = {},
                                this.events = new o.
                            default;
                                var n = this.opts;
                                Object.assign(n, a, e),
                                c.forEach((function(e) {
                                    var r = e.substring(2).replace(/^[A-z]/, (function(e) {
                                        return e.toLowerCase()
                                    }));
                                    t.events.on(r, n[e])
                                })),
                                "string" == typeof n.selector ? this.elements = Array.from(document.querySelectorAll(n.selector)) : i.
                            default.isElement(n.selector) ? this.elements = [n.selector] : "object" == (0, s.
                            default)(n.selector) ? this.elements = Array.from(n.selector).filter((function(e) {
                                    return i.
                                default.isElement(e)
                                })):
                                this.elements = [],
                                this.init()
                            }
                            return e.prototype.on = function() {
                                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; (e = this.events).on.apply(e, r.__spread(t))
                            },
                            e.prototype.off = function() {
                                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; (e = this.events).off.apply(e, r.__spread(t))
                            },
                            e.prototype.once = function() {
                                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; (e = this.events).once.apply(e, r.__spread(t))
                            },
                            e.prototype.init = function() {
                                var e = this,
                                t = this.opts,
                                n = t.selector,
                                r = t.srcAttrName,
                                o = t.appendStyle,
                                a = t.cleanTags,
                                s = t.cleanAttrs,
                                c = t.cache;
                                if (a = a.map((function(e) {
                                    return e.toLocaleLowerCase()
                                })), o) {
                                    var l = document.createElement("style"),
                                    u = n.replace(/[.#\[][\w]+$/, (function(e) {
                                        return "svg" + e
                                    }));
                                    u = u === n ? "": u + ",",
                                    l.innerHTML = "\n          " + u + "\n          " + n + " svg {\n            width: 1em;\n            height: 1em;\n            fill: currentColor;\n          }\n          " + n + ' [fill]:not([fill="none"]):not([fill="transparent"]) {\n            fill: currentColor;\n          }\n          ' + n + ' [stroke]:not([stroke="none"]):not([stroke="transparent"]) {\n            stroke: currentColor;\n          }\n          ',
                                    document.querySelector("head").appendChild(l)
                                }
                                this.elements.forEach((function(t) {
                                    var n = t.getAttribute(r);
                                    n && i.
                                default.getSvgXML(n, (function(n) {
                                        o || (n.setAttribute("width", "1em"), n.setAttribute("height", "1em"), n.setAttribute("fill", "currentColor")),
                                        Array.from(n.querySelectorAll("*")).forEach((function(e) {
                                            if ( - 1 !== a.indexOf(e.tagName.toLocaleLowerCase()) && e.parentNode.removeChild(e), s.forEach((function(t) {
                                                e.removeAttribute(t)
                                            })), !o) {
                                                var t = e.getAttribute("fill"),
                                                n = e.getAttribute("stroke");
                                                null !== t && "none" !== t && "transparent" !== t && e.setAttribute("fill", "currentColor"),
                                                null !== n && "none" !== n && "transparent" !== n && e.setAttribute("stroke", "currentColor")
                                            }
                                        })),
                                        "svg" !== t.tagName.toLocaleLowerCase() ? (e.events.emit("beforeSvgCreate", n, t, n), t.appendChild(n)) : (["viewBox", "version", "xmlns", "width", "height", "fill"].forEach((function(e) {
                                            t.setAttribute(e, n.getAttribute(e))
                                        })), e.events.emit("beforeSvgCreate", n, t, n), t.innerHTML = n.innerHTML),
                                        e.events.emit("svgCreated", n, t, n)
                                    }), c)
                                }))
                            },
                            e
                        } ();
                        t.
                    default = l
                    },
                    function(e, t, n) {
                        n.r(t),
                        n.d(t, "__extends", (function() {
                            return o
                        })),
                        n.d(t, "__assign", (function() {
                            return i
                        })),
                        n.d(t, "__rest", (function() {
                            return a
                        })),
                        n.d(t, "__decorate", (function() {
                            return c
                        })),
                        n.d(t, "__param", (function() {
                            return l
                        })),
                        n.d(t, "__metadata", (function() {
                            return u
                        })),
                        n.d(t, "__awaiter", (function() {
                            return d
                        })),
                        n.d(t, "__generator", (function() {
                            return f
                        })),
                        n.d(t, "__exportStar", (function() {
                            return h
                        })),
                        n.d(t, "__values", (function() {
                            return p
                        })),
                        n.d(t, "__read", (function() {
                            return v
                        })),
                        n.d(t, "__spread", (function() {
                            return m
                        })),
                        n.d(t, "__spreadArrays", (function() {
                            return g
                        })),
                        n.d(t, "__await", (function() {
                            return w
                        })),
                        n.d(t, "__asyncGenerator", (function() {
                            return b
                        })),
                        n.d(t, "__asyncDelegator", (function() {
                            return y
                        })),
                        n.d(t, "__asyncValues", (function() {
                            return C
                        })),
                        n.d(t, "__makeTemplateObject", (function() {
                            return _
                        })),
                        n.d(t, "__importStar", (function() {
                            return $
                        })),
                        n.d(t, "__importDefault", (function() {
                            return x
                        }));
                        /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
                        var r = function(e, t) {
                            return (r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array &&
                            function(e, t) {
                                e.__proto__ = t
                            } ||
                            function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                        };
                        function o(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }
                        var i = function() {
                            return (i = Object.assign ||
                            function(e) {
                                for (var t, n = 1,
                                r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                return e
                            }).apply(this, arguments)
                        };
                        function a(e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var o = 0;
                                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                            }
                            return n
                        }
                        function c(e, t, n, r) {
                            var o, i = arguments.length,
                            a = i < 3 ? t: null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" == ("undefined" == typeof Reflect ? "undefined": (0, s.
                        default)(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                            else for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
                            return i > 3 && a && Object.defineProperty(t, n, a),
                            a
                        }
                        function l(e, t) {
                            return function(n, r) {
                                t(n, r, e)
                            }
                        }
                        function u(e, t) {
                            if ("object" == ("undefined" == typeof Reflect ? "undefined": (0, s.
                        default)(Reflect)) && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                        }
                        function d(e, t, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(e) {
                                    try {
                                        c(r.next(e))
                                    } catch(e) {
                                        i(e)
                                    }
                                }
                                function s(e) {
                                    try {
                                        c(r.
                                        throw (e))
                                    } catch(e) {
                                        i(e)
                                    }
                                }
                                function c(e) {
                                    e.done ? o(e.value) : new n((function(t) {
                                        t(e.value)
                                    })).then(a, s)
                                }
                                c((r = r.apply(e, t || [])).next())
                            }))
                        }
                        function f(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: s(0),
                                throw: s(1),
                                return: s(2)
                            },
                            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }),
                            i;
                            function s(i) {
                                return function(s) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.
                                            return: i[0] ? r.
                                            throw || ((o = r.
                                            return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++,
                                                {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++,
                                                r = i[1],
                                                i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(),
                                                a.trys.pop();
                                                continue;
                                            default:
                                                if (! (o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1],
                                                    o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2],
                                                    a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(),
                                                a.trys.pop();
                                                continue
                                            }
                                            i = t.call(e, a)
                                        } catch(e) {
                                            i = [6, e],
                                            r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    } ([i, s])
                                }
                            }
                        }
                        function h(e, t) {
                            for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                        }
                        function p(e) {
                            var t = "function" == typeof Symbol && e[Symbol.iterator],
                            n = 0;
                            return t ? t.call(e) : {
                                next: function() {
                                    return e && n >= e.length && (e = void 0),
                                    {
                                        value: e && e[n++],
                                        done: !e
                                    }
                                }
                            }
                        }
                        function v(e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var r, o, i = n.call(e),
                            a = [];
                            try {
                                for (; (void 0 === t || t-->0) && !(r = i.next()).done;) a.push(r.value)
                            } catch(e) {
                                o = {
                                    error: e
                                }
                            } finally {
                                try {
                                    r && !r.done && (n = i.
                                    return) && n.call(i)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            return a
                        }
                        function m() {
                            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
                            return e
                        }
                        function g() {
                            for (var e = 0,
                            t = 0,
                            n = arguments.length; t < n; t++) e += arguments[t].length;
                            var r = Array(e),
                            o = 0;
                            for (t = 0; t < n; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                            return r
                        }
                        function w(e) {
                            return this instanceof w ? (this.v = e, this) : new w(e)
                        }
                        function b(e, t, n) {
                            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                            var r, o = n.apply(e, t || []),
                            i = [];
                            return r = {},
                            a("next"),
                            a("throw"),
                            a("return"),
                            r[Symbol.asyncIterator] = function() {
                                return this
                            },
                            r;
                            function a(e) {
                                o[e] && (r[e] = function(t) {
                                    return new Promise((function(n, r) {
                                        i.push([e, t, n, r]) > 1 || s(e, t)
                                    }))
                                })
                            }
                            function s(e, t) {
                                try { (n = o[e](t)).value instanceof w ? Promise.resolve(n.value.v).then(c, l) : u(i[0][2], n)
                                } catch(e) {
                                    u(i[0][3], e)
                                }
                                var n
                            }
                            function c(e) {
                                s("next", e)
                            }
                            function l(e) {
                                s("throw", e)
                            }
                            function u(e, t) {
                                e(t),
                                i.shift(),
                                i.length && s(i[0][0], i[0][1])
                            }
                        }
                        function y(e) {
                            var t, n;
                            return t = {},
                            r("next"),
                            r("throw", (function(e) {
                                throw e
                            })),
                            r("return"),
                            t[Symbol.iterator] = function() {
                                return this
                            },
                            t;
                            function r(r, o) {
                                t[r] = e[r] ?
                                function(t) {
                                    return (n = !n) ? {
                                        value: w(e[r](t)),
                                        done: "return" === r
                                    }: o ? o(t) : t
                                }: o
                            }
                        }
                        function C(e) {
                            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                            var t, n = e[Symbol.asyncIterator];
                            return n ? n.call(e) : (e = p(e), t = {},
                            r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                                return this
                            },
                            t);
                            function r(n) {
                                t[n] = e[n] &&
                                function(t) {
                                    return new Promise((function(r, o) { !
                                        function(e, t, n, r) {
                                            Promise.resolve(r).then((function(t) {
                                                e({
                                                    value: t,
                                                    done: n
                                                })
                                            }), t)
                                        } (r, o, (t = e[n](t)).done, t.value)
                                    }))
                                }
                            }
                        }
                        function _(e, t) {
                            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                                value: t
                            }) : e.raw = t,
                            e
                        }
                        function $(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e) for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            return t.
                        default = e,
                            t
                        }
                        function x(e) {
                            return e && e.__esModule ? e: {
                            default:
                                e
                            }
                        }
                    },
                    function(e, t, n) {
                        function r(e) {
                            return function(e) {
                                if (Array.isArray(e)) return e
                            } (e) ||
                            function(e) {
                                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                            } (e) ||
                            function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            } ()
                        }
                        function o(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                            }
                        }
                        n.r(t),
                        n.d(t, "default", (function() {
                            return i
                        }));
                        var i = function() {
                            function e() { !
                                function(e, t) {
                                    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                } (this, e),
                                this.listeners = {}
                            }
                            var t, n;
                            return t = e,
                            (n = [{
                                key: "on",
                                value: function(e, t, n) {
                                    var o = this;
                                    if ("function" != typeof t) return this;
                                    var i = e.split(" "),
                                    a = n ? "unshift": "push";
                                    return i.forEach((function(e) {
                                        var n = r(e.split(".")),
                                        i = n[0],
                                        s = n.slice(1),
                                        c = {
                                            handler: t,
                                            namespaces: s
                                        };
                                        o.listeners[i] || (o.listeners[i] = []),
                                        o.listeners[i][a](c)
                                    })),
                                    this
                                }
                            },
                            {
                                key: "off",
                                value: function(e, t) {
                                    return this._matchListeners(e, (function(e) {
                                        return void 0 === t || t === e.handler || e.handler.originHandler && t === e.handler.originHandler
                                    }))
                                }
                            },
                            {
                                key: "emit",
                                value: function(e) {
                                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) r[o - 2] = arguments[o];
                                    return this._matchListeners(e, (function(e) {
                                        e.handler.apply(t, r)
                                    }))
                                }
                            },
                            {
                                key: "once",
                                value: function(e, t, n) {
                                    var r = this;
                                    function o() {
                                        for (var n = arguments.length,
                                        i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                                        t.apply(this, i),
                                        r.off(e, o),
                                        o.originHandler && delete o.originHandler
                                    }
                                    return o.originHandler = t,
                                    this.on(e, o, n)
                                }
                            },
                            {
                                key: "_matchListeners",
                                value: function(e, t) {
                                    var n = this;
                                    return e.split(" ").forEach((function(e) {
                                        var o = r(e.split(".")),
                                        i = o[0],
                                        a = o.slice(1),
                                        s = n.listeners[i];
                                        if (s) for (var c = function(e) {
                                            var n = s[e],
                                            r = !0;
                                            if (a.forEach((function(t) {
                                                if (!n.namespaces.includes(t)) return r = !1,
                                                void(l = e)
                                            })), !r) return e++,
                                            l = e,
                                            "continue"; ! 0 === t(n) ? s.splice(e, 1) : e++,
                                            l = e
                                        },
                                        l = 0; l < s.length;) c(l)
                                    })),
                                    this
                                }
                            }]) && o(t.prototype, n),
                            e
                        } ()
                    }])
                },
                "object" == (0, s.
            default)(t) && "object" == (0, s.
            default)(e) ? e.exports = a() : (o = [], void 0 === (i = "function" == typeof(r = a) ? r.apply(t, o) : r) || (e.exports = i))
            }).call(this, n(13)(e))
        },
        function(e, t) {
            e.exports = function(e) {
                return e.webpackPolyfill || (e.deprecate = function() {},
                e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), e.webpackPolyfill = 1),
                e
            }
        },
        ,
        function(e, t) {
            e.exports = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
        },
        function(e, t) {
            e.exports = function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
        },
        function(e, t) {
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            e.exports = function(e, t, r) {
                return t && n(e.prototype, t),
                r && n(e, r),
                e
            }
        },
        function(e, t, n) {
            var r = n(5);
            function o() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return o = function() {
                    return e
                },
                e
            }
            e.exports = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                default:
                    e
                };
                var t = o();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = e[a]
                }
                return n.
            default = e,
                t && t.set(e, n),
                n
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function(e, t) {
                var n = "";
                void 0 !== document.onmousewheel && (n = "mousewheel");
                if (!n) try {
                    new WheelEvent("wheel");
                    n = "wheel"
                } catch(e) {
                    console.error(e)
                }
                n || (n = "DOMMouseScroll");
                n && e.on(n, (function(e) {
                    var r = e.originalEvent,
                    o = n,
                    i = 0;
                    return r.detail ? i = r.detail: "mousewheel" === o ? i = -r.wheelDelta: "DOMMouseScroll" === o ? i = r.detail: "wheel" === o && (i = r.deltaY),
                    t.call(this, e, i)
                }))
            }
        },
        , , , , , , , , , , , , , ,
        function(e, t) {
            e.exports = function(e, t) { (null == t || t > e.length) && (t = e.length);
                for (var n = 0,
                r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(18);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.func = t.string = t.url = t.time = t.regexp = t.random = t.num = t.dom = t.device = t.cookie = void 0;
            var o = r(n(56));
            t.cookie = o;
            var i = r(n(57));
            t.device = i;
            var a = r(n(58));
            t.dom = a;
            var s = r(n(59));
            t.num = s;
            var c = r(n(60));
            t.random = c;
            var l = r(n(61));
            t.regexp = l;
            var u = r(n(62));
            t.time = u;
            var d = r(n(63));
            t.url = d;
            var f = r(n(64));
            t.string = f;
            var h = r(n(65));
            t.func = h
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function(e) {
                if (!e || e.length < 0) return;
                var t = e.html(),
                n = e.attr("data-holder");
                $(n).after(t).remove(),
                e.remove()
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function() {
                return r
            };
            var r = function() {
                var e = document.createElement("div"),
                t = {
                    transition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend"
                };
                for (var n in t) if (void 0 !== e.style[n]) return t[n];
                return ! 1
            } ()
        },
        , , , ,
        function(e, t, n) {
            e.exports = n(43)
        },
        function(e, t, n) {
            "use strict";
            n(44),
            n(8),
            n(45),
            n(9)
        },
        function(e, t, n) {},
        function(e, t, n) {
            "use strict";
            var r = n(0);
            n(46),
            n(47);
            var o = r(n(54));
            n(66),
            n(75),
            n(78),
            (0, o.
        default)();
            var i = $(".header-verification"),
            a = encodeURIComponent(window.location.href);
            i.length > 0 && i.attr("href", i.attr("href").replace("locale=zh-cn", "locale=zh-cn&service=" + a))
        },
        function(e, t, n) {
            "use strict";
            var r = $("#header"),
            o = $(".header-container"),
            i = $(".header-bottom"),
            a = r.data("methods");
            a || (a = {},
            r.data("methods", a)),
            $(document).ready((function() {
                var e = !1,
                t = i.offset().top;
                window.screen.width > 768 && $(window).scroll((function() {
                    e || (t = i.offset().top);
                    var n = $(document).scrollTop();
                    n >= t && !e ? (o.addClass("fixed"), o.css("top","0"), e = !0) : n < t && e && (o.removeClass("fixed"), o.css("top", "auto"), e = !1);
                    var r = $(".pep-navigation-bar .pagenav-wrapper"),
                    a = $(".pep-solution-page-navigate .por-section");
                    r.length && r.hasClass("fixed") ? $("#header").data("methods").header.hideHeader() : r.length && $("#header").data("methods").header.showHeader(),
                    a.length && (a.hasClass("fixed") ? $("#header").css("opacity", "0") : $("#header").css("opacity", "1"))
                }));
                var n = {
                    hideHeader: function() {
                        r.addClass("fade")
                    },
                    showHeader: function() {
                        r.removeClass("fade")
                    }
                };
                a.header = n
            })),
            $(window).resize = function() {
                if ($("#header").hasClass("show-dropdown")) if ($(".header-dropdown-list").children(".show").eq(0).hasClass("J-drop-common")) {
                    var e = $(".J-drop-common.show"),
                    t = e.attr("data-name"),
                    n = e.find(".dropdown-common-right-wrapper"),
                    r = e.find(".dropdown-common-container");
                    n.length > 0 && n.get(0).scrollHeight > n.get(0).clientHeight && "partner" !== t && r.addClass("showGradient")
                } else {
                    var o = $(".J-drop-product.show .dropdown-product-wrapper-right"),
                    i = $(".J-drop-product.show .dropdown-product-content.show .dropdown-product-content-middleb");
                    i[0].scrollHeight > i[0].clientHeight && o.addClass("showGradient")
                }
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(0),
            o = r(n(1)),
            i = r(n(48));
            $(document).ready((function() {
                var e = $(".header-dropdown"),
                t = $(".header-nav"),
                n = $(".header-allnav"),
                r = $(".J-header-search"),
                a = $(".header-mbshearch"),
                s = r.find(".J-serach-form"),
                c = r.find(".J-search-input"),
                l = r.find(".header-search-icon"),
                u = r.find(".J-search-close"),
                d = r.find(".J-search-drop"),
                f = d.filter(".J-search-hot"),
                h = d.filter(".J-search-autoword"),
                p = (0, o.
            default)(250),
                v = $("html").attr("lang") ? $("html").attr("lang").toLowerCase() : "zh-cn",
                m = {
                    searchUrl: s.attr("data-api-search-url"),
                    hot: s.attr("data-api-hot"),
                    autoword: s.attr("data-api-autoword")
                };
                $(document).on("click", ".header-login-mobile", (function(e) {
                    if (a.removeClass("show"), window.moblieLoginCustom) return ! 1;
                    var t = $(".header-mbnav");
                    $(this).hasClass("header-login-mobile-show") || (t.toggleClass("show", !1), $(".header-menu-mb").toggleClass("show-nav", !1)),
                    $(this).toggleClass("header-login-mobile-show"),
                    e.stopPropagation()
                })),
                $(document).on("click", ".header-user", (function(e) {
                    if (window.moblieLoginCustom) return ! 1;
                    var t = $(".header-mbnav");
                    $(this).hasClass("header-user-info-show") || ($(".header-mbshearch").find(".header-mbshearch-input").val("").trigger("input"), $(".header-mbshearch").removeClass("show"), t.toggleClass("show", !1), $(".header-menu-mb").toggleClass("show-nav", !1)),
                    $(this).toggleClass("header-user-info-show"),
                    e.stopPropagation()
                })),
                $(document).on("click", (function() {
                    $(".header-login-mobile").hasClass("header-login-mobile-show") && $(".header-login-mobile").toggleClass("header-login-mobile-show", !1),
                    $(".header-user").hasClass("header-user-info-show") && $(".header-user").toggleClass("header-user-info-show", !1)
                }));
                var g, w, b, y, C, _ = {
                    togglePlaceholder: (y = c.attr("placeholder"), C = c.attr("data-active-placeholder"),
                    function(e) {
                        c.attr("placeholder", e ? C: y)
                    }),
                    activeSearch: function(e) {
                        e ? (r.toggleClass("active", !0), t.addClass("search-active")) : (r.toggleClass("active", !1), t.removeClass("search-active")),
                        !1 === e && ("" !== c.val() && c.val("").trigger("input"), c.blur())
                    },
                    toggleDropList: function(e) {
                        "hot" === e ? (f.addClass("show"), h.removeClass("show").find("a").removeClass("hover")) : "auto" === e ? (f.removeClass("show").find("a").removeClass("hover"), h.addClass("show")) : "none" === e && (f.removeClass("show").find("a").removeClass("hover"), h.removeClass("show").find("a").removeClass("hover"))
                    },
                    focusDropItemByKeyboard: function(e) {
                        var t = d.filter(".show"),
                        n = t.find("li.to-page");
                        if (0 !== t.length) if (n.length > 0) {
                            var r, o = t.find("div.hover").eq(0),
                            i = t.find("li a.hover");
                            if (0 === o.length && 0 === i.length)(o = t.find(".search-block").eq(0)).addClass("hover"),
                            o.find(".search-tag").addClass("hover"),
                            o.find("a").eq(o.find("a").length - 1).addClass("hover");
                            else {
                                var a = o.length ? o: i,
                                s = o.length ? o.find("a").length: 0,
                                c = "";
                                if ("up" === e) s > 1 && o.find("a.hover").next().length ? (r = a, c = "up") : r = a.parent().prev();
                                else {
                                    if ("down" !== e) return;
                                    s > 1 && o.find("a.hover").prev().length ? (r = a, c = "down") : r = a.parent().next()
                                }
                                r.length && (a.find("a").removeClass("hover"), a.children("div").removeClass("hover")),
                                r.children("div").length ? (r.children("div").addClass("hover"), c.length > 0 ? (r.find("a").removeClass("hover"), "up" === c ? r.find("a").eq(1).addClass("hover") : r.find("a").eq(0).addClass("hover")) : (r.find("div").addClass("hover"), r.find("a").eq(r.find("a").length - 1).addClass("hover"))) : r.children("a").addClass("hover"),
                                0 === c.length && (r.siblings().find("div").removeClass("hover"), r.siblings().children("a").removeClass("hover"))
                            }
                        } else {
                            var l, u = t.find("a.hover");
                            if (0 === u.length)(u = t.find("a").eq(0)).addClass("hover");
                            else {
                                if ("up" === e) l = u.parent().prev();
                                else {
                                    if ("down" !== e) return;
                                    l = u.parent().next()
                                }
                                l.children("a").addClass("hover"),
                                l.siblings().children("a").removeClass("hover")
                            }
                        }
                    },
                    requestRecommend: (b = null,
                    function(e) {
                        b || (b = $.ajax({
                            url: m.hot,
                            type: "get",
                            dataType: "json",
                            data: {
                                language: v
                            }
                        })),
                        b.done((function(t) {
                            e(t.map((function(e) {
                                return e.title
                            })))
                        })).fail((function() {
                            e([])
                        }))
                    }),
                    renderRecommend: function(e) {
                        var t = "";
                        e && e.length > 0 ? (e.forEach((function(e) {
                            t += "<li><a>" + e + "</a></li>"
                        })), f.children("ul").html(t)) : f.html("")
                    },
                    initRecommend: function() {
                        var e = this;
                        this.requestRecommend((function(t) {
                            e.renderRecommend(t)
                        }))
                    },
                    requestAutoword: function(e, t) {
                        var n, r;
                        w && w.abort && w.abort(),
                        !1 !== e && (w = $.ajax({
                            url: m.autoword,
                            type: "get",
                            dataType: "jsonp",
                            data: {
                                q: e,
                                from: "nav",
                                language: v
                            },
                            success: function(e) {
                                var o = e.result || [];
                                n = o.filter((function(e) {
                                    return 99 === e.dataType
                                })).slice(0, 2).map((function(e) {
                                    return {
                                        text: e.text.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                                        href: e.ID,
                                        isProduct: 100 === e.subType,
                                        productUrl: e.url
                                    }
                                })),
                                r = o.filter((function(e) {
                                    return 99 !== e.dataType
                                })).slice(0, 5).map((function(e) {
                                    return e.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                                })),
                                t(n, r)
                            },
                            error: function() {
                                t(n = [], r = [])
                            }
                        }))
                    },
                    renderAutoword: function(e, t, n) {
                        var r = "",
                        o = "",
                        i = function(e, t) {
                            var n = new RegExp(e, "i"),
                            r = !1,
                            o = t.replace(n, (function(e) {
                                return r = !0,
                                "<span>" + e + "</span>"
                            }));
                            return r || (o = "<span>" + o + "</span>"),
                            o
                        },
                        a = {
                            "zh-cn": "控制台",
                            "en-us": "Console"
                        },
                        s = {
                            "zh-cn": "产品",
                            "en-us": "Product"
                        };
                        t.forEach((function(t) {
                            var n = i(e, t.text),
                            o = $("<div></div>");
                            o.text(e);
                            var c = o.html(),
                            l = t.href && t.href.indexOf("console") > -1 ? '<a class="tag-console" target="_blank" href="' + t.href + '" >' + a[v] + "</a>": "",
                            u = t.isProduct ? '<a href="' + t.productUrl + '"class="tag-product"  target="_blank">' + s[v] + "</a>": "";
                            r += '<li class="to-page"><div class="search-block" data-href="' + (t.isProduct ? t.productUrl: t.href) + '" target="_blank" bi_name="' + t.text + '_toPage" mate_data_ts_v2="searcher_navigation.click_directpage_' + c + "." + t.text + '"><p class="text">' + n + "</p>" + (u || l ? '<div class="search-tag">' + l + u + "</div>": "") + "</div></li>"
                        })),
                        n.forEach((function(t) {
                            var n = i(e, t),
                            r = $("<div></div>");
                            r.text(e);
                            var a = r.html();
                            o += '<li><a mate_data_ts_v2="searcher_navigation.click_associate_' + a + "." + t + '">' + n + "</a></li>"
                        })),
                        $(".header-search-droplist ul").css("visibility", r + o ? "visible": "hidden"),
                        $(".header-search-droplist ul").css("padding", r + o ? "8px 0": "0 0"),
                        h.children("ul").html(r + o)
                    },
                    setDefaultKeyword: function(e) {
                        c.attr("placeholder", e)
                    },
                    initDefaultKeyword: function() {
                        var e = this;
                        this.requestRecommend((function(t) {
                            if (t && t.length > 0) {
                                var n = function(e, t) {
                                    var n = e - .5,
                                    r = parseInt(String((t + .5 - n) * Math.random() + n), 10);
                                    r > t && (r = t);
                                    r < e && (r = e);
                                    return r
                                } (0, t.length - 1);
                                e.setDefaultKeyword(t[n])
                            }
                        }))
                    },
                    search: function(e, t) {
                        var n = m.searchUrl + $.base64.urlSafeEncode(e, !0);
                        window.$subsitePostfix && (n = n + "/" + window.$subsitePostfix),
                        "_blank" === t ? window.open(n) : location.href = n
                    },
                    showDropBaseOnInput: (g = "",
                    function() {
                        p((function() {
                            var e = $.trim(c.val());
                            "" === e ? ($(".header-search-submit").attr("mate_data_ts_v2", "searcher_navigation.click_search"), _.requestAutoword(!1, null), _.toggleDropList("hot")) : ($(".header-search-submit").attr("mate_data_ts_v2", "searcher_navigation.click_search_$" + e + ".$" + e), e !== g ? (_.requestAutoword(e, (function(t, n) {
                                _.renderAutoword(e, t, n),
                                _.toggleDropList("auto")
                            })), g = e) : _.toggleDropList("auto"))
                        }))
                    })
                };
                c.on("focus", (function() {
                    _.togglePlaceholder(!0)
                })).on("blur", (function() {
                    _.togglePlaceholder(!1),
                    $(".header-search-submit").attr("mate_data_ts_v2", "searcher_navigation.click_search"),
                    t.removeClass("search-active")
                })),
                s.on("keydown", (function(e) {
                    e.stopPropagation(),
                    38 !== e.keyCode && 40 !== e.keyCode || e.preventDefault(),
                    13 === e.keyCode && (e.preventDefault(), s.trigger("submit"), _.activeSearch(!1), d.removeClass("show")),
                    38 === e.keyCode ? _.focusDropItemByKeyboard("up") : 40 === e.keyCode && _.focusDropItemByKeyboard("down")
                })),
                c.on("keydown", (function(e) {
                    27 === e.keyCode && "" === $(this).val() && (_.activeSearch(!1), _.toggleDropList("none"))
                })),
                c.on("focus", (function() {
                    _.activeSearch(!0)
                })),
                l.on("click", (function() {
                    r.hasClass("active") ? (_.activeSearch(!1), d.removeClass("show")) : (_.activeSearch(!0), c.val("").trigger("input").focus())
                })),
                $(document).on("mousedown", (function(e) {
                    0 === $(e.target).closest(".header-search").length && _.activeSearch(!1)
                })),
                c.on("input", (function() {
                    var e = $(this),
                    t = e.val();
                    e.toggleClass("inputted", "" !== t)
                })),
                u.on("click", (function() {
                    "" !== c.val() && c.val("").trigger("input").focus()
                })),
                s.on("submit", (function(e) {
                    e.preventDefault();
                    var t = $.trim(c.val()),
                    n = d.filter(".show").find("a.hover"),
                    o = d.filter(".show").find(".search-block.hover"),
                    i = n.length ? n: o;
                    if (0 === i.length)"" !== t ? _.search(t, "_blank") : c.is(":visible") || _.search("", "_blank"),
                    "" !== c.val() && (c.val("").trigger("input"), r.toggleClass("active", !1));
                    else {
                        i.trigger("click");
                        var a = i.attr("href");
                        a && ("_blank" === i.attr("target") ? window.open(a) : location.href = a)
                    }
                })),
                c.on("focus input click", (function() {
                    r.hasClass("active") && _.showDropBaseOnInput()
                })),
                $(document).on("click", (function(e) {
                    0 === $(e.target).closest(".header-search").length && _.toggleDropList("none"),
                    e.stopPropagation()
                })),
                $(document).on("click", ".header-search-droplist-mask", (function() {
                    _.toggleDropList("none")
                })),
                $(document).on("click", ".header-search .search-block", (function(e) {
                    window.open($(this).attr("data-href")),
                    _.activeSearch(!1),
                    _.toggleDropList("none"),
                    e.preventDefault()
                })),
                $(document).on("click", ".header-search .search-tag a", (function(e) {
                    e.stopPropagation()
                })),
                e.on("beforeshow", (function() {
                    _.activeSearch(!1),
                    _.toggleDropList("none")
                })),
                n.on("beforeshow", (function() {
                    _.activeSearch(!1),
                    _.toggleDropList("none")
                })),
                d.on("click", "a", (function(e) {
                    var t = $(this),
                    n = $.trim(t.text());
                    c.val(n);
                    var r = t.attr("href");
                    _.toggleDropList("none"),
                    r || (e.preventDefault(), s.trigger("submit")),
                    _.activeSearch(!1)
                })),
                new i.
            default
            }))
        },
        function(e, t, n) {
            "use strict";
            var r = n(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = void 0;
            var o = r(n(15)),
            i = r(n(16)),
            a = r(n(17)),
            s = r(n(49));
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))),
                    n.push.apply(n, r)
                }
                return n
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) { (0, o.
                    default)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u, d, f = "[".concat("data-src", "].").concat("lazyload");
            function h(e) {
                var t = function() {
                    setTimeout(e, 16)
                };
                "complete" === document.readyState ? t() : window.addEventListener("load", t)
            }
            function p(e, t, n) {
                var r, o, i, a = null,
                s = 0;
                n || (n = {});
                var c = function() {
                    return window.performance ? performance.now() : Date.now()
                },
                l = function() {
                    s = !1 === n.leading ? 0 : c(),
                    a = null,
                    i = e.apply(r, o),
                    a || (r = o = null)
                };
                return function() {
                    var u = c();
                    s || !1 !== n.leading || (s = u);
                    var d = t - (u - s);
                    return r = this,
                    o = arguments,
                    d <= 0 || d > t ? (clearTimeout(a), a = null, s = u, i = e.apply(r, o), a || (r = o = null)) : a || !1 === n.trailing || (a = setTimeout(l, d)),
                    i
                }
            }
            function v(e) {
                return "string" == typeof e ? (0, s.
            default)(document.querySelectorAll(e)):
                e instanceof HTMLElement ? [e] : e instanceof HTMLCollection ? (0, s.
            default)(e):
                (Element, e)
            }
            var m = function() {
                function e(t) {
                    var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; (0, i.
                default)(this, e),
                    this._containers = null === t ? [] : t ? v(t) : [document.body],
                    this._config = l({
                        scroller: window,
                        rootMarginY: 0,
                        rootMarginX: 0
                    },
                    r),
                    "string" == typeof this._config.scroller && (this._config.scroller = document.querySelector(this._config.scroller)),
                    r.rootMarginY || h((function() {
                        n._config.rootMarginY = 667,
                        window.IntersectionObserver ? (n.pause(), n.resume()) : n._check()
                    })),
                    this.refresh()
                }
                return (0, a.
            default)(e, [{
                    key: "refresh",
                    value: function() {
                        this.pause(),
                        this._containers.forEach((function(e) {
                            e._images = [];
                            for (var t = e.querySelectorAll(f), n = 0; n < t.length; n++) e._images.push(t[n])
                        })),
                        this.resume()
                    }
                },
                {
                    key: "pause",
                    value: function() {
                        this._runing && (this._runing = !1, this._io ? this._io.disconnect() : (this._config.scroller.removeEventListener("scroll", this._listener, {
                            passive: !0
                        }), this._config.scroller !== window && window.removeEventListener("scroll", this._listener, {
                            passive: !0
                        }), window.removeEventListener("orientationchange", this._listener)))
                    }
                },
                {
                    key: "resume",
                    value: function() {
                        var e = this;
                        this._runing || (this._runing = !0, window.IntersectionObserver ? (this._io = new IntersectionObserver((function(t) {
                            t.forEach((function(t) {
                                if (t.intersectionRatio > 0) {
                                    var n = t.target;
                                    e._load(n),
                                    e._io.unobserve(n),
                                    e._containers.every((function(e) {
                                        return e._images = e._images.filter((function(e) {
                                            return e !== n
                                        })),
                                        !e._images.length
                                    })) && e.pause()
                                }
                            }))
                        }), {
                            rootMargin: "".concat(this._config.rootMarginY, "px ").concat(this._config.rootMarginX, "px"),
                            threshold: 1e-4
                        }), this._containers.forEach((function(t) {
                            t._images.forEach((function(t) {
                                e._io.observe(t)
                            }))
                        }))) : (this._listener = p((function() {
                            e._check()
                        }), 50), this._config.scroller.addEventListener("scroll", this._listener, {
                            passive: !0
                        }), this._config.scroller !== window && window.addEventListener("scroll", this._listener, {
                            passive: !0
                        }), window.addEventListener("orientationchange", this._listener), this._check()))
                    }
                },
                {
                    key: "addContainer",
                    value: function(e) {
                        this._containers = this._containers.concat(v(e)),
                        this.refresh()
                    }
                },
                {
                    key: "_load",
                    value: function(e) {
                        var t = e.getAttribute("data-src");
                        if (t) {
                            var n = this._config.processor;
                            if (n && (t = n(t, e)), e.addEventListener("load", (function() {
                                e.classList.remove("lazyload")
                            })), "IMG" === e.tagName) e.src = t;
                            else if (/^[A-Za-z0-9_-]+$/.test(t)) e.classList.add(t);
                            else {
                                var r = e.getAttribute("style") || "";
                                r += ";background-image: url(".concat(t, ");"),
                                e.setAttribute("style", r),
                                e.style.backgroundImage = t
                            }
                            e.removeAttribute("data-src")
                        }
                    }
                },
                {
                    key: "_check",
                    value: function() {
                        var e = this,
                        t = this._config.rootMarginY,
                        n = this._config.rootMarginX,
                        r = this.constructor.isInViewPort;
                        this._containers.filter((function(o) {
                            if (!r(o, {
                                rootMarginX: n,
                                rootMarginY: t
                            })) return ! 0;
                            return o._images = o._images.filter((function(o) {
                                var i = r(o, {
                                    rootMarginX: n,
                                    rootMarginY: t
                                });
                                if (i) {
                                    if (!o.getAttribute("data-src")) return ! 1;
                                    e._load(o)
                                }
                                return ! i
                            })),
                            o._images.length
                        })).length || this.pause()
                    }
                }], [{
                    key: "addListener",
                    value: function(e, t, n) {
                        "string" == typeof e && (e = document.querySelector(e)),
                        n = l({
                            scroller: window,
                            rootMarginY: 667,
                            rootMarginX: 0
                        },
                        n);
                        var r = this.isInViewPort;
                        if (window.IntersectionObserver) {
                            var o = new IntersectionObserver((function(n) {
                                n[0].intersectionRatio > 0 && (t(e), o.disconnect())
                            }), {
                                root: n.scroller === window ? null: n.scroller,
                                rootMargin: "".concat(n.rootMarginY, "px ").concat(n.rootMarginX, "px"),
                                threshold: 1e-4
                            });
                            o.observe(e)
                        } else {
                            var i = function() {
                                return r(e, {
                                    rootMarginX: n.rootMarginX,
                                    rootMarginY: n.rootMarginY
                                })
                            };
                            if (i()) return t(e);
                            var a = p((function() {
                                i() && (n.scroller.removeEventListener("scroll", a, {
                                    passive: !0
                                }), window.removeEventListener("orientationchange", a), t(e))
                            }), 50);
                            n.scroller.addEventListener("scroll", a, {
                                passive: !0
                            }),
                            window.addEventListener("orientationchange", a)
                        }
                    }
                },
                {
                    key: "isInViewPort",
                    value: function(e, t) {
                        u && d || window.addEventListener("orientationchange", (function() {
                            u = window.innerHeight,
                            d = window.innerWidth
                        })),
                        t = l({
                            rootMarginX: 0,
                            rootMarginY: 0
                        },
                        t);
                        var n = e.getBoundingClientRect();
                        return ! (!n.width && !n.height || n.top - (u || (u = window.innerHeight)) > t.rootMarginY || n.bottom + t.rootMarginY < 0 || n.left - (d || (d = window.innerWidth)) > t.rootMarginX || n.right + t.rootMarginX < 0)
                    }
                },
                {
                    key: "getInstance",
                    value: function(t, n) {
                        return this._instance || (this._instance = new e(t || null, n))
                    }
                }]),
                e
            } ();
            t.
        default = m
        },
        function(e, t, n) {
            var r = n(50),
            o = n(51),
            i = n(52),
            a = n(53);
            e.exports = function(e) {
                return r(e) || o(e) || i(e) || a()
            }
        },
        function(e, t, n) {
            var r = n(34);
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        function(e, t) {
            e.exports = function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        function(e, t, n) {
            var r = n(34);
            e.exports = function(e, t) {
                if (e) {
                    if ("string" == typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                }
            }
        },
        function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(18),
            o = n(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function() {
                $(document).ready((function() {
                    var t = $("#header"),
                    n = $("body"),
                    r = $(".header-prompt-checkbox"),
                    o = $(".header-prompt-closed");
                    r.on("click", (function() {
                        r.toggleClass("active")
                    })),
                    o.on("click", (function() {
                        t.removeClass("show-top-prompt"),
                        n.removeClass("show-top-prompt"),
                        $(".nav-main.fixed").css("top", "48px"),
                        r.hasClass("active") && a.cookie.setCookie("header-prompt-hide", "true")
                    }))
                }))
            };
            var i = o(n(55)),
            a = r(n(35)),
            s = function() {},
            c = function(e) {
                var t = $("#header"),
                n = $("body"),
                r = e.islogin ? "login": "notLogin",
                o = "HK" === e.country ? "HK": "CN",
                i = $("html").attr("lang") ? $("html").attr("lang") : "zh-CN",
                s = "true" === a.cookie.getCookie("header-prompt-hide"),
                c = e.ref;
                if (!s) {
                    t.addClass("show-top-prompt"),
                    n.addClass("show-top-prompt");
                    var l = $(".header-prompt-content>p"),
                    u = $(".header-prompt-radio>p"),
                    d = (e.promptTips[r][o][i].info, e.promptTips[r][o][i].referrer[c]);
                    l.html("".concat(e.promptTips[r][o][i].info, '<a href="').concat(d, '">').concat(d, "</a>")),
                    u.html("".concat(e.promptTips[r][o][i].radioText))
                }
                "ip" === e.type ? t.addClass("show-prompt-ip") : t.removeClass("show-prompt-ip")
            },
            l = function(e) {
                $.ajax({
                    type: "GET",
                    url: e,
                    success: function(e) {
                        if (e && e.data && e.data.length > 0 && e.data[0].location) {
                            if (!e.data[0].location.countrycode) return;
                            if (("CN" === e.data[0].location.countrycode ? "CN": "HK") === window.reg) return;
                            c({
                                type: "ip",
                                country: window.reg,
                                lan: window.promptLan,
                                ref: s(),
                                promptTips: i.
                            default.promptTips,
                                islogin: !1
                            })
                        }
                    },
                    error: function() {
                        console.log("error")
                    }
                })
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = void 0;
            var r = {
                promptTips: {
                    login:{},
                    notLogin: {},
                    changeLanTip: {}
                }
            };
            t.
        default = r
        },
        function(e, t, n) {
            "use strict";
            function r(e, t, n, r, o) {
                if (n) {
                    var i = new Date;
                    i.setDate(i.getDate() + n),
                    document.cookie = e + "=" + t + ";expires=" + i + ";path=" + r + ";domain=" + o
                } else document.cookie = e + "=" + t + ";path=" + (r || "/") + (o ? ";domain=" + o: "")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getCookie = function(e) {
                for (var t = document.cookie.replace(/\s/g, "").split(";"), n = 0; n < t.length; n++) {
                    var r = t[n].split("=");
                    if (r[0] === e) return decodeURIComponent(r[1])
                }
                return
            },
            t.setCookie = r,
            t.removeCookie = function(e) {
                r(e, "1", -1)
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getBrowser = function() {
                var e = {},
                t = navigator.userAgent.toLowerCase(),
                n = t.match(/(msie|firefox|chrome|opera|version).*?([\d.]+)/);
                return e.browser = n[1].replace(/version/, "'safari"),
                e.ver = n[2],
                e
            },
            t.getOS = function() {
                var e = "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "",
                t = "navigator" in window && "appVersion" in navigator && navigator.appVersion.toLowerCase() || "";
                return /iphone/i.test(e) || /ipad/i.test(e) || /ipod/i.test(e) ? "ios": /android/i.test(e) ? "android": /win/i.test(t) && /phone/i.test(e) ? "windowsPhone": /mac/i.test(t) ? "MacOSX": /win/i.test(t) ? "windows": /linux/i.test(t) ? "linux": "unknown"
            },
            t.isMobileUa = function() {
                return !! navigator.userAgent.match(/AppleWebKit.*Mobile.*/)
            },
            t.isMobileWidth = function() {
                return document.body.clientWidth <= 768
            },
            t.isIE = function() {
                return !! window.ActiveXObject || "ActiveXObject" in window
            },
            t.isWeiXin = function() {
                return "micromessenger" === window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getScrollTop = function() {
                return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
            },
            t.offset = function(e) {
                var t = {
                    left: 0,
                    top: 0
                },
                n = e;
                for (; n;) t.left += n.offsetLeft,
                t.top += n.offsetTop,
                n = n.offsetParent;
                return t
            },
            t.setScrollTop = function(e) {
                return window.scrollTo(0, e),
                e
            },
            t.requestAnimFrame = function() {
                return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
                function(e) {
                    window.setTimeout(e, 1e3 / 60)
                })()
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.outOfNum = function(e, t) {
                var n = e;
                return (n = n ? n - 0 : 0) > t ? "".concat(t, "+") : n
            },
            t.formatMoney = function(e) {
                return e.toLocaleString("en-US")
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.randomNum = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isEmail = function(e) {
                return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e)
            },
            t.isIdCard = function(e) {
                if (!/^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/.test(e)) return ! 1;
                var t = parseInt(e.substr(6, 4), 10),
                n = parseInt(e.substr(10, 2), 10),
                r = parseInt(e.substr(12, 2), 10),
                o = Date.parse(n + "-" + r + "-" + t),
                i = Date.parse((new Date).toString()),
                a = new Date(t, n, 0).getDate();
                if (o > i || r > a) return ! 1;
                for (var s = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], c = e.split(""), l = 0, u = 0; u < 17; u++) l += parseInt(c[u], 10) * parseInt(String(s[u]), 10);
                if (c[17].toUpperCase() !== ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"][l % 11].toUpperCase()) return ! 1;
                return ! 0
            },
            t.isPhoneNum = function(e) {
                return /^(\+?(00)?86\-?)?1[3456789]\d{9}$/.test(e.toString())
            },
            t.isUrl = function(e) {
                return new RegExp("^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$").test(e)
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.parseTime = function(e, t) {
                if (0 === arguments.length) return null;
                var n, r = e,
                i = t || "{y}-{m}-{d} {h}:{i}:{s}";
                "object" === (0, o.
            default)(r) ? n = r: (10 === String(r).length && (r = 1e3 * parseInt(r, 10)), n = new Date(r));
                var a = {
                    y: n.getFullYear(),
                    m: n.getMonth() + 1,
                    d: n.getDate(),
                    h: n.getHours(),
                    i: n.getMinutes(),
                    s: n.getSeconds(),
                    a: n.getDay()
                },
                s = i.replace(/{(y|m|d|h|i|s|a)+}/g, (function(e, t) {
                    var n = a[t];
                    return "a" === t ? ["一", "二", "三", "四", "五", "六", "日"][n - 1] : (e.length > 0 && n < 10 && (n = "0" + n), n || 0)
                }));
                return s
            };
            var o = r(n(5))
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.parseQueryString = function(e) {
                var t = e;
                if ( - 1 === (t = t || window.location.href).indexOf("?")) return {};
                var n = "?" === t[0] ? t.substr(1) : t.substring(t.lastIndexOf("?") + 1);
                if ("" === n) return {};
                for (var r = {},
                o = 0; o < n.length; o++) {
                    var i = n[o].split("=");
                    r[decodeURIComponent(i[0])] = decodeURIComponent(i[1] || "")
                }
                return r
            },
            t.stringfyQueryString = function(e) {
                if (!e) return "";
                var t = [];
                for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return t.join("&")
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.subText = function(e, t) {
                if (0 === e.length) return "";
                return e.length > t ? e.substr(0, t) + "...": e
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.escapeHTML = function(e) {
                return e.replace(/[&<>'"]/g, (function(e) {
                    return {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "'": "&#39;",
                        '"': "&quot;"
                    } [e] || e
                })),
                e
            },
            t.formatFileSize = function(e, t) {
                return e < 1024 ? e + "B": e < 1048576 ? (e / 1024).toFixed(t || 2) + "KB": e < 1073741824 ? (e / 1048576).toFixed(t || 2) + "MB": (e / 1073741824).toFixed(t || 2) + "GB"
            },
            t.debounce = function(e, t, n) {
                var r;
                return function() {
                    var o = this,
                    i = arguments;
                    if (r && clearTimeout(r), n) {
                        var a = !r;
                        r = setTimeout((function() {
                            r = null
                        }), t),
                        a && e.apply(this, i)
                    } else r = setTimeout((function() {
                        e.apply(o, i)
                    }), t)
                }
            },
            t.throttle = function(e, t, n) {
                var r, o;
                1 === n ? r = 0 : 2 === n && (o = null);
                return function() {
                    var i = this,
                    a = arguments;
                    if (1 === n) {
                        var s = Date.now();
                        s - r > t && (e.apply(this, a), r = s)
                    } else 2 === n && (o || (o = setTimeout((function() {
                        o = null,
                        e.apply(i, a)
                    }), t)))
                }
            },
            t.loadScript = function(e, t) {
                var n = document.createElement("script");
                n.type = "text/",
                void 0 !== t && (n.readyState ? n.onreadystatechange = function() {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
                }: n.onload = function() {
                    t()
                });
                n.src = e,
                document.body.appendChild(n)
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(0),
            o = r(n(1)),
            i = r(n(2)),
            a = r(n(36)),
            s = r(n(67)),
            c = r(n(37)),
            l = r(n(68)),
            u = r(n(73)),
            d = r(n(74));
            $(document).ready((function() {
                var e = (0, c.
            default)(),
                t = $("#header"),
                n = t.find(".header-inner"),
                r = (t.find(".header-nav"), t.find(".header-nav-list")),
                f = t.find(".header-nav-scroll"),
                h = r.find(">li.hasicon"),
                p = h.not(".header-nav-item-more"),
                v = (h.filter(".header-nav-item-more"), f.find(".scroll-lbtn")),
                m = f.find(".scroll-rbtn"),
                g = r.find(".hasicon[data-key=ei]"),
                w = r.find(".hasicon[data-key=price]");
                function b() {
                    if (m.css("display", "none"), v.css("display", "none"), r.css("left", 0), g && (window.innerWidth > 1210 && window.innerWidth < 1260 ? g.hide() : g.show()), window.innerWidth > 1024 && window.innerWidth < 1210 ? w.hide() : w.show(), r.removeClass("medium-length").removeClass("short-length"), window.isDeveloperFloat) {
                        if (n.addClass("isDeveloper"), f.width() + 1 >= f[0].scrollWidth) return;
                        r.hasClass("medium-length") || r.hasClass("short-length") ? r.hasClass("medium-length") && !r.hasClass("short-length") && r.removeClass("medium-length").addClass("short-length") : (r.addClass("medium-length"), f.width() + 1 < f[0].scrollWidth && r.removeClass("medium-length").addClass("short-length"))
                    } else f.width() + 1 >= f[0].scrollWidth || (r.hasClass("medium-length") || r.hasClass("short-length") ? r.hasClass("medium-length") && !r.hasClass("short-length") ? (r.removeClass("medium-length").addClass("short-length"), f.width() + 1 < f[0].scrollWidth && m.css("display", "inline-block")) : r.hasClass("short-length") && m.css("display", "inline-block") : (r.addClass("medium-length"), f.width() + 1 < f[0].scrollWidth && (r.removeClass("medium-length").addClass("short-length"), g.hide()), f.width() + 1 < f[0].scrollWidth && m.css("display", "inline-block")))
                }
                $(window).resize((function() {
                    b()
                })),
                b(),
                m.on("click", (function() {
                    var e = r.width() - f.width();
                    r.css("left", -1 * e),
                    m.css("display", "none"),
                    v.css("display", "inline-block")
                })),
                v.on("click", (function() {
                    r.css("left", 0),
                    m.css("display", "inline-block"),
                    v.css("display", "none")
                })),
                $(".J-header-ad").each((function() {
                    var e = $(this),
                    t = e.attr("data-ad-src");
                    t && e.load(t + " .header-ad-inner", (function(t, n) {
                        "success" === n && -1 !== t.indexOf("header-ad-inner") && (e.addClass("load-ad"), b())
                    }))
                }));
                var y = function() {
                    var n = (0, o.
                default)(300),
                    a = $(".header-dropdown"),
                    c = $(".header-dropdown-list"),
                    u = c.children("li"),
                    d = function(e, t) {
                        if ("show" === t || "hide" === t) {
                            var n = "show" === t,
                            r = n ? "show": "hide";
                            e.triggerHandler("before" + r),
                            e.toggleClass("show", n)
                        }
                    },
                    f = $(".J-drop-close"),
                    v = function(n) {
                        if ("show" === n) {
                            if (c.children(".show").eq(0).hasClass("J-drop-common")) {
                                var r = $(".J-drop-common.show"),
                                o = r.attr("data-name"),
                                i = r.find(".dropdown-common-right-wrapper"),
                                s = r.find(".dropdown-common-container");
                                i.length > 0 && i.get(0).scrollHeight > i.get(0).clientHeight && "partner" !== o && s.addClass("showGradient")
                            }
                            if (t.hasClass("show-dropdown") && !c.hasClass("hiding")) return;
                            a.triggerHandler("beforeshow"),
                            a.addClass("showMask"),
                            t.addClass("show-dropdown"),
                            c.height(0).addClass("expanding show-text"),
                            setTimeout((function() {
                                var t = c.children(".show").outerHeight();
                                c.height(t),
                                a.triggerHandler("beginshow");
                                var n = !1;
                                c.one(e, (function() {
                                    n = !0,
                                    $(this).removeClass("expanding").height(""),
                                    a.triggerHandler("aftershow")
                                })),
                                setTimeout((function() {
                                    n || c.trigger(e)
                                }), 350)
                            }), 0)
                        } else if ("hide" === n) {
                            if (!t.hasClass("show-dropdown")) return;
                            a.triggerHandler("beforehide"),
                            a.removeClass("showMask");
                            var l = c.children(".show").outerHeight();
                            c.removeClass("show-text").height(l),
                            setTimeout((function() {
                                c.height(0).addClass("hiding"),
                                a.triggerHandler("beginhide");
                                var n = !1;
                                c.one(e, (function() {
                                    n = !0,
                                    d(u.filter(".show"), "hide"),
                                    t.removeClass("show-dropdown"),
                                    c.removeClass("hiding"),
                                    a.triggerHandler("afterhide")
                                })),
                                setTimeout((function() {
                                    n || c.trigger(e)
                                }), 350)
                            }), 0)
                        }
                    };
                    u.hover((function() {
                        $(this).addClass("hover")
                    }), (function(e) {
                        var t, n, o, i, a, s, c, l, u, d = $(this); (n = this, o = (t = e).clientX, i = t.clientY, a = n.getBoundingClientRect() || {},
                        s = a.left, c = a.top, l = a.left + a.width, u = a.top + a.height, o >= s && o <= l && i >= c && i <= u) || (d.removeClass("hover"), setTimeout((function() {
                            r.hasClass("item-hover") || v("hide")
                        }), 0))
                    })),
                    f.on("click", (function() {
                        v("hide")
                    }));
                    h.mouseleave((function() {
                        var e = $(this),
                        o = u.filter(".show");
                        e.removeClass("hover"),
                        r.removeClass("item-hover"),
                        "hide",
                        n((function() {
                            o.hasClass("hover") || r.hasClass("item-hover") || (t.hasClass("show-dropdown") || $(".header-nav-hover-line").width(0), v("hide"))
                        }), 200)
                    })).mousemove((function() {
                        var e = $(this),
                        t = i.
                    default.getMoveAngle(),
                        o = i.
                    default.getMouseLocus();
                        if (o && o.length) {
                            var a = function(e, t) {
                                var n = u.filter(".show");
                                if (0 === n.length) return {
                                    min: 90,
                                    max: 90
                                };
                                var r = n.offset(),
                                o = r.left - 0,
                                a = r.top,
                                s = {
                                    x: o,
                                    y: a
                                },
                                c = {
                                    x: r.left + n.outerWidth() + 0,
                                    y: a
                                },
                                l = i.
                            default.getDirectionAngle(e, t, s.x, s.y);
                                return {
                                    min: i.
                                default.getDirectionAngle(e, t, c.x, c.y),
                                    max: l
                                }
                            } (o[o.length - 1].x, o[o.length - 1].y),
                            c = t <= a.max && t >= a.min ? 300 : 150;
                            e.addClass("hover"),
                            r.addClass("item-hover"),
                            s.
                        default.active(e),
                            "show",
                            n((function() {
                                var t = e.attr("data-key"),
                                n = u.filter('[data-name="' + t + '"]');
                                e.addClass("active").siblings().removeClass("active"),
                                function(e) {
                                    if (!e.hasClass("show")) {
                                        var t = u.siblings(".show");
                                        d(t, "hide"),
                                        d(e, "show")
                                    }
                                } (n),
                                v("show")
                            }), c)
                        }
                    })),
                    a.on("beginhide", (function() {
                        s.
                    default.fold()
                    })).on("afterhide", (function() {
                        0 === p.filter(".hover").length && h.removeClass("active")
                    })).on("mousemove", (function(e) {
                        0 !== $(e.target).closest(".header-dropdown-list").length || c.hasClass("hiding") || v("hide")
                    })),
                    u.hover((function() {
                        s.
                    default.active(h.filter(".active")),
                        n((function() {}))
                    }), (function() {})),
                    c.children('[data-name="more"]').on("beforeshow", (function() {
                        var e = $(".header-dropdown-more"),
                        t = e.find(">ul>li"),
                        n = $(".header-nav-item-more").offset().left;
                        e.css("margin-left", n - 25),
                        t.addClass("header-more-item-hide"),
                        h.filter(".header-nav-item-hide").each((function() {
                            var e = $(this).attr("data-key");
                            t.filter('[data-key="' + e + '"]').removeClass("header-more-item-hide")
                        }))
                    }))
                },
                C = !1;
                $(".header-nav-list>li>a").one("mousemove", (function() {
                    C || ((0, a.
                default)($("#header-lazyload-html-drop")), C = !0, y())
                })),
                (0, u.
            default)(),
                (0, d.
            default)()
            }))
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = void 0;
            var r = $("#header").find(".header-nav"),
            o = r.find(">ul>li"),
            i = r.find(".header-nav-list"),
            a = r.find(".header-nav-scroll"),
            s = (o.not(".header-nav-item-more"), $(".header-nav-hover-line")),
            c = {
                active: function(e) {
                    var t = e.find("span");
                    e.find("a");
                    if (0 !== t.length && t.is(":visible")) {
                        var n = e.position().left + Number(e.css("padding-left").replace("px", "")) + a.position().left + i.position().left + Number(a && a.css("margin-left").replace("px", "")),
                        r = t.width();
                        s.css({
                            height: 2,
                            left: n,
                            width: r
                        })
                    } else this.fold()
                },
                fold: function() {
                    s.css({
                        width: 0
                    })
                }
            };
            t.
        default = c
        },
        function(e, t, n) {
            "use strict";
            var r = n(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function() { (0, o.
            default)(),
                (0, i.
            default)(),
                (0, a.
            default)()
            };
            var o = r(n(69)),
            i = r(n(70)),
            a = r(n(72))
        },
        function(e, t, n) {
            "use strict";
            var r = n(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function() {
                var e = $(".dropdown-common-left-wrapper>div, .dropdown-common-right-wrapper");
                e.scrollUnique(),
                (0, o.
            default)(e, (function(e) {
                    e.stopPropagation()
                }))
            };
            var o = r(n(19))
        },
        function(e, t, n) {
            "use strict";
            var r = n(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function() {
                $(document).ready((function() {
                    var e, t, n, r, c;
                    e = $(".J-product-nav"),
                    t = (0, o.
                default)(300),
                    n = $(".J-product-nav, .dropdown-product-content-middleb, .dropdown-product-content-right"),
                    r = function(e) {
                        $('.dropdown-product-content[data-name="' + e + '"]').addClass("show").siblings().removeClass("show");
                        var t = $(".J-drop-product.show .dropdown-product-wrapper-right"),
                        n = $(".J-drop-product.show .dropdown-product-content.show .dropdown-product-content-middleb");
                        n[0].scrollHeight > n[0].clientHeight && t.addClass("showGradient")
                    },
                    c = function(e) {
                        e.parent().addClass("active").siblings().removeClass("active"),
                        e.parents("ul").siblings().children("li").removeClass("active")
                    },
                    e.on("mouseenter", ".dropdown-product-nav-menu", (function() {
                        var e = $(this),
                        n = 0;
                        e.parent().hasClass("active") || (n = i.
                    default.getMoveAngle() > 70 || i.
                    default.getMoveAngle() < -70 ? 0 : 300, t((function() {
                            c(e),
                            r(e.attr("data-target"))
                        }), n))
                    })).on("mouseleave", (function() {
                        t((function() {}), 0)
                    })),
                    n.scrollUnique(),
                    (0, a.
                default)(n, (function(e) {
                        e.stopPropagation()
                    })),
                    $(".dropdown-product-container").each((function() {
                        var e = $(this),
                        t = e.find(".link-searcher"),
                        n = t.find(".link-searcher-input"),
                        r = t.find(".link-searcher-drop"),
                        o = e.find(".dropdown-product-content").not(".no-search").find(".dropdown-product-content-middle").find("a[href]"),
                        i = t.attr("data-no-results-text"),
                        a = t.find(".link-searcher-submit"),
                        c = new s.
                    default({
                            selector:
                            t,
                            targetsSelector: o,
                            noResultsText: i
                        });
                        t.data("methods", c),
                        t.on("dropRendered", (function() {
                            var e = $(this),
                            t = e.find(".link-searcher-input"),
                            n = $.trim(t.val());
                            e.find(".link-searcher-drop").find("li").not(".no-result").find("a").each((function() {
                                var e = $(this),
                                t = e.attr("href"),
                                r = n + "_" + t + "_enter";
                                e.attr("bi_name", r)
                            }))
                        })),
                        a.click((function() {
                            var e = $(this),
                            t = "",
                            o = n.val(),
                            i = r.find("li.active");
                            r.hasClass("show") && i.length > 0 && (t = o + "_" + i.find("a").attr("href") + "_click"),
                            e.attr("bi_name", t)
                        }))
                    })),
                    $(".header-dropdown-list>li").on("beforehide", (function() {
                        var e = $(this).find(".link-searcher").data("methods");
                        e && e.activeSearch(!1)
                    }))
                }))
            };
            var o = r(n(1)),
            i = r(n(2)),
            a = r(n(19)),
            s = r(n(71))
        },
        function(e, t, n) {
            "use strict";
            var r = n(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = void 0;
            var o = r(n(19)),
            i = function(e) {
                var t = [],
                n = [];
                return e.forEach((function(e) { - 1 === n.indexOf(e.name) && (t.push(e), n.push(e.name))
                })),
                t
            },
            a = function(e) {
                var t = e.get(0),
                n = "";
                return function e(t) {
                    var r = t.childNodes;
                    if (0 !== r.length) {
                        var o = r[0],
                        i = $.trim(o.textContent);
                        3 === o.nodeType ? i ? n = i: o.nextSibling && e(o.nextSibling) : e(o)
                    }
                } (t),
                n
            },
            s = function(e) {
                this.opts = $.extend({},
                {
                    selector: "",
                    targetsSelector: "",
                    noResultsText: ""
                },
                e),
                this.$form = $(this.opts.selector).eq(0),
                this.$input = this.$form.find(".link-searcher-input"),
                this.$clear = this.$form.find(".link-searcher-clear"),
                this.$submit = this.$form.find(".link-searcher-submit"),
                this.$resultDrop = this.$form.find(".link-searcher-drop"),
                this.$targets = $(this.opts.targetsSelector),
                this.products = i(this.$targets.map((function() {
                    var e = $(this);
                    return {
                        name: a(e),
                        href: e.attr("href"),
                        keywords: e.attr("data-keywords") ? e.attr("data-keywords").replace(",", "") : ""
                    }
                })).toArray()),
                this.addEvents()
            };
            s.prototype = {
                renderDropList: function(e) {
                    var t = "";
                    e.length > 0 ? e.forEach((function(e, n) {
                        var r = "";
                        0 === n && (r = ' class="active"'),
                        t += "<li" + r + '><a href="' + e.href + '">' + e.name + "</a></li>"
                    })) : t = '<li class="no-result"><a>' + this.opts.noResultsText + "</a></li>",
                    this.$resultDrop.children("ul").html(t),
                    this.$form.trigger("dropRendered")
                },
                toggleDrop: function(e, t) { ! 1 !== t && (t = !0),
                    this.$resultDrop.toggleClass("show", e),
                    e ? this.$resultDrop.scrollTop(0) : (this.$resultDrop.children("ul").html(""), t && "" !== this.$input.val() && this.$input.val("").trigger("input"))
                },
                showDropByResult: function(e) {
                    this.renderDropList(e),
                    this.toggleDrop(!0)
                },
                focusDropItemByKeyboard: function(e) {
                    var t, n = this.$resultDrop.filter(".show"),
                    r = n.find("li.active");
                    if (0 !== n.length && !n.find(".no-result").length) {
                        if (0 === r.length)(r = n.find("li").eq(0)).addClass("active");
                        else {
                            if ("up" === e) t = r.prev();
                            else {
                                if ("down" !== e) return;
                                t = r.next()
                            }
                            if (0 === t.length) return;
                            t.addClass("active"),
                            t.siblings().removeClass("active")
                        }
                        var o = n.scrollTop(),
                        i = n.innerHeight(),
                        a = t.position() ? t.position().top: 0,
                        s = t.outerHeight();
                        a < o ? n.scrollTop(a) : a + s > o + i && n.scrollTop(a + s - i)
                    }
                },
                searchProduct: function(e, t) {
                    var n = [];
                    return t = t ||
                    function() {},
                    this.products.forEach((function(t) { - 1 === t.name.toUpperCase().indexOf(e.toUpperCase()) && -1 === t.keywords.toUpperCase().indexOf(e.toUpperCase()) || n.push(t)
                    })),
                    t(n),
                    n
                },
                activeSearch: function(e) {
                    e ? this.$input.focus() : (this.toggleDrop(!1), this.$input.blur())
                },
                submit: function() {
                    var e = this.$resultDrop.find("li.active").find("a");
                    0 !== e.length && ("_blank" === e.attr("target") ? window.open(e.attr("href")) : location.href = e.attr("href"))
                },
                addEvents: function() {
                    var e = this;
                    e.$form.on("keydown", (function(t) {
                        t.stopPropagation(),
                        38 !== t.keyCode && 40 !== t.keyCode || t.preventDefault(),
                        38 === t.keyCode ? e.focusDropItemByKeyboard("up") : 40 === t.keyCode && e.focusDropItemByKeyboard("down")
                    })),
                    e.$input.on("input", (function() {
                        var t = $(this);
                        e.$form.toggleClass("active", "" !== t.val())
                    })),
                    e.$clear.click((function() {
                        "" !== e.$input.val() && e.$input.val("").trigger("input").focus()
                    })),
                    e.$input.on("input focus", (function() {
                        var t = $(this),
                        n = $.trim(t.val());
                        if ("" !== n) {
                            var r = e.searchProduct(n);
                            e.showDropByResult(r)
                        } else e.toggleDrop(!1, !1)
                    })),
                    $(document).on("click", (function(t) {
                        0 === $(t.target).closest(".link-searcher").length && e.toggleDrop(!1)
                    })),
                    e.$form.on("submit", (function(t) {
                        t.preventDefault(),
                        e.submit()
                    })),
                    e.$resultDrop.on("click", "li", (function() {
                        e.submit()
                    })),
                    e.$resultDrop.on("mouseenter", "li", (function() {
                        var e = $(this);
                        e.hasClass("no-result") || e.addClass("active").siblings().removeClass("active")
                    })),
                    e.$resultDrop.scrollUnique(),
                    (0, o.
                default)(e.$resultDrop, (function(e) {
                        e.stopPropagation()
                    }))
                }
            };
            var c = s;
            t.
        default = c
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function() {
                function e() {
                    var e = $(".header-nav").length > 0 ? $(".header-nav").offset().left: 0;
                    $(".header-dropdown-list>.header-dropdown-dialog").each((function(t, n) {
                        var r = $(this),
                        o = r.attr("data-name"),
                        i = ($("[data-key=" + o + "] span").length > 0 ? $("[data-key=" + o + "] span").offset().left: e) - 24;
                        r.css("transform", "translateX(" + i + "px)").css("margin-left", "-3%")
                    })),
                    $(".dropdown-dialog-wrapper").length > 0 && $(".header-dropdown").addClass("noMask")
                }
                e(),
                $(window).resize((function() {
                    e()
                }))
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(18);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function() {
                $(document).on("click", ".header-top-ad i", (function(e) {
                    $(".header-top-ad").remove(),
                    $("#header").removeClass("show-top-ad"),
                    o.cookie.getCookie("header-top-ad") || o.cookie.setCookie("header-top-ad", "hide", 1),
                    e.preventDefault(),
                    e.stopPropagation()
                }))
            };
            var o = r(n(35))
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function() {
                var e = $("#header").find(".header-shopping-cart");
                if (0 === e.length) return;
                var t = e.attr("data-api-canuse"),
                n = e.attr("data-api-summary");
                if (window.observer) {
                    var r = window.observer;
                    r("login") || r("login", !0),
                    r("login").subscribe(null, (function(r) {
                        if (r && 1 === r.flag) {
                            var o = r.domainId;
                            $.ajax({
                                type: "POST",
                                crossDomain: !0,
                                xhrFields: {
                                    withCredentials: !0
                                },
                                url: t,
                                data: {
                                    customer_id: o
                                },
                                success: function(t) {
                                    t && t.can_use_shopping_cart &&
                                    function(t) {
                                        $.ajax({
                                            type: "POST",
                                            crossDomain: !0,
                                            xhrFields: {
                                                withCredentials: !0
                                            },
                                            url: n,
                                            data: {
                                                customer_id: t
                                            },
                                            success: function(t) {
                                                if (t && t.shopping_cart_summary) {
                                                    var n = t.shopping_cart_summary.total;
                                                    n && e.find(".shopping-cart-icon span").text(n),
                                                    e.css("display", "inline-block"),
                                                    e.find("a").each((function(e, t) {
                                                        var n = $(t).attr("data-shopping-cart");
                                                        n && $(t).attr("href", n)
                                                    }))
                                                }
                                            },
                                            error: function() {}
                                        })
                                    } (o)
                                },
                                error: function() {}
                            })
                        }
                    }))
                }
            }
        },
        function(e, t, n) {
            "use strict";
            var r = n(0),
            o = r(n(37)),
            i = r(n(36)),
            a = r(n(76)),
            s = (0, o.
        default)();
            $(document).ready((function() {
                var e = !1;
                $(document).on("click", ".header-menu-mb", (function() {
                    var t, n, r, o;
                    e || ((0, i.
                default)($("#header-lazyload-html-mbnav")), (0, a.
                default)(), e = !0, $(document).on("click", ".header-menu-mb", (function() {
                        var e = $(".header-mbnav"),
                        t = e.hasClass("show");
                        e.toggleClass("show", !t),
                        $(this).toggleClass("show-nav", !t);
                        var n = $(".header-mbshearch");
                        n.data("methods") && n.data("methods").closeSearch()
                    })), $(document).on("click", ".header-subsite-mb-search", (function() {
                        $(".header-mbnav").toggleClass("show", !1);
                        var e = $(".header-mbshearch");
                        e.data("methods") && e.data("methods").openSearch()
                    })), $(document).on("click", ".header-packup-btn", (function() {
                        var e = $(".header-mbnav"),
                        t = e.hasClass("show");
                        e.toggleClass("show", !t),
                        $(".header-menu-mb").toggleClass("show-nav", !t)
                    })), $(".header-mbnav").on("click", ".header-collapse-head > a", (function(e) {
                        var t = $(this);
                        if (t.closest(".header-collapse").find(".header-collapse-body").length > 0 && "H2" !== e.target.tagName) e.preventDefault();
                        else if (this.href) return;
                        var n = t.closest(".header-collapse"),
                        r = n.children(".header-collapse-body"),
                        o = r.children(".header-collapse-content"),
                        i = n.hasClass("open");
                        t.parent().parent().siblings(".header-collapse").removeClass("open"),
                        $(t.parent().parent().siblings(".header-collapse").find(".header-collapse")).removeClass("open"),
                        t.parent().parent().siblings(".header-collapse"),
                        $(t.parent().parent().siblings(".header-collapse").find(".header-collapse")).addClass("closed"),
                        i ? (r.height(o.outerHeight()), r.height(0), n.removeClass("open")) : (n.removeClass("closed"), r.height(o.outerHeight()), n.addClass("open"));
                        var a = !1;
                        r.one(s, (function() {
                            a = !0,
                            n.hasClass("open") || n.addClass("closed"),
                            $(this).height("")
                        })),
                        setTimeout((function() {
                            a || r.trigger(s)
                        }), 350)
                    })), $(document).on("click", ".header-mbnav-level1 a[data-key]", (function() {
                        var e = $(this).attr("data-key");
                        if (e) {
                            var t = $(".header-mbnav-level2").find(".header-mbnav-level2-inner"),
                            n = t.filter('[data-name="' + e + '"]'),
                            r = $(".header-mbnav-inner");
                            0 !== n.length && (t.removeClass("show"), n.addClass("show"), r.addClass("show-next-level"))
                        }
                    })), $(document).on("click", ".header-mbnav-level2-back", (function() {
                        $(".header-mbnav-inner").removeClass("show-next-level")
                    })), $(document).on("click", ".header-mbnav-level2-menulist a", (function() {
                        var e = $(this),
                        t = e.parent(),
                        n = e.closest(".header-mbnav-level2-menulist"),
                        r = t.attr("data-key"),
                        o = n.closest(".header-mbnav-level2-body").find(".header-mbnav-level2-collapses").children("li"),
                        i = o.filter('[data-name="' + r + '"]');
                        t.addClass("active").siblings().removeClass("active"),
                        o.removeClass("show"),
                        i.addClass("show")
                    })), $(this).trigger("click"))
                }));
                var t = $(".header-ad-pc.load-ad").attr("data-imgmb"),
                n = $(".header-ad-pc.load-ad").attr("href");
                if (t && n) {
                    var r = '<a class="header-ad-mb load-ad" href="' + n + '" bi_name="导航广告"><img src="' + t + '"></a>';
                    $(".header-tools").append(r)
                }
            }))
        },
        function(e, t, n) {
            "use strict";
            var r = n(0);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function() { (i("backdropFilter") || i("webkitBackdropFilter")) && (0, o.
            default)() || ($(".header-backdrop-filter,.header-backdrop").addClass("header-backdrop-fix"), $(".header-top-backdrop-filter").addClass("header-backdrop-fix"), $(".header-top-backdrop-filter").removeClass("header-top-backdrop-filter"))
            };
            var o = r(n(77));
            function i(e) {
                return e in document.createElement("div").style
            }
        },
        function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.
        default = function() {
                return i
            };
            var r, o = -1 !== (r = navigator.userAgent).indexOf("compatible") && -1 !== r.indexOf("MSIE") || -1 !== r.indexOf("Edge") || -1 !== r.indexOf("Trident") && -1 !== r.indexOf("rv:11.0"),
            i = function() {
                if (o) return ! 0;
                var e = document.createElement("canvas").getContext("webgl");
                if (!e) return ! 0;
                var t = e.getExtension("WEBGL_debug_renderer_info");
                return "Google SwiftShader" !== e.getParameter(t.UNMASKED_RENDERER_WEBGL)
            } ()
        },
        function(e, t, n) {
            "use strict";
            var r = n(0)(n(1));
            $(document).ready((function() {
                var e, t, n = $(".header-mbshearch"),
                o = n.find(".header-mbshearch-form"),
                i = n.find(".header-mbshearch-input"),
                a = n.find(".header-mbshearch-droplist"),
                s = (0, r.
            default)(250),
                c = $("html").attr("lang") ? $("html").attr("lang").toLowerCase() : "zh-cn",
                l = {
                    autoword: o.attr("data-api-autoword")
                },
                u = {
                    openSearch: function() {
                        $(".header-mbnav").removeClass("show"),
                        $(".header-menu-mb").removeClass("show-nav"),
                        n.addClass("show"),
                        i.focus()
                    },
                    closeSearch: function() {
                        i.val("").trigger("input"),
                        n.removeClass("show")
                    },
                    toggleSearch: function() {
                        n.hasClass("show") ? this.closeSearch() : this.openSearch()
                    },
                    toggleDropList: function(e) {
                        "none" === e || 0 === a.find("li").length ? a.removeClass("show").find("a").removeClass("hover") : "auto" === e && a.addClass("show")
                    },
                    requestAutoword: function(e, n) {
                        var r, o;
                        t && t.abort && t.abort(),
                        !1 !== e && (t = $.ajax({
                            url: l.autoword,
                            type: "get",
                            dataType: "jsonp",
                            data: {
                                q: e,
                                from: "nav",
                                language: c
                            },
                            success: function(e) {
                                var t = e.result || [];
                                r = t.filter((function(e) {
                                    return 99 === e.dataType
                                })).slice(0, 2).map((function(e) {
                                    var t = 100 === e.subType ? e.url: e.ID;
                                    return {
                                        subType: e.subType,
                                        text: e.text,
                                        href: t
                                    }
                                })),
                                o = t.filter((function(e) {
                                    return 99 !== e.dataType
                                })).slice(0, 5).map((function(e) {
                                    return e.text
                                })),
                                n(r, o)
                            },
                            error: function() {
                                n(r = [], o = [])
                            }
                        }))
                    },
                    renderAutoword: function(e, t, n) {
                        var r = "",
                        o = "",
                        i = function(e, t) {
                            var n = new RegExp(e, "i"),
                            r = !1,
                            o = t.replace(n, (function(e) {
                                return r = !0,
                                "<span>" + e + "</span>"
                            }));
                            return r || (o = "<span>" + o + "</span>"),
                            o
                        };
                        t.forEach((function(t) {
                            var n = i(e, t.text),
                            o = $("<div></div>");
                            o.text(e);
                            var a = o.html(),
                            s = 100 === t.subType ? "<i>产品</i>": "";
                            r += '<li class="to-page"><a href="' + t.href + '" target="_blank" bi_name="' + t.text + '_toPage" mate_data_ts_v2="searcher_navigation.click_directpage_' + a + "." + t.text + '">' + n + s + "</a></li>"
                        })),
                        n.forEach((function(t) {
                            var n = i(e, t),
                            r = $("<div></div>");
                            r.text(e);
                            var a = r.html();
                            o += '<li><a mate_data_ts_v2="searcher_navigation.click_associate_' + a + "." + t + '">' + n + "</a></li>"
                        })),
                        a.children("ul").html(r + o)
                    },
                    showDropBaseOnInput: (e = "",
                    function() {
                        s((function() {
                            var t = $.trim(i.val());
                            "" === t ? (u.requestAutoword(!1, null), u.toggleDropList("none")) : t !== e ? (u.requestAutoword(t, (function(e, n) {
                                u.renderAutoword(t, e, n),
                                u.toggleDropList("auto")
                            })), e = t) : u.toggleDropList("auto")
                        }), 300)
                    })
                };
                i.on("focus input click", (function() {
                    u.showDropBaseOnInput()
                })),
                a.on("click", "a", (function(e) {
                    var t = $(this),
                    n = $.trim(t.text());
                    n = n.endsWith("产品") ? n.slice(0, -2) : n;
                    var r = t.attr("href");
                    i.val(n),
                    u.toggleDropList("none"),
                    r || (e.preventDefault(), o.trigger("submit"))
                })),
                $(document).on("keydown", ".header-mbshearch-input", (function(e) {
                    13 === e.originalEvent.keyCode && (e.preventDefault(), o.trigger("submit"))
                })),
                $(document).on("click", ".header-menu-search-mb", (function() {
                    u.toggleSearch()
                })),
                $(document).on("click", ".header-mbshearch", (function(e) {
                    this === e.target && u.closeSearch()
                })),
                $(document).on("click", ".header-mbshearch-cancel", (function() {
                    u.closeSearch(),
                    $(".nav-main.fixed").css("top", "48px")
                })),
                n.data("methods", u)
            }))
        }])
    }));
} (jQuery);
$(function() {
		    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS|micromessenger)/i))) {
		        $('.header-user.user-info').addClass('header-login-mobile');
			}else {
		        $('.header-user.user-info').removeClass('header-login-mobile');
			}
		 
		});



//////
! function($) {
	window.BO = {
		wekit: true,
		Chrome: false,
		Safari: false,
		Firefox: false,
		Opera: false,
		IE: false,
		oldIE: false,
		newIE: false,
		iDevice: false,
		iPhone: false,
		iPad: false,
		android: false,
		name: "unkonwn",
		version: ""
	};

	(function() {
		"use strict";
		var uaInfo = navigator.userAgent;
		BO.getUAInfo = function() {
			return uaInfo
		};
		BO.init = function() {
			BO.detectBrowser();
			BO.detectDevice()
		};
		BO.detectBrowser = function() {
			var regF = /Firefox[\/\s](\d+\.\d+)/,
				regO = /Opera|OPR[\/\s](\d+\.\d+)/,
				regI = /MSIE[\/\s](\d+\.\d+)/,
				regC = /Chrome[\/\s](\d+\.\d+)/,
				regS = /Safari[\/\s](\d+\.\d+)/,
				regIn = /rv[\:\s](\d+\.\d+).*like Gecko/;
			BO.Firefox = regF.test(uaInfo);
			BO.Opera = regO.test(uaInfo);
			BO.Chrome = regC.test(uaInfo);
			BO.Safari = !BO.Chrome && regS.test(uaInfo);
			BO.newIE = regIn.test(uaInfo);
			BO.IE = BO.newIE || regI.test(uaInfo);
			BO.oldIE = BO.IE && !BO.newIE && Number(uaInfo.match(regI)[1]) < 9;
			var regSV = /Version\/(\d+.\d+.\d+)/;
			BO.Chrome && (BO.name = "Chrome") && (BO.version = uaInfo.match(regC) && uaInfo.match(regC)[1]);
			BO.Firefox && (BO.name = "Firefox") && (BO.version = uaInfo.match(regF) && uaInfo.match(regF)[1]);
			BO.Safari && (BO.name = "Safari") && (BO.version = uaInfo.match(regSV) && uaInfo.match(regSV)[1]);
			BO.Opera && (BO.name = "Opera") && (BO.version = uaInfo.match(regO) && uaInfo.match(regO)[1]);
			BO.IE && (BO.name = "IE") && (BO.version = BO.newIE ? uaInfo.match(regIn) && uaInfo.match(regIn)[
				1] : (uaInfo.match(regI) && uaInfo.match(regI))[1]);
			BO.webkit = !(BO.Firefox || BO.Opera || BO.IE)
		};
		BO.detectDevice = function() {
			var ua = uaInfo.toLowerCase();
			BO.android = ua.indexOf("android") > -1;
			/iPad/i.test(uaInfo) && (BO.iPad = true) && (BO.iDevice = true);
			/iPhone|iPod/i.test(uaInfo) && (BO.iPhone = true) && (BO.iDevice = true)
		}
	})();

	jQuery.extend(jQuery.easing, {
		easeOutSine: function(x, t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b
		}
	});
	$(function() {
		BO.init();
		BO.oldIE && $("body").addClass("oldIE");
		BO.iDevice && $("body").addClass("Mobile");
		if (BO.oldIE && !localStorage.getItem("hideCompatible")) {
			$("body").addClass("Compatible")
		}
		var win_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			win_height = window.innerHeight || document.documentElement.clientHeight || document.body
			.clientHeight;
		var $frame = $("body");
		$(window).scroll(function(event) {
			if (!$("#header").hasClass("loaded")) {
				return
			}
			var currTop = $(window).scrollTop();
			if (currTop <= 30) {
				$frame.removeClass("scrolled")
			} else {
				$frame.addClass("scrolled")
			}
			if (currTop > win_height) {
				$(".float-sidebar").addClass("show-totop")
			} else {
				$(".float-sidebar").removeClass("show-totop")
			}
			$(".float-sidebar").removeClass("show");
		});
		if (win_width < 1024) {
			$(".float-sidebar").on("click", ".shown-btn", function(event) {
				$(this).closest(".float-sidebar").addClass("show")
			});
			$(".help-header").addClass("hide")
		}
		var $header = $("#header");

		function setSubNav() {
			$(".subnav-layer").each(function(index, el) {
				$(this).css("top", $(this).height() * -1)
			})
		}
		headerFun();

		function headerFun() {
			$header.addClass("loaded");
			if (win_width < 1024) {
				$(".help-header .navigation .nav .nav-item").removeClass("hide")
			}
		}
		$frame.on("click", 'a[href="#toTop"]', function(event) {
			event.preventDefault();
			$("body,html").stop().animate({
				scrollTop: 0
			}, 500, "easeOutSine", function() {
				href_click = false
			})
		});

	});

	function initFloatDialog() {
		try {
			var container = document.createElement("div");
			var showBottomAd = true;
			var infoClose = false;
			var starClose = false;
			var label = false;
			var labelName = "";
			var time = false;
			var scrollShow = false;
			$(document).on("click", ".prompt-content .top-ad i", function(e) {
				$(".header-top-ad").remove();
				$("body").removeClass("showPrompt");
				$("#header").removeClass("showPrompt");
				$("#header").removeClass("top-ad-height");
				if (!getCookie("header-top-ad")) {
					setCookie("header-top-ad", "hide", 1)
				}
				e.preventDefault();
				e.stopPropagation();
				return
			});
		} catch (error) {}
	}
	if (!window.location.origin) {
		window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ?
			":" + window.location.port : "")
	}
	var isDeveloperFloat = window.isDeveloperFloat || "";
	if (isDeveloperFloat) {
		initFloatDialog()
	} else {
		$(window).load(function() {
			initFloatDialog()
		})
	}
}(jQuery);