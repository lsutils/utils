"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
    } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}

(self.webpackChunkzsxq = self.webpackChunkzsxq || []).push([[458], {
    7214: function _(da) {
        !function ha(br) {
            var Dr;
            Dr = function Dr() {
                "use strict";

                function kr(s, a) {
                    var t = Object.keys(s);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(s);
                        a && (e = e.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(s, r).enumerable;
                        })), t.push.apply(t, e);
                    }
                    return t;
                }

                function yt(s) {
                    for (var a = 1; a < arguments.length; a++) {
                        var t = null != arguments[a] ? arguments[a] : {};
                        a % 2 ? kr(Object(t), !0).forEach(function (e) {
                            var r, i, n;
                            r = s, n = t[e], (i = _r(i = e)) in r ? Object.defineProperty(r, i, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[i] = n;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)) : kr(Object(t)).forEach(function (e) {
                            Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(t, e));
                        });
                    }
                    return s;
                }

                function _r(s) {
                    var a = function (t, e) {
                        if ("object" != _typeof(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var i = r.call(t, "string");
                            if ("object" != _typeof(i)) return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(t);
                    }(s);
                    return "symbol" == _typeof(a) ? a : String(a);
                }

                function wr(s, a) {
                    for (var t = 0; t < a.length; t++) {
                        var e = a[t];
                        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, _r(e.key), e);
                    }
                }

                function ct(s, a, t) {
                    return a && wr(s.prototype, a), t && wr(s, t), Object.defineProperty(s, "prototype", {
                        writable: !1
                    }), s;
                }

                function gt() {
                    return gt = Object.assign ? Object.assign.bind() : function (s) {
                        for (var a = 1; a < arguments.length; a++) {
                            var t = arguments[a];
                            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (s[e] = t[e]);
                        }
                        return s;
                    }, gt.apply(this, arguments);
                }

                function At(s, a) {
                    s.prototype = Object.create(a.prototype), s.prototype.constructor = s, ee(s, a);
                }

                function Be(s) {
                    return (Be = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (a) {
                        return a.__proto__ || Object.getPrototypeOf(a);
                    })(s);
                }

                function ee(s, a) {
                    return (ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
                        return t.__proto__ = e, t;
                    })(s, a);
                }

                function Ue(s, a, t) {
                    return (Ue = function () {
                        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                            })), !0;
                        } catch (_unused) {
                            return !1;
                        }
                    }() ? Reflect.construct.bind() : function (e, r, i) {
                        var n = [null];
                        n.push.apply(n, r);
                        var o = new (Function.bind.apply(e, n))();
                        return i && ee(o, i.prototype), o;
                    }).apply(null, arguments);
                }

                function me(s) {
                    var a = "function" == typeof Map ? new Map() : void 0;
                    return me = function me(t) {
                        if (null === t || !function (r) {
                            try {
                                return -1 !== Function.toString.call(r).indexOf("[native code]");
                            } catch (_unused2) {
                                return "function" == typeof r;
                            }
                        }(t)) return t;
                        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== a) {
                            if (a.has(t)) return a.get(t);
                            a.set(t, e);
                        }

                        function e() {
                            return Ue(t, arguments, Be(this).constructor);
                        }

                        return e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), ee(e, t);
                    }, me(s);
                }

                function xr(s) {
                    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
                }

                var t,
                    e,
                    r,
                    i,
                    n,
                    Cr = {
                        exports: {}
                    };
                t = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, e = /^(?=([^\/?#]*))\1([^]*)$/, r = /(?:\/|^)\.(?=\/)/g, i = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, Cr.exports = n = {
                    buildAbsoluteURL: function buildAbsoluteURL(o, l, d) {
                        if (d = d || {}, o = o.trim(), !(l = l.trim())) {
                            if (!d.alwaysNormalize) return o;
                            var u = n.parseURL(o);
                            if (!u) throw new Error("Error trying to parse base URL.");
                            return u.path = n.normalizePath(u.path), n.buildURLFromParts(u);
                        }
                        var h = n.parseURL(l);
                        if (!h) throw new Error("Error trying to parse relative URL.");
                        if (h.scheme) return d.alwaysNormalize ? (h.path = n.normalizePath(h.path), n.buildURLFromParts(h)) : l;
                        var f = n.parseURL(o);
                        if (!f) throw new Error("Error trying to parse base URL.");
                        if (!f.netLoc && f.path && "/" !== f.path[0]) {
                            var c = e.exec(f.path);
                            f.netLoc = c[1], f.path = c[2];
                        }
                        f.netLoc && !f.path && (f.path = "/");
                        var m = {
                            scheme: f.scheme,
                            netLoc: h.netLoc,
                            path: null,
                            params: h.params,
                            query: h.query,
                            fragment: h.fragment
                        };
                        if (!h.netLoc && (m.netLoc = f.netLoc, "/" !== h.path[0])) if (h.path) {
                            var g = f.path,
                                y = g.substring(0, g.lastIndexOf("/") + 1) + h.path;
                            m.path = n.normalizePath(y);
                        } else m.path = f.path, h.params || (m.params = f.params, h.query || (m.query = f.query));
                        return null === m.path && (m.path = d.alwaysNormalize ? n.normalizePath(h.path) : h.path), n.buildURLFromParts(m);
                    },
                    parseURL: function parseURL(o) {
                        var l = t.exec(o);
                        return l ? {
                            scheme: l[1] || "",
                            netLoc: l[2] || "",
                            path: l[3] || "",
                            params: l[4] || "",
                            query: l[5] || "",
                            fragment: l[6] || ""
                        } : null;
                    },
                    normalizePath: function normalizePath(o) {
                        for (o = o.split("").reverse().join("").replace(r, ""); o.length !== (o = o.replace(i, "")).length;) ;
                        return o.split("").reverse().join("");
                    },
                    buildURLFromParts: function buildURLFromParts(o) {
                        return o.scheme + o.netLoc + o.path + o.params + o.query + o.fragment;
                    }
                };
                var s,
                    Ge = Cr.exports,
                    N = Number.isFinite || function (s) {
                        return "number" == typeof s && isFinite(s);
                    },
                    ca = Number.isSafeInteger || function (s) {
                        return "number" == typeof s && Math.abs(s) <= va;
                    },
                    va = Number.MAX_SAFE_INTEGER || 9007199254740991,
                    E = ((s = {}).MEDIA_ATTACHING = "hlsMediaAttaching", s.MEDIA_ATTACHED = "hlsMediaAttached", s.MEDIA_DETACHING = "hlsMediaDetaching", s.MEDIA_DETACHED = "hlsMediaDetached", s.BUFFER_RESET = "hlsBufferReset", s.BUFFER_CODECS = "hlsBufferCodecs", s.BUFFER_CREATED = "hlsBufferCreated", s.BUFFER_APPENDING = "hlsBufferAppending", s.BUFFER_APPENDED = "hlsBufferAppended", s.BUFFER_EOS = "hlsBufferEos", s.BUFFER_FLUSHING = "hlsBufferFlushing", s.BUFFER_FLUSHED = "hlsBufferFlushed", s.MANIFEST_LOADING = "hlsManifestLoading", s.MANIFEST_LOADED = "hlsManifestLoaded", s.MANIFEST_PARSED = "hlsManifestParsed", s.LEVEL_SWITCHING = "hlsLevelSwitching", s.LEVEL_SWITCHED = "hlsLevelSwitched", s.LEVEL_LOADING = "hlsLevelLoading", s.LEVEL_LOADED = "hlsLevelLoaded", s.LEVEL_UPDATED = "hlsLevelUpdated", s.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", s.LEVELS_UPDATED = "hlsLevelsUpdated", s.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", s.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", s.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", s.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", s.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", s.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", s.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", s.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", s.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", s.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", s.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", s.CUES_PARSED = "hlsCuesParsed", s.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", s.INIT_PTS_FOUND = "hlsInitPtsFound", s.FRAG_LOADING = "hlsFragLoading", s.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", s.FRAG_LOADED = "hlsFragLoaded", s.FRAG_DECRYPTED = "hlsFragDecrypted", s.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", s.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", s.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", s.FRAG_PARSED = "hlsFragParsed", s.FRAG_BUFFERED = "hlsFragBuffered", s.FRAG_CHANGED = "hlsFragChanged", s.FPS_DROP = "hlsFpsDrop", s.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", s.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", s.ERROR = "hlsError", s.DESTROYING = "hlsDestroying", s.KEY_LOADING = "hlsKeyLoading", s.KEY_LOADED = "hlsKeyLoaded", s.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", s.BACK_BUFFER_REACHED = "hlsBackBufferReached", s.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", s),
                    Y = function (s) {
                        return s.NETWORK_ERROR = "networkError", s.MEDIA_ERROR = "mediaError", s.KEY_SYSTEM_ERROR = "keySystemError", s.MUX_ERROR = "muxError", s.OTHER_ERROR = "otherError", s;
                    }({}),
                    _ = function (s) {
                        return s.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", s.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", s.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", s.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", s.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", s.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", s.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", s.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", s.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", s.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", s.MANIFEST_LOAD_ERROR = "manifestLoadError", s.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", s.MANIFEST_PARSING_ERROR = "manifestParsingError", s.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", s.LEVEL_EMPTY_ERROR = "levelEmptyError", s.LEVEL_LOAD_ERROR = "levelLoadError", s.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", s.LEVEL_PARSING_ERROR = "levelParsingError", s.LEVEL_SWITCH_ERROR = "levelSwitchError", s.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", s.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", s.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", s.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", s.FRAG_LOAD_ERROR = "fragLoadError", s.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", s.FRAG_DECRYPT_ERROR = "fragDecryptError", s.FRAG_PARSING_ERROR = "fragParsingError", s.FRAG_GAP = "fragGap", s.REMUX_ALLOC_ERROR = "remuxAllocError", s.KEY_LOAD_ERROR = "keyLoadError", s.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", s.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", s.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", s.BUFFER_APPEND_ERROR = "bufferAppendError", s.BUFFER_APPENDING_ERROR = "bufferAppendingError", s.BUFFER_STALLED_ERROR = "bufferStalledError", s.BUFFER_FULL_ERROR = "bufferFullError", s.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", s.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", s.INTERNAL_EXCEPTION = "internalException", s.INTERNAL_ABORTED = "aborted", s.UNKNOWN = "unknown", s;
                    }({}),
                    Gt = function Gt() {
                    },
                    He = {
                        trace: Gt,
                        debug: Gt,
                        log: Gt,
                        warn: Gt,
                        info: Gt,
                        error: Gt
                    },
                    re = He;

                function Ir(s, a) {
                    if ("object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && !0 === s || "object" == _typeof(s)) {
                        !function ga(s) {
                            for (var a = arguments.length, t = new Array(a > 1 ? a - 1 : 0), e = 1; e < a; e++) t[e - 1] = arguments[e];
                            t.forEach(function (r) {
                                re[r] = s[r] ? s[r].bind(s) : function (i) {
                                    var n = self.console[i];
                                    return n ? n.bind(self.console, "[" + i + "] >") : Gt;
                                }(r);
                            });
                        }(s, "debug", "log", "info", "warn", "error");
                        try {
                            re.log('Debug logs enabled for "' + a + '" in hls.js version 1.5.18');
                        } catch (_unused3) {
                            re = He;
                        }
                    } else re = He;
                }

                var A = re,
                    ma = /^(\d+)x(\d+)$/,
                    Pr = /(.+?)=(".*?"|.*?)(?:,|$)/g,
                    lt = function () {
                        function s(t) {
                            "string" == typeof t && (t = s.parseAttrList(t)), gt(this, t);
                        }

                        var a = s.prototype;
                        return a.decimalInteger = function (t) {
                            var e = parseInt(this[t], 10);
                            return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e;
                        }, a.hexadecimalInteger = function (t) {
                            if (this[t]) {
                                var e = (this[t] || "0x").slice(2);
                                e = (1 & e.length ? "0" : "") + e;
                                for (var r = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++) r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                                return r;
                            }
                            return null;
                        }, a.hexadecimalIntegerAsNumber = function (t) {
                            var e = parseInt(this[t], 16);
                            return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e;
                        }, a.decimalFloatingPoint = function (t) {
                            return parseFloat(this[t]);
                        }, a.optionalFloat = function (t, e) {
                            var r = this[t];
                            return r ? parseFloat(r) : e;
                        }, a.enumeratedString = function (t) {
                            return this[t];
                        }, a.bool = function (t) {
                            return "YES" === this[t];
                        }, a.decimalResolution = function (t) {
                            var e = ma.exec(this[t]);
                            if (null !== e) return {
                                width: parseInt(e[1], 10),
                                height: parseInt(e[2], 10)
                            };
                        }, s.parseAttrList = function (t) {
                            var e,
                                r = {};
                            for (Pr.lastIndex = 0; null !== (e = Pr.exec(t));) {
                                var i = e[2];
                                0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[e[1].trim()] = i;
                            }
                            return r;
                        }, ct(s, [{
                            key: "clientAttrs",
                            get: function get() {
                                return Object.keys(this).filter(function (t) {
                                    return "X-" === t.substring(0, 2);
                                });
                            }
                        }]), s;
                    }();

                function pa(s) {
                    return "SCTE35-OUT" === s || "SCTE35-IN" === s;
                }

                var Fr = function () {
                        function s(a, t) {
                            if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, t) {
                                var e = t.attr;
                                for (var r in e) if (Object.prototype.hasOwnProperty.call(a, r) && a[r] !== e[r]) {
                                    A.warn('DATERANGE tag attribute: "' + r + '" does not match for tags with ID: "' + a.ID + '"'), this._badValueForSameId = r;
                                    break;
                                }
                                a = gt(new lt({}), e, a);
                            }
                            if (this.attr = a, this._startDate = new Date(a["START-DATE"]), "END-DATE" in this.attr) {
                                var i = new Date(this.attr["END-DATE"]);
                                N(i.getTime()) && (this._endDate = i);
                            }
                        }

                        return ct(s, [{
                            key: "id",
                            get: function get() {
                                return this.attr.ID;
                            }
                        }, {
                            key: "class",
                            get: function get() {
                                return this.attr.CLASS;
                            }
                        }, {
                            key: "startDate",
                            get: function get() {
                                return this._startDate;
                            }
                        }, {
                            key: "endDate",
                            get: function get() {
                                if (this._endDate) return this._endDate;
                                var a = this.duration;
                                return null !== a ? new Date(this._startDate.getTime() + 1e3 * a) : null;
                            }
                        }, {
                            key: "duration",
                            get: function get() {
                                if ("DURATION" in this.attr) {
                                    var a = this.attr.decimalFloatingPoint("DURATION");
                                    if (N(a)) return a;
                                } else if (this._endDate) return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
                                return null;
                            }
                        }, {
                            key: "plannedDuration",
                            get: function get() {
                                return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
                            }
                        }, {
                            key: "endOnNext",
                            get: function get() {
                                return this.attr.bool("END-ON-NEXT");
                            }
                        }, {
                            key: "isValid",
                            get: function get() {
                                return !!this.id && !this._badValueForSameId && N(this.startDate.getTime()) && (null === this.duration || this.duration >= 0) && (!this.endOnNext || !!this.class);
                            }
                        }]), s;
                    }(),
                    pe = function pe() {
                        this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
                            start: 0,
                            first: 0,
                            end: 0
                        }, this.parsing = {
                            start: 0,
                            end: 0
                        }, this.buffering = {
                            start: 0,
                            first: 0,
                            end: 0
                        };
                    },
                    Tt = "audio",
                    bt = "video",
                    Ve = "audiovideo",
                    Or = function () {
                        function s(a) {
                            var t;
                            this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((t = {})[Tt] = null, t[bt] = null, t[Ve] = null, t), this.baseurl = a;
                        }

                        return s.prototype.setByteRange = function (a, t) {
                            var e,
                                r = a.split("@", 2);
                            e = 1 === r.length ? (t === null || t === void 0 ? void 0 : t.byteRangeEndOffset) || 0 : parseInt(r[1]), this._byteRange = [e, parseInt(r[0]) + e];
                        }, ct(s, [{
                            key: "byteRange",
                            get: function get() {
                                return this._byteRange ? this._byteRange : [];
                            }
                        }, {
                            key: "byteRangeStartOffset",
                            get: function get() {
                                return this.byteRange[0];
                            }
                        }, {
                            key: "byteRangeEndOffset",
                            get: function get() {
                                return this.byteRange[1];
                            }
                        }, {
                            key: "url",
                            get: function get() {
                                return !this._url && this.baseurl && this.relurl && (this._url = Ge.buildAbsoluteURL(this.baseurl, this.relurl, {
                                    alwaysNormalize: !0
                                })), this._url || "";
                            },
                            set: function set(a) {
                                this._url = a;
                            }
                        }]), s;
                    }(),
                    Ke = function (s) {
                        function a(e, r) {
                            var i;
                            return (i = s.call(this, r) || this)._decryptdata = null, i.rawProgramDateTime = null, i.programDateTime = null, i.tagList = [], i.duration = 0, i.sn = 0, i.levelkeys = void 0, i.type = void 0, i.loader = null, i.keyLoader = null, i.level = -1, i.cc = 0, i.startPTS = void 0, i.endPTS = void 0, i.startDTS = void 0, i.endDTS = void 0, i.start = 0, i.deltaPTS = void 0, i.maxStartPTS = void 0, i.minEndPTS = void 0, i.stats = new pe(), i.data = void 0, i.bitrateTest = !1, i.title = null, i.initSegment = null, i.endList = void 0, i.gap = void 0, i.urlId = 0, i.type = e, i;
                        }

                        At(a, s);
                        var t = a.prototype;
                        return t.setKeyFormat = function (e) {
                            if (this.levelkeys) {
                                var r = this.levelkeys[e];
                                r && !this._decryptdata && (this._decryptdata = r.getDecryptData(this.sn));
                            }
                        }, t.abortRequests = function () {
                            var e, r;
                            null == (e = this.loader) || e.abort(), null == (r = this.keyLoader) || r.abort();
                        }, t.setElementaryStreamInfo = function (e, r, i, n, o, l) {
                            void 0 === l && (l = !1);
                            var d = this.elementaryStreams,
                                u = d[e];
                            u ? (u.startPTS = Math.min(u.startPTS, r), u.endPTS = Math.max(u.endPTS, i), u.startDTS = Math.min(u.startDTS, n), u.endDTS = Math.max(u.endDTS, o)) : d[e] = {
                                startPTS: r,
                                endPTS: i,
                                startDTS: n,
                                endDTS: o,
                                partial: l
                            };
                        }, t.clearElementaryStreamInfo = function () {
                            var e = this.elementaryStreams;
                            e[Tt] = null, e[bt] = null, e[Ve] = null;
                        }, ct(a, [{
                            key: "decryptdata",
                            get: function get() {
                                if (!this.levelkeys && !this._decryptdata) return null;
                                if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
                                    var e = this.levelkeys.identity;
                                    if (e) this._decryptdata = e.getDecryptData(this.sn); else {
                                        var r = Object.keys(this.levelkeys);
                                        if (1 === r.length) {
                                            console.log(this.levelkeys);
                                            return this._decryptdata = this.levelkeys[r[0]].getDecryptData(this.sn);
                                        }
                                    }
                                }
                                return this._decryptdata;
                            }
                        }, {
                            key: "end",
                            get: function get() {
                                return this.start + this.duration;
                            }
                        }, {
                            key: "endProgramDateTime",
                            get: function get() {
                                if (null === this.programDateTime || !N(this.programDateTime)) return null;
                                var e = N(this.duration) ? this.duration : 0;
                                return this.programDateTime + 1e3 * e;
                            }
                        }, {
                            key: "encrypted",
                            get: function get() {
                                var e;
                                if (null != (e = this._decryptdata) && e.encrypted) return !0;
                                if (this.levelkeys) {
                                    var r = Object.keys(this.levelkeys),
                                        i = r.length;
                                    if (i > 1 || 1 === i && this.levelkeys[r[0]].encrypted) return !0;
                                }
                                return !1;
                            }
                        }]), a;
                    }(Or),
                    ya = function (s) {
                        function a(t, e, r, i, n) {
                            var o;
                            (o = s.call(this, r) || this).fragOffset = 0, o.duration = 0, o.gap = !1, o.independent = !1, o.relurl = void 0, o.fragment = void 0, o.index = void 0, o.stats = new pe(), o.duration = t.decimalFloatingPoint("DURATION"), o.gap = t.bool("GAP"), o.independent = t.bool("INDEPENDENT"), o.relurl = t.enumeratedString("URI"), o.fragment = e, o.index = i;
                            var l = t.enumeratedString("BYTERANGE");
                            return l && o.setByteRange(l, n), n && (o.fragOffset = n.fragOffset + n.duration), o;
                        }

                        return At(a, s), ct(a, [{
                            key: "start",
                            get: function get() {
                                return this.fragment.start + this.fragOffset;
                            }
                        }, {
                            key: "end",
                            get: function get() {
                                return this.start + this.duration;
                            }
                        }, {
                            key: "loaded",
                            get: function get() {
                                var t = this.elementaryStreams;
                                return !!(t.audio || t.video || t.audiovideo);
                            }
                        }]), a;
                    }(Or),
                    Ea = function () {
                        function s(a) {
                            this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = a;
                        }

                        return s.prototype.reloaded = function (a) {
                            if (!a) return this.advanced = !0, void (this.updated = !0);
                            var t = this.lastPartSn - a.lastPartSn,
                                e = this.lastPartIndex - a.lastPartIndex;
                            this.updated = this.endSN !== a.endSN || !!e || !!t || !this.live, this.advanced = this.endSN > a.endSN || t > 0 || 0 === t && e > 0, this.misses = this.updated || this.advanced ? Math.floor(.6 * a.misses) : a.misses + 1, this.availabilityDelay = a.availabilityDelay;
                        }, ct(s, [{
                            key: "hasProgramDateTime",
                            get: function get() {
                                return !!this.fragments.length && N(this.fragments[this.fragments.length - 1].programDateTime);
                            }
                        }, {
                            key: "levelTargetDuration",
                            get: function get() {
                                return this.averagetargetduration || this.targetduration || 10;
                            }
                        }, {
                            key: "drift",
                            get: function get() {
                                var a = this.driftEndTime - this.driftStartTime;
                                return a > 0 ? 1e3 * (this.driftEnd - this.driftStart) / a : 1;
                            }
                        }, {
                            key: "edge",
                            get: function get() {
                                return this.partEnd || this.fragmentEnd;
                            }
                        }, {
                            key: "partEnd",
                            get: function get() {
                                var a;
                                return null != (a = this.partList) && a.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
                            }
                        }, {
                            key: "fragmentEnd",
                            get: function get() {
                                var a;
                                return null != (a = this.fragments) && a.length ? this.fragments[this.fragments.length - 1].end : 0;
                            }
                        }, {
                            key: "age",
                            get: function get() {
                                return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
                            }
                        }, {
                            key: "lastPartIndex",
                            get: function get() {
                                var a;
                                return null != (a = this.partList) && a.length ? this.partList[this.partList.length - 1].index : -1;
                            }
                        }, {
                            key: "lastPartSn",
                            get: function get() {
                                var a;
                                return null != (a = this.partList) && a.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
                            }
                        }]), s;
                    }(),
                    Ta = xr(void 0);

                function Ht(s, a, t) {
                    return Uint8Array.prototype.slice ? s.slice(a, t) : new Uint8Array(Array.prototype.slice.call(s, a, t));
                }

                var je,
                    We = function We(s, a) {
                        return a + 10 <= s.length && 73 === s[a] && 68 === s[a + 1] && 51 === s[a + 2] && s[a + 3] < 255 && s[a + 4] < 255 && s[a + 6] < 128 && s[a + 7] < 128 && s[a + 8] < 128 && s[a + 9] < 128;
                    },
                    Mr = function Mr(s, a) {
                        return a + 10 <= s.length && 51 === s[a] && 68 === s[a + 1] && 73 === s[a + 2] && s[a + 3] < 255 && s[a + 4] < 255 && s[a + 6] < 128 && s[a + 7] < 128 && s[a + 8] < 128 && s[a + 9] < 128;
                    },
                    ye = function ye(s, a) {
                        for (var t = a, e = 0; We(s, a);) e += 10, e += Ee(s, a + 6), Mr(s, a + 10) && (e += 10), a += e;
                        if (e > 0) return s.subarray(t, t + e);
                    },
                    Ee = function Ee(s, a) {
                        var t = 0;
                        return t = (127 & s[a]) << 21, t |= (127 & s[a + 1]) << 14, (t |= (127 & s[a + 2]) << 7) | 127 & s[a + 3];
                    },
                    Sa = function Sa(s, a) {
                        return We(s, a) && Ee(s, a + 6) + 10 <= s.length - a;
                    },
                    Nr = function Nr(s) {
                        for (var a = Ur(s), t = 0; t < a.length; t++) {
                            var e = a[t];
                            if (Br(e)) return ka(e);
                        }
                    },
                    Br = function Br(s) {
                        return s && "PRIV" === s.key && "com.apple.streaming.transportStreamTimestamp" === s.info;
                    },
                    La = function La(s) {
                        var a = String.fromCharCode(s[0], s[1], s[2], s[3]),
                            t = Ee(s, 4);
                        return {
                            type: a,
                            size: t,
                            data: s.subarray(10, 10 + t)
                        };
                    },
                    Ur = function Ur(s) {
                        for (var a = 0, t = []; We(s, a);) {
                            for (var e = Ee(s, a + 6), r = (a += 10) + e; a + 8 < r;) {
                                var i = La(s.subarray(a)),
                                    n = Ra(i);
                                n && t.push(n), a += i.size + 10;
                            }
                            Mr(s, a) && (a += 10);
                        }
                        return t;
                    },
                    Ra = function Ra(s) {
                        return "PRIV" === s.type ? Aa(s) : "W" === s.type[0] ? Da(s) : ba(s);
                    },
                    Aa = function Aa(s) {
                        if (!(s.size < 2)) {
                            var a = Bt(s.data, !0),
                                t = new Uint8Array(s.data.subarray(a.length + 1));
                            return {
                                key: s.type,
                                info: a,
                                data: t.buffer
                            };
                        }
                    },
                    ba = function ba(s) {
                        if (!(s.size < 2)) {
                            if ("TXXX" === s.type) {
                                var a = 1,
                                    t = Bt(s.data.subarray(a), !0),
                                    e = Bt(s.data.subarray(a += t.length + 1));
                                return {
                                    key: s.type,
                                    info: t,
                                    data: e
                                };
                            }
                            var r = Bt(s.data.subarray(1));
                            return {
                                key: s.type,
                                data: r
                            };
                        }
                    },
                    Da = function Da(s) {
                        if ("WXXX" === s.type) {
                            if (s.size < 2) return;
                            var a = 1,
                                t = Bt(s.data.subarray(a), !0),
                                e = Bt(s.data.subarray(a += t.length + 1));
                            return {
                                key: s.type,
                                info: t,
                                data: e
                            };
                        }
                        var r = Bt(s.data);
                        return {
                            key: s.type,
                            data: r
                        };
                    },
                    ka = function ka(s) {
                        if (8 === s.data.byteLength) {
                            var a = new Uint8Array(s.data),
                                e = (a[4] << 23) + (a[5] << 15) + (a[6] << 7) + a[7];
                            return e /= 45, 1 & a[3] && (e += 47721858.84), Math.round(e);
                        }
                    },
                    Bt = function Bt(s, a) {
                        void 0 === a && (a = !1);
                        var t = function _a() {
                            if (!navigator.userAgent.includes("PlayStation 4")) return je || void 0 === self.TextDecoder || (je = new self.TextDecoder("utf-8")), je;
                        }();
                        if (t) {
                            var e = t.decode(s);
                            if (a) {
                                var r = e.indexOf("\0");
                                return -1 !== r ? e.substring(0, r) : e;
                            }
                            return e.replace(/\0/g, "");
                        }
                        for (var i, n, o, l = s.length, d = "", u = 0; u < l;) {
                            if (0 === (i = s[u++]) && a) return d;
                            if (0 !== i && 3 !== i) switch (i >> 4) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                    d += String.fromCharCode(i);
                                    break;
                                case 12:
                                case 13:
                                    n = s[u++], d += String.fromCharCode((31 & i) << 6 | 63 & n);
                                    break;
                                case 14:
                                    n = s[u++], o = s[u++], d += String.fromCharCode((15 & i) << 12 | (63 & n) << 6 | 63 & o);
                            }
                        }
                        return d;
                    },
                    Gr = function Gr(s) {
                        for (var a = "", t = 0; t < s.length; t++) {
                            var e = s[t].toString(16);
                            e.length < 2 && (e = "0" + e), a += e;
                        }
                        return a;
                    },
                    Te = Math.pow(2, 32) - 1,
                    wa = [].push,
                    Hr = {
                        video: 1,
                        audio: 2,
                        id3: 3,
                        text: 4
                    };

                function dt(s) {
                    return String.fromCharCode.apply(null, s);
                }

                function Vr(s, a) {
                    var t = s[a] << 8 | s[a + 1];
                    return t < 0 ? 65536 + t : t;
                }

                function G(s, a) {
                    var t = jr(s, a);
                    return t < 0 ? 4294967296 + t : t;
                }

                function Kr(s, a) {
                    var t = G(s, a);
                    return (t *= Math.pow(2, 32)) + G(s, a + 4);
                }

                function jr(s, a) {
                    return s[a] << 24 | s[a + 1] << 16 | s[a + 2] << 8 | s[a + 3];
                }

                function Ye(s, a, t) {
                    s[a] = t >> 24, s[a + 1] = t >> 16 & 255, s[a + 2] = t >> 8 & 255, s[a + 3] = 255 & t;
                }

                function K(s, a) {
                    var t = [];
                    if (!a.length) return t;
                    for (var e = s.byteLength, r = 0; r < e;) {
                        var i = G(s, r),
                            n = i > 1 ? r + i : e;
                        if (dt(s.subarray(r + 4, r + 8)) === a[0]) if (1 === a.length) t.push(s.subarray(r + 8, n)); else {
                            var o = K(s.subarray(r + 8, n), a.slice(1));
                            o.length && wa.apply(t, o);
                        }
                        r = n;
                    }
                    return t;
                }

                function xa(s) {
                    var a = [],
                        t = s[0],
                        e = 8,
                        r = G(s, e);
                    e += 4;
                    var i = 0,
                        n = 0;
                    0 === t ? (i = G(s, e), n = G(s, e + 4), e += 8) : (i = Kr(s, e), n = Kr(s, e + 8), e += 16);
                    var o = s.length + n,
                        l = Vr(s, e += 2);
                    e += 2;
                    for (var d = 0; d < l; d++) {
                        var u = e,
                            h = G(s, u);
                        u += 4;
                        var f = 2147483647 & h;
                        if ((2147483648 & h) >>> 31 == 1) return A.warn("SIDX has hierarchical references (not supported)"), null;
                        var c = G(s, u);
                        u += 4, a.push({
                            referenceSize: f,
                            subsegmentDuration: c,
                            info: {
                                duration: c / r,
                                start: o,
                                end: o + f - 1
                            }
                        }), o += f, e = u += 4;
                    }
                    return {
                        earliestPresentationTime: i,
                        timescale: r,
                        version: t,
                        referencesCount: l,
                        references: a
                    };
                }

                function Wr(s) {
                    for (var a = [], t = K(s, ["moov", "trak"]), e = 0; e < t.length; e++) {
                        var r = t[e],
                            i = K(r, ["tkhd"])[0];
                        if (i) {
                            var n = i[0],
                                o = G(i, 0 === n ? 12 : 20),
                                l = K(r, ["mdia", "mdhd"])[0];
                            if (l) {
                                var d = G(l, 0 === (n = l[0]) ? 12 : 20),
                                    u = K(r, ["mdia", "hdlr"])[0];
                                if (u) {
                                    var h = dt(u.subarray(8, 12)),
                                        f = {
                                            soun: Tt,
                                            vide: bt
                                        }[h];
                                    if (f) {
                                        var c = Ca(K(r, ["mdia", "minf", "stbl", "stsd"])[0]);
                                        a[o] = {
                                            timescale: d,
                                            type: f
                                        }, a[f] = yt({
                                            timescale: d,
                                            id: o
                                        }, c);
                                    }
                                }
                            }
                        }
                    }
                    return K(s, ["moov", "mvex", "trex"]).forEach(function (m) {
                        var g = G(m, 4),
                            y = a[g];
                        y && (y.default = {
                            duration: G(m, 12),
                            flags: G(m, 20)
                        });
                    }), a;
                }

                function Ca(s) {
                    var a = s.subarray(8),
                        t = a.subarray(86),
                        e = dt(a.subarray(4, 8)),
                        r = e,
                        i = "enca" === e || "encv" === e;
                    if (i) {
                        var n = K(a, [e])[0];
                        K(n.subarray("enca" === e ? 28 : 78), ["sinf"]).forEach(function (Z) {
                            var j = K(Z, ["schm"])[0];
                            if (j) {
                                var q = dt(j.subarray(4, 8));
                                if ("cbcs" === q || "cenc" === q) {
                                    var J = K(Z, ["frma"])[0];
                                    J && (r = dt(J));
                                }
                            }
                        });
                    }
                    switch (r) {
                        case "avc1":
                        case "avc2":
                        case "avc3":
                        case "avc4":
                            var o = K(t, ["avcC"])[0];
                            r += "." + Se(o[1]) + Se(o[2]) + Se(o[3]);
                            break;
                        case "mp4a":
                            var l = K(a, [e])[0],
                                d = K(l.subarray(28), ["esds"])[0];
                            if (d && d.length > 12) {
                                var u = 4;
                                if (3 !== d[u++]) break;
                                u = qe(d, u), u += 2;
                                var h = d[u++];
                                if (128 & h && (u += 2), 64 & h && (u += d[u++]), 4 !== d[u++]) break;
                                u = qe(d, u);
                                var f = d[u++];
                                if (64 !== f || (r += "." + Se(f), u += 12, 5 !== d[u++])) break;
                                u = qe(d, u);
                                var c = d[u++],
                                    m = (248 & c) >> 3;
                                31 === m && (m += 1 + ((7 & c) << 3) + ((224 & d[u]) >> 5)), r += "." + m;
                            }
                            break;
                        case "hvc1":
                        case "hev1":
                            var g = K(t, ["hvcC"])[0],
                                y = g[1],
                                v = ["", "A", "B", "C"][y >> 6],
                                p = 31 & y,
                                S = G(g, 2),
                                T = (32 & y) >> 5 ? "H" : "L",
                                R = g[12],
                                b = g.subarray(6, 12);
                            r += "." + v + p, r += "." + S.toString(16).toUpperCase(), r += "." + T + R;
                            for (var L = "", k = b.length; k--;) {
                                var x = b[k];
                                (x || L) && (L = "." + x.toString(16).toUpperCase() + L);
                            }
                            r += L;
                            break;
                        case "dvh1":
                        case "dvhe":
                            var w = K(t, ["dvcC"])[0],
                                C = w[2] << 5 & 32 | w[3] >> 3 & 31;
                            r += "." + Dt(w[2] >> 1 & 127) + "." + Dt(C);
                            break;
                        case "vp09":
                            var F = K(t, ["vpcC"])[0],
                                M = F[5],
                                B = F[6] >> 4 & 15;
                            r += "." + Dt(F[4]) + "." + Dt(M) + "." + Dt(B);
                            break;
                        case "av01":
                            var I = K(t, ["av1C"])[0],
                                O = I[1] >>> 5,
                                H = I[2] >>> 7 ? "H" : "M",
                                V = (64 & I[2]) >> 6,
                                nt = 2 === O && V ? (32 & I[2]) >> 5 ? 12 : 10 : V ? 10 : 8,
                                rt = (16 & I[2]) >> 4,
                                tt = (8 & I[2]) >> 3,
                                et = (4 & I[2]) >> 2,
                                z = 3 & I[2];
                            r += "." + O + "." + Dt(31 & I[1]) + H + "." + Dt(nt) + "." + rt + "." + tt + et + z + "." + Dt(1) + "." + Dt(1) + "." + Dt(1) + ".0";
                    }
                    return {
                        codec: r,
                        encrypted: i
                    };
                }

                function qe(s, a) {
                    for (var t = a + 5; 128 & s[a++] && a < t;) ;
                    return a;
                }

                function Se(s) {
                    return ("0" + s.toString(16).toUpperCase()).slice(-2);
                }

                function Dt(s) {
                    return (s < 10 ? "0" : "") + s;
                }

                function Pa(s) {
                    var a = G(s, 0),
                        t = 8;
                    1 & a && (t += 4), 4 & a && (t += 4);
                    for (var e = 0, r = G(s, 4), i = 0; i < r; i++) 256 & a && (e += G(s, t), t += 4), 512 & a && (t += 4), 1024 & a && (t += 4), 2048 & a && (t += 4);
                    return e;
                }

                function St(s, a) {
                    var t = new Uint8Array(s.length + a.length);
                    return t.set(s), t.set(a, s.length), t;
                }

                function Yr(s, a) {
                    var t = [],
                        e = a.samples,
                        r = a.timescale,
                        i = a.id,
                        n = !1;
                    return K(e, ["moof"]).map(function (o) {
                        var l = o.byteOffset - 8;
                        K(o, ["traf"]).map(function (d) {
                            var u = K(d, ["tfdt"]).map(function (h) {
                                var f = h[0],
                                    c = G(h, 4);
                                return 1 === f && (c *= Math.pow(2, 32), c += G(h, 8)), c / r;
                            })[0];
                            return void 0 !== u && (s = u), K(d, ["tfhd"]).map(function (h) {
                                var f = G(h, 4),
                                    c = 16777215 & G(h, 0),
                                    m = 0,
                                    g = !!(16 & c),
                                    y = 0,
                                    v = !!(32 & c),
                                    p = 8;
                                f === i && (1 & c && (p += 8), 2 & c && (p += 4), 8 & c && (m = G(h, p), p += 4), g && (y = G(h, p), p += 4), v && (p += 4), "video" === a.type && (n = function (S) {
                                    if (!S) return !1;
                                    var T = S.indexOf("."),
                                        R = T < 0 ? S : S.substring(0, T);
                                    return "hvc1" === R || "hev1" === R || "dvh1" === R || "dvhe" === R;
                                }(a.codec)), K(d, ["trun"]).map(function (S) {
                                    var T = S[0],
                                        R = 16777215 & G(S, 0),
                                        b = !!(1 & R),
                                        L = 0,
                                        k = !!(4 & R),
                                        x = !!(256 & R),
                                        w = 0,
                                        D = !!(512 & R),
                                        C = 0,
                                        F = !!(1024 & R),
                                        P = !!(2048 & R),
                                        M = 0,
                                        B = G(S, 4),
                                        I = 8;
                                    b && (L = G(S, I), I += 4), k && (I += 4);
                                    for (var O = L + l, U = 0; U < B; U++) {
                                        if (x ? (w = G(S, I), I += 4) : w = m, D ? (C = G(S, I), I += 4) : C = y, F && (I += 4), P && (M = 0 === T ? G(S, I) : jr(S, I), I += 4), a.type === bt) for (var H = 0; H < C;) {
                                            var V = G(e, O);
                                            Fa(n, e[O += 4]) && qr(e.subarray(O, O + V), n ? 2 : 1, s + M / r, t), O += V, H += V + 4;
                                        }
                                        s += w / r;
                                    }
                                }));
                            });
                        });
                    }), t;
                }

                function Fa(s, a) {
                    if (s) {
                        var t = a >> 1 & 63;
                        return 39 === t || 40 === t;
                    }
                    return 6 == (31 & a);
                }

                function qr(s, a, t, e) {
                    var r = zr(s),
                        i = 0;
                    i += a;
                    for (var n = 0, o = 0, l = 0; i < r.length;) {
                        n = 0;
                        do {
                            if (i >= r.length) break;
                            n += l = r[i++];
                        } while (255 === l);
                        o = 0;
                        do {
                            if (i >= r.length) break;
                            o += l = r[i++];
                        } while (255 === l);
                        var d = r.length - i,
                            u = i;
                        if (o < d) i += o; else if (o > d) {
                            A.error("Malformed SEI payload. " + o + " is too small, only " + d + " bytes left to parse.");
                            break;
                        }
                        if (4 === n) {
                            if (181 === r[u++]) {
                                var h = Vr(r, u);
                                if (u += 2, 49 === h) {
                                    var f = G(r, u);
                                    if (u += 4, 1195456820 === f) {
                                        var c = r[u++];
                                        if (3 === c) {
                                            var m = r[u++],
                                                g = 64 & m,
                                                y = g ? 2 + 3 * (31 & m) : 0,
                                                v = new Uint8Array(y);
                                            if (g) {
                                                v[0] = m;
                                                for (var p = 1; p < y; p++) v[p] = r[u++];
                                            }
                                            e.push({
                                                type: c,
                                                payloadType: n,
                                                pts: t,
                                                bytes: v
                                            });
                                        }
                                    }
                                }
                            }
                        } else if (5 === n && o > 16) {
                            for (var S = [], T = 0; T < 16; T++) {
                                var R = r[u++].toString(16);
                                S.push(1 == R.length ? "0" + R : R), 3 !== T && 5 !== T && 7 !== T && 9 !== T || S.push("-");
                            }
                            for (var b = o - 16, L = new Uint8Array(b), k = 0; k < b; k++) L[k] = r[u++];
                            e.push({
                                payloadType: n,
                                pts: t,
                                uuid: S.join(""),
                                userData: Bt(L),
                                userDataBytes: L
                            });
                        }
                    }
                }

                function zr(s) {
                    for (var a = s.byteLength, t = [], e = 1; e < a - 2;) 0 === s[e] && 0 === s[e + 1] && 3 === s[e + 2] ? (t.push(e + 2), e += 2) : e++;
                    if (0 === t.length) return s;
                    var r = a - t.length,
                        i = new Uint8Array(r),
                        n = 0;
                    for (e = 0; e < r; n++, e++) n === t[0] && (n++, t.shift()), i[e] = s[n];
                    return i;
                }

                var Oa = function () {
                    function s(t, e, r, i, n) {
                        void 0 === i && (i = [1]), void 0 === n && (n = null), this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = t, this.uri = e, this.keyFormat = r, this.keyFormatVersions = i, this.iv = n, this.encrypted = !!t && "NONE" !== t, this.isCommonEncryption = this.encrypted && "AES-128" !== t;
                    }

                    s.clearKeyUriToKeyIdMap = function () {
                    };
                    var a = s.prototype;
                    return a.isSupported = function () {
                        if (this.method) {
                            if ("AES-128" === this.method || "NONE" === this.method) return !0;
                            if ("identity" === this.keyFormat) return "SAMPLE-AES" === this.method;
                        }
                        return !1;
                    }, a.getDecryptData = function (t) {
                        if (!this.encrypted || !this.uri) return null;
                        if ("AES-128" === this.method && this.uri && !this.iv) {
                            "number" != typeof t && ("AES-128" !== this.method || this.iv || A.warn('missing IV for initialization segment with method="' + this.method + '" - compliance issue'), t = 0);
                            var e = function (r) {
                                for (var i = new Uint8Array(16), n = 12; n < 16; n++) i[n] = r >> 8 * (15 - n) & 255;
                                return i;
                            }(t);
                            return new s(this.method, this.uri, "identity", this.keyFormatVersions, e);
                        }
                        return this;
                    }, s;
                }();

                function Vt(s) {
                    if (void 0 === s && (s = !0), (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u") return (s || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
                }

                var Le = {
                    audio: {
                        a3ds: 1,
                        "ac-3": .95,
                        "ac-4": 1,
                        alac: .9,
                        alaw: 1,
                        dra1: 1,
                        "dts+": 1,
                        "dts-": 1,
                        dtsc: 1,
                        dtse: 1,
                        dtsh: 1,
                        "ec-3": .9,
                        enca: 1,
                        fLaC: .9,
                        flac: .9,
                        FLAC: .9,
                        g719: 1,
                        g726: 1,
                        m4ae: 1,
                        mha1: 1,
                        mha2: 1,
                        mhm1: 1,
                        mhm2: 1,
                        mlpa: 1,
                        mp4a: 1,
                        "raw ": 1,
                        Opus: 1,
                        opus: 1,
                        samr: 1,
                        sawb: 1,
                        sawp: 1,
                        sevc: 1,
                        sqcp: 1,
                        ssmv: 1,
                        twos: 1,
                        ulaw: 1
                    },
                    video: {
                        avc1: 1,
                        avc2: 1,
                        avc3: 1,
                        avc4: 1,
                        avcp: 1,
                        av01: .8,
                        drac: 1,
                        dva1: 1,
                        dvav: 1,
                        dvh1: .7,
                        dvhe: .7,
                        encv: 1,
                        hev1: .75,
                        hvc1: .75,
                        mjp2: 1,
                        mp4v: 1,
                        mvc1: 1,
                        mvc2: 1,
                        mvc3: 1,
                        mvc4: 1,
                        resv: 1,
                        rv60: 1,
                        s263: 1,
                        svc1: 1,
                        svc2: 1,
                        "vc-1": 1,
                        vp08: 1,
                        vp09: .9
                    },
                    text: {
                        stpp: 1,
                        wvtt: 1
                    }
                };

                function ze(s, a, t) {
                    return void 0 === t && (t = !0), !s.split(",").some(function (e) {
                        return !Xr(e, a, t);
                    });
                }

                function Xr(s, a, t) {
                    var e;
                    void 0 === t && (t = !0);
                    var r = Vt(t);
                    return null != (e = r === null || r === void 0 ? void 0 : r.isTypeSupported(Xe(s, a))) && e;
                }

                function Xe(s, a) {
                    return a + '/mp4;codecs="' + s + '"';
                }

                function Qr(s) {
                    if (s) {
                        var a = s.substring(0, 4);
                        return Le.video[a];
                    }
                    return 2;
                }

                function Re(s) {
                    return s.split(",").reduce(function (a, t) {
                        var e = Le.video[t];
                        return e ? (2 * e + a) / (a ? 3 : 2) : (Le.audio[t] + a) / (a ? 2 : 1);
                    }, 0);
                }

                var Qe = {},
                    Ma = /flac|opus/i;

                function Ae(s, a) {
                    return void 0 === a && (a = !0), s.replace(Ma, function (t) {
                        return function (e, r) {
                            if (void 0 === r && (r = !0), Qe[e]) return Qe[e];
                            for (var i = {
                                flac: ["flac", "fLaC", "FLAC"],
                                opus: ["opus", "Opus"]
                            }[e], n = 0; n < i.length; n++) if (Xr(i[n], "audio", r)) return Qe[e] = i[n], i[n];
                            return e;
                        }(t.toLowerCase(), a);
                    });
                }

                function Zr(s, a) {
                    return s && "mp4a" !== s ? s : a && a.split(",")[0];
                }

                var Jr = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,
                    $r = /#EXT-X-MEDIA:(.*)/g,
                    Na = /^#EXT(?:INF|-X-TARGETDURATION):/m,
                    ti = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[^\r\n]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
                    Ba = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
                    ie = function () {
                        function s() {
                        }

                        return s.findGroup = function (a, t) {
                            for (var e = 0; e < a.length; e++) {
                                var r = a[e];
                                if (r.id === t) return r;
                            }
                        }, s.resolve = function (a, t) {
                            return Ge.buildAbsoluteURL(t, a, {
                                alwaysNormalize: !0
                            });
                        }, s.isMediaPlaylist = function (a) {
                            return Na.test(a);
                        }, s.parseMasterPlaylist = function (a, t) {
                            var e,
                                r = {
                                    contentSteering: null,
                                    levels: [],
                                    playlistParsingError: null,
                                    sessionData: null,
                                    sessionKeys: null,
                                    startTimeOffset: null,
                                    variableList: null,
                                    hasVariableRefs: !1
                                },
                                i = [];
                            for (Jr.lastIndex = 0; null != (e = Jr.exec(a));) if (e[1]) {
                                var n,
                                    o = new lt(e[1]),
                                    l = e[2],
                                    d = {
                                        attrs: o,
                                        bitrate: o.decimalInteger("BANDWIDTH") || o.decimalInteger("AVERAGE-BANDWIDTH"),
                                        name: o.NAME,
                                        url: s.resolve(l, t)
                                    },
                                    u = o.decimalResolution("RESOLUTION");
                                u && (d.width = u.width, d.height = u.height), Ua(o.CODECS, d), null != (n = d.unknownCodecs) && n.length || i.push(d), r.levels.push(d);
                            } else if (e[3]) {
                                var f = e[4];
                                switch (e[3]) {
                                    case "SESSION-DATA":
                                        var c = new lt(f),
                                            m = c["DATA-ID"];
                                        m && (null === r.sessionData && (r.sessionData = {}), r.sessionData[m] = c);
                                        break;
                                    case "SESSION-KEY":
                                        var g = ei(f, t);
                                        g.encrypted && g.isSupported() ? (null === r.sessionKeys && (r.sessionKeys = []), r.sessionKeys.push(g)) : A.warn('[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "' + f + '"');
                                        break;
                                    case "DEFINE":
                                        break;
                                    case "CONTENT-STEERING":
                                        var y = new lt(f);
                                        r.contentSteering = {
                                            uri: s.resolve(y["SERVER-URI"], t),
                                            pathwayId: y["PATHWAY-ID"] || "."
                                        };
                                        break;
                                    case "START":
                                        r.startTimeOffset = ri(f);
                                }
                            }
                            return r.levels = i.length > 0 && i.length < r.levels.length ? i : r.levels, 0 === r.levels.length && (r.playlistParsingError = new Error("no levels found in manifest")), r;
                        }, s.parseMasterPlaylistMedia = function (a, t, e) {
                            var r,
                                i = {},
                                n = e.levels,
                                o = {
                                    AUDIO: n.map(function (T) {
                                        return {
                                            id: T.attrs.AUDIO,
                                            audioCodec: T.audioCodec
                                        };
                                    }),
                                    SUBTITLES: n.map(function (T) {
                                        return {
                                            id: T.attrs.SUBTITLES,
                                            textCodec: T.textCodec
                                        };
                                    }),
                                    "CLOSED-CAPTIONS": []
                                },
                                l = 0;
                            for ($r.lastIndex = 0; null !== (r = $r.exec(a));) {
                                var d = new lt(r[1]),
                                    u = d.TYPE;
                                if (u) {
                                    var h = o[u],
                                        f = i[u] || [];
                                    i[u] = f;
                                    var c = d.LANGUAGE,
                                        m = d["ASSOC-LANGUAGE"],
                                        g = d.CHANNELS,
                                        y = d.CHARACTERISTICS,
                                        v = d["INSTREAM-ID"],
                                        p = {
                                            attrs: d,
                                            bitrate: 0,
                                            id: l++,
                                            groupId: d["GROUP-ID"] || "",
                                            name: d.NAME || c || "",
                                            type: u,
                                            default: d.bool("DEFAULT"),
                                            autoselect: d.bool("AUTOSELECT"),
                                            forced: d.bool("FORCED"),
                                            lang: c,
                                            url: d.URI ? s.resolve(d.URI, t) : ""
                                        };
                                    if (m && (p.assocLang = m), g && (p.channels = g), y && (p.characteristics = y), v && (p.instreamId = v), null != h && h.length) {
                                        var S = s.findGroup(h, p.groupId) || h[0];
                                        ii(p, S, "audioCodec"), ii(p, S, "textCodec");
                                    }
                                    f.push(p);
                                }
                            }
                            return i;
                        }, s.parseLevelPlaylist = function (a, t, e, r, i, n) {
                            var o,
                                l,
                                d,
                                u = new Ea(t),
                                h = u.fragments,
                                f = null,
                                c = 0,
                                m = 0,
                                g = 0,
                                y = 0,
                                v = null,
                                p = new Ke(r, t),
                                S = -1,
                                T = !1,
                                R = null;
                            for (ti.lastIndex = 0, u.m3u8 = a, u.hasVariableRefs = !1; null !== (o = ti.exec(a));) {
                                T && (T = !1, (p = new Ke(r, t)).start = g, p.sn = c, p.cc = y, p.level = e, f && (p.initSegment = f, p.rawProgramDateTime = f.rawProgramDateTime, f.rawProgramDateTime = null, R && (p.setByteRange(R), R = null)));
                                var b = o[1];
                                if (b) {
                                    p.duration = parseFloat(b);
                                    var L = (" " + o[2]).slice(1);
                                    p.title = L || null, p.tagList.push(L ? ["INF", b, L] : ["INF", b]);
                                } else if (o[3]) {
                                    if (N(p.duration)) {
                                        p.start = g, d && si(p, d, u), p.sn = c, p.level = e, p.cc = y, h.push(p);
                                        var k = (" " + o[3]).slice(1);
                                        p.relurl = k, ai(p, v), v = p, g += p.duration, c++, m = 0, T = !0;
                                    }
                                } else if (o[4]) {
                                    var x = (" " + o[4]).slice(1);
                                    v ? p.setByteRange(x, v) : p.setByteRange(x);
                                } else if (o[5]) p.rawProgramDateTime = (" " + o[5]).slice(1), p.tagList.push(["PROGRAM-DATE-TIME", p.rawProgramDateTime]), -1 === S && (S = h.length); else {
                                    if (!(o = o[0].match(Ba))) {
                                        A.warn("No matches on slow regex match for level playlist!");
                                        continue;
                                    }
                                    for (l = 1; l < o.length && void 0 === o[l]; l++) ;
                                    var w = (" " + o[l]).slice(1),
                                        D = (" " + o[l + 1]).slice(1),
                                        C = o[l + 2] ? (" " + o[l + 2]).slice(1) : "";
                                    switch (w) {
                                        case "PLAYLIST-TYPE":
                                            u.type = D.toUpperCase();
                                            break;
                                        case "MEDIA-SEQUENCE":
                                            c = u.startSN = parseInt(D);
                                            break;
                                        case "SKIP":
                                            var F = new lt(D),
                                                P = F.decimalInteger("SKIPPED-SEGMENTS");
                                            if (N(P)) {
                                                u.skippedSegments = P;
                                                for (var M = P; M--;) h.unshift(null);
                                                c += P;
                                            }
                                            var B = F.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                                            B && (u.recentlyRemovedDateranges = B.split("\t"));
                                            break;
                                        case "TARGETDURATION":
                                            u.targetduration = Math.max(parseInt(D), 1);
                                            break;
                                        case "VERSION":
                                            u.version = parseInt(D);
                                            break;
                                        case "INDEPENDENT-SEGMENTS":
                                        case "EXTM3U":
                                        case "DEFINE":
                                            break;
                                        case "ENDLIST":
                                            u.live = !1;
                                            break;
                                        case "#":
                                            (D || C) && p.tagList.push(C ? [D, C] : [D]);
                                            break;
                                        case "DISCONTINUITY":
                                            y++, p.tagList.push(["DIS"]);
                                            break;
                                        case "GAP":
                                            p.gap = !0, p.tagList.push([w]);
                                            break;
                                        case "BITRATE":
                                            p.tagList.push([w, D]);
                                            break;
                                        case "DATERANGE":
                                            var I = new lt(D),
                                                O = new Fr(I, u.dateRanges[I.ID]);
                                            O.isValid || u.skippedSegments ? u.dateRanges[O.id] = O : A.warn('Ignoring invalid DATERANGE tag: "' + D + '"'), p.tagList.push(["EXT-X-DATERANGE", D]);
                                            break;
                                        case "DISCONTINUITY-SEQUENCE":
                                            y = parseInt(D);
                                            break;
                                        case "KEY":
                                            var U = ei(D, t);
                                            if (U.isSupported()) {
                                                if ("NONE" === U.method) {
                                                    d = void 0;
                                                    break;
                                                }
                                                d || (d = {}), d[U.keyFormat] && (d = gt({}, d)), d[U.keyFormat] = U;
                                            } else A.warn('[Keys] Ignoring invalid EXT-X-KEY tag: "' + D + '"');
                                            break;
                                        case "START":
                                            u.startTimeOffset = ri(D);
                                            break;
                                        case "MAP":
                                            var H = new lt(D);
                                            if (p.duration) {
                                                var V = new Ke(r, t);
                                                ni(V, H, e, d), p.initSegment = f = V, f.rawProgramDateTime && !p.rawProgramDateTime && (p.rawProgramDateTime = f.rawProgramDateTime);
                                            } else {
                                                var $ = p.byteRangeEndOffset;
                                                if ($) {
                                                    var nt = p.byteRangeStartOffset;
                                                    R = $ - nt + "@" + nt;
                                                } else R = null;
                                                ni(p, H, e, d), f = p, T = !0;
                                            }
                                            break;
                                        case "SERVER-CONTROL":
                                            var rt = new lt(D);
                                            u.canBlockReload = rt.bool("CAN-BLOCK-RELOAD"), u.canSkipUntil = rt.optionalFloat("CAN-SKIP-UNTIL", 0), u.canSkipDateRanges = u.canSkipUntil > 0 && rt.bool("CAN-SKIP-DATERANGES"), u.partHoldBack = rt.optionalFloat("PART-HOLD-BACK", 0), u.holdBack = rt.optionalFloat("HOLD-BACK", 0);
                                            break;
                                        case "PART-INF":
                                            var tt = new lt(D);
                                            u.partTarget = tt.decimalFloatingPoint("PART-TARGET");
                                            break;
                                        case "PART":
                                            var et = u.partList;
                                            et || (et = u.partList = []);
                                            var z = m > 0 ? et[et.length - 1] : void 0,
                                                Z = m++,
                                                j = new lt(D),
                                                q = new ya(j, p, t, Z, z);
                                            et.push(q), p.duration += q.duration;
                                            break;
                                        case "PRELOAD-HINT":
                                            var J = new lt(D);
                                            u.preloadHint = J;
                                            break;
                                        case "RENDITION-REPORT":
                                            var X = new lt(D);
                                            u.renditionReports = u.renditionReports || [], u.renditionReports.push(X);
                                            break;
                                        default:
                                            A.warn("line parsed but not handled: " + o);
                                    }
                                }
                            }
                            v && !v.relurl ? (h.pop(), g -= v.duration, u.partList && (u.fragmentHint = v)) : u.partList && (ai(p, v), p.cc = y, u.fragmentHint = p, d && si(p, d, u));
                            var W = h.length,
                                mt = h[0],
                                Mt = h[W - 1];
                            if ((g += u.skippedSegments * u.targetduration) > 0 && W && Mt) {
                                u.averagetargetduration = g / W;
                                var Nt = Mt.sn;
                                u.endSN = "initSegment" !== Nt ? Nt : 0, u.live || (Mt.endList = !0), mt && (u.startCC = mt.cc);
                            } else u.endSN = 0, u.startCC = 0;
                            return u.fragmentHint && (g += u.fragmentHint.duration), u.totalduration = g, u.endCC = y, S > 0 && function (Rt, pt) {
                                for (var Et = Rt[pt], _t = pt; _t--;) {
                                    var vt = Rt[_t];
                                    if (!vt) return;
                                    vt.programDateTime = Et.programDateTime - 1e3 * vt.duration, Et = vt;
                                }
                            }(h, S), u;
                        }, s;
                    }();

                function ei(s, a, t) {
                    var e,
                        r,
                        i = new lt(s),
                        n = null != (e = i.METHOD) ? e : "",
                        o = i.URI,
                        l = i.hexadecimalInteger("IV"),
                        d = i.KEYFORMATVERSIONS,
                        u = null != (r = i.KEYFORMAT) ? r : "identity";
                    o && i.IV && !l && A.error("Invalid IV: " + i.IV);
                    var h = o ? ie.resolve(o, a) : "",
                        f = (d || "1").split("/").map(Number).filter(Number.isFinite);
                    return new Oa(n, h, u, f, l);
                }

                function ri(s) {
                    var a = new lt(s).decimalFloatingPoint("TIME-OFFSET");
                    return N(a) ? a : null;
                }

                function Ua(s, a) {
                    var t = (s || "").split(/[ ,]+/).filter(function (e) {
                        return e;
                    });
                    ["video", "audio", "text"].forEach(function (e) {
                        var r = t.filter(function (i) {
                            return function (n, o) {
                                var l = Le[o];
                                return !!l && !!l[n.slice(0, 4)];
                            }(i, e);
                        });
                        r.length && (a[e + "Codec"] = r.join(","), t = t.filter(function (i) {
                            return -1 === r.indexOf(i);
                        }));
                    }), a.unknownCodecs = t;
                }

                function ii(s, a, t) {
                    var e = a[t];
                    e && (s[t] = e);
                }

                function ai(s, a) {
                    s.rawProgramDateTime ? s.programDateTime = Date.parse(s.rawProgramDateTime) : null != a && a.programDateTime && (s.programDateTime = a.endProgramDateTime), N(s.programDateTime) || (s.programDateTime = null, s.rawProgramDateTime = null);
                }

                function ni(s, a, t, e) {
                    s.relurl = a.URI, a.BYTERANGE && s.setByteRange(a.BYTERANGE), s.level = t, s.sn = "initSegment", e && (s.levelkeys = e), s.initSegment = null;
                }

                function si(s, a, t) {
                    s.levelkeys = a;
                    var e = t.encryptedFragments;
                    e.length && e[e.length - 1].levelkeys === a || !Object.keys(a).some(function (r) {
                        return a[r].isCommonEncryption;
                    }) || e.push(s);
                }

                var qt = "manifest",
                    Kt = "level",
                    wt = "audioTrack",
                    xt = "subtitleTrack",
                    at = "main",
                    ae = "audio",
                    Ze = "subtitle";

                function oi(s) {
                    switch (s.type) {
                        case wt:
                            return ae;
                        case xt:
                            return Ze;
                        default:
                            return at;
                    }
                }

                function Je(s, a) {
                    var t = s.url;
                    return void 0 !== t && 0 !== t.indexOf("data:") || (t = a.url), t;
                }

                var Ga = function () {
                    function s(t) {
                        this.hls = void 0, this.loaders = Object.create(null), this.variableList = null, this.hls = t, this.registerListeners();
                    }

                    var a = s.prototype;
                    return a.startLoad = function (t) {
                    }, a.stopLoad = function () {
                        this.destroyInternalLoaders();
                    }, a.registerListeners = function () {
                        var t = this.hls;
                        t.on(E.MANIFEST_LOADING, this.onManifestLoading, this), t.on(E.LEVEL_LOADING, this.onLevelLoading, this), t.on(E.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(E.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
                    }, a.unregisterListeners = function () {
                        var t = this.hls;
                        t.off(E.MANIFEST_LOADING, this.onManifestLoading, this), t.off(E.LEVEL_LOADING, this.onLevelLoading, this), t.off(E.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(E.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
                    }, a.createInternalLoader = function (t) {
                        var e = this.hls.config,
                            n = new (e.pLoader || e.loader)(e);
                        return this.loaders[t.type] = n, n;
                    }, a.getInternalLoader = function (t) {
                        return this.loaders[t.type];
                    }, a.resetInternalLoader = function (t) {
                        this.loaders[t] && delete this.loaders[t];
                    }, a.destroyInternalLoaders = function () {
                        for (var t in this.loaders) {
                            var e = this.loaders[t];
                            e && e.destroy(), this.resetInternalLoader(t);
                        }
                    }, a.destroy = function () {
                        this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
                    }, a.onManifestLoading = function (t, e) {
                        var r = e.url;
                        this.variableList = null, this.load({
                            id: null,
                            level: 0,
                            responseType: "text",
                            type: qt,
                            url: r,
                            deliveryDirectives: null
                        });
                    }, a.onLevelLoading = function (t, e) {
                        this.load({
                            id: e.id,
                            level: e.level,
                            pathwayId: e.pathwayId,
                            responseType: "text",
                            type: Kt,
                            url: e.url,
                            deliveryDirectives: e.deliveryDirectives
                        });
                    }, a.onAudioTrackLoading = function (t, e) {
                        this.load({
                            id: e.id,
                            groupId: e.groupId,
                            level: null,
                            responseType: "text",
                            type: wt,
                            url: e.url,
                            deliveryDirectives: e.deliveryDirectives
                        });
                    }, a.onSubtitleTrackLoading = function (t, e) {
                        this.load({
                            id: e.id,
                            groupId: e.groupId,
                            level: null,
                            responseType: "text",
                            type: xt,
                            url: e.url,
                            deliveryDirectives: e.deliveryDirectives
                        });
                    }, a.load = function (t) {
                        var e,
                            r,
                            i,
                            n = this,
                            o = this.hls.config,
                            l = this.getInternalLoader(t);
                        if (l) {
                            var d = l.context;
                            if (d && d.url === t.url && d.level === t.level) return void A.trace("[playlist-loader]: playlist request ongoing");
                            A.log("[playlist-loader]: aborting previous loader for type: " + t.type), l.abort();
                        }
                        if (r = t.type === qt ? o.manifestLoadPolicy.default : gt({}, o.playlistLoadPolicy.default, {
                            timeoutRetry: null,
                            errorRetry: null
                        }), l = this.createInternalLoader(t), N(null == (e = t.deliveryDirectives) ? void 0 : e.part) && (t.type === Kt && null !== t.level ? i = this.hls.levels[t.level].details : t.type === wt && null !== t.id ? i = this.hls.audioTracks[t.id].details : t.type === xt && null !== t.id && (i = this.hls.subtitleTracks[t.id].details), i)) {
                            var u = i.partTarget,
                                h = i.targetduration;
                            if (u && h) {
                                var f = 1e3 * Math.max(3 * u, .8 * h);
                                r = gt({}, r, {
                                    maxTimeToFirstByteMs: Math.min(f, r.maxTimeToFirstByteMs),
                                    maxLoadTimeMs: Math.min(f, r.maxTimeToFirstByteMs)
                                });
                            }
                        }
                        var c = r.errorRetry || r.timeoutRetry || {};
                        l.load(t, {
                            loadPolicy: r,
                            timeout: r.maxLoadTimeMs,
                            maxRetry: c.maxNumRetry || 0,
                            retryDelay: c.retryDelayMs || 0,
                            maxRetryDelay: c.maxRetryDelayMs || 0
                        }, {
                            onSuccess: function onSuccess(y, v, p, S) {
                                var T = n.getInternalLoader(p);
                                n.resetInternalLoader(p.type);
                                var R = y.data;
                                0 === R.indexOf("#EXTM3U") ? (v.parsing.start = performance.now(), ie.isMediaPlaylist(R) ? n.handleTrackOrLevelPlaylist(y, v, p, S || null, T) : n.handleMasterPlaylist(y, v, p, S)) : n.handleManifestParsingError(y, p, new Error("no EXTM3U delimiter"), S || null, v);
                            },
                            onError: function onError(y, v, p, S) {
                                n.handleNetworkError(v, p, !1, y, S);
                            },
                            onTimeout: function onTimeout(y, v, p) {
                                n.handleNetworkError(v, p, !0, void 0, y);
                            }
                        });
                    }, a.handleMasterPlaylist = function (t, e, r, i) {
                        var n = this.hls,
                            o = t.data,
                            l = Je(t, r),
                            d = ie.parseMasterPlaylist(o, l);
                        if (d.playlistParsingError) this.handleManifestParsingError(t, r, d.playlistParsingError, i, e); else {
                            var u = d.contentSteering,
                                h = d.levels,
                                f = d.sessionData,
                                c = d.sessionKeys,
                                m = d.startTimeOffset,
                                g = d.variableList;
                            this.variableList = g;
                            var y = ie.parseMasterPlaylistMedia(o, l, d),
                                v = y.AUDIO,
                                p = void 0 === v ? [] : v,
                                S = y.SUBTITLES,
                                T = y["CLOSED-CAPTIONS"];
                            p.length && (p.some(function (R) {
                                return !R.url;
                            }) || !h[0].audioCodec || h[0].attrs.AUDIO || (A.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), p.unshift({
                                type: "main",
                                name: "main",
                                groupId: "main",
                                default: !1,
                                autoselect: !1,
                                forced: !1,
                                id: -1,
                                attrs: new lt({}),
                                bitrate: 0,
                                url: ""
                            }))), n.trigger(E.MANIFEST_LOADED, {
                                levels: h,
                                audioTracks: p,
                                subtitles: S,
                                captions: T,
                                contentSteering: u,
                                url: l,
                                stats: e,
                                networkDetails: i,
                                sessionData: f,
                                sessionKeys: c,
                                startTimeOffset: m,
                                variableList: g
                            });
                        }
                    }, a.handleTrackOrLevelPlaylist = function (t, e, r, i, n) {
                        var o = this.hls,
                            l = r.id,
                            d = r.level,
                            u = r.type,
                            h = Je(t, r),
                            f = N(d) ? d : N(l) ? l : 0,
                            c = oi(r),
                            m = ie.parseLevelPlaylist(t.data, h, f, c, 0, this.variableList);
                        if (u === qt) {
                            var g = {
                                attrs: new lt({}),
                                bitrate: 0,
                                details: m,
                                name: "",
                                url: h
                            };
                            o.trigger(E.MANIFEST_LOADED, {
                                levels: [g],
                                audioTracks: [],
                                url: h,
                                stats: e,
                                networkDetails: i,
                                sessionData: null,
                                sessionKeys: null,
                                contentSteering: null,
                                startTimeOffset: null,
                                variableList: null
                            });
                        }
                        e.parsing.end = performance.now(), r.levelDetails = m, this.handlePlaylistLoaded(m, t, e, r, i, n);
                    }, a.handleManifestParsingError = function (t, e, r, i, n) {
                        this.hls.trigger(E.ERROR, {
                            type: Y.NETWORK_ERROR,
                            details: _.MANIFEST_PARSING_ERROR,
                            fatal: e.type === qt,
                            url: t.url,
                            err: r,
                            error: r,
                            reason: r.message,
                            response: t,
                            context: e,
                            networkDetails: i,
                            stats: n
                        });
                    }, a.handleNetworkError = function (t, e, r, i, n) {
                        void 0 === r && (r = !1);
                        var o = "A network " + (r ? "timeout" : "error" + (i ? " (status " + i.code + ")" : "")) + " occurred while loading " + t.type;
                        t.type === Kt ? o += ": " + t.level + " id: " + t.id : t.type !== wt && t.type !== xt || (o += " id: " + t.id + ' group-id: "' + t.groupId + '"');
                        var l = new Error(o);
                        A.warn("[playlist-loader]: " + o);
                        var d = _.UNKNOWN,
                            u = !1,
                            h = this.getInternalLoader(t);
                        switch (t.type) {
                            case qt:
                                d = r ? _.MANIFEST_LOAD_TIMEOUT : _.MANIFEST_LOAD_ERROR, u = !0;
                                break;
                            case Kt:
                                d = r ? _.LEVEL_LOAD_TIMEOUT : _.LEVEL_LOAD_ERROR, u = !1;
                                break;
                            case wt:
                                d = r ? _.AUDIO_TRACK_LOAD_TIMEOUT : _.AUDIO_TRACK_LOAD_ERROR, u = !1;
                                break;
                            case xt:
                                d = r ? _.SUBTITLE_TRACK_LOAD_TIMEOUT : _.SUBTITLE_LOAD_ERROR, u = !1;
                        }
                        h && this.resetInternalLoader(t.type);
                        var f = {
                            type: Y.NETWORK_ERROR,
                            details: d,
                            fatal: u,
                            url: t.url,
                            loader: h,
                            context: t,
                            error: l,
                            networkDetails: e,
                            stats: n
                        };
                        i && (f.response = yt({
                            url: (e === null || e === void 0 ? void 0 : e.url) || t.url,
                            data: void 0
                        }, i)), this.hls.trigger(E.ERROR, f);
                    }, a.handlePlaylistLoaded = function (t, e, r, i, n, o) {
                        var l = this.hls,
                            d = i.type,
                            u = i.level,
                            h = i.id,
                            f = i.groupId,
                            c = i.deliveryDirectives,
                            m = Je(e, i),
                            g = oi(i),
                            y = "number" == typeof i.level && g === at ? u : void 0;
                        if (t.fragments.length) {
                            t.targetduration || (t.playlistParsingError = new Error("Missing Target Duration"));
                            var v = t.playlistParsingError;
                            if (v) l.trigger(E.ERROR, {
                                type: Y.NETWORK_ERROR,
                                details: _.LEVEL_PARSING_ERROR,
                                fatal: !1,
                                url: m,
                                error: v,
                                reason: v.message,
                                response: e,
                                context: i,
                                level: y,
                                parent: g,
                                networkDetails: n,
                                stats: r
                            }); else switch (t.live && o && (o.getCacheAge && (t.ageHeader = o.getCacheAge() || 0), o.getCacheAge && !isNaN(t.ageHeader) || (t.ageHeader = 0)), d) {
                                case qt:
                                case Kt:
                                    l.trigger(E.LEVEL_LOADED, {
                                        details: t,
                                        level: y || 0,
                                        id: h || 0,
                                        stats: r,
                                        networkDetails: n,
                                        deliveryDirectives: c
                                    });
                                    break;
                                case wt:
                                    l.trigger(E.AUDIO_TRACK_LOADED, {
                                        details: t,
                                        id: h || 0,
                                        groupId: f || "",
                                        stats: r,
                                        networkDetails: n,
                                        deliveryDirectives: c
                                    });
                                    break;
                                case xt:
                                    l.trigger(E.SUBTITLE_TRACK_LOADED, {
                                        details: t,
                                        id: h || 0,
                                        groupId: f || "",
                                        stats: r,
                                        networkDetails: n,
                                        deliveryDirectives: c
                                    });
                            }
                        } else {
                            var p = new Error("No Segments found in Playlist");
                            l.trigger(E.ERROR, {
                                type: Y.NETWORK_ERROR,
                                details: _.LEVEL_EMPTY_ERROR,
                                fatal: !1,
                                url: m,
                                error: p,
                                reason: p.message,
                                response: e,
                                context: i,
                                level: y,
                                parent: g,
                                networkDetails: n,
                                stats: r
                            });
                        }
                    }, s;
                }();

                function Ha(s, a) {
                    var t;
                    try {
                        t = new Event("addtrack");
                    } catch (_unused4) {
                        (t = document.createEvent("Event")).initEvent("addtrack", !1, !1);
                    }
                    t.track = s, a.dispatchEvent(t);
                }

                var ne = "org.id3",
                    se = "https://aomedia.org/emsg/ID3";

                function $e() {
                    if ((typeof self === "undefined" ? "undefined" : _typeof(self)) < "u") return self.VTTCue || self.TextTrackCue;
                }

                function li(s, a, t, e, r) {
                    var i = new s(a, t, "");
                    try {
                        i.value = e, r && (i.type = r);
                    } catch (_unused5) {
                        i = new s(a, t, JSON.stringify(r ? yt({
                            type: r
                        }, e) : e));
                    }
                    return i;
                }

                var be = function () {
                    var s = $e();
                    try {
                        s && new s(0, Number.POSITIVE_INFINITY, "");
                    } catch (_unused6) {
                        return Number.MAX_VALUE;
                    }
                    return Number.POSITIVE_INFINITY;
                }();

                function tr(s, a) {
                    return s.getTime() / 1e3 - a;
                }

                var ja = function () {
                        function s(t) {
                            this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = t, this._registerListeners();
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                            this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null;
                        }, a._registerListeners = function () {
                            var t = this.hls;
                            t.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(E.MANIFEST_LOADING, this.onManifestLoading, this), t.on(E.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.on(E.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(E.LEVEL_UPDATED, this.onLevelUpdated, this);
                        }, a._unregisterListeners = function () {
                            var t = this.hls;
                            t.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(E.MANIFEST_LOADING, this.onManifestLoading, this), t.off(E.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.off(E.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(E.LEVEL_UPDATED, this.onLevelUpdated, this);
                        }, a.onMediaAttached = function (t, e) {
                            this.media = e.media;
                        }, a.onMediaDetaching = function () {
                            this.id3Track && (function (t) {
                                var e = t.mode;
                                if ("disabled" === e && (t.mode = "hidden"), t.cues) for (var r = t.cues.length; r--;) t.removeCue(t.cues[r]);
                                "disabled" === e && (t.mode = e);
                            }(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {});
                        }, a.onManifestLoading = function () {
                            this.dateRangeCuesAppended = {};
                        }, a.createTrack = function (t) {
                            var e = this.getID3Track(t.textTracks);
                            return e.mode = "hidden", e;
                        }, a.getID3Track = function (t) {
                            if (this.media) {
                                for (var e = 0; e < t.length; e++) {
                                    var r = t[e];
                                    if ("metadata" === r.kind && "id3" === r.label) return Ha(r, this.media), r;
                                }
                                return this.media.addTextTrack("metadata", "id3");
                            }
                        }, a.onFragParsingMetadata = function (t, e) {
                            if (this.media) {
                                var r = this.hls.config,
                                    i = r.enableEmsgMetadataCues,
                                    n = r.enableID3MetadataCues;
                                if (i || n) {
                                    var o = e.samples;
                                    this.id3Track || (this.id3Track = this.createTrack(this.media));
                                    var l = $e();
                                    if (l) for (var d = 0; d < o.length; d++) {
                                        var u = o[d].type;
                                        if ((u !== se || i) && n) {
                                            var h = Ur(o[d].data);
                                            if (h) {
                                                var f = o[d].pts,
                                                    c = f + o[d].duration;
                                                c > be && (c = be), c - f <= 0 && (c = f + .25);
                                                for (var m = 0; m < h.length; m++) {
                                                    var g = h[m];
                                                    if (!Br(g)) {
                                                        this.updateId3CueEnds(f, u);
                                                        var y = li(l, f, c, g, u);
                                                        y && this.id3Track.addCue(y);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }, a.updateId3CueEnds = function (t, e) {
                            var r,
                                i = null == (r = this.id3Track) ? void 0 : r.cues;
                            if (i) for (var n = i.length; n--;) {
                                var o = i[n];
                                o.type === e && o.startTime < t && o.endTime === be && (o.endTime = t);
                            }
                        }, a.onBufferFlushing = function (t, e) {
                            var n = e.type,
                                o = this.id3Track,
                                l = this.hls;
                            if (l) {
                                var d = l.config,
                                    u = d.enableEmsgMetadataCues,
                                    h = d.enableID3MetadataCues;
                                o && (u || h) && function Va(s, a, t, e) {
                                    var r = s.mode;
                                    if ("disabled" === r && (s.mode = "hidden"), s.cues && s.cues.length > 0) for (var i = function (o, l, d) {
                                        var u = [],
                                            h = function (g, y) {
                                                if (y < g[0].startTime) return 0;
                                                var v = g.length - 1;
                                                if (y > g[v].endTime) return -1;
                                                for (var p = 0, S = v; p <= S;) {
                                                    var T = Math.floor((S + p) / 2);
                                                    if (y < g[T].startTime) S = T - 1; else {
                                                        if (!(y > g[T].startTime && p < v)) return T;
                                                        p = T + 1;
                                                    }
                                                }
                                                return g[p].startTime - y < y - g[S].startTime ? p : S;
                                            }(o, l);
                                        if (h > -1) for (var f = h, c = o.length; f < c; f++) {
                                            var m = o[f];
                                            if (m.startTime >= l && m.endTime <= d) u.push(m); else if (m.startTime > d) return u;
                                        }
                                        return u;
                                    }(s.cues, a, t), n = 0; n < i.length; n++) e && !e(i[n]) || s.removeCue(i[n]);
                                    "disabled" === r && (s.mode = r);
                                }(o, e.startOffset, e.endOffset, "audio" === n ? function (f) {
                                    return f.type === ne && h;
                                } : "video" === n ? function (f) {
                                    return f.type === se && u;
                                } : function (f) {
                                    return f.type === ne && h || f.type === se && u;
                                });
                            }
                        }, a.onLevelUpdated = function (t, e) {
                            var r = this,
                                i = e.details;
                            if (this.media && i.hasProgramDateTime && this.hls.config.enableDateRangeMetadataCues) {
                                var n = this.dateRangeCuesAppended,
                                    o = this.id3Track,
                                    l = i.dateRanges,
                                    d = Object.keys(l);
                                if (o) for (var u = Object.keys(n).filter(function (p) {
                                    return !d.includes(p);
                                }), h = function h() {
                                    var p = u[f];
                                    Object.keys(n[p].cues).forEach(function (S) {
                                        o.removeCue(n[p].cues[S]);
                                    }), delete n[p];
                                }, f = u.length; f--;) h();
                                var c = i.fragments[i.fragments.length - 1];
                                if (0 !== d.length && N(c === null || c === void 0 ? void 0 : c.programDateTime)) {
                                    this.id3Track || (this.id3Track = this.createTrack(this.media));
                                    for (var m = c.programDateTime / 1e3 - c.start, g = $e(), y = function y() {
                                        var p = d[v],
                                            S = l[p],
                                            T = tr(S.startDate, m),
                                            R = n[p],
                                            b = (R === null || R === void 0 ? void 0 : R.cues) || {},
                                            L = (R === null || R === void 0 ? void 0 : R.durationKnown) || !1,
                                            k = be,
                                            x = S.endDate;
                                        if (x) k = tr(x, m), L = !0; else if (S.endOnNext && !L) {
                                            var w = d.reduce(function (U, H) {
                                                if (H !== S.id) {
                                                    var V = l[H];
                                                    if (V.class === S.class && V.startDate > S.startDate && (!U || S.startDate < U.startDate)) return V;
                                                }
                                                return U;
                                            }, null);
                                            w && (k = tr(w.startDate, m), L = !0);
                                        }
                                        for (var C, F = Object.keys(S.attr), P = 0; P < F.length; P++) {
                                            var M = F[P];
                                            if ("ID" !== (C = M) && "CLASS" !== C && "START-DATE" !== C && "DURATION" !== C && "END-DATE" !== C && "END-ON-NEXT" !== C) {
                                                var B = b[M];
                                                if (B) L && !R.durationKnown && (B.endTime = k); else if (g) {
                                                    var I = S.attr[M];
                                                    pa(M) && (I = Uint8Array.from(I.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer);
                                                    var O = li(g, T, k, {
                                                        key: M,
                                                        data: I
                                                    }, "com.apple.quicktime.HLS");
                                                    O && (O.id = p, r.id3Track.addCue(O), b[M] = O);
                                                }
                                            }
                                        }
                                        n[p] = {
                                            cues: b,
                                            dateRange: S,
                                            durationKnown: L
                                        };
                                    }, v = 0; v < d.length; v++) y();
                                }
                            }
                        }, s;
                    }(),
                    Wa = function () {
                        function s(t) {
                            var e = this;
                            this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function () {
                                return e.timeupdate();
                            }, this.hls = t, this.config = t.config, this.registerListeners();
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                            this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
                        }, a.registerListeners = function () {
                            this.hls.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(E.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(E.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(E.ERROR, this.onError, this);
                        }, a.unregisterListeners = function () {
                            this.hls.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(E.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(E.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(E.ERROR, this.onError, this);
                        }, a.onMediaAttached = function (t, e) {
                            this.media = e.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
                        }, a.onMediaDetaching = function () {
                            this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
                        }, a.onManifestLoading = function () {
                            this.levelDetails = null, this._latency = null, this.stallCount = 0;
                        }, a.onLevelUpdated = function (t, e) {
                            var r = e.details;
                            this.levelDetails = r, r.advanced && this.timeupdate(), !r.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
                        }, a.onError = function (t, e) {
                            var r;
                            e.details === _.BUFFER_STALLED_ERROR && (this.stallCount++, null != (r = this.levelDetails) && r.live && A.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
                        }, a.timeupdate = function () {
                            var t = this.media,
                                e = this.levelDetails;
                            if (t && e) {
                                this.currentTime = t.currentTime;
                                var r = this.computeLatency();
                                if (null !== r) {
                                    this._latency = r;
                                    var i = this.config,
                                        o = i.maxLiveSyncPlaybackRate;
                                    if (i.lowLatencyMode && 1 !== o && e.live) {
                                        var l = this.targetLatency;
                                        if (null !== l) {
                                            var d = r - l;
                                            if (d < Math.min(this.maxLatency, l + e.targetduration) && d > .05 && this.forwardBufferLength > 1) {
                                                var u = Math.min(2, Math.max(1, o)),
                                                    h = Math.round(2 / (1 + Math.exp(-.75 * d - this.edgeStalled)) * 20) / 20;
                                                t.playbackRate = Math.min(u, Math.max(1, h));
                                            } else 1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1);
                                        }
                                    }
                                }
                            }
                        }, a.estimateLiveEdge = function () {
                            var t = this.levelDetails;
                            return null === t ? null : t.edge + t.age;
                        }, a.computeLatency = function () {
                            var t = this.estimateLiveEdge();
                            return null === t ? null : t - this.currentTime;
                        }, ct(s, [{
                            key: "latency",
                            get: function get() {
                                return this._latency || 0;
                            }
                        }, {
                            key: "maxLatency",
                            get: function get() {
                                var t = this.config,
                                    e = this.levelDetails;
                                return void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0;
                            }
                        }, {
                            key: "targetLatency",
                            get: function get() {
                                var t = this.levelDetails;
                                if (null === t) return null;
                                var i = t.targetduration,
                                    n = this.config,
                                    o = n.liveSyncDuration,
                                    u = this.hls.userConfig,
                                    h = n.lowLatencyMode && t.partHoldBack || t.holdBack;
                                return (u.liveSyncDuration || u.liveSyncDurationCount || 0 === h) && (h = void 0 !== o ? o : n.liveSyncDurationCount * i), h + Math.min(1 * this.stallCount, i);
                            }
                        }, {
                            key: "liveSyncPosition",
                            get: function get() {
                                var t = this.estimateLiveEdge(),
                                    e = this.targetLatency,
                                    r = this.levelDetails;
                                if (null === t || null === e || null === r) return null;
                                var i = r.edge,
                                    l = i - (this.config.lowLatencyMode && r.partTarget || r.targetduration);
                                return Math.min(Math.max(i - r.totalduration, t - e - this.edgeStalled), l);
                            }
                        }, {
                            key: "drift",
                            get: function get() {
                                var t = this.levelDetails;
                                return null === t ? 1 : t.drift;
                            }
                        }, {
                            key: "edgeStalled",
                            get: function get() {
                                var t = this.levelDetails;
                                return null === t ? 0 : Math.max(t.age - 3 * (this.config.lowLatencyMode && t.partTarget || t.targetduration), 0);
                            }
                        }, {
                            key: "forwardBufferLength",
                            get: function get() {
                                var t = this.media,
                                    e = this.levelDetails;
                                if (!t || !e) return 0;
                                var r = t.buffered.length;
                                return (r ? t.buffered.end(r - 1) : e.edge) - this.currentTime;
                            }
                        }]), s;
                    }(),
                    er = ["NONE", "TYPE-0", "TYPE-1", null],
                    De = ["SDR", "PQ", "HLG"];

                function di(s) {
                    var a = s.canSkipUntil;
                    return a && s.age < a / 2 ? s.canSkipDateRanges ? "v2" : "YES" : "";
                }

                var hi = function () {
                        function s(a, t, e) {
                            this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = a, this.part = t, this.skip = e;
                        }

                        return s.prototype.addDirectives = function (a) {
                            var t = new self.URL(a);
                            return void 0 !== this.msn && t.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href;
                        }, s;
                    }(),
                    rr = function () {
                        function s(t) {
                            this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [t.url], this._attrs = [t.attrs], this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.frameRate = t.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = t.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.codecSet = [t.videoCodec, t.audioCodec].filter(function (e) {
                                return !!e;
                            }).map(function (e) {
                                return e.substring(0, 4);
                            }).join(","), this.addGroupId("audio", t.attrs.AUDIO), this.addGroupId("text", t.attrs.SUBTITLES);
                        }

                        var a = s.prototype;
                        return a.hasAudioGroup = function (t) {
                            return fi(this._audioGroups, t);
                        }, a.hasSubtitleGroup = function (t) {
                            return fi(this._subtitleGroups, t);
                        }, a.addGroupId = function (t, e) {
                            if (e) if ("audio" === t) {
                                var r = this._audioGroups;
                                r || (r = this._audioGroups = []), -1 === r.indexOf(e) && r.push(e);
                            } else if ("text" === t) {
                                var i = this._subtitleGroups;
                                i || (i = this._subtitleGroups = []), -1 === i.indexOf(e) && i.push(e);
                            }
                        }, a.addFallback = function () {
                        }, ct(s, [{
                            key: "maxBitrate",
                            get: function get() {
                                return Math.max(this.realBitrate, this.bitrate);
                            }
                        }, {
                            key: "averageBitrate",
                            get: function get() {
                                return this._avgBitrate || this.realBitrate || this.bitrate;
                            }
                        }, {
                            key: "attrs",
                            get: function get() {
                                return this._attrs[0];
                            }
                        }, {
                            key: "codecs",
                            get: function get() {
                                return this.attrs.CODECS || "";
                            }
                        }, {
                            key: "pathwayId",
                            get: function get() {
                                return this.attrs["PATHWAY-ID"] || ".";
                            }
                        }, {
                            key: "videoRange",
                            get: function get() {
                                return this.attrs["VIDEO-RANGE"] || "SDR";
                            }
                        }, {
                            key: "score",
                            get: function get() {
                                return this.attrs.optionalFloat("SCORE", 0);
                            }
                        }, {
                            key: "uri",
                            get: function get() {
                                return this.url[0] || "";
                            }
                        }, {
                            key: "audioGroups",
                            get: function get() {
                                return this._audioGroups;
                            }
                        }, {
                            key: "subtitleGroups",
                            get: function get() {
                                return this._subtitleGroups;
                            }
                        }, {
                            key: "urlId",
                            get: function get() {
                                return 0;
                            },
                            set: function set(t) {
                            }
                        }, {
                            key: "audioGroupIds",
                            get: function get() {
                                return this.audioGroups ? [this.audioGroupId] : void 0;
                            }
                        }, {
                            key: "textGroupIds",
                            get: function get() {
                                return this.subtitleGroups ? [this.textGroupId] : void 0;
                            }
                        }, {
                            key: "audioGroupId",
                            get: function get() {
                                var t;
                                return null == (t = this.audioGroups) ? void 0 : t[0];
                            }
                        }, {
                            key: "textGroupId",
                            get: function get() {
                                var t;
                                return null == (t = this.subtitleGroups) ? void 0 : t[0];
                            }
                        }]), s;
                    }();

                function fi(s, a) {
                    return !(!a || !s) && -1 !== s.indexOf(a);
                }

                function ir(s, a) {
                    var t = a.startPTS;
                    if (N(t)) {
                        var e,
                            r = 0;
                        a.sn > s.sn ? (r = t - s.start, e = s) : (r = s.start - t, e = a), e.duration !== r && (e.duration = r);
                    } else a.start = a.sn > s.sn ? s.cc === a.cc && s.minEndPTS ? s.start + (s.minEndPTS - s.start) : s.start + s.duration : Math.max(s.start - a.duration, 0);
                }

                function ci(s, a, t, e, r, i) {
                    e - t <= 0 && (A.warn("Fragment should have a positive duration", a), e = t + a.duration, i = r + a.duration);
                    var n = t,
                        o = e,
                        l = a.startPTS,
                        d = a.endPTS;
                    if (N(l)) {
                        var u = Math.abs(l - t);
                        a.deltaPTS = N(a.deltaPTS) ? Math.max(u, a.deltaPTS) : u, n = Math.max(t, l), t = Math.min(t, l), r = Math.min(r, a.startDTS), o = Math.min(e, d), e = Math.max(e, d), i = Math.max(i, a.endDTS);
                    }
                    var h = t - a.start;
                    0 !== a.start && (a.start = t), a.duration = e - a.start, a.startPTS = t, a.maxStartPTS = n, a.startDTS = r, a.endPTS = e, a.minEndPTS = o, a.endDTS = i;
                    var f,
                        c = a.sn;
                    if (!s || c < s.startSN || c > s.endSN) return 0;
                    var m = c - s.startSN,
                        g = s.fragments;
                    for (g[m] = a, f = m; f > 0; f--) ir(g[f], g[f - 1]);
                    for (f = m; f < g.length - 1; f++) ir(g[f], g[f + 1]);
                    return s.fragmentHint && ir(g[g.length - 1], s.fragmentHint), s.PTSKnown = s.alignedSliding = !0, h;
                }

                function vi(s, a) {
                    var t = a.startSN + a.skippedSegments - s.startSN,
                        e = s.fragments;
                    t < 0 || t >= e.length || function (r, i) {
                        if (i) {
                            for (var n = r.fragments, o = r.skippedSegments; o < n.length; o++) n[o].start += i;
                            r.fragmentHint && (r.fragmentHint.start += i);
                        }
                    }(a, e[t].start);
                }

                function gi(s, a, t) {
                    var e;
                    return null != s && s.details ? mi(null == (e = s.details) ? void 0 : e.partList, a, t) : null;
                }

                function mi(s, a, t) {
                    if (s) for (var e = s.length; e--;) {
                        var r = s[e];
                        if (r.index === t && r.fragment.sn === a) return r;
                    }
                    return null;
                }

                function pi(s) {
                    s.forEach(function (a, t) {
                        var e = a.details;
                        null != e && e.fragments && e.fragments.forEach(function (r) {
                            r.level = t;
                        });
                    });
                }

                function ke(s) {
                    switch (s.details) {
                        case _.FRAG_LOAD_TIMEOUT:
                        case _.KEY_LOAD_TIMEOUT:
                        case _.LEVEL_LOAD_TIMEOUT:
                        case _.MANIFEST_LOAD_TIMEOUT:
                            return !0;
                    }
                    return !1;
                }

                function yi(s, a) {
                    var t = ke(a);
                    return s.default[(t ? "timeout" : "error") + "Retry"];
                }

                function ar(s, a) {
                    var t = "linear" === s.backoff ? 1 : Math.pow(2, a);
                    return Math.min(t * s.retryDelayMs, s.maxRetryDelayMs);
                }

                function Ei(s) {
                    return yt(yt({}, s), {
                        errorRetry: null,
                        timeoutRetry: null
                    });
                }

                function _e(s, a, t, e) {
                    if (!s) return !1;
                    var r = e === null || e === void 0 ? void 0 : e.code,
                        i = a < s.maxNumRetry && (function (n) {
                            return 0 === n && !1 === navigator.onLine || !!n && (n < 400 || n > 499);
                        }(r) || !!t);
                    return s.shouldRetry ? s.shouldRetry(s, a, t, e, i) : i;
                }

                var Ti = function Ti(s, a) {
                    for (var t = 0, e = s.length - 1, r = null, i = null; t <= e;) {
                        var n = a(i = s[r = (t + e) / 2 | 0]);
                        if (n > 0) t = r + 1; else {
                            if (!(n < 0)) return i;
                            e = r - 1;
                        }
                    }
                    return null;
                };

                function Si(s, a, t, e, r) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = .005);
                    var i = null;
                    if (s) {
                        i = a[s.sn - a[0].sn + 1] || null;
                        var n = s.endDTS - t;
                        n > 0 && n < 15e-7 && (t += 15e-7);
                    } else 0 === t && 0 === a[0].start && (i = a[0]);
                    if (i && ((!s || s.level === i.level) && 0 === Li(t, e, i) || function (l, d, u) {
                        if (d && 0 === d.start && d.level < l.level && (d.endPTS || 0) > 0) {
                            var h = d.tagList.reduce(function (f, c) {
                                return "INF" === c[0] && (f += parseFloat(c[1])), f;
                            }, u);
                            return l.start <= h;
                        }
                        return !1;
                    }(i, s, Math.min(r, e)))) return i;
                    var o = Ti(a, Li.bind(null, t, e));
                    return !o || o === s && i ? i : o;
                }

                function Li(s, a, t) {
                    if (void 0 === s && (s = 0), void 0 === a && (a = 0), t.start <= s && t.start + t.duration > s) return 0;
                    var e = Math.min(a, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
                    return t.start + t.duration - e <= s ? 1 : t.start - e > s && t.start ? -1 : 0;
                }

                function Xa(s, a, t) {
                    var e = 1e3 * Math.min(a, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
                    return (t.endProgramDateTime || 0) - e > s;
                }

                var Za = function () {
                        function s(t) {
                            this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = t, this.log = A.log.bind(A, "[info]:"), this.warn = A.warn.bind(A, "[warning]:"), this.error = A.error.bind(A, "[error]:"), this.registerListeners();
                        }

                        var a = s.prototype;
                        return a.registerListeners = function () {
                            var t = this.hls;
                            t.on(E.ERROR, this.onError, this), t.on(E.MANIFEST_LOADING, this.onManifestLoading, this), t.on(E.LEVEL_UPDATED, this.onLevelUpdated, this);
                        }, a.unregisterListeners = function () {
                            var t = this.hls;
                            t && (t.off(E.ERROR, this.onError, this), t.off(E.ERROR, this.onErrorOut, this), t.off(E.MANIFEST_LOADING, this.onManifestLoading, this), t.off(E.LEVEL_UPDATED, this.onLevelUpdated, this));
                        }, a.destroy = function () {
                            this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {};
                        }, a.startLoad = function (t) {
                        }, a.stopLoad = function () {
                            this.playlistError = 0;
                        }, a.getVariantLevelIndex = function (t) {
                            return (t === null || t === void 0 ? void 0 : t.type) === at ? t.level : this.hls.loadLevel;
                        }, a.onManifestLoading = function () {
                            this.playlistError = 0, this.penalizedRenditions = {};
                        }, a.onLevelUpdated = function () {
                            this.playlistError = 0;
                        }, a.onError = function (t, e) {
                            var r, i;
                            if (!e.fatal) {
                                var n = this.hls,
                                    o = e.context;
                                switch (e.details) {
                                    case _.FRAG_LOAD_ERROR:
                                    case _.FRAG_LOAD_TIMEOUT:
                                    case _.KEY_LOAD_ERROR:
                                    case _.KEY_LOAD_TIMEOUT:
                                        return void (e.errorAction = this.getFragRetryOrSwitchAction(e));
                                    case _.FRAG_PARSING_ERROR:
                                        if (null != (r = e.frag) && r.gap) return void (e.errorAction = {
                                            action: 0,
                                            flags: 0
                                        });
                                    case _.FRAG_GAP:
                                    case _.FRAG_DECRYPT_ERROR:
                                        return e.errorAction = this.getFragRetryOrSwitchAction(e), void (e.errorAction.action = 2);
                                    case _.LEVEL_EMPTY_ERROR:
                                    case _.LEVEL_PARSING_ERROR:
                                        var l,
                                            d,
                                            u = e.parent === at ? e.level : n.loadLevel;
                                        return void (e.details === _.LEVEL_EMPTY_ERROR && null != (l = e.context) && null != (d = l.levelDetails) && d.live ? e.errorAction = this.getPlaylistRetryOrSwitchAction(e, u) : (e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, u)));
                                    case _.LEVEL_LOAD_ERROR:
                                    case _.LEVEL_LOAD_TIMEOUT:
                                        return void ("number" == typeof (o === null || o === void 0 ? void 0 : o.level) && (e.errorAction = this.getPlaylistRetryOrSwitchAction(e, o.level)));
                                    case _.AUDIO_TRACK_LOAD_ERROR:
                                    case _.AUDIO_TRACK_LOAD_TIMEOUT:
                                    case _.SUBTITLE_LOAD_ERROR:
                                    case _.SUBTITLE_TRACK_LOAD_TIMEOUT:
                                        if (o) {
                                            var h = n.levels[n.loadLevel];
                                            if (h && (o.type === wt && h.hasAudioGroup(o.groupId) || o.type === xt && h.hasSubtitleGroup(o.groupId))) return e.errorAction = this.getPlaylistRetryOrSwitchAction(e, n.loadLevel), e.errorAction.action = 2, void (e.errorAction.flags = 1);
                                        }
                                        return;
                                    case _.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
                                        var f = n.levels[n.loadLevel],
                                            c = f === null || f === void 0 ? void 0 : f.attrs["HDCP-LEVEL"];
                                        return void (c ? e.errorAction = {
                                            action: 2,
                                            flags: 2,
                                            hdcpLevel: c
                                        } : this.keySystemError(e));
                                    case _.BUFFER_ADD_CODEC_ERROR:
                                    case _.REMUX_ALLOC_ERROR:
                                    case _.BUFFER_APPEND_ERROR:
                                        return void (e.errorAction = this.getLevelSwitchAction(e, null != (i = e.level) ? i : n.loadLevel));
                                    case _.INTERNAL_EXCEPTION:
                                    case _.BUFFER_APPENDING_ERROR:
                                    case _.BUFFER_FULL_ERROR:
                                    case _.LEVEL_SWITCH_ERROR:
                                    case _.BUFFER_STALLED_ERROR:
                                    case _.BUFFER_SEEK_OVER_HOLE:
                                    case _.BUFFER_NUDGE_ON_STALL:
                                        return void (e.errorAction = {
                                            action: 0,
                                            flags: 0
                                        });
                                }
                                e.type === Y.KEY_SYSTEM_ERROR && this.keySystemError(e);
                            }
                        }, a.keySystemError = function (t) {
                            var e = this.getVariantLevelIndex(t.frag);
                            t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, e);
                        }, a.getPlaylistRetryOrSwitchAction = function (t, e) {
                            var r = yi(this.hls.config.playlistLoadPolicy, t),
                                i = this.playlistError++;
                            if (_e(r, i, ke(t), t.response)) return {
                                action: 5,
                                flags: 0,
                                retryConfig: r,
                                retryCount: i
                            };
                            var n = this.getLevelSwitchAction(t, e);
                            return r && (n.retryConfig = r, n.retryCount = i), n;
                        }, a.getFragRetryOrSwitchAction = function (t) {
                            var e = this.hls,
                                r = this.getVariantLevelIndex(t.frag),
                                i = e.levels[r],
                                n = e.config,
                                o = n.fragLoadPolicy,
                                l = n.keyLoadPolicy,
                                d = yi(t.details.startsWith("key") ? l : o, t),
                                u = e.levels.reduce(function (f, c) {
                                    return f + c.fragmentError;
                                }, 0);
                            if (i && (t.details !== _.FRAG_GAP && i.fragmentError++, _e(d, u, ke(t), t.response))) return {
                                action: 5,
                                flags: 0,
                                retryConfig: d,
                                retryCount: u
                            };
                            var h = this.getLevelSwitchAction(t, r);
                            return d && (h.retryConfig = d, h.retryCount = u), h;
                        }, a.getLevelSwitchAction = function (t, e) {
                            var r = this.hls;
                            null == e && (e = r.loadLevel);
                            var i = this.hls.levels[e];
                            if (i) {
                                var n,
                                    o,
                                    l = t.details;
                                i.loadError++, l === _.BUFFER_APPEND_ERROR && i.fragmentError++;
                                var d = -1,
                                    u = r.levels,
                                    h = r.loadLevel,
                                    f = r.minAutoLevel,
                                    c = r.maxAutoLevel;
                                r.autoLevelEnabled || (r.loadLevel = -1);
                                for (var m, g = null == (n = t.frag) ? void 0 : n.type, y = (g === ae && l === _.FRAG_PARSING_ERROR || "audio" === t.sourceBufferName && (l === _.BUFFER_ADD_CODEC_ERROR || l === _.BUFFER_APPEND_ERROR)) && u.some(function (L) {
                                    return i.audioCodec !== L.audioCodec;
                                }), v = "video" === t.sourceBufferName && (l === _.BUFFER_ADD_CODEC_ERROR || l === _.BUFFER_APPEND_ERROR) && u.some(function (L) {
                                    return i.codecSet !== L.codecSet && i.audioCodec === L.audioCodec;
                                }), p = null != (o = t.context) ? o : {}, S = p.type, T = p.groupId, R = function R() {
                                    var L = (b + h) % u.length;
                                    if (L !== h && L >= f && L <= c && 0 === u[L].loadError) {
                                        var k,
                                            x,
                                            w = u[L];
                                        if (l === _.FRAG_GAP && g === at && t.frag) {
                                            var D = u[L].details;
                                            if (D) {
                                                var C = Si(t.frag, D.fragments, t.frag.start);
                                                if (null != C && C.gap) return 0;
                                            }
                                        } else if (S === wt && w.hasAudioGroup(T) || S === xt && w.hasSubtitleGroup(T) || g === ae && null != (k = i.audioGroups) && k.some(function (F) {
                                            return w.hasAudioGroup(F);
                                        }) || g === Ze && null != (x = i.subtitleGroups) && x.some(function (F) {
                                            return w.hasSubtitleGroup(F);
                                        }) || y && i.audioCodec === w.audioCodec || !y && i.audioCodec !== w.audioCodec || v && i.codecSet === w.codecSet) return 0;
                                        return d = L, 1;
                                    }
                                }, b = u.length; b-- && (0 === (m = R()) || 1 !== m);) ;
                                if (d > -1 && r.loadLevel !== d) return t.levelRetry = !0, this.playlistError = 0, {
                                    action: 2,
                                    flags: 0,
                                    nextAutoLevel: d
                                };
                            }
                            return {
                                action: 2,
                                flags: 1
                            };
                        }, a.onErrorOut = function (t, e) {
                            var r;
                            switch (null == (r = e.errorAction) ? void 0 : r.action) {
                                case 0:
                                    break;
                                case 2:
                                    this.sendAlternateToPenaltyBox(e), e.errorAction.resolved || e.details === _.FRAG_GAP ? /MediaSource readyState: ended/.test(e.error.message) && (this.warn('MediaSource ended after "' + e.sourceBufferName + '" sourceBuffer append error. Attempting to recover from media error.'), this.hls.recoverMediaError()) : e.fatal = !0;
                            }
                            e.fatal && this.hls.stopLoad();
                        }, a.sendAlternateToPenaltyBox = function (t) {
                            var e = this.hls,
                                r = t.errorAction;
                            if (r) {
                                var n = r.hdcpLevel,
                                    o = r.nextAutoLevel;
                                switch (r.flags) {
                                    case 0:
                                        this.switchLevel(t, o);
                                        break;
                                    case 2:
                                        n && (e.maxHdcpLevel = er[er.indexOf(n) - 1], r.resolved = !0), this.warn('Restricting playback to HDCP-LEVEL of "' + e.maxHdcpLevel + '" or lower');
                                }
                                r.resolved || this.switchLevel(t, o);
                            }
                        }, a.switchLevel = function (t, e) {
                            void 0 !== e && t.errorAction && (this.warn("switching to level " + e + " after " + t.details), this.hls.nextAutoLevel = e, t.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel);
                        }, s;
                    }(),
                    Ja = function () {
                        function s(t, e) {
                            this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = A.log.bind(A, e + ":"), this.warn = A.warn.bind(A, e + ":"), this.hls = t;
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                            this.clearTimer(), this.hls = this.log = this.warn = null;
                        }, a.clearTimer = function () {
                            -1 !== this.timer && (self.clearTimeout(this.timer), this.timer = -1);
                        }, a.startLoad = function () {
                            this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist();
                        }, a.stopLoad = function () {
                            this.canLoad = !1, this.clearTimer();
                        }, a.switchParams = function (t, e, r) {
                            var i = e === null || e === void 0 ? void 0 : e.renditionReports;
                            if (i) {
                                for (var n = -1, o = 0; o < i.length; o++) {
                                    var l = i[o],
                                        d = void 0;
                                    try {
                                        d = new self.URL(l.URI, e.url).href;
                                    } catch (g) {
                                        A.warn("Could not construct new URL for Rendition Report: " + g), d = l.URI || "";
                                    }
                                    if (d === t) {
                                        n = o;
                                        break;
                                    }
                                    d === t.substring(0, d.length) && (n = o);
                                }
                                if (-1 !== n) {
                                    var u = i[n],
                                        h = parseInt(u["LAST-MSN"]) || (e === null || e === void 0 ? void 0 : e.lastPartSn),
                                        f = parseInt(u["LAST-PART"]) || (e === null || e === void 0 ? void 0 : e.lastPartIndex);
                                    if (this.hls.config.lowLatencyMode) {
                                        var c = Math.min(e.age - e.partTarget, e.targetduration);
                                        f >= 0 && c > e.partTarget && (f += 1);
                                    }
                                    var m = r && di(r);
                                    return new hi(h, f >= 0 ? f : void 0, m);
                                }
                            }
                        }, a.loadPlaylist = function (t) {
                            -1 === this.requestScheduled && (this.requestScheduled = self.performance.now());
                        }, a.shouldLoadPlaylist = function (t) {
                            return this.canLoad && !!t && !!t.url && (!t.details || t.details.live);
                        }, a.shouldReloadPlaylist = function (t) {
                            return -1 === this.timer && -1 === this.requestScheduled && this.shouldLoadPlaylist(t);
                        }, a.playlistLoaded = function (t, e, r) {
                            var i = this,
                                n = e.details,
                                o = e.stats,
                                l = self.performance.now(),
                                d = o.loading.first ? Math.max(0, l - o.loading.first) : 0;
                            if (n.advancedDateTime = Date.now() - d, n.live || null != r && r.live) {
                                if (n.reloaded(r), r && this.log("live playlist " + t + " " + (n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : n.updated ? "UPDATED" : "MISSED")), r && n.fragments.length > 0 && function za(s, a) {
                                    for (var t = null, e = s.fragments, r = e.length - 1; r >= 0; r--) {
                                        var i = e[r].initSegment;
                                        if (i) {
                                            t = i;
                                            break;
                                        }
                                    }
                                    s.fragmentHint && delete s.fragmentHint.endPTS;
                                    var n,
                                        l,
                                        d,
                                        u,
                                        h = 0;
                                    if (function (v, p, S) {
                                        for (var T = p.skippedSegments, R = Math.max(v.startSN, p.startSN) - p.startSN, b = (v.fragmentHint ? 1 : 0) + (T ? p.endSN : Math.min(v.endSN, p.endSN)) - p.startSN, L = p.startSN - v.startSN, k = p.fragmentHint ? p.fragments.concat(p.fragmentHint) : p.fragments, x = v.fragmentHint ? v.fragments.concat(v.fragmentHint) : v.fragments, w = R; w <= b; w++) {
                                            var D = x[L + w],
                                                C = k[w];
                                            T && !C && w < T && (C = p.fragments[w] = D), D && C && S(D, C);
                                        }
                                    }(s, a, function (v, p) {
                                        v.relurl && (h = v.cc - p.cc), N(v.startPTS) && N(v.endPTS) && (p.start = p.startPTS = v.startPTS, p.startDTS = v.startDTS, p.maxStartPTS = v.maxStartPTS, p.endPTS = v.endPTS, p.endDTS = v.endDTS, p.minEndPTS = v.minEndPTS, p.duration = v.endPTS - v.startPTS, p.duration && (n = p), a.PTSKnown = a.alignedSliding = !0), p.elementaryStreams = v.elementaryStreams, p.loader = v.loader, p.stats = v.stats, v.initSegment && (p.initSegment = v.initSegment, t = v.initSegment);
                                    }), t && (a.fragmentHint ? a.fragments.concat(a.fragmentHint) : a.fragments).forEach(function (v) {
                                        var p;
                                        !v || v.initSegment && v.initSegment.relurl !== (null == (p = t) ? void 0 : p.relurl) || (v.initSegment = t);
                                    }), a.skippedSegments) if (a.deltaUpdateFailed = a.fragments.some(function (v) {
                                        return !v;
                                    }), a.deltaUpdateFailed) {
                                        A.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                                        for (var f = a.skippedSegments; f--;) a.fragments.shift();
                                        a.startSN = a.fragments[0].sn, a.startCC = a.fragments[0].cc;
                                    } else a.canSkipDateRanges && (a.dateRanges = (l = a.dateRanges, d = a.recentlyRemovedDateranges, u = gt({}, s.dateRanges), d && d.forEach(function (v) {
                                        delete u[v];
                                    }), Object.keys(l).forEach(function (v) {
                                        var p = new Fr(l[v].attr, u[v]);
                                        p.isValid ? u[v] = p : A.warn('Ignoring invalid Playlist Delta Update DATERANGE tag: "' + JSON.stringify(l[v].attr) + '"');
                                    }), u));
                                    var c = a.fragments;
                                    if (h) {
                                        A.warn("discontinuity sliding from playlist, take drift into account");
                                        for (var m = 0; m < c.length; m++) c[m].cc += h;
                                    }
                                    a.skippedSegments && (a.startCC = a.fragments[0].cc), function (v, p, S) {
                                        if (v && p) for (var T = 0, R = 0, b = v.length; R <= b; R++) {
                                            var L = v[R],
                                                k = p[R + T];
                                            L && k && L.index === k.index && L.fragment.sn === k.fragment.sn ? S(L, k) : T--;
                                        }
                                    }(s.partList, a.partList, function (v, p) {
                                        p.elementaryStreams = v.elementaryStreams, p.stats = v.stats;
                                    }), n ? ci(a, n, n.startPTS, n.endPTS, n.startDTS, n.endDTS) : vi(s, a), c.length && (a.totalduration = a.edge - c[0].start), a.driftStartTime = s.driftStartTime, a.driftStart = s.driftStart;
                                    var g = a.advancedDateTime;
                                    if (a.advanced && g) {
                                        var y = a.edge;
                                        a.driftStart || (a.driftStartTime = g, a.driftStart = y), a.driftEndTime = g, a.driftEnd = y;
                                    } else a.driftEndTime = s.driftEndTime, a.driftEnd = s.driftEnd, a.advancedDateTime = s.advancedDateTime;
                                }(r, n), !this.canLoad || !n.live) return;
                                var u,
                                    h = void 0,
                                    f = void 0;
                                if (n.canBlockReload && n.endSN && n.advanced) {
                                    var c = this.hls.config.lowLatencyMode,
                                        m = n.lastPartSn,
                                        g = n.endSN,
                                        y = n.lastPartIndex,
                                        v = m === g;
                                    -1 !== y ? (h = v ? g + 1 : m, f = v ? c ? 0 : y : y + 1) : h = g + 1;
                                    var p = n.age,
                                        T = Math.min(p + n.ageHeader - n.partTarget, 1.5 * n.targetduration);
                                    if (T > 0) {
                                        if (r && T > r.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + r.tuneInGoal + " to: " + T + " with playlist age: " + n.age), T = 0; else {
                                            var R = Math.floor(T / n.targetduration);
                                            h += R, void 0 !== f && (f += Math.round(T % n.targetduration / n.partTarget)), this.log("CDN Tune-in age: " + n.ageHeader + "s last advanced " + p.toFixed(2) + "s goal: " + T + " skip sn " + R + " to part " + f);
                                        }
                                        n.tuneInGoal = T;
                                    }
                                    if (u = this.getDeliveryDirectives(n, e.deliveryDirectives, h, f), c || !v) return void this.loadPlaylist(u);
                                } else (n.canBlockReload || n.canSkipUntil) && (u = this.getDeliveryDirectives(n, e.deliveryDirectives, h, f));
                                var b = this.hls.mainForwardBufferInfo,
                                    k = function (w, D) {
                                        void 0 === D && (D = 1 / 0);
                                        var C = 1e3 * w.targetduration;
                                        if (w.updated) {
                                            var F = w.fragments;
                                            if (F.length && 4 * C > D) {
                                                var P = 1e3 * F[F.length - 1].duration;
                                                P < C && (C = P);
                                            }
                                        } else C /= 2;
                                        return Math.round(C);
                                    }(n, 1e3 * (n.edge - (b ? b.end - b.len : 0)));
                                n.updated && l > this.requestScheduled + k && (this.requestScheduled = o.loading.start), void 0 !== h && n.canBlockReload ? this.requestScheduled = o.loading.first + k - (1e3 * n.partTarget || 1e3) : -1 === this.requestScheduled || this.requestScheduled + k < l ? this.requestScheduled = l : this.requestScheduled - l <= 0 && (this.requestScheduled += k);
                                var x = this.requestScheduled - l;
                                x = Math.max(0, x), this.log("reload live playlist " + t + " in " + Math.round(x) + " ms"), this.timer = self.setTimeout(function () {
                                    return i.loadPlaylist(u);
                                }, x);
                            } else this.clearTimer();
                        }, a.getDeliveryDirectives = function (t, e, r, i) {
                            var n = di(t);
                            return null != e && e.skip && t.deltaUpdateFailed && (r = e.msn, i = e.part, n = ""), new hi(r, i, n);
                        }, a.checkRetry = function (t) {
                            var e = this,
                                r = t.details,
                                i = ke(t),
                                n = t.errorAction,
                                o = n || {},
                                l = o.action,
                                d = o.retryCount,
                                u = void 0 === d ? 0 : d,
                                h = o.retryConfig,
                                f = !!n && !!h && (5 === l || !n.resolved && 2 === l);
                            if (f) {
                                var c;
                                if (this.requestScheduled = -1, u >= h.maxNumRetry) return !1;
                                if (i && null != (c = t.context) && c.deliveryDirectives) this.warn("Retrying playlist loading " + (u + 1) + "/" + h.maxNumRetry + ' after "' + r + '" without delivery-directives'), this.loadPlaylist(); else {
                                    var m = ar(h, u);
                                    this.timer = self.setTimeout(function () {
                                        return e.loadPlaylist();
                                    }, m), this.warn("Retrying playlist loading " + (u + 1) + "/" + h.maxNumRetry + ' after "' + r + '" in ' + m + "ms");
                                }
                                t.levelRetry = !0, n.resolved = !0;
                            }
                            return f;
                        }, s;
                    }(),
                    Xt = function () {
                        function s(t, e, r) {
                            void 0 === e && (e = 0), void 0 === r && (r = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t, this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = e, this.totalWeight_ = r;
                        }

                        var a = s.prototype;
                        return a.sample = function (t, e) {
                            var r = Math.pow(this.alpha_, t);
                            this.estimate_ = e * (1 - r) + r * this.estimate_, this.totalWeight_ += t;
                        }, a.getTotalWeight = function () {
                            return this.totalWeight_;
                        }, a.getEstimate = function () {
                            if (this.alpha_) {
                                var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                                if (t) return this.estimate_ / t;
                            }
                            return this.estimate_;
                        }, s;
                    }(),
                    $a = function () {
                        function s(t, e, r, i) {
                            void 0 === i && (i = 100), this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = r, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Xt(t), this.fast_ = new Xt(e), this.defaultTTFB_ = i, this.ttfb_ = new Xt(t);
                        }

                        var a = s.prototype;
                        return a.update = function (t, e) {
                            var r = this.slow_,
                                i = this.fast_,
                                n = this.ttfb_;
                            r.halfLife !== t && (this.slow_ = new Xt(t, r.getEstimate(), r.getTotalWeight())), i.halfLife !== e && (this.fast_ = new Xt(e, i.getEstimate(), i.getTotalWeight())), n.halfLife !== t && (this.ttfb_ = new Xt(t, n.getEstimate(), n.getTotalWeight()));
                        }, a.sample = function (t, e) {
                            var r = (t = Math.max(t, this.minDelayMs_)) / 1e3,
                                i = 8 * e / r;
                            this.fast_.sample(r, i), this.slow_.sample(r, i);
                        }, a.sampleTTFB = function (t) {
                            var e = t / 1e3,
                                r = Math.sqrt(2) * Math.exp(-Math.pow(e, 2) / 2);
                            this.ttfb_.sample(r, Math.max(t, 5));
                        }, a.canEstimate = function () {
                            return this.fast_.getTotalWeight() >= this.minWeight_;
                        }, a.getEstimate = function () {
                            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
                        }, a.getEstimateTTFB = function () {
                            return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
                        }, a.destroy = function () {
                        }, s;
                    }();

                function It(s, a) {
                    A.log('[abr] start candidates with "' + s + '" ignored because ' + a);
                }

                var en = function () {
                        function s(t) {
                            var e = this;
                            this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this._abandonRulesCheck = function () {
                                var r = e.fragCurrent,
                                    i = e.partCurrent,
                                    n = e.hls,
                                    o = n.autoLevelEnabled,
                                    l = n.media;
                                if (r && l) {
                                    var d = performance.now(),
                                        u = i ? i.stats : r.stats,
                                        h = i ? i.duration : r.duration,
                                        f = d - u.loading.start,
                                        c = n.minAutoLevel;
                                    if (u.aborted || u.loaded && u.loaded === u.total || r.level <= c) return e.clearTimer(), void (e._nextAutoLevel = -1);
                                    if (o && !l.paused && l.playbackRate && l.readyState) {
                                        var m = n.mainForwardBufferInfo;
                                        if (null !== m) {
                                            var g = e.bwEstimator.getEstimateTTFB(),
                                                y = Math.abs(l.playbackRate);
                                            if (!(f <= Math.max(g, h / (2 * y) * 1e3))) {
                                                var v = m.len / y,
                                                    p = u.loading.first ? u.loading.first - u.loading.start : -1,
                                                    S = u.loaded && p > -1,
                                                    T = e.getBwEstimate(),
                                                    R = n.levels,
                                                    L = u.total || Math.max(u.loaded, Math.round(h * R[r.level].averageBitrate / 8)),
                                                    k = S ? f - p : f;
                                                k < 1 && S && (k = Math.min(f, 8 * u.loaded / T));
                                                var x = S ? 1e3 * u.loaded / k : 0,
                                                    w = x ? (L - u.loaded) / x : 8 * L / T + g / 1e3;
                                                if (!(w <= v)) {
                                                    var D,
                                                        C = x ? 8 * x : T,
                                                        F = Number.POSITIVE_INFINITY;
                                                    for (D = r.level - 1; D > c && !((F = e.getTimeToLoadFrag(g / 1e3, C, h * R[D].maxBitrate, !R[D].details)) < v); D--) ;
                                                    if (!(F >= w || F > 10 * h)) {
                                                        n.nextLoadLevel = n.nextAutoLevel = D, S ? e.bwEstimator.sample(f - Math.min(g, p), u.loaded) : e.bwEstimator.sampleTTFB(f);
                                                        var M = R[D].maxBitrate;
                                                        e.getBwEstimate() * e.hls.config.abrBandWidthUpFactor > M && e.resetEstimator(M), e.clearTimer(), A.warn("[abr] Fragment " + r.sn + (i ? " part " + i.index : "") + " of level " + r.level + " is loading too slowly;\n      Time to underbuffer: " + v.toFixed(3) + " s\n      Estimated load time for current fragment: " + w.toFixed(3) + " s\n      Estimated load time for down switch fragment: " + F.toFixed(3) + " s\n      TTFB estimate: " + (0 | p) + " ms\n      Current BW estimate: " + (N(T) ? 0 | T : "Unknown") + " bps\n      New BW estimate: " + (0 | e.getBwEstimate()) + " bps\n      Switching to level " + D + " @ " + (0 | M) + " bps"), n.trigger(E.FRAG_LOAD_EMERGENCY_ABORTED, {
                                                            frag: r,
                                                            part: i,
                                                            stats: u
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }, this.hls = t, this.bwEstimator = this.initEstimator(), this.registerListeners();
                        }

                        var a = s.prototype;
                        return a.resetEstimator = function (t) {
                            t && (A.log("setting initial bwe to " + t), this.hls.config.abrEwmaDefaultEstimate = t), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
                        }, a.initEstimator = function () {
                            var t = this.hls.config;
                            return new $a(t.abrEwmaSlowVoD, t.abrEwmaFastVoD, t.abrEwmaDefaultEstimate);
                        }, a.registerListeners = function () {
                            var t = this.hls;
                            t.on(E.MANIFEST_LOADING, this.onManifestLoading, this), t.on(E.FRAG_LOADING, this.onFragLoading, this), t.on(E.FRAG_LOADED, this.onFragLoaded, this), t.on(E.FRAG_BUFFERED, this.onFragBuffered, this), t.on(E.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(E.LEVEL_LOADED, this.onLevelLoaded, this), t.on(E.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(E.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), t.on(E.ERROR, this.onError, this);
                        }, a.unregisterListeners = function () {
                            var t = this.hls;
                            t && (t.off(E.MANIFEST_LOADING, this.onManifestLoading, this), t.off(E.FRAG_LOADING, this.onFragLoading, this), t.off(E.FRAG_LOADED, this.onFragLoaded, this), t.off(E.FRAG_BUFFERED, this.onFragBuffered, this), t.off(E.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(E.LEVEL_LOADED, this.onLevelLoaded, this), t.off(E.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(E.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), t.off(E.ERROR, this.onError, this));
                        }, a.destroy = function () {
                            this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null;
                        }, a.onManifestLoading = function (t, e) {
                            this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
                        }, a.onLevelsUpdated = function () {
                            this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
                        }, a.onMaxAutoLevelUpdated = function () {
                            this.firstSelection = -1, this.nextAutoLevelKey = "";
                        }, a.onFragLoading = function (t, e) {
                            var r,
                                i = e.frag;
                            this.ignoreFragment(i) || (i.bitrateTest || (this.fragCurrent = i, this.partCurrent = null != (r = e.part) ? r : null), this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100));
                        }, a.onLevelSwitching = function (t, e) {
                            this.clearTimer();
                        }, a.onError = function (t, e) {
                            if (!e.fatal) switch (e.details) {
                                case _.BUFFER_ADD_CODEC_ERROR:
                                case _.BUFFER_APPEND_ERROR:
                                    this.lastLoadedFragLevel = -1, this.firstSelection = -1;
                                    break;
                                case _.FRAG_LOAD_TIMEOUT:
                                    var r = e.frag,
                                        i = this.fragCurrent,
                                        n = this.partCurrent;
                                    if (r && i && r.sn === i.sn && r.level === i.level) {
                                        var o = performance.now(),
                                            l = n ? n.stats : r.stats,
                                            d = o - l.loading.start,
                                            u = l.loading.first ? l.loading.first - l.loading.start : -1;
                                        if (l.loaded && u > -1) {
                                            var h = this.bwEstimator.getEstimateTTFB();
                                            this.bwEstimator.sample(d - Math.min(h, u), l.loaded);
                                        } else this.bwEstimator.sampleTTFB(d);
                                    }
                            }
                        }, a.getTimeToLoadFrag = function (t, e, r, i) {
                            return t + r / e + (i ? this.lastLevelLoadSec : 0);
                        }, a.onLevelLoaded = function (t, e) {
                            var r = this.hls.config,
                                i = e.stats.loading,
                                n = i.end - i.start;
                            N(n) && (this.lastLevelLoadSec = n / 1e3), e.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD);
                        }, a.onFragLoaded = function (t, e) {
                            var r = e.frag,
                                i = e.part,
                                n = i ? i.stats : r.stats;
                            if (r.type === at && this.bwEstimator.sampleTTFB(n.loading.first - n.loading.start), !this.ignoreFragment(r)) {
                                if (this.clearTimer(), r.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
                                    var l = this.hls.levels[r.level],
                                        d = (l.loaded ? l.loaded.bytes : 0) + n.loaded,
                                        u = (l.loaded ? l.loaded.duration : 0) + (i ? i.duration : r.duration);
                                    l.loaded = {
                                        bytes: d,
                                        duration: u
                                    }, l.realBitrate = Math.round(8 * d / u);
                                }
                                r.bitrateTest ? (this.onFragBuffered(E.FRAG_BUFFERED, {
                                    stats: n,
                                    frag: r,
                                    part: i,
                                    id: r.type
                                }), r.bitrateTest = !1) : this.lastLoadedFragLevel = r.level;
                            }
                        }, a.onFragBuffered = function (t, e) {
                            var r = e.frag,
                                i = e.part,
                                n = null != i && i.stats.loaded ? i.stats : r.stats;
                            if (!n.aborted && !this.ignoreFragment(r)) {
                                var o = n.parsing.end - n.loading.start - Math.min(n.loading.first - n.loading.start, this.bwEstimator.getEstimateTTFB());
                                this.bwEstimator.sample(o, n.loaded), n.bwEstimate = this.getBwEstimate(), this.bitrateTestDelay = r.bitrateTest ? o / 1e3 : 0;
                            }
                        }, a.ignoreFragment = function (t) {
                            return t.type !== at || "initSegment" === t.sn;
                        }, a.clearTimer = function () {
                            this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
                        }, a.getAutoLevelKey = function () {
                            return this.getBwEstimate() + "_" + this.getStarvationDelay().toFixed(2);
                        }, a.getNextABRAutoLevel = function () {
                            var t = this.fragCurrent,
                                e = this.partCurrent,
                                r = this.hls,
                                i = r.maxAutoLevel,
                                n = r.config,
                                o = r.minAutoLevel,
                                l = e ? e.duration : t ? t.duration : 0,
                                d = this.getBwEstimate(),
                                u = this.getStarvationDelay(),
                                h = n.abrBandWidthFactor,
                                f = n.abrBandWidthUpFactor;
                            if (u) {
                                var c = this.findBestLevel(d, o, i, u, 0, h, f);
                                if (c >= 0) return c;
                            }
                            var m = l ? Math.min(l, n.maxStarvationDelay) : n.maxStarvationDelay;
                            if (!u) {
                                var g = this.bitrateTestDelay;
                                g && (m = (l ? Math.min(l, n.maxLoadingDelay) : n.maxLoadingDelay) - g, A.info("[abr] bitrate test took " + Math.round(1e3 * g) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * m) + " ms"), h = f = 1);
                            }
                            var y = this.findBestLevel(d, o, i, u, m, h, f);
                            if (A.info("[abr] " + (u ? "rebuffering expected" : "buffer is empty") + ", optimal quality level " + y), y > -1) return y;
                            var v = r.levels[o],
                                p = r.levels[r.loadLevel];
                            return (v === null || v === void 0 ? void 0 : v.bitrate) < (p === null || p === void 0 ? void 0 : p.bitrate) ? o : r.loadLevel;
                        }, a.getStarvationDelay = function () {
                            var t = this.hls,
                                e = t.media;
                            if (!e) return 1 / 0;
                            var r = e && 0 !== e.playbackRate ? Math.abs(e.playbackRate) : 1,
                                i = t.mainForwardBufferInfo;
                            return (i ? i.len : 0) / r;
                        }, a.getBwEstimate = function () {
                            return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
                        }, a.findBestLevel = function (t, e, r, i, n, o, l) {
                            var d,
                                u = this,
                                h = i + n,
                                f = this.lastLoadedFragLevel,
                                c = -1 === f ? this.hls.firstLevel : f,
                                m = this.fragCurrent,
                                g = this.partCurrent,
                                y = this.hls,
                                v = y.levels,
                                p = y.allAudioTracks,
                                S = y.loadLevel,
                                T = y.config;
                            if (1 === v.length) return 0;
                            var R,
                                b = v[c],
                                L = !(null == b || null == (d = b.details) || !d.live),
                                k = -1 === S || -1 === f,
                                x = "SDR",
                                w = (b === null || b === void 0 ? void 0 : b.frameRate) || 0,
                                D = T.audioPreference,
                                C = T.videoPreference;
                            if (this.audioTracksByGroup || (this.audioTracksByGroup = p.reduce(function (z, Z) {
                                var j = z.groups[Z.groupId];
                                j || (j = z.groups[Z.groupId] = {
                                    tracks: [],
                                    channels: {
                                        2: 0
                                    },
                                    hasDefault: !1,
                                    hasAutoSelect: !1
                                }), j.tracks.push(Z);
                                var q = Z.channels || "2";
                                return j.channels[q] = (j.channels[q] || 0) + 1, j.hasDefault = j.hasDefault || Z.default, j.hasAutoSelect = j.hasAutoSelect || Z.autoselect, j.hasDefault && (z.hasDefaultAudio = !0), j.hasAutoSelect && (z.hasAutoSelectAudio = !0), z;
                            }, {
                                hasDefaultAudio: !1,
                                hasAutoSelectAudio: !1,
                                groups: {}
                            })), k) {
                                if (-1 !== this.firstSelection) return this.firstSelection;
                                var P = function (et, z, Z, j, q) {
                                        for (var J = Object.keys(et), X = j === null || j === void 0 ? void 0 : j.channels, W = j === null || j === void 0 ? void 0 : j.audioCodec, mt = X && 2 === parseInt(X), Mt = !0, Nt = !1, Rt = 1 / 0, pt = 1 / 0, Et = 1 / 0, _t = 0, vt = [], ce = function tn(s, a) {
                                            var t = !1,
                                                e = [];
                                            return s && (t = "SDR" !== s, e = [s]), a && (e = a.allowedVideoRanges || De.slice(0), e = (t = void 0 !== a.preferHDR ? a.preferHDR : function () {
                                                if ("function" == typeof matchMedia) {
                                                    var r = matchMedia("(dynamic-range: high)"),
                                                        i = matchMedia("bad query");
                                                    if (r.media !== i.media) return !0 === r.matches;
                                                }
                                                return !1;
                                            }()) ? e.filter(function (r) {
                                                return "SDR" !== r;
                                            }) : ["SDR"]), {
                                                preferHDR: t,
                                                allowedVideoRanges: e
                                            };
                                        }(z, q), $t = ce.preferHDR, Rr = ce.allowedVideoRanges, ve = function ve() {
                                            var Q = et[J[Me]];
                                            Mt = Q.channels[2] > 0, Rt = Math.min(Rt, Q.minHeight), pt = Math.min(pt, Q.minFramerate), Et = Math.min(Et, Q.minBitrate);
                                            var st = Rr.filter(function (ot) {
                                                return Q.videoRanges[ot] > 0;
                                            });
                                            st.length > 0 && (Nt = !0, vt = st);
                                        }, Me = J.length; Me--;) ve();
                                        Rt = N(Rt) ? Rt : 0, pt = N(pt) ? pt : 0;
                                        var ge = Math.max(1080, Rt),
                                            te = Math.max(30, pt);
                                        return Et = N(Et) ? Et : Z, Z = Math.max(Et, Z), Nt || (z = void 0, vt = []), {
                                            codecSet: J.reduce(function (Q, st) {
                                                var ot = et[st];
                                                if (st === Q) return Q;
                                                if (ot.minBitrate > Z) return It(st, "min bitrate of " + ot.minBitrate + " > current estimate of " + Z), Q;
                                                if (!ot.hasDefaultAudio) return It(st, "no renditions with default or auto-select sound found"), Q;
                                                if (W && st.indexOf(W.substring(0, 4)) % 5 != 0) return It(st, 'audio codec preference "' + W + '" not found'), Q;
                                                if (X && !mt) {
                                                    if (!ot.channels[X]) return It(st, "no renditions with " + X + " channel sound found (channels options: " + Object.keys(ot.channels) + ")"), Q;
                                                } else if ((!W || mt) && Mt && 0 === ot.channels[2]) return It(st, "no renditions with stereo sound found"), Q;
                                                return ot.minHeight > ge ? (It(st, "min resolution of " + ot.minHeight + " > maximum of " + ge), Q) : ot.minFramerate > te ? (It(st, "min framerate of " + ot.minFramerate + " > maximum of " + te), Q) : vt.some(function (Ar) {
                                                    return ot.videoRanges[Ar] > 0;
                                                }) ? ot.maxScore < _t ? (It(st, "max score of " + ot.maxScore + " < selected max of " + _t), Q) : Q && (Re(st) >= Re(Q) || ot.fragmentError > et[Q].fragmentError) ? Q : (_t = ot.maxScore, st) : (It(st, "no variants with VIDEO-RANGE of " + JSON.stringify(vt) + " found"), Q);
                                            }, void 0),
                                            videoRanges: vt,
                                            preferHDR: $t,
                                            minFramerate: pt,
                                            minBitrate: Et
                                        };
                                    }(this.codecTiers || (this.codecTiers = v.slice(e, r + 1).reduce(function (q, J) {
                                        if (!J.codecSet) return q;
                                        var W = q[J.codecSet];
                                        W || (q[J.codecSet] = W = {
                                            minBitrate: 1 / 0,
                                            minHeight: 1 / 0,
                                            minFramerate: 1 / 0,
                                            maxScore: 0,
                                            videoRanges: {
                                                SDR: 0
                                            },
                                            channels: {
                                                2: 0
                                            },
                                            hasDefaultAudio: !J.audioGroups,
                                            fragmentError: 0
                                        }), W.minBitrate = Math.min(W.minBitrate, J.bitrate);
                                        var mt = Math.min(J.height, J.width);
                                        return W.minHeight = Math.min(W.minHeight, mt), W.minFramerate = Math.min(W.minFramerate, J.frameRate), W.maxScore = Math.max(W.maxScore, J.score), W.fragmentError += J.fragmentError, W.videoRanges[J.videoRange] = (W.videoRanges[J.videoRange] || 0) + 1, q;
                                    }, {})), x, t, D, C),
                                    B = P.videoRanges;
                                R = P.codecSet, x = P.preferHDR ? B[B.length - 1] : B[0], w = P.minFramerate, t = Math.max(t, P.minBitrate), A.log("[abr] picked start tier " + JSON.stringify(P));
                            } else R = b === null || b === void 0 ? void 0 : b.codecSet, x = b === null || b === void 0 ? void 0 : b.videoRange;
                            for (var H, V = g ? g.duration : m ? m.duration : 0, $ = this.bwEstimator.getEstimateTTFB() / 1e3, nt = [], rt = function rt() {
                                var et,
                                    z = v[tt],
                                    Z = tt > c;
                                if (!z) return 0;
                                if (R && z.codecSet !== R || x && z.videoRange !== x || Z && w > z.frameRate || !Z && w > 0 && w < z.frameRate || z.supportedResult && (null == (et = z.supportedResult.decodingInfoResults) || !et[0].smooth)) return nt.push(tt), 0;
                                var j,
                                    q = z.details,
                                    J = (g ? q === null || q === void 0 ? void 0 : q.partTarget : q === null || q === void 0 ? void 0 : q.averagetargetduration) || V,
                                    X = V && i >= 2 * V && 0 === n ? v[tt].averageBitrate : v[tt].maxBitrate,
                                    W = u.getTimeToLoadFrag($, j = Z ? l * t : o * t, X * J, void 0 === q);
                                if (j >= X && (tt === f || 0 === z.loadError && 0 === z.fragmentError) && (W <= $ || !N(W) || L && !u.bitrateTestDelay || W < h)) {
                                    var mt = u.forcedAutoLevel;
                                    return tt === S || -1 !== mt && mt === S || (nt.length && A.trace("[abr] Skipped level(s) " + nt.join(",") + " of " + r + ' max with CODECS and VIDEO-RANGE:"' + v[nt[0]].codecs + '" ' + v[nt[0]].videoRange + '; not compatible with "' + b.codecs + '" ' + x), A.info("[abr] switch candidate:" + c + "->" + tt + " adjustedbw(" + Math.round(j) + ")-bitrate=" + Math.round(j - X) + " ttfb:" + $.toFixed(1) + " avgDuration:" + J.toFixed(1) + " maxFetchDuration:" + h.toFixed(1) + " fetchDuration:" + W.toFixed(1) + " firstSelection:" + k + " codecSet:" + R + " videoRange:" + x + " hls.loadLevel:" + S)), k && (u.firstSelection = tt), {
                                        v: tt
                                    };
                                }
                            }, tt = r; tt >= e; tt--) if (0 !== (H = rt()) && H) return H.v;
                            return -1;
                        }, ct(s, [{
                            key: "firstAutoLevel",
                            get: function get() {
                                var t = this.hls,
                                    e = t.maxAutoLevel,
                                    r = t.minAutoLevel,
                                    i = this.getBwEstimate(),
                                    o = this.findBestLevel(i, r, e, 0, this.hls.config.maxStarvationDelay, 1, 1);
                                if (o > -1) return o;
                                var l = this.hls.firstLevel,
                                    d = Math.min(Math.max(l, r), e);
                                return A.warn("[abr] Could not find best starting auto level. Defaulting to first in playlist " + l + " clamped to " + d), d;
                            }
                        }, {
                            key: "forcedAutoLevel",
                            get: function get() {
                                return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
                            }
                        }, {
                            key: "nextAutoLevel",
                            get: function get() {
                                var t = this.forcedAutoLevel,
                                    e = this.bwEstimator.canEstimate(),
                                    r = this.lastLoadedFragLevel > -1;
                                if (!(-1 === t || e && r && this.nextAutoLevelKey !== this.getAutoLevelKey())) return t;
                                var i = e && r ? this.getNextABRAutoLevel() : this.firstAutoLevel;
                                if (-1 !== t) {
                                    var n = this.hls.levels;
                                    if (n.length > Math.max(t, i) && n[t].loadError <= n[i].loadError) return t;
                                }
                                return this._nextAutoLevel = i, this.nextAutoLevelKey = this.getAutoLevelKey(), i;
                            },
                            set: function set(t) {
                                var e = this.hls,
                                    r = e.maxAutoLevel,
                                    n = Math.min(Math.max(t, e.minAutoLevel), r);
                                this._nextAutoLevel !== n && (this.nextAutoLevelKey = "", this._nextAutoLevel = n);
                            }
                        }]), s;
                    }(),
                    rn = {
                        length: 0,
                        start: function start() {
                            return 0;
                        },
                        end: function end() {
                            return 0;
                        }
                    },
                    ut = function () {
                        function s() {
                        }

                        return s.isBuffered = function (a, t) {
                            try {
                                if (a) for (var e = s.getBuffered(a), r = 0; r < e.length; r++) if (t >= e.start(r) && t <= e.end(r)) return !0;
                            } catch (_unused7) {
                            }
                            return !1;
                        }, s.bufferInfo = function (a, t, e) {
                            try {
                                if (a) {
                                    var r,
                                        i = s.getBuffered(a),
                                        n = [];
                                    for (r = 0; r < i.length; r++) n.push({
                                        start: i.start(r),
                                        end: i.end(r)
                                    });
                                    return this.bufferedInfo(n, t, e);
                                }
                            } catch (_unused8) {
                            }
                            return {
                                len: 0,
                                start: t,
                                end: t,
                                nextStart: void 0
                            };
                        }, s.bufferedInfo = function (a, t, e) {
                            t = Math.max(0, t), a.sort(function (g, y) {
                                return g.start - y.start || y.end - g.end;
                            });
                            var r = [];
                            if (e) for (var i = 0; i < a.length; i++) {
                                var n = r.length;
                                if (n) {
                                    var o = r[n - 1].end;
                                    a[i].start - o < e ? a[i].end > o && (r[n - 1].end = a[i].end) : r.push(a[i]);
                                } else r.push(a[i]);
                            } else r = a;
                            for (var l, d = 0, u = t, h = t, f = 0; f < r.length; f++) {
                                var c = r[f].start,
                                    m = r[f].end;
                                if (t + e >= c && t < m) u = c, d = (h = m) - t; else if (t + e < c) {
                                    l = c;
                                    break;
                                }
                            }
                            return {
                                len: d,
                                start: u || 0,
                                end: h || 0,
                                nextStart: l
                            };
                        }, s.getBuffered = function (a) {
                            try {
                                return a.buffered;
                            } catch (t) {
                                return A.log("failed to get media.buffered", t), rn;
                            }
                        }, s;
                    }(),
                    an = function () {
                        function s(t) {
                            this.buffers = void 0, this.queues = {
                                video: [],
                                audio: [],
                                audiovideo: []
                            }, this.buffers = t;
                        }

                        var a = s.prototype;
                        return a.append = function (t, e, r) {
                            var i = this.queues[e];
                            i.push(t), 1 !== i.length || r || this.executeNext(e);
                        }, a.insertAbort = function (t, e) {
                            this.queues[e].unshift(t), this.executeNext(e);
                        }, a.appendBlocker = function (t) {
                            var e,
                                r = new Promise(function (n) {
                                    e = n;
                                });
                            return this.append({
                                execute: e,
                                onStart: function onStart() {
                                },
                                onComplete: function onComplete() {
                                },
                                onError: function onError() {
                                }
                            }, t), r;
                        }, a.executeNext = function (t) {
                            var e = this.queues[t];
                            if (e.length) {
                                var r = e[0];
                                try {
                                    r.execute();
                                } catch (n) {
                                    A.warn('[buffer-operation-queue]: Exception executing "' + t + '" SourceBuffer operation: ' + n), r.onError(n);
                                    var i = this.buffers[t];
                                    null != i && i.updating || this.shiftAndExecuteNext(t);
                                }
                            }
                        }, a.shiftAndExecuteNext = function (t) {
                            this.queues[t].shift(), this.executeNext(t);
                        }, a.current = function (t) {
                            return this.queues[t][0];
                        }, s;
                    }(),
                    Ai = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/,
                    nn = function () {
                        function s(t) {
                            var e = this;
                            this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendSource = void 0, this.appendErrors = {
                                audio: 0,
                                video: 0,
                                audiovideo: 0
                            }, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this.log = void 0, this.warn = void 0, this.error = void 0, this._onEndStreaming = function (n) {
                                e.hls && e.hls.pauseBuffering();
                            }, this._onStartStreaming = function (n) {
                                e.hls && e.hls.resumeBuffering();
                            }, this._onMediaSourceOpen = function () {
                                var n = e.media,
                                    o = e.mediaSource;
                                e.log("Media source opened"), n && (n.removeEventListener("emptied", e._onMediaEmptied), e.updateMediaElementDuration(), e.hls.trigger(E.MEDIA_ATTACHED, {
                                    media: n,
                                    mediaSource: o
                                })), o && o.removeEventListener("sourceopen", e._onMediaSourceOpen), e.checkPendingTracks();
                            }, this._onMediaSourceClose = function () {
                                e.log("Media source closed");
                            }, this._onMediaSourceEnded = function () {
                                e.log("Media source ended");
                            }, this._onMediaEmptied = function () {
                                var n = e.mediaSrc,
                                    o = e._objectUrl;
                                n !== o && A.error("Media element src was set while attaching MediaSource (" + o + " > " + n + ")");
                            }, this.hls = t;
                            var r,
                                i = "[buffer-controller]";
                            this.appendSource = (r = Vt(t.config.preferManagedMediaSource), (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && r === self.ManagedMediaSource), this.log = A.log.bind(A, i), this.warn = A.warn.bind(A, i), this.error = A.error.bind(A, i), this._initSourceBuffer(), this.registerListeners();
                        }

                        var a = s.prototype;
                        return a.hasSourceTypes = function () {
                            return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
                        }, a.destroy = function () {
                            this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null, this.hls = null;
                        }, a.registerListeners = function () {
                            var t = this.hls;
                            t.on(E.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(E.MANIFEST_LOADING, this.onManifestLoading, this), t.on(E.MANIFEST_PARSED, this.onManifestParsed, this), t.on(E.BUFFER_RESET, this.onBufferReset, this), t.on(E.BUFFER_APPENDING, this.onBufferAppending, this), t.on(E.BUFFER_CODECS, this.onBufferCodecs, this), t.on(E.BUFFER_EOS, this.onBufferEos, this), t.on(E.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(E.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(E.FRAG_PARSED, this.onFragParsed, this), t.on(E.FRAG_CHANGED, this.onFragChanged, this);
                        }, a.unregisterListeners = function () {
                            var t = this.hls;
                            t.off(E.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(E.MANIFEST_LOADING, this.onManifestLoading, this), t.off(E.MANIFEST_PARSED, this.onManifestParsed, this), t.off(E.BUFFER_RESET, this.onBufferReset, this), t.off(E.BUFFER_APPENDING, this.onBufferAppending, this), t.off(E.BUFFER_CODECS, this.onBufferCodecs, this), t.off(E.BUFFER_EOS, this.onBufferEos, this), t.off(E.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(E.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(E.FRAG_PARSED, this.onFragParsed, this), t.off(E.FRAG_CHANGED, this.onFragChanged, this);
                        }, a._initSourceBuffer = function () {
                            this.sourceBuffer = {}, this.operationQueue = new an(this.sourceBuffer), this.listeners = {
                                audio: [],
                                video: [],
                                audiovideo: []
                            }, this.appendErrors = {
                                audio: 0,
                                video: 0,
                                audiovideo: 0
                            }, this.lastMpegAudioChunk = null;
                        }, a.onManifestLoading = function () {
                            this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null;
                        }, a.onManifestParsed = function (t, e) {
                            this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 1, this.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
                        }, a.onMediaAttaching = function (t, e) {
                            var u,
                                h,
                                f,
                                r = this.media = e.media,
                                i = Vt(this.appendSource);
                            if (r && i) {
                                var n,
                                    o = this.mediaSource = new i();
                                this.log("created media source: " + (null == (n = o.constructor) ? void 0 : n.name)), o.addEventListener("sourceopen", this._onMediaSourceOpen), o.addEventListener("sourceended", this._onMediaSourceEnded), o.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (o.addEventListener("startstreaming", this._onStartStreaming), o.addEventListener("endstreaming", this._onEndStreaming));
                                var l = this._objectUrl = self.URL.createObjectURL(o);
                                if (this.appendSource) try {
                                    r.removeAttribute("src");
                                    var d = self.ManagedMediaSource;
                                    r.disableRemotePlayback = r.disableRemotePlayback || d && o instanceof d, bi(r), u = r, h = l, (f = self.document.createElement("source")).type = "video/mp4", f.src = h, u.appendChild(f), r.load();
                                } catch (_unused9) {
                                    r.src = l;
                                } else r.src = l;
                                r.addEventListener("emptied", this._onMediaEmptied);
                            }
                        }, a.onMediaDetaching = function () {
                            var t = this.media,
                                e = this.mediaSource,
                                r = this._objectUrl;
                            if (e) {
                                if (this.log("media source detaching"), "open" === e.readyState) try {
                                    e.endOfStream();
                                } catch (i) {
                                    this.warn("onMediaDetaching: " + i.message + " while calling endOfStream");
                                }
                                this.onBufferReset(), e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (e.removeEventListener("startstreaming", this._onStartStreaming), e.removeEventListener("endstreaming", this._onEndStreaming)), t && (t.removeEventListener("emptied", this._onMediaEmptied), r && self.URL.revokeObjectURL(r), this.mediaSrc === r ? (t.removeAttribute("src"), this.appendSource && bi(t), t.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
                            }
                            this.hls.trigger(E.MEDIA_DETACHED, void 0);
                        }, a.onBufferReset = function () {
                            var t = this;
                            this.getSourceBufferTypes().forEach(function (e) {
                                t.resetBuffer(e);
                            }), this._initSourceBuffer(), this.hls.resumeBuffering();
                        }, a.resetBuffer = function (t) {
                            var e = this.sourceBuffer[t];
                            try {
                                var r;
                                e && (this.removeBufferListeners(t), this.sourceBuffer[t] = void 0, null != (r = this.mediaSource) && r.sourceBuffers.length && this.mediaSource.removeSourceBuffer(e));
                            } catch (i) {
                                this.warn("onBufferReset " + t, i);
                            }
                        }, a.onBufferCodecs = function (t, e) {
                            var r = this,
                                i = this.getSourceBufferTypes().length,
                                n = Object.keys(e);
                            if (n.forEach(function (l) {
                                if (i) {
                                    var d = r.tracks[l];
                                    if (d && "function" == typeof d.buffer.changeType) {
                                        var u,
                                            h = e[l],
                                            f = h.id,
                                            c = h.codec,
                                            m = h.levelCodec,
                                            g = h.container,
                                            y = h.metadata,
                                            v = Zr(d.codec, d.levelCodec),
                                            p = v === null || v === void 0 ? void 0 : v.replace(Ai, "$1"),
                                            S = Zr(c, m),
                                            T = null == (u = S) ? void 0 : u.replace(Ai, "$1");
                                        S && p !== T && ("audio" === l.slice(0, 5) && (S = Ae(S, r.appendSource)), r.appendChangeType(l, g + ";codecs=" + S), r.log("switching codec " + v + " to " + S), r.tracks[l] = {
                                            buffer: d.buffer,
                                            codec: c,
                                            container: g,
                                            levelCodec: m,
                                            metadata: y,
                                            id: f
                                        });
                                    }
                                } else r.pendingTracks[l] = e[l];
                            }), !i) {
                                var o = Math.max(this.bufferCodecEventsExpected - 1, 0);
                                this.bufferCodecEventsExpected !== o && (this.log(o + " bufferCodec event(s) expected " + n.join(",")), this.bufferCodecEventsExpected = o), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks();
                            }
                        }, a.appendChangeType = function (t, e) {
                            var r = this,
                                i = this.operationQueue,
                                n = {
                                    execute: function execute() {
                                        var o = r.sourceBuffer[t];
                                        o && (r.log("changing " + t + " sourceBuffer type to " + e), o.changeType(e)), i.shiftAndExecuteNext(t);
                                    },
                                    onStart: function onStart() {
                                    },
                                    onComplete: function onComplete() {
                                    },
                                    onError: function onError(o) {
                                        r.warn("Failed to change " + t + " SourceBuffer type", o);
                                    }
                                };
                            i.append(n, t, !!this.pendingTracks[t]);
                        }, a.onBufferAppending = function (t, e) {
                            var r = this,
                                i = this.hls,
                                n = this.operationQueue,
                                o = this.tracks,
                                l = e.data,
                                d = e.type,
                                u = e.frag,
                                h = e.part,
                                f = e.chunkMeta,
                                c = f.buffering[d],
                                m = self.performance.now();
                            c.start = m;
                            var g = u.stats.buffering,
                                y = h ? h.stats.buffering : null;
                            0 === g.start && (g.start = m), y && 0 === y.start && (y.start = m);
                            var v = o.audio,
                                p = !1;
                            "audio" === d && "audio/mpeg" === (v === null || v === void 0 ? void 0 : v.container) && (p = !this.lastMpegAudioChunk || 1 === f.id || this.lastMpegAudioChunk.sn !== f.sn, this.lastMpegAudioChunk = f);
                            var S = u.start;
                            n.append({
                                execute: function execute() {
                                    if (c.executeStart = self.performance.now(), p) {
                                        var R = r.sourceBuffer[d];
                                        if (R) {
                                            var b = S - R.timestampOffset;
                                            Math.abs(b) >= .1 && (r.log("Updating audio SourceBuffer timestampOffset to " + S + " (delta: " + b + ") sn: " + u.sn + ")"), R.timestampOffset = S);
                                        }
                                    }
                                    r.appendExecutor(l, d);
                                },
                                onStart: function onStart() {
                                },
                                onComplete: function onComplete() {
                                    var R = self.performance.now();
                                    c.executeEnd = c.end = R, 0 === g.first && (g.first = R), y && 0 === y.first && (y.first = R);
                                    var b = r.sourceBuffer,
                                        L = {};
                                    for (var k in b) L[k] = ut.getBuffered(b[k]);
                                    r.appendErrors[d] = 0, "audio" === d || "video" === d ? r.appendErrors.audiovideo = 0 : (r.appendErrors.audio = 0, r.appendErrors.video = 0), r.hls.trigger(E.BUFFER_APPENDED, {
                                        type: d,
                                        frag: u,
                                        part: h,
                                        chunkMeta: f,
                                        parent: u.type,
                                        timeRanges: L
                                    });
                                },
                                onError: function onError(R) {
                                    var b = {
                                        type: Y.MEDIA_ERROR,
                                        parent: u.type,
                                        details: _.BUFFER_APPEND_ERROR,
                                        sourceBufferName: d,
                                        frag: u,
                                        part: h,
                                        chunkMeta: f,
                                        error: R,
                                        err: R,
                                        fatal: !1
                                    };
                                    if (R.code === DOMException.QUOTA_EXCEEDED_ERR) b.details = _.BUFFER_FULL_ERROR; else {
                                        var L = ++r.appendErrors[d];
                                        b.details = _.BUFFER_APPEND_ERROR, r.warn("Failed " + L + "/" + i.config.appendErrorMaxRetry + ' times to append segment in "' + d + '" sourceBuffer'), L >= i.config.appendErrorMaxRetry && (b.fatal = !0);
                                    }
                                    i.trigger(E.ERROR, b);
                                }
                            }, d, !!this.pendingTracks[d]);
                        }, a.onBufferFlushing = function (t, e) {
                            var r = this,
                                i = this.operationQueue,
                                n = function n(o) {
                                    return {
                                        execute: r.removeExecutor.bind(r, o, e.startOffset, e.endOffset),
                                        onStart: function onStart() {
                                        },
                                        onComplete: function onComplete() {
                                            r.hls.trigger(E.BUFFER_FLUSHED, {
                                                type: o
                                            });
                                        },
                                        onError: function onError(l) {
                                            r.warn("Failed to remove from " + o + " SourceBuffer", l);
                                        }
                                    };
                                };
                            e.type ? i.append(n(e.type), e.type) : this.getSourceBufferTypes().forEach(function (o) {
                                i.append(n(o), o);
                            });
                        }, a.onFragParsed = function (t, e) {
                            var r = this,
                                i = e.frag,
                                n = e.part,
                                o = [],
                                l = n ? n.elementaryStreams : i.elementaryStreams;
                            l[Ve] ? o.push("audiovideo") : (l[Tt] && o.push("audio"), l[bt] && o.push("video")), 0 === o.length && this.warn("Fragments must have at least one ElementaryStreamType set. type: " + i.type + " level: " + i.level + " sn: " + i.sn), this.blockBuffers(function () {
                                var d = self.performance.now();
                                i.stats.buffering.end = d, n && (n.stats.buffering.end = d), r.hls.trigger(E.FRAG_BUFFERED, {
                                    frag: i,
                                    part: n,
                                    stats: n ? n.stats : i.stats,
                                    id: i.type
                                });
                            }, o);
                        }, a.onFragChanged = function (t, e) {
                            this.trimBuffers();
                        }, a.onBufferEos = function (t, e) {
                            var r = this;
                            this.getSourceBufferTypes().reduce(function (i, n) {
                                var o = r.sourceBuffer[n];
                                return !o || e.type && e.type !== n || (o.ending = !0, o.ended || (o.ended = !0, r.log(n + " sourceBuffer now EOS"))), i && !(o && !o.ended);
                            }, !0) && (this.log("Queueing mediaSource.endOfStream()"), this.blockBuffers(function () {
                                r.getSourceBufferTypes().forEach(function (n) {
                                    var o = r.sourceBuffer[n];
                                    o && (o.ending = !1);
                                });
                                var i = r.mediaSource;
                                i && "open" === i.readyState ? (r.log("Calling mediaSource.endOfStream()"), i.endOfStream()) : i && r.log("Could not call mediaSource.endOfStream(). mediaSource.readyState: " + i.readyState);
                            }));
                        }, a.onLevelUpdated = function (t, e) {
                            var r = e.details;
                            r.fragments.length && (this.details = r, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
                        }, a.trimBuffers = function () {
                            var t = this.hls,
                                e = this.details,
                                r = this.media;
                            if (r && null !== e && this.getSourceBufferTypes().length) {
                                var i = t.config,
                                    n = r.currentTime,
                                    o = e.levelTargetDuration,
                                    l = e.live && null !== i.liveBackBufferLength ? i.liveBackBufferLength : i.backBufferLength;
                                if (N(l) && l > 0) {
                                    var d = Math.max(l, o),
                                        u = Math.floor(n / o) * o - d;
                                    this.flushBackBuffer(n, o, u);
                                }
                                if (N(i.frontBufferFlushThreshold) && i.frontBufferFlushThreshold > 0) {
                                    var h = Math.max(i.maxBufferLength, i.frontBufferFlushThreshold),
                                        f = Math.max(h, o),
                                        c = Math.floor(n / o) * o + f;
                                    this.flushFrontBuffer(n, o, c);
                                }
                            }
                        }, a.flushBackBuffer = function (t, e, r) {
                            var i = this,
                                n = this.details,
                                o = this.sourceBuffer;
                            this.getSourceBufferTypes().forEach(function (l) {
                                var d = o[l];
                                if (d) {
                                    var u = ut.getBuffered(d);
                                    if (u.length > 0 && r > u.start(0)) {
                                        if (i.hls.trigger(E.BACK_BUFFER_REACHED, {
                                            bufferEnd: r
                                        }), null != n && n.live) i.hls.trigger(E.LIVE_BACK_BUFFER_REACHED, {
                                            bufferEnd: r
                                        }); else if (d.ended && u.end(u.length - 1) - t < 2 * e) return void i.log("Cannot flush " + l + " back buffer while SourceBuffer is in ended state");
                                        i.hls.trigger(E.BUFFER_FLUSHING, {
                                            startOffset: 0,
                                            endOffset: r,
                                            type: l
                                        });
                                    }
                                }
                            });
                        }, a.flushFrontBuffer = function (t, e, r) {
                            var i = this,
                                n = this.sourceBuffer;
                            this.getSourceBufferTypes().forEach(function (o) {
                                var l = n[o];
                                if (l) {
                                    var d = ut.getBuffered(l),
                                        u = d.length;
                                    if (u < 2) return;
                                    var h = d.start(u - 1),
                                        f = d.end(u - 1);
                                    if (r > h || t >= h && t <= f) return;
                                    if (l.ended && t - f < 2 * e) return void i.log("Cannot flush " + o + " front buffer while SourceBuffer is in ended state");
                                    i.hls.trigger(E.BUFFER_FLUSHING, {
                                        startOffset: h,
                                        endOffset: 1 / 0,
                                        type: o
                                    });
                                }
                            });
                        }, a.updateMediaElementDuration = function () {
                            if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
                                var t = this.details,
                                    e = this.hls,
                                    i = this.mediaSource,
                                    n = t.fragments[0].start + t.totalduration,
                                    o = this.media.duration,
                                    l = N(i.duration) ? i.duration : 0;
                                t.live && e.config.liveDurationInfinity ? (i.duration = 1 / 0, this.updateSeekableRange(t)) : (n > l && n > o || !N(o)) && (this.log("Updating Media Source duration to " + n.toFixed(3)), i.duration = n);
                            }
                        }, a.updateSeekableRange = function (t) {
                            var e = this.mediaSource,
                                r = t.fragments;
                            if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                                var i = Math.max(0, r[0].start),
                                    n = Math.max(i, i + t.totalduration);
                                this.log("Media Source duration is set to " + e.duration + ". Setting seekable range to " + i + "-" + n + "."), e.setLiveSeekableRange(i, n);
                            }
                        }, a.checkPendingTracks = function () {
                            var t = this.bufferCodecEventsExpected,
                                e = this.operationQueue,
                                r = this.pendingTracks,
                                i = Object.keys(r).length;
                            if (i && (!t || 2 === i || "audiovideo" in r)) {
                                this.createSourceBuffers(r), this.pendingTracks = {};
                                var n = this.getSourceBufferTypes();
                                if (n.length) this.hls.trigger(E.BUFFER_CREATED, {
                                    tracks: this.tracks
                                }), n.forEach(function (l) {
                                    e.executeNext(l);
                                }); else {
                                    var o = new Error("could not create source buffer for media codec(s)");
                                    this.hls.trigger(E.ERROR, {
                                        type: Y.MEDIA_ERROR,
                                        details: _.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                                        fatal: !0,
                                        error: o,
                                        reason: o.message
                                    });
                                }
                            }
                        }, a.createSourceBuffers = function (t) {
                            var e = this,
                                r = this.sourceBuffer,
                                i = this.mediaSource;
                            if (!i) throw Error("createSourceBuffers called when mediaSource was null");
                            var n = function n(l) {
                                if (!r[l]) {
                                    var d,
                                        u = t[l];
                                    if (!u) throw Error("source buffer exists for track " + l + ", however track does not");
                                    var h = -1 === (null == (d = u.levelCodec) ? void 0 : d.indexOf(",")) ? u.levelCodec : u.codec;
                                    h && "audio" === l.slice(0, 5) && (h = Ae(h, e.appendSource));
                                    var f = u.container + ";codecs=" + h;
                                    e.log("creating sourceBuffer(" + f + ")");
                                    try {
                                        var c = r[l] = i.addSourceBuffer(f),
                                            m = l;
                                        e.addBufferListener(m, "updatestart", e._onSBUpdateStart), e.addBufferListener(m, "updateend", e._onSBUpdateEnd), e.addBufferListener(m, "error", e._onSBUpdateError), e.appendSource && e.addBufferListener(m, "bufferedchange", function (g, y) {
                                            var v = y.removedRanges;
                                            null != v && v.length && e.hls.trigger(E.BUFFER_FLUSHED, {
                                                type: l
                                            });
                                        }), e.tracks[l] = {
                                            buffer: c,
                                            codec: h,
                                            container: u.container,
                                            levelCodec: u.levelCodec,
                                            metadata: u.metadata,
                                            id: u.id
                                        };
                                    } catch (g) {
                                        e.error("error while trying to add sourceBuffer: " + g.message), e.hls.trigger(E.ERROR, {
                                            type: Y.MEDIA_ERROR,
                                            details: _.BUFFER_ADD_CODEC_ERROR,
                                            fatal: !1,
                                            error: g,
                                            sourceBufferName: l,
                                            mimeType: f
                                        });
                                    }
                                }
                            };
                            for (var o in t) n(o);
                        }, a._onSBUpdateStart = function (t) {
                            this.operationQueue.current(t).onStart();
                        }, a._onSBUpdateEnd = function (t) {
                            var e;
                            if ("closed" !== (null == (e = this.mediaSource) ? void 0 : e.readyState)) {
                                var r = this.operationQueue;
                                r.current(t).onComplete(), r.shiftAndExecuteNext(t);
                            } else this.resetBuffer(t);
                        }, a._onSBUpdateError = function (t, e) {
                            var r,
                                i = new Error(t + " SourceBuffer error. MediaSource readyState: " + (null == (r = this.mediaSource) ? void 0 : r.readyState));
                            this.error("" + i, e), this.hls.trigger(E.ERROR, {
                                type: Y.MEDIA_ERROR,
                                details: _.BUFFER_APPENDING_ERROR,
                                sourceBufferName: t,
                                error: i,
                                fatal: !1
                            });
                            var n = this.operationQueue.current(t);
                            n && n.onError(i);
                        }, a.removeExecutor = function (t, e, r) {
                            var i = this.media,
                                n = this.mediaSource,
                                o = this.operationQueue,
                                l = this.sourceBuffer[t];
                            if (!i || !n || !l) return this.warn("Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), void o.shiftAndExecuteNext(t);
                            var d = N(i.duration) ? i.duration : 1 / 0,
                                u = N(n.duration) ? n.duration : 1 / 0,
                                h = Math.max(0, e),
                                f = Math.min(r, d, u);
                            f > h && (!l.ending || l.ended) ? (l.ended = !1, this.log("Removing [" + h + "," + f + "] from the " + t + " SourceBuffer"), l.remove(h, f)) : o.shiftAndExecuteNext(t);
                        }, a.appendExecutor = function (t, e) {
                            var r = this.sourceBuffer[e];
                            if (r) r.ended = !1, r.appendBuffer(t); else if (!this.pendingTracks[e]) throw new Error("Attempting to append to the " + e + " SourceBuffer, but it does not exist");
                        }, a.blockBuffers = function (t, e) {
                            var r = this;
                            if (void 0 === e && (e = this.getSourceBufferTypes()), !e.length) return this.log("Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve().then(t);
                            var i = this.operationQueue,
                                n = e.map(function (o) {
                                    return i.appendBlocker(o);
                                });
                            Promise.all(n).then(function () {
                                t(), e.forEach(function (o) {
                                    var l = r.sourceBuffer[o];
                                    null != l && l.updating || i.shiftAndExecuteNext(o);
                                });
                            });
                        }, a.getSourceBufferTypes = function () {
                            return Object.keys(this.sourceBuffer);
                        }, a.addBufferListener = function (t, e, r) {
                            var i = this.sourceBuffer[t];
                            if (i) {
                                var n = r.bind(this, t);
                                this.listeners[t].push({
                                    event: e,
                                    listener: n
                                }), i.addEventListener(e, n);
                            }
                        }, a.removeBufferListeners = function (t) {
                            var e = this.sourceBuffer[t];
                            e && this.listeners[t].forEach(function (r) {
                                e.removeEventListener(r.event, r.listener);
                            });
                        }, ct(s, [{
                            key: "mediaSrc",
                            get: function get() {
                                var t,
                                    e,
                                    r = (null == (t = this.media) || null == (e = t.querySelector) ? void 0 : e.call(t, "source")) || this.media;
                                return r === null || r === void 0 ? void 0 : r.src;
                            }
                        }]), s;
                    }();

                function bi(s) {
                    var a = s.querySelectorAll("source");
                    [].slice.call(a).forEach(function (t) {
                        s.removeChild(t);
                    });
                }

                var sn = function () {
                        function s(t) {
                            this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
                        }

                        var a = s.prototype;
                        return a.setStreamController = function (t) {
                            this.streamController = t;
                        }, a.destroy = function () {
                            this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
                        }, a.registerListeners = function () {
                            var t = this.hls;
                            t.on(E.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(E.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(E.MANIFEST_PARSED, this.onManifestParsed, this), t.on(E.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(E.BUFFER_CODECS, this.onBufferCodecs, this), t.on(E.MEDIA_DETACHING, this.onMediaDetaching, this);
                        }, a.unregisterListener = function () {
                            var t = this.hls;
                            t.off(E.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(E.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(E.MANIFEST_PARSED, this.onManifestParsed, this), t.off(E.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(E.BUFFER_CODECS, this.onBufferCodecs, this), t.off(E.MEDIA_DETACHING, this.onMediaDetaching, this);
                        }, a.onFpsDropLevelCapping = function (t, e) {
                            var r = this.hls.levels[e.droppedLevel];
                            this.isLevelAllowed(r) && this.restrictedLevels.push({
                                bitrate: r.bitrate,
                                height: r.height,
                                width: r.width
                            });
                        }, a.onMediaAttaching = function (t, e) {
                            this.media = e.media instanceof HTMLVideoElement ? e.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
                        }, a.onManifestParsed = function (t, e) {
                            var r = this.hls;
                            this.restrictedLevels = [], this.firstLevel = e.firstLevel, r.config.capLevelToPlayerSize && e.video && this.startCapping();
                        }, a.onLevelsUpdated = function (t, e) {
                            this.timer && N(this.autoLevelCapping) && this.detectPlayerSize();
                        }, a.onBufferCodecs = function (t, e) {
                            this.hls.config.capLevelToPlayerSize && e.video && this.startCapping();
                        }, a.onMediaDetaching = function () {
                            this.stopCapping();
                        }, a.detectPlayerSize = function () {
                            if (this.media) {
                                if (this.mediaHeight <= 0 || this.mediaWidth <= 0) return void (this.clientRect = null);
                                var t = this.hls.levels;
                                if (t.length) {
                                    var e = this.hls,
                                        r = this.getMaxLevel(t.length - 1);
                                    r !== this.autoLevelCapping && A.log("Setting autoLevelCapping to " + r + ": " + t[r].height + "p@" + t[r].bitrate + " for media " + this.mediaWidth + "x" + this.mediaHeight), e.autoLevelCapping = r, e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping;
                                }
                            }
                        }, a.getMaxLevel = function (t) {
                            var e = this,
                                r = this.hls.levels;
                            if (!r.length) return -1;
                            var i = r.filter(function (n, o) {
                                return e.isLevelAllowed(n) && o <= t;
                            });
                            return this.clientRect = null, s.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight);
                        }, a.startCapping = function () {
                            this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
                        }, a.stopCapping = function () {
                            this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
                        }, a.getDimensions = function () {
                            if (this.clientRect) return this.clientRect;
                            var t = this.media,
                                e = {
                                    width: 0,
                                    height: 0
                                };
                            if (t) {
                                var r = t.getBoundingClientRect();
                                e.width = r.width, e.height = r.height, e.width || e.height || (e.width = r.right - r.left || t.width || 0, e.height = r.bottom - r.top || t.height || 0);
                            }
                            return this.clientRect = e, e;
                        }, a.isLevelAllowed = function (t) {
                            return !this.restrictedLevels.some(function (e) {
                                return t.bitrate === e.bitrate && t.width === e.width && t.height === e.height;
                            });
                        }, s.getMaxLevelByMediaSize = function (t, e, r) {
                            if (null == t || !t.length) return -1;
                            for (var i, n, o = t.length - 1, l = Math.max(e, r), d = 0; d < t.length; d += 1) {
                                var u = t[d];
                                if ((u.width >= l || u.height >= l) && (i = u, !(n = t[d + 1]) || i.width !== n.width || i.height !== n.height)) {
                                    o = d;
                                    break;
                                }
                            }
                            return o;
                        }, ct(s, [{
                            key: "mediaWidth",
                            get: function get() {
                                return this.getDimensions().width * this.contentScaleFactor;
                            }
                        }, {
                            key: "mediaHeight",
                            get: function get() {
                                return this.getDimensions().height * this.contentScaleFactor;
                            }
                        }, {
                            key: "contentScaleFactor",
                            get: function get() {
                                var t = 1;
                                if (!this.hls.config.ignoreDevicePixelRatio) try {
                                    t = self.devicePixelRatio;
                                } catch (_unused10) {
                                }
                                return t;
                            }
                        }]), s;
                    }(),
                    on = function () {
                        function s(t) {
                            this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t, this.registerListeners();
                        }

                        var a = s.prototype;
                        return a.setStreamController = function (t) {
                            this.streamController = t;
                        }, a.registerListeners = function () {
                            this.hls.on(E.MEDIA_ATTACHING, this.onMediaAttaching, this);
                        }, a.unregisterListeners = function () {
                            this.hls.off(E.MEDIA_ATTACHING, this.onMediaAttaching, this);
                        }, a.destroy = function () {
                            this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
                        }, a.onMediaAttaching = function (t, e) {
                            var r = this.hls.config;
                            if (r.capLevelOnFPSDrop) {
                                var i = e.media instanceof self.HTMLVideoElement ? e.media : null;
                                this.media = i, i && "function" == typeof i.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), r.fpsDroppedMonitoringPeriod);
                            }
                        }, a.checkFPS = function (t, e, r) {
                            var i = performance.now();
                            if (e) {
                                if (this.lastTime) {
                                    var o = r - this.lastDroppedFrames,
                                        l = e - this.lastDecodedFrames,
                                        d = 1e3 * o / (i - this.lastTime),
                                        u = this.hls;
                                    if (u.trigger(E.FPS_DROP, {
                                        currentDropped: o,
                                        currentDecoded: l,
                                        totalDroppedFrames: r
                                    }), d > 0 && o > u.config.fpsDroppedMonitoringThreshold * l) {
                                        var h = u.currentLevel;
                                        A.warn("drop FPS ratio greater than max allowed value for currentLevel: " + h), h > 0 && (-1 === u.autoLevelCapping || u.autoLevelCapping >= h) && (u.trigger(E.FPS_DROP_LEVEL_CAPPING, {
                                            level: h -= 1,
                                            droppedLevel: u.currentLevel
                                        }), u.autoLevelCapping = h, this.streamController.nextLevelSwitch());
                                    }
                                }
                                this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = e;
                            }
                        }, a.checkFPSInterval = function () {
                            var t = this.media;
                            if (t) if (this.isVideoPlaybackQualityAvailable) {
                                var e = t.getVideoPlaybackQuality();
                                this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames);
                            } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount);
                        }, s;
                    }(),
                    ln = function () {
                        function s(t) {
                            this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = t, this.log = A.log.bind(A, "[content-steering]:"), this.registerListeners();
                        }

                        var a = s.prototype;
                        return a.registerListeners = function () {
                            var t = this.hls;
                            t.on(E.MANIFEST_LOADING, this.onManifestLoading, this), t.on(E.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(E.MANIFEST_PARSED, this.onManifestParsed, this), t.on(E.ERROR, this.onError, this);
                        }, a.unregisterListeners = function () {
                            var t = this.hls;
                            t && (t.off(E.MANIFEST_LOADING, this.onManifestLoading, this), t.off(E.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(E.MANIFEST_PARSED, this.onManifestParsed, this), t.off(E.ERROR, this.onError, this));
                        }, a.startLoad = function () {
                            if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
                                if (this.updated) {
                                    var t = 1e3 * this.timeToLoad - (performance.now() - this.updated);
                                    if (t > 0) return void this.scheduleRefresh(this.uri, t);
                                }
                                this.loadSteeringManifest(this.uri);
                            }
                        }, a.stopLoad = function () {
                            this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
                        }, a.clearTimeout = function () {
                            -1 !== this.reloadTimer && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
                        }, a.destroy = function () {
                            this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
                        }, a.removeLevel = function (t) {
                            var e = this.levels;
                            e && (this.levels = e.filter(function (r) {
                                return r !== t;
                            }));
                        }, a.onManifestLoading = function () {
                            this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
                        }, a.onManifestLoaded = function (t, e) {
                            var r = e.contentSteering;
                            null !== r && (this.pathwayId = r.pathwayId, this.uri = r.uri, this.started && this.startLoad());
                        }, a.onManifestParsed = function (t, e) {
                            this.audioTracks = e.audioTracks, this.subtitleTracks = e.subtitleTracks;
                        }, a.onError = function (t, e) {
                            var r = e.errorAction;
                            if (2 === (r === null || r === void 0 ? void 0 : r.action) && 1 === r.flags) {
                                var i = this.levels,
                                    n = this.pathwayPriority,
                                    o = this.pathwayId;
                                if (e.context) {
                                    var l = e.context,
                                        d = l.groupId,
                                        u = l.pathwayId;
                                    d && i ? o = this.getPathwayForGroupId(d, l.type, o) : u && (o = u);
                                }
                                o in this.penalizedPathways || (this.penalizedPathways[o] = performance.now()), !n && i && (n = i.reduce(function (f, c) {
                                    return -1 === f.indexOf(c.pathwayId) && f.push(c.pathwayId), f;
                                }, [])), n && n.length > 1 && (this.updatePathwayPriority(n), r.resolved = this.pathwayId !== o), r.resolved || A.warn("Could not resolve " + e.details + ' ("' + e.error.message + '") with content-steering for Pathway: ' + o + " levels: " + (i && i.length) + " priorities: " + JSON.stringify(n) + " penalized: " + JSON.stringify(this.penalizedPathways));
                            }
                        }, a.filterParsedLevels = function (t) {
                            this.levels = t;
                            var e = this.getLevelsForPathway(this.pathwayId);
                            if (0 === e.length) {
                                var r = t[0].pathwayId;
                                this.log("No levels found in Pathway " + this.pathwayId + '. Setting initial Pathway to "' + r + '"'), e = this.getLevelsForPathway(r), this.pathwayId = r;
                            }
                            return e.length !== t.length && this.log("Found " + e.length + "/" + t.length + ' levels in Pathway "' + this.pathwayId + '"'), e;
                        }, a.getLevelsForPathway = function (t) {
                            return null === this.levels ? [] : this.levels.filter(function (e) {
                                return t === e.pathwayId;
                            });
                        }, a.updatePathwayPriority = function (t) {
                            var e;
                            this.pathwayPriority = t;
                            var r = this.penalizedPathways,
                                i = performance.now();
                            Object.keys(r).forEach(function (h) {
                                i - r[h] > 3e5 && delete r[h];
                            });
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                if (!(o in r)) {
                                    if (o === this.pathwayId) return;
                                    var l = this.hls.nextLoadLevel,
                                        d = this.hls.levels[l];
                                    if ((e = this.getLevelsForPathway(o)).length > 0) {
                                        this.log('Setting Pathway to "' + o + '"'), this.pathwayId = o, pi(e), this.hls.trigger(E.LEVELS_UPDATED, {
                                            levels: e
                                        });
                                        var u = this.hls.levels[l];
                                        d && u && this.levels && (u.attrs["STABLE-VARIANT-ID"] !== d.attrs["STABLE-VARIANT-ID"] && u.bitrate !== d.bitrate && this.log("Unstable Pathways change from bitrate " + d.bitrate + " to " + u.bitrate), this.hls.nextLoadLevel = l);
                                        break;
                                    }
                                }
                            }
                        }, a.getPathwayForGroupId = function (t, e, r) {
                            for (var i = this.getLevelsForPathway(r).concat(this.levels || []), n = 0; n < i.length; n++) if (e === wt && i[n].hasAudioGroup(t) || e === xt && i[n].hasSubtitleGroup(t)) return i[n].pathwayId;
                            return r;
                        }, a.clonePathways = function (t) {
                            var e = this,
                                r = this.levels;
                            if (r) {
                                var i = {},
                                    n = {};
                                t.forEach(function (o) {
                                    var l = o.ID,
                                        d = o["BASE-ID"],
                                        u = o["URI-REPLACEMENT"];
                                    if (!r.some(function (f) {
                                        return f.pathwayId === l;
                                    })) {
                                        var h = e.getLevelsForPathway(d).map(function (f) {
                                            var c = new lt(f.attrs);
                                            c["PATHWAY-ID"] = l;
                                            var m = c.AUDIO && c.AUDIO + "_clone_" + l,
                                                g = c.SUBTITLES && c.SUBTITLES + "_clone_" + l;
                                            m && (i[c.AUDIO] = m, c.AUDIO = m), g && (n[c.SUBTITLES] = g, c.SUBTITLES = g);
                                            var y = ki(f.uri, c["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", u),
                                                v = new rr({
                                                    attrs: c,
                                                    audioCodec: f.audioCodec,
                                                    bitrate: f.bitrate,
                                                    height: f.height,
                                                    name: f.name,
                                                    url: y,
                                                    videoCodec: f.videoCodec,
                                                    width: f.width
                                                });
                                            if (f.audioGroups) for (var p = 1; p < f.audioGroups.length; p++) v.addGroupId("audio", f.audioGroups[p] + "_clone_" + l);
                                            if (f.subtitleGroups) for (var S = 1; S < f.subtitleGroups.length; S++) v.addGroupId("text", f.subtitleGroups[S] + "_clone_" + l);
                                            return v;
                                        });
                                        r.push.apply(r, h), Di(e.audioTracks, i, u, l), Di(e.subtitleTracks, n, u, l);
                                    }
                                });
                            }
                        }, a.loadSteeringManifest = function (t) {
                            var e,
                                r = this,
                                i = this.hls.config,
                                n = i.loader;
                            this.loader && this.loader.destroy(), this.loader = new n(i);
                            try {
                                e = new self.URL(t);
                            } catch (_unused11) {
                                return this.enabled = !1, void this.log("Failed to parse Steering Manifest URI: " + t);
                            }
                            if ("data:" !== e.protocol) {
                                var o = 0 | (this.hls.bandwidthEstimate || i.abrEwmaDefaultEstimate);
                                e.searchParams.set("_HLS_pathway", this.pathwayId), e.searchParams.set("_HLS_throughput", "" + o);
                            }
                            var l = {
                                    responseType: "json",
                                    url: e.href
                                },
                                d = i.steeringManifestLoadPolicy.default,
                                u = d.errorRetry || d.timeoutRetry || {},
                                h = {
                                    loadPolicy: d,
                                    timeout: d.maxLoadTimeMs,
                                    maxRetry: u.maxNumRetry || 0,
                                    retryDelay: u.retryDelayMs || 0,
                                    maxRetryDelay: u.maxRetryDelayMs || 0
                                },
                                f = {
                                    onSuccess: function onSuccess(c, m, g, y) {
                                        r.log('Loaded steering manifest: "' + e + '"');
                                        var v = c.data;
                                        if (1 === v.VERSION) {
                                            r.updated = performance.now(), r.timeToLoad = v.TTL;
                                            var p = v["RELOAD-URI"],
                                                S = v["PATHWAY-CLONES"],
                                                T = v["PATHWAY-PRIORITY"];
                                            if (p) try {
                                                r.uri = new self.URL(p, e).href;
                                            } catch (_unused12) {
                                                return r.enabled = !1, void r.log("Failed to parse Steering Manifest RELOAD-URI: " + p);
                                            }
                                            r.scheduleRefresh(r.uri || g.url), S && r.clonePathways(S);
                                            var R = {
                                                steeringManifest: v,
                                                url: e.toString()
                                            };
                                            r.hls.trigger(E.STEERING_MANIFEST_LOADED, R), T && r.updatePathwayPriority(T);
                                        } else r.log("Steering VERSION " + v.VERSION + " not supported!");
                                    },
                                    onError: function onError(c, m, g, y) {
                                        if (r.log("Error loading steering manifest: " + c.code + " " + c.text + " (" + m.url + ")"), r.stopLoad(), 410 === c.code) return r.enabled = !1, void r.log("Steering manifest " + m.url + " no longer available");
                                        var v = 1e3 * r.timeToLoad;
                                        if (429 !== c.code) r.scheduleRefresh(r.uri || m.url, v); else {
                                            var p = r.loader;
                                            if ("function" == typeof (p === null || p === void 0 ? void 0 : p.getResponseHeader)) {
                                                var S = p.getResponseHeader("Retry-After");
                                                S && (v = 1e3 * parseFloat(S));
                                            }
                                            r.log("Steering manifest " + m.url + " rate limited");
                                        }
                                    },
                                    onTimeout: function onTimeout(c, m, g) {
                                        r.log("Timeout loading steering manifest (" + m.url + ")"), r.scheduleRefresh(r.uri || m.url);
                                    }
                                };
                            this.log("Requesting steering manifest: " + e), this.loader.load(l, h, f);
                        }, a.scheduleRefresh = function (t, e) {
                            var r = this;
                            void 0 === e && (e = 1e3 * this.timeToLoad), this.clearTimeout(), this.reloadTimer = self.setTimeout(function () {
                                var i,
                                    n = null == (i = r.hls) ? void 0 : i.media;
                                !n || n.ended ? r.scheduleRefresh(t, 1e3 * r.timeToLoad) : r.loadSteeringManifest(t);
                            }, e);
                        }, s;
                    }();

                function Di(s, a, t, e) {
                    s && Object.keys(a).forEach(function (r) {
                        var i = s.filter(function (n) {
                            return n.groupId === r;
                        }).map(function (n) {
                            var o = gt({}, n);
                            return o.details = void 0, o.attrs = new lt(o.attrs), o.url = o.attrs.URI = ki(n.url, n.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = a[r], o.attrs["PATHWAY-ID"] = e, o;
                        });
                        s.push.apply(s, i);
                    });
                }

                function ki(s, a, t, e) {
                    var r,
                        i = e.HOST,
                        n = e.PARAMS,
                        o = e[t];
                    a && (r = o === null || o === void 0 ? void 0 : o[a]) && (s = r);
                    var l = new self.URL(s);
                    return i && !r && (l.host = i), n && Object.keys(n).sort().forEach(function (d) {
                        d && l.searchParams.set(d, n[d]);
                    }), l.href;
                }

                var un = /^age:\s*[\d.]+\s*$/im,
                    _i = function () {
                        function s(t) {
                            this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = t && t.xhrSetup || null, this.stats = new pe(), this.retryDelay = 0;
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                            this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
                        }, a.abortInternal = function () {
                            var t = this.loader;
                            self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t && (t.onreadystatechange = null, t.onprogress = null, 4 !== t.readyState && (this.stats.aborted = !0, t.abort()));
                        }, a.abort = function () {
                            var t;
                            this.abortInternal(), null != (t = this.callbacks) && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
                        }, a.load = function (t, e, r) {
                            if (this.stats.loading.start) throw new Error("Loader can only be used once.");
                            this.stats.loading.start = self.performance.now(), this.context = t, this.config = e, this.callbacks = r, this.loadInternal();
                        }, a.loadInternal = function () {
                            var t = this,
                                e = this.config,
                                r = this.context;
                            if (e && r) {
                                var i = this.loader = new self.XMLHttpRequest(),
                                    n = this.stats;
                                n.loading.first = 0, n.loaded = 0, n.aborted = !1;
                                var o = this.xhrSetup;
                                o ? Promise.resolve().then(function () {
                                    if (t.loader === i && !t.stats.aborted) return o(i, r.url);
                                }).catch(function (l) {
                                    if (t.loader === i && !t.stats.aborted) return i.open("GET", r.url, !0), o(i, r.url);
                                }).then(function () {
                                    t.loader !== i || t.stats.aborted || t.openAndSendXhr(i, r, e);
                                }).catch(function (l) {
                                    t.callbacks.onError({
                                        code: i.status,
                                        text: l.message
                                    }, r, i, n);
                                }) : this.openAndSendXhr(i, r, e);
                            }
                        }, a.openAndSendXhr = function (t, e, r) {
                            t.readyState || t.open("GET", e.url, !0);
                            var i = e.headers,
                                n = r.loadPolicy,
                                o = n.maxTimeToFirstByteMs,
                                l = n.maxLoadTimeMs;
                            if (i) for (var d in i) t.setRequestHeader(d, i[d]);
                            e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, self.clearTimeout(this.requestTimeout), r.timeout = o && N(o) ? o : l, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.timeout), t.send();
                        }, a.readystatechange = function () {
                            var t = this.context,
                                e = this.loader,
                                r = this.stats;
                            if (t && e) {
                                var i = e.readyState,
                                    n = this.config;
                                if (!r.aborted && i >= 2 && (0 === r.loading.first && (r.loading.first = Math.max(self.performance.now(), r.loading.start), n.timeout !== n.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), n.timeout = n.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n.loadPolicy.maxLoadTimeMs - (r.loading.first - r.loading.start)))), 4 === i)) {
                                    self.clearTimeout(this.requestTimeout), e.onreadystatechange = null, e.onprogress = null;
                                    var o = e.status;
                                    if (o >= 200 && o < 300) {
                                        var _ref;
                                        var d = (_ref = "text" === e.responseType ? e.responseText : null) !== null && _ref !== void 0 ? _ref : e.response;
                                        if (null != d) {
                                            if (r.loading.end = Math.max(self.performance.now(), r.loading.first), r.loaded = r.total = "arraybuffer" === e.responseType ? d.byteLength : d.length, r.bwEstimate = 8e3 * r.total / (r.loading.end - r.loading.first), !this.callbacks) return;
                                            var h = this.callbacks.onProgress;
                                            if (h && h(r, t, d, e), !this.callbacks) return;
                                            return void this.callbacks.onSuccess({
                                                url: e.responseURL,
                                                data: d,
                                                code: o
                                            }, r, t, e);
                                        }
                                    }
                                    var c = n.loadPolicy.errorRetry;
                                    _e(c, r.retry, !1, {
                                        url: t.url,
                                        data: void 0,
                                        code: o
                                    }) ? this.retry(c) : (A.error(o + " while loading " + t.url), this.callbacks.onError({
                                        code: o,
                                        text: e.statusText
                                    }, t, e, r));
                                }
                            }
                        }, a.loadtimeout = function () {
                            if (this.config) {
                                var t = this.config.loadPolicy.timeoutRetry;
                                if (_e(t, this.stats.retry, !0)) this.retry(t); else {
                                    var e;
                                    A.warn("timeout while loading " + (null == (e = this.context) ? void 0 : e.url));
                                    var r = this.callbacks;
                                    r && (this.abortInternal(), r.onTimeout(this.stats, this.context, this.loader));
                                }
                            }
                        }, a.retry = function (t) {
                            var e = this.context,
                                r = this.stats;
                            this.retryDelay = ar(t, r.retry), r.retry++, A.warn((status ? "HTTP Status " + status : "Timeout") + " while loading " + (e === null || e === void 0 ? void 0 : e.url) + ", retrying " + r.retry + "/" + t.maxNumRetry + " in " + this.retryDelay + "ms"), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
                        }, a.loadprogress = function (t) {
                            var e = this.stats;
                            e.loaded = t.loaded, t.lengthComputable && (e.total = t.total);
                        }, a.getCacheAge = function () {
                            var t = null;
                            if (this.loader && un.test(this.loader.getAllResponseHeaders())) {
                                var e = this.loader.getResponseHeader("age");
                                t = e ? parseFloat(e) : null;
                            }
                            return t;
                        }, a.getResponseHeader = function (t) {
                            return this.loader && new RegExp("^" + t + ":\\s*[\\d.]+\\s*$", "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(t) : null;
                        }, s;
                    }(),
                    dn = function () {
                        function s() {
                            this.chunks = [], this.dataLength = 0;
                        }

                        var a = s.prototype;
                        return a.push = function (t) {
                            this.chunks.push(t), this.dataLength += t.length;
                        }, a.flush = function () {
                            var t,
                                e = this.chunks;
                            return e.length ? (t = 1 === e.length ? e[0] : function (i, n) {
                                for (var o = new Uint8Array(n), l = 0, d = 0; d < i.length; d++) {
                                    var u = i[d];
                                    o.set(u, l), l += u.length;
                                }
                                return o;
                            }(e, this.dataLength), this.reset(), t) : new Uint8Array(0);
                        }, a.reset = function () {
                            this.chunks.length = 0, this.dataLength = 0;
                        }, s;
                    }(),
                    hn = /(\d+)-(\d+)\/(\d+)/,
                    wi = function () {
                        function s(t) {
                            this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || fn, this.controller = new self.AbortController(), this.stats = new pe();
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                            this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
                        }, a.abortInternal = function () {
                            this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort());
                        }, a.abort = function () {
                            var t;
                            this.abortInternal(), null != (t = this.callbacks) && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
                        }, a.load = function (t, e, r) {
                            var i = this,
                                n = this.stats;
                            if (n.loading.start) throw new Error("Loader can only be used once.");
                            n.loading.start = self.performance.now();
                            var m,
                                y,
                                o = (m = t, y = {
                                    method: "GET",
                                    mode: "cors",
                                    credentials: "same-origin",
                                    signal: this.controller.signal,
                                    headers: new self.Headers(gt({}, m.headers))
                                }, m.rangeEnd && y.headers.set("Range", "bytes=" + m.rangeStart + "-" + String(m.rangeEnd - 1)), y),
                                l = r.onProgress,
                                d = "arraybuffer" === t.responseType,
                                u = d ? "byteLength" : "length",
                                h = e.loadPolicy,
                                f = h.maxTimeToFirstByteMs,
                                c = h.maxLoadTimeMs;
                            this.context = t, this.config = e, this.callbacks = r, this.request = this.fetchSetup(t, o), self.clearTimeout(this.requestTimeout), e.timeout = f && N(f) ? f : c, this.requestTimeout = self.setTimeout(function () {
                                i.abortInternal(), r.onTimeout(n, t, i.response);
                            }, e.timeout), self.fetch(this.request).then(function (m) {
                                i.response = i.loader = m;
                                var g = Math.max(self.performance.now(), n.loading.start);
                                if (self.clearTimeout(i.requestTimeout), e.timeout = c, i.requestTimeout = self.setTimeout(function () {
                                    i.abortInternal(), r.onTimeout(n, t, i.response);
                                }, c - (g - n.loading.start)), !m.ok) throw new cn(m.statusText || "fetch, bad network response", m.status, m);
                                return n.loading.first = g, n.total = function (p) {
                                    var S = p.get("Content-Range");
                                    if (S) {
                                        var T = function (b) {
                                            var L = hn.exec(b);
                                            if (L) return parseInt(L[2]) - parseInt(L[1]) + 1;
                                        }(S);
                                        if (N(T)) return T;
                                    }
                                    var R = p.get("Content-Length");
                                    if (R) return parseInt(R);
                                }(m.headers) || n.total, l && N(e.highWaterMark) ? i.loadProgressively(m, n, t, e.highWaterMark, l) : d ? m.arrayBuffer() : "json" === t.responseType ? m.json() : m.text();
                            }).then(function (m) {
                                var g = i.response;
                                if (!g) throw new Error("loader destroyed");
                                self.clearTimeout(i.requestTimeout), n.loading.end = Math.max(self.performance.now(), n.loading.first);
                                var y = m[u];
                                y && (n.loaded = n.total = y);
                                var v = {
                                    url: g.url,
                                    data: m,
                                    code: g.status
                                };
                                l && !N(e.highWaterMark) && l(n, t, m, g), r.onSuccess(v, n, t, g);
                            }).catch(function (m) {
                                self.clearTimeout(i.requestTimeout), n.aborted || r.onError({
                                    code: m && m.code || 0,
                                    text: m ? m.message : null
                                }, t, m ? m.details : null, n);
                            });
                        }, a.getCacheAge = function () {
                            var t = null;
                            if (this.response) {
                                var e = this.response.headers.get("age");
                                t = e ? parseFloat(e) : null;
                            }
                            return t;
                        }, a.getResponseHeader = function (t) {
                            return this.response ? this.response.headers.get(t) : null;
                        }, a.loadProgressively = function (t, e, r, i, n) {
                            void 0 === i && (i = 0);
                            var o = new dn(),
                                l = t.body.getReader();
                            return function d() {
                                return l.read().then(function (u) {
                                    if (u.done) return o.dataLength && n(e, r, o.flush(), t), Promise.resolve(new ArrayBuffer(0));
                                    var h = u.value,
                                        f = h.length;
                                    return e.loaded += f, f < i || o.dataLength ? (o.push(h), o.dataLength >= i && n(e, r, o.flush(), t)) : n(e, r, h, t), d();
                                }).catch(function () {
                                    return Promise.reject();
                                });
                            }();
                        }, s;
                    }();

                function fn(s, a) {
                    return new self.Request(s.url, a);
                }

                var or,
                    cn = function (s) {
                        function a(t, e, r) {
                            var i;
                            return (i = s.call(this, t) || this).code = void 0, i.details = void 0, i.code = e, i.details = r, i;
                        }

                        return At(a, s), a;
                    }(me(Error)),
                    xi = yt(yt({
                        autoStartLoad: !0,
                        startPosition: -1,
                        defaultAudioCodec: void 0,
                        debug: !1,
                        capLevelOnFPSDrop: !1,
                        capLevelToPlayerSize: !1,
                        ignoreDevicePixelRatio: !1,
                        preferManagedMediaSource: !0,
                        initialLiveManifestSize: 1,
                        maxBufferLength: 30,
                        backBufferLength: 1 / 0,
                        frontBufferFlushThreshold: 1 / 0,
                        maxBufferSize: 6e7,
                        maxBufferHole: .1,
                        highBufferWatchdogPeriod: 2,
                        nudgeOffset: .1,
                        nudgeMaxRetry: 3,
                        maxFragLookUpTolerance: .25,
                        liveSyncDurationCount: 3,
                        liveMaxLatencyDurationCount: 1 / 0,
                        liveSyncDuration: void 0,
                        liveMaxLatencyDuration: void 0,
                        maxLiveSyncPlaybackRate: 1,
                        liveDurationInfinity: !1,
                        liveBackBufferLength: null,
                        maxMaxBufferLength: 600,
                        enableWorker: !0,
                        workerPath: null,
                        enableSoftwareAES: !0,
                        startLevel: void 0,
                        startFragPrefetch: !1,
                        fpsDroppedMonitoringPeriod: 5e3,
                        fpsDroppedMonitoringThreshold: .2,
                        appendErrorMaxRetry: 3,
                        loader: _i,
                        fLoader: void 0,
                        pLoader: void 0,
                        xhrSetup: void 0,
                        licenseXhrSetup: void 0,
                        licenseResponseCallback: void 0,
                        abrController: en,
                        bufferController: nn,
                        capLevelController: sn,
                        errorController: Za,
                        fpsController: on,
                        stretchShortVideoTrack: !1,
                        maxAudioFramesDrift: 1,
                        forceKeyFrameOnDiscontinuity: !0,
                        abrEwmaFastLive: 3,
                        abrEwmaSlowLive: 9,
                        abrEwmaFastVoD: 3,
                        abrEwmaSlowVoD: 9,
                        abrEwmaDefaultEstimate: 5e5,
                        abrEwmaDefaultEstimateMax: 5e6,
                        abrBandWidthFactor: .95,
                        abrBandWidthUpFactor: .7,
                        abrMaxWithRealBitrate: !1,
                        maxStarvationDelay: 4,
                        maxLoadingDelay: 4,
                        minAutoBitrate: 0,
                        emeEnabled: !1,
                        widevineLicenseUrl: void 0,
                        drmSystems: {},
                        drmSystemOptions: {},
                        requestMediaKeySystemAccessFunc: null,
                        testBandwidth: !0,
                        progressive: !1,
                        lowLatencyMode: !0,
                        cmcd: void 0,
                        enableDateRangeMetadataCues: !0,
                        enableEmsgMetadataCues: !0,
                        enableID3MetadataCues: !0,
                        useMediaCapabilities: !1,
                        certLoadPolicy: {
                            default: {
                                maxTimeToFirstByteMs: 8e3,
                                maxLoadTimeMs: 2e4,
                                timeoutRetry: null,
                                errorRetry: null
                            }
                        },
                        keyLoadPolicy: {
                            default: {
                                maxTimeToFirstByteMs: 8e3,
                                maxLoadTimeMs: 2e4,
                                timeoutRetry: {
                                    maxNumRetry: 1,
                                    retryDelayMs: 1e3,
                                    maxRetryDelayMs: 2e4,
                                    backoff: "linear"
                                },
                                errorRetry: {
                                    maxNumRetry: 8,
                                    retryDelayMs: 1e3,
                                    maxRetryDelayMs: 2e4,
                                    backoff: "linear"
                                }
                            }
                        },
                        manifestLoadPolicy: {
                            default: {
                                maxTimeToFirstByteMs: 1 / 0,
                                maxLoadTimeMs: 2e4,
                                timeoutRetry: {
                                    maxNumRetry: 2,
                                    retryDelayMs: 0,
                                    maxRetryDelayMs: 0
                                },
                                errorRetry: {
                                    maxNumRetry: 1,
                                    retryDelayMs: 1e3,
                                    maxRetryDelayMs: 8e3
                                }
                            }
                        },
                        playlistLoadPolicy: {
                            default: {
                                maxTimeToFirstByteMs: 1e4,
                                maxLoadTimeMs: 2e4,
                                timeoutRetry: {
                                    maxNumRetry: 2,
                                    retryDelayMs: 0,
                                    maxRetryDelayMs: 0
                                },
                                errorRetry: {
                                    maxNumRetry: 2,
                                    retryDelayMs: 1e3,
                                    maxRetryDelayMs: 8e3
                                }
                            }
                        },
                        fragLoadPolicy: {
                            default: {
                                maxTimeToFirstByteMs: 1e4,
                                maxLoadTimeMs: 12e4,
                                timeoutRetry: {
                                    maxNumRetry: 4,
                                    retryDelayMs: 0,
                                    maxRetryDelayMs: 0
                                },
                                errorRetry: {
                                    maxNumRetry: 6,
                                    retryDelayMs: 1e3,
                                    maxRetryDelayMs: 8e3
                                }
                            }
                        },
                        steeringManifestLoadPolicy: {
                            default: {
                                maxTimeToFirstByteMs: 1e4,
                                maxLoadTimeMs: 2e4,
                                timeoutRetry: {
                                    maxNumRetry: 2,
                                    retryDelayMs: 0,
                                    maxRetryDelayMs: 0
                                },
                                errorRetry: {
                                    maxNumRetry: 1,
                                    retryDelayMs: 1e3,
                                    maxRetryDelayMs: 8e3
                                }
                            }
                        },
                        manifestLoadingTimeOut: 1e4,
                        manifestLoadingMaxRetry: 1,
                        manifestLoadingRetryDelay: 1e3,
                        manifestLoadingMaxRetryTimeout: 64e3,
                        levelLoadingTimeOut: 1e4,
                        levelLoadingMaxRetry: 4,
                        levelLoadingRetryDelay: 1e3,
                        levelLoadingMaxRetryTimeout: 64e3,
                        fragLoadingTimeOut: 2e4,
                        fragLoadingMaxRetry: 6,
                        fragLoadingRetryDelay: 1e3,
                        fragLoadingMaxRetryTimeout: 64e3
                    }, {
                        cueHandler: Ta,
                        enableWebVTT: !1,
                        enableIMSC1: !1,
                        enableCEA708Captions: !1,
                        captionsTextTrack1Label: "English",
                        captionsTextTrack1LanguageCode: "en",
                        captionsTextTrack2Label: "Spanish",
                        captionsTextTrack2LanguageCode: "es",
                        captionsTextTrack3Label: "Unknown CC",
                        captionsTextTrack3LanguageCode: "",
                        captionsTextTrack4Label: "Unknown CC",
                        captionsTextTrack4LanguageCode: "",
                        renderTextTracksNatively: !0
                    }), {}, {
                        subtitleStreamController: void 0,
                        subtitleTrackController: void 0,
                        timelineController: void 0,
                        audioStreamController: void 0,
                        audioTrackController: void 0,
                        emeController: void 0,
                        cmcdController: void 0,
                        contentSteeringController: ln
                    });

                function lr(s) {
                    return s && "object" == _typeof(s) ? Array.isArray(s) ? s.map(lr) : Object.keys(s).reduce(function (a, t) {
                        return a[t] = lr(s[t]), a;
                    }, {}) : s;
                }

                var gn = function (s) {
                    function a(e, r) {
                        var i;
                        return (i = s.call(this, e, "[level-controller]") || this)._levels = [], i._firstLevel = -1, i._maxAutoLevel = -1, i._startLevel = void 0, i.currentLevel = null, i.currentLevelIndex = -1, i.manualLevelIndex = -1, i.steering = void 0, i.onParsedComplete = void 0, i.steering = r, i._registerListeners(), i;
                    }

                    At(a, s);
                    var t = a.prototype;
                    return t._registerListeners = function () {
                        var e = this.hls;
                        e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(E.LEVEL_LOADED, this.onLevelLoaded, this), e.on(E.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(E.FRAG_BUFFERED, this.onFragBuffered, this), e.on(E.ERROR, this.onError, this);
                    }, t._unregisterListeners = function () {
                        var e = this.hls;
                        e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(E.LEVEL_LOADED, this.onLevelLoaded, this), e.off(E.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(E.FRAG_BUFFERED, this.onFragBuffered, this), e.off(E.ERROR, this.onError, this);
                    }, t.destroy = function () {
                        this._unregisterListeners(), this.steering = null, this.resetLevels(), s.prototype.destroy.call(this);
                    }, t.stopLoad = function () {
                        this._levels.forEach(function (e) {
                            e.loadError = 0, e.fragmentError = 0;
                        }), s.prototype.stopLoad.call(this);
                    }, t.resetLevels = function () {
                        this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
                    }, t.onManifestLoading = function (e, r) {
                        this.resetLevels();
                    }, t.onManifestLoaded = function (e, r) {
                        var i = this.hls.config.preferManagedMediaSource,
                            n = [],
                            o = {},
                            l = {},
                            d = !1,
                            u = !1,
                            h = !1;
                        r.levels.forEach(function (f) {
                            var c,
                                m,
                                g = f.attrs,
                                y = f.audioCodec,
                                v = f.videoCodec;
                            -1 !== (null == (c = y) ? void 0 : c.indexOf("mp4a.40.34")) && (or || (or = /chrome|firefox/i.test(navigator.userAgent)), or && (f.audioCodec = y = void 0)), y && (f.audioCodec = y = Ae(y, i)), 0 === (null == (m = v) ? void 0 : m.indexOf("avc1")) && (v = f.videoCodec = function (M) {
                                for (var B = M.split(","), I = 0; I < B.length; I++) {
                                    var O = B[I].split(".");
                                    if (O.length > 2) {
                                        var U = O.shift() + ".";
                                        U += parseInt(O.shift()).toString(16), U += ("000" + parseInt(O.shift()).toString(16)).slice(-4), B[I] = U;
                                    }
                                }
                                return B.join(",");
                            }(v));
                            var T = f.unknownCodecs;
                            if (d || (d = !(!f.width || !f.height)), u || (u = !!v), h || (h = !!y), !(null != T && T.length || y && !ze(y, "audio", i) || v && !ze(v, "video", i))) {
                                var D = (g["PATHWAY-ID"] || ".") + "-" + f.bitrate + "-" + g.RESOLUTION + "-" + g["FRAME-RATE"] + "-" + g.CODECS + "-" + g["VIDEO-RANGE"] + "-" + g["HDCP-LEVEL"];
                                if (o[D]) {
                                    if (o[D].uri === f.url || f.attrs["PATHWAY-ID"]) o[D].addGroupId("audio", g.AUDIO), o[D].addGroupId("text", g.SUBTITLES); else {
                                        var C = l[D] += 1;
                                        f.attrs["PATHWAY-ID"] = new Array(C + 1).join(".");
                                        var F = new rr(f);
                                        o[D] = F, n.push(F);
                                    }
                                } else {
                                    var P = new rr(f);
                                    o[D] = P, l[D] = 1, n.push(P);
                                }
                            }
                        }), this.filterAndSortMediaOptions(n, r, d, u, h);
                    }, t.filterAndSortMediaOptions = function (e, r, i, n, o) {
                        var l = this,
                            d = [],
                            u = [],
                            h = e;
                        if ((i || n) && o && (h = h.filter(function (L) {
                            var k;
                            return (!!L.videoCodec || !(!L.width || !L.height)) && !!(k = L.videoRange) && De.indexOf(k) > -1;
                        })), 0 !== h.length) {
                            if (r.audioTracks) {
                                var f = this.hls.config.preferManagedMediaSource;
                                Ci(d = r.audioTracks.filter(function (L) {
                                    return !L.audioCodec || ze(L.audioCodec, "audio", f);
                                }));
                            }
                            r.subtitles && Ci(u = r.subtitles);
                            var c = h.slice(0);
                            h.sort(function (L, k) {
                                if (L.attrs["HDCP-LEVEL"] !== k.attrs["HDCP-LEVEL"]) return (L.attrs["HDCP-LEVEL"] || "") > (k.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
                                if (i && L.height !== k.height) return L.height - k.height;
                                if (L.frameRate !== k.frameRate) return L.frameRate - k.frameRate;
                                if (L.videoRange !== k.videoRange) return De.indexOf(L.videoRange) - De.indexOf(k.videoRange);
                                if (L.videoCodec !== k.videoCodec) {
                                    var x = Qr(L.videoCodec),
                                        w = Qr(k.videoCodec);
                                    if (x !== w) return w - x;
                                }
                                if (L.uri === k.uri && L.codecSet !== k.codecSet) {
                                    var D = Re(L.codecSet),
                                        C = Re(k.codecSet);
                                    if (D !== C) return C - D;
                                }
                                return L.averageBitrate !== k.averageBitrate ? L.averageBitrate - k.averageBitrate : 0;
                            });
                            var m = c[0];
                            if (this.steering && (h = this.steering.filterParsedLevels(h)).length !== c.length) for (var g = 0; g < c.length; g++) if (c[g].pathwayId === h[0].pathwayId) {
                                m = c[g];
                                break;
                            }
                            this._levels = h;
                            for (var y = 0; y < h.length; y++) if (h[y] === m) {
                                var v;
                                this._firstLevel = y;
                                var p = m.bitrate,
                                    S = this.hls.bandwidthEstimate;
                                if (this.log("manifest loaded, " + h.length + " level(s) found, first bitrate: " + p), void 0 === (null == (v = this.hls.userConfig) ? void 0 : v.abrEwmaDefaultEstimate)) {
                                    var T = Math.min(p, this.hls.config.abrEwmaDefaultEstimateMax);
                                    T > S && S === xi.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = T);
                                }
                                break;
                            }
                            var b = {
                                levels: h,
                                audioTracks: d,
                                subtitleTracks: u,
                                sessionData: r.sessionData,
                                sessionKeys: r.sessionKeys,
                                firstLevel: this._firstLevel,
                                stats: r.stats,
                                audio: o,
                                video: n,
                                altAudio: !(o && !n) && d.some(function (L) {
                                    return !!L.url;
                                })
                            };
                            this.hls.trigger(E.MANIFEST_PARSED, b), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
                        } else Promise.resolve().then(function () {
                            if (l.hls) {
                                r.levels.length && l.warn("One or more CODECS in variant not supported: " + JSON.stringify(r.levels[0].attrs));
                                var L = new Error("no level with compatible codecs found in manifest");
                                l.hls.trigger(E.ERROR, {
                                    type: Y.MEDIA_ERROR,
                                    details: _.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                    fatal: !0,
                                    url: r.url,
                                    error: L,
                                    reason: L.message
                                });
                            }
                        });
                    }, t.onError = function (e, r) {
                        !r.fatal && r.context && r.context.type === Kt && r.context.level === this.level && this.checkRetry(r);
                    }, t.onFragBuffered = function (e, r) {
                        var i = r.frag;
                        if (void 0 !== i && i.type === at) {
                            var n = i.elementaryStreams;
                            if (!Object.keys(n).some(function (l) {
                                return !!n[l];
                            })) return;
                            var o = this._levels[i.level];
                            null != o && o.loadError && (this.log("Resetting level error count of " + o.loadError + " on frag buffered"), o.loadError = 0);
                        }
                    }, t.onLevelLoaded = function (e, r) {
                        var i,
                            n,
                            o = r.level,
                            l = r.details,
                            d = this._levels[o];
                        if (!d) return this.warn("Invalid level index " + o), void (null != (n = r.deliveryDirectives) && n.skip && (l.deltaUpdateFailed = !0));
                        o === this.currentLevelIndex ? (0 === d.fragmentError && (d.loadError = 0), this.playlistLoaded(o, r, d.details)) : null != (i = r.deliveryDirectives) && i.skip && (l.deltaUpdateFailed = !0);
                    }, t.loadPlaylist = function (e) {
                        s.prototype.loadPlaylist.call(this);
                        var r = this.currentLevelIndex,
                            i = this.currentLevel;
                        if (i && this.shouldLoadPlaylist(i)) {
                            var n = i.uri;
                            if (e) try {
                                n = e.addDirectives(n);
                            } catch (l) {
                                this.warn("Could not construct new URL with HLS Delivery Directives: " + l);
                            }
                            var o = i.attrs["PATHWAY-ID"];
                            this.log("Loading level index " + r + (void 0 !== (e === null || e === void 0 ? void 0 : e.msn) ? " at sn " + e.msn + " part " + e.part : "") + " with" + (o ? " Pathway " + o : "") + " " + n), this.clearTimer(), this.hls.trigger(E.LEVEL_LOADING, {
                                url: n,
                                level: r,
                                pathwayId: i.attrs["PATHWAY-ID"],
                                id: 0,
                                deliveryDirectives: e || null
                            });
                        }
                    }, t.removeLevel = function (e) {
                        var r,
                            i = this,
                            n = this._levels.filter(function (o, l) {
                                return l !== e || (i.steering && i.steering.removeLevel(o), o === i.currentLevel && (i.currentLevel = null, i.currentLevelIndex = -1, o.details && o.details.fragments.forEach(function (d) {
                                    return d.level = -1;
                                })), !1);
                            });
                        pi(n), this._levels = n, this.currentLevelIndex > -1 && null != (r = this.currentLevel) && r.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.hls.trigger(E.LEVELS_UPDATED, {
                            levels: n
                        });
                    }, t.onLevelsUpdated = function (e, r) {
                        this._levels = r.levels;
                    }, t.checkMaxAutoUpdated = function () {
                        var e = this.hls,
                            r = e.autoLevelCapping,
                            i = e.maxAutoLevel,
                            n = e.maxHdcpLevel;
                        this._maxAutoLevel !== i && (this._maxAutoLevel = i, this.hls.trigger(E.MAX_AUTO_LEVEL_UPDATED, {
                            autoLevelCapping: r,
                            levels: this.levels,
                            maxAutoLevel: i,
                            minAutoLevel: this.hls.minAutoLevel,
                            maxHdcpLevel: n
                        }));
                    }, ct(a, [{
                        key: "levels",
                        get: function get() {
                            return 0 === this._levels.length ? null : this._levels;
                        }
                    }, {
                        key: "level",
                        get: function get() {
                            return this.currentLevelIndex;
                        },
                        set: function set(e) {
                            var r = this._levels;
                            if (0 !== r.length) {
                                if (e < 0 || e >= r.length) {
                                    var i = new Error("invalid level idx"),
                                        n = e < 0;
                                    if (this.hls.trigger(E.ERROR, {
                                        type: Y.OTHER_ERROR,
                                        details: _.LEVEL_SWITCH_ERROR,
                                        level: e,
                                        fatal: n,
                                        error: i,
                                        reason: i.message
                                    }), n) return;
                                    e = Math.min(e, r.length - 1);
                                }
                                var o = this.currentLevelIndex,
                                    l = this.currentLevel,
                                    d = l ? l.attrs["PATHWAY-ID"] : void 0,
                                    u = r[e],
                                    h = u.attrs["PATHWAY-ID"];
                                if (this.currentLevelIndex = e, this.currentLevel = u, o !== e || !u.details || !l || d !== h) {
                                    this.log("Switching to level " + e + " (" + (u.height ? u.height + "p " : "") + (u.videoRange ? u.videoRange + " " : "") + (u.codecSet ? u.codecSet + " " : "") + "@" + u.bitrate + ")" + (h ? " with Pathway " + h : "") + " from level " + o + (d ? " with Pathway " + d : "")), this.hls.trigger(E.LEVEL_SWITCHING, {
                                        level: e,
                                        attrs: u.attrs,
                                        details: u.details,
                                        bitrate: u.bitrate,
                                        averageBitrate: u.averageBitrate,
                                        maxBitrate: u.maxBitrate,
                                        realBitrate: u.realBitrate,
                                        width: u.width,
                                        height: u.height,
                                        codecSet: u.codecSet,
                                        audioCodec: u.audioCodec,
                                        videoCodec: u.videoCodec,
                                        audioGroups: u.audioGroups,
                                        subtitleGroups: u.subtitleGroups,
                                        loaded: u.loaded,
                                        loadError: u.loadError,
                                        fragmentError: u.fragmentError,
                                        name: u.name,
                                        id: u.id,
                                        uri: u.uri,
                                        url: u.url,
                                        urlId: 0,
                                        audioGroupIds: u.audioGroupIds,
                                        textGroupIds: u.textGroupIds
                                    });
                                    var c = u.details;
                                    if (!c || c.live) {
                                        var m = this.switchParams(u.uri, l === null || l === void 0 ? void 0 : l.details, c);
                                        this.loadPlaylist(m);
                                    }
                                }
                            }
                        }
                    }, {
                        key: "manualLevel",
                        get: function get() {
                            return this.manualLevelIndex;
                        },
                        set: function set(e) {
                            this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e);
                        }
                    }, {
                        key: "firstLevel",
                        get: function get() {
                            return this._firstLevel;
                        },
                        set: function set(e) {
                            this._firstLevel = e;
                        }
                    }, {
                        key: "startLevel",
                        get: function get() {
                            if (void 0 === this._startLevel) {
                                var e = this.hls.config.startLevel;
                                return void 0 !== e ? e : this.hls.firstAutoLevel;
                            }
                            return this._startLevel;
                        },
                        set: function set(e) {
                            this._startLevel = e;
                        }
                    }, {
                        key: "nextLoadLevel",
                        get: function get() {
                            return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel;
                        },
                        set: function set(e) {
                            this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e);
                        }
                    }]), a;
                }(Ja);

                function Ci(s) {
                    var a = {};
                    s.forEach(function (t) {
                        var e = t.groupId || "";
                        t.id = a[e] = a[e] || 0, a[e]++;
                    });
                }

                var Ii = "NOT_LOADED",
                    Pi = "APPENDING",
                    oe = "PARTIAL",
                    le = "OK",
                    mn = function () {
                        function s(t) {
                            this.activePartLists = Object.create(null), this.endListFragments = Object.create(null), this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hasGaps = !1, this.hls = t, this._registerListeners();
                        }

                        var a = s.prototype;
                        return a._registerListeners = function () {
                            var t = this.hls;
                            t.on(E.BUFFER_APPENDED, this.onBufferAppended, this), t.on(E.FRAG_BUFFERED, this.onFragBuffered, this), t.on(E.FRAG_LOADED, this.onFragLoaded, this);
                        }, a._unregisterListeners = function () {
                            var t = this.hls;
                            t.off(E.BUFFER_APPENDED, this.onBufferAppended, this), t.off(E.FRAG_BUFFERED, this.onFragBuffered, this), t.off(E.FRAG_LOADED, this.onFragLoaded, this);
                        }, a.destroy = function () {
                            this._unregisterListeners(), this.fragments = this.activePartLists = this.endListFragments = this.timeRanges = null;
                        }, a.getAppendedFrag = function (t, e) {
                            var r = this.activePartLists[e];
                            if (r) for (var i = r.length; i--;) {
                                var n = r[i];
                                if (!n) break;
                                var o = n.end;
                                if (n.start <= t && null !== o && t <= o) return n;
                            }
                            return this.getBufferedFrag(t, e);
                        }, a.getBufferedFrag = function (t, e) {
                            for (var r = this.fragments, i = Object.keys(r), n = i.length; n--;) {
                                var _o;
                                var o = r[i[n]];
                                if (((_o = o) === null || _o === void 0 ? void 0 : _o.body.type) === e && o.buffered) {
                                    var l = o.body;
                                    if (l.start <= t && t <= l.end) return l;
                                }
                            }
                            return null;
                        }, a.detectEvictedFragments = function (t, e, r, i) {
                            var n = this;
                            this.timeRanges && (this.timeRanges[t] = e);
                            var o = (i === null || i === void 0 ? void 0 : i.fragment.sn) || -1;
                            Object.keys(this.fragments).forEach(function (l) {
                                var d = n.fragments[l];
                                if (d && !(o >= d.body.sn)) if (d.buffered || d.loaded) {
                                    var u = d.range[t];
                                    u && u.time.some(function (h) {
                                        var f = !n.isTimeBuffered(h.startPTS, h.endPTS, e);
                                        return f && n.removeFragment(d.body), f;
                                    });
                                } else d.body.type === r && n.removeFragment(d.body);
                            });
                        }, a.detectPartialFragments = function (t) {
                            var e = this,
                                r = this.timeRanges,
                                i = t.frag,
                                n = t.part;
                            if (r && "initSegment" !== i.sn) {
                                var o = Qt(i),
                                    l = this.fragments[o];
                                if (!(!l || l.buffered && i.gap)) {
                                    var d = !i.relurl;
                                    Object.keys(r).forEach(function (u) {
                                        var h = i.elementaryStreams[u];
                                        h && (l.range[u] = e.getBufferedTimes(i, n, d || !0 === h.partial, r[u]));
                                    }), l.loaded = null, Object.keys(l.range).length ? (l.buffered = !0, (l.body.endList = i.endList || l.body.endList) && (this.endListFragments[l.body.type] = l), xe(l) || this.removeParts(i.sn - 1, i.type)) : this.removeFragment(l.body);
                                }
                            }
                        }, a.removeParts = function (t, e) {
                            var r = this.activePartLists[e];
                            r && (this.activePartLists[e] = r.filter(function (i) {
                                return i.fragment.sn >= t;
                            }));
                        }, a.fragBuffered = function (t, e) {
                            var r = Qt(t),
                                i = this.fragments[r];
                            !i && e && (i = this.fragments[r] = {
                                body: t,
                                appendedPTS: null,
                                loaded: null,
                                buffered: !1,
                                range: Object.create(null)
                            }, t.gap && (this.hasGaps = !0)), i && (i.loaded = null, i.buffered = !0);
                        }, a.getBufferedTimes = function (t, e, r, i) {
                            for (var n = {
                                time: [],
                                partial: r
                            }, o = t.start, l = t.end, d = t.minEndPTS || l, u = t.maxStartPTS || o, h = 0; h < i.length; h++) {
                                var f = i.start(h) - this.bufferPadding,
                                    c = i.end(h) + this.bufferPadding;
                                if (u >= f && d <= c) {
                                    n.time.push({
                                        startPTS: Math.max(o, i.start(h)),
                                        endPTS: Math.min(l, i.end(h))
                                    });
                                    break;
                                }
                                if (o < c && l > f) {
                                    var m = Math.max(o, i.start(h)),
                                        g = Math.min(l, i.end(h));
                                    g > m && (n.partial = !0, n.time.push({
                                        startPTS: m,
                                        endPTS: g
                                    }));
                                } else if (l <= f) break;
                            }
                            return n;
                        }, a.getPartialFragment = function (t) {
                            var e,
                                r,
                                i,
                                n = null,
                                o = 0,
                                l = this.bufferPadding,
                                d = this.fragments;
                            return Object.keys(d).forEach(function (u) {
                                var h = d[u];
                                h && xe(h) && (i = h.body.end + l, t >= (r = h.body.start - l) && t <= i && (e = Math.min(t - r, i - t), o <= e && (n = h.body, o = e)));
                            }), n;
                        }, a.isEndListAppended = function (t) {
                            var e = this.endListFragments[t];
                            return void 0 !== e && (e.buffered || xe(e));
                        }, a.getState = function (t) {
                            var e = Qt(t),
                                r = this.fragments[e];
                            return r ? r.buffered ? xe(r) ? oe : le : Pi : Ii;
                        }, a.isTimeBuffered = function (t, e, r) {
                            for (var i, n, o = 0; o < r.length; o++) {
                                if (i = r.start(o) - this.bufferPadding, n = r.end(o) + this.bufferPadding, t >= i && e <= n) return !0;
                                if (e <= i) return !1;
                            }
                            return !1;
                        }, a.onFragLoaded = function (t, e) {
                            var r = e.frag;
                            if ("initSegment" !== r.sn && !r.bitrateTest) {
                                var n = e.part ? null : e,
                                    o = Qt(r);
                                this.fragments[o] = {
                                    body: r,
                                    appendedPTS: null,
                                    loaded: n,
                                    buffered: !1,
                                    range: Object.create(null)
                                };
                            }
                        }, a.onBufferAppended = function (t, e) {
                            var r = this,
                                i = e.frag,
                                n = e.part,
                                o = e.timeRanges;
                            if ("initSegment" !== i.sn) {
                                var l = i.type;
                                if (n) {
                                    var d = this.activePartLists[l];
                                    d || (this.activePartLists[l] = d = []), d.push(n);
                                }
                                this.timeRanges = o, Object.keys(o).forEach(function (u) {
                                    r.detectEvictedFragments(u, o[u], l, n);
                                });
                            }
                        }, a.onFragBuffered = function (t, e) {
                            this.detectPartialFragments(e);
                        }, a.hasFragment = function (t) {
                            var e = Qt(t);
                            return !!this.fragments[e];
                        }, a.hasParts = function (t) {
                            var e;
                            return !(null == (e = this.activePartLists[t]) || !e.length);
                        }, a.removeFragmentsInRange = function (t, e, r, i, n) {
                            var o = this;
                            i && !this.hasGaps || Object.keys(this.fragments).forEach(function (l) {
                                var d = o.fragments[l];
                                if (d) {
                                    var u = d.body;
                                    u.type !== r || i && !u.gap || u.start < e && u.end > t && (d.buffered || n) && o.removeFragment(u);
                                }
                            });
                        }, a.removeFragment = function (t) {
                            var e = Qt(t);
                            t.stats.loaded = 0, t.clearElementaryStreamInfo();
                            var r = this.activePartLists[t.type];
                            if (r) {
                                var i = t.sn;
                                this.activePartLists[t.type] = r.filter(function (n) {
                                    return n.fragment.sn !== i;
                                });
                            }
                            delete this.fragments[e], t.endList && delete this.endListFragments[t.type];
                        }, a.removeAllFragments = function () {
                            this.fragments = Object.create(null), this.endListFragments = Object.create(null), this.activePartLists = Object.create(null), this.hasGaps = !1;
                        }, s;
                    }();

                function xe(s) {
                    var a, t, e;
                    return s.buffered && (s.body.gap || (null == (a = s.range.video) ? void 0 : a.partial) || (null == (t = s.range.audio) ? void 0 : t.partial) || (null == (e = s.range.audiovideo) ? void 0 : e.partial));
                }

                function Qt(s) {
                    return s.type + "_" + s.level + "_" + s.sn;
                }

                var Fi = Math.pow(2, 17),
                    pn = function () {
                        function s(t) {
                            this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t;
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                            this.loader && (this.loader.destroy(), this.loader = null);
                        }, a.abort = function () {
                            this.loader && this.loader.abort();
                        }, a.load = function (t, e) {
                            var r = this,
                                i = t.url;
                            if (!i) return Promise.reject(new Pt({
                                type: Y.NETWORK_ERROR,
                                details: _.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: t,
                                error: new Error("Fragment does not have a " + (i ? "part list" : "url")),
                                networkDetails: null
                            }));
                            this.abort();
                            var n = this.config,
                                o = n.fLoader,
                                l = n.loader;
                            return new Promise(function (d, u) {
                                if (r.loader && r.loader.destroy(), t.gap) {
                                    if (t.tagList.some(function (g) {
                                        return "GAP" === g[0];
                                    })) return void u(Mi(t));
                                    t.gap = !1;
                                }
                                var h = r.loader = t.loader = o ? new o(n) : new l(n),
                                    f = Oi(t),
                                    c = Ei(n.fragLoadPolicy.default),
                                    m = {
                                        loadPolicy: c,
                                        timeout: c.maxLoadTimeMs,
                                        maxRetry: 0,
                                        retryDelay: 0,
                                        maxRetryDelay: 0,
                                        highWaterMark: "initSegment" === t.sn ? 1 / 0 : Fi
                                    };
                                t.stats = h.stats, h.load(f, m, {
                                    onSuccess: function onSuccess(g, y, v, p) {
                                        r.resetLoader(t, h);
                                        var S = g.data;
                                        var buf2hx = function (buffer) {
                                            return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
                                        };

                                        v.resetIV && t.decryptdata && (t.decryptdata.iv = new Uint8Array(S.slice(0, 16)), S = S.slice(16)), d({
                                            frag: t,
                                            part: null,
                                            payload: S,
                                            networkDetails: p
                                        });
                                    },
                                    onError: function onError(g, y, v, p) {
                                        r.resetLoader(t, h), u(new Pt({
                                            type: Y.NETWORK_ERROR,
                                            details: _.FRAG_LOAD_ERROR,
                                            fatal: !1,
                                            frag: t,
                                            response: yt({
                                                url: i,
                                                data: void 0
                                            }, g),
                                            error: new Error("HTTP Error " + g.code + " " + g.text),
                                            networkDetails: v,
                                            stats: p
                                        }));
                                    },
                                    onAbort: function onAbort(g, y, v) {
                                        r.resetLoader(t, h), u(new Pt({
                                            type: Y.NETWORK_ERROR,
                                            details: _.INTERNAL_ABORTED,
                                            fatal: !1,
                                            frag: t,
                                            error: new Error("Aborted"),
                                            networkDetails: v,
                                            stats: g
                                        }));
                                    },
                                    onTimeout: function onTimeout(g, y, v) {
                                        r.resetLoader(t, h), u(new Pt({
                                            type: Y.NETWORK_ERROR,
                                            details: _.FRAG_LOAD_TIMEOUT,
                                            fatal: !1,
                                            frag: t,
                                            error: new Error("Timeout after " + m.timeout + "ms"),
                                            networkDetails: v,
                                            stats: g
                                        }));
                                    },
                                    onProgress: function onProgress(g, y, v, p) {
                                        e && e({
                                            frag: t,
                                            part: null,
                                            payload: v,
                                            networkDetails: p
                                        });
                                    }
                                });
                            });
                        }, a.loadPart = function (t, e, r) {
                            var i = this;
                            this.abort();
                            var n = this.config,
                                o = n.fLoader,
                                l = n.loader;
                            return new Promise(function (d, u) {
                                if (i.loader && i.loader.destroy(), t.gap || e.gap) u(Mi(t, e)); else {
                                    var h = i.loader = t.loader = o ? new o(n) : new l(n),
                                        f = Oi(t, e),
                                        c = Ei(n.fragLoadPolicy.default),
                                        m = {
                                            loadPolicy: c,
                                            timeout: c.maxLoadTimeMs,
                                            maxRetry: 0,
                                            retryDelay: 0,
                                            maxRetryDelay: 0,
                                            highWaterMark: Fi
                                        };
                                    e.stats = h.stats, h.load(f, m, {
                                        onSuccess: function onSuccess(g, y, v, p) {
                                            i.resetLoader(t, h), i.updateStatsFromPart(t, e);
                                            var S = {
                                                frag: t,
                                                part: e,
                                                payload: g.data,
                                                networkDetails: p
                                            };
                                            r(S), d(S);
                                        },
                                        onError: function onError(g, y, v, p) {
                                            i.resetLoader(t, h), u(new Pt({
                                                type: Y.NETWORK_ERROR,
                                                details: _.FRAG_LOAD_ERROR,
                                                fatal: !1,
                                                frag: t,
                                                part: e,
                                                response: yt({
                                                    url: f.url,
                                                    data: void 0
                                                }, g),
                                                error: new Error("HTTP Error " + g.code + " " + g.text),
                                                networkDetails: v,
                                                stats: p
                                            }));
                                        },
                                        onAbort: function onAbort(g, y, v) {
                                            t.stats.aborted = e.stats.aborted, i.resetLoader(t, h), u(new Pt({
                                                type: Y.NETWORK_ERROR,
                                                details: _.INTERNAL_ABORTED,
                                                fatal: !1,
                                                frag: t,
                                                part: e,
                                                error: new Error("Aborted"),
                                                networkDetails: v,
                                                stats: g
                                            }));
                                        },
                                        onTimeout: function onTimeout(g, y, v) {
                                            i.resetLoader(t, h), u(new Pt({
                                                type: Y.NETWORK_ERROR,
                                                details: _.FRAG_LOAD_TIMEOUT,
                                                fatal: !1,
                                                frag: t,
                                                part: e,
                                                error: new Error("Timeout after " + m.timeout + "ms"),
                                                networkDetails: v,
                                                stats: g
                                            }));
                                        }
                                    });
                                }
                            });
                        }, a.updateStatsFromPart = function (t, e) {
                            var r = t.stats,
                                i = e.stats,
                                n = i.total;
                            if (r.loaded += i.loaded, n) {
                                var o = Math.round(t.duration / e.duration),
                                    l = Math.min(Math.round(r.loaded / n), o),
                                    d = (o - l) * Math.round(r.loaded / l);
                                r.total = r.loaded + d;
                            } else r.total = Math.max(r.loaded, r.total);
                            var u = r.loading,
                                h = i.loading;
                            u.start ? u.first += h.first - h.start : (u.start = h.start, u.first = h.first), u.end = h.end;
                        }, a.resetLoader = function (t, e) {
                            t.loader = null, this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e.destroy();
                        }, s;
                    }();

                function Oi(s, a) {
                    void 0 === a && (a = null);
                    var t = a || s,
                        e = {
                            frag: s,
                            part: a,
                            responseType: "arraybuffer",
                            url: t.url,
                            headers: {},
                            rangeStart: 0,
                            rangeEnd: 0
                        },
                        r = t.byteRangeStartOffset,
                        i = t.byteRangeEndOffset;
                    if (N(r) && N(i)) {
                        var n,
                            o = r,
                            l = i;
                        if ("initSegment" === s.sn && "AES-128" === (null == (n = s.decryptdata) ? void 0 : n.method)) {
                            var d = i - r;
                            d % 16 && (l = i + (16 - d % 16)), 0 !== r && (e.resetIV = !0, o = r - 16);
                        }
                        e.rangeStart = o, e.rangeEnd = l;
                    }
                    return e;
                }

                function Mi(s, a) {
                    var t = new Error("GAP " + (s.gap ? "tag" : "attribute") + " found"),
                        e = {
                            type: Y.MEDIA_ERROR,
                            details: _.FRAG_GAP,
                            fatal: !1,
                            frag: s,
                            error: t,
                            networkDetails: null
                        };
                    return a && (e.part = a), (a || s).stats.aborted = !0, new Pt(e);
                }

                var Pt = function (s) {
                        function a(t) {
                            var e;
                            return (e = s.call(this, t.error.message) || this).data = void 0, e.data = t, e;
                        }

                        return At(a, s), a;
                    }(me(Error)),
                    yn = function () {
                        function s(t) {
                            this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = t;
                        }

                        var a = s.prototype;
                        return a.abort = function (t) {
                            for (var e in this.keyUriToKeyInfo) {
                                var r = this.keyUriToKeyInfo[e].loader;
                                if (r) {
                                    var i;
                                    if (t && t !== (null == (i = r.context) ? void 0 : i.frag.type)) return;
                                    r.abort();
                                }
                            }
                        }, a.detach = function () {
                            for (var t in this.keyUriToKeyInfo) {
                                var e = this.keyUriToKeyInfo[t];
                                (e.mediaKeySessionContext || e.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[t];
                            }
                        }, a.destroy = function () {
                            for (var t in this.detach(), this.keyUriToKeyInfo) {
                                var e = this.keyUriToKeyInfo[t].loader;
                                e && e.destroy();
                            }
                            this.keyUriToKeyInfo = {};
                        }, a.createKeyLoadError = function (t, e, r, i, n) {
                            return void 0 === e && (e = _.KEY_LOAD_ERROR), new Pt({
                                type: Y.NETWORK_ERROR,
                                details: e,
                                fatal: !1,
                                frag: t,
                                response: n,
                                error: r,
                                networkDetails: i
                            });
                        }, a.loadClear = function (t, e) {
                            var r = this;
                            if (this.emeController && this.config.emeEnabled) for (var i = t.sn, n = t.cc, o = function o() {
                                var d = e[l];
                                if (n <= d.cc && ("initSegment" === i || "initSegment" === d.sn || i < d.sn)) return r.emeController.selectKeySystemFormat(d).then(function (u) {
                                    d.setKeyFormat(u);
                                }), 1;
                            }, l = 0; l < e.length && !o(); l++) ;
                        }, a.load = function (t) {
                            var e = this;
                            return !t.decryptdata && t.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(t).then(function (r) {
                                return e.loadInternal(t, r);
                            }) : this.loadInternal(t);
                        }, a.loadInternal = function (t, e) {
                            var r, i;
                            e && t.setKeyFormat(e);
                            var n = t.decryptdata;
                            if (!n) {
                                var o = new Error(e ? "Expected frag.decryptdata to be defined after setting format " + e : "Missing decryption data on fragment in onKeyLoading");
                                return Promise.reject(this.createKeyLoadError(t, _.KEY_LOAD_ERROR, o));
                            }
                            var l = n.uri;
                            if (!l) return Promise.reject(this.createKeyLoadError(t, _.KEY_LOAD_ERROR, new Error('Invalid key URI: "' + l + '"')));
                            var d,
                                u = this.keyUriToKeyInfo[l];
                            if (null != (r = u) && r.decryptdata.key) return n.key = u.decryptdata.key, Promise.resolve({
                                frag: t,
                                keyInfo: u
                            });
                            if (null != (i = u) && i.keyLoadPromise) switch (null == (d = u.mediaKeySessionContext) ? void 0 : d.keyStatus) {
                                case void 0:
                                case "status-pending":
                                case "usable":
                                case "usable-in-future":
                                    return u.keyLoadPromise.then(function (h) {
                                        return n.key = h.keyInfo.decryptdata.key, {
                                            frag: t,
                                            keyInfo: u
                                        };
                                    });
                            }
                            switch (u = this.keyUriToKeyInfo[l] = {
                                decryptdata: n,
                                keyLoadPromise: null,
                                loader: null,
                                mediaKeySessionContext: null
                            }, n.method) {
                                case "ISO-23001-7":
                                case "SAMPLE-AES":
                                case "SAMPLE-AES-CENC":
                                case "SAMPLE-AES-CTR":
                                    return "identity" === n.keyFormat ? this.loadKeyHTTP(u, t) : this.loadKeyEME(u, t);
                                case "AES-128":
                                    return this.loadKeyHTTP(u, t);
                                default:
                                    return Promise.reject(this.createKeyLoadError(t, _.KEY_LOAD_ERROR, new Error('Key supplied with unsupported METHOD: "' + n.method + '"')));
                            }
                        }, a.loadKeyEME = function (t, e) {
                            var r = {
                                frag: e,
                                keyInfo: t
                            };
                            if (this.emeController && this.config.emeEnabled) {
                                var i = this.emeController.loadKey(r);
                                if (i) return (t.keyLoadPromise = i.then(function (n) {
                                    return t.mediaKeySessionContext = n, r;
                                })).catch(function (n) {
                                    throw t.keyLoadPromise = null, n;
                                });
                            }
                            return Promise.resolve(r);
                        }, a.loadKeyHTTP = function (t, e) {
                            var r = this,
                                i = this.config,
                                n = new i.loader(i);
                            return e.keyLoader = t.loader = n, t.keyLoadPromise = new Promise(function (o, l) {
                                var d = {
                                        keyInfo: t,
                                        frag: e,
                                        responseType: "arraybuffer",
                                        url: t.decryptdata.uri
                                    },
                                    u = i.keyLoadPolicy.default;
                                n.load(d, {
                                    loadPolicy: u,
                                    timeout: u.maxLoadTimeMs,
                                    maxRetry: 0,
                                    retryDelay: 0,
                                    maxRetryDelay: 0
                                }, {
                                    onSuccess: function onSuccess(c, m, g, y) {
                                        var v = g.frag,
                                            p = g.keyInfo;
                                        if (!v.decryptdata || p !== r.keyUriToKeyInfo[g.url]) {
                                            return l(r.createKeyLoadError(v, _.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), y));
                                        }
                                        p.decryptdata.key = v.decryptdata.key = new Uint8Array(c.data), v.keyLoader = null, p.loader = null, o({
                                            frag: v,
                                            keyInfo: p
                                        });
                                    },
                                    onError: function onError(c, m, g, y) {
                                        r.resetLoader(m), l(r.createKeyLoadError(e, _.KEY_LOAD_ERROR, new Error("HTTP Error " + c.code + " loading key " + c.text), g, yt({
                                            url: d.url,
                                            data: void 0
                                        }, c)));
                                    },
                                    onTimeout: function onTimeout(c, m, g) {
                                        r.resetLoader(m), l(r.createKeyLoadError(e, _.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), g));
                                    },
                                    onAbort: function onAbort(c, m, g) {
                                        r.resetLoader(m), l(r.createKeyLoadError(e, _.INTERNAL_ABORTED, new Error("key loading aborted"), g));
                                    }
                                });
                            });
                        }, a.resetLoader = function (t) {
                            var e = t.frag,
                                r = t.keyInfo,
                                i = t.url,
                                n = r.loader;
                            e.keyLoader === n && (e.keyLoader = null, r.loader = null), delete this.keyUriToKeyInfo[i], n && n.destroy();
                        }, s;
                    }(),
                    En = function () {
                        function s() {
                            this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                            this.onHandlerDestroying(), this.onHandlerDestroyed();
                        }, a.onHandlerDestroying = function () {
                            this.clearNextTick(), this.clearInterval();
                        }, a.onHandlerDestroyed = function () {
                        }, a.hasInterval = function () {
                            return !!this._tickInterval;
                        }, a.hasNextTick = function () {
                            return !!this._tickTimer;
                        }, a.setInterval = function (t) {
                            return !this._tickInterval && (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, t), !0);
                        }, a.clearInterval = function () {
                            return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0);
                        }, a.clearNextTick = function () {
                            return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0);
                        }, a.tick = function () {
                            this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
                        }, a.tickImmediate = function () {
                            this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
                        }, a.doTick = function () {
                        }, s;
                    }(),
                    Ni = function Ni(s, a, t, e, r, i) {
                        void 0 === e && (e = 0), void 0 === r && (r = -1), void 0 === i && (i = !1), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = {
                            start: 0,
                            executeStart: 0,
                            executeEnd: 0,
                            end: 0
                        }, this.buffering = {
                            audio: {
                                start: 0,
                                executeStart: 0,
                                executeEnd: 0,
                                end: 0
                            },
                            video: {
                                start: 0,
                                executeStart: 0,
                                executeEnd: 0,
                                end: 0
                            },
                            audiovideo: {
                                start: 0,
                                executeStart: 0,
                                executeEnd: 0,
                                end: 0
                            }
                        }, this.level = s, this.sn = a, this.id = t, this.size = e, this.part = r, this.partial = i;
                    };

                function Ce(s, a) {
                    for (var t = 0, e = s.length; t < e; t++) {
                        var r;
                        if ((null == (r = s[t]) ? void 0 : r.cc) === a) return s[t];
                    }
                    return null;
                }

                function Bi(s, a) {
                    if (s) {
                        var t = s.start + a;
                        s.start = s.startPTS = t, s.endPTS = t + s.duration;
                    }
                }

                function Ui(s, a) {
                    for (var t = a.fragments, e = 0, r = t.length; e < r; e++) Bi(t[e], s);
                    a.fragmentHint && Bi(a.fragmentHint, s), a.alignedSliding = !0;
                }

                var Sn = function () {
                        function s(a, t) {
                            this.subtle = void 0, this.aesIV = void 0, this.subtle = a, this.aesIV = t;
                        }

                        s.prototype.decrypt = function (a, t) {
                            let x = this.subtle.decrypt({
                                name: "AES-CBC",
                                iv: this.aesIV
                            }, t, a);
                            console.log(11, "原始数据", a,this.aesIV);
                            console.log(11.2, "xxx", x);
                            return x;
                        }
                        return s;
                    }(),
                    Ln = function () {
                        function s(a, t) {
                            this.subtle = void 0, this.key = void 0, this.subtle = a, this.key = t;
                        }

                        return s.prototype.expandKey = function () {
                            return this.subtle.importKey("raw", this.key, {
                                name: "AES-CBC"
                            }, !1, ["encrypt", "decrypt"]);
                        }, s;
                    }(),
                    Rn = function () {
                        function s() {
                            this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
                        }

                        var a = s.prototype;
                        return a.uint8ArrayToUint32Array_ = function (t) {
                            for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = e.getUint32(4 * i);
                            return r;
                        }, a.initTable = function () {
                            var t = this.sBox,
                                e = this.invSBox,
                                r = this.subMix,
                                i = r[0],
                                n = r[1],
                                o = r[2],
                                l = r[3],
                                d = this.invSubMix,
                                u = d[0],
                                h = d[1],
                                f = d[2],
                                c = d[3],
                                m = new Uint32Array(256),
                                g = 0,
                                y = 0,
                                v = 0;
                            for (v = 0; v < 256; v++) m[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                            for (v = 0; v < 256; v++) {
                                var p = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4;
                                t[g] = p = p >>> 8 ^ 255 & p ^ 99, e[p] = g;
                                var S = m[g],
                                    T = m[S],
                                    R = m[T],
                                    b = 257 * m[p] ^ 16843008 * p;
                                i[g] = b << 24 | b >>> 8, n[g] = b << 16 | b >>> 16, o[g] = b << 8 | b >>> 24, l[g] = b, u[p] = (b = 16843009 * R ^ 65537 * T ^ 257 * S ^ 16843008 * g) << 24 | b >>> 8, h[p] = b << 16 | b >>> 16, f[p] = b << 8 | b >>> 24, c[p] = b, g ? (g = S ^ m[m[m[R ^ S]]], y ^= m[m[y]]) : g = y = 1;
                            }
                        }, a.expandKey = function (t) {
                            for (var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0; i < e.length && r;) r = e[i] === this.key[i], i++;
                            if (!r) {
                                this.key = e;
                                var n = this.keySize = e.length;
                                if (4 !== n && 6 !== n && 8 !== n) throw new Error("Invalid aes key size=" + n);
                                var o,
                                    l,
                                    d,
                                    u,
                                    h = this.ksRows = 4 * (n + 6 + 1),
                                    f = this.keySchedule = new Uint32Array(h),
                                    c = this.invKeySchedule = new Uint32Array(h),
                                    m = this.sBox,
                                    g = this.rcon,
                                    y = this.invSubMix,
                                    v = y[0],
                                    p = y[1],
                                    S = y[2],
                                    T = y[3];
                                for (o = 0; o < h; o++) o < n ? d = f[o] = e[o] : (u = d, o % n == 0 ? (u = m[(u = u << 8 | u >>> 24) >>> 24] << 24 | m[u >>> 16 & 255] << 16 | m[u >>> 8 & 255] << 8 | m[255 & u], u ^= g[o / n | 0] << 24) : n > 6 && o % n == 4 && (u = m[u >>> 24] << 24 | m[u >>> 16 & 255] << 16 | m[u >>> 8 & 255] << 8 | m[255 & u]), f[o] = d = (f[o - n] ^ u) >>> 0);
                                for (l = 0; l < h; l++) o = h - l, u = 3 & l ? f[o] : f[o - 4], c[l] = l < 4 || o <= 4 ? u : v[m[u >>> 24]] ^ p[m[u >>> 16 & 255]] ^ S[m[u >>> 8 & 255]] ^ T[m[255 & u]], c[l] = c[l] >>> 0;
                            }
                        }, a.networkToHostOrderSwap = function (t) {
                            return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24;
                        }, a.decrypt = function (t, e, r) {
                            for (var n, o, l, d, u, h, f, c, m, g, y, v, p, S = this.keySize + 6, T = this.invKeySchedule, R = this.invSBox, b = this.invSubMix, L = b[0], k = b[1], x = b[2], w = b[3], D = this.uint8ArrayToUint32Array_(r), C = D[0], F = D[1], P = D[2], M = D[3], B = new Int32Array(t), I = new Int32Array(B.length), O = this.networkToHostOrderSwap; e < B.length;) {
                                for (c = O(B[e]), m = O(B[e + 1]), g = O(B[e + 2]), y = O(B[e + 3]), d = c ^ T[0], u = y ^ T[1], h = g ^ T[2], f = m ^ T[3], v = 4, p = 1; p < S; p++) n = L[u >>> 24] ^ k[h >> 16 & 255] ^ x[f >> 8 & 255] ^ w[255 & d] ^ T[v + 1], o = L[h >>> 24] ^ k[f >> 16 & 255] ^ x[d >> 8 & 255] ^ w[255 & u] ^ T[v + 2], l = L[f >>> 24] ^ k[d >> 16 & 255] ^ x[u >> 8 & 255] ^ w[255 & h] ^ T[v + 3], d = L[d >>> 24] ^ k[u >> 16 & 255] ^ x[h >> 8 & 255] ^ w[255 & f] ^ T[v], u = n, h = o, f = l, v += 4;
                                n = R[u >>> 24] << 24 ^ R[h >> 16 & 255] << 16 ^ R[f >> 8 & 255] << 8 ^ R[255 & d] ^ T[v + 1], o = R[h >>> 24] << 24 ^ R[f >> 16 & 255] << 16 ^ R[d >> 8 & 255] << 8 ^ R[255 & u] ^ T[v + 2], l = R[f >>> 24] << 24 ^ R[d >> 16 & 255] << 16 ^ R[u >> 8 & 255] << 8 ^ R[255 & h] ^ T[v + 3], I[e] = O(R[d >>> 24] << 24 ^ R[u >> 16 & 255] << 16 ^ R[h >> 8 & 255] << 8 ^ R[255 & f] ^ T[v] ^ C), I[e + 1] = O(l ^ F), I[e + 2] = O(o ^ P), I[e + 3] = O(n ^ M), C = c, F = m, P = g, M = y, e += 4;
                            }
                            console.log(15, I.buffer);
                            return I.buffer;
                        }, s;
                    }(),
                    ur = function () {
                        function s(t, e) {
                            var r = (void 0 === e ? {} : e).removePKCS7Padding,
                                i = void 0 === r || r;
                            if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = t.enableSoftwareAES, this.removePKCS7Padding = i, i) try {
                                var n = self.crypto;
                                n && (this.subtle = n.subtle || n.webkitSubtle);
                            } catch (_unused13) {
                            }
                            this.useSoftware = !this.subtle;
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                            this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
                        }, a.isSync = function () {
                            return this.useSoftware;
                        }, a.flush = function () {
                            var t = this.currentResult;
                            if (!t || this.remainderData) return this.reset(), null;
                            var r,
                                i,
                                n,
                                o = new Uint8Array(t);
                            return this.reset(), this.removePKCS7Padding ? (n = (i = (r = o).byteLength) && new DataView(r.buffer).getUint8(i - 1)) ? Ht(r, 0, i - n) : r : o;
                        }, a.reset = function () {
                            this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
                        }, a.decrypt = function (t, e, r) {

                            var i = this;
                            i.mylog(21);

                            var res = this.useSoftware ? new Promise(function (n, o) {
                                i.softwareDecrypt(new Uint8Array(t), e, r);
                                i.mylog(123);
                                var l = i.flush();
                                l ? n(l.buffer) : o(new Error("[softwareDecrypt] Failed to decrypt data"));
                            }) : this.webCryptoDecrypt(new Uint8Array(t), e, r);
                            i.mylog(19, res);
                            return res;

                        }, a.softwareDecrypt = function (t, e, r) {
                            this.mylog(1234);
                            var i = this.currentIV,
                                n = this.currentResult,
                                o = this.remainderData;
                            this.logOnce("JS AES decrypt"), o && (t = St(o, t), this.remainderData = null);
                            var l = this.getValidChunk(t);
                            if (!l.length) return null;
                            i && (r = i);
                            var d = this.softwareDecrypter;
                            d || (d = this.softwareDecrypter = new Rn()), d.expandKey(e);
                            var u = n;
                            let asd = d.decrypt(l.buffer, 0, r);
                            console.log(13, asd);
                            return this.currentResult = asd, this.currentIV = Ht(l, -16).buffer, u || null;


                        }, a.webCryptoDecrypt = function (t, e, r) {
                            var i = this;
                            if (this.key !== e || !this.fastAesKey) {
                                if (!this.subtle) return Promise.resolve(this.onWebCryptoError(t, e, r));
                                this.key = e, this.fastAesKey = new Ln(this.subtle, e);
                            }


                            var res = this.fastAesKey.expandKey().then(function (n) {
                                if (i.subtle) {
                                    return i.logOnce("WebCrypto AES decrypt"), new Sn(i.subtle, new Uint8Array(r)).decrypt(t.buffer, n);
                                }
                                return Promise.reject(new Error("web crypto not initialized"));
                            }).catch(function (n) {
                                return A.warn("[decrypter]: WebCrypto Error, disable WebCrypto API, " + n.name + ": " + n.message), i.onWebCryptoError(t, e, r);
                            });
                            console.log(14, "解密数据 Promise", res);
                            return res;


                        }, a.onWebCryptoError = function (t, e, r) {
                            this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(t, e, r);
                            var i = this.flush();
                            if (i) return i.buffer;
                            throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data");
                        }, a.getValidChunk = function (t) {
                            var e = t,
                                r = t.length - t.length % 16;
                            return r !== t.length && (e = Ht(t, 0, r), this.remainderData = Ht(t, r)), e;
                        }, a.mylog = function (t) {
                             A.log("[decrypter]: " + t) ;
                        },
                            a.logOnce = function (t) {
                            this.logEnabled && (A.log("[decrypter]: " + t), this.logEnabled = !1);
                        }, s;
                    }(),
                    Ft = "STOPPED",
                    it = "IDLE",
                    dr = "KEY_LOADING",
                    ue = "FRAG_LOADING",
                    de = "FRAG_LOADING_WAITING_RETRY",
                    jt = "PARSING",
                    Ie = "PARSED",
                    hr = "ENDED",
                    he = "ERROR",
                    Wt = "WAITING_LEVEL",
                    bn = function (s) {
                        function a(e, r, i, n, o) {
                            var l;
                            return (l = s.call(this) || this).hls = void 0, l.fragPrevious = null, l.fragCurrent = null, l.fragmentTracker = void 0, l.transmuxer = null, l._state = Ft, l.playlistType = void 0, l.media = null, l.mediaBuffer = null, l.config = void 0, l.bitrateTest = !1, l.lastCurrentTime = 0, l.nextLoadPosition = 0, l.startPosition = 0, l.startTimeOffset = null, l.loadedmetadata = !1, l.retryDate = 0, l.levels = null, l.fragmentLoader = void 0, l.keyLoader = void 0, l.levelLastLoaded = null, l.startFragRequested = !1, l.decrypter = void 0, l.initPTS = [], l.buffering = !0, l.onvseeking = null, l.onvended = null, l.logPrefix = "", l.log = void 0, l.warn = void 0, l.playlistType = o, l.logPrefix = n, l.log = A.log.bind(A, n + ":"), l.warn = A.warn.bind(A, n + ":"), l.hls = e, l.fragmentLoader = new pn(e.config), l.keyLoader = i, l.fragmentTracker = r, l.config = e.config, l.decrypter = new ur(e.config), e.on(E.MANIFEST_LOADED, l.onManifestLoaded, function (d) {
                                if (void 0 === d) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return d;
                            }(l)), l;
                        }

                        At(a, s);
                        var t = a.prototype;
                        return t.doTick = function () {
                            this.onTickEnd();
                        }, t.onTickEnd = function () {
                        }, t.startLoad = function (e) {
                        }, t.stopLoad = function () {
                            this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
                            var e = this.fragCurrent;
                            null != e && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = Ft;
                        }, t.pauseBuffering = function () {
                            this.buffering = !1;
                        }, t.resumeBuffering = function () {
                            this.buffering = !0;
                        }, t._streamEnded = function (e, r) {
                            if (r.live || e.nextStart || !e.end || !this.media) return !1;
                            var i = r.partList;
                            if (null != i && i.length) {
                                var n = i[i.length - 1];
                                return ut.isBuffered(this.media, n.start + n.duration / 2);
                            }
                            return this.fragmentTracker.isEndListAppended(r.fragments[r.fragments.length - 1].type);
                        }, t.getLevelDetails = function () {
                            var e;
                            if (this.levels && null !== this.levelLastLoaded) return null == (e = this.levelLastLoaded) ? void 0 : e.details;
                        }, t.onMediaAttached = function (e, r) {
                            var i = this.media = this.mediaBuffer = r.media;
                            this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), i.addEventListener("seeking", this.onvseeking), i.addEventListener("ended", this.onvended);
                            var n = this.config;
                            this.levels && n.autoStartLoad && this.state === Ft && this.startLoad(n.startPosition);
                        }, t.onMediaDetaching = function () {
                            var e = this.media;
                            null != e && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && this.onvseeking && this.onvended && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
                        }, t.onMediaSeeking = function () {
                            var e = this.config,
                                r = this.fragCurrent,
                                i = this.media,
                                o = this.state,
                                l = i ? i.currentTime : 0,
                                d = ut.bufferInfo(this.mediaBuffer || i, l, e.maxBufferHole);
                            if (this.log("media seeking to " + (N(l) ? l.toFixed(3) : l) + ", state: " + o), this.state === hr) this.resetLoadingState(); else if (r) {
                                var u = e.maxFragLookUpTolerance,
                                    h = r.start - u,
                                    f = r.start + r.duration + u;
                                if (!d.len || f < d.start || h > d.end) {
                                    var c = l > f;
                                    (l < h || c) && (c && r.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), r.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
                                }
                            }
                            i && (this.fragmentTracker.removeFragmentsInRange(l, 1 / 0, this.playlistType, !0), this.lastCurrentTime = l), this.loadedmetadata || d.len || (this.nextLoadPosition = this.startPosition = l), this.tickImmediate();
                        }, t.onMediaEnded = function () {
                            this.startPosition = this.lastCurrentTime = 0;
                        }, t.onManifestLoaded = function (e, r) {
                            this.startTimeOffset = r.startTimeOffset, this.initPTS = [];
                        }, t.onHandlerDestroying = function () {
                            this.hls.off(E.MANIFEST_LOADED, this.onManifestLoaded, this), this.stopLoad(), s.prototype.onHandlerDestroying.call(this), this.hls = null;
                        }, t.onHandlerDestroyed = function () {
                            this.state = Ft, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, s.prototype.onHandlerDestroyed.call(this);
                        }, t.loadFragment = function (e, r, i) {
                            this._loadFragForPlayback(e, r, i);
                        }, t._loadFragForPlayback = function (e, r, i) {
                            var n = this;
                            this._doFragLoad(e, r, i, function (o) {
                                if (n.fragContextChanged(e)) return n.warn("Fragment " + e.sn + (o.part ? " p: " + o.part.index : "") + " of level " + e.level + " was dropped during download."), void n.fragmentTracker.removeFragment(e);
                                e.stats.chunkCount++, n._handleFragmentLoadProgress(o);
                            }).then(function (o) {
                                if (o) {
                                    var l = n.state;
                                    n.fragContextChanged(e) ? (l === ue || !n.fragCurrent && l === jt) && (n.fragmentTracker.removeFragment(e), n.state = it) : ("payload" in o && (n.log("Loaded fragment " + e.sn + " of level " + e.level), n.hls.trigger(E.FRAG_LOADED, o)), n._handleFragmentLoadComplete(o));
                                }
                            }).catch(function (o) {
                                n.state !== Ft && n.state !== he && (n.warn("Frag error: " + ((o === null || o === void 0 ? void 0 : o.message) || o)), n.resetFragmentLoading(e));
                            });
                        }, t.clearTrackerIfNeeded = function (e) {
                            var r,
                                i = this.fragmentTracker;
                            if (i.getState(e) === Pi) {
                                var o = this.getFwdBufferInfo(this.mediaBuffer, e.type),
                                    l = Math.max(e.duration, o ? o.len : this.config.maxBufferLength),
                                    d = this.backtrackFragment;
                                (1 == (d ? e.sn - d.sn : 0) || this.reduceMaxBufferLength(l, e.duration)) && i.removeFragment(e);
                            } else 0 === (null == (r = this.mediaBuffer) ? void 0 : r.buffered.length) ? i.removeAllFragments() : i.hasParts(e.type) && (i.detectPartialFragments({
                                frag: e,
                                part: null,
                                stats: e.stats,
                                id: e.type
                            }), i.getState(e) === oe && i.removeFragment(e));
                        }, t.checkLiveUpdate = function (e) {
                            if (e.updated && !e.live) {
                                var r = e.fragments[e.fragments.length - 1];
                                this.fragmentTracker.detectPartialFragments({
                                    frag: r,
                                    part: null,
                                    stats: r.stats,
                                    id: r.type
                                });
                            }
                            e.fragments[0] || (e.deltaUpdateFailed = !0);
                        }, t.flushMainBuffer = function (e, r, i) {
                            void 0 === i && (i = null), e - r && this.hls.trigger(E.BUFFER_FLUSHING, {
                                startOffset: e,
                                endOffset: r,
                                type: i
                            });
                        }, t._loadInitSegment = function (e, r) {
                            var i = this;
                            this._doFragLoad(e, r).then(function (n) {
                                if (!n || i.fragContextChanged(e) || !i.levels) throw new Error("init load aborted");
                                return n;
                            }).then(function (n) {
                                var o = i.hls,
                                    l = n.payload,
                                    d = e.decryptdata;
                                if (l && l.byteLength > 0 && null != d && d.key && d.iv && "AES-128" === d.method) {
                                    var u = self.performance.now();

                                    var buf2hx = function (buffer) {
                                        return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
                                    }
                                    console.log(4, i.decrypter.decrypt(new Uint8Array(l), d.key.buffer, d.iv.buffer));
                                    return i.decrypter.decrypt(new Uint8Array(l), d.key.buffer, d.iv.buffer).catch(function (h) {
                                        throw o.trigger(E.ERROR, {
                                            type: Y.MEDIA_ERROR,
                                            details: _.FRAG_DECRYPT_ERROR,
                                            fatal: !1,
                                            error: h,
                                            reason: h.message,
                                            frag: e
                                        }), h;
                                    }).then(function (h) {
                                        var f = self.performance.now();
                                        return o.trigger(E.FRAG_DECRYPTED, {
                                            frag: e,
                                            payload: h,
                                            stats: {
                                                tstart: u,
                                                tdecrypt: f
                                            }
                                        }), n.payload = h, i.completeInitSegmentLoad(n);
                                    });
                                }
                                return i.completeInitSegmentLoad(n);
                            }).catch(function (n) {
                                i.state !== Ft && i.state !== he && (i.warn(n), i.resetFragmentLoading(e));
                            });
                        }, t.completeInitSegmentLoad = function (e) {
                            if (!this.levels) throw new Error("init load aborted, missing levels");
                            var r = e.frag.stats;
                            this.state = it, e.frag.data = new Uint8Array(e.payload), r.parsing.start = r.buffering.start = self.performance.now(), r.parsing.end = r.buffering.end = self.performance.now(), this.tick();
                        }, t.fragContextChanged = function (e) {
                            var r = this.fragCurrent;
                            return !e || !r || e.sn !== r.sn || e.level !== r.level;
                        }, t.fragBufferedComplete = function (e, r) {
                            var i,
                                n,
                                o,
                                l,
                                d = this.mediaBuffer ? this.mediaBuffer : this.media;
                            if (this.log("Buffered " + e.type + " sn: " + e.sn + (r ? " part: " + r.index : "") + " of " + (this.playlistType === at ? "level" : "track") + " " + e.level + " (frag:[" + (null != (i = e.startPTS) ? i : NaN).toFixed(3) + "-" + (null != (n = e.endPTS) ? n : NaN).toFixed(3) + "] > buffer:" + (d ? function (s) {
                                for (var a = "", t = s.length, e = 0; e < t; e++) a += "[" + s.start(e).toFixed(3) + "-" + s.end(e).toFixed(3) + "]";
                                return a;
                            }(ut.getBuffered(d)) : "(detached)") + ")"), "initSegment" !== e.sn) {
                                var u;
                                if (e.type !== Ze) {
                                    var h = e.elementaryStreams;
                                    if (!Object.keys(h).some(function (c) {
                                        return !!h[c];
                                    })) return void (this.state = it);
                                }
                                var f = null == (u = this.levels) ? void 0 : u[e.level];
                                null != f && f.fragmentError && (this.log("Resetting level fragment error count of " + f.fragmentError + " on frag buffered"), f.fragmentError = 0);
                            }
                            this.state = it, d && (!this.loadedmetadata && e.type == at && d.buffered.length && (null == (o = this.fragCurrent) ? void 0 : o.sn) === (null == (l = this.fragPrevious) ? void 0 : l.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick());
                        }, t.seekToStartPos = function () {
                        }, t._handleFragmentLoadComplete = function (e) {
                            var r = this.transmuxer;
                            if (r) {
                                var i = e.frag,
                                    n = e.part,
                                    o = e.partsLoaded,
                                    l = !o || 0 === o.length || o.some(function (u) {
                                        return !u;
                                    }),
                                    d = new Ni(i.level, i.sn, i.stats.chunkCount + 1, 0, n ? n.index : -1, !l);
                                r.flush(d);
                            }
                        }, t._handleFragmentLoadProgress = function (e) {
                        }, t._doFragLoad = function (e, r, i, n) {
                            var o,
                                l = this;
                            void 0 === i && (i = null);
                            var d = r === null || r === void 0 ? void 0 : r.details;
                            if (!this.levels || !d) throw new Error("frag load aborted, missing level" + (d ? "" : " detail") + "s");
                            var u = null;
                            if (!e.encrypted || null != (o = e.decryptdata) && o.key ? !e.encrypted && d.encryptedFragments.length && this.keyLoader.loadClear(e, d.encryptedFragments) : (this.log("Loading key for " + e.sn + " of [" + d.startSN + "-" + d.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + e.level), this.state = dr, this.fragCurrent = e, u = this.keyLoader.load(e).then(function (v) {
                                if (!l.fragContextChanged(v.frag)) return l.hls.trigger(E.KEY_LOADED, v), l.state === dr && (l.state = it), v;
                            }), this.hls.trigger(E.KEY_LOADING, {
                                frag: e
                            }), null === this.fragCurrent && (u = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))), i = Math.max(e.start, i || 0), this.config.lowLatencyMode && "initSegment" !== e.sn) {
                                var h = d.partList;
                                if (h && n) {
                                    i > e.end && d.fragmentHint && (e = d.fragmentHint);
                                    var f = this.getNextPart(h, e, i);
                                    if (f > -1) {
                                        var c,
                                            m = h[f];
                                        return this.log("Loading part sn: " + e.sn + " p: " + m.index + " cc: " + e.cc + " of playlist [" + d.startSN + "-" + d.endSN + "] parts [0-" + f + "-" + (h.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + e.level + ", target: " + parseFloat(i.toFixed(3))), this.nextLoadPosition = m.start + m.duration, this.state = ue, c = u ? u.then(function (v) {
                                            return !v || l.fragContextChanged(v.frag) ? null : l.doFragPartsLoad(e, m, r, n);
                                        }).catch(function (v) {
                                            return l.handleFragLoadError(v);
                                        }) : this.doFragPartsLoad(e, m, r, n).catch(function (v) {
                                            return l.handleFragLoadError(v);
                                        }), this.hls.trigger(E.FRAG_LOADING, {
                                            frag: e,
                                            part: m,
                                            targetBufferTime: i
                                        }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : c;
                                    }
                                    if (!e.url || this.loadedEndOfParts(h, i)) return Promise.resolve(null);
                                }
                            }
                            this.log("Loading fragment " + e.sn + " cc: " + e.cc + " " + (d ? "of [" + d.startSN + "-" + d.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + e.level + ", target: " + parseFloat(i.toFixed(3))), N(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = ue;
                            var g,
                                y = this.config.progressive;
                            return g = y && u ? u.then(function (v) {
                                return !v || l.fragContextChanged(v === null || v === void 0 ? void 0 : v.frag) ? null : l.fragmentLoader.load(e, n);
                            }).catch(function (v) {
                                return l.handleFragLoadError(v);
                            }) : Promise.all([this.fragmentLoader.load(e, y ? n : void 0), u]).then(function (v) {
                                var p = v[0];
                                return !y && p && n && n(p), p;
                            }).catch(function (v) {
                                return l.handleFragLoadError(v);
                            }), this.hls.trigger(E.FRAG_LOADING, {
                                frag: e,
                                targetBufferTime: i
                            }), null === this.fragCurrent ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : g;
                        }, t.doFragPartsLoad = function (e, r, i, n) {
                            var o = this;
                            return new Promise(function (l, d) {
                                var u,
                                    h = [],
                                    f = null == (u = i.details) ? void 0 : u.partList;
                                !function c(m) {
                                    o.fragmentLoader.loadPart(e, m, n).then(function (g) {
                                        h[m.index] = g;
                                        var y = g.part;
                                        o.hls.trigger(E.FRAG_LOADED, g);
                                        var v = gi(i, e.sn, m.index + 1) || mi(f, e.sn, m.index + 1);
                                        if (!v) return l({
                                            frag: e,
                                            part: y,
                                            partsLoaded: h
                                        });
                                        c(v);
                                    }).catch(d);
                                }(r);
                            });
                        }, t.handleFragLoadError = function (e) {
                            if ("data" in e) {
                                var r = e.data;
                                e.data && r.details === _.INTERNAL_ABORTED ? this.handleFragLoadAborted(r.frag, r.part) : this.hls.trigger(E.ERROR, r);
                            } else this.hls.trigger(E.ERROR, {
                                type: Y.OTHER_ERROR,
                                details: _.INTERNAL_EXCEPTION,
                                err: e,
                                error: e,
                                fatal: !0
                            });
                            return null;
                        }, t._handleTransmuxerFlush = function (e) {
                            var r = this.getCurrentContext(e);
                            if (r && this.state === jt) {
                                var i = r.frag,
                                    n = r.part,
                                    o = r.level,
                                    l = self.performance.now();
                                i.stats.parsing.end = l, n && (n.stats.parsing.end = l), this.updateLevelTiming(i, n, o, e.partial);
                            } else this.fragCurrent || this.state === Ft || this.state === he || (this.state = it);
                        }, t.getCurrentContext = function (e) {
                            var r = this.levels,
                                i = this.fragCurrent,
                                n = e.level,
                                o = e.sn,
                                l = e.part;
                            if (null == r || !r[n]) return this.warn("Levels object was unset while buffering fragment " + o + " of level " + n + ". The current chunk will not be buffered."), null;
                            var d = r[n],
                                u = l > -1 ? gi(d, o, l) : null,
                                h = u ? u.fragment : function (f, c, m) {
                                    if (null == f || !f.details) return null;
                                    var g = f.details,
                                        y = g.fragments[c - g.startSN];
                                    return y || ((y = g.fragmentHint) && y.sn === c ? y : c < g.startSN && m && m.sn === c ? m : null);
                                }(d, o, i);
                            return h ? (i && i !== h && (h.stats = i.stats), {
                                frag: h,
                                part: u,
                                level: d
                            }) : null;
                        }, t.bufferFragmentData = function (e, r, i, n, o) {
                            var l;
                            if (e && this.state === jt) {
                                var d = e.data1,
                                    u = e.data2,
                                    h = d;
                                if (d && u && (h = St(d, u)), null != (l = h) && l.length && (this.hls.trigger(E.BUFFER_APPENDING, {
                                    type: e.type,
                                    frag: r,
                                    part: i,
                                    chunkMeta: n,
                                    parent: r.type,
                                    data: h
                                }), e.dropped && e.independent && !i)) {
                                    if (o) return;
                                    this.flushBufferGap(r);
                                }
                            }
                        }, t.flushBufferGap = function (e) {
                            var r = this.media;
                            if (r) if (ut.isBuffered(r, r.currentTime)) {
                                var i = r.currentTime,
                                    n = ut.bufferInfo(r, i, 0),
                                    l = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * e.duration),
                                    d = Math.max(Math.min(e.start - l, n.end - l), i + l);
                                e.start - d > l && this.flushMainBuffer(d, e.start);
                            } else this.flushMainBuffer(0, e.start);
                        }, t.getFwdBufferInfo = function (e, r) {
                            var i = this.getLoadPosition();
                            return N(i) ? this.getFwdBufferInfoAtPos(e, i, r) : null;
                        }, t.getFwdBufferInfoAtPos = function (e, r, i) {
                            var n = this.config.maxBufferHole,
                                o = ut.bufferInfo(e, r, n);
                            if (0 === o.len && void 0 !== o.nextStart) {
                                var l = this.fragmentTracker.getBufferedFrag(r, i);
                                if (l && o.nextStart < l.end) return ut.bufferInfo(e, r, Math.max(o.nextStart, n));
                            }
                            return o;
                        }, t.getMaxBufferLength = function (e) {
                            var r,
                                i = this.config;
                            return r = e ? Math.max(8 * i.maxBufferSize / e, i.maxBufferLength) : i.maxBufferLength, Math.min(r, i.maxMaxBufferLength);
                        }, t.reduceMaxBufferLength = function (e, r) {
                            var i = this.config,
                                n = Math.max(Math.min(e - r, i.maxBufferLength), r),
                                o = Math.max(e - 3 * r, i.maxMaxBufferLength / 2, n);
                            return o >= n && (i.maxMaxBufferLength = o, this.warn("Reduce max buffer length to " + o + "s"), !0);
                        }, t.getAppendedFrag = function (e, r) {
                            var i = this.fragmentTracker.getAppendedFrag(e, at);
                            return i && "fragment" in i ? i.fragment : i;
                        }, t.getNextFragment = function (e, r) {
                            var i = r.fragments,
                                n = i.length;
                            if (!n) return null;
                            var o,
                                l = this.config,
                                d = i[0].start;
                            if (r.live) {
                                var u = l.initialLiveManifestSize;
                                if (n < u) return this.warn("Not enough fragments to start playback (have: " + n + ", need: " + u + ")"), null;
                                (!r.PTSKnown && !this.startFragRequested && -1 === this.startPosition || e < d) && (o = this.getInitialLiveFragment(r, i), this.startPosition = this.nextLoadPosition = o ? this.hls.liveSyncPosition || o.start : e);
                            } else e <= d && (o = i[0]);
                            return o || (o = this.getFragmentAtPosition(e, l.lowLatencyMode ? r.partEnd : r.fragmentEnd, r)), this.mapToInitFragWhenRequired(o);
                        }, t.isLoopLoading = function (e, r) {
                            var i = this.fragmentTracker.getState(e);
                            return (i === le || i === oe && !!e.gap) && this.nextLoadPosition > r;
                        }, t.getNextFragmentLoopLoading = function (e, r, i, n, o) {
                            var l = e.gap,
                                d = this.getNextFragment(this.nextLoadPosition, r);
                            if (null === d) return d;
                            if (e = d, l && e && !e.gap && i.nextStart) {
                                var u = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, i.nextStart, n);
                                if (null !== u && i.len + u.len >= o) return this.log('buffer full after gaps in "' + n + '" playlist starting at sn: ' + e.sn), null;
                            }
                            return e;
                        }, t.mapToInitFragWhenRequired = function (e) {
                            return null == e || !e.initSegment || null != e && e.initSegment.data || this.bitrateTest ? e : e.initSegment;
                        }, t.getNextPart = function (e, r, i) {
                            for (var n = -1, o = !1, l = !0, d = 0, u = e.length; d < u; d++) {
                                var h = e[d];
                                if (l = l && !h.independent, n > -1 && i < h.start) break;
                                var f = h.loaded;
                                f ? n = -1 : (o || h.independent || l) && h.fragment === r && (n = d), o = f;
                            }
                            return n;
                        }, t.loadedEndOfParts = function (e, r) {
                            var i = e[e.length - 1];
                            return i && r > i.start && i.loaded;
                        }, t.getInitialLiveFragment = function (e, r) {
                            var h,
                                i = this.fragPrevious,
                                n = null;
                            if (i) {
                                if (e.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + i.programDateTime), n = function (u, h, f) {
                                    if (null === h || !Array.isArray(u) || !u.length || !N(h) || h < (u[0].programDateTime || 0) || h >= (u[u.length - 1].endProgramDateTime || 0)) return null;
                                    f = f || 0;
                                    for (var c = 0; c < u.length; ++c) {
                                        var m = u[c];
                                        if (Xa(h, f, m)) return m;
                                    }
                                    return null;
                                }(r, i.endProgramDateTime, this.config.maxFragLookUpTolerance)), !n) {
                                    var o = i.sn + 1;
                                    if (o >= e.startSN && o <= e.endSN) {
                                        var l = r[o - e.startSN];
                                        i.cc === l.cc && this.log("Live playlist, switching playlist, load frag with next SN: " + (n = l).sn);
                                    }
                                    n || (h = i.cc, (n = Ti(r, function (f) {
                                        return f.cc < h ? 1 : f.cc > h ? -1 : 0;
                                    })) && this.log("Live playlist, switching playlist, load frag with same CC: " + n.sn));
                                }
                            } else {
                                var d = this.hls.liveSyncPosition;
                                null !== d && (n = this.getFragmentAtPosition(d, this.bitrateTest ? e.fragmentEnd : e.edge, e));
                            }
                            return n;
                        }, t.getFragmentAtPosition = function (e, r, i) {
                            var n,
                                o = this.config,
                                l = this.fragPrevious,
                                d = i.fragments,
                                u = i.endSN,
                                h = i.fragmentHint,
                                f = o.maxFragLookUpTolerance,
                                c = i.partList,
                                m = !!(o.lowLatencyMode && null != c && c.length && h);
                            if (m && h && !this.bitrateTest && (d = d.concat(h), u = h.sn), n = e < r ? Si(l, d, e, e > r - f ? 0 : f) : d[d.length - 1]) {
                                var g = n.sn - i.startSN,
                                    y = this.fragmentTracker.getState(n);
                                if ((y === le || y === oe && n.gap) && (l = n), l && n.sn === l.sn && (!m || c[0].fragment.sn > n.sn) && l && n.level === l.level) {
                                    var v = d[g + 1];
                                    n = n.sn < u && this.fragmentTracker.getState(v) !== le ? v : null;
                                }
                            }
                            return n;
                        }, t.synchronizeToLiveEdge = function (e) {
                            var r = this.config,
                                i = this.media;
                            if (i) {
                                var n = this.hls.liveSyncPosition,
                                    o = i.currentTime,
                                    d = e.edge,
                                    u = o >= e.fragments[0].start - r.maxFragLookUpTolerance && o <= d;
                                null !== n && i.duration > n && (o < n || !u) && (!u && i.readyState < 4 || o < d - (void 0 !== r.liveMaxLatencyDuration ? r.liveMaxLatencyDuration : r.liveMaxLatencyDurationCount * e.targetduration)) && (this.loadedmetadata || (this.nextLoadPosition = n), i.readyState && (this.warn("Playback: " + o.toFixed(3) + " is located too far from the end of live sliding playlist: " + d + ", reset currentTime to : " + n.toFixed(3)), i.currentTime = n));
                            }
                        }, t.alignPlaylists = function (e, r, i) {
                            var n = e.fragments.length;
                            if (!n) return this.warn("No fragments in live playlist"), 0;
                            var o = e.fragments[0].start,
                                l = !r,
                                d = e.alignedSliding && N(o);
                            if (l || !d && !o) {
                                var u = this.fragPrevious;
                                !function Tn(s, a, t) {
                                    a && (function (e, r, i) {
                                        if (o = e, d = r, i && (d.endCC > d.startCC || o && o.cc < d.startCC)) {
                                            var n = function (o, l) {
                                                var d = o.fragments,
                                                    u = l.fragments;
                                                if (u.length && d.length) {
                                                    var h = Ce(d, u[0].cc);
                                                    if (h && (!h || h.startPTS)) return h;
                                                    A.log("No frag in previous level to align on");
                                                } else A.log("No fragments to align");
                                            }(i, r);
                                            n && N(n.start) && (A.log("Adjusting PTS using last level due to CC increase within current level " + r.url), Ui(n.start, r));
                                        }
                                        var o, d;
                                    }(s, t, a), !t.alignedSliding && a && function (e, r) {
                                        if (e.hasProgramDateTime && r.hasProgramDateTime) {
                                            var i,
                                                n,
                                                o = e.fragments,
                                                l = r.fragments;
                                            if (o.length && l.length) {
                                                var d = Math.min(r.endCC, e.endCC);
                                                r.startCC < d && e.startCC < d && (i = Ce(l, d), n = Ce(o, d)), i && n || (n = Ce(o, (i = l[Math.floor(l.length / 2)]).cc) || o[Math.floor(o.length / 2)]);
                                                var u = i.programDateTime,
                                                    h = n.programDateTime;
                                                u && h && Ui((h - u) / 1e3 - (n.start - i.start), e);
                                            }
                                        }
                                    }(t, a), t.alignedSliding || !a || t.skippedSegments || vi(a, t));
                                }(u, i, e);
                                var h = e.fragments[0].start;
                                return this.log("Live playlist sliding: " + h.toFixed(2) + " start-sn: " + (r ? r.startSN : "na") + "->" + e.startSN + " prev-sn: " + (u ? u.sn : "na") + " fragments: " + n), h;
                            }
                            return o;
                        }, t.waitForCdnTuneIn = function (e) {
                            return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, 3 * e.partTarget);
                        }, t.setStartPosition = function (e, r) {
                            var i = this.startPosition;
                            if (i < r && (i = -1), -1 === i || -1 === this.lastCurrentTime) {
                                var n = null !== this.startTimeOffset,
                                    o = n ? this.startTimeOffset : e.startTimeOffset;
                                null !== o && N(o) ? (i = r + o, o < 0 && (i += e.totalduration), i = Math.min(Math.max(r, i), r + e.totalduration), this.log("Start time offset " + o + " found in " + (n ? "multivariant" : "media") + " playlist, adjust startPosition to " + i), this.startPosition = i) : e.live ? i = this.hls.liveSyncPosition || r : this.startPosition = i = 0, this.lastCurrentTime = i;
                            }
                            this.nextLoadPosition = i;
                        }, t.getLoadPosition = function () {
                            var e = this.media,
                                r = 0;
                            return this.loadedmetadata && e ? r = e.currentTime : this.nextLoadPosition && (r = this.nextLoadPosition), r;
                        }, t.handleFragLoadAborted = function (e, r) {
                            this.transmuxer && "initSegment" !== e.sn && e.stats.aborted && (this.warn("Fragment " + e.sn + (r ? " part " + r.index : "") + " of level " + e.level + " was aborted"), this.resetFragmentLoading(e));
                        }, t.resetFragmentLoading = function (e) {
                            this.fragCurrent && (this.fragContextChanged(e) || this.state === de) || (this.state = it);
                        }, t.onFragmentOrKeyLoadError = function (e, r) {
                            if (r.chunkMeta && !r.frag) {
                                var i = this.getCurrentContext(r.chunkMeta);
                                i && (r.frag = i.frag);
                            }
                            var n = r.frag;
                            if (n && n.type === e && this.levels) if (this.fragContextChanged(n)) {
                                var o;
                                this.warn("Frag load error must match current frag to retry " + n.url + " > " + (null == (o = this.fragCurrent) ? void 0 : o.url));
                            } else {
                                var l = r.details === _.FRAG_GAP;
                                l && this.fragmentTracker.fragBuffered(n, !0);
                                var d = r.errorAction,
                                    u = d || {},
                                    h = u.action,
                                    f = u.retryCount,
                                    c = void 0 === f ? 0 : f,
                                    m = u.retryConfig;
                                if (d && 5 === h && m) {
                                    this.resetStartWhenNotLoaded(this.levelLastLoaded);
                                    var g = ar(m, c);
                                    this.warn("Fragment " + n.sn + " of " + e + " " + n.level + " errored with " + r.details + ", retrying loading " + (c + 1) + "/" + m.maxNumRetry + " in " + g + "ms"), d.resolved = !0, this.retryDate = self.performance.now() + g, this.state = de;
                                } else if (m && d) {
                                    if (this.resetFragmentErrors(e), !(c < m.maxNumRetry)) return void A.warn(r.details + " reached or exceeded max retry (" + c + ")");
                                    l || 3 === h || (d.resolved = !0);
                                } else this.state = 2 === (d === null || d === void 0 ? void 0 : d.action) ? Wt : he;
                                this.tickImmediate();
                            }
                        }, t.reduceLengthAndFlushBuffer = function (e) {
                            if (this.state === jt || this.state === Ie) {
                                var r = e.frag,
                                    i = e.parent,
                                    n = this.getFwdBufferInfo(this.mediaBuffer, i),
                                    o = n && n.len > .5;
                                o && this.reduceMaxBufferLength(n.len, (r === null || r === void 0 ? void 0 : r.duration) || 10);
                                var l = !o;
                                return l && this.warn("Buffer full error while media.currentTime is not buffered, flush " + i + " buffer"), r && (this.fragmentTracker.removeFragment(r), this.nextLoadPosition = r.start), this.resetLoadingState(), l;
                            }
                            return !1;
                        }, t.resetFragmentErrors = function (e) {
                            e === ae && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== Ft && (this.state = it);
                        }, t.afterBufferFlushed = function (e, r, i) {
                            if (e) {
                                var n = ut.getBuffered(e);
                                this.fragmentTracker.detectEvictedFragments(r, n, i), this.state === hr && this.resetLoadingState();
                            }
                        }, t.resetLoadingState = function () {
                            this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = it;
                        }, t.resetStartWhenNotLoaded = function (e) {
                            if (!this.loadedmetadata) {
                                this.startFragRequested = !1;
                                var r = e ? e.details : null;
                                null != r && r.live ? (this.startPosition = -1, this.setStartPosition(r, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
                            }
                        }, t.resetWhenMissingContext = function (e) {
                            this.warn("The loading context changed while buffering fragment " + e.sn + " of level " + e.level + ". This chunk will not be buffered."), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState();
                        }, t.removeUnbufferedFrags = function (e) {
                            void 0 === e && (e = 0), this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0);
                        }, t.updateLevelTiming = function (e, r, i, n) {
                            var o,
                                l = this,
                                d = i.details;
                            if (d) {
                                if (!Object.keys(e.elementaryStreams).reduce(function (h, f) {
                                    var c = e.elementaryStreams[f];
                                    if (c) {
                                        var m = c.endPTS - c.startPTS;
                                        if (m <= 0) return l.warn("Could not parse fragment " + e.sn + " " + f + " duration reliably (" + m + ")"), h || !1;
                                        var g = n ? 0 : ci(d, e, c.startPTS, c.endPTS, c.startDTS, c.endDTS);
                                        return l.hls.trigger(E.LEVEL_PTS_UPDATED, {
                                            details: d,
                                            level: i,
                                            drift: g,
                                            type: f,
                                            frag: e,
                                            start: c.startPTS,
                                            end: c.endPTS
                                        }), !0;
                                    }
                                    return h;
                                }, !1) && null === (null == (o = this.transmuxer) ? void 0 : o.error)) {
                                    var u = new Error("Found no media in fragment " + e.sn + " of level " + e.level + " resetting transmuxer to fallback to playlist timing");
                                    if (0 === i.fragmentError && (i.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0)), this.warn(u.message), this.hls.trigger(E.ERROR, {
                                        type: Y.MEDIA_ERROR,
                                        details: _.FRAG_PARSING_ERROR,
                                        fatal: !1,
                                        error: u,
                                        frag: e,
                                        reason: "Found no media in msn " + e.sn + ' of level "' + i.url + '"'
                                    }), !this.hls) return;
                                    this.resetTransmuxer();
                                }
                                this.state = Ie, this.hls.trigger(E.FRAG_PARSED, {
                                    frag: e,
                                    part: r
                                });
                            } else this.warn("level.details undefined");
                        }, t.resetTransmuxer = function () {
                            this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
                        }, t.recoverWorkerError = function (e) {
                            "demuxerWorker" === e.event && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState());
                        }, ct(a, [{
                            key: "state",
                            get: function get() {
                                return this._state;
                            },
                            set: function set(e) {
                                var r = this._state;
                                r !== e && (this._state = e, this.log(r + "->" + e));
                            }
                        }]), a;
                    }(En);

                function Gi() {
                    return self.SourceBuffer || self.WebKitSourceBuffer;
                }

                function Hi() {
                    if (!Vt()) return !1;
                    var s = Gi();
                    return !s || s.prototype && "function" == typeof s.prototype.appendBuffer && "function" == typeof s.prototype.remove;
                }

                function kt(s, a) {
                    return void 0 === s && (s = ""), void 0 === a && (a = 9e4), {
                        type: s,
                        id: -1,
                        pid: -1,
                        inputTimeScale: a,
                        sequenceNumber: -1,
                        samples: [],
                        dropped: 0
                    };
                }

                var Vi = function () {
                        function s() {
                            this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
                        }

                        var a = s.prototype;
                        return a.resetInitSegment = function (t, e, r, i) {
                            this._id3Track = {
                                type: "id3",
                                id: 3,
                                pid: -1,
                                inputTimeScale: 9e4,
                                sequenceNumber: 0,
                                samples: [],
                                dropped: 0
                            };
                        }, a.resetTimeStamp = function (t) {
                            this.initPTS = t, this.resetContiguity();
                        }, a.resetContiguity = function () {
                            this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
                        }, a.canParse = function (t, e) {
                            return !1;
                        }, a.appendFrame = function (t, e, r) {
                        }, a.demux = function (t, e) {
                            this.cachedData && (t = St(this.cachedData, t), this.cachedData = null);
                            var r,
                                i = ye(t, 0),
                                n = i ? i.length : 0,
                                o = this._audioTrack,
                                l = this._id3Track,
                                d = i ? Nr(i) : void 0,
                                u = t.length;
                            for ((null === this.basePTS || 0 === this.frameIndex && N(d)) && (this.basePTS = Dn(d, e, this.initPTS), this.lastPTS = this.basePTS), null === this.lastPTS && (this.lastPTS = this.basePTS), i && i.length > 0 && l.samples.push({
                                pts: this.lastPTS,
                                dts: this.lastPTS,
                                data: i,
                                type: ne,
                                duration: Number.POSITIVE_INFINITY
                            }); n < u;) {
                                if (this.canParse(t, n)) {
                                    var h = this.appendFrame(o, t, n);
                                    h ? (this.frameIndex++, this.lastPTS = h.sample.pts, r = n += h.length) : n = u;
                                } else Sa(t, n) ? (i = ye(t, n), l.samples.push({
                                    pts: this.lastPTS,
                                    dts: this.lastPTS,
                                    data: i,
                                    type: ne,
                                    duration: Number.POSITIVE_INFINITY
                                }), r = n += i.length) : n++;
                                if (n === u && r !== u) {
                                    var f = Ht(t, r);
                                    this.cachedData = this.cachedData ? St(this.cachedData, f) : f;
                                }
                            }
                            return {
                                audioTrack: o,
                                videoTrack: kt(),
                                id3Track: l,
                                textTrack: kt()
                            };
                        }, a.demuxSampleAes = function (t, e, r) {
                            return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
                        }, a.flush = function (t) {
                            var e = this.cachedData;
                            return e && (this.cachedData = null, this.demux(e, 0)), {
                                audioTrack: this._audioTrack,
                                videoTrack: kt(),
                                id3Track: this._id3Track,
                                textTrack: kt()
                            };
                        }, a.destroy = function () {
                        }, s;
                    }(),
                    Dn = function Dn(s, a, t) {
                        return N(s) ? 90 * s : 9e4 * a + (t ? 9e4 * t.baseTime / t.timescale : 0);
                    };

                function Ki(s, a) {
                    return 255 === s[a] && 240 == (246 & s[a + 1]);
                }

                function ji(s, a) {
                    return 1 & s[a + 1] ? 7 : 9;
                }

                function fr(s, a) {
                    return (3 & s[a + 3]) << 11 | s[a + 4] << 3 | (224 & s[a + 5]) >>> 5;
                }

                function Pe(s, a) {
                    return a + 1 < s.length && Ki(s, a);
                }

                function kn(s, a) {
                    if (Pe(s, a)) {
                        var t = ji(s, a);
                        if (a + t >= s.length) return !1;
                        var e = fr(s, a);
                        if (e <= t) return !1;
                        var r = a + e;
                        return r === s.length || Pe(s, r);
                    }
                    return !1;
                }

                function Wi(s, a, t, e, r) {
                    if (!s.samplerate) {
                        var i = function (n, o, l, d) {
                            var u,
                                h,
                                f,
                                c,
                                m = navigator.userAgent.toLowerCase(),
                                g = d,
                                y = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                            u = 1 + ((192 & o[l + 2]) >>> 6);
                            var v = (60 & o[l + 2]) >>> 2;
                            if (!(v > y.length - 1)) return f = (1 & o[l + 2]) << 2, f |= (192 & o[l + 3]) >>> 6, A.log("manifest codec:" + d + ", ADTS type:" + u + ", samplingIndex:" + v), /firefox/i.test(m) ? v >= 6 ? (u = 5, c = new Array(4), h = v - 3) : (u = 2, c = new Array(2), h = v) : -1 !== m.indexOf("android") ? (u = 2, c = new Array(2), h = v) : (u = 5, c = new Array(4), d && (-1 !== d.indexOf("mp4a.40.29") || -1 !== d.indexOf("mp4a.40.5")) || !d && v >= 6 ? h = v - 3 : ((d && -1 !== d.indexOf("mp4a.40.2") && (v >= 6 && 1 === f || /vivaldi/i.test(m)) || !d && 1 === f) && (u = 2, c = new Array(2)), h = v)), c[0] = u << 3, c[0] |= (14 & v) >> 1, c[1] |= (1 & v) << 7, c[1] |= f << 3, 5 === u && (c[1] |= (14 & h) >> 1, c[2] = (1 & h) << 7, c[2] |= 8, c[3] = 0), {
                                config: c,
                                samplerate: y[v],
                                channelCount: f,
                                codec: "mp4a.40." + u,
                                manifestCodec: g
                            };
                            var p = new Error("invalid ADTS sampling index:" + v);
                            n.emit(E.ERROR, E.ERROR, {
                                type: Y.MEDIA_ERROR,
                                details: _.FRAG_PARSING_ERROR,
                                fatal: !0,
                                error: p,
                                reason: p.message
                            });
                        }(a, t, e, r);
                        if (!i) return;
                        s.config = i.config, s.samplerate = i.samplerate, s.channelCount = i.channelCount, s.codec = i.codec, s.manifestCodec = i.manifestCodec, A.log("parsed codec:" + s.codec + ", rate:" + i.samplerate + ", channels:" + i.channelCount);
                    }
                }

                function Yi(s) {
                    return 9216e4 / s;
                }

                function qi(s, a, t, e, r) {
                    var i,
                        n = e + r * Yi(s.samplerate),
                        o = function (m, g) {
                            var y = ji(m, g);
                            if (g + y <= m.length) {
                                var v = fr(m, g) - y;
                                if (v > 0) return {
                                    headerLength: y,
                                    frameLength: v
                                };
                            }
                        }(a, t);
                    if (o) {
                        var d = o.headerLength,
                            u = d + o.frameLength,
                            h = Math.max(0, t + u - a.length);
                        h ? (i = new Uint8Array(u - d)).set(a.subarray(t + d, a.length), 0) : i = a.subarray(t + d, t + u);
                        var f = {
                            unit: i,
                            pts: n
                        };
                        return h || s.samples.push(f), {
                            sample: f,
                            length: u,
                            missing: h
                        };
                    }
                    var c = a.length - t;
                    return (i = new Uint8Array(c)).set(a.subarray(t, a.length), 0), {
                        sample: {
                            unit: i,
                            pts: n
                        },
                        length: c,
                        missing: -1
                    };
                }

                var Fe = null,
                    _n = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                    wn = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                    xn = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
                    Cn = [0, 1, 1, 4];

                function zi(s, a, t, e, r) {
                    if (!(t + 24 > a.length)) {
                        var i = Xi(a, t);
                        if (i && t + i.frameLength <= a.length) {
                            var n = e + r * (9e4 * i.samplesPerFrame / i.sampleRate),
                                o = {
                                    unit: a.subarray(t, t + i.frameLength),
                                    pts: n,
                                    dts: n
                                };
                            return s.config = [], s.channelCount = i.channelCount, s.samplerate = i.sampleRate, s.samples.push(o), {
                                sample: o,
                                length: i.frameLength,
                                missing: 0
                            };
                        }
                    }
                }

                function Xi(s, a) {
                    var t = s[a + 1] >> 3 & 3,
                        e = s[a + 1] >> 1 & 3,
                        r = s[a + 2] >> 4 & 15,
                        i = s[a + 2] >> 2 & 3;
                    if (1 !== t && 0 !== r && 15 !== r && 3 !== i) {
                        var o = s[a + 3] >> 6,
                            l = 1e3 * _n[14 * (3 === t ? 3 - e : 3 === e ? 3 : 4) + r - 1],
                            d = wn[3 * (3 === t ? 0 : 2 === t ? 1 : 2) + i],
                            u = 3 === o ? 1 : 2,
                            h = xn[t][e],
                            f = Cn[e],
                            c = 8 * h * f,
                            m = Math.floor(h * l / d + (s[a + 2] >> 1 & 1)) * f;
                        if (null === Fe) {
                            var g = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                            Fe = g ? parseInt(g[1]) : 0;
                        }
                        return Fe && Fe <= 87 && 2 === e && l >= 224e3 && 0 === o && (s[a + 3] = 128 | s[a + 3]), {
                            sampleRate: d,
                            channelCount: u,
                            frameLength: m,
                            samplesPerFrame: c
                        };
                    }
                }

                function cr(s, a) {
                    return !(255 !== s[a] || 224 & ~s[a + 1] || !(6 & s[a + 1]));
                }

                function Qi(s, a) {
                    return a + 1 < s.length && cr(s, a);
                }

                function Zi(s, a) {
                    if (a + 1 < s.length && cr(s, a)) {
                        var t = Xi(s, a),
                            e = 4;
                        null != t && t.frameLength && (e = t.frameLength);
                        var r = a + e;
                        return r === s.length || Qi(s, r);
                    }
                    return !1;
                }

                var In = function (s) {
                        function a(e, r) {
                            var i;
                            return (i = s.call(this) || this).observer = void 0, i.config = void 0, i.observer = e, i.config = r, i;
                        }

                        At(a, s);
                        var t = a.prototype;
                        return t.resetInitSegment = function (e, r, i, n) {
                            s.prototype.resetInitSegment.call(this, e, r, i, n), this._audioTrack = {
                                container: "audio/adts",
                                type: "audio",
                                id: 2,
                                pid: -1,
                                sequenceNumber: 0,
                                segmentCodec: "aac",
                                samples: [],
                                manifestCodec: r,
                                duration: n,
                                inputTimeScale: 9e4,
                                dropped: 0
                            };
                        }, a.probe = function (e) {
                            if (!e) return !1;
                            var r = ye(e, 0),
                                i = (r === null || r === void 0 ? void 0 : r.length) || 0;
                            if (Zi(e, i)) return !1;
                            for (var n = e.length; i < n; i++) if (kn(e, i)) return A.log("ADTS sync word found !"), !0;
                            return !1;
                        }, t.canParse = function (e, r) {
                            return function (i, n) {
                                return n + 5 < i.length && Ki(i, n) && fr(i, n) <= i.length - n;
                            }(e, r);
                        }, t.appendFrame = function (e, r, i) {
                            Wi(e, this.observer, r, i, e.manifestCodec);
                            var n = qi(e, r, i, this.basePTS, this.frameIndex);
                            if (n && 0 === n.missing) return n;
                        }, a;
                    }(Vi),
                    Pn = /\/emsg[-/]ID3/i,
                    Fn = function () {
                        function s(t, e) {
                            this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = e;
                        }

                        var a = s.prototype;
                        return a.resetTimeStamp = function () {
                        }, a.resetInitSegment = function (t, e, r, i) {
                            var n = this.videoTrack = kt("video", 1),
                                o = this.audioTrack = kt("audio", 1),
                                l = this.txtTrack = kt("text", 1);
                            if (this.id3Track = kt("id3", 1), this.timeOffset = 0, null != t && t.byteLength) {
                                var d = Wr(t);
                                if (d.video) {
                                    var u = d.video,
                                        f = u.timescale,
                                        c = u.codec;
                                    n.id = u.id, n.timescale = l.timescale = f, n.codec = c;
                                }
                                if (d.audio) {
                                    var m = d.audio,
                                        y = m.timescale,
                                        v = m.codec;
                                    o.id = m.id, o.timescale = y, o.codec = v;
                                }
                                l.id = Hr.text, n.sampleDuration = 0, n.duration = o.duration = i;
                            }
                        }, a.resetContiguity = function () {
                            this.remainderData = null;
                        }, s.probe = function (t) {
                            return function (e) {
                                for (var r = e.byteLength, i = 0; i < r;) {
                                    var n = G(e, i);
                                    if (n > 8 && 109 === e[i + 4] && 111 === e[i + 5] && 111 === e[i + 6] && 102 === e[i + 7]) return !0;
                                    i = n > 1 ? i + n : r;
                                }
                                return !1;
                            }(t);
                        }, a.demux = function (t, e) {
                            this.timeOffset = e;
                            var r = t,
                                i = this.videoTrack,
                                n = this.txtTrack;
                            if (this.config.progressive) {
                                this.remainderData && (r = St(this.remainderData, t));
                                var o = function (d) {
                                    var u = {
                                            valid: null,
                                            remainder: null
                                        },
                                        h = K(d, ["moof"]);
                                    if (h.length < 2) return u.remainder = d, u;
                                    var f = h[h.length - 1];
                                    return u.valid = Ht(d, 0, f.byteOffset - 8), u.remainder = Ht(d, f.byteOffset - 8), u;
                                }(r);
                                this.remainderData = o.remainder, i.samples = o.valid || new Uint8Array();
                            } else i.samples = r;
                            var l = this.extractID3Track(i, e);
                            return n.samples = Yr(e, i), {
                                videoTrack: i,
                                audioTrack: this.audioTrack,
                                id3Track: l,
                                textTrack: this.txtTrack
                            };
                        }, a.flush = function () {
                            var t = this.timeOffset,
                                e = this.videoTrack,
                                r = this.txtTrack;
                            e.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
                            var i = this.extractID3Track(e, this.timeOffset);
                            return r.samples = Yr(t, e), {
                                videoTrack: e,
                                audioTrack: kt(),
                                id3Track: i,
                                textTrack: kt()
                            };
                        }, a.extractID3Track = function (t, e) {
                            var r = this.id3Track;
                            if (t.samples.length) {
                                var i = K(t.samples, ["emsg"]);
                                i && i.forEach(function (n) {
                                    var o = function (h) {
                                        var f = h[0],
                                            c = "",
                                            m = "",
                                            g = 0,
                                            y = 0,
                                            v = 0,
                                            p = 0,
                                            S = 0,
                                            T = 0;
                                        if (0 === f) {
                                            for (; "\0" !== dt(h.subarray(T, T + 1));) c += dt(h.subarray(T, T + 1)), T += 1;
                                            for (c += dt(h.subarray(T, T + 1)), T += 1; "\0" !== dt(h.subarray(T, T + 1));) m += dt(h.subarray(T, T + 1)), T += 1;
                                            m += dt(h.subarray(T, T + 1)), T += 1, g = G(h, 12), y = G(h, 16), p = G(h, 20), S = G(h, 24), T = 28;
                                        } else if (1 === f) {
                                            g = G(h, T += 4);
                                            var R = G(h, T += 4),
                                                b = G(h, T += 4);
                                            for (T += 4, v = Math.pow(2, 32) * R + b, ca(v) || (v = Number.MAX_SAFE_INTEGER, A.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), p = G(h, T), S = G(h, T += 4), T += 4; "\0" !== dt(h.subarray(T, T + 1));) c += dt(h.subarray(T, T + 1)), T += 1;
                                            for (c += dt(h.subarray(T, T + 1)), T += 1; "\0" !== dt(h.subarray(T, T + 1));) m += dt(h.subarray(T, T + 1)), T += 1;
                                            m += dt(h.subarray(T, T + 1)), T += 1;
                                        }
                                        return {
                                            schemeIdUri: c,
                                            value: m,
                                            timeScale: g,
                                            presentationTime: v,
                                            presentationTimeDelta: y,
                                            eventDuration: p,
                                            id: S,
                                            payload: h.subarray(T, h.byteLength)
                                        };
                                    }(n);
                                    if (Pn.test(o.schemeIdUri)) {
                                        var l = N(o.presentationTime) ? o.presentationTime / o.timeScale : e + o.presentationTimeDelta / o.timeScale,
                                            d = 4294967295 === o.eventDuration ? Number.POSITIVE_INFINITY : o.eventDuration / o.timeScale;
                                        d <= .001 && (d = Number.POSITIVE_INFINITY);
                                        var u = o.payload;
                                        r.samples.push({
                                            data: u,
                                            len: u.byteLength,
                                            dts: l,
                                            pts: l,
                                            type: se,
                                            duration: d
                                        });
                                    }
                                });
                            }
                            return r;
                        }, a.demuxSampleAes = function (t, e, r) {
                            return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
                        }, a.destroy = function () {
                        }, s;
                    }(),
                    On = function () {
                        function s() {
                            this.VideoSample = null;
                        }

                        var a = s.prototype;
                        return a.createVideoSample = function (t, e, r, i) {
                            return {
                                key: t,
                                frame: !1,
                                pts: e,
                                dts: r,
                                units: [],
                                debug: i,
                                length: 0
                            };
                        }, a.getLastNalUnit = function (t) {
                            var e,
                                r,
                                i = this.VideoSample;
                            if (i && 0 !== i.units.length || (i = t[t.length - 1]), null != (e = i) && e.units) {
                                var n = i.units;
                                r = n[n.length - 1];
                            }
                            return r;
                        }, a.pushAccessUnit = function (t, e) {
                            if (t.units.length && t.frame) {
                                if (void 0 === t.pts) {
                                    var r = e.samples,
                                        i = r.length;
                                    if (!i) return void e.dropped++;
                                    var n = r[i - 1];
                                    t.pts = n.pts, t.dts = n.dts;
                                }
                                e.samples.push(t);
                            }
                            t.debug.length && A.log(t.pts + "/" + t.dts + ":" + t.debug);
                        }, s;
                    }(),
                    Ji = function () {
                        function s(t) {
                            this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0;
                        }

                        var a = s.prototype;
                        return a.loadWord = function () {
                            var t = this.data,
                                e = this.bytesAvailable,
                                r = t.byteLength - e,
                                i = new Uint8Array(4),
                                n = Math.min(4, e);
                            if (0 === n) throw new Error("no bytes available");
                            i.set(t.subarray(r, r + n)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n;
                        }, a.skipBits = function (t) {
                            var e;
                            t = Math.min(t, 8 * this.bytesAvailable + this.bitsAvailable), this.bitsAvailable > t ? (this.word <<= t, this.bitsAvailable -= t) : (t -= this.bitsAvailable, t -= (e = t >> 3) << 3, this.bytesAvailable -= e, this.loadWord(), this.word <<= t, this.bitsAvailable -= t);
                        }, a.readBits = function (t) {
                            var e = Math.min(this.bitsAvailable, t),
                                r = this.word >>> 32 - e;
                            if (t > 32 && A.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0) this.word <<= e; else {
                                if (!(this.bytesAvailable > 0)) throw new Error("no bits available");
                                this.loadWord();
                            }
                            return (e = t - e) > 0 && this.bitsAvailable ? r << e | this.readBits(e) : r;
                        }, a.skipLZ = function () {
                            var t;
                            for (t = 0; t < this.bitsAvailable; ++t) if (this.word & 2147483648 >>> t) return this.word <<= t, this.bitsAvailable -= t, t;
                            return this.loadWord(), t + this.skipLZ();
                        }, a.skipUEG = function () {
                            this.skipBits(1 + this.skipLZ());
                        }, a.skipEG = function () {
                            this.skipBits(1 + this.skipLZ());
                        }, a.readUEG = function () {
                            var t = this.skipLZ();
                            return this.readBits(t + 1) - 1;
                        }, a.readEG = function () {
                            var t = this.readUEG();
                            return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1);
                        }, a.readBoolean = function () {
                            return 1 === this.readBits(1);
                        }, a.readUByte = function () {
                            return this.readBits(8);
                        }, a.readUShort = function () {
                            return this.readBits(16);
                        }, a.readUInt = function () {
                            return this.readBits(32);
                        }, a.skipScalingList = function (t) {
                            for (var e = 8, r = 8, i = 0; i < t; i++) 0 !== r && (r = (e + this.readEG() + 256) % 256), e = 0 === r ? e : r;
                        }, a.readSPS = function () {
                            var t,
                                e,
                                r,
                                i = 0,
                                n = 0,
                                o = 0,
                                l = 0,
                                d = this.readUByte.bind(this),
                                u = this.readBits.bind(this),
                                h = this.readUEG.bind(this),
                                f = this.readBoolean.bind(this),
                                c = this.skipBits.bind(this),
                                m = this.skipEG.bind(this),
                                g = this.skipUEG.bind(this),
                                y = this.skipScalingList.bind(this);
                            d();
                            var v = d();
                            if (u(5), c(3), d(), g(), 100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
                                var p = h();
                                if (3 === p && c(1), g(), g(), c(1), f()) for (e = 3 !== p ? 8 : 12, r = 0; r < e; r++) f() && y(r < 6 ? 16 : 64);
                            }
                            g();
                            var S = h();
                            if (0 === S) h(); else if (1 === S) for (c(1), m(), m(), t = h(), r = 0; r < t; r++) m();
                            g(), c(1);
                            var T = h(),
                                R = h(),
                                b = u(1);
                            0 === b && c(1), c(1), f() && (i = h(), n = h(), o = h(), l = h());
                            var L = [1, 1];
                            if (f() && f()) switch (d()) {
                                case 1:
                                    L = [1, 1];
                                    break;
                                case 2:
                                    L = [12, 11];
                                    break;
                                case 3:
                                    L = [10, 11];
                                    break;
                                case 4:
                                    L = [16, 11];
                                    break;
                                case 5:
                                    L = [40, 33];
                                    break;
                                case 6:
                                    L = [24, 11];
                                    break;
                                case 7:
                                    L = [20, 11];
                                    break;
                                case 8:
                                    L = [32, 11];
                                    break;
                                case 9:
                                    L = [80, 33];
                                    break;
                                case 10:
                                    L = [18, 11];
                                    break;
                                case 11:
                                    L = [15, 11];
                                    break;
                                case 12:
                                    L = [64, 33];
                                    break;
                                case 13:
                                    L = [160, 99];
                                    break;
                                case 14:
                                    L = [4, 3];
                                    break;
                                case 15:
                                    L = [3, 2];
                                    break;
                                case 16:
                                    L = [2, 1];
                                    break;
                                case 255:
                                    L = [d() << 8 | d(), d() << 8 | d()];
                            }
                            return {
                                width: Math.ceil(16 * (T + 1) - 2 * i - 2 * n),
                                height: (2 - b) * (R + 1) * 16 - (b ? 2 : 4) * (o + l),
                                pixelRatio: L
                            };
                        }, a.readSliceType = function () {
                            return this.readUByte(), this.readUEG(), this.readUEG();
                        }, s;
                    }(),
                    Mn = function (s) {
                        function a() {
                            return s.apply(this, arguments) || this;
                        }

                        At(a, s);
                        var t = a.prototype;
                        return t.parseAVCPES = function (e, r, i, n, o) {
                            var l,
                                d = this,
                                u = this.parseAVCNALu(e, i.data),
                                h = this.VideoSample,
                                f = !1;
                            i.data = null, h && u.length && !e.audFound && (this.pushAccessUnit(h, e), h = this.VideoSample = this.createVideoSample(!1, i.pts, i.dts, "")), u.forEach(function (c) {
                                var m;
                                switch (c.type) {
                                    case 1:
                                        var g = !1;
                                        l = !0;
                                        var y,
                                            v = c.data;
                                        if (f && v.length > 4) {
                                            var p = new Ji(v).readSliceType();
                                            2 !== p && 4 !== p && 7 !== p && 9 !== p || (g = !0);
                                        }
                                        g && null != (y = h) && y.frame && !h.key && (d.pushAccessUnit(h, e), h = d.VideoSample = null), h || (h = d.VideoSample = d.createVideoSample(!0, i.pts, i.dts, "")), h.frame = !0, h.key = g;
                                        break;
                                    case 5:
                                        l = !0, null != (m = h) && m.frame && !h.key && (d.pushAccessUnit(h, e), h = d.VideoSample = null), h || (h = d.VideoSample = d.createVideoSample(!0, i.pts, i.dts, "")), h.key = !0, h.frame = !0;
                                        break;
                                    case 6:
                                        l = !0, qr(c.data, 1, i.pts, r.samples);
                                        break;
                                    case 7:
                                        var S, T;
                                        l = !0, f = !0;
                                        var R = c.data,
                                            b = new Ji(R).readSPS();
                                        if (!e.sps || e.width !== b.width || e.height !== b.height || (null == (S = e.pixelRatio) ? void 0 : S[0]) !== b.pixelRatio[0] || (null == (T = e.pixelRatio) ? void 0 : T[1]) !== b.pixelRatio[1]) {
                                            e.width = b.width, e.height = b.height, e.pixelRatio = b.pixelRatio, e.sps = [R], e.duration = o;
                                            for (var L = R.subarray(1, 4), k = "avc1.", x = 0; x < 3; x++) {
                                                var w = L[x].toString(16);
                                                w.length < 2 && (w = "0" + w), k += w;
                                            }
                                            e.codec = k;
                                        }
                                        break;
                                    case 8:
                                        l = !0, e.pps = [c.data];
                                        break;
                                    case 9:
                                        l = !0, e.audFound = !0, h && d.pushAccessUnit(h, e), h = d.VideoSample = d.createVideoSample(!1, i.pts, i.dts, "");
                                        break;
                                    case 12:
                                        l = !0;
                                        break;
                                    default:
                                        l = !1, h && (h.debug += "unknown NAL " + c.type + " ");
                                }
                                h && l && h.units.push(c);
                            }), n && h && (this.pushAccessUnit(h, e), this.VideoSample = null);
                        }, t.parseAVCNALu = function (e, r) {
                            var i,
                                n,
                                o = r.byteLength,
                                l = e.naluState || 0,
                                d = l,
                                u = [],
                                h = 0,
                                f = -1,
                                c = 0;
                            for (-1 === l && (f = 0, c = 31 & r[0], l = 0, h = 1); h < o;) if (i = r[h++], l) {
                                if (1 !== l) {
                                    if (i) {
                                        if (1 === i) {
                                            if (n = h - l - 1, f >= 0) {
                                                var m = {
                                                    data: r.subarray(f, n),
                                                    type: c
                                                };
                                                u.push(m);
                                            } else {
                                                var g = this.getLastNalUnit(e.samples);
                                                g && (d && h <= 4 - d && g.state && (g.data = g.data.subarray(0, g.data.byteLength - d)), n > 0 && (g.data = St(g.data, r.subarray(0, n)), g.state = 0));
                                            }
                                            h < o ? (f = h, c = 31 & r[h], l = 0) : l = -1;
                                        } else l = 0;
                                    } else l = 3;
                                } else l = i ? 0 : 2;
                            } else l = i ? 0 : 1;
                            if (f >= 0 && l >= 0) {
                                var y = {
                                    data: r.subarray(f, o),
                                    type: c,
                                    state: l
                                };
                                u.push(y);
                            }
                            if (0 === u.length) {
                                var v = this.getLastNalUnit(e.samples);
                                v && (v.data = St(v.data, r));
                            }
                            return e.naluState = l, u;
                        }, a;
                    }(On),
                    Nn = function () {
                        function s(t, e, r) {
                            this.keyData = void 0, this.decrypter = void 0, this.keyData = r, this.decrypter = new ur(e, {
                                removePKCS7Padding: !1
                            });
                        }

                        var a = s.prototype;
                        return a.decryptBuffer = function (t) {

                            console.log(5, this.keyData.key.buffer, this.keyData.iv.buffer);
                            return this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer);
                        }, a.decryptAacSample = function (t, e, r) {
                            var i = this,
                                n = t[e].unit;
                            if (!(n.length <= 16)) {
                                var o = n.subarray(16, n.length - n.length % 16),
                                    l = o.buffer.slice(o.byteOffset, o.byteOffset + o.length);
                                this.decryptBuffer(l).then(function (d) {
                                    var u = new Uint8Array(d);
                                    n.set(u, 16), i.decrypter.isSync() || i.decryptAacSamples(t, e + 1, r);
                                });
                            }
                        }, a.decryptAacSamples = function (t, e, r) {
                            for (; ; e++) {
                                if (e >= t.length) return void r();
                                if (!(t[e].unit.length < 32 || (this.decryptAacSample(t, e, r), this.decrypter.isSync()))) return;
                            }
                        }, a.getAvcEncryptedData = function (t) {
                            for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, r = new Int8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16) r.set(t.subarray(n, n + 16), i);
                            return r;
                        }, a.getAvcDecryptedUnit = function (t, e) {
                            for (var r = new Uint8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16) t.set(r.subarray(i, i + 16), n);
                            return t;
                        }, a.decryptAvcSample = function (t, e, r, i, n) {
                            var o = this,
                                l = zr(n.data),
                                d = this.getAvcEncryptedData(l);
                            this.decryptBuffer(d.buffer).then(function (u) {
                                n.data = o.getAvcDecryptedUnit(l, u), o.decrypter.isSync() || o.decryptAvcSamples(t, e, r + 1, i);
                            });
                        }, a.decryptAvcSamples = function (t, e, r, i) {
                            if (t instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
                            for (; ; e++, r = 0) {
                                if (e >= t.length) return void i();
                                for (var n = t[e].units; !(r >= n.length); r++) {
                                    var o = n[r];
                                    if (!(o.data.length <= 48 || 1 !== o.type && 5 !== o.type || (this.decryptAvcSample(t, e, r, i, o), this.decrypter.isSync()))) return;
                                }
                            }
                        }, s;
                    }(),
                    ft = 188,
                    Bn = function () {
                        function s(t, e, r) {
                            this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = t, this.config = e, this.typeSupported = r, this.videoParser = new Mn();
                        }

                        s.probe = function (t) {
                            var e = s.syncOffset(t);
                            return e > 0 && A.warn("MPEG2-TS detected but first sync word found @ offset " + e), -1 !== e;
                        }, s.syncOffset = function (t) {
                            for (var e = t.length, r = Math.min(940, e - ft) + 1, i = 0; i < r;) {
                                for (var n = !1, o = -1, l = 0, d = i; d < e; d += ft) {
                                    if (71 !== t[d] || e - d !== ft && 71 !== t[d + ft]) {
                                        if (l) return -1;
                                        break;
                                    }
                                    if (l++, -1 === o && 0 !== (o = d) && (r = Math.min(o + 18612, t.length - ft) + 1), n || (n = 0 === vr(t, d)), n && l > 1 && (0 === o && l > 2 || d + ft > r)) return o;
                                }
                                i++;
                            }
                            return -1;
                        }, s.createTrack = function (t, e) {
                            return {
                                container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                                type: t,
                                id: Hr[t],
                                pid: -1,
                                inputTimeScale: 9e4,
                                sequenceNumber: 0,
                                samples: [],
                                dropped: 0,
                                duration: "audio" === t ? e : void 0
                            };
                        };
                        var a = s.prototype;
                        return a.resetInitSegment = function (t, e, r, i) {
                            this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = s.createTrack("video"), this._audioTrack = s.createTrack("audio", i), this._id3Track = s.createTrack("id3"), this._txtTrack = s.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = e, this.videoCodec = r, this._duration = i;
                        }, a.resetTimeStamp = function () {
                        }, a.resetContiguity = function () {
                            var t = this._audioTrack,
                                e = this._videoTrack,
                                r = this._id3Track;
                            t && (t.pesData = null), e && (e.pesData = null), r && (r.pesData = null), this.aacOverFlow = null, this.remainderData = null;
                        }, a.demux = function (t, e, r, i) {
                            var n;
                            void 0 === r && (r = !1), void 0 === i && (i = !1), r || (this.sampleAes = null);
                            var o = this._videoTrack,
                                l = this._audioTrack,
                                d = this._id3Track,
                                u = this._txtTrack,
                                h = o.pid,
                                f = o.pesData,
                                c = l.pid,
                                m = d.pid,
                                g = l.pesData,
                                y = d.pesData,
                                v = null,
                                p = this.pmtParsed,
                                S = this._pmtId,
                                T = t.length;
                            if (this.remainderData && (T = (t = St(this.remainderData, t)).length, this.remainderData = null), T < ft && !i) return this.remainderData = t, {
                                audioTrack: l,
                                videoTrack: o,
                                id3Track: d,
                                textTrack: u
                            };
                            var R = Math.max(0, s.syncOffset(t));
                            (T -= (T - R) % ft) < t.byteLength && !i && (this.remainderData = new Uint8Array(t.buffer, T, t.buffer.byteLength - T));
                            for (var b = 0, L = R; L < T; L += ft) if (71 === t[L]) {
                                var k = !!(64 & t[L + 1]),
                                    x = vr(t, L),
                                    w = void 0;
                                if ((48 & t[L + 3]) >> 4 > 1) {
                                    if ((w = L + 5 + t[L + 4]) === L + ft) continue;
                                } else w = L + 4;
                                switch (x) {
                                    case h:
                                        k && (f && (n = Zt(f)) && this.videoParser.parseAVCPES(o, u, n, !1, this._duration), f = {
                                            data: [],
                                            size: 0
                                        }), f && (f.data.push(t.subarray(w, L + ft)), f.size += L + ft - w);
                                        break;
                                    case c:
                                        if (k) {
                                            if (g && (n = Zt(g))) switch (l.segmentCodec) {
                                                case "aac":
                                                    this.parseAACPES(l, n);
                                                    break;
                                                case "mp3":
                                                    this.parseMPEGPES(l, n);
                                            }
                                            g = {
                                                data: [],
                                                size: 0
                                            };
                                        }
                                        g && (g.data.push(t.subarray(w, L + ft)), g.size += L + ft - w);
                                        break;
                                    case m:
                                        k && (y && (n = Zt(y)) && this.parseID3PES(d, n), y = {
                                            data: [],
                                            size: 0
                                        }), y && (y.data.push(t.subarray(w, L + ft)), y.size += L + ft - w);
                                        break;
                                    case 0:
                                        k && (w += t[w] + 1), S = this._pmtId = Un(t, w);
                                        break;
                                    case S:
                                        k && (w += t[w] + 1);
                                        var D = Gn(t, w, this.typeSupported, r, this.observer);
                                        (h = D.videoPid) > 0 && (o.pid = h, o.segmentCodec = D.segmentVideoCodec), (c = D.audioPid) > 0 && (l.pid = c, l.segmentCodec = D.segmentAudioCodec), (m = D.id3Pid) > 0 && (d.pid = m), null === v || p || (A.warn("MPEG-TS PMT found at " + L + " after unknown PID '" + v + "'. Backtracking to sync byte @" + R + " to parse all TS packets."), v = null, L = R - 188), p = this.pmtParsed = !0;
                                        break;
                                    case 17:
                                    case 8191:
                                        break;
                                    default:
                                        v = x;
                                }
                            } else b++;
                            b > 0 && Oe(this.observer, new Error("Found " + b + " TS packet/s that do not start with 0x47")), o.pesData = f, l.pesData = g, d.pesData = y;
                            var C = {
                                audioTrack: l,
                                videoTrack: o,
                                id3Track: d,
                                textTrack: u
                            };
                            return i && this.extractRemainingSamples(C), C;
                        }, a.flush = function () {
                            var t,
                                e = this.remainderData;
                            return this.remainderData = null, t = e ? this.demux(e, -1, !1, !0) : {
                                videoTrack: this._videoTrack,
                                audioTrack: this._audioTrack,
                                id3Track: this._id3Track,
                                textTrack: this._txtTrack
                            }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t;
                        }, a.extractRemainingSamples = function (t) {
                            var e,
                                r = t.audioTrack,
                                i = t.videoTrack,
                                n = t.id3Track,
                                o = t.textTrack,
                                l = i.pesData,
                                d = r.pesData,
                                u = n.pesData;
                            if (l && (e = Zt(l)) ? (this.videoParser.parseAVCPES(i, o, e, !0, this._duration), i.pesData = null) : i.pesData = l, d && (e = Zt(d))) {
                                switch (r.segmentCodec) {
                                    case "aac":
                                        this.parseAACPES(r, e);
                                        break;
                                    case "mp3":
                                        this.parseMPEGPES(r, e);
                                }
                                r.pesData = null;
                            } else null != d && d.size && A.log("last AAC PES packet truncated,might overlap between fragments"), r.pesData = d;
                            u && (e = Zt(u)) ? (this.parseID3PES(n, e), n.pesData = null) : n.pesData = u;
                        }, a.demuxSampleAes = function (t, e, r) {
                            var i = this.demux(t, r, !0, !this.config.progressive),
                                n = this.sampleAes = new Nn(this.observer, this.config, e);
                            return this.decrypt(i, n);
                        }, a.decrypt = function (t, e) {
                            return new Promise(function (r) {
                                console.log(22);
                                var i = t.audioTrack,
                                    n = t.videoTrack;
                                i.samples && "aac" === i.segmentCodec ? e.decryptAacSamples(i.samples, 0, function () {
                                    n.samples ? e.decryptAvcSamples(n.samples, 0, 0, function () {
                                        r(t);
                                    }) : r(t);
                                }) : n.samples && e.decryptAvcSamples(n.samples, 0, 0, function () {
                                    r(t);
                                });
                            });
                        }, a.destroy = function () {
                            this._duration = 0;
                        }, a.parseAACPES = function (t, e) {
                            var r,
                                i,
                                n,
                                o = 0,
                                l = this.aacOverFlow,
                                d = e.data;
                            if (l) {
                                this.aacOverFlow = null;
                                var u = l.missing,
                                    h = l.sample.unit.byteLength;
                                if (-1 === u) d = St(l.sample.unit, d); else {
                                    var f = h - u;
                                    l.sample.unit.set(d.subarray(0, u), f), t.samples.push(l.sample), o = l.missing;
                                }
                            }
                            for (r = o, i = d.length; r < i - 1 && !Pe(d, r); r++) ;
                            if (r !== o) {
                                var m = r < i - 1;
                                if (Oe(this.observer, new Error(m ? "AAC PES did not start with ADTS header,offset:" + r : "No ADTS header found in AAC PES"), m), !m) return;
                            }
                            if (Wi(t, this.observer, d, r, this.audioCodec), void 0 !== e.pts) n = e.pts; else {
                                if (!l) return void A.warn("[tsdemuxer]: AAC PES unknown PTS");
                                var g = Yi(t.samplerate);
                                n = l.sample.pts + g;
                            }
                            for (var y, v = 0; r < i;) {
                                if (r += (y = qi(t, d, r, n, v)).length, y.missing) {
                                    this.aacOverFlow = y;
                                    break;
                                }
                                for (v++; r < i - 1 && !Pe(d, r); r++) ;
                            }
                        }, a.parseMPEGPES = function (t, e) {
                            var r = e.data,
                                i = r.length,
                                n = 0,
                                o = 0,
                                l = e.pts;
                            if (void 0 !== l) {
                                for (; o < i;) if (Qi(r, o)) {
                                    var d = zi(t, r, o, l, n);
                                    if (!d) break;
                                    o += d.length, n++;
                                } else o++;
                            } else A.warn("[tsdemuxer]: MPEG PES unknown PTS");
                        }, a.parseAC3PES = function (t, e) {
                        }, a.parseID3PES = function (t, e) {
                            if (void 0 !== e.pts) {
                                var r = gt({}, e, {
                                    type: this._videoTrack ? se : ne,
                                    duration: Number.POSITIVE_INFINITY
                                });
                                t.samples.push(r);
                            } else A.warn("[tsdemuxer]: ID3 PES unknown PTS");
                        }, s;
                    }();

                function vr(s, a) {
                    return ((31 & s[a + 1]) << 8) + s[a + 2];
                }

                function Un(s, a) {
                    return (31 & s[a + 10]) << 8 | s[a + 11];
                }

                function Gn(s, a, t, e, r) {
                    var i = {
                            audioPid: -1,
                            videoPid: -1,
                            id3Pid: -1,
                            segmentVideoCodec: "avc",
                            segmentAudioCodec: "aac"
                        },
                        n = a + 3 + ((15 & s[a + 1]) << 8 | s[a + 2]) - 4;
                    for (a += 12 + ((15 & s[a + 10]) << 8 | s[a + 11]); a < n;) {
                        var o = vr(s, a),
                            l = (15 & s[a + 3]) << 8 | s[a + 4];
                        switch (s[a]) {
                            case 207:
                                if (!e) {
                                    gr("ADTS AAC");
                                    break;
                                }
                            case 15:
                                -1 === i.audioPid && (i.audioPid = o);
                                break;
                            case 21:
                                -1 === i.id3Pid && (i.id3Pid = o);
                                break;
                            case 219:
                                if (!e) {
                                    gr("H.264");
                                    break;
                                }
                            case 27:
                                -1 === i.videoPid && (i.videoPid = o, i.segmentVideoCodec = "avc");
                                break;
                            case 3:
                            case 4:
                                t.mpeg || t.mp3 ? -1 === i.audioPid && (i.audioPid = o, i.segmentAudioCodec = "mp3") : A.log("MPEG audio found, not supported in this browser");
                                break;
                            case 193:
                                if (!e) {
                                    gr("AC-3");
                                    break;
                                }
                            case 129:
                                A.warn("AC-3 in M2TS support not included in build");
                                break;
                            case 6:
                                if (-1 === i.audioPid && l > 0) for (var d = a + 5, u = l; u > 2;) {
                                    106 === s[d] && A.warn("AC-3 in M2TS support not included in build");
                                    var h = s[d + 1] + 2;
                                    d += h, u -= h;
                                }
                                break;
                            case 194:
                            case 135:
                                return Oe(r, new Error("Unsupported EC-3 in M2TS found")), i;
                            case 36:
                                return Oe(r, new Error("Unsupported HEVC in M2TS found")), i;
                        }
                        a += l + 5;
                    }
                    return i;
                }

                function Oe(s, a, t) {
                    A.warn("parsing error: " + a.message), s.emit(E.ERROR, E.ERROR, {
                        type: Y.MEDIA_ERROR,
                        details: _.FRAG_PARSING_ERROR,
                        fatal: !1,
                        levelRetry: t,
                        error: a,
                        reason: a.message
                    });
                }

                function gr(s) {
                    A.log(s + " with AES-128-CBC encryption found in unencrypted stream");
                }

                function Zt(s) {
                    var a,
                        t,
                        e,
                        r,
                        i,
                        n = 0,
                        o = s.data;
                    if (!s || 0 === s.size) return null;
                    for (; o[0].length < 19 && o.length > 1;) o[0] = St(o[0], o[1]), o.splice(1, 1);
                    if (((a = o[0])[0] << 16) + (a[1] << 8) + a[2] === 1) {
                        if ((t = (a[4] << 8) + a[5]) && t > s.size - 6) return null;
                        var l = a[7];
                        192 & l && (r = 536870912 * (14 & a[9]) + 4194304 * (255 & a[10]) + 16384 * (254 & a[11]) + 128 * (255 & a[12]) + (254 & a[13]) / 2, 64 & l ? r - (i = 536870912 * (14 & a[14]) + 4194304 * (255 & a[15]) + 16384 * (254 & a[16]) + 128 * (255 & a[17]) + (254 & a[18]) / 2) > 54e5 && (A.warn(Math.round((r - i) / 9e4) + "s delta between PTS and DTS, align them"), r = i) : i = r);
                        var d = (e = a[8]) + 9;
                        if (s.size <= d) return null;
                        s.size -= d;
                        for (var u = new Uint8Array(s.size), h = 0, f = o.length; h < f; h++) {
                            var c = (a = o[h]).byteLength;
                            if (d) {
                                if (d > c) {
                                    d -= c;
                                    continue;
                                }
                                a = a.subarray(d), c -= d, d = 0;
                            }
                            u.set(a, n), n += c;
                        }
                        return t && (t -= e + 3), {
                            data: u,
                            pts: r,
                            dts: i,
                            len: t
                        };
                    }
                    return null;
                }

                var Hn = function (s) {
                        function a() {
                            return s.apply(this, arguments) || this;
                        }

                        At(a, s);
                        var t = a.prototype;
                        return t.resetInitSegment = function (e, r, i, n) {
                            s.prototype.resetInitSegment.call(this, e, r, i, n), this._audioTrack = {
                                container: "audio/mpeg",
                                type: "audio",
                                id: 2,
                                pid: -1,
                                sequenceNumber: 0,
                                segmentCodec: "mp3",
                                samples: [],
                                manifestCodec: r,
                                duration: n,
                                inputTimeScale: 9e4,
                                dropped: 0
                            };
                        }, a.probe = function (e) {
                            if (!e) return !1;
                            var r = ye(e, 0),
                                i = (r === null || r === void 0 ? void 0 : r.length) || 0;
                            if (r && 11 === e[i] && 119 === e[i + 1] && void 0 !== Nr(r) && function (o, l) {
                                var d = 0,
                                    u = 5;
                                l += u;
                                for (var h = new Uint32Array(1), f = new Uint32Array(1), c = new Uint8Array(1); u > 0;) {
                                    c[0] = o[l];
                                    var m = Math.min(u, 8),
                                        g = 8 - m;
                                    f[0] = 4278190080 >>> 24 + g << g, h[0] = (c[0] & f[0]) >> g, d = d ? d << m | h[0] : h[0], l += 1, u -= m;
                                }
                                return d;
                            }(e, i) <= 16) return !1;
                            for (var n = e.length; i < n; i++) if (Zi(e, i)) return A.log("MPEG Audio sync word found !"), !0;
                            return !1;
                        }, t.canParse = function (e, r) {
                            return function (i, n) {
                                return cr(i, n) && 4 <= i.length - n;
                            }(e, r);
                        }, t.appendFrame = function (e, r, i) {
                            if (null !== this.basePTS) return zi(e, r, i, this.basePTS, this.frameIndex);
                        }, a;
                    }(Vi),
                    $i = function () {
                        function s() {
                        }

                        return s.getSilentFrame = function (a, t) {
                            if ("mp4a.40.2" === a) {
                                if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                                if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                                if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                                if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                                if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                                if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                            } else {
                                if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                            }
                        }, s;
                    }(),
                    Ut = Math.pow(2, 32) - 1,
                    ht = function () {
                        function s() {
                        }

                        return s.init = function () {
                            var a;
                            for (a in s.types = {
                                avc1: [],
                                avcC: [],
                                btrt: [],
                                dinf: [],
                                dref: [],
                                esds: [],
                                ftyp: [],
                                hdlr: [],
                                mdat: [],
                                mdhd: [],
                                mdia: [],
                                mfhd: [],
                                minf: [],
                                moof: [],
                                moov: [],
                                mp4a: [],
                                ".mp3": [],
                                dac3: [],
                                "ac-3": [],
                                mvex: [],
                                mvhd: [],
                                pasp: [],
                                sdtp: [],
                                stbl: [],
                                stco: [],
                                stsc: [],
                                stsd: [],
                                stsz: [],
                                stts: [],
                                tfdt: [],
                                tfhd: [],
                                traf: [],
                                trak: [],
                                trun: [],
                                trex: [],
                                tkhd: [],
                                vmhd: [],
                                smhd: []
                            }) s.types.hasOwnProperty(a) && (s.types[a] = [a.charCodeAt(0), a.charCodeAt(1), a.charCodeAt(2), a.charCodeAt(3)]);
                            var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                                e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                            s.HDLR_TYPES = {
                                video: t,
                                audio: e
                            };
                            var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                                i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                            s.STTS = s.STSC = s.STCO = i, s.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), s.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), s.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), s.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                            var n = new Uint8Array([105, 115, 111, 109]),
                                o = new Uint8Array([97, 118, 99, 49]),
                                l = new Uint8Array([0, 0, 0, 1]);
                            s.FTYP = s.box(s.types.ftyp, n, l, n, o), s.DINF = s.box(s.types.dinf, s.box(s.types.dref, r));
                        }, s.box = function (a) {
                            for (var t = 8, e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                            for (var n = r.length, o = n; n--;) t += r[n].byteLength;
                            var l = new Uint8Array(t);
                            for (l[0] = t >> 24 & 255, l[1] = t >> 16 & 255, l[2] = t >> 8 & 255, l[3] = 255 & t, l.set(a, 4), n = 0, t = 8; n < o; n++) l.set(r[n], t), t += r[n].byteLength;
                            return l;
                        }, s.hdlr = function (a) {
                            return s.box(s.types.hdlr, s.HDLR_TYPES[a]);
                        }, s.mdat = function (a) {
                            return s.box(s.types.mdat, a);
                        }, s.mdhd = function (a, t) {
                            t *= a;
                            var e = Math.floor(t / (Ut + 1)),
                                r = Math.floor(t % (Ut + 1));
                            return s.box(s.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 85, 196, 0, 0]));
                        }, s.mdia = function (a) {
                            return s.box(s.types.mdia, s.mdhd(a.timescale, a.duration), s.hdlr(a.type), s.minf(a));
                        }, s.mfhd = function (a) {
                            return s.box(s.types.mfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a]));
                        }, s.minf = function (a) {
                            return s.box(s.types.minf, "audio" === a.type ? s.box(s.types.smhd, s.SMHD) : s.box(s.types.vmhd, s.VMHD), s.DINF, s.stbl(a));
                        }, s.moof = function (a, t, e) {
                            return s.box(s.types.moof, s.mfhd(a), s.traf(e, t));
                        }, s.moov = function (a) {
                            for (var t = a.length, e = []; t--;) e[t] = s.trak(a[t]);
                            return s.box.apply(null, [s.types.moov, s.mvhd(a[0].timescale, a[0].duration)].concat(e).concat(s.mvex(a)));
                        }, s.mvex = function (a) {
                            for (var t = a.length, e = []; t--;) e[t] = s.trex(a[t]);
                            return s.box.apply(null, [s.types.mvex].concat(e));
                        }, s.mvhd = function (a, t) {
                            t *= a;
                            var e = Math.floor(t / (Ut + 1)),
                                r = Math.floor(t % (Ut + 1)),
                                i = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                            return s.box(s.types.mvhd, i);
                        }, s.sdtp = function (a) {
                            var t,
                                e,
                                r = a.samples || [],
                                i = new Uint8Array(4 + r.length);
                            for (t = 0; t < r.length; t++) i[t + 4] = (e = r[t].flags).dependsOn << 4 | e.isDependedOn << 2 | e.hasRedundancy;
                            return s.box(s.types.sdtp, i);
                        }, s.stbl = function (a) {
                            return s.box(s.types.stbl, s.stsd(a), s.box(s.types.stts, s.STTS), s.box(s.types.stsc, s.STSC), s.box(s.types.stsz, s.STSZ), s.box(s.types.stco, s.STCO));
                        }, s.avc1 = function (a) {
                            var t,
                                e,
                                r,
                                i = [],
                                n = [];
                            for (t = 0; t < a.sps.length; t++) r = (e = a.sps[t]).byteLength, i.push(r >>> 8 & 255), i.push(255 & r), i = i.concat(Array.prototype.slice.call(e));
                            for (t = 0; t < a.pps.length; t++) r = (e = a.pps[t]).byteLength, n.push(r >>> 8 & 255), n.push(255 & r), n = n.concat(Array.prototype.slice.call(e));
                            var o = s.box(s.types.avcC, new Uint8Array([1, i[3], i[4], i[5], 255, 224 | a.sps.length].concat(i).concat([a.pps.length]).concat(n))),
                                l = a.width,
                                d = a.height,
                                u = a.pixelRatio[0],
                                h = a.pixelRatio[1];
                            return s.box(s.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, d >> 8 & 255, 255 & d, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, s.box(s.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), s.box(s.types.pasp, new Uint8Array([u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h])));
                        }, s.esds = function (a) {
                            var t = a.config.length;
                            return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(a.config).concat([6, 1, 2]));
                        }, s.audioStsd = function (a) {
                            var t = a.samplerate;
                            return new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, a.channelCount, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0]);
                        }, s.mp4a = function (a) {
                            return s.box(s.types.mp4a, s.audioStsd(a), s.box(s.types.esds, s.esds(a)));
                        }, s.mp3 = function (a) {
                            return s.box(s.types[".mp3"], s.audioStsd(a));
                        }, s.ac3 = function (a) {
                            return s.box(s.types["ac-3"], s.audioStsd(a), s.box(s.types.dac3, a.config));
                        }, s.stsd = function (a) {
                            return s.box(s.types.stsd, s.STSD, "audio" === a.type ? "mp3" === a.segmentCodec && "mp3" === a.codec ? s.mp3(a) : "ac3" === a.segmentCodec ? s.ac3(a) : s.mp4a(a) : s.avc1(a));
                        }, s.tkhd = function (a) {
                            var t = a.id,
                                e = a.duration * a.timescale,
                                r = a.width,
                                i = a.height,
                                n = Math.floor(e / (Ut + 1)),
                                o = Math.floor(e % (Ut + 1));
                            return s.box(s.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0, i >> 8 & 255, 255 & i, 0, 0]));
                        }, s.traf = function (a, t) {
                            var e = s.sdtp(a),
                                r = a.id,
                                i = Math.floor(t / (Ut + 1)),
                                n = Math.floor(t % (Ut + 1));
                            return s.box(s.types.traf, s.box(s.types.tfhd, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r])), s.box(s.types.tfdt, new Uint8Array([1, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), s.trun(a, e.length + 16 + 20 + 8 + 16 + 8 + 8), e);
                        }, s.trak = function (a) {
                            return a.duration = a.duration || 4294967295, s.box(s.types.trak, s.tkhd(a), s.mdia(a));
                        }, s.trex = function (a) {
                            var t = a.id;
                            return s.box(s.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
                        }, s.trun = function (a, t) {
                            var e,
                                r,
                                i,
                                n,
                                o,
                                l,
                                d = a.samples || [],
                                u = d.length,
                                h = 12 + 16 * u,
                                f = new Uint8Array(h);
                            for (f.set(["video" === a.type ? 1 : 0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, (t += 8 + h) >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0), e = 0; e < u; e++) i = (r = d[e]).duration, f.set([i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, (n = r.size) >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, (o = r.flags).isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, (l = r.cts) >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * e);
                            return s.box(s.types.trun, f);
                        }, s.initSegment = function (a) {
                            s.types || s.init();
                            var t = s.moov(a);
                            return St(s.FTYP, t);
                        }, s;
                    }();

                function fe(s, a) {
                    return void 0 === a && (a = !1), function (t, e, r, i) {
                        void 0 === r && (r = 1), void 0 === i && (i = !1);
                        var n = 1e3 * t * r;
                        return i ? Math.round(n) : n;
                    }(s, 0, 1 / 9e4, a);
                }

                ht.types = void 0, ht.HDLR_TYPES = void 0, ht.STTS = void 0, ht.STSC = void 0, ht.STCO = void 0, ht.STSZ = void 0, ht.VMHD = void 0, ht.SMHD = void 0, ht.STSD = void 0, ht.FTYP = void 0, ht.DINF = void 0;
                var Jt = null,
                    mr = null,
                    pr = function () {
                        function s(t, e, r, i) {
                            if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = t, this.config = e, this.typeSupported = r, this.ISGenerated = !1, null === Jt) {
                                var n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                                Jt = n ? parseInt(n[1]) : 0;
                            }
                            if (null === mr) {
                                var o = navigator.userAgent.match(/Safari\/(\d+)/i);
                                mr = o ? parseInt(o[1]) : 0;
                            }
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                            this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
                        }, a.resetTimeStamp = function (t) {
                            A.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t;
                        }, a.resetNextTimestamp = function () {
                            A.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
                        }, a.resetInitSegment = function () {
                            A.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0;
                        }, a.getVideoStartPts = function (t) {
                            var e = !1,
                                r = t[0].pts,
                                i = t.reduce(function (n, o) {
                                    var l = o.pts,
                                        d = l - n;
                                    return d < -4294967296 && (e = !0, d = (l = Lt(l, r)) - n), d > 0 ? n : l;
                                }, r);
                            return e && A.debug("PTS rollover detected"), i;
                        }, a.remux = function (t, e, r, i, n, o, l, d) {
                            var u,
                                h,
                                f,
                                c,
                                m,
                                g,
                                y = n,
                                v = n,
                                S = e.pid > -1,
                                T = e.samples.length,
                                R = t.samples.length > 0,
                                b = l && T > 0 || T > 1;
                            if ((!(t.pid > -1) || R) && (!S || b) || this.ISGenerated || l) {
                                if (this.ISGenerated) {
                                    var L,
                                        k,
                                        x,
                                        w,
                                        D = this.videoTrackConfig;
                                    !D || e.width === D.width && e.height === D.height && (null == (L = e.pixelRatio) ? void 0 : L[0]) === (null == (k = D.pixelRatio) ? void 0 : k[0]) && (null == (x = e.pixelRatio) ? void 0 : x[1]) === (null == (w = D.pixelRatio) ? void 0 : w[1]) || this.resetInitSegment();
                                } else f = this.generateIS(t, e, n, o);
                                var C,
                                    F = this.isVideoContiguous,
                                    P = -1;
                                if (b && (P = function (U) {
                                    for (var H = 0; H < U.length; H++) if (U[H].key) return H;
                                    return -1;
                                }(e.samples), !F && this.config.forceKeyFrameOnDiscontinuity)) if (g = !0, P > 0) {
                                    A.warn("[mp4-remuxer]: Dropped " + P + " out of " + T + " video samples due to a missing keyframe");
                                    var M = this.getVideoStartPts(e.samples);
                                    e.samples = e.samples.slice(P), e.dropped += P, C = v += (e.samples[0].pts - M) / e.inputTimeScale;
                                } else -1 === P && (A.warn("[mp4-remuxer]: No keyframe found out of " + T + " video samples"), g = !1);
                                if (this.ISGenerated) {
                                    if (R && b) {
                                        var B = this.getVideoStartPts(e.samples),
                                            I = (Lt(t.samples[0].pts, B) - B) / e.inputTimeScale;
                                        y += Math.max(0, I), v += Math.max(0, -I);
                                    }
                                    if (R) {
                                        if (t.samplerate || (A.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), f = this.generateIS(t, e, n, o)), h = this.remuxAudio(t, y, this.isAudioContiguous, o, S || b || d === ae ? v : void 0), b) {
                                            var O = h ? h.endPTS - h.startPTS : 0;
                                            e.inputTimeScale || (A.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), f = this.generateIS(t, e, n, o)), u = this.remuxVideo(e, v, F, O);
                                        }
                                    } else b && (u = this.remuxVideo(e, v, F, 0));
                                    u && (u.firstKeyFrame = P, u.independent = -1 !== P, u.firstKeyFramePTS = C);
                                }
                            }
                            return this.ISGenerated && this._initPTS && this._initDTS && (r.samples.length && (m = ta(r, n, this._initPTS, this._initDTS)), i.samples.length && (c = ea(i, n, this._initPTS))), {
                                audio: h,
                                video: u,
                                initSegment: f,
                                independent: g,
                                text: c,
                                id3: m
                            };
                        }, a.generateIS = function (t, e, r, i) {
                            var n,
                                o,
                                l,
                                d = t.samples,
                                u = e.samples,
                                h = this.typeSupported,
                                f = {},
                                c = this._initPTS,
                                m = !c || i,
                                g = "audio/mp4";
                            if (m && (n = o = 1 / 0), t.config && d.length) {
                                switch (t.timescale = t.samplerate, t.segmentCodec) {
                                    case "mp3":
                                        h.mpeg ? (g = "audio/mpeg", t.codec = "") : h.mp3 && (t.codec = "mp3");
                                        break;
                                    case "ac3":
                                        t.codec = "ac-3";
                                }
                                f.audio = {
                                    id: "audio",
                                    container: g,
                                    codec: t.codec,
                                    initSegment: "mp3" === t.segmentCodec && h.mpeg ? new Uint8Array(0) : ht.initSegment([t]),
                                    metadata: {
                                        channelCount: t.channelCount
                                    }
                                }, m && (l = t.inputTimeScale, c && l === c.timescale ? m = !1 : n = o = d[0].pts - Math.round(l * r));
                            }
                            if (e.sps && e.pps && u.length) {
                                if (e.timescale = e.inputTimeScale, f.video = {
                                    id: "main",
                                    container: "video/mp4",
                                    codec: e.codec,
                                    initSegment: ht.initSegment([e]),
                                    metadata: {
                                        width: e.width,
                                        height: e.height
                                    }
                                }, m) if (l = e.inputTimeScale, c && l === c.timescale) m = !1; else {
                                    var y = this.getVideoStartPts(u),
                                        v = Math.round(l * r);
                                    o = Math.min(o, Lt(u[0].dts, y) - v), n = Math.min(n, y - v);
                                }
                                this.videoTrackConfig = {
                                    width: e.width,
                                    height: e.height,
                                    pixelRatio: e.pixelRatio
                                };
                            }
                            if (Object.keys(f).length) return this.ISGenerated = !0, m ? (this._initPTS = {
                                baseTime: n,
                                timescale: l
                            }, this._initDTS = {
                                baseTime: o,
                                timescale: l
                            }) : n = l = void 0, {
                                tracks: f,
                                initPTS: n,
                                timescale: l
                            };
                        }, a.remuxVideo = function (t, e, r, i) {
                            var n,
                                o,
                                l = t.inputTimeScale,
                                d = t.samples,
                                u = [],
                                h = d.length,
                                f = this._initPTS,
                                c = this.nextAvcDts,
                                m = 8,
                                g = this.videoSampleDuration,
                                y = Number.POSITIVE_INFINITY,
                                v = Number.NEGATIVE_INFINITY,
                                p = !1;
                            if (!r || null === c) {
                                var S = e * l,
                                    T = d[0].pts - Lt(d[0].dts, d[0].pts);
                                Jt && null !== c && Math.abs(S - T - c) < 15e3 ? r = !0 : c = S - T;
                            }
                            for (var R = f.baseTime * l / f.timescale, b = 0; b < h; b++) {
                                var L = d[b];
                                L.pts = Lt(L.pts - R, c), L.dts = Lt(L.dts - R, c), L.dts < d[b > 0 ? b - 1 : b].dts && (p = !0);
                            }
                            p && d.sort(function (Ne, ua) {
                                return Ne.dts - ua.dts || Ne.pts - ua.pts;
                            });
                            var k = d[d.length - 1].dts - (n = d[0].dts),
                                x = k ? Math.round(k / (h - 1)) : g || t.inputTimeScale / 30;
                            if (r) {
                                var w = n - c,
                                    D = w > x,
                                    C = w < -1;
                                if ((D || C) && (A.warn(D ? "AVC: " + fe(w, !0) + " ms (" + w + "dts) hole between fragments detected at " + e.toFixed(3) : "AVC: " + fe(-w, !0) + " ms (" + w + "dts) overlapping between fragments detected at " + e.toFixed(3)), !C || c >= d[0].pts || Jt)) {
                                    n = c;
                                    var F = d[0].pts - w;
                                    if (D) d[0].dts = n, d[0].pts = F; else for (var P = 0; P < d.length && !(d[P].dts > F); P++) d[P].dts -= w, d[P].pts -= w;
                                    A.log("Video: Initial PTS/DTS adjusted: " + fe(F, !0) + "/" + fe(n, !0) + ", delta: " + fe(w, !0) + " ms");
                                }
                            }
                            for (var M = 0, B = 0, I = n = Math.max(0, n), O = 0; O < h; O++) {
                                for (var U = d[O], H = U.units, V = H.length, $ = 0, nt = 0; nt < V; nt++) $ += H[nt].data.length;
                                B += $, M += V, U.length = $, U.dts < I ? (U.dts = I, I += x / 4 | 0 || 1) : I = U.dts, y = Math.min(U.pts, y), v = Math.max(U.pts, v);
                            }
                            o = d[h - 1].dts;
                            var rt,
                                tt = B + 4 * M + 8;
                            try {
                                rt = new Uint8Array(tt);
                            } catch (Ne) {
                                return void this.observer.emit(E.ERROR, E.ERROR, {
                                    type: Y.MUX_ERROR,
                                    details: _.REMUX_ALLOC_ERROR,
                                    fatal: !1,
                                    error: Ne,
                                    bytes: tt,
                                    reason: "fail allocating video mdat " + tt
                                });
                            }
                            var et = new DataView(rt.buffer);
                            et.setUint32(0, tt), rt.set(ht.types.mdat, 4);
                            for (var z = !1, Z = Number.POSITIVE_INFINITY, j = Number.POSITIVE_INFINITY, q = Number.NEGATIVE_INFINITY, J = Number.NEGATIVE_INFINITY, X = 0; X < h; X++) {
                                for (var W = d[X], mt = W.units, Mt = 0, Nt = 0, Rt = mt.length; Nt < Rt; Nt++) {
                                    var pt = mt[Nt],
                                        Et = pt.data,
                                        _t = pt.data.byteLength;
                                    et.setUint32(m, _t), rt.set(Et, m += 4), m += _t, Mt += 4 + _t;
                                }
                                var vt = void 0;
                                if (X < h - 1) g = d[X + 1].dts - W.dts, vt = d[X + 1].pts - W.pts; else {
                                    var ce = this.config,
                                        $t = X > 0 ? W.dts - d[X - 1].dts : x;
                                    if (vt = X > 0 ? W.pts - d[X - 1].pts : x, ce.stretchShortVideoTrack && null !== this.nextAudioPts) {
                                        var Rr = Math.floor(ce.maxBufferHole * l),
                                            ve = (i ? y + i * l : this.nextAudioPts) - W.pts;
                                        ve > Rr ? ((g = ve - $t) < 0 ? g = $t : z = !0, A.log("[mp4-remuxer]: It is approximately " + ve / 90 + " ms to the next segment; using duration " + g / 90 + " ms for the last video frame.")) : g = $t;
                                    } else g = $t;
                                }
                                var Me = Math.round(W.pts - W.dts);
                                Z = Math.min(Z, g), q = Math.max(q, g), j = Math.min(j, vt), J = Math.max(J, vt), u.push(new ra(W.key, g, Mt, Me));
                            }
                            if (u.length) if (Jt) {
                                if (Jt < 70) {
                                    var ge = u[0].flags;
                                    ge.dependsOn = 2, ge.isNonSync = 0;
                                }
                            } else if (mr && J - j < q - Z && x / q < .025 && 0 === u[0].cts) {
                                A.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
                                for (var te = n, Q = 0, st = u.length; Q < st; Q++) {
                                    var ot = te + u[Q].duration;
                                    u[Q].duration = Q < st - 1 ? ot + u[Q + 1].cts - (te + u[Q].cts) : Q ? u[Q - 1].duration : x, u[Q].cts = 0, te = ot;
                                }
                            }
                            this.nextAvcDts = c = o + (g = z || !g ? x : g), this.videoSampleDuration = g, this.isVideoContiguous = !0;
                            var Xn = {
                                data1: ht.moof(t.sequenceNumber++, n, gt({}, t, {
                                    samples: u
                                })),
                                data2: rt,
                                startPTS: y / l,
                                endPTS: (v + g) / l,
                                startDTS: n / l,
                                endDTS: c / l,
                                type: "video",
                                hasAudio: !1,
                                hasVideo: !0,
                                nb: u.length,
                                dropped: t.dropped
                            };
                            return t.samples = [], t.dropped = 0, Xn;
                        }, a.getSamplesPerFrame = function (t) {
                            switch (t.segmentCodec) {
                                case "mp3":
                                    return 1152;
                                case "ac3":
                                    return 1536;
                                default:
                                    return 1024;
                            }
                        }, a.remuxAudio = function (t, e, r, i, n) {
                            var o = t.inputTimeScale,
                                l = o / (t.samplerate ? t.samplerate : o),
                                d = this.getSamplesPerFrame(t),
                                u = d * l,
                                h = this._initPTS,
                                f = "mp3" === t.segmentCodec && this.typeSupported.mpeg,
                                c = [],
                                m = void 0 !== n,
                                g = t.samples,
                                y = f ? 0 : 8,
                                v = this.nextAudioPts || -1,
                                p = e * o,
                                S = h.baseTime * o / h.timescale;
                            if (this.isAudioContiguous = r = r || g.length && v > 0 && (i && Math.abs(p - v) < 9e3 || Math.abs(Lt(g[0].pts - S, p) - v) < 20 * u), g.forEach(function (X) {
                                X.pts = Lt(X.pts - S, p);
                            }), !r || v < 0) {
                                if (!(g = g.filter(function (X) {
                                    return X.pts >= 0;
                                })).length) return;
                                v = 0 === n ? 0 : i && !m ? Math.max(0, p) : g[0].pts;
                            }
                            if ("aac" === t.segmentCodec) for (var T = this.config.maxAudioFramesDrift, R = 0, b = v; R < g.length; R++) {
                                var L = g[R],
                                    k = L.pts,
                                    x = k - b,
                                    w = Math.abs(1e3 * x / o);
                                if (x <= -T * u && m) 0 === R && (A.warn("Audio frame @ " + (k / o).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * x / o) + " ms."), this.nextAudioPts = v = b = k); else if (x >= T * u && w < 1e4 && m) {
                                    var D = Math.round(x / u);
                                    (b = k - D * u) < 0 && (D--, b += u), 0 === R && (this.nextAudioPts = v = b), A.warn("[mp4-remuxer]: Injecting " + D + " audio frame @ " + (b / o).toFixed(3) + "s due to " + Math.round(1e3 * x / o) + " ms gap.");
                                    for (var C = 0; C < D; C++) {
                                        var F = Math.max(b, 0),
                                            P = $i.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                                        P || (A.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), P = L.unit.subarray()), g.splice(R, 0, {
                                            unit: P,
                                            pts: F
                                        }), b += u, R++;
                                    }
                                }
                                L.pts = b, b += u;
                            }
                            for (var M, B = null, I = null, O = 0, U = g.length; U--;) O += g[U].unit.byteLength;
                            for (var H = 0, V = g.length; H < V; H++) {
                                var $ = g[H],
                                    nt = $.unit,
                                    rt = $.pts;
                                if (null !== I) c[H - 1].duration = Math.round((rt - I) / l); else {
                                    if (r && "aac" === t.segmentCodec && (rt = v), B = rt, !(O > 0)) return;
                                    O += y;
                                    try {
                                        M = new Uint8Array(O);
                                    } catch (X) {
                                        return void this.observer.emit(E.ERROR, E.ERROR, {
                                            type: Y.MUX_ERROR,
                                            details: _.REMUX_ALLOC_ERROR,
                                            fatal: !1,
                                            error: X,
                                            bytes: O,
                                            reason: "fail allocating audio mdat " + O
                                        });
                                    }
                                    f || (new DataView(M.buffer).setUint32(0, O), M.set(ht.types.mdat, 4));
                                }
                                M.set(nt, y);
                                var tt = nt.byteLength;
                                y += tt, c.push(new ra(!0, d, tt, 0)), I = rt;
                            }
                            var et = c.length;
                            if (et) {
                                this.nextAudioPts = v = I + l * c[c.length - 1].duration;
                                var Z = f ? new Uint8Array(0) : ht.moof(t.sequenceNumber++, B / l, gt({}, t, {
                                    samples: c
                                }));
                                t.samples = [];
                                var j = B / o,
                                    q = v / o,
                                    J = {
                                        data1: Z,
                                        data2: M,
                                        startPTS: j,
                                        endPTS: q,
                                        startDTS: j,
                                        endDTS: q,
                                        type: "audio",
                                        hasAudio: !0,
                                        hasVideo: !1,
                                        nb: et
                                    };
                                return this.isAudioContiguous = !0, J;
                            }
                        }, a.remuxEmptyAudio = function (t, e, r, i) {
                            var n = t.inputTimeScale,
                                l = this.nextAudioPts,
                                d = this._initDTS,
                                u = 9e4 * d.baseTime / d.timescale,
                                h = (null !== l ? l : i.startDTS * n) + u,
                                c = n / (t.samplerate ? t.samplerate : n) * 1024,
                                m = Math.ceil((i.endDTS * n + u - h) / c),
                                g = $i.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                            if (A.warn("[mp4-remuxer]: remux empty Audio"), g) {
                                for (var y = [], v = 0; v < m; v++) {
                                    var p = h + v * c;
                                    y.push({
                                        unit: g,
                                        pts: p,
                                        dts: p
                                    });
                                }
                                return t.samples = y, this.remuxAudio(t, e, r, !1);
                            }
                            A.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
                        }, s;
                    }();

                function Lt(s, a) {
                    var t;
                    if (null === a) return s;
                    for (t = a < s ? -8589934592 : 8589934592; Math.abs(s - a) > 4294967296;) s += t;
                    return s;
                }

                function ta(s, a, t, e) {
                    var r = s.samples.length;
                    if (r) {
                        for (var i = s.inputTimeScale, n = 0; n < r; n++) {
                            var o = s.samples[n];
                            o.pts = Lt(o.pts - t.baseTime * i / t.timescale, a * i) / i, o.dts = Lt(o.dts - e.baseTime * i / e.timescale, a * i) / i;
                        }
                        var l = s.samples;
                        return s.samples = [], {
                            samples: l
                        };
                    }
                }

                function ea(s, a, t) {
                    var e = s.samples.length;
                    if (e) {
                        for (var r = s.inputTimeScale, i = 0; i < e; i++) {
                            var n = s.samples[i];
                            n.pts = Lt(n.pts - t.baseTime * r / t.timescale, a * r) / r;
                        }
                        s.samples.sort(function (l, d) {
                            return l.pts - d.pts;
                        });
                        var o = s.samples;
                        return s.samples = [], {
                            samples: o
                        };
                    }
                }

                var ra = function ra(s, a, t, e) {
                        this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = a, this.size = t, this.cts = e, this.flags = {
                            isLeading: 0,
                            isDependedOn: 0,
                            hasRedundancy: 0,
                            degradPrio: 0,
                            dependsOn: s ? 2 : 1,
                            isNonSync: s ? 0 : 1
                        };
                    },
                    Vn = function () {
                        function s() {
                            this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null;
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                        }, a.resetTimeStamp = function (t) {
                            this.initPTS = t, this.lastEndTime = null;
                        }, a.resetNextTimestamp = function () {
                            this.lastEndTime = null;
                        }, a.resetInitSegment = function (t, e, r, i) {
                            this.audioCodec = e, this.videoCodec = r, this.generateInitSegment(function Ia(s, a) {
                                if (!s || !a) return s;
                                var t = a.keyId;
                                return t && a.isCommonEncryption && K(s, ["moov", "trak"]).forEach(function (e) {
                                    var r = K(e, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8),
                                        i = K(r, ["enca"]),
                                        n = i.length > 0;
                                    n || (i = K(r, ["encv"])), i.forEach(function (o) {
                                        K(o.subarray(n ? 28 : 78), ["sinf"]).forEach(function (l) {
                                            var d = function (h) {
                                                var f = K(h, ["schm"])[0];
                                                if (f) {
                                                    var c = dt(f.subarray(4, 8));
                                                    if ("cbcs" === c || "cenc" === c) return K(h, ["schi", "tenc"])[0];
                                                }
                                                return null;
                                            }(l);
                                            if (d) {
                                                var u = d.subarray(8, 24);
                                                u.some(function (h) {
                                                    return 0 !== h;
                                                }) || (A.log("[eme] Patching keyId in 'enc" + (n ? "a" : "v") + ">sinf>>tenc' box: " + Gr(u) + " -> " + Gr(t)), d.set(t, 8));
                                            }
                                        });
                                    });
                                }), s;
                            }(t, i)), this.emitInitSegment = !0;
                        }, a.generateInitSegment = function (t) {
                            var e = this.audioCodec,
                                r = this.videoCodec;
                            if (null == t || !t.byteLength) return this.initTracks = void 0, void (this.initData = void 0);
                            var i = this.initData = Wr(t);
                            i.audio && (e = ia(i.audio, Tt)), i.video && (r = ia(i.video, bt));
                            var n = {};
                            i.audio && i.video ? n.audiovideo = {
                                container: "video/mp4",
                                codec: e + "," + r,
                                initSegment: t,
                                id: "main"
                            } : i.audio ? n.audio = {
                                container: "audio/mp4",
                                codec: e,
                                initSegment: t,
                                id: "audio"
                            } : i.video ? n.video = {
                                container: "video/mp4",
                                codec: r,
                                initSegment: t,
                                id: "main"
                            } : A.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = n;
                        }, a.remux = function (t, e, r, i, n, o) {
                            var l,
                                d,
                                u = this.initPTS,
                                h = this.lastEndTime,
                                f = {
                                    audio: void 0,
                                    video: void 0,
                                    text: i,
                                    id3: r,
                                    initSegment: void 0
                                };
                            N(h) || (h = this.lastEndTime = n || 0);
                            var c = e.samples;
                            if (null == c || !c.length) return f;
                            var m = {
                                    initPTS: void 0,
                                    timescale: 1
                                },
                                g = this.initData;
                            if (null != (l = g) && l.length || (this.generateInitSegment(c), g = this.initData), null == (d = g) || !d.length) return A.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), f;
                            this.emitInitSegment && (m.tracks = this.initTracks, this.emitInitSegment = !1);
                            var x,
                                y = function (x, w) {
                                    for (var D = 0, C = 0, F = 0, P = K(x, ["moof", "traf"]), M = 0; M < P.length; M++) {
                                        var B = P[M],
                                            I = K(B, ["tfhd"])[0],
                                            O = w[G(I, 4)];
                                        if (O) {
                                            var _U, _U2;
                                            var U = O.default,
                                                H = G(I, 0) | ((_U = U) === null || _U === void 0 ? void 0 : _U.flags),
                                                V = (_U2 = U) === null || _U2 === void 0 ? void 0 : _U2.duration;
                                            8 & H && (V = G(I, 2 & H ? 12 : 8));
                                            for (var $ = O.timescale || 9e4, nt = K(B, ["trun"]), rt = 0; rt < nt.length; rt++) !(D = Pa(nt[rt])) && V && (D = V * G(nt[rt], 4)), O.type === bt ? C += D / $ : O.type === Tt && (F += D / $);
                                        }
                                    }
                                    if (0 === C && 0 === F) {
                                        for (var tt = 1 / 0, et = 0, z = 0, Z = K(x, ["sidx"]), j = 0; j < Z.length; j++) {
                                            var q = xa(Z[j]);
                                            if (null != q && q.references) {
                                                tt = Math.min(tt, q.earliestPresentationTime / q.timescale);
                                                var J = q.references.reduce(function (X, W) {
                                                    return X + W.info.duration || 0;
                                                }, 0);
                                                z = (et = Math.max(et, J + q.earliestPresentationTime / q.timescale)) - tt;
                                            }
                                        }
                                        if (z && N(z)) return z;
                                    }
                                    return C || F;
                                }(c, g),
                                v = (x = g, K(c, ["moof", "traf"]).reduce(function (D, C) {
                                    var F = K(C, ["tfdt"])[0],
                                        P = F[0],
                                        M = K(C, ["tfhd"]).reduce(function (B, I) {
                                            var O = G(I, 4),
                                                U = x[O];
                                            if (U) {
                                                var H = G(F, 4);
                                                if (1 === P) {
                                                    if (H === Te) return A.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), B;
                                                    H *= Te + 1, H += G(F, 8);
                                                }
                                                var V = H / (U.timescale || 9e4);
                                                if (N(V) && (null === B || V < B)) return V;
                                            }
                                            return B;
                                        }, null);
                                    return null !== M && N(M) && (null === D || M < D) ? M : D;
                                }, null)),
                                p = null === v ? n : v;
                            (function (x, w, D, C) {
                                if (null === x) return !0;
                                var F = Math.max(C, 1);
                                return Math.abs(w - x.baseTime / x.timescale - D) > F;
                            }(u, p, n, y) || m.timescale !== u.timescale && o) && (m.initPTS = p - n, u && 1 === u.timescale && A.warn("Adjusting initPTS by " + (m.initPTS - u.baseTime)), this.initPTS = u = {
                                baseTime: m.initPTS,
                                timescale: 1
                            });
                            var S = t ? p - u.baseTime / u.timescale : h,
                                T = S + y;
                            (function (x, w, D) {
                                K(w, ["moof", "traf"]).forEach(function (C) {
                                    K(C, ["tfhd"]).forEach(function (F) {
                                        var P = G(F, 4),
                                            M = x[P];
                                        if (M) {
                                            var B = M.timescale || 9e4;
                                            K(C, ["tfdt"]).forEach(function (I) {
                                                var O = I[0],
                                                    U = D * B;
                                                if (U) {
                                                    var H = G(I, 4);
                                                    if (0 === O) H -= U, Ye(I, 4, H = Math.max(H, 0)); else {
                                                        H *= Math.pow(2, 32), H += G(I, 8), H -= U, H = Math.max(H, 0);
                                                        var V = Math.floor(H / (Te + 1)),
                                                            $ = Math.floor(H % (Te + 1));
                                                        Ye(I, 4, V), Ye(I, 8, $);
                                                    }
                                                }
                                            });
                                        }
                                    });
                                });
                            })(g, c, u.baseTime / u.timescale), y > 0 ? this.lastEndTime = T : (A.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                            var R = !!g.audio,
                                b = !!g.video,
                                L = "";
                            R && (L += "audio"), b && (L += "video");
                            var k = {
                                data1: c,
                                startPTS: S,
                                startDTS: S,
                                endPTS: T,
                                endDTS: T,
                                type: L,
                                hasAudio: R,
                                hasVideo: b,
                                nb: 1,
                                dropped: 0
                            };
                            return f.audio = "audio" === k.type ? k : void 0, f.video = "audio" !== k.type ? k : void 0, f.initSegment = m, f.id3 = ta(r, n, u, u), i.samples.length && (f.text = ea(i, n, u)), f;
                        }, s;
                    }();

                function ia(s, a) {
                    var t = s === null || s === void 0 ? void 0 : s.codec;
                    if (t && t.length > 4) return t;
                    if (a === Tt) {
                        if ("ec-3" === t || "ac-3" === t || "alac" === t) return t;
                        if ("fLaC" === t || "Opus" === t) return Ae(t, !1);
                        var e = "mp4a.40.5";
                        return A.info('Parsed audio codec "' + t + '" or audio object type not handled. Using "' + e + '"'), e;
                    }
                    return A.warn('Unhandled video codec "' + t + '"'), "hvc1" === t || "hev1" === t ? "hvc1.1.6.L120.90" : "av01" === t ? "av01.0.04M.08" : "avc1.42e01e";
                }

                var Ot,
                    aa = (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : void 0;
                try {
                    Ot = self.performance.now.bind(self.performance);
                } catch (_unused14) {
                    A.debug("Unable to use Performance API on this environment"), Ot = aa === null || aa === void 0 ? void 0 : aa.Date.now;
                }
                var yr = [{
                        demux: Fn,
                        remux: Vn
                    }, {
                        demux: Bn,
                        remux: pr
                    }, {
                        demux: In,
                        remux: pr
                    }, {
                        demux: Hn,
                        remux: pr
                    }],
                    Er = function () {
                        function s(t, e, r, i, n) {
                            this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = t, this.typeSupported = e, this.config = r, this.vendor = i, this.id = n;
                        }

                        var a = s.prototype;
                        return a.configure = function (t) {
                            this.transmuxConfig = t, this.decrypter && this.decrypter.reset();
                        }, a.push = function (t, e, r, i) {
                            var _M;
                            var n = this,
                                o = r.transmuxing;
                            o.executeStart = Ot();
                            var l = new Uint8Array(t),
                                d = this.currentTransmuxState,
                                u = this.transmuxConfig;
                            i && (this.currentTransmuxState = i);
                            var M,
                                B,
                                h = i || d,
                                f = h.contiguous,
                                c = h.discontinuity,
                                m = h.trackSwitch,
                                g = h.accurateTimeOffset,
                                y = h.timeOffset,
                                v = h.initSegmentChange,
                                p = u.audioCodec,
                                S = u.videoCodec,
                                T = u.defaultInitPts,
                                R = u.duration,
                                b = u.initSegmentData,
                                L = (M = e, B = null, l.byteLength > 0 && null != ((_M = M) === null || _M === void 0 ? void 0 : _M.key) && null !== M.iv && null != M.method && (B = M), B);
                            if (L && "AES-128" === L.method) {
                                var k = this.getDecrypter();

                                if (!k.isSync()) {
                                    var buf2hx = function (buffer) {
                                        return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
                                    }
                                    console.log(2, buf2hx(L.key.buffer), buf2hx(L.iv.buffer));


                                    return this.decryptionPromise = k.webCryptoDecrypt(l, L.key.buffer, L.iv.buffer).then(function (P) {
                                        console.log(17, P);
                                        var M = n.push(P, null, r);
                                        return n.decryptionPromise = null, M;
                                    }), this.decryptionPromise;
                                }
                                var x = k.softwareDecrypt(l, L.key.buffer, L.iv.buffer);
                                console.log(3, L.key.buffer, L.iv.buffer);
                                if (r.part > -1 && (x = k.flush()), !x) return o.executeEnd = Ot(), Tr(r);
                                l = new Uint8Array(x);
                            }
                            var w = this.needsProbing(c, m);
                            if (w) {
                                var D = this.configureTransmuxer(l);
                                if (D) return A.warn("[transmuxer] " + D.message), this.observer.emit(E.ERROR, E.ERROR, {
                                    type: Y.MEDIA_ERROR,
                                    details: _.FRAG_PARSING_ERROR,
                                    fatal: !1,
                                    error: D,
                                    reason: D.message
                                }), o.executeEnd = Ot(), Tr(r);
                            }
                            (c || m || v || w) && this.resetInitSegment(b, p, S, R, e), (c || v || w) && this.resetInitialTimestamp(T), f || this.resetContiguity();
                            var C = this.transmux(l, L, y, g, r),
                                F = this.currentTransmuxState;
                            return F.contiguous = !0, F.discontinuity = !1, F.trackSwitch = !1, o.executeEnd = Ot(), C;
                        }, a.flush = function (t) {
                            var e = this,
                                r = t.transmuxing;
                            r.executeStart = Ot();
                            var i = this.decrypter,
                                n = this.currentTransmuxState,
                                o = this.decryptionPromise;
                            if (o) return o.then(function () {
                                return e.flush(t);
                            });
                            var l = [],
                                d = n.timeOffset;
                            if (i) {
                                var u = i.flush();
                                u && l.push(this.push(u, null, t));
                            }
                            var h = this.demuxer;
                            if (!h || !this.remuxer) return r.executeEnd = Ot(), [Tr(t)];
                            var c = h.flush(d);
                            return Yt(c) ? c.then(function (m) {
                                return e.flushRemux(l, m, t), l;
                            }) : (this.flushRemux(l, c, t), l);
                        }, a.flushRemux = function (t, e, r) {
                            var i = e.audioTrack,
                                n = e.videoTrack,
                                o = e.id3Track,
                                l = e.textTrack,
                                d = this.currentTransmuxState,
                                u = d.accurateTimeOffset,
                                h = d.timeOffset;
                            A.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part : "") + " of level " + r.level);
                            var f = this.remuxer.remux(i, n, o, l, h, u, !0, this.id);
                            t.push({
                                remuxResult: f,
                                chunkMeta: r
                            }), r.transmuxing.executeEnd = Ot();
                        }, a.resetInitialTimestamp = function (t) {
                            var e = this.demuxer,
                                r = this.remuxer;
                            e && r && (e.resetTimeStamp(t), r.resetTimeStamp(t));
                        }, a.resetContiguity = function () {
                            var t = this.demuxer,
                                e = this.remuxer;
                            t && e && (t.resetContiguity(), e.resetNextTimestamp());
                        }, a.resetInitSegment = function (t, e, r, i, n) {
                            var o = this.demuxer,
                                l = this.remuxer;
                            o && l && (o.resetInitSegment(t, e, r, i), l.resetInitSegment(t, e, r, n));
                        }, a.destroy = function () {
                            this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
                        }, a.transmux = function (t, e, r, i, n) {
                            return e && "SAMPLE-AES" === e.method ? this.transmuxSampleAes(t, e, r, i, n) : this.transmuxUnencrypted(t, r, i, n);
                        }, a.transmuxUnencrypted = function (t, e, r, i) {
                            var n = this.demuxer.demux(t, e, !1, !this.config.progressive);
                            return {
                                remuxResult: this.remuxer.remux(n.audioTrack, n.videoTrack, n.id3Track, n.textTrack, e, r, !1, this.id),
                                chunkMeta: i
                            };
                        }, a.transmuxSampleAes = function (t, e, r, i, n) {
                            var o = this;
                            return this.demuxer.demuxSampleAes(t, e, r).then(function (l) {
                                return {
                                    remuxResult: o.remuxer.remux(l.audioTrack, l.videoTrack, l.id3Track, l.textTrack, r, i, !1, o.id),
                                    chunkMeta: n
                                };
                            });
                        }, a.configureTransmuxer = function (t) {
                            for (var e, r = this.config, i = this.observer, n = this.typeSupported, o = this.vendor, l = 0, d = yr.length; l < d; l++) {
                                var u;
                                if (null != (u = yr[l].demux) && u.probe(t)) {
                                    e = yr[l];
                                    break;
                                }
                            }
                            if (!e) return new Error("Failed to find demuxer by probing fragment data");
                            var h = this.demuxer,
                                f = this.remuxer,
                                c = e.remux,
                                m = e.demux;
                            f && f instanceof c || (this.remuxer = new c(i, r, n, o)), h && h instanceof m || (this.demuxer = new m(i, r, n), this.probe = m.probe);
                        }, a.needsProbing = function (t, e) {
                            return !this.demuxer || !this.remuxer || t || e;
                        }, a.getDecrypter = function () {
                            var t = this.decrypter;
                            return t || (t = this.decrypter = new ur(this.config)), t;
                        }, s;
                    }(),
                    Tr = function Tr(s) {
                        return {
                            remuxResult: {},
                            chunkMeta: s
                        };
                    };

                function Yt(s) {
                    return "then" in s && s.then instanceof Function;
                }

                var Kn = function Kn(s, a, t, e, r) {
                        this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = s, this.videoCodec = a, this.initSegmentData = t, this.duration = e, this.defaultInitPts = r || null;
                    },
                    jn = function jn(s, a, t, e, r, i) {
                        this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = s, this.contiguous = a, this.accurateTimeOffset = t, this.trackSwitch = e, this.timeOffset = r, this.initSegmentChange = i;
                    },
                    na = {
                        exports: {}
                    };
                !function (s) {
                    var a = Object.prototype.hasOwnProperty,
                        t = "~";

                    function e() {
                    }

                    function r(l, d, u) {
                        this.fn = l, this.context = d, this.once = u || !1;
                    }

                    function i(l, d, u, h, f) {
                        if ("function" != typeof u) throw new TypeError("The listener must be a function");
                        var c = new r(u, h || l, f),
                            m = t ? t + d : d;
                        return l._events[m] ? l._events[m].fn ? l._events[m] = [l._events[m], c] : l._events[m].push(c) : (l._events[m] = c, l._eventsCount++), l;
                    }

                    function n(l, d) {
                        0 == --l._eventsCount ? l._events = new e() : delete l._events[d];
                    }

                    function o() {
                        this._events = new e(), this._eventsCount = 0;
                    }

                    Object.create && (e.prototype = Object.create(null), new e().__proto__ || (t = !1)), o.prototype.eventNames = function () {
                        var l,
                            d,
                            u = [];
                        if (0 === this._eventsCount) return u;
                        for (d in l = this._events) a.call(l, d) && u.push(t ? d.slice(1) : d);
                        return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(l)) : u;
                    }, o.prototype.listeners = function (l) {
                        var u = this._events[t ? t + l : l];
                        if (!u) return [];
                        if (u.fn) return [u.fn];
                        for (var h = 0, f = u.length, c = new Array(f); h < f; h++) c[h] = u[h].fn;
                        return c;
                    }, o.prototype.listenerCount = function (l) {
                        var u = this._events[t ? t + l : l];
                        return u ? u.fn ? 1 : u.length : 0;
                    }, o.prototype.emit = function (l, d, u, h, f, c) {
                        var m = t ? t + l : l;
                        if (!this._events[m]) return !1;
                        var g,
                            y,
                            v = this._events[m],
                            p = arguments.length;
                        if (v.fn) {
                            switch (v.once && this.removeListener(l, v.fn, void 0, !0), p) {
                                case 1:
                                    return v.fn.call(v.context), !0;
                                case 2:
                                    return v.fn.call(v.context, d), !0;
                                case 3:
                                    return v.fn.call(v.context, d, u), !0;
                                case 4:
                                    return v.fn.call(v.context, d, u, h), !0;
                                case 5:
                                    return v.fn.call(v.context, d, u, h, f), !0;
                                case 6:
                                    return v.fn.call(v.context, d, u, h, f, c), !0;
                            }
                            for (y = 1, g = new Array(p - 1); y < p; y++) g[y - 1] = arguments[y];
                            v.fn.apply(v.context, g);
                        } else {
                            var S,
                                T = v.length;
                            for (y = 0; y < T; y++) switch (v[y].once && this.removeListener(l, v[y].fn, void 0, !0), p) {
                                case 1:
                                    v[y].fn.call(v[y].context);
                                    break;
                                case 2:
                                    v[y].fn.call(v[y].context, d);
                                    break;
                                case 3:
                                    v[y].fn.call(v[y].context, d, u);
                                    break;
                                case 4:
                                    v[y].fn.call(v[y].context, d, u, h);
                                    break;
                                default:
                                    if (!g) for (S = 1, g = new Array(p - 1); S < p; S++) g[S - 1] = arguments[S];
                                    v[y].fn.apply(v[y].context, g);
                            }
                        }
                        return !0;
                    }, o.prototype.on = function (l, d, u) {
                        return i(this, l, d, u, !1);
                    }, o.prototype.once = function (l, d, u) {
                        return i(this, l, d, u, !0);
                    }, o.prototype.removeListener = function (l, d, u, h) {
                        var f = t ? t + l : l;
                        if (!this._events[f]) return this;
                        if (!d) return n(this, f), this;
                        var c = this._events[f];
                        if (c.fn) c.fn !== d || h && !c.once || u && c.context !== u || n(this, f); else {
                            for (var m = 0, g = [], y = c.length; m < y; m++) (c[m].fn !== d || h && !c[m].once || u && c[m].context !== u) && g.push(c[m]);
                            g.length ? this._events[f] = 1 === g.length ? g[0] : g : n(this, f);
                        }
                        return this;
                    }, o.prototype.removeAllListeners = function (l) {
                        var d;
                        return l ? this._events[d = t ? t + l : l] && n(this, d) : (this._events = new e(), this._eventsCount = 0), this;
                    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, s.exports = o;
                }(na);
                var Sr = xr(na.exports);

                function Lr(s, a) {
                    if (!((t = a.remuxResult).audio || t.video || t.text || t.id3 || t.initSegment)) return !1;
                    var t,
                        e = [],
                        r = a.remuxResult,
                        i = r.audio,
                        n = r.video;
                    return i && sa(e, i), n && sa(e, n), s.postMessage({
                        event: "transmuxComplete",
                        data: a
                    }, e), !0;
                }

                function sa(s, a) {
                    a.data1 && s.push(a.data1.buffer), a.data2 && s.push(a.data2.buffer);
                }

                function oa(s, a, t) {
                    a.reduce(function (e, r) {
                        return Lr(s, r) || e;
                    }, !1) || s.postMessage({
                        event: "transmuxComplete",
                        data: a[0]
                    }), s.postMessage({
                        event: "flush",
                        data: t
                    });
                }

                void 0 !== br && br && function (s) {
                    var a = new Sr(),
                        t = function t(r, i) {
                            s.postMessage({
                                event: r,
                                data: i
                            });
                        };
                    a.on(E.FRAG_DECRYPTED, t), a.on(E.ERROR, t), s.addEventListener("message", function (r) {
                        var i = r.data;
                        switch (i.cmd) {
                            case "init":
                                var n = JSON.parse(i.config);
                                s.transmuxer = new Er(a, i.typeSupported, n, "", i.id), Ir(n.debug, i.id), function () {
                                    var r = function r(n) {
                                        A[n] = function (l) {
                                            t("workerLog", {
                                                logType: n,
                                                message: l
                                            });
                                        };
                                    };
                                    for (var i in A) r(i);
                                }(), t("init", null);
                                break;
                            case "configure":
                                s.transmuxer.configure(i.config);
                                break;
                            case "demux":
                                var o = s.transmuxer.push(i.data, i.decryptdata, i.chunkMeta, i.state);
                                Yt(o) ? (s.transmuxer.async = !0, o.then(function (u) {
                                    Lr(s, u);
                                }).catch(function (u) {
                                    t(E.ERROR, {
                                        type: Y.MEDIA_ERROR,
                                        details: _.FRAG_PARSING_ERROR,
                                        chunkMeta: i.chunkMeta,
                                        fatal: !1,
                                        error: u,
                                        err: u,
                                        reason: "transmuxer-worker push error"
                                    });
                                })) : (s.transmuxer.async = !1, Lr(s, o));
                                break;
                            case "flush":
                                var l = i.chunkMeta,
                                    d = s.transmuxer.flush(l);
                                Yt(d) || s.transmuxer.async ? (Yt(d) || (d = Promise.resolve(d)), d.then(function (u) {
                                    oa(s, u, l);
                                }).catch(function (u) {
                                    t(E.ERROR, {
                                        type: Y.MEDIA_ERROR,
                                        details: _.FRAG_PARSING_ERROR,
                                        chunkMeta: i.chunkMeta,
                                        fatal: !1,
                                        error: u,
                                        err: u,
                                        reason: "transmuxer-worker flush error"
                                    });
                                })) : oa(s, d, l);
                        }
                    });
                }(self);
                var Wn = function () {
                        function s(t, e, r, i) {
                            var n = this;
                            this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
                            var o = t.config;
                            this.hls = t, this.id = e, this.useWorker = !!o.enableWorker, this.onTransmuxComplete = r, this.onFlush = i;
                            var l = function l(y, v) {
                                (v = v || {}).frag = n.frag, v.id = n.id, y === E.ERROR && (n.error = v.error), n.hls.trigger(y, v);
                            };
                            this.observer = new Sr(), this.observer.on(E.FRAG_DECRYPTED, l), this.observer.on(E.ERROR, l);
                            var d,
                                u,
                                f,
                                c = Vt(o.preferManagedMediaSource) || {
                                    isTypeSupported: function isTypeSupported() {
                                        return !1;
                                    }
                                },
                                m = {
                                    mpeg: c.isTypeSupported("audio/mpeg"),
                                    mp3: c.isTypeSupported('audio/mp4; codecs="mp3"'),
                                    ac3: !1
                                };
                            if (!this.useWorker || (typeof Worker === "undefined" ? "undefined" : _typeof(Worker)) > "u") this.transmuxer = new Er(this.observer, m, o, "", e); else try {
                                o.workerPath ? (A.log("loading Web Worker " + o.workerPath + ' for "' + e + '"'), this.workerContext = (f = new self.URL(o.workerPath, self.location.href).href, {
                                    worker: new self.Worker(f),
                                    scriptURL: f
                                })) : (A.log('injecting Web Worker for "' + e + '"'), this.workerContext = (d = new self.Blob(["var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(" + ha.toString() + ")(true);"], {
                                    type: "text/javascript"
                                }), u = self.URL.createObjectURL(d), {
                                    worker: new self.Worker(u),
                                    objectURL: u
                                })), this.onwmsg = function (y) {
                                    return n.onWorkerMessage(y);
                                };
                                var g = this.workerContext.worker;
                                g.addEventListener("message", this.onwmsg), g.onerror = function (y) {
                                    var v = new Error(y.message + "  (" + y.filename + ":" + y.lineno + ")");
                                    o.enableWorker = !1, A.warn('Error in "' + e + '" Web Worker, fallback to inline'), n.hls.trigger(E.ERROR, {
                                        type: Y.OTHER_ERROR,
                                        details: _.INTERNAL_EXCEPTION,
                                        fatal: !1,
                                        event: "demuxerWorker",
                                        error: v
                                    });
                                }, g.postMessage({
                                    cmd: "init",
                                    typeSupported: m,
                                    vendor: "",
                                    id: e,
                                    config: JSON.stringify(o)
                                });
                            } catch (y) {
                                A.warn('Error setting up "' + e + '" Web Worker, fallback to inline', y), this.resetWorker(), this.error = null, this.transmuxer = new Er(this.observer, m, o, "", e);
                            }
                        }

                        var a = s.prototype;
                        return a.resetWorker = function () {
                            if (this.workerContext) {
                                var t = this.workerContext,
                                    e = t.worker,
                                    r = t.objectURL;
                                r && self.URL.revokeObjectURL(r), e.removeEventListener("message", this.onwmsg), e.onerror = null, e.terminate(), this.workerContext = null;
                            }
                        }, a.destroy = function () {
                            if (this.workerContext) this.resetWorker(), this.onwmsg = void 0; else {
                                var t = this.transmuxer;
                                t && (t.destroy(), this.transmuxer = null);
                            }
                            var e = this.observer;
                            e && e.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null;
                        }, a.push = function (t, e, r, i, n, o, l, d, u, h) {
                            var f,
                                c,
                                m = this;
                            u.transmuxing.start = self.performance.now();
                            var g = this.transmuxer,
                                y = o ? o.start : n.start,
                                v = n.decryptdata,
                                p = this.frag,
                                S = !(p && n.cc === p.cc),
                                T = !(p && u.level === p.level),
                                R = p ? u.sn - p.sn : -1,
                                b = this.part ? u.part - this.part.index : -1,
                                k = !T && (1 === R || 0 === R && (1 === b || 0 === R && u.id > 1 && u.id === (p === null || p === void 0 ? void 0 : p.stats.chunkCount) && b <= 0)),
                                x = self.performance.now();
                            (T || R || 0 === n.stats.parsing.start) && (n.stats.parsing.start = x), !o || !b && k || (o.stats.parsing.start = x);
                            var w = !(p && (null == (f = n.initSegment) ? void 0 : f.url) === (null == (c = p.initSegment) ? void 0 : c.url)),
                                D = new jn(S, k, d, T, y, w);
                            if (!k || S || w) {
                                A.log("[transmuxer-interface, " + n.type + "]: Starting new transmux session for sn: " + u.sn + " p: " + u.part + " level: " + u.level + " id: " + u.id + "\n        discontinuity: " + S + "\n        trackSwitch: " + T + "\n        contiguous: " + k + "\n        accurateTimeOffset: " + d + "\n        timeOffset: " + y + "\n        initSegmentChange: " + w);
                                var C = new Kn(r, i, e, l, h);
                                this.configureTransmuxer(C);
                            }
                            if (this.frag = n, this.part = o, this.workerContext) this.workerContext.worker.postMessage({
                                cmd: "demux",
                                data: t,
                                decryptdata: v,
                                chunkMeta: u,
                                state: D
                            }, t instanceof ArrayBuffer ? [t] : []); else if (g) {
                                var buf2hx = function (buffer) {
                                    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
                                }
                                // console.log("--->",buf2hx(t));

                                // t 是ts 的数据, v是加密key
                                var F = g.push(t, v, u, D);
                                Yt(F) ? (g.async = !0, F.then(function (P) {
                                    m.handleTransmuxComplete(P);
                                }).catch(function (P) {
                                    m.transmuxerError(P, u, "transmuxer-interface push error");
                                })) : (g.async = !1, this.handleTransmuxComplete(F));
                            }
                        }, a.flush = function (t) {
                            var e = this;
                            t.transmuxing.start = self.performance.now();
                            var r = this.transmuxer;
                            if (this.workerContext) this.workerContext.worker.postMessage({
                                cmd: "flush",
                                chunkMeta: t
                            }); else if (r) {
                                var i = r.flush(t);
                                Yt(i) || r.async ? (Yt(i) || (i = Promise.resolve(i)), i.then(function (n) {
                                    e.handleFlushResult(n, t);
                                }).catch(function (n) {
                                    e.transmuxerError(n, t, "transmuxer-interface flush error");
                                })) : this.handleFlushResult(i, t);
                            }
                        }, a.transmuxerError = function (t, e, r) {
                            this.hls && (this.error = t, this.hls.trigger(E.ERROR, {
                                type: Y.MEDIA_ERROR,
                                details: _.FRAG_PARSING_ERROR,
                                chunkMeta: e,
                                frag: this.frag || void 0,
                                fatal: !1,
                                error: t,
                                err: t,
                                reason: r
                            }));
                        }, a.handleFlushResult = function (t, e) {
                            var r = this;
                            t.forEach(function (i) {
                                r.handleTransmuxComplete(i);
                            }), this.onFlush(e);
                        }, a.onWorkerMessage = function (t) {
                            var e = t.data;
                            if (null != e && e.event) {
                                var r = this.hls;
                                if (this.hls) switch (e.event) {
                                    case "init":
                                        var i,
                                            n = null == (i = this.workerContext) ? void 0 : i.objectURL;
                                        n && self.URL.revokeObjectURL(n);
                                        break;
                                    case "transmuxComplete":
                                        this.handleTransmuxComplete(e.data);
                                        break;
                                    case "flush":
                                        this.onFlush(e.data);
                                        break;
                                    case "workerLog":
                                        A[e.data.logType] && A[e.data.logType](e.data.message);
                                        break;
                                    default:
                                        e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, r.trigger(e.event, e.data);
                                }
                            } else A.warn("worker message received with no " + (e ? "event name" : "data"));
                        }, a.configureTransmuxer = function (t) {
                            var e = this.transmuxer;
                            this.workerContext ? this.workerContext.worker.postMessage({
                                cmd: "configure",
                                config: t
                            }) : e && e.configure(t);
                        }, a.handleTransmuxComplete = function (t) {
                            t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t);
                        }, s;
                    }(),
                    Yn = function () {
                        function s(t, e, r, i) {
                            this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = t, this.media = e, this.fragmentTracker = r, this.hls = i;
                        }

                        var a = s.prototype;
                        return a.destroy = function () {
                            this.media = null, this.hls = this.fragmentTracker = null;
                        }, a.poll = function (t, e) {
                            var r = this.config,
                                i = this.media,
                                n = this.stalled;
                            if (null !== i) {
                                var o = i.currentTime,
                                    l = i.seeking,
                                    d = this.seeking && !l,
                                    u = !this.seeking && l;
                                if (this.seeking = l, o === t) {
                                    if (u || d) this.stalled = null; else if (i.paused && !l || i.ended || 0 === i.playbackRate || !ut.getBuffered(i).length) this.nudgeRetry = 0; else {
                                        var h = ut.bufferInfo(i, o, 0),
                                            f = h.nextStart || 0;
                                        if (l) {
                                            var c = h.len > 2,
                                                m = !f || e && e.start <= o || f - o > 2 && !this.fragmentTracker.getPartialFragment(o);
                                            if (c || m) return;
                                            this.moved = !1;
                                        }
                                        if (!this.moved && null !== this.stalled) {
                                            var g;
                                            if (!(h.len > 0 || f)) return;
                                            var y = Math.max(f, h.start || 0) - o,
                                                v = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                                                p = null != v && null != (g = v.details) && g.live ? 2 * v.details.targetduration : 2,
                                                S = this.fragmentTracker.getPartialFragment(o);
                                            if (y > 0 && (y <= p || S)) return void (i.paused || this._trySkipBufferHole(S));
                                        }
                                        var T = self.performance.now();
                                        if (null !== n) {
                                            var R = T - n;
                                            if (l || !(R >= 250) || (this._reportStall(h), this.media)) {
                                                var b = ut.bufferInfo(i, o, r.maxBufferHole);
                                                this._tryFixBufferStall(b, R);
                                            }
                                        } else this.stalled = T;
                                    }
                                } else if (this.moved = !0, l || (this.nudgeRetry = 0), null !== n) {
                                    if (this.stallReported) {
                                        var L = self.performance.now() - n;
                                        A.warn("playback not stuck anymore @" + o + ", after " + Math.round(L) + "ms"), this.stallReported = !1;
                                    }
                                    this.stalled = null;
                                }
                            }
                        }, a._tryFixBufferStall = function (t, e) {
                            var r = this.config,
                                n = this.media;
                            if (null !== n) {
                                var o = n.currentTime,
                                    l = this.fragmentTracker.getPartialFragment(o);
                                if (l && (this._trySkipBufferHole(l) || !this.media)) return;
                                (t.len > r.maxBufferHole || t.nextStart && t.nextStart - o < r.maxBufferHole) && e > 1e3 * r.highBufferWatchdogPeriod && (A.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
                            }
                        }, a._reportStall = function (t) {
                            var e = this.hls,
                                r = this.media;
                            if (!this.stallReported && r) {
                                this.stallReported = !0;
                                var i = new Error("Playback stalling at @" + r.currentTime + " due to low buffer (" + JSON.stringify(t) + ")");
                                A.warn(i.message), e.trigger(E.ERROR, {
                                    type: Y.MEDIA_ERROR,
                                    details: _.BUFFER_STALLED_ERROR,
                                    fatal: !1,
                                    error: i,
                                    buffer: t.len
                                });
                            }
                        }, a._trySkipBufferHole = function (t) {
                            var e = this.config,
                                r = this.hls,
                                i = this.media;
                            if (null === i) return 0;
                            var n = i.currentTime,
                                o = ut.bufferInfo(i, n, 0),
                                l = n < o.start ? o.start : o.nextStart;
                            if (l) {
                                var h = l - n;
                                if (h > 0 && (o.len <= e.maxBufferHole || o.len > 0 && o.len < 1 && i.readyState < 3)) {
                                    if (h > e.maxBufferHole) {
                                        var f = this.fragmentTracker,
                                            c = !1;
                                        if (0 === n) {
                                            var m = f.getAppendedFrag(0, at);
                                            m && l < m.end && (c = !0);
                                        }
                                        if (!c) {
                                            var g = t || f.getAppendedFrag(n, at);
                                            if (g) {
                                                for (var y = !1, v = g.end; v < l;) {
                                                    var p = f.getPartialFragment(v);
                                                    if (!p) {
                                                        y = !0;
                                                        break;
                                                    }
                                                    v += p.duration;
                                                }
                                                if (y) return 0;
                                            }
                                        }
                                    }
                                    var S = Math.max(l + .05, n + .1);
                                    if (A.warn("skipping hole, adjusting currentTime from " + n + " to " + S), this.moved = !0, this.stalled = null, i.currentTime = S, t && !t.gap) {
                                        var T = new Error("fragment loaded with buffer holes, seeking from " + n + " to " + S);
                                        r.trigger(E.ERROR, {
                                            type: Y.MEDIA_ERROR,
                                            details: _.BUFFER_SEEK_OVER_HOLE,
                                            fatal: !1,
                                            error: T,
                                            reason: T.message,
                                            frag: t
                                        });
                                    }
                                    return S;
                                }
                            }
                            return 0;
                        }, a._tryNudgeBuffer = function () {
                            var t = this.config,
                                e = this.hls,
                                r = this.media,
                                i = this.nudgeRetry;
                            if (null !== r) {
                                var n = r.currentTime;
                                if (this.nudgeRetry++, i < t.nudgeMaxRetry) {
                                    var o = n + (i + 1) * t.nudgeOffset,
                                        l = new Error("Nudging 'currentTime' from " + n + " to " + o);
                                    A.warn(l.message), r.currentTime = o, e.trigger(E.ERROR, {
                                        type: Y.MEDIA_ERROR,
                                        details: _.BUFFER_NUDGE_ON_STALL,
                                        error: l,
                                        fatal: !1
                                    });
                                } else {
                                    var d = new Error("Playhead still not moving while enough data buffered @" + n + " after " + t.nudgeMaxRetry + " nudges");
                                    A.error(d.message), e.trigger(E.ERROR, {
                                        type: Y.MEDIA_ERROR,
                                        details: _.BUFFER_STALLED_ERROR,
                                        error: d,
                                        fatal: !0
                                    });
                                }
                            }
                        }, s;
                    }(),
                    qn = function (s) {
                        function a(e, r, i) {
                            var n;
                            return (n = s.call(this, e, r, i, "[stream-controller]", at) || this).audioCodecSwap = !1, n.gapController = null, n.level = -1, n._forceStartLoad = !1, n.altAudio = !1, n.audioOnly = !1, n.fragPlaying = null, n.onvplaying = null, n.onvseeked = null, n.fragLastKbps = 0, n.couldBacktrack = !1, n.backtrackFragment = null, n.audioCodecSwitch = !1, n.videoBuffer = null, n._registerListeners(), n;
                        }

                        At(a, s);
                        var t = a.prototype;
                        return t._registerListeners = function () {
                            var e = this.hls;
                            e.on(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(E.MANIFEST_LOADING, this.onManifestLoading, this), e.on(E.MANIFEST_PARSED, this.onManifestParsed, this), e.on(E.LEVEL_LOADING, this.onLevelLoading, this), e.on(E.LEVEL_LOADED, this.onLevelLoaded, this), e.on(E.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(E.ERROR, this.onError, this), e.on(E.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(E.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(E.BUFFER_CREATED, this.onBufferCreated, this), e.on(E.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(E.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(E.FRAG_BUFFERED, this.onFragBuffered, this);
                        }, t._unregisterListeners = function () {
                            var e = this.hls;
                            e.off(E.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(E.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(E.MANIFEST_LOADING, this.onManifestLoading, this), e.off(E.MANIFEST_PARSED, this.onManifestParsed, this), e.off(E.LEVEL_LOADED, this.onLevelLoaded, this), e.off(E.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(E.ERROR, this.onError, this), e.off(E.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(E.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(E.BUFFER_CREATED, this.onBufferCreated, this), e.off(E.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(E.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(E.FRAG_BUFFERED, this.onFragBuffered, this);
                        }, t.onHandlerDestroying = function () {
                            this._unregisterListeners(), s.prototype.onHandlerDestroying.call(this);
                        }, t.startLoad = function (e) {
                            if (this.levels) {
                                var r = this.lastCurrentTime,
                                    i = this.hls;
                                if (this.stopLoad(), this.setInterval(100), this.level = -1, !this.startFragRequested) {
                                    var n = i.startLevel;
                                    -1 === n && (i.config.testBandwidth && this.levels.length > 1 ? (n = 0, this.bitrateTest = !0) : n = i.firstAutoLevel), i.nextLoadLevel = n, this.level = i.loadLevel, this.loadedmetadata = !1;
                                }
                                r > 0 && -1 === e && (this.log("Override startPosition with lastCurrentTime @" + r.toFixed(3)), e = r), this.state = it, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
                            } else this._forceStartLoad = !0, this.state = Ft;
                        }, t.stopLoad = function () {
                            this._forceStartLoad = !1, s.prototype.stopLoad.call(this);
                        }, t.doTick = function () {
                            switch (this.state) {
                                case Wt:
                                    var e = this.levels,
                                        r = this.level,
                                        i = e === null || e === void 0 ? void 0 : e[r],
                                        n = i === null || i === void 0 ? void 0 : i.details;
                                    if (n && (!n.live || this.levelLastLoaded === i)) {
                                        if (this.waitForCdnTuneIn(n)) break;
                                        this.state = it;
                                        break;
                                    }
                                    if (this.hls.nextLoadLevel !== this.level) {
                                        this.state = it;
                                        break;
                                    }
                                    break;
                                case de:
                                    var o,
                                        l = self.performance.now(),
                                        d = this.retryDate;
                                    if (!d || l >= d || null != (o = this.media) && o.seeking) {
                                        var u = this.levels,
                                            h = this.level,
                                            f = u === null || u === void 0 ? void 0 : u[h];
                                        this.resetStartWhenNotLoaded(f || null), this.state = it;
                                    }
                            }
                            this.state === it && this.doTickIdle(), this.onTickEnd();
                        }, t.onTickEnd = function () {
                            s.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
                        }, t.doTickIdle = function () {
                            var e = this.hls,
                                i = this.levels;
                            if (null !== this.levelLastLoaded && (this.media || !this.startFragRequested && e.config.startFragPrefetch) && (!this.altAudio || !this.audioOnly)) {
                                var o = this.buffering ? e.nextLoadLevel : e.loadLevel;
                                if (null != i && i[o]) {
                                    var l = i[o],
                                        d = this.getMainFwdBufferInfo();
                                    if (null !== d) {
                                        var u = this.getLevelDetails();
                                        if (u && this._streamEnded(d, u)) {
                                            var h = {};
                                            return this.altAudio && (h.type = "video"), this.hls.trigger(E.BUFFER_EOS, h), void (this.state = hr);
                                        }
                                        if (this.buffering) {
                                            e.loadLevel !== o && -1 === e.manualLevel && this.log("Adapting to level " + o + " from level " + this.level), this.level = e.nextLoadLevel = o;
                                            var f = l.details;
                                            if (!f || this.state === Wt || f.live && this.levelLastLoaded !== l) return this.level = o, void (this.state = Wt);
                                            var c = d.len,
                                                m = this.getMaxBufferLength(l.maxBitrate);
                                            if (!(c >= m)) {
                                                this.backtrackFragment && this.backtrackFragment.start > d.end && (this.backtrackFragment = null);
                                                var g = this.backtrackFragment ? this.backtrackFragment.start : d.end,
                                                    y = this.getNextFragment(g, f);
                                                if (this.couldBacktrack && !this.fragPrevious && y && "initSegment" !== y.sn && this.fragmentTracker.getState(y) !== le) {
                                                    var v,
                                                        p = (null != (v = this.backtrackFragment) ? v : y).sn - f.startSN,
                                                        S = f.fragments[p - 1];
                                                    S && y.cc === S.cc && (y = S, this.fragmentTracker.removeFragment(S));
                                                } else this.backtrackFragment && d.len && (this.backtrackFragment = null);
                                                if (y && this.isLoopLoading(y, g)) {
                                                    if (!y.gap) {
                                                        var T = this.audioOnly && !this.altAudio ? Tt : bt,
                                                            R = (T === bt ? this.videoBuffer : this.mediaBuffer) || this.media;
                                                        R && this.afterBufferFlushed(R, T, at);
                                                    }
                                                    y = this.getNextFragmentLoopLoading(y, f, d, at, m);
                                                }
                                                y && (!y.initSegment || y.initSegment.data || this.bitrateTest || (y = y.initSegment), this.loadFragment(y, l, g));
                                            }
                                        }
                                    }
                                }
                            }
                        }, t.loadFragment = function (e, r, i) {
                            var n = this.fragmentTracker.getState(e);
                            this.fragCurrent = e, n === Ii || n === oe ? "initSegment" === e.sn ? this._loadInitSegment(e, r) : this.bitrateTest ? (this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e, r)) : (this.startFragRequested = !0, s.prototype.loadFragment.call(this, e, r, i)) : this.clearTrackerIfNeeded(e);
                        }, t.getBufferedFrag = function (e) {
                            return this.fragmentTracker.getBufferedFrag(e, at);
                        }, t.followingBufferedFrag = function (e) {
                            return e ? this.getBufferedFrag(e.end + .5) : null;
                        }, t.immediateLevelSwitch = function () {
                            this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                        }, t.nextLevelSwitch = function () {
                            var e = this.levels,
                                r = this.media;
                            if (null != r && r.readyState) {
                                var i,
                                    n = this.getAppendedFrag(r.currentTime);
                                n && n.start > 1 && this.flushMainBuffer(0, n.start - 1);
                                var o = this.getLevelDetails();
                                if (null != o && o.live) {
                                    var l = this.getMainFwdBufferInfo();
                                    if (!l || l.len < 2 * o.targetduration) return;
                                }
                                if (!r.paused && e) {
                                    var u = this.fragLastKbps;
                                    i = u && this.fragCurrent ? this.fragCurrent.duration * e[this.hls.nextLoadLevel].maxBitrate / (1e3 * u) + 1 : 0;
                                } else i = 0;
                                var h = this.getBufferedFrag(r.currentTime + i);
                                if (h) {
                                    var f = this.followingBufferedFrag(h);
                                    if (f) {
                                        this.abortCurrentFrag();
                                        var m = f.duration,
                                            g = Math.max(h.end, (f.maxStartPTS ? f.maxStartPTS : f.start) + Math.min(Math.max(m - this.config.maxFragLookUpTolerance, m * (this.couldBacktrack ? .5 : .125)), m * (this.couldBacktrack ? .75 : .25)));
                                        this.flushMainBuffer(g, Number.POSITIVE_INFINITY);
                                    }
                                }
                            }
                        }, t.abortCurrentFrag = function () {
                            var e = this.fragCurrent;
                            switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
                                case dr:
                                case ue:
                                case de:
                                case jt:
                                case Ie:
                                    this.state = it;
                            }
                            this.nextLoadPosition = this.getLoadPosition();
                        }, t.flushMainBuffer = function (e, r) {
                            s.prototype.flushMainBuffer.call(this, e, r, this.altAudio ? "video" : null);
                        }, t.onMediaAttached = function (e, r) {
                            s.prototype.onMediaAttached.call(this, e, r);
                            var i = r.media;
                            this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i.addEventListener("playing", this.onvplaying), i.addEventListener("seeked", this.onvseeked), this.gapController = new Yn(this.config, i, this.fragmentTracker, this.hls);
                        }, t.onMediaDetaching = function () {
                            var e = this.media;
                            e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), s.prototype.onMediaDetaching.call(this);
                        }, t.onMediaPlaying = function () {
                            this.tick();
                        }, t.onMediaSeeked = function () {
                            var e = this.media,
                                r = e ? e.currentTime : null;
                            N(r) && this.log("Media seeked to " + r.toFixed(3));
                            var i = this.getMainFwdBufferInfo();
                            null !== i && 0 !== i.len ? this.tick() : this.warn('Main forward buffer length on "seeked" event ' + (i ? i.len : "empty") + ")");
                        }, t.onManifestLoading = function () {
                            this.log("Trigger BUFFER_RESET"), this.hls.trigger(E.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = this.fragLastKbps = 0, this.levels = this.fragPlaying = this.backtrackFragment = this.levelLastLoaded = null, this.altAudio = this.audioOnly = this.startFragRequested = !1;
                        }, t.onManifestParsed = function (e, r) {
                            var i,
                                n,
                                o = !1,
                                l = !1;
                            r.levels.forEach(function (d) {
                                var u = d.audioCodec;
                                u && (o = o || -1 !== u.indexOf("mp4a.40.2"), l = l || -1 !== u.indexOf("mp4a.40.5"));
                            }), this.audioCodecSwitch = o && l && "function" != typeof (null == (n = Gi()) || null == (i = n.prototype) ? void 0 : i.changeType), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = r.levels, this.startFragRequested = !1;
                        }, t.onLevelLoading = function (e, r) {
                            var i = this.levels;
                            if (i && this.state === it) {
                                var n = i[r.level];
                                (!n.details || n.details.live && this.levelLastLoaded !== n || this.waitForCdnTuneIn(n.details)) && (this.state = Wt);
                            }
                        }, t.onLevelLoaded = function (e, r) {
                            var i,
                                n = this.levels,
                                o = r.level,
                                l = r.details;
                            if (n) {
                                this.log("Level " + o + " loaded [" + l.startSN + "," + l.endSN + "]" + (l.lastPartSn ? "[part-" + l.lastPartSn + "-" + l.lastPartIndex + "]" : "") + ", cc [" + l.startCC + ", " + l.endCC + "] duration:" + l.totalduration);
                                var u = n[o],
                                    h = this.fragCurrent;
                                !h || this.state !== ue && this.state !== de || h.level !== r.level && h.loader && this.abortCurrentFrag();
                                var f = 0;
                                if (l.live || null != (i = u.details) && i.live) {
                                    var c;
                                    if (this.checkLiveUpdate(l), l.deltaUpdateFailed) return;
                                    f = this.alignPlaylists(l, u.details, null == (c = this.levelLastLoaded) ? void 0 : c.details);
                                }
                                if (u.details = l, this.levelLastLoaded = u, this.hls.trigger(E.LEVEL_UPDATED, {
                                    details: l,
                                    level: o
                                }), this.state === Wt) {
                                    if (this.waitForCdnTuneIn(l)) return;
                                    this.state = it;
                                }
                                this.startFragRequested ? l.live && this.synchronizeToLiveEdge(l) : this.setStartPosition(l, f), this.tick();
                            } else this.warn("Levels were reset while loading level " + o);
                        }, t._handleFragmentLoadProgress = function (e) {
                            var r,
                                i = e.frag,
                                n = e.part,
                                o = e.payload,
                                l = this.levels;
                            if (l) {
                                var d = l[i.level],
                                    u = d.details;
                                if (!u) return this.warn("Dropping fragment " + i.sn + " of level " + i.level + " after level details were reset"), void this.fragmentTracker.removeFragment(i);
                                var h = d.videoCodec,
                                    f = u.PTSKnown || !u.live,
                                    c = null == (r = i.initSegment) ? void 0 : r.data,
                                    m = this._getAudioCodec(d),
                                    g = this.transmuxer = this.transmuxer || new Wn(this.hls, at, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
                                    y = n ? n.index : -1,
                                    p = new Ni(i.level, i.sn, i.stats.chunkCount, o.byteLength, y, -1 !== y);
                                g.push(o, c, m, h, i, n, u.totalduration, f, p, this.initPTS[i.cc]);
                            } else this.warn("Levels were reset while fragment load was in progress. Fragment " + i.sn + " of level " + i.level + " will not be buffered");
                        }, t.onAudioTrackSwitching = function (e, r) {
                            var i = this.altAudio;
                            if (!r.url) {
                                if (this.mediaBuffer !== this.media) {
                                    this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                                    var n = this.fragCurrent;
                                    n && (this.log("Switching to main audio track, cancel main fragment load"), n.abortRequests(), this.fragmentTracker.removeFragment(n)), this.resetTransmuxer(), this.resetLoadingState();
                                } else this.audioOnly && this.resetTransmuxer();
                                var o = this.hls;
                                i && (o.trigger(E.BUFFER_FLUSHING, {
                                    startOffset: 0,
                                    endOffset: Number.POSITIVE_INFINITY,
                                    type: null
                                }), this.fragmentTracker.removeAllFragments()), o.trigger(E.AUDIO_TRACK_SWITCHED, r);
                            }
                        }, t.onAudioTrackSwitched = function (e, r) {
                            var n = !!this.hls.audioTracks[r.id].url;
                            if (n) {
                                var o = this.videoBuffer;
                                o && this.mediaBuffer !== o && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = o);
                            }
                            this.altAudio = n, this.tick();
                        }, t.onBufferCreated = function (e, r) {
                            var i,
                                n,
                                o = r.tracks,
                                l = !1;
                            for (var d in o) {
                                var u = o[d];
                                if ("main" === u.id) {
                                    if (n = d, i = u, "video" === d) {
                                        var h = o[d];
                                        h && (this.videoBuffer = h.buffer);
                                    }
                                } else l = !0;
                            }
                            l && i ? (this.log("Alternate track found, use " + n + ".buffered to schedule main fragment loading"), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media;
                        }, t.onFragBuffered = function (e, r) {
                            var i = r.frag,
                                n = r.part;
                            if (!i || i.type === at) {
                                if (this.fragContextChanged(i)) return this.warn("Fragment " + i.sn + (n ? " p: " + n.index : "") + " of level " + i.level + " finished buffering, but was aborted. state: " + this.state), void (this.state === Ie && (this.state = it));
                                var o = n ? n.stats : i.stats;
                                this.fragLastKbps = Math.round(8 * o.total / (o.buffering.end - o.loading.first)), "initSegment" !== i.sn && (this.fragPrevious = i), this.fragBufferedComplete(i, n);
                            }
                        }, t.onError = function (e, r) {
                            var i;
                            if (r.fatal) this.state = he; else switch (r.details) {
                                case _.FRAG_GAP:
                                case _.FRAG_PARSING_ERROR:
                                case _.FRAG_DECRYPT_ERROR:
                                case _.FRAG_LOAD_ERROR:
                                case _.FRAG_LOAD_TIMEOUT:
                                case _.KEY_LOAD_ERROR:
                                case _.KEY_LOAD_TIMEOUT:
                                    this.onFragmentOrKeyLoadError(at, r);
                                    break;
                                case _.LEVEL_LOAD_ERROR:
                                case _.LEVEL_LOAD_TIMEOUT:
                                case _.LEVEL_PARSING_ERROR:
                                    r.levelRetry || this.state !== Wt || (null == (i = r.context) ? void 0 : i.type) !== Kt || (this.state = it);
                                    break;
                                case _.BUFFER_APPEND_ERROR:
                                case _.BUFFER_FULL_ERROR:
                                    if (!r.parent || "main" !== r.parent) return;
                                    if (r.details === _.BUFFER_APPEND_ERROR) return void this.resetLoadingState();
                                    this.reduceLengthAndFlushBuffer(r) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                                    break;
                                case _.INTERNAL_EXCEPTION:
                                    this.recoverWorkerError(r);
                            }
                        }, t.checkBuffer = function () {
                            var e = this.media,
                                r = this.gapController;
                            e && r && e.readyState && (!this.loadedmetadata && ut.getBuffered(e).length || r.poll(this.lastCurrentTime, this.state !== it ? this.fragCurrent : null), this.lastCurrentTime = e.currentTime);
                        }, t.onFragLoadEmergencyAborted = function () {
                            this.state = it, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate();
                        }, t.onBufferFlushed = function (e, r) {
                            var i = r.type;
                            (i !== Tt || this.audioOnly && !this.altAudio) && (this.afterBufferFlushed((i === bt ? this.videoBuffer : this.mediaBuffer) || this.media, i, at), this.tick());
                        }, t.onLevelsUpdated = function (e, r) {
                            this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level), this.levels = r.levels;
                        }, t.swapAudioCodec = function () {
                            this.audioCodecSwap = !this.audioCodecSwap;
                        }, t.seekToStartPos = function () {
                            var e = this.media;
                            if (e) {
                                var r = e.currentTime,
                                    i = this.startPosition;
                                if (i >= 0 && r < i) {
                                    if (e.seeking) return void this.log("could not seek to " + i + ", already seeking at " + r);
                                    var n = ut.getBuffered(e),
                                        o = (n.length ? n.start(0) : 0) - i;
                                    o > 0 && (o < this.config.maxBufferHole || o < this.config.maxFragLookUpTolerance) && (this.log("adjusting start position by " + o + " to match buffer start"), this.startPosition = i += o), this.log("seek to target start position " + i + " from current time " + r), e.currentTime = i;
                                }
                            }
                        }, t._getAudioCodec = function (e) {
                            var r = this.config.defaultAudioCodec || e.audioCodec;
                            return this.audioCodecSwap && r && (this.log("Swapping audio codec"), r = -1 !== r.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), r;
                        }, t._loadBitrateTestFrag = function (e, r) {
                            var i = this;
                            e.bitrateTest = !0, this._doFragLoad(e, r).then(function (n) {
                                var o = i.hls;
                                if (n && !i.fragContextChanged(e)) {
                                    r.fragmentError = 0, i.state = it, i.startFragRequested = !1, i.bitrateTest = !1;
                                    var l = e.stats;
                                    l.parsing.start = l.parsing.end = l.buffering.start = l.buffering.end = self.performance.now(), o.trigger(E.FRAG_LOADED, n), e.bitrateTest = !1;
                                }
                            });
                        }, t._handleTransmuxComplete = function (e) {
                            var r,
                                i = "main",
                                n = this.hls,
                                o = e.remuxResult,
                                l = e.chunkMeta,
                                d = this.getCurrentContext(l);
                            if (d) {
                                var u = d.frag,
                                    h = d.part,
                                    f = d.level,
                                    c = o.video,
                                    m = o.text,
                                    g = o.id3,
                                    y = o.initSegment,
                                    v = f.details,
                                    p = this.altAudio ? void 0 : o.audio;
                                if (this.fragContextChanged(u)) this.fragmentTracker.removeFragment(u); else {
                                    if (this.state = jt, y) {
                                        if (null != y && y.tracks) {
                                            var S = u.initSegment || u;
                                            this._bufferInitSegment(f, y.tracks, S, l), n.trigger(E.FRAG_PARSING_INIT_SEGMENT, {
                                                frag: S,
                                                id: i,
                                                tracks: y.tracks
                                            });
                                        }
                                        var T = y.initPTS,
                                            R = y.timescale;
                                        N(T) && (this.initPTS[u.cc] = {
                                            baseTime: T,
                                            timescale: R
                                        }, n.trigger(E.INIT_PTS_FOUND, {
                                            frag: u,
                                            id: i,
                                            initPTS: T,
                                            timescale: R
                                        }));
                                    }
                                    if (c && v && "initSegment" !== u.sn) {
                                        var b = v.fragments[u.sn - 1 - v.startSN],
                                            L = u.sn === v.startSN,
                                            k = !b || u.cc > b.cc;
                                        if (!1 !== o.independent) {
                                            var x = c.startPTS,
                                                w = c.endPTS,
                                                D = c.startDTS,
                                                C = c.endDTS;
                                            if (h) h.elementaryStreams[c.type] = {
                                                startPTS: x,
                                                endPTS: w,
                                                startDTS: D,
                                                endDTS: C
                                            }; else if (c.firstKeyFrame && c.independent && 1 === l.id && !k && (this.couldBacktrack = !0), c.dropped && c.independent) {
                                                var F = this.getMainFwdBufferInfo(),
                                                    P = (F ? F.end : this.getLoadPosition()) + this.config.maxBufferHole;
                                                if (!L && P < (c.firstKeyFramePTS ? c.firstKeyFramePTS : x) - this.config.maxBufferHole && !k) return void this.backtrack(u);
                                                k && (u.gap = !0), u.setElementaryStreamInfo(c.type, u.start, w, u.start, C, !0);
                                            } else L && x > 2 && (u.gap = !0);
                                            u.setElementaryStreamInfo(c.type, x, w, D, C), this.backtrackFragment && (this.backtrackFragment = u), this.bufferFragmentData(c, u, h, l, L || k);
                                        } else {
                                            if (!L && !k) return void this.backtrack(u);
                                            u.gap = !0;
                                        }
                                    }
                                    if (p) {
                                        var B = p.startPTS,
                                            I = p.endPTS,
                                            O = p.startDTS,
                                            U = p.endDTS;
                                        h && (h.elementaryStreams[Tt] = {
                                            startPTS: B,
                                            endPTS: I,
                                            startDTS: O,
                                            endDTS: U
                                        }), u.setElementaryStreamInfo(Tt, B, I, O, U), this.bufferFragmentData(p, u, h, l);
                                    }
                                    v && null != g && null != (r = g.samples) && r.length && n.trigger(E.FRAG_PARSING_METADATA, {
                                        id: i,
                                        frag: u,
                                        details: v,
                                        samples: g.samples
                                    }), v && m && n.trigger(E.FRAG_PARSING_USERDATA, {
                                        id: i,
                                        frag: u,
                                        details: v,
                                        samples: m.samples
                                    });
                                }
                            } else this.resetWhenMissingContext(l);
                        }, t._bufferInitSegment = function (e, r, i, n) {
                            var o = this;
                            if (this.state === jt) {
                                this.audioOnly = !!r.audio && !r.video, this.altAudio && !this.audioOnly && delete r.audio;
                                var l = r.audio,
                                    d = r.video,
                                    u = r.audiovideo;
                                if (l) {
                                    var h = e.audioCodec,
                                        f = navigator.userAgent.toLowerCase();
                                    if (this.audioCodecSwitch) {
                                        h && (h = -1 !== h.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5");
                                        var c = l.metadata;
                                        c && "channelCount" in c && 1 !== (c.channelCount || 1) && -1 === f.indexOf("firefox") && (h = "mp4a.40.5");
                                    }
                                    h && -1 !== h.indexOf("mp4a.40.5") && -1 !== f.indexOf("android") && "audio/mpeg" !== l.container && this.log("Android: force audio codec to " + (h = "mp4a.40.2")), e.audioCodec && e.audioCodec !== h && this.log('Swapping manifest audio codec "' + e.audioCodec + '" for "' + h + '"'), l.levelCodec = h, l.id = "main", this.log("Init audio buffer, container:" + l.container + ", codecs[selected/level/parsed]=[" + (h || "") + "/" + (e.audioCodec || "") + "/" + l.codec + "]");
                                }
                                d && (d.levelCodec = e.videoCodec, d.id = "main", this.log("Init video buffer, container:" + d.container + ", codecs[level/parsed]=[" + (e.videoCodec || "") + "/" + d.codec + "]")), u && this.log("Init audiovideo buffer, container:" + u.container + ", codecs[level/parsed]=[" + e.codecs + "/" + u.codec + "]"), this.hls.trigger(E.BUFFER_CODECS, r), Object.keys(r).forEach(function (m) {
                                    var g = r[m].initSegment;
                                    null != g && g.byteLength && o.hls.trigger(E.BUFFER_APPENDING, {
                                        type: m,
                                        data: g,
                                        frag: i,
                                        part: null,
                                        chunkMeta: n,
                                        parent: i.type
                                    });
                                }), this.tickImmediate();
                            }
                        }, t.getMainFwdBufferInfo = function () {
                            return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, at);
                        }, t.backtrack = function (e) {
                            this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = it;
                        }, t.checkFragmentChanged = function () {
                            var e = this.media,
                                r = null;
                            if (e && e.readyState > 1 && !1 === e.seeking) {
                                var i = e.currentTime;
                                if (ut.isBuffered(e, i) ? r = this.getAppendedFrag(i) : ut.isBuffered(e, i + .1) && (r = this.getAppendedFrag(i + .1)), r) {
                                    this.backtrackFragment = null;
                                    var n = this.fragPlaying,
                                        o = r.level;
                                    n && r.sn === n.sn && n.level === o || (this.fragPlaying = r, this.hls.trigger(E.FRAG_CHANGED, {
                                        frag: r
                                    }), n && n.level === o || this.hls.trigger(E.LEVEL_SWITCHED, {
                                        level: o
                                    }));
                                }
                            }
                        }, ct(a, [{
                            key: "nextLevel",
                            get: function get() {
                                var e = this.nextBufferedFrag;
                                return e ? e.level : -1;
                            }
                        }, {
                            key: "currentFrag",
                            get: function get() {
                                var e = this.media;
                                return e ? this.fragPlaying || this.getAppendedFrag(e.currentTime) : null;
                            }
                        }, {
                            key: "currentProgramDateTime",
                            get: function get() {
                                var e = this.media;
                                if (e) {
                                    var r = e.currentTime,
                                        i = this.currentFrag;
                                    if (i && N(r) && N(i.programDateTime)) return new Date(i.programDateTime + 1e3 * (r - i.start));
                                }
                                return null;
                            }
                        }, {
                            key: "currentLevel",
                            get: function get() {
                                var e = this.currentFrag;
                                return e ? e.level : -1;
                            }
                        }, {
                            key: "nextBufferedFrag",
                            get: function get() {
                                var e = this.currentFrag;
                                return e ? this.followingBufferedFrag(e) : null;
                            }
                        }, {
                            key: "forceStartLoad",
                            get: function get() {
                                return this._forceStartLoad;
                            }
                        }]), a;
                    }(bn),
                    la = function () {
                        function s(t) {
                            void 0 === t && (t = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this.started = !1, this._emitter = new Sr(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, this.triggeringException = void 0, Ir(t.debug || !1, "Hls instance");
                            var e = this.config = function (D, C) {
                                if ((C.liveSyncDurationCount || C.liveMaxLatencyDurationCount) && (C.liveSyncDuration || C.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                                if (void 0 !== C.liveMaxLatencyDurationCount && (void 0 === C.liveSyncDurationCount || C.liveMaxLatencyDurationCount <= C.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                                if (void 0 !== C.liveMaxLatencyDuration && (void 0 === C.liveSyncDuration || C.liveMaxLatencyDuration <= C.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                                var F = lr(D),
                                    P = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
                                return ["manifest", "level", "frag"].forEach(function (M) {
                                    var B = ("level" === M ? "playlist" : M) + "LoadPolicy",
                                        I = void 0 === C[B],
                                        O = [];
                                    P.forEach(function (U) {
                                        var H = M + "Loading" + U,
                                            V = C[H];
                                        if (void 0 !== V && I) {
                                            O.push(H);
                                            var $ = F[B].default;
                                            switch (C[B] = {
                                                default: $
                                            }, U) {
                                                case "TimeOut":
                                                    $.maxLoadTimeMs = V, $.maxTimeToFirstByteMs = V;
                                                    break;
                                                case "MaxRetry":
                                                    $.errorRetry.maxNumRetry = V, $.timeoutRetry.maxNumRetry = V;
                                                    break;
                                                case "RetryDelay":
                                                    $.errorRetry.retryDelayMs = V, $.timeoutRetry.retryDelayMs = V;
                                                    break;
                                                case "MaxRetryTimeout":
                                                    $.errorRetry.maxRetryDelayMs = V, $.timeoutRetry.maxRetryDelayMs = V;
                                            }
                                        }
                                    }), O.length && A.warn('hls.js config: "' + O.join('", "') + '" setting(s) are deprecated, use "' + B + '": ' + JSON.stringify(C[B]));
                                }), yt(yt({}, F), C);
                            }(s.DefaultConfig, t);
                            this.userConfig = t, e.progressive && function vn(s) {
                                var a = s.loader;
                                a !== wi && a !== _i ? (A.log("[config]: Custom loader detected, cannot enable progressive streaming"), s.progressive = !1) : function () {
                                    if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
                                        return new self.ReadableStream({}), !0;
                                    } catch (_unused15) {
                                    }
                                    return !1;
                                }() && (s.loader = wi, s.progressive = !0, s.enableSoftwareAES = !0, A.log("[config]: Progressive streaming enabled, using FetchLoader"));
                            }(e);
                            var r = e.abrController,
                                i = e.bufferController,
                                n = e.capLevelController,
                                l = e.fpsController,
                                d = new (0, e.errorController)(this),
                                u = this.abrController = new r(this),
                                h = this.bufferController = new i(this),
                                f = this.capLevelController = new n(this),
                                c = new l(this),
                                m = new Ga(this),
                                g = new ja(this),
                                y = e.contentSteeringController,
                                v = y ? new y(this) : null,
                                p = this.levelController = new gn(this, v),
                                S = new mn(this),
                                T = new yn(this.config),
                                R = this.streamController = new qn(this, S, T);
                            f.setStreamController(R), c.setStreamController(R);
                            var b = [m, p, R];
                            v && b.splice(1, 0, v), this.networkControllers = b;
                            var L = [u, h, f, c, g, S];
                            this.audioTrackController = this.createController(e.audioTrackController, b);
                            var k = e.audioStreamController;
                            k && b.push(new k(this, S, T)), this.subtitleTrackController = this.createController(e.subtitleTrackController, b);
                            var x = e.subtitleStreamController;
                            x && b.push(new x(this, S, T)), this.createController(e.timelineController, L), T.emeController = this.emeController = this.createController(e.emeController, L), this.cmcdController = this.createController(e.cmcdController, L), this.latencyController = this.createController(Wa, L), this.coreComponents = L, b.push(d);
                            var w = d.onErrorOut;
                            "function" == typeof w && this.on(E.ERROR, w, d);
                        }

                        s.isMSESupported = function () {
                            return Hi();
                        }, s.isSupported = function () {
                            return function () {
                                if (!Hi()) return !1;
                                var t = Vt();
                                return "function" == typeof (t === null || t === void 0 ? void 0 : t.isTypeSupported) && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some(function (e) {
                                    return t.isTypeSupported(Xe(e, "video"));
                                }) || ["mp4a.40.2", "fLaC"].some(function (e) {
                                    return t.isTypeSupported(Xe(e, "audio"));
                                }));
                            }();
                        }, s.getMediaSource = function () {
                            return Vt();
                        };
                        var a = s.prototype;
                        return a.createController = function (t, e) {
                            if (t) {
                                var r = new t(this);
                                return e && e.push(r), r;
                            }
                            return null;
                        }, a.on = function (t, e, r) {
                            void 0 === r && (r = this), this._emitter.on(t, e, r);
                        }, a.once = function (t, e, r) {
                            void 0 === r && (r = this), this._emitter.once(t, e, r);
                        }, a.removeAllListeners = function (t) {
                            this._emitter.removeAllListeners(t);
                        }, a.off = function (t, e, r, i) {
                            void 0 === r && (r = this), this._emitter.off(t, e, r, i);
                        }, a.listeners = function (t) {
                            return this._emitter.listeners(t);
                        }, a.emit = function (t, e, r) {
                            return this._emitter.emit(t, e, r);
                        }, a.trigger = function (t, e) {
                            if (this.config.debug) return this.emit(t, t, e);
                            try {
                                return this.emit(t, t, e);
                            } catch (i) {
                                A.error("An internal error happened while handling event " + t + '. Error message: "' + i.message + '". Here is a stacktrace:', i), this.triggeringException || (this.triggeringException = !0, this.trigger(E.ERROR, {
                                    type: Y.OTHER_ERROR,
                                    details: _.INTERNAL_EXCEPTION,
                                    fatal: t === E.ERROR,
                                    event: t,
                                    error: i
                                }), this.triggeringException = !1);
                            }
                            return !1;
                        }, a.listenerCount = function (t) {
                            return this._emitter.listenerCount(t);
                        }, a.destroy = function () {
                            A.log("destroy"), this.trigger(E.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(function (e) {
                                return e.destroy();
                            }), this.networkControllers.length = 0, this.coreComponents.forEach(function (e) {
                                return e.destroy();
                            }), this.coreComponents.length = 0;
                            var t = this.config;
                            t.xhrSetup = t.fetchSetup = void 0, this.userConfig = null;
                        }, a.attachMedia = function (t) {
                            A.log("attachMedia"), this._media = t, this.trigger(E.MEDIA_ATTACHING, {
                                media: t
                            });
                        }, a.detachMedia = function () {
                            A.log("detachMedia"), this.trigger(E.MEDIA_DETACHING, void 0), this._media = null;
                        }, a.loadSource = function (t) {
                            this.stopLoad();
                            var e = this.media,
                                r = this.url,
                                i = this.url = Ge.buildAbsoluteURL(self.location.href, t, {
                                    alwaysNormalize: !0
                                });
                            this._autoLevelCapping = -1, this._maxHdcpLevel = null, A.log("loadSource:" + i), e && r && (r !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(e)), this.trigger(E.MANIFEST_LOADING, {
                                url: t
                            });
                        }, a.startLoad = function (t) {
                            void 0 === t && (t = -1), A.log("startLoad(" + t + ")"), this.started = !0, this.resumeBuffering();
                            for (var e = 0; e < this.networkControllers.length && (this.networkControllers[e].startLoad(t), this.started && this.networkControllers); e++) ;
                        }, a.stopLoad = function () {
                            A.log("stopLoad"), this.started = !1;
                            for (var t = 0; t < this.networkControllers.length && (this.networkControllers[t].stopLoad(), !this.started && this.networkControllers); t++) ;
                        }, a.resumeBuffering = function () {
                            A.log("resume buffering"), this.networkControllers.forEach(function (t) {
                                t.resumeBuffering && t.resumeBuffering();
                            });
                        }, a.pauseBuffering = function () {
                            A.log("pause buffering"), this.networkControllers.forEach(function (t) {
                                t.pauseBuffering && t.pauseBuffering();
                            });
                        }, a.swapAudioCodec = function () {
                            A.log("swapAudioCodec"), this.streamController.swapAudioCodec();
                        }, a.recoverMediaError = function () {
                            A.log("recoverMediaError");
                            var t = this._media;
                            this.detachMedia(), t && this.attachMedia(t);
                        }, a.removeLevel = function (t) {
                            this.levelController.removeLevel(t);
                        }, a.setAudioOption = function (t) {
                            var e;
                            return null == (e = this.audioTrackController) ? void 0 : e.setAudioOption(t);
                        }, a.setSubtitleOption = function (t) {
                            var e;
                            return null == (e = this.subtitleTrackController) || e.setSubtitleOption(t), null;
                        }, ct(s, [{
                            key: "levels",
                            get: function get() {
                                return this.levelController.levels || [];
                            }
                        }, {
                            key: "currentLevel",
                            get: function get() {
                                return this.streamController.currentLevel;
                            },
                            set: function set(t) {
                                A.log("set currentLevel:" + t), this.levelController.manualLevel = t, this.streamController.immediateLevelSwitch();
                            }
                        }, {
                            key: "nextLevel",
                            get: function get() {
                                return this.streamController.nextLevel;
                            },
                            set: function set(t) {
                                A.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch();
                            }
                        }, {
                            key: "loadLevel",
                            get: function get() {
                                return this.levelController.level;
                            },
                            set: function set(t) {
                                A.log("set loadLevel:" + t), this.levelController.manualLevel = t;
                            }
                        }, {
                            key: "nextLoadLevel",
                            get: function get() {
                                return this.levelController.nextLoadLevel;
                            },
                            set: function set(t) {
                                this.levelController.nextLoadLevel = t;
                            }
                        }, {
                            key: "firstLevel",
                            get: function get() {
                                return Math.max(this.levelController.firstLevel, this.minAutoLevel);
                            },
                            set: function set(t) {
                                A.log("set firstLevel:" + t), this.levelController.firstLevel = t;
                            }
                        }, {
                            key: "startLevel",
                            get: function get() {
                                var t = this.levelController.startLevel;
                                return -1 === t && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : t;
                            },
                            set: function set(t) {
                                A.log("set startLevel:" + t), -1 !== t && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t;
                            }
                        }, {
                            key: "capLevelToPlayerSize",
                            get: function get() {
                                return this.config.capLevelToPlayerSize;
                            },
                            set: function set(t) {
                                var e = !!t;
                                e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e);
                            }
                        }, {
                            key: "autoLevelCapping",
                            get: function get() {
                                return this._autoLevelCapping;
                            },
                            set: function set(t) {
                                this._autoLevelCapping !== t && (A.log("set autoLevelCapping:" + t), this._autoLevelCapping = t, this.levelController.checkMaxAutoUpdated());
                            }
                        }, {
                            key: "bandwidthEstimate",
                            get: function get() {
                                var t = this.abrController.bwEstimator;
                                return t ? t.getEstimate() : NaN;
                            },
                            set: function set(t) {
                                this.abrController.resetEstimator(t);
                            }
                        }, {
                            key: "ttfbEstimate",
                            get: function get() {
                                var t = this.abrController.bwEstimator;
                                return t ? t.getEstimateTTFB() : NaN;
                            }
                        }, {
                            key: "maxHdcpLevel",
                            get: function get() {
                                return this._maxHdcpLevel;
                            },
                            set: function set(t) {
                                (function (e) {
                                    return er.indexOf(e) > -1;
                                })(t) && this._maxHdcpLevel !== t && (this._maxHdcpLevel = t, this.levelController.checkMaxAutoUpdated());
                            }
                        }, {
                            key: "autoLevelEnabled",
                            get: function get() {
                                return -1 === this.levelController.manualLevel;
                            }
                        }, {
                            key: "manualLevel",
                            get: function get() {
                                return this.levelController.manualLevel;
                            }
                        }, {
                            key: "minAutoLevel",
                            get: function get() {
                                var t = this.levels,
                                    e = this.config.minAutoBitrate;
                                if (!t) return 0;
                                for (var r = t.length, i = 0; i < r; i++) if (t[i].maxBitrate >= e) return i;
                                return 0;
                            }
                        }, {
                            key: "maxAutoLevel",
                            get: function get() {
                                var t,
                                    e = this.levels,
                                    r = this.autoLevelCapping,
                                    i = this.maxHdcpLevel;
                                if (t = -1 === r && null != e && e.length ? e.length - 1 : r, i) for (var n = t; n--;) {
                                    var o = e[n].attrs["HDCP-LEVEL"];
                                    if (o && o <= i) return n;
                                }
                                return t;
                            }
                        }, {
                            key: "firstAutoLevel",
                            get: function get() {
                                return this.abrController.firstAutoLevel;
                            }
                        }, {
                            key: "nextAutoLevel",
                            get: function get() {
                                return this.abrController.nextAutoLevel;
                            },
                            set: function set(t) {
                                this.abrController.nextAutoLevel = t;
                            }
                        }, {
                            key: "playingDate",
                            get: function get() {
                                return this.streamController.currentProgramDateTime;
                            }
                        }, {
                            key: "mainForwardBufferInfo",
                            get: function get() {
                                return this.streamController.getMainFwdBufferInfo();
                            }
                        }, {
                            key: "allAudioTracks",
                            get: function get() {
                                var t = this.audioTrackController;
                                return t ? t.allAudioTracks : [];
                            }
                        }, {
                            key: "audioTracks",
                            get: function get() {
                                var t = this.audioTrackController;
                                return t ? t.audioTracks : [];
                            }
                        }, {
                            key: "audioTrack",
                            get: function get() {
                                var t = this.audioTrackController;
                                return t ? t.audioTrack : -1;
                            },
                            set: function set(t) {
                                var e = this.audioTrackController;
                                e && (e.audioTrack = t);
                            }
                        }, {
                            key: "allSubtitleTracks",
                            get: function get() {
                                var t = this.subtitleTrackController;
                                return t ? t.allSubtitleTracks : [];
                            }
                        }, {
                            key: "subtitleTracks",
                            get: function get() {
                                var t = this.subtitleTrackController;
                                return t ? t.subtitleTracks : [];
                            }
                        }, {
                            key: "subtitleTrack",
                            get: function get() {
                                var t = this.subtitleTrackController;
                                return t ? t.subtitleTrack : -1;
                            },
                            set: function set(t) {
                                var e = this.subtitleTrackController;
                                e && (e.subtitleTrack = t);
                            }
                        }, {
                            key: "media",
                            get: function get() {
                                return this._media;
                            }
                        }, {
                            key: "subtitleDisplay",
                            get: function get() {
                                var t = this.subtitleTrackController;
                                return !!t && t.subtitleDisplay;
                            },
                            set: function set(t) {
                                var e = this.subtitleTrackController;
                                e && (e.subtitleDisplay = t);
                            }
                        }, {
                            key: "lowLatencyMode",
                            get: function get() {
                                return this.config.lowLatencyMode;
                            },
                            set: function set(t) {
                                this.config.lowLatencyMode = t;
                            }
                        }, {
                            key: "liveSyncPosition",
                            get: function get() {
                                return this.latencyController.liveSyncPosition;
                            }
                        }, {
                            key: "latency",
                            get: function get() {
                                return this.latencyController.latency;
                            }
                        }, {
                            key: "maxLatency",
                            get: function get() {
                                return this.latencyController.maxLatency;
                            }
                        }, {
                            key: "targetLatency",
                            get: function get() {
                                return this.latencyController.targetLatency;
                            }
                        }, {
                            key: "drift",
                            get: function get() {
                                return this.latencyController.drift;
                            }
                        }, {
                            key: "forceStartLoad",
                            get: function get() {
                                return this.streamController.forceStartLoad;
                            }
                        }], [{
                            key: "version",
                            get: function get() {
                                return "1.5.18";
                            }
                        }, {
                            key: "Events",
                            get: function get() {
                                return E;
                            }
                        }, {
                            key: "ErrorTypes",
                            get: function get() {
                                return Y;
                            }
                        }, {
                            key: "ErrorDetails",
                            get: function get() {
                                return _;
                            }
                        }, {
                            key: "DefaultConfig",
                            get: function get() {
                                return s.defaultConfig ? s.defaultConfig : xi;
                            },
                            set: function set(t) {
                                s.defaultConfig = t;
                            }
                        }]), s;
                    }();
                return la.defaultConfig = void 0, la;
            }, da.exports = Dr();
        }(!1);
    }
}]);