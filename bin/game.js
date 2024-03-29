// ECS
!(function(t, e) {
  for (var n in e) t[n] = e[n]
})(
  this,
  (function(t) {
    var e = {}
    function n(o) {
      if (e[o]) return e[o].exports
      var r = (e[o] = { i: o, l: !1, exports: {} })
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var o = Object.create(null)
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var r in t)
            n.d(
              o,
              r,
              function(e) {
                return t[e]
              }.bind(null, r)
            )
        return o
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = ''),
      n((n.s = 30))
    )
  })([
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__assign) ||
          function() {
            return (o =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        r =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          },
        i =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        s =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isDisposableComponent = e.ObservableComponent = e.getComponentId = e.getComponentClassId = e.getComponentName = e.DisposableComponent = e.Component = e.DisposableComponentUpdated = e.DisposableComponentRemoved = e.DisposableComponentCreated = void 0)
      var a = n(1),
        p = n(8),
        u = n(18),
        l = (function() {
          function t(t, e, n) {
            ;(this.componentId = t), (this.componentName = e), (this.classId = n)
          }
          return (t = r([p.EventConstructor()], t))
        })()
      e.DisposableComponentCreated = l
      var c = (function() {
        function t(t) {
          this.componentId = t
        }
        return (t = r([p.EventConstructor()], t))
      })()
      e.DisposableComponentRemoved = c
      var h = (function() {
        function t(t, e) {
          ;(this.componentId = t), (this.component = e)
        }
        return (t = r([p.EventConstructor()], t))
      })()
      function d(t, e) {
        return function(n) {
          if (n.isComponent) throw new TypeError('You cannot extend a component. Trying to extend ' + n.originalClassName + ' with: ' + t)
          if ('number' != typeof e || isNaN(e)) throw new Error('classId: ' + e + ' is an invalid integer')
          var o = n,
            r = function() {
              if (!d.engine) throw new Error('You need to set a DisposableComponent.engine before creating disposable components')
              var n = Array.prototype.slice.call(arguments),
                r = new (o.bind.apply(o, s([void 0], n)))(),
                i = a.newId('C')
              return (
                Object.defineProperty(r, '__name__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: t }),
                Object.defineProperty(r, '__component__id_', { enumerable: !1, writable: !1, configurable: !1, value: i }),
                void 0 !== e &&
                  Object.defineProperty(r, '__classId__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: e }),
                d.engine && d.engine.registerComponent(r),
                r
              )
            }
          return (
            void 0 !== e && (r.__classId__symbol_ = e),
            (r.__name__symbol_ = t),
            (r.isComponent = !0),
            (r.isDisposableComponent = !0),
            (r.originalClassName = t),
            ((r.prototype = n.prototype).constructor = n),
            r
          )
        }
      }
      function f(t) {
        if (!t) throw new TypeError(t + ' is not a component.')
        if (t.__component__id_) return t.__component__id_
        throw new TypeError(t + ' is not a registered disposable component.')
      }
      ;(e.DisposableComponentUpdated = h),
        (e.Component = function(t, e) {
          return function(n) {
            if (n.isComponent) throw new TypeError('You cannot extend a component. Trying to extend ' + n.originalClassName + ' with: ' + t)
            var o = n,
              r = function() {
                var n = Array.prototype.slice.call(arguments),
                  r = new (o.bind.apply(o, s([void 0], n)))()
                return (
                  Object.defineProperty(r, '__name__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: t }),
                  void 0 !== e &&
                    Object.defineProperty(r, '__classId__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: e }),
                  r
                )
              }
            return (
              void 0 !== e && (r.__classId__symbol_ = e),
              (r.__name__symbol_ = t),
              (r.isComponent = !0),
              (r.originalClassName = t),
              ((r.prototype = n.prototype).constructor = n),
              r
            )
          }
        }),
        (e.DisposableComponent = d),
        (function(t) {
          t.engine = null
        })((d = e.DisposableComponent || (e.DisposableComponent = {}))),
        (e.getComponentName = function(t) {
          if (!t) throw new TypeError(t + ' is not a component.')
          if (t.__name__symbol_) return t.__name__symbol_
          throw new TypeError(t + ' is not a registered component.')
        }),
        (e.getComponentClassId = function(t) {
          if (!t) throw new TypeError(t + ' is not a component.')
          if (t.__classId__symbol_) return t.__classId__symbol_
          if (!t.__name__symbol_) throw new TypeError(t + ' is not a registered component.')
          return null
        }),
        (e.getComponentId = f)
      var y = (function() {
        function t() {
          ;(this.dirty = !1), (this.data = {}), (this.subscriptions = [])
        }
        return (
          (t.component = function(t, e) {
            if (delete t[e]) {
              var n = e + '_' + Math.random()
              ;(t[n] = void 0),
                Object.defineProperty(t, n, o(o({}, Object.getOwnPropertyDescriptor(t, n)), { enumerable: !1 })),
                Object.defineProperty(t, e.toString(), {
                  get: function() {
                    return this[n]
                  },
                  set: function(t) {
                    var o = this[n]
                    if (((this.data[e] = t ? f(t) : null), (this[n] = t), t !== o)) {
                      this.dirty = !0
                      for (var r = 0; r < this.subscriptions.length; r++) this.subscriptions[r](e, t, o)
                    }
                  },
                  enumerable: !0
                })
            }
          }),
          (t.field = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  return this.data[e]
                },
                set: function(t) {
                  var n = this.data[e]
                  if (((this.data[e] = t), t !== n)) {
                    this.dirty = !0
                    for (var o = 0; o < this.subscriptions.length; o++) this.subscriptions[o](e, t, n)
                  }
                },
                enumerable: !0
              })
          }),
          (t.uiValue = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  return this.data[e].toString()
                },
                set: function(t) {
                  var n = this.data[e],
                    o = new u.UIValue(t)
                  if (((this.data[e] = o), o !== n)) {
                    this.dirty = !0
                    for (var r = 0; r < this.subscriptions.length; r++) this.subscriptions[r](e, o, n)
                  }
                },
                enumerable: !0
              })
          }),
          (t.readonly = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  if (e in this.data == !1) throw new Error('The field ' + e + ' is uninitialized')
                  return this.data[e]
                },
                set: function(t) {
                  if (e in this.data) throw new Error('The field ' + e + ' is readonly')
                  ;(this.data[e] = t), (this.dirty = !0)
                },
                enumerable: !0,
                configurable: !1
              })
          }),
          (t.prototype.onChange = function(t) {
            return this.subscriptions.push(t), this
          }),
          (t.prototype.toJSON = function() {
            return this.data
          }),
          t
        )
      })()
      ;(e.ObservableComponent = y),
        (e.isDisposableComponent = function(t) {
          return '__component__id_' in t
        })
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        r =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.openNFTDialog = e.openExternalURL = e.buildArray = e.uuid = e.newId = e.error = e.log = void 0)
      var i = 0
      ;(e.log = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        'undefined' != typeof dcl ? dcl.log.apply(dcl, r(t)) : console.log.apply(console, r(['DEBUG:'], t))
      }),
        (e.error = function(t, e) {
          'undefined' != typeof dcl ? dcl.error(t, e) : console.error('ERROR:', t, e)
        }),
        (e.newId = function(t) {
          if ((i++, 0 === t.length)) throw new Error('newId(type: string): type cannot be empty')
          return t + i.toString(36)
        }),
        (e.uuid = function() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
            var e = (16 * Math.random()) | 0
            return ('x' === t ? e : (3 & e) | 8).toString(16)
          })
        }),
        (e.buildArray = function(t, e) {
          for (var n = [], o = 0; o < t; ++o) n.push(e())
          return n
        }),
        (e.openExternalURL = function(t) {
          'undefined' != typeof dcl
            ? typeof t.startsWith === 'function' && t.startsWith('https:')
              ? dcl.openExternalUrl(t)
              : console.error('ERROR: url is invalid, it must start with https:')
            : console.error('ERROR: openExternalURL dcl is undefined')
        }),
        (e.openNFTDialog = function(t, e) {
          if ((void 0 === e && (e = null), 'undefined' != typeof dcl)) {
            var n = t.match(/ethereum:\/\/(.+)\/(.+)/)
            if (!n || n.length < 3) return
            dcl.openNFTDialog(n[1], n[2], e)
          } else console.error('ERROR: openNFTDialog dcl is undefined')
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RAD2DEG = e.DEG2RAD = e.Epsilon = e.ToLinearSpace = e.ToGammaSpace = e.Space = e.Orientation = void 0),
        (function(t) {
          ;(t[(t.CW = 0)] = 'CW'), (t[(t.CCW = 1)] = 'CCW')
        })(e.Orientation || (e.Orientation = {})),
        (function(t) {
          ;(t[(t.LOCAL = 0)] = 'LOCAL'), (t[(t.WORLD = 1)] = 'WORLD'), (t[(t.BONE = 2)] = 'BONE')
        })(e.Space || (e.Space = {})),
        (e.ToGammaSpace = 1 / 2.2),
        (e.ToLinearSpace = 2.2),
        (e.Epsilon = 1e-6),
        (e.DEG2RAD = Math.PI / 180),
        (e.RAD2DEG = 360 / (2 * Math.PI))
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Vector3 = void 0)
      var o = n(9),
        r = n(2),
        i = n(10),
        s = n(6),
        a = (function() {
          function t(t, e, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), (this.x = t), (this.y = e), (this.z = n)
          }
          return (
            Object.defineProperty(t.prototype, 'isNonUniform', {
              get: function() {
                var t = Math.abs(this.x),
                  e = Math.abs(this.y)
                if (t !== e) return !0
                var n = Math.abs(this.z)
                return t !== n || e !== n
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.Add = function(e, n) {
              return new t(e.x, e.y, e.z).addInPlace(n)
            }),
            (t.GetClipFactor = function(e, n, o, r) {
              var i = t.Dot(e, o) - r
              return i / (i - (t.Dot(n, o) - r))
            }),
            (t.GetAngleBetweenVectors = function(e, n, r) {
              var i = e.normalizeToRef(o.MathTmp.Vector3[1]),
                s = n.normalizeToRef(o.MathTmp.Vector3[2]),
                a = t.Dot(i, s),
                p = o.MathTmp.Vector3[3]
              return t.CrossToRef(i, s, p), t.Dot(p, r) > 0 ? Math.acos(a) : -Math.acos(a)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2])
            }),
            (t.FromFloatArray = function(e, n) {
              return t.FromArray(e, n)
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1]), (n.z = t[e + 2])
            }),
            (t.FromFloatArrayToRef = function(e, n, o) {
              return t.FromArrayToRef(e, n, o)
            }),
            (t.FromFloatsToRef = function(t, e, n, o) {
              o.copyFromFloats(t, e, n)
            }),
            (t.Zero = function() {
              return new t(0, 0, 0)
            }),
            (t.One = function() {
              return new t(1, 1, 1)
            }),
            (t.Up = function() {
              return new t(0, 1, 0)
            }),
            (t.Down = function() {
              return new t(0, -1, 0)
            }),
            (t.Forward = function() {
              return new t(0, 0, 1)
            }),
            (t.Backward = function() {
              return new t(0, 0, -1)
            }),
            (t.Right = function() {
              return new t(1, 0, 0)
            }),
            (t.Left = function() {
              return new t(-1, 0, 0)
            }),
            (t.TransformCoordinates = function(e, n) {
              var o = t.Zero()
              return t.TransformCoordinatesToRef(e, n, o), o
            }),
            (t.TransformCoordinatesToRef = function(e, n, o) {
              return t.TransformCoordinatesFromFloatsToRef(e.x, e.y, e.z, n, o)
            }),
            (t.TransformCoordinatesFromFloatsToRef = function(t, e, n, o, r) {
              var i = o.m,
                s = t * i[0] + e * i[4] + n * i[8] + i[12],
                a = t * i[1] + e * i[5] + n * i[9] + i[13],
                p = t * i[2] + e * i[6] + n * i[10] + i[14],
                u = 1 / (t * i[3] + e * i[7] + n * i[11] + i[15])
              ;(r.x = s * u), (r.y = a * u), (r.z = p * u)
            }),
            (t.TransformNormal = function(e, n) {
              var o = t.Zero()
              return t.TransformNormalToRef(e, n, o), o
            }),
            (t.TransformNormalToRef = function(t, e, n) {
              this.TransformNormalFromFloatsToRef(t.x, t.y, t.z, e, n)
            }),
            (t.TransformNormalFromFloatsToRef = function(t, e, n, o, r) {
              var i = o.m
              ;(r.x = t * i[0] + e * i[4] + n * i[8]), (r.y = t * i[1] + e * i[5] + n * i[9]), (r.z = t * i[2] + e * i[6] + n * i[10])
            }),
            (t.CatmullRom = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s
              return new t(
                0.5 * (2 * n.x + (-e.x + o.x) * i + (2 * e.x - 5 * n.x + 4 * o.x - r.x) * s + (-e.x + 3 * n.x - 3 * o.x + r.x) * a),
                0.5 * (2 * n.y + (-e.y + o.y) * i + (2 * e.y - 5 * n.y + 4 * o.y - r.y) * s + (-e.y + 3 * n.y - 3 * o.y + r.y) * a),
                0.5 * (2 * n.z + (-e.z + o.z) * i + (2 * e.z - 5 * n.z + 4 * o.z - r.z) * s + (-e.z + 3 * n.z - 3 * o.z + r.z) * a)
              )
            }),
            (t.Clamp = function(e, n, o) {
              var r = new t()
              return t.ClampToRef(e, n, o, r), r
            }),
            (t.ClampToRef = function(t, e, n, o) {
              var r = t.x
              r = (r = r > n.x ? n.x : r) < e.x ? e.x : r
              var i = t.y
              i = (i = i > n.y ? n.y : i) < e.y ? e.y : i
              var s = t.z
              ;(s = (s = s > n.z ? n.z : s) < e.z ? e.z : s), o.copyFromFloats(r, i, s)
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(
                e.x * p + o.x * u + n.x * l + r.x * c,
                e.y * p + o.y * u + n.y * l + r.y * c,
                e.z * p + o.z * u + n.z * l + r.z * c
              )
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.x = t.x + (e.x - t.x) * n), (o.y = t.y + (e.y - t.y) * n), (o.z = t.z + (e.z - t.z) * n)
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y + t.z * e.z
            }),
            (t.Cross = function(e, n) {
              var o = t.Zero()
              return t.CrossToRef(e, n, o), o
            }),
            (t.CrossToRef = function(t, e, n) {
              var o = t.y * e.z - t.z * e.y,
                r = t.z * e.x - t.x * e.z,
                i = t.x * e.y - t.y * e.x
              n.copyFromFloats(o, r, i)
            }),
            (t.Normalize = function(e) {
              var n = t.Zero()
              return t.NormalizeToRef(e, n), n
            }),
            (t.NormalizeToRef = function(t, e) {
              t.normalizeToRef(e)
            }),
            (t.Minimize = function(e, n) {
              var o = new t(e.x, e.y, e.z)
              return o.minimizeInPlace(n), o
            }),
            (t.Maximize = function(e, n) {
              var o = new t(e.x, e.y, e.z)
              return o.maximizeInPlace(n), o
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y,
                r = t.z - e.z
              return n * n + o * o + r * r
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.RotationFromAxis = function(e, n, o) {
              var r = t.Zero()
              return t.RotationFromAxisToRef(e, n, o, r), r
            }),
            (t.RotationFromAxisToRef = function(t, e, n, r) {
              var s = o.MathTmp.Quaternion[0]
              i.Quaternion.RotationQuaternionFromAxisToRef(t, e, n, s), r.copyFrom(s.eulerAngles)
            }),
            (t.prototype.toString = function() {
              return '(' + this.x + ', ' + this.y + ', ' + this.z + ')'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector3'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))
            }),
            (t.prototype.asArray = function() {
              var t = []
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), this
            }),
            (t.prototype.toQuaternion = function() {
              return i.Quaternion.Identity.setEuler(this.y, this.x, this.z)
            }),
            (t.prototype.addInPlace = function(t) {
              return this.addInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.addInPlaceFromFloats = function(t, e, n) {
              return (this.x += t), (this.y += e), (this.z += n), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z)
            }),
            (t.prototype.addToRef = function(t, e) {
              return e.copyFromFloats(this.x + t.x, this.y + t.y, this.z + t.z)
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return this.subtractFromFloatsToRef(t.x, t.y, t.z, e)
            }),
            (t.prototype.subtractFromFloats = function(e, n, o) {
              return new t(this.x - e, this.y - n, this.z - o)
            }),
            (t.prototype.subtractFromFloatsToRef = function(t, e, n, o) {
              return o.copyFromFloats(this.x - t, this.y - e, this.z - n)
            }),
            (t.prototype.applyMatrix4 = function(t) {
              this.applyMatrix4ToRef(t, this)
            }),
            (t.prototype.applyMatrix4ToRef = function(t, e) {
              var n = this.x,
                o = this.y,
                r = this.z,
                i = t.m,
                s = 1 / (i[3] * n + i[7] * o + i[11] * r + i[15])
              return (
                (e.x = (i[0] * n + i[4] * o + i[8] * r + i[12]) * s),
                (e.y = (i[1] * n + i[5] * o + i[9] * r + i[13]) * s),
                (e.z = (i[2] * n + i[6] * o + i[10] * r + i[14]) * s),
                e
              )
            }),
            (t.prototype.rotate = function(t) {
              return this.rotateToRef(t, this)
            }),
            (t.prototype.rotateToRef = function(t, e) {
              var n = this.x,
                o = this.y,
                r = this.z,
                i = t.x,
                s = t.y,
                a = t.z,
                p = t.w,
                u = p * n + s * r - a * o,
                l = p * o + a * n - i * r,
                c = p * r + i * o - s * n,
                h = -i * n - s * o - a * r
              return (
                (e.x = u * p + h * -i + l * -a - c * -s),
                (e.y = l * p + h * -s + c * -i - u * -a),
                (e.z = c * p + h * -a + u * -s - l * -i),
                e
              )
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y, -this.z)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return e.copyFromFloats(this.x * t, this.y * t, this.z * t)
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return e.addInPlaceFromFloats(this.x * t, this.y * t, this.z * t)
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return (
                void 0 === e && (e = r.Epsilon),
                t &&
                  s.Scalar.WithinEpsilon(this.x, t.x, e) &&
                  s.Scalar.WithinEpsilon(this.y, t.y, e) &&
                  s.Scalar.WithinEpsilon(this.z, t.z, e)
              )
            }),
            (t.prototype.equalsToFloats = function(t, e, n) {
              return this.x === t && this.y === e && this.z === n
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this
            }),
            (t.prototype.multiply = function(t) {
              return this.multiplyByFloats(t.x, t.y, t.z)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return e.copyFromFloats(this.x * t.x, this.y * t.y, this.z * t.z)
            }),
            (t.prototype.multiplyByFloats = function(e, n, o) {
              return new t(this.x * e, this.y * n, this.z * o)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y, this.z / e.z)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return e.copyFromFloats(this.x / t.x, this.y / t.y, this.z / t.z)
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.minimizeInPlace = function(t) {
              return this.minimizeInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.maximizeInPlace = function(t) {
              return this.maximizeInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.minimizeInPlaceFromFloats = function(t, e, n) {
              return t < this.x && (this.x = t), e < this.y && (this.y = e), n < this.z && (this.z = n), this
            }),
            (t.prototype.maximizeInPlaceFromFloats = function(t, e, n) {
              return t > this.x && (this.x = t), e > this.y && (this.y = e), n > this.z && (this.z = n), this
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
            }),
            (t.prototype.fract = function() {
              return new t(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z))
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y + this.z * this.z
            }),
            (t.prototype.normalize = function() {
              return this.normalizeFromLength(this.length())
            }),
            (t.prototype.normalizeFromLength = function(t) {
              return 0 === t || 1 === t ? this : this.scaleInPlace(1 / t)
            }),
            (t.prototype.normalizeToNew = function() {
              var e = new t(0, 0, 0)
              return this.normalizeToRef(e), e
            }),
            (t.prototype.normalizeToRef = function(t) {
              var e = this.length()
              return 0 === e || 1 === e ? t.copyFromFloats(this.x, this.y, this.z) : this.scaleToRef(1 / e, t)
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z)
            }),
            (t.prototype.copyFrom = function(t) {
              return this.copyFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.copyFromFloats = function(t, e, n) {
              return (this.x = t), (this.y = e), (this.z = n), this
            }),
            (t.prototype.set = function(t, e, n) {
              return this.copyFromFloats(t, e, n)
            }),
            (t.prototype.setAll = function(t) {
              return (this.x = this.y = this.z = t), this
            }),
            t
          )
        })()
      e.Vector3 = a
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.VideoTexture = e.VideoClip = e.SmartItem = e.OnAnimationEnd = e.OnPointerLock = e.OnPointerUUIDEvent = e.OnUUIDEvent = e.BasicMaterial = e.Material = e.TransparencyMode = e.TextShape = e.Fonts = e.Font = e.OBJShape = e.Animator = e.Texture = e.NFTShape = e.PictureFrameStyle = e.GLTFShape = e.CylinderShape = e.ConeShape = e.PlaneShape = e.CircleShape = e.SphereShape = e.BoxShape = e.Shape = e.Billboard = e.Transform = e.AvatarModifierArea = e.AvatarModifiers = e.CLASS_ID = void 0)
      var a,
        p = n(0),
        u = n(5),
        l = n(26),
        c = n(1),
        h = n(16)
      !(function(t) {
        ;(t[(t.TRANSFORM = 1)] = 'TRANSFORM'),
          (t[(t.UUID_CALLBACK = 8)] = 'UUID_CALLBACK'),
          (t[(t.BOX_SHAPE = 16)] = 'BOX_SHAPE'),
          (t[(t.SPHERE_SHAPE = 17)] = 'SPHERE_SHAPE'),
          (t[(t.PLANE_SHAPE = 18)] = 'PLANE_SHAPE'),
          (t[(t.CONE_SHAPE = 19)] = 'CONE_SHAPE'),
          (t[(t.CYLINDER_SHAPE = 20)] = 'CYLINDER_SHAPE'),
          (t[(t.TEXT_SHAPE = 21)] = 'TEXT_SHAPE'),
          (t[(t.NFT_SHAPE = 22)] = 'NFT_SHAPE'),
          (t[(t.UI_WORLD_SPACE_SHAPE = 23)] = 'UI_WORLD_SPACE_SHAPE'),
          (t[(t.UI_SCREEN_SPACE_SHAPE = 24)] = 'UI_SCREEN_SPACE_SHAPE'),
          (t[(t.UI_CONTAINER_RECT = 25)] = 'UI_CONTAINER_RECT'),
          (t[(t.UI_CONTAINER_STACK = 26)] = 'UI_CONTAINER_STACK'),
          (t[(t.UI_TEXT_SHAPE = 27)] = 'UI_TEXT_SHAPE'),
          (t[(t.UI_INPUT_TEXT_SHAPE = 28)] = 'UI_INPUT_TEXT_SHAPE'),
          (t[(t.UI_IMAGE_SHAPE = 29)] = 'UI_IMAGE_SHAPE'),
          (t[(t.UI_SLIDER_SHAPE = 30)] = 'UI_SLIDER_SHAPE'),
          (t[(t.CIRCLE_SHAPE = 31)] = 'CIRCLE_SHAPE'),
          (t[(t.BILLBOARD = 32)] = 'BILLBOARD'),
          (t[(t.ANIMATION = 33)] = 'ANIMATION'),
          (t[(t.FONT = 34)] = 'FONT'),
          (t[(t.UI_FULLSCREEN_SHAPE = 40)] = 'UI_FULLSCREEN_SHAPE'),
          (t[(t.UI_BUTTON_SHAPE = 41)] = 'UI_BUTTON_SHAPE'),
          (t[(t.GLTF_SHAPE = 54)] = 'GLTF_SHAPE'),
          (t[(t.OBJ_SHAPE = 55)] = 'OBJ_SHAPE'),
          (t[(t.AVATAR_SHAPE = 56)] = 'AVATAR_SHAPE'),
          (t[(t.BASIC_MATERIAL = 64)] = 'BASIC_MATERIAL'),
          (t[(t.PBR_MATERIAL = 65)] = 'PBR_MATERIAL'),
          (t[(t.HIGHLIGHT_ENTITY = 66)] = 'HIGHLIGHT_ENTITY'),
          (t[(t.SOUND = 67)] = 'SOUND'),
          (t[(t.TEXTURE = 68)] = 'TEXTURE'),
          (t[(t.VIDEO_CLIP = 70)] = 'VIDEO_CLIP'),
          (t[(t.VIDEO_TEXTURE = 71)] = 'VIDEO_TEXTURE'),
          (t[(t.AUDIO_CLIP = 200)] = 'AUDIO_CLIP'),
          (t[(t.AUDIO_SOURCE = 201)] = 'AUDIO_SOURCE'),
          (t[(t.AUDIO_STREAM = 202)] = 'AUDIO_STREAM'),
          (t[(t.GIZMOS = 203)] = 'GIZMOS'),
          (t[(t.SMART_ITEM = 204)] = 'SMART_ITEM'),
          (t[(t.AVATAR_MODIFIER_AREA = 205)] = 'AVATAR_MODIFIER_AREA')
      })((a = e.CLASS_ID || (e.CLASS_ID = {}))),
        (function(t) {
          ;(t.HIDE_AVATARS = 'HIDE_AVATARS'), (t.DISABLE_PASSPORTS = 'DISABLE_PASSPORTS')
        })(e.AvatarModifiers || (e.AvatarModifiers = {}))
      var d = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.area = e.area), (n.modifiers = e.modifiers), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'area', void 0),
          s([p.ObservableComponent.field], e.prototype, 'modifiers', void 0),
          (e = s([p.Component('engine.avatarModifierArea', a.AVATAR_MODIFIER_AREA)], e))
        )
      })(p.ObservableComponent)
      e.AvatarModifierArea = d
      var f = (function(t) {
        function e(e) {
          void 0 === e && (e = {})
          var n = t.call(this) || this
          return (
            (n.position = e.position || u.Vector3.Zero()),
            (n.rotation = e.rotation || u.Quaternion.Identity),
            (n.scale = e.scale || new u.Vector3(1, 1, 1)),
            n
          )
        }
        return (
          r(e, t),
          Object.defineProperty(e.prototype, 'eulerAngles', {
            get: function() {
              return this.rotation.eulerAngles
            },
            enumerable: !1,
            configurable: !0
          }),
          (e.prototype.lookAt = function(t, e) {
            void 0 === e && (e = u.MathTmp.staticUp)
            var n = new u.Matrix()
            return u.Matrix.LookAtLHToRef(this.position, t, e, n), n.invert(), u.Quaternion.FromRotationMatrixToRef(n, this.rotation), this
          }),
          (e.prototype.rotate = function(t, e) {
            return this.rotation.multiplyInPlace(this.rotation.angleAxis(e, t)), this
          }),
          (e.prototype.translate = function(t) {
            return this.position.addInPlace(t), this
          }),
          s([p.ObservableComponent.field], e.prototype, 'position', void 0),
          s([p.ObservableComponent.field], e.prototype, 'rotation', void 0),
          s([p.ObservableComponent.field], e.prototype, 'scale', void 0),
          (e = s([p.Component('engine.transform', a.TRANSFORM)], e))
        )
      })(p.ObservableComponent)
      e.Transform = f
      var y = (function(t) {
        function e(e, n, o) {
          void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === o && (o = !0)
          var r = t.call(this) || this
          return (r.x = !0), (r.y = !0), (r.z = !0), (r.x = e), (r.y = n), (r.z = o), r
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'x', void 0),
          s([p.ObservableComponent.field], e.prototype, 'y', void 0),
          s([p.ObservableComponent.field], e.prototype, 'z', void 0),
          (e = s([p.Component('engine.billboard', a.BILLBOARD)], e))
        )
      })(p.ObservableComponent)
      e.Billboard = y
      var v = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.withCollisions = !0), (e.isPointerBlocker = !0), (e.visible = !0), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'withCollisions', void 0),
          s([p.ObservableComponent.field], e.prototype, 'isPointerBlocker', void 0),
          s([p.ObservableComponent.field], e.prototype, 'visible', void 0),
          e
        )
      })(p.ObservableComponent)
      e.Shape = v
      var m = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.DisposableComponent('engine.shape', a.BOX_SHAPE)], e))
      })(v)
      e.BoxShape = m
      var b = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.DisposableComponent('engine.shape', a.SPHERE_SHAPE)], e))
      })(v)
      e.SphereShape = b
      var g = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'segments', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CIRCLE_SHAPE)], e))
        )
      })(v)
      e.CircleShape = g
      var _ = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.width = 1), (e.height = 1), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'width', void 0),
          s([p.ObservableComponent.field], e.prototype, 'height', void 0),
          s([p.ObservableComponent.field], e.prototype, 'uvs', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.PLANE_SHAPE)], e))
        )
      })(v)
      e.PlaneShape = _
      var C = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.radiusTop = 0),
            (e.radiusBottom = 1),
            (e.segmentsHeight = 1),
            (e.segmentsRadial = 36),
            (e.openEnded = !1),
            (e.radius = null),
            (e.arc = 360),
            e
          )
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'radiusTop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radiusBottom', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsHeight', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsRadial', void 0),
          s([p.ObservableComponent.field], e.prototype, 'openEnded', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radius', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CONE_SHAPE)], e))
        )
      })(v)
      e.ConeShape = C
      var O = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.radiusTop = 1),
            (e.radiusBottom = 1),
            (e.segmentsHeight = 1),
            (e.segmentsRadial = 36),
            (e.openEnded = !1),
            (e.radius = null),
            (e.arc = 360),
            e
          )
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'radiusTop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radiusBottom', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsHeight', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsRadial', void 0),
          s([p.ObservableComponent.field], e.prototype, 'openEnded', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radius', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CYLINDER_SHAPE)], e))
        )
      })(v)
      e.CylinderShape = O
      var x,
        w = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (n.src = e), n
          }
          return r(e, t), s([v.readonly], e.prototype, 'src', void 0), (e = s([p.DisposableComponent('engine.shape', a.GLTF_SHAPE)], e))
        })(v)
      ;(e.GLTFShape = w),
        (function(t) {
          ;(t[(t.Classic = 0)] = 'Classic'),
            (t[(t.Baroque_Ornament = 1)] = 'Baroque_Ornament'),
            (t[(t.Diamond_Ornament = 2)] = 'Diamond_Ornament'),
            (t[(t.Minimal_Wide = 3)] = 'Minimal_Wide'),
            (t[(t.Minimal_Grey = 4)] = 'Minimal_Grey'),
            (t[(t.Blocky = 5)] = 'Blocky'),
            (t[(t.Gold_Edges = 6)] = 'Gold_Edges'),
            (t[(t.Gold_Carved = 7)] = 'Gold_Carved'),
            (t[(t.Gold_Wide = 8)] = 'Gold_Wide'),
            (t[(t.Gold_Rounded = 9)] = 'Gold_Rounded'),
            (t[(t.Metal_Medium = 10)] = 'Metal_Medium'),
            (t[(t.Metal_Wide = 11)] = 'Metal_Wide'),
            (t[(t.Metal_Slim = 12)] = 'Metal_Slim'),
            (t[(t.Metal_Rounded = 13)] = 'Metal_Rounded'),
            (t[(t.Pins = 14)] = 'Pins'),
            (t[(t.Minimal_Black = 15)] = 'Minimal_Black'),
            (t[(t.Minimal_White = 16)] = 'Minimal_White'),
            (t[(t.Tape = 17)] = 'Tape'),
            (t[(t.Wood_Slim = 18)] = 'Wood_Slim'),
            (t[(t.Wood_Wide = 19)] = 'Wood_Wide'),
            (t[(t.Wood_Twigs = 20)] = 'Wood_Twigs'),
            (t[(t.Canvas = 21)] = 'Canvas')
        })((x = e.PictureFrameStyle || (e.PictureFrameStyle = {})))
      var T = (function(t) {
        function e(e, n) {
          void 0 === n && (n = {})
          var o = t.call(this) || this
          o.src = e
          var r = new u.Color3(0.6404918, 0.611472, 0.8584906),
            i = x.Classic
          return (
            n instanceof u.Color3 ? (r = n) : null != n && (n.color && (r = n.color), n.style && (i = n.style)),
            (o.color = r),
            (o.style = i),
            o
          )
        }
        return (
          r(e, t),
          s([v.readonly], e.prototype, 'src', void 0),
          s([v.readonly], e.prototype, 'style', void 0),
          s([p.ObservableComponent.field], e.prototype, 'color', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.NFT_SHAPE)], e))
        )
      })(v)
      e.NFTShape = T
      var R = (function(t) {
        function e(e, n) {
          var o = t.call(this) || this
          if (((o.src = e), n))
            for (var r in n) {
              o[r] = n[r]
            }
          return o
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'samplingMode', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'wrap', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'hasAlpha', void 0),
          (e = s([p.DisposableComponent('engine.texture', a.TEXTURE)], e))
        )
      })(p.ObservableComponent)
      e.Texture = R
      var A = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.states = []), e
        }
        return (
          r(e, t),
          (e.prototype.addClip = function(t) {
            var e = this
            return (
              this.states.push(t),
              t.onChange(function() {
                e.dirty = !0
              }),
              this
            )
          }),
          (e.prototype.getClip = function(t) {
            for (var e = 0; e < this.states.length; e++) {
              var n = this.states[e]
              if (n.clip === t) return n
            }
            var o = new l.AnimationState(t)
            return this.addClip(o), o
          }),
          s([p.ObservableComponent.readonly], e.prototype, 'states', void 0),
          (e = s([p.Component('engine.animator', a.ANIMATION)], e))
        )
      })(v)
      e.Animator = A
      var E = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.src = e), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.OBJ_SHAPE)], e))
        )
      })(v)
      e.OBJShape = E
      var S = (function(t) {
        function e(e) {
          void 0 === e && (e = '')
          var n = t.call(this) || this
          return (n.src = e), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          (e = s([p.DisposableComponent('engine.font', a.FONT)], e))
        )
      })(p.ObservableComponent)
      ;(e.Font = S),
        (function(t) {
          ;(t.SanFrancisco = 'builtin:SF-UI-Text-Regular SDF'),
            (t.SanFrancisco_Heavy = 'builtin:SF-UI-Text-Heavy SDF'),
            (t.SanFrancisco_Semibold = 'builtin:SF-UI-Text-Semibold SDF'),
            (t.LiberationSans = 'builtin:LiberationSans SDF')
        })(e.Fonts || (e.Fonts = {}))
      var P,
        I = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.outlineWidth = 0),
              (n.outlineColor = new u.Color3(1, 1, 1)),
              (n.color = new u.Color3(1, 1, 1)),
              (n.fontSize = 10),
              (n.fontWeight = 'normal'),
              (n.opacity = 1),
              (n.value = ''),
              (n.lineSpacing = '0px'),
              (n.lineCount = 0),
              (n.resizeToFit = !1),
              (n.textWrapping = !1),
              (n.shadowBlur = 0),
              (n.shadowOffsetX = 0),
              (n.shadowOffsetY = 0),
              (n.shadowColor = new u.Color3(1, 1, 1)),
              (n.zIndex = 0),
              (n.hTextAlign = 'center'),
              (n.vTextAlign = 'center'),
              (n.width = 1),
              (n.height = 1),
              (n.paddingTop = 0),
              (n.paddingRight = 0),
              (n.paddingBottom = 0),
              (n.paddingLeft = 0),
              (n.isPickable = !1),
              (n.billboard = !1),
              (n.visible = !0),
              e && (n.value = e),
              n
            )
          }
          return (
            r(e, t),
            s([p.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
            s([p.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
            s([p.ObservableComponent.field], e.prototype, 'color', void 0),
            s([p.ObservableComponent.field], e.prototype, 'fontSize', void 0),
            s([p.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
            s([p.ObservableComponent.component], e.prototype, 'font', void 0),
            s([p.ObservableComponent.field], e.prototype, 'opacity', void 0),
            s([p.ObservableComponent.field], e.prototype, 'value', void 0),
            s([p.ObservableComponent.field], e.prototype, 'lineSpacing', void 0),
            s([p.ObservableComponent.field], e.prototype, 'lineCount', void 0),
            s([p.ObservableComponent.field], e.prototype, 'resizeToFit', void 0),
            s([p.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
            s([p.ObservableComponent.field], e.prototype, 'zIndex', void 0),
            s([p.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
            s([p.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
            s([p.ObservableComponent.field], e.prototype, 'width', void 0),
            s([p.ObservableComponent.field], e.prototype, 'height', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
            s([p.ObservableComponent.field], e.prototype, 'isPickable', void 0),
            s([p.ObservableComponent.field], e.prototype, 'billboard', void 0),
            s([p.ObservableComponent.field], e.prototype, 'visible', void 0),
            (e = s([p.Component('engine.text', a.TEXT_SHAPE)], e))
          )
        })(p.ObservableComponent)
      ;(e.TextShape = I),
        (function(t) {
          ;(t[(t.OPAQUE = 0)] = 'OPAQUE'),
            (t[(t.ALPHA_TEST = 1)] = 'ALPHA_TEST'),
            (t[(t.ALPHA_BLEND = 2)] = 'ALPHA_BLEND'),
            (t[(t.ALPHA_TEST_AND_BLEND = 3)] = 'ALPHA_TEST_AND_BLEND'),
            (t[(t.AUTO = 4)] = 'AUTO')
        })((P = e.TransparencyMode || (e.TransparencyMode = {})))
      var z = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.alphaTest = 0.5), (e.castShadows = !0), (e.transparencyMode = P.AUTO), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'alphaTest', void 0),
          s([p.ObservableComponent.field], e.prototype, 'albedoColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'emissiveColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'metallic', void 0),
          s([p.ObservableComponent.field], e.prototype, 'roughness', void 0),
          s([p.ObservableComponent.field], e.prototype, 'ambientColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'reflectionColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'reflectivityColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'directIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'microSurface', void 0),
          s([p.ObservableComponent.field], e.prototype, 'emissiveIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'environmentIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'specularIntensity', void 0),
          s([p.ObservableComponent.component], e.prototype, 'albedoTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'alphaTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'emissiveTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'bumpTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'refractionTexture', void 0),
          s([p.ObservableComponent.field], e.prototype, 'castShadows', void 0),
          s([p.ObservableComponent.field], e.prototype, 'transparencyMode', void 0),
          (e = s([p.DisposableComponent('engine.material', a.PBR_MATERIAL)], e))
        )
      })(p.ObservableComponent)
      e.Material = z
      var M = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.alphaTest = 0.5), (e.castShadows = !0), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.component], e.prototype, 'texture', void 0),
          s([p.ObservableComponent.field], e.prototype, 'alphaTest', void 0),
          s([p.ObservableComponent.field], e.prototype, 'castShadows', void 0),
          (e = s([p.DisposableComponent('engine.material', a.BASIC_MATERIAL)], e))
        )
      })(p.ObservableComponent)
      e.BasicMaterial = M
      var D = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          if (((n.uuid = c.newId('UUID')), !e || !('apply' in e) || !('call' in e))) throw new Error('Callback is not a function')
          return (n.callback = e), n
        }
        return (
          r(e, t),
          (e.uuidEvent = function(t, n) {
            if (delete t[n]) {
              var o = n + '_' + Math.random()
              ;(t[o] = void 0),
                Object.defineProperty(t, o, i(i({}, Object.getOwnPropertyDescriptor(t, o)), { enumerable: !1 })),
                Object.defineProperty(t, n.toString(), {
                  get: function() {
                    return this[o]
                  },
                  set: function(t) {
                    var r = this[o]
                    if (t) {
                      if (!(t instanceof e)) throw new Error('value is not an OnUUIDEvent')
                      this.data[n] = t.uuid
                    } else this.data[n] = null
                    if (((this[o] = t), t !== r)) {
                      this.dirty = !0
                      for (var i = 0; i < this.subscriptions.length; i++) this.subscriptions[i](n, t, r)
                    }
                  },
                  enumerable: !0
                })
            }
          }),
          (e.prototype.toJSON = function() {
            return { uuid: this.uuid, type: this.type }
          }),
          s([p.ObservableComponent.field], e.prototype, 'callback', void 0),
          e
        )
      })(p.ObservableComponent)
      e.OnUUIDEvent = D
      var F = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.button = h.ActionButton.ANY), (e.hoverText = 'Interact'), (e.distance = 10), (e.showFeedback = !0), e
        }
        return (
          r(e, t),
          (e.prototype.toJSON = function() {
            return {
              uuid: this.uuid,
              type: this.type,
              button: this.button,
              hoverText: this.hoverText,
              distance: this.distance,
              showFeedback: this.showFeedback
            }
          }),
          s([p.ObservableComponent.field], e.prototype, 'button', void 0),
          s([p.ObservableComponent.field], e.prototype, 'hoverText', void 0),
          s([p.ObservableComponent.field], e.prototype, 'distance', void 0),
          s([p.ObservableComponent.field], e.prototype, 'showFeedback', void 0),
          e
        )
      })(D)
      e.OnPointerUUIDEvent = F
      var U = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'onPointerLock'), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = s([p.Component('engine.onPointerLock', a.UUID_CALLBACK)], e))
        )
      })(D)
      e.OnPointerLock = U
      var L = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'onAnimationEnd'), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = s([p.Component('engine.onAnimationEnd', a.UUID_CALLBACK)], e))
        )
      })(D)
      e.OnAnimationEnd = L
      var N = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.Component('engine.smartItem', a.SMART_ITEM)], e))
      })(p.ObservableComponent)
      e.SmartItem = N
      var V = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.url = e), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'url', void 0),
          (e = s([p.DisposableComponent('engine.VideoClip', a.VIDEO_CLIP)], e))
        )
      })(p.ObservableComponent)
      e.VideoClip = V
      var j = (function(t) {
        function e(e, n) {
          var o = t.call(this) || this
          if (((o.volume = 1), (o.playbackRate = 1), (o.loop = !1), (o.seek = -1), (o.playing = !1), !(e instanceof V)))
            throw new Error('Trying to create VideoTexture(VideoClip) with an invalid VideoClip')
          if (((o.videoClipId = p.getComponentId(e)), n))
            for (var r in n) {
              o[r] = n[r]
            }
          return o
        }
        return (
          r(e, t),
          (e.prototype.play = function() {
            this.playing = !0
          }),
          (e.prototype.pause = function() {
            this.playing = !1
          }),
          (e.prototype.reset = function() {
            this.seekTime(0)
          }),
          (e.prototype.seekTime = function(t) {
            ;(this.seek = t), (this.dirty = !0), (this.data.nonce = Math.random())
          }),
          (e.prototype.toJSON = function() {
            if (this.seek < 0) return t.prototype.toJSON.call(this)
            var e = JSON.parse(JSON.stringify(t.prototype.toJSON.call(this)))
            return (this.seek = -1), e
          }),
          s([p.ObservableComponent.readonly], e.prototype, 'videoClipId', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'samplingMode', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'wrap', void 0),
          s([p.ObservableComponent.field], e.prototype, 'volume', void 0),
          s([p.ObservableComponent.field], e.prototype, 'playbackRate', void 0),
          s([p.ObservableComponent.field], e.prototype, 'loop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'seek', void 0),
          s([p.ObservableComponent.field], e.prototype, 'playing', void 0),
          (e = s([p.DisposableComponent('engine.VideoTexture', a.VIDEO_TEXTURE)], e))
        )
      })(p.ObservableComponent)
      e.VideoTexture = j
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function(t, e, n, o) {
                void 0 === o && (o = n),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function() {
                      return e[n]
                    }
                  })
              }
            : function(t, e, n, o) {
                void 0 === o && (o = n), (t[o] = e[n])
              }),
        r =
          (this && this.__exportStar) ||
          function(t, e) {
            for (var n in t) 'default' === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        r(n(2), e),
        r(n(9), e),
        r(n(22), e),
        r(n(23), e),
        r(n(36), e),
        r(n(37), e),
        r(n(38), e),
        r(n(24), e),
        r(n(39), e),
        r(n(40), e),
        r(n(11), e),
        r(n(41), e),
        r(n(42), e),
        r(n(25), e),
        r(n(10), e),
        r(n(6), e),
        r(n(43), e),
        r(n(15), e),
        r(n(3), e),
        r(n(21), e),
        r(n(5), e)
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Scalar = void 0)
      var o = (function() {
        function t() {}
        return (
          (t.WithinEpsilon = function(t, e, n) {
            void 0 === n && (n = 1401298e-51)
            var o = t - e
            return -n <= o && o <= n
          }),
          (t.ToHex = function(t) {
            var e = t.toString(16)
            return t <= 15 ? ('0' + e).toUpperCase() : e.toUpperCase()
          }),
          (t.Sign = function(t) {
            var e = +t
            return 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
          }),
          (t.Clamp = function(t, e, n) {
            return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(n, Math.max(e, t))
          }),
          (t.Log2 = function(t) {
            return Math.log(t) * Math.LOG2E
          }),
          (t.Repeat = function(t, e) {
            return t - Math.floor(t / e) * e
          }),
          (t.Normalize = function(t, e, n) {
            return (t - e) / (n - e)
          }),
          (t.Denormalize = function(t, e, n) {
            return t * (n - e) + e
          }),
          (t.DeltaAngle = function(e, n) {
            var o = t.Repeat(n - e, 360)
            return o > 180 && (o -= 360), o
          }),
          (t.PingPong = function(e, n) {
            var o = t.Repeat(e, 2 * n)
            return n - Math.abs(o - n)
          }),
          (t.SmoothStep = function(e, n, o) {
            var r = t.Clamp(o)
            return n * (r = -2 * r * r * r + 3 * r * r) + e * (1 - r)
          }),
          (t.MoveTowards = function(e, n, o) {
            return Math.abs(n - e) <= o ? n : e + t.Sign(n - e) * o
          }),
          (t.MoveTowardsAngle = function(e, n, o) {
            var r = t.DeltaAngle(e, n)
            return -o < r && r < o ? n : t.MoveTowards(e, e + r, o)
          }),
          (t.Lerp = function(t, e, n) {
            return t + (e - t) * n
          }),
          (t.LerpAngle = function(e, n, o) {
            var r = t.Repeat(n - e, 360)
            return r > 180 && (r -= 360), e + r * t.Clamp(o)
          }),
          (t.InverseLerp = function(e, n, o) {
            return e !== n ? t.Clamp((o - e) / (n - e)) : 0
          }),
          (t.Hermite = function(t, e, n, o, r) {
            var i = r * r,
              s = r * i
            return t * (2 * s - 3 * i + 1) + n * (-2 * s + 3 * i) + e * (s - 2 * i + r) + o * (s - i)
          }),
          (t.RandomRange = function(t, e) {
            return t === e ? t : Math.random() * (e - t) + t
          }),
          (t.RangeToPercent = function(t, e, n) {
            return (t - e) / (n - e)
          }),
          (t.PercentToRange = function(t, e, n) {
            return (n - e) * t + e
          }),
          (t.NormalizeRadians = function(e) {
            return e - t.TwoPi * Math.floor((e + Math.PI) / t.TwoPi)
          }),
          (t.TwoPi = 2 * Math.PI),
          t
        )
      })()
      e.Scalar = o
    },
    function(t, e, n) {
      'use strict'
      var o =
        (this && this.__decorate) ||
        function(t, e, n, o) {
          var r,
            i = arguments.length,
            s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
          else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
          return i > 3 && s && Object.defineProperty(e, n, s), s
        }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.ParentChanged = e.ComponentAdded = e.ComponentRemoved = void 0)
      var r = n(8),
        i = (function() {
          function t(t, e, n) {
            ;(this.entity = t), (this.componentName = e), (this.component = n)
          }
          return (t = o([r.EventConstructor()], t))
        })()
      e.ComponentRemoved = i
      var s = (function() {
        function t(t, e, n) {
          ;(this.entity = t), (this.componentName = e), (this.classId = n)
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.ComponentAdded = s
      var a = (function() {
        function t(t, e) {
          ;(this.entity = t), (this.parent = e)
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.ParentChanged = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.EventConstructor = e.EventManager = void 0)
      var o = n(1),
        r = []
      function i(t) {
        if (!('__event_name__' in t) || 'string' != typeof t.__event_name__) throw new Error('The EventConstructor is not registered')
        return t.__event_name__
      }
      var s = (function() {
        function t() {
          this.listeners = {}
        }
        return (
          (t.prototype.addListener = function(t, e, n) {
            if (!t || 'function' != typeof t) throw new Error('Invalid EventConstructor')
            var o = i(t),
              r = this.listeners[o]
            r || (r = this.listeners[o] = [])
            for (var s = 0; s < r.length; s++) {
              if (r[s].listener === e) throw new Error('The provided listener is already registered')
            }
            return r.push({ listener: e, fn: n }), this
          }),
          (t.prototype.removeListener = function(t, e) {
            if (!e || 'function' != typeof e) throw new Error('Invalid EventConstructor')
            var n = i(e),
              o = this.listeners[n]
            if (!o) return !1
            for (var r = 0; r < o.length; r++) {
              if (o[r].listener === t) return o.splice(r, 1), !0
            }
            return !1
          }),
          (t.prototype.fireEvent = function(t) {
            var e = i(t.constructor),
              n = this.listeners[e]
            if (n)
              for (var r = 0; r < n.length; r++)
                try {
                  var s = n[r]
                  s.fn.call(s.listener, t)
                } catch (t) {
                  o.error(t)
                }
            return this
          }),
          t
        )
      })()
      ;(e.EventManager = s),
        (e.EventConstructor = function() {
          var t = o.newId('EV')
          if (-1 !== r.indexOf(t)) throw new Error('The event name ' + t + ' is already taken')
          return (
            r.push(t),
            function(e) {
              return (e.__event_name__ = t), e
            }
          )
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.MathTmp = void 0)
      var o = n(1),
        r = n(3),
        i = n(10),
        s = n(11)
      e.MathTmp = {
        Vector3: o.buildArray(6, r.Vector3.Zero),
        Matrix: o.buildArray(2, s.Matrix.Identity),
        Quaternion: o.buildArray(3, i.Quaternion.Zero),
        staticUp: r.Vector3.Up(),
        tmpMatrix: s.Matrix.Zero()
      }
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Quaternion = void 0)
      var o = n(11),
        r = n(3),
        i = n(9),
        s = n(2),
        a = (function() {
          function t(t, e, n, o) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = 1),
              (this.x = t),
              (this.y = e),
              (this.z = n),
              (this.w = o)
          }
          return (
            (t.FromRotationMatrix = function(e) {
              var n = new t()
              return t.FromRotationMatrixToRef(e, n), n
            }),
            (t.FromRotationMatrixToRef = function(t, e) {
              var n,
                o = t.m,
                r = o[0],
                i = o[4],
                s = o[8],
                a = o[1],
                p = o[5],
                u = o[9],
                l = o[2],
                c = o[6],
                h = o[10],
                d = r + p + h
              d > 0
                ? ((n = 0.5 / Math.sqrt(d + 1)), (e.w = 0.25 / n), (e.x = (c - u) * n), (e.y = (s - l) * n), (e.z = (a - i) * n))
                : r > p && r > h
                ? ((n = 2 * Math.sqrt(1 + r - p - h)), (e.w = (c - u) / n), (e.x = 0.25 * n), (e.y = (i + a) / n), (e.z = (s + l) / n))
                : p > h
                ? ((n = 2 * Math.sqrt(1 + p - r - h)), (e.w = (s - l) / n), (e.x = (i + a) / n), (e.y = 0.25 * n), (e.z = (u + c) / n))
                : ((n = 2 * Math.sqrt(1 + h - r - p)), (e.w = (a - i) / n), (e.x = (s + l) / n), (e.y = (u + c) / n), (e.z = 0.25 * n))
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w
            }),
            (t.AreClose = function(e, n) {
              return t.Dot(e, n) >= 0
            }),
            (t.Zero = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.Inverse = function(e) {
              return new t(-e.x, -e.y, -e.z, e.w)
            }),
            (t.IsIdentity = function(t) {
              return t && 0 === t.x && 0 === t.y && 0 === t.z && 1 === t.w
            }),
            (t.RotationAxis = function(e, n) {
              var o = n * s.DEG2RAD
              return t.RotationAxisToRef(e, o, new t())
            }),
            (t.RotationAxisToRef = function(t, e, n) {
              var o = e * s.DEG2RAD,
                r = Math.sin(o / 2)
              return t.normalize(), (n.w = Math.cos(o / 2)), (n.x = t.x * r), (n.y = t.y * r), (n.z = t.z * r), n
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromEulerAnglesRef = function(e, n, o, r) {
              return t.RotationYawPitchRollToRef(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD, r)
            }),
            (t.RotationYawPitchRoll = function(e, n, o) {
              var r = new t()
              return t.RotationYawPitchRollToRef(e, n, o, r), r
            }),
            (t.RotationYawPitchRollToRef = function(t, e, n, o) {
              var r = 0.5 * n,
                i = 0.5 * e,
                s = 0.5 * t,
                a = Math.cos(i),
                p = Math.cos(s),
                u = Math.cos(r),
                l = Math.sin(i),
                c = Math.sin(s),
                h = Math.sin(r)
              ;(o.x = l * p * u + a * c * h), (o.y = a * c * u - l * p * h), (o.z = a * p * h + l * c * u), (o.w = a * p * u - l * c * h)
            }),
            (t.RotationAlphaBetaGamma = function(e, n, o) {
              var r = new t()
              return t.RotationAlphaBetaGammaToRef(e, n, o, r), r
            }),
            (t.RotationAlphaBetaGammaToRef = function(t, e, n, o) {
              var r = 0.5 * (n + t),
                i = 0.5 * (n - t),
                s = 0.5 * e
              ;(o.x = Math.cos(i) * Math.sin(s)),
                (o.y = Math.sin(i) * Math.sin(s)),
                (o.z = Math.sin(r) * Math.cos(s)),
                (o.w = Math.cos(r) * Math.cos(s))
            }),
            (t.RotationQuaternionFromAxis = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return t.RotationQuaternionFromAxisToRef(e, n, o, r), r
            }),
            (t.RotationQuaternionFromAxisToRef = function(e, n, r, s) {
              var a = i.MathTmp.Matrix[0]
              o.Matrix.FromXYZAxesToRef(e.normalize(), n.normalize(), r.normalize(), a), t.FromRotationMatrixToRef(a, s)
            }),
            (t.Slerp = function(e, n, o) {
              var r = t.Identity
              return t.SlerpToRef(e, n, o, r), r
            }),
            (t.SlerpToRef = function(t, e, n, o) {
              var r,
                i,
                s = t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w,
                a = !1
              if ((s < 0 && ((a = !0), (s = -s)), s > 0.999999)) (i = 1 - n), (r = a ? -n : n)
              else {
                var p = Math.acos(s),
                  u = 1 / Math.sin(p)
                ;(i = Math.sin((1 - n) * p) * u), (r = a ? -Math.sin(n * p) * u : Math.sin(n * p) * u)
              }
              ;(o.x = i * t.x + r * e.x), (o.y = i * t.y + r * e.y), (o.z = i * t.z + r * e.z), (o.w = i * t.w + r * e.w)
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(
                e.x * p + o.x * u + n.x * l + r.x * c,
                e.y * p + o.y * u + n.y * l + r.y * c,
                e.z * p + o.z * u + n.z * l + r.z * c,
                e.w * p + o.w * u + n.w * l + r.w * c
              )
            }),
            Object.defineProperty(t, 'Identity', {
              get: function() {
                return new t(0, 0, 0, 1)
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.Angle = function(e, n) {
              var o = t.Dot(e, n)
              return 2 * Math.acos(Math.min(Math.abs(o), 1)) * s.RAD2DEG
            }),
            (t.Euler = function(e, n, o) {
              return t.RotationYawPitchRoll(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD)
            }),
            (t.LookRotation = function(e, n) {
              void 0 === n && (n = i.MathTmp.staticUp)
              var o = r.Vector3.Normalize(e),
                s = r.Vector3.Normalize(r.Vector3.Cross(n, o)),
                a = r.Vector3.Cross(o, s),
                p = s.x,
                u = s.y,
                l = s.z,
                c = a.x,
                h = a.y,
                d = a.z,
                f = o.x,
                y = o.y,
                v = o.z,
                m = p + h + v,
                b = new t()
              if (m > 0) {
                var g = Math.sqrt(m + 1)
                return (b.w = 0.5 * g), (g = 0.5 / g), (b.x = (d - y) * g), (b.y = (f - l) * g), (b.z = (u - c) * g), b
              }
              if (p >= h && p >= v) {
                var _ = Math.sqrt(1 + p - h - v),
                  C = 0.5 / _
                return (b.x = 0.5 * _), (b.y = (u + c) * C), (b.z = (l + f) * C), (b.w = (d - y) * C), b
              }
              if (h > v) {
                var O = Math.sqrt(1 + h - p - v),
                  x = 0.5 / O
                return (b.x = (c + u) * x), (b.y = 0.5 * O), (b.z = (y + d) * x), (b.w = (f - l) * x), b
              }
              var w = Math.sqrt(1 + v - p - h),
                T = 0.5 / w
              return (b.x = (f + l) * T), (b.y = (y + d) * T), (b.z = 0.5 * w), (b.w = (u - c) * T), b
            }),
            (t.RotateTowards = function(e, n, o) {
              var r = t.Angle(e, n)
              if (0 === r) return n
              var i = Math.min(1, o / r)
              return t.Slerp(e, n, i)
            }),
            (t.FromToRotation = function(e, n) {
              var o = new t(),
                i = e.normalize(),
                a = n.normalize(),
                p = r.Vector3.Dot(i, a)
              if (p > -1 + s.Epsilon) {
                var u = Math.sqrt(2 * (1 + p)),
                  l = 1 / u,
                  c = r.Vector3.Cross(i, a).scaleInPlace(l)
                o.set(c.x, c.y, c.z, 0.5 * u)
              } else {
                if (p > 1 - s.Epsilon) return new t(0, 0, 0, 1)
                var h = r.Vector3.Cross(r.Vector3.Right(), i)
                h.lengthSquared() < s.Epsilon && (h = r.Vector3.Cross(r.Vector3.Forward(), i)), o.set(h.x, h.y, h.z, 0)
              }
              return o.normalize()
            }),
            Object.defineProperty(t.prototype, 'normalized', {
              get: function() {
                return this.normalize()
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.setFromToRotation = function(e, n, r) {
              void 0 === r && (r = i.MathTmp.staticUp),
                (i.MathTmp.tmpMatrix = o.Matrix.Zero()),
                o.Matrix.LookAtLHToRef(e, n, r, i.MathTmp.tmpMatrix),
                i.MathTmp.tmpMatrix.invert(),
                t.FromRotationMatrixToRef(i.MathTmp.tmpMatrix, this)
            }),
            Object.defineProperty(t.prototype, 'eulerAngles', {
              get: function() {
                var t = new r.Vector3(),
                  e = new o.Matrix()
                this.toRotationMatrix(e)
                var n = o.Matrix.GetAsMatrix3x3(e)
                return (
                  (t.y = s.RAD2DEG * Math.asin(Math.max(-1, Math.min(1, n[6])))),
                  Math.abs(n[6]) < 0.99999
                    ? ((t.x = s.RAD2DEG * Math.atan2(-n[7], n[8])), (t.z = s.RAD2DEG * Math.atan2(-n[3], n[0])))
                    : ((t.x = s.RAD2DEG * Math.atan2(n[5], n[4])), (t.z = 0)),
                  t
                )
              },
              set: function(t) {
                this.setEuler(t.x, t.y, t.z)
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.toString = function() {
              return '(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')'
            }),
            Object.defineProperty(t.prototype, 'length', {
              get: function() {
                return Math.sqrt(this.lengthSquared)
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'lengthSquared', {
              get: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.getClassName = function() {
              return 'Quaternion'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))) ^ (this.w || 0))
            }),
            (t.prototype.asArray = function() {
              return [this.x, this.y, this.z, this.w]
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z, this.w)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.x = t), (this.y = e), (this.z = n), (this.w = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.setEuler = function(e, n, o) {
              return t.RotationYawPitchRollToRef(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD, this), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z, this.w + e.w)
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z, this.w - e.w)
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e, this.w * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), (e.z = this.z * t), (e.w = this.w * t), this
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), (e.z += this.z * t), (e.w += this.w * t), this
            }),
            (t.prototype.multiply = function(e) {
              var n = new t(0, 0, 0, 1)
              return this.multiplyToRef(e, n), n
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              var n = this.x * t.w + this.y * t.z - this.z * t.y + this.w * t.x,
                o = -this.x * t.z + this.y * t.w + this.z * t.x + this.w * t.y,
                r = this.x * t.y - this.y * t.x + this.z * t.w + this.w * t.z,
                i = -this.x * t.x - this.y * t.y - this.z * t.z + this.w * t.w
              return e.copyFromFloats(n, o, r, i), this
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return this.multiplyToRef(t, this), this
            }),
            (t.prototype.conjugateToRef = function(t) {
              return t.copyFromFloats(-this.x, -this.y, -this.z, this.w), this
            }),
            (t.prototype.conjugateInPlace = function() {
              return (this.x *= -1), (this.y *= -1), (this.z *= -1), this
            }),
            (t.prototype.conjugate = function() {
              return new t(-this.x, -this.y, -this.z, this.w)
            }),
            (t.prototype.normalize = function() {
              var t = 1 / this.length
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.angleAxis = function(e, n) {
              if (0 === n.lengthSquared()) return t.Identity
              var o = t.Identity,
                r = e * s.DEG2RAD
              r *= 0.5
              var i = n.normalize()
              return (i = n.scaleInPlace(Math.sin(r))), (o.x = i.x), (o.y = i.y), (o.z = i.z), (o.w = Math.cos(r)), o.normalize()
            }),
            (t.prototype.toRotationMatrix = function(t) {
              return o.Matrix.FromQuaternionToRef(this, t), this
            }),
            (t.prototype.fromRotationMatrix = function(e) {
              return t.FromRotationMatrixToRef(e, this), this
            }),
            t
          )
        })()
      e.Quaternion = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Matrix = void 0)
      var o = n(3),
        r = n(10),
        i = n(9),
        s = n(21),
        a = (function() {
          function t() {
            ;(this._isIdentity = !1),
              (this._isIdentityDirty = !0),
              (this._isIdentity3x2 = !0),
              (this._isIdentity3x2Dirty = !0),
              (this._m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              this._updateIdentityStatus(!1)
          }
          return (
            Object.defineProperty(t.prototype, 'm', {
              get: function() {
                return this._m
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t, 'IdentityReadOnly', {
              get: function() {
                return t._identityReadOnly
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.FromArray = function(e, n) {
              void 0 === n && (n = 0)
              var o = new t()
              return t.FromArrayToRef(e, n, o), o
            }),
            (t.FromArrayToRef = function(t, e, n) {
              for (var o = 0; o < 16; o++) n._m[o] = t[o + e]
              n._markAsUpdated()
            }),
            (t.FromFloatArrayToRefScaled = function(t, e, n, o) {
              for (var r = 0; r < 16; r++) o._m[r] = t[r + e] * n
              o._markAsUpdated()
            }),
            (t.FromValuesToRef = function(t, e, n, o, r, i, s, a, p, u, l, c, h, d, f, y, v) {
              var m = v._m
              ;(m[0] = t),
                (m[1] = e),
                (m[2] = n),
                (m[3] = o),
                (m[4] = r),
                (m[5] = i),
                (m[6] = s),
                (m[7] = a),
                (m[8] = p),
                (m[9] = u),
                (m[10] = l),
                (m[11] = c),
                (m[12] = h),
                (m[13] = d),
                (m[14] = f),
                (m[15] = y),
                v._markAsUpdated()
            }),
            (t.FromValues = function(e, n, o, r, i, s, a, p, u, l, c, h, d, f, y, v) {
              var m = new t(),
                b = m._m
              return (
                (b[0] = e),
                (b[1] = n),
                (b[2] = o),
                (b[3] = r),
                (b[4] = i),
                (b[5] = s),
                (b[6] = a),
                (b[7] = p),
                (b[8] = u),
                (b[9] = l),
                (b[10] = c),
                (b[11] = h),
                (b[12] = d),
                (b[13] = f),
                (b[14] = y),
                (b[15] = v),
                m._markAsUpdated(),
                m
              )
            }),
            (t.Compose = function(e, n, o) {
              var r = new t()
              return t.ComposeToRef(e, n, o, r), r
            }),
            (t.ComposeToRef = function(e, n, o, r) {
              t.ScalingToRef(e.x, e.y, e.z, i.MathTmp.Matrix[1]),
                n.toRotationMatrix(i.MathTmp.Matrix[0]),
                i.MathTmp.Matrix[1].multiplyToRef(i.MathTmp.Matrix[0], r),
                r.setTranslation(o)
            }),
            (t.Identity = function() {
              var e = t.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              return e._updateIdentityStatus(!0), e
            }),
            (t.IdentityToRef = function(e) {
              t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, e), e._updateIdentityStatus(!0)
            }),
            (t.Zero = function() {
              var e = t.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
              return e._updateIdentityStatus(!1), e
            }),
            (t.RotationX = function(e) {
              var n = new t()
              return t.RotationXToRef(e, n), n
            }),
            (t.Invert = function(e) {
              var n = new t()
              return e.invertToRef(n), n
            }),
            (t.RotationXToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(1, 0, 0, 0, 0, r, o, 0, 0, -o, r, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationY = function(e) {
              var n = new t()
              return t.RotationYToRef(e, n), n
            }),
            (t.RotationYToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(r, 0, -o, 0, 0, 1, 0, 0, o, 0, r, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationZ = function(e) {
              var n = new t()
              return t.RotationZToRef(e, n), n
            }),
            (t.RotationZToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(r, o, 0, 0, -o, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationAxis = function(e, n) {
              var o = new t()
              return t.RotationAxisToRef(e, n, o), o
            }),
            (t.RotationAxisToRef = function(t, e, n) {
              var o = Math.sin(-e),
                r = Math.cos(-e),
                i = 1 - r
              t.normalize()
              var s = n._m
              ;(s[0] = t.x * t.x * i + r),
                (s[1] = t.x * t.y * i - t.z * o),
                (s[2] = t.x * t.z * i + t.y * o),
                (s[3] = 0),
                (s[4] = t.y * t.x * i + t.z * o),
                (s[5] = t.y * t.y * i + r),
                (s[6] = t.y * t.z * i - t.x * o),
                (s[7] = 0),
                (s[8] = t.z * t.x * i - t.y * o),
                (s[9] = t.z * t.y * i + t.x * o),
                (s[10] = t.z * t.z * i + r),
                (s[11] = 0),
                (s[12] = 0),
                (s[13] = 0),
                (s[14] = 0),
                (s[15] = 1),
                n._markAsUpdated()
            }),
            (t.RotationYawPitchRoll = function(e, n, o) {
              var r = new t()
              return t.RotationYawPitchRollToRef(e, n, o, r), r
            }),
            (t.RotationYawPitchRollToRef = function(t, e, n, o) {
              r.Quaternion.RotationYawPitchRollToRef(t, e, n, i.MathTmp.Quaternion[0]), i.MathTmp.Quaternion[0].toRotationMatrix(o)
            }),
            (t.Scaling = function(e, n, o) {
              var r = new t()
              return t.ScalingToRef(e, n, o, r), r
            }),
            (t.ScalingToRef = function(e, n, o, r) {
              t.FromValuesToRef(e, 0, 0, 0, 0, n, 0, 0, 0, 0, o, 0, 0, 0, 0, 1, r), r._updateIdentityStatus(1 === e && 1 === n && 1 === o)
            }),
            (t.Translation = function(e, n, o) {
              var r = new t()
              return t.TranslationToRef(e, n, o, r), r
            }),
            (t.TranslationToRef = function(e, n, o, r) {
              t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, n, o, 1, r), r._updateIdentityStatus(0 === e && 0 === n && 0 === o)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t()
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              for (var r = 0; r < 16; r++) o._m[r] = t._m[r] * (1 - n) + e._m[r] * n
              o._markAsUpdated()
            }),
            (t.DecomposeLerp = function(e, n, o) {
              var r = new t()
              return t.DecomposeLerpToRef(e, n, o, r), r
            }),
            (t.DecomposeLerpToRef = function(e, n, s, a) {
              var p = i.MathTmp.Vector3[0],
                u = i.MathTmp.Quaternion[0],
                l = i.MathTmp.Vector3[1]
              e.decompose(p, u, l)
              var c = i.MathTmp.Vector3[2],
                h = i.MathTmp.Quaternion[1],
                d = i.MathTmp.Vector3[3]
              n.decompose(c, h, d)
              var f = i.MathTmp.Vector3[4]
              o.Vector3.LerpToRef(p, c, s, f)
              var y = i.MathTmp.Quaternion[2]
              r.Quaternion.SlerpToRef(u, h, s, y)
              var v = i.MathTmp.Vector3[5]
              o.Vector3.LerpToRef(l, d, s, v), t.ComposeToRef(f, y, v, a)
            }),
            (t.LookAtLH = function(e, n, o) {
              var r = new t()
              return t.LookAtLHToRef(e, n, o, r), r
            }),
            (t.LookAtLHToRef = function(e, n, r, s) {
              var a = i.MathTmp.Vector3[0],
                p = i.MathTmp.Vector3[1],
                u = i.MathTmp.Vector3[2]
              n.subtractToRef(e, u), u.normalize(), o.Vector3.CrossToRef(r, u, a)
              var l = a.lengthSquared()
              0 === l ? (a.x = 1) : a.normalizeFromLength(Math.sqrt(l)), o.Vector3.CrossToRef(u, a, p), p.normalize()
              var c = -o.Vector3.Dot(a, e),
                h = -o.Vector3.Dot(p, e),
                d = -o.Vector3.Dot(u, e)
              t.FromValuesToRef(a.x, p.x, u.x, 0, a.y, p.y, u.y, 0, a.z, p.z, u.z, 0, c, h, d, 1, s)
            }),
            (t.LookAtRH = function(e, n, o) {
              var r = new t()
              return t.LookAtRHToRef(e, n, o, r), r
            }),
            (t.LookAtRHToRef = function(e, n, r, s) {
              var a = i.MathTmp.Vector3[0],
                p = i.MathTmp.Vector3[1],
                u = i.MathTmp.Vector3[2]
              e.subtractToRef(n, u), u.normalize(), o.Vector3.CrossToRef(r, u, a)
              var l = a.lengthSquared()
              0 === l ? (a.x = 1) : a.normalizeFromLength(Math.sqrt(l)), o.Vector3.CrossToRef(u, a, p), p.normalize()
              var c = -o.Vector3.Dot(a, e),
                h = -o.Vector3.Dot(p, e),
                d = -o.Vector3.Dot(u, e)
              t.FromValuesToRef(a.x, p.x, u.x, 0, a.y, p.y, u.y, 0, a.z, p.z, u.z, 0, c, h, d, 1, s)
            }),
            (t.OrthoLH = function(e, n, o, r) {
              var i = new t()
              return t.OrthoLHToRef(e, n, o, r, i), i
            }),
            (t.OrthoLHToRef = function(e, n, o, r, i) {
              var s = 2 / e,
                a = 2 / n,
                p = 2 / (r - o),
                u = -(r + o) / (r - o)
              t.FromValuesToRef(s, 0, 0, 0, 0, a, 0, 0, 0, 0, p, 0, 0, 0, u, 1, i),
                i._updateIdentityStatus(1 === s && 1 === a && 1 === p && 0 === u)
            }),
            (t.OrthoOffCenterLH = function(e, n, o, r, i, s) {
              var a = new t()
              return t.OrthoOffCenterLHToRef(e, n, o, r, i, s, a), a
            }),
            (t.OrthoOffCenterLHToRef = function(e, n, o, r, i, s, a) {
              var p = 2 / (n - e),
                u = 2 / (r - o),
                l = 2 / (s - i),
                c = -(s + i) / (s - i),
                h = (e + n) / (e - n),
                d = (r + o) / (o - r)
              t.FromValuesToRef(p, 0, 0, 0, 0, u, 0, 0, 0, 0, l, 0, h, d, c, 1, a), a._markAsUpdated()
            }),
            (t.OrthoOffCenterRH = function(e, n, o, r, i, s) {
              var a = new t()
              return t.OrthoOffCenterRHToRef(e, n, o, r, i, s, a), a
            }),
            (t.OrthoOffCenterRHToRef = function(e, n, o, r, i, s, a) {
              t.OrthoOffCenterLHToRef(e, n, o, r, i, s, a), (a._m[10] *= -1)
            }),
            (t.PerspectiveLH = function(e, n, o, r) {
              var i = new t(),
                s = (2 * o) / e,
                a = (2 * o) / n,
                p = (r + o) / (r - o),
                u = (-2 * r * o) / (r - o)
              return t.FromValuesToRef(s, 0, 0, 0, 0, a, 0, 0, 0, 0, p, 1, 0, 0, u, 0, i), i._updateIdentityStatus(!1), i
            }),
            (t.PerspectiveFovLH = function(e, n, o, r) {
              var i = new t()
              return t.PerspectiveFovLHToRef(e, n, o, r, i), i
            }),
            (t.PerspectiveFovLHToRef = function(e, n, o, r, i, s) {
              void 0 === s && (s = !0)
              var a = o,
                p = r,
                u = 1 / Math.tan(0.5 * e),
                l = s ? u / n : u,
                c = s ? u : u * n,
                h = (p + a) / (p - a),
                d = (-2 * p * a) / (p - a)
              t.FromValuesToRef(l, 0, 0, 0, 0, c, 0, 0, 0, 0, h, 1, 0, 0, d, 0, i), i._updateIdentityStatus(!1)
            }),
            (t.PerspectiveFovRH = function(e, n, o, r) {
              var i = new t()
              return t.PerspectiveFovRHToRef(e, n, o, r, i), i
            }),
            (t.PerspectiveFovRHToRef = function(e, n, o, r, i, s) {
              void 0 === s && (s = !0)
              var a = o,
                p = r,
                u = 1 / Math.tan(0.5 * e),
                l = s ? u / n : u,
                c = s ? u : u * n,
                h = -(p + a) / (p - a),
                d = (-2 * p * a) / (p - a)
              t.FromValuesToRef(l, 0, 0, 0, 0, c, 0, 0, 0, 0, h, -1, 0, 0, d, 0, i), i._updateIdentityStatus(!1)
            }),
            (t.PerspectiveFovWebVRToRef = function(t, e, n, o, r) {
              void 0 === r && (r = !1)
              var i = r ? -1 : 1,
                s = Math.tan((t.upDegrees * Math.PI) / 180),
                a = Math.tan((t.downDegrees * Math.PI) / 180),
                p = Math.tan((t.leftDegrees * Math.PI) / 180),
                u = Math.tan((t.rightDegrees * Math.PI) / 180),
                l = 2 / (p + u),
                c = 2 / (s + a),
                h = o._m
              ;(h[0] = l),
                (h[1] = h[2] = h[3] = h[4] = 0),
                (h[5] = c),
                (h[6] = h[7] = 0),
                (h[8] = (p - u) * l * 0.5),
                (h[9] = -(s - a) * c * 0.5),
                (h[10] = -n / (e - n)),
                (h[11] = 1 * i),
                (h[12] = h[13] = h[15] = 0),
                (h[14] = (-2 * n * e) / (n - e)),
                o._markAsUpdated()
            }),
            (t.GetAsMatrix2x2 = function(t) {
              return [t._m[0], t._m[1], t._m[4], t._m[5]]
            }),
            (t.GetAsMatrix3x3 = function(t) {
              return [t._m[0], t._m[1], t._m[2], t._m[4], t._m[5], t._m[6], t._m[8], t._m[9], t._m[10]]
            }),
            (t.Transpose = function(e) {
              var n = new t()
              return t.TransposeToRef(e, n), n
            }),
            (t.TransposeToRef = function(t, e) {
              var n = e._m,
                o = t._m
              ;(n[0] = o[0]),
                (n[1] = o[4]),
                (n[2] = o[8]),
                (n[3] = o[12]),
                (n[4] = o[1]),
                (n[5] = o[5]),
                (n[6] = o[9]),
                (n[7] = o[13]),
                (n[8] = o[2]),
                (n[9] = o[6]),
                (n[10] = o[10]),
                (n[11] = o[14]),
                (n[12] = o[3]),
                (n[13] = o[7]),
                (n[14] = o[11]),
                (n[15] = o[15]),
                e._updateIdentityStatus(t._isIdentity, t._isIdentityDirty)
            }),
            (t.Reflection = function(e) {
              var n = new t()
              return t.ReflectionToRef(e, n), n
            }),
            (t.ReflectionToRef = function(e, n) {
              e.normalize()
              var o = e.normal.x,
                r = e.normal.y,
                i = e.normal.z,
                s = -2 * o,
                a = -2 * r,
                p = -2 * i
              t.FromValuesToRef(
                s * o + 1,
                a * o,
                p * o,
                0,
                s * r,
                a * r + 1,
                p * r,
                0,
                s * i,
                a * i,
                p * i + 1,
                0,
                s * e.d,
                a * e.d,
                p * e.d,
                1,
                n
              )
            }),
            (t.FromXYZAxesToRef = function(e, n, o, r) {
              t.FromValuesToRef(e.x, e.y, e.z, 0, n.x, n.y, n.z, 0, o.x, o.y, o.z, 0, 0, 0, 0, 1, r)
            }),
            (t.FromQuaternionToRef = function(t, e) {
              var n = t.x * t.x,
                o = t.y * t.y,
                r = t.z * t.z,
                i = t.x * t.y,
                s = t.z * t.w,
                a = t.z * t.x,
                p = t.y * t.w,
                u = t.y * t.z,
                l = t.x * t.w
              ;(e._m[0] = 1 - 2 * (o + r)),
                (e._m[1] = 2 * (i + s)),
                (e._m[2] = 2 * (a - p)),
                (e._m[3] = 0),
                (e._m[4] = 2 * (i - s)),
                (e._m[5] = 1 - 2 * (r + n)),
                (e._m[6] = 2 * (u + l)),
                (e._m[7] = 0),
                (e._m[8] = 2 * (a + p)),
                (e._m[9] = 2 * (u - l)),
                (e._m[10] = 1 - 2 * (o + n)),
                (e._m[11] = 0),
                (e._m[12] = 0),
                (e._m[13] = 0),
                (e._m[14] = 0),
                (e._m[15] = 1),
                e._markAsUpdated()
            }),
            (t.prototype._markAsUpdated = function() {
              ;(this.updateFlag = t._updateFlagSeed++),
                (this._isIdentity = !1),
                (this._isIdentity3x2 = !1),
                (this._isIdentityDirty = !0),
                (this._isIdentity3x2Dirty = !0)
            }),
            (t.prototype.isIdentity = function() {
              if (this._isIdentityDirty) {
                this._isIdentityDirty = !1
                var t = this._m
                this._isIdentity =
                  1 === t[0] &&
                  0 === t[1] &&
                  0 === t[2] &&
                  0 === t[3] &&
                  0 === t[4] &&
                  1 === t[5] &&
                  0 === t[6] &&
                  0 === t[7] &&
                  0 === t[8] &&
                  0 === t[9] &&
                  1 === t[10] &&
                  0 === t[11] &&
                  0 === t[12] &&
                  0 === t[13] &&
                  0 === t[14] &&
                  1 === t[15]
              }
              return this._isIdentity
            }),
            (t.prototype.isIdentityAs3x2 = function() {
              return (
                this._isIdentity3x2Dirty &&
                  ((this._isIdentity3x2Dirty = !1),
                  1 !== this._m[0] ||
                  1 !== this._m[5] ||
                  1 !== this._m[15] ||
                  0 !== this._m[1] ||
                  0 !== this._m[2] ||
                  0 !== this._m[3] ||
                  0 !== this._m[4] ||
                  0 !== this._m[6] ||
                  0 !== this._m[7] ||
                  0 !== this._m[8] ||
                  0 !== this._m[9] ||
                  0 !== this._m[10] ||
                  0 !== this._m[11] ||
                  0 !== this._m[12] ||
                  0 !== this._m[13] ||
                  0 !== this._m[14]
                    ? (this._isIdentity3x2 = !1)
                    : (this._isIdentity3x2 = !0)),
                this._isIdentity3x2
              )
            }),
            (t.prototype.determinant = function() {
              if (!0 === this._isIdentity) return 1
              var t = this._m,
                e = t[0],
                n = t[1],
                o = t[2],
                r = t[3],
                i = t[4],
                s = t[5],
                a = t[6],
                p = t[7],
                u = t[8],
                l = t[9],
                c = t[10],
                h = t[11],
                d = t[12],
                f = t[13],
                y = t[14],
                v = t[15],
                m = c * v - y * h,
                b = l * v - f * h,
                g = l * y - f * c,
                _ = u * v - d * h,
                C = u * y - c * d,
                O = u * f - d * l
              return (
                e * +(s * m - a * b + p * g) + n * -(i * m - a * _ + p * C) + o * +(i * b - s * _ + p * O) + r * -(i * g - s * C + a * O)
              )
            }),
            (t.prototype.toArray = function() {
              return this._m
            }),
            (t.prototype.asArray = function() {
              return this._m
            }),
            (t.prototype.invert = function() {
              return this.invertToRef(this), this
            }),
            (t.prototype.reset = function() {
              return t.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
            }),
            (t.prototype.add = function(e) {
              var n = new t()
              return this.addToRef(e, n), n
            }),
            (t.prototype.addToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] = this._m[n] + t._m[n]
              return e._markAsUpdated(), this
            }),
            (t.prototype.addToSelf = function(t) {
              for (var e = 0; e < 16; e++) this._m[e] += t._m[e]
              return this._markAsUpdated(), this
            }),
            (t.prototype.invertToRef = function(e) {
              if (!0 === this._isIdentity) return t.IdentityToRef(e), this
              var n = this._m,
                o = n[0],
                r = n[1],
                i = n[2],
                s = n[3],
                a = n[4],
                p = n[5],
                u = n[6],
                l = n[7],
                c = n[8],
                h = n[9],
                d = n[10],
                f = n[11],
                y = n[12],
                v = n[13],
                m = n[14],
                b = n[15],
                g = d * b - m * f,
                _ = h * b - v * f,
                C = h * m - v * d,
                O = c * b - y * f,
                x = c * m - d * y,
                w = c * v - y * h,
                T = +(p * g - u * _ + l * C),
                R = -(a * g - u * O + l * x),
                A = +(a * _ - p * O + l * w),
                E = -(a * C - p * x + u * w),
                S = o * T + r * R + i * A + s * E
              if (0 === S) return e.copyFrom(this), this
              var P = 1 / S,
                I = u * b - m * l,
                z = p * b - v * l,
                M = p * m - v * u,
                D = a * b - y * l,
                F = a * m - y * u,
                U = a * v - y * p,
                L = u * f - d * l,
                N = p * f - h * l,
                V = p * d - h * u,
                j = a * f - c * l,
                H = a * d - c * u,
                B = a * h - c * p,
                k = -(r * g - i * _ + s * C),
                G = +(o * g - i * O + s * x),
                W = -(o * _ - r * O + s * w),
                q = +(o * C - r * x + i * w),
                Y = +(r * I - i * z + s * M),
                X = -(o * I - i * D + s * F),
                Z = +(o * z - r * D + s * U),
                Q = -(o * M - r * F + i * U),
                J = -(r * L - i * N + s * V),
                K = +(o * L - i * j + s * H),
                $ = -(o * N - r * j + s * B),
                tt = +(o * V - r * H + i * B)
              return (
                t.FromValuesToRef(
                  T * P,
                  k * P,
                  Y * P,
                  J * P,
                  R * P,
                  G * P,
                  X * P,
                  K * P,
                  A * P,
                  W * P,
                  Z * P,
                  $ * P,
                  E * P,
                  q * P,
                  Q * P,
                  tt * P,
                  e
                ),
                this
              )
            }),
            (t.prototype.addAtIndex = function(t, e) {
              return (this._m[t] += e), this._markAsUpdated(), this
            }),
            (t.prototype.multiplyAtIndex = function(t, e) {
              return (this._m[t] *= e), this._markAsUpdated(), this
            }),
            (t.prototype.setTranslationFromFloats = function(t, e, n) {
              return (this._m[12] = t), (this._m[13] = e), (this._m[14] = n), this._markAsUpdated(), this
            }),
            (t.prototype.setTranslation = function(t) {
              return this.setTranslationFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.getTranslation = function() {
              return new o.Vector3(this._m[12], this._m[13], this._m[14])
            }),
            (t.prototype.getTranslationToRef = function(t) {
              return (t.x = this._m[12]), (t.y = this._m[13]), (t.z = this._m[14]), this
            }),
            (t.prototype.removeRotationAndScaling = function() {
              var e = this.m
              return (
                t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e[12], e[13], e[14], e[15], this),
                this._updateIdentityStatus(0 === e[12] && 0 === e[13] && 0 === e[14] && 1 === e[15]),
                this
              )
            }),
            (t.prototype.multiply = function(e) {
              var n = new t()
              return this.multiplyToRef(e, n), n
            }),
            (t.prototype.copyFrom = function(t) {
              t.copyToArray(this._m)
              var e = t
              return this._updateIdentityStatus(e._isIdentity, e._isIdentityDirty, e._isIdentity3x2, e._isIdentity3x2Dirty), this
            }),
            (t.prototype.copyToArray = function(t, e) {
              void 0 === e && (e = 0)
              for (var n = 0; n < 16; n++) t[e + n] = this._m[n]
              return this
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return this._isIdentity
                ? (e.copyFrom(t), this)
                : t._isIdentity
                ? (e.copyFrom(this), this)
                : (this.multiplyToArray(t, e._m, 0), e._markAsUpdated(), this)
            }),
            (t.prototype.multiplyToArray = function(t, e, n) {
              var o = this._m,
                r = t.m,
                i = o[0],
                s = o[1],
                a = o[2],
                p = o[3],
                u = o[4],
                l = o[5],
                c = o[6],
                h = o[7],
                d = o[8],
                f = o[9],
                y = o[10],
                v = o[11],
                m = o[12],
                b = o[13],
                g = o[14],
                _ = o[15],
                C = r[0],
                O = r[1],
                x = r[2],
                w = r[3],
                T = r[4],
                R = r[5],
                A = r[6],
                E = r[7],
                S = r[8],
                P = r[9],
                I = r[10],
                z = r[11],
                M = r[12],
                D = r[13],
                F = r[14],
                U = r[15]
              return (
                (e[n] = i * C + s * T + a * S + p * M),
                (e[n + 1] = i * O + s * R + a * P + p * D),
                (e[n + 2] = i * x + s * A + a * I + p * F),
                (e[n + 3] = i * w + s * E + a * z + p * U),
                (e[n + 4] = u * C + l * T + c * S + h * M),
                (e[n + 5] = u * O + l * R + c * P + h * D),
                (e[n + 6] = u * x + l * A + c * I + h * F),
                (e[n + 7] = u * w + l * E + c * z + h * U),
                (e[n + 8] = d * C + f * T + y * S + v * M),
                (e[n + 9] = d * O + f * R + y * P + v * D),
                (e[n + 10] = d * x + f * A + y * I + v * F),
                (e[n + 11] = d * w + f * E + y * z + v * U),
                (e[n + 12] = m * C + b * T + g * S + _ * M),
                (e[n + 13] = m * O + b * R + g * P + _ * D),
                (e[n + 14] = m * x + b * A + g * I + _ * F),
                (e[n + 15] = m * w + b * E + g * z + _ * U),
                this
              )
            }),
            (t.prototype.equals = function(t) {
              var e = t
              if (!e) return !1
              if ((this._isIdentity || e._isIdentity) && !this._isIdentityDirty && !e._isIdentityDirty)
                return this._isIdentity && e._isIdentity
              var n = this.m,
                o = e.m
              return (
                n[0] === o[0] &&
                n[1] === o[1] &&
                n[2] === o[2] &&
                n[3] === o[3] &&
                n[4] === o[4] &&
                n[5] === o[5] &&
                n[6] === o[6] &&
                n[7] === o[7] &&
                n[8] === o[8] &&
                n[9] === o[9] &&
                n[10] === o[10] &&
                n[11] === o[11] &&
                n[12] === o[12] &&
                n[13] === o[13] &&
                n[14] === o[14] &&
                n[15] === o[15]
              )
            }),
            (t.prototype.clone = function() {
              var e = new t()
              return e.copyFrom(this), e
            }),
            (t.prototype.getClassName = function() {
              return 'Matrix'
            }),
            (t.prototype.getHashCode = function() {
              for (var t = this._m[0] || 0, e = 1; e < 16; e++) t = (397 * t) ^ (this._m[e] || 0)
              return t
            }),
            (t.prototype.decompose = function(e, n, o) {
              if (this._isIdentity) return o && o.setAll(0), e && e.setAll(1), n && n.copyFromFloats(0, 0, 0, 1), !0
              var s = this._m
              o && o.copyFromFloats(s[12], s[13], s[14])
              var a = e || i.MathTmp.Vector3[0]
              if (
                ((a.x = Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2])),
                (a.y = Math.sqrt(s[4] * s[4] + s[5] * s[5] + s[6] * s[6])),
                (a.z = Math.sqrt(s[8] * s[8] + s[9] * s[9] + s[10] * s[10])),
                this.determinant() <= 0 && (a.y *= -1),
                0 === a.x || 0 === a.y || 0 === a.z)
              )
                return n && n.copyFromFloats(0, 0, 0, 1), !1
              if (n) {
                var p = 1 / a.x,
                  u = 1 / a.y,
                  l = 1 / a.z
                t.FromValuesToRef(
                  s[0] * p,
                  s[1] * p,
                  s[2] * p,
                  0,
                  s[4] * u,
                  s[5] * u,
                  s[6] * u,
                  0,
                  s[8] * l,
                  s[9] * l,
                  s[10] * l,
                  0,
                  0,
                  0,
                  0,
                  1,
                  i.MathTmp.Matrix[0]
                ),
                  r.Quaternion.FromRotationMatrixToRef(i.MathTmp.Matrix[0], n)
              }
              return !0
            }),
            (t.prototype.getRow = function(t) {
              if (t < 0 || t > 3) return null
              var e = 4 * t
              return new s.Vector4(this._m[e + 0], this._m[e + 1], this._m[e + 2], this._m[e + 3])
            }),
            (t.prototype.setRow = function(t, e) {
              return this.setRowFromFloats(t, e.x, e.y, e.z, e.w)
            }),
            (t.prototype.transpose = function() {
              return t.Transpose(this)
            }),
            (t.prototype.transposeToRef = function(e) {
              return t.TransposeToRef(this, e), this
            }),
            (t.prototype.setRowFromFloats = function(t, e, n, o, r) {
              if (t < 0 || t > 3) return this
              var i = 4 * t
              return (this._m[i + 0] = e), (this._m[i + 1] = n), (this._m[i + 2] = o), (this._m[i + 3] = r), this._markAsUpdated(), this
            }),
            (t.prototype.scale = function(e) {
              var n = new t()
              return this.scaleToRef(e, n), n
            }),
            (t.prototype.scaleToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] = this._m[n] * t
              return e._markAsUpdated(), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] += this._m[n] * t
              return e._markAsUpdated(), this
            }),
            (t.prototype.toNormalMatrix = function(e) {
              var n = i.MathTmp.Matrix[0]
              this.invertToRef(n), n.transposeToRef(e)
              var o = e._m
              t.FromValuesToRef(o[0], o[1], o[2], 0, o[4], o[5], o[6], 0, o[8], o[9], o[10], 0, 0, 0, 0, 1, e)
            }),
            (t.prototype.getRotationMatrix = function() {
              var e = new t()
              return this.getRotationMatrixToRef(e), e
            }),
            (t.prototype.getRotationMatrixToRef = function(e) {
              var n = i.MathTmp.Vector3[0]
              if (!this.decompose(n)) return t.IdentityToRef(e), this
              var o = this._m,
                r = 1 / n.x,
                s = 1 / n.y,
                a = 1 / n.z
              return (
                t.FromValuesToRef(
                  o[0] * r,
                  o[1] * r,
                  o[2] * r,
                  0,
                  o[4] * s,
                  o[5] * s,
                  o[6] * s,
                  0,
                  o[8] * a,
                  o[9] * a,
                  o[10] * a,
                  0,
                  0,
                  0,
                  0,
                  1,
                  e
                ),
                this
              )
            }),
            (t.prototype.toggleModelMatrixHandInPlace = function() {
              var t = this._m
              ;(t[2] *= -1), (t[6] *= -1), (t[8] *= -1), (t[9] *= -1), (t[14] *= -1), this._markAsUpdated()
            }),
            (t.prototype.toggleProjectionMatrixHandInPlace = function() {
              var t = this._m
              ;(t[8] *= -1), (t[9] *= -1), (t[10] *= -1), (t[11] *= -1), this._markAsUpdated()
            }),
            (t.prototype._updateIdentityStatus = function(e, n, o, r) {
              void 0 === n && (n = !1),
                void 0 === o && (o = !1),
                void 0 === r && (r = !0),
                (this.updateFlag = t._updateFlagSeed++),
                (this._isIdentity = e),
                (this._isIdentity3x2 = e || o),
                (this._isIdentityDirty = !this._isIdentity && n),
                (this._isIdentity3x2Dirty = !this._isIdentity3x2 && r)
            }),
            (t._updateFlagSeed = 0),
            (t._identityReadOnly = t.Identity()),
            t
          )
        })()
      e.Matrix = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Entity = void 0)
      var o = n(0),
        r = n(7),
        i = n(1),
        s = (function() {
          function t(t) {
            ;(this.name = t),
              (this.children = {}),
              (this.eventManager = null),
              (this.alive = !1),
              (this.uuid = i.newId('E')),
              (this.components = {}),
              (this.engine = null),
              (this._parent = null)
          }
          return (
            (t.prototype.addComponentOrReplace = function(t) {
              if ('function' == typeof t)
                throw new Error('You passed a function or class as a component, an instance of component is expected')
              if ('object' != typeof t) throw new Error('You passed a ' + typeof t + ', an instance of component is expected')
              var e = o.getComponentName(t)
              if (this.components[e]) {
                if (this.components[e] === t) return t
                this.removeComponent(this.components[e], !1)
              }
              return this.addComponent(t)
            }),
            (t.prototype.hasComponent = function(t) {
              var e = typeof t
              if ('string' !== e && 'object' !== e && 'function' !== e)
                throw new Error('Entity#has(component): component is not a class, name or instance')
              if (null == t) return !1
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              return !!r && ('object' === e ? r === t : 'function' !== e || r instanceof t)
            }),
            (t.prototype.getComponent = function(t) {
              var e = typeof t
              if ('string' !== e && 'function' !== e) throw new Error('Entity#get(component): component is not a class or name')
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              if (!r) throw new Error('Can not get component "' + n + '" from entity "' + this.identifier + '"')
              if ('function' === e) {
                if (r instanceof t) return r
                throw new Error('Can not get component "' + n + '" from entity "' + this.identifier + '" (by instance)')
              }
              return r
            }),
            (t.prototype.getComponentOrNull = function(t) {
              var e = typeof t
              if ('string' !== e && 'function' !== e) throw new Error('Entity#getOrNull(component): component is not a class or name')
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              return r ? ('function' === e ? (r instanceof t ? r : null) : r) : null
            }),
            (t.prototype.getComponentOrCreate = function(t) {
              if ('function' != typeof t) throw new Error('Entity#getOrCreate(component): component is not a class')
              var e = this.getComponentOrNull(t)
              return e || ((e = new t()), o.getComponentName(e), this.addComponentOrReplace(e)), e
            }),
            (t.prototype.addComponent = function(t) {
              if ('object' != typeof t)
                throw new Error(
                  'Entity#add(component): You passed a function or class as a component, an instance of component is expected'
                )
              var e = o.getComponentName(t),
                n = o.getComponentClassId(t)
              if (this.components[e])
                throw new Error('A component of type "' + e + '" is already present in entity "' + this.identifier + '"')
              ;(this.components[e] = t), this.eventManager && this.eventManager.fireEvent(new r.ComponentAdded(this, e, n))
              var i = t
              return 'function' == typeof i.addedToEntity && i.addedToEntity(this), t
            }),
            (t.prototype.removeComponent = function(t, e) {
              void 0 === e && (e = !0)
              var n = typeof t
              if ('string' !== n && 'function' !== n && 'object' !== n)
                throw new Error('Entity#remove(component): component is not a class, class or name')
              var s = 'string' === n ? t : o.getComponentName(t),
                a = this.components[s]
              if (a) {
                if ('function' === n)
                  return a instanceof t
                    ? (delete this.components[s],
                      void (
                        a &&
                        (e && this.eventManager && this.eventManager.fireEvent(new r.ComponentRemoved(this, s, a)),
                        'function' == typeof a.removedFromEntity && a.removedFromEntity(this))
                      ))
                    : void i.log(
                        'Entity Warning: Trying to remove wrong (by constructor) component "' +
                          s +
                          '" from entity "' +
                          this.identifier +
                          '"'
                      )
                delete this.components[s],
                  a &&
                    (e && this.eventManager && this.eventManager.fireEvent(new r.ComponentRemoved(this, s, a)),
                    'function' == typeof a.removedFromEntity && a.removedFromEntity(this))
              } else i.log('Entity Warning: Trying to remove inexisting component "' + s + '" from entity "' + this.identifier + '"')
            }),
            (t.prototype.isAddedToEngine = function() {
              return !(!this.engine || (!(this.uuid in this.engine.entities) && this.engine.rootEntity !== this))
            }),
            (t.prototype.setParent = function(t) {
              var e
              if (t && 'getEntityRepresentation' in t) {
                if (!this.engine)
                  throw new Error('In order to set an attachable as parent, you first need to add the entity to the engine.')
                e = t.getEntityRepresentation(this.engine)
              } else e = !t && this.engine ? this.engine.rootEntity : t
              var n = this.getParent()
              if (e === this)
                throw new Error(
                  'Failed to set parent for entity "' + this.identifier + '": An entity can\'t set itself as a its own parent'
                )
              if (e === n) return this
              var o = this.getCircularAncestor(e)
              if (o)
                throw new Error(
                  'Failed to set parent for entity "' +
                    this.identifier +
                    '": Circular parent references are not allowed (See entity "' +
                    o +
                    '")'
                )
              return (
                n && delete n.children[this.uuid],
                null !== e &&
                  '0' !== e.uuid &&
                  (!e.isAddedToEngine() && this.isAddedToEngine() && this.engine.removeEntity(this),
                  e.isAddedToEngine() && !this.isAddedToEngine() && e.engine.addEntity(this)),
                (this._parent = e || null),
                this.registerAsChild(),
                this.eventManager && this.engine && this.eventManager.fireEvent(new r.ParentChanged(this, e)),
                this
              )
            }),
            (t.prototype.getParent = function() {
              return this._parent
            }),
            Object.defineProperty(t.prototype, 'identifier', {
              get: function() {
                return this.name || this.uuid
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.getCircularAncestor = function(t) {
              for (var e = this.engine ? this.engine.rootEntity : null, n = t; n && n !== e; ) {
                var o = n.getParent()
                if (o === this) return n.uuid
                n = o
              }
              return null
            }),
            (t.prototype.registerAsChild = function() {
              var t = this.getParent()
              this.uuid && t && (t.children[this.uuid] = this)
            }),
            t
          )
        })()
      e.Entity = s
    },
    function(t, e, n) {
      'use strict'
      var o =
        (this && this.__decorate) ||
        function(t, e, n, o) {
          var r,
            i = arguments.length,
            s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
          else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
          return i > 3 && s && Object.defineProperty(e, n, s), s
        }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.PointerEvent = e.RaycastResponse = e.UUIDEvent = void 0)
      var r = n(8),
        i = (function() {
          function t(t, e) {
            ;(this.uuid = t), (this.payload = e)
          }
          return (t = o([r.EventConstructor()], t))
        })()
      e.UUIDEvent = i
      var s = (function() {
        function t(t) {
          this.payload = t
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.RaycastResponse = s
      var a = (function() {
        function t(t) {
          this.payload = t
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.PointerEvent = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.uuidEventSystem = e.UUIDEventSystem = e.pointerEventSystem = e.PointerEventSystem = e.raycastEventSystem = e.RaycastEventSystem = void 0)
      var o = n(13),
        r = n(4),
        i = n(7),
        s = n(16),
        a = n(28),
        p = (function() {
          function t() {}
          return (
            (t.prototype.activate = function(t) {
              t.eventManager.addListener(o.RaycastResponse, this, function(t) {
                'HitFirst' === t.payload.queryType
                  ? a.PhysicsCast.instance.handleRaycastHitFirstResponse(t)
                  : 'HitAll' === t.payload.queryType && a.PhysicsCast.instance.handleRaycastHitAllResponse(t)
              }),
                'undefined' != typeof dcl && dcl.subscribe('raycastResponse')
            }),
            (t.prototype.deactivate = function() {
              'undefined' != typeof dcl && dcl.unsubscribe('raycastResponse')
            }),
            t
          )
        })()
      ;(e.RaycastEventSystem = p), (e.raycastEventSystem = new p())
      var u = (function() {
        function t() {}
        return (
          (t.prototype.activate = function(t) {
            t.eventManager.addListener(o.PointerEvent, this, function(t) {
              s.Input.instance.handlePointerEvent(t.payload)
            }),
              'undefined' != typeof dcl && (dcl.subscribe('pointerUp'), dcl.subscribe('pointerDown'), dcl.subscribe('pointerEvent'))
          }),
          (t.prototype.deactivate = function() {
            'undefined' != typeof dcl && (dcl.unsubscribe('pointerUp'), dcl.unsubscribe('pointerDown'), dcl.unsubscribe('pointerEvent'))
          }),
          t
        )
      })()
      ;(e.PointerEventSystem = u), (e.pointerEventSystem = new u())
      var l = (function() {
        function t() {
          this.handlerMap = {}
        }
        return (
          (t.prototype.activate = function(t) {
            t.eventManager.addListener(o.UUIDEvent, this, this.handleEvent),
              t.eventManager.addListener(i.ComponentAdded, this, this.componentAdded),
              t.eventManager.addListener(i.ComponentRemoved, this, this.componentRemoved),
              'undefined' != typeof dcl && dcl.subscribe('uuidEvent')
          }),
          (t.prototype.deactivate = function() {
            'undefined' != typeof dcl && dcl.unsubscribe('uuidEvent')
          }),
          (t.prototype.onAddEntity = function(t) {
            for (var e in t.components) {
              var n = t.components[e]
              n instanceof r.OnUUIDEvent && (this.handlerMap[n.uuid] = n)
            }
          }),
          (t.prototype.onRemoveEntity = function(t) {
            for (var e in t.components) {
              var n = t.components[e]
              n instanceof r.OnUUIDEvent && delete this.handlerMap[n.uuid]
            }
          }),
          (t.prototype.componentAdded = function(t) {
            if (t.entity.isAddedToEngine()) {
              var e = t.entity.components[t.componentName]
              e instanceof r.OnUUIDEvent && (this.handlerMap[e.uuid] = e)
            }
          }),
          (t.prototype.componentRemoved = function(t) {
            t.entity.isAddedToEngine() && t.component instanceof r.OnUUIDEvent && delete this.handlerMap[t.component.uuid]
          }),
          (t.prototype.handleEvent = function(t) {
            if (t.uuid in this.handlerMap) {
              var e = this.handlerMap[t.uuid]
              e && e.callback && 'call' in e.callback && e.callback(t.payload)
            }
          }),
          t
        )
      })()
      ;(e.UUIDEventSystem = l), (e.uuidEventSystem = new l())
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Vector2 = void 0)
      var o = n(2),
        r = n(6),
        i = (function() {
          function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), (this.x = t), (this.y = e)
          }
          return (
            (t.Zero = function() {
              return new t(0, 0)
            }),
            (t.One = function() {
              return new t(1, 1)
            }),
            (t.Add = function(e, n) {
              return new t(e.x, e.y).addInPlace(n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1])
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1])
            }),
            (t.CatmullRom = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s
              return new t(
                0.5 * (2 * n.x + (-e.x + o.x) * i + (2 * e.x - 5 * n.x + 4 * o.x - r.x) * s + (-e.x + 3 * n.x - 3 * o.x + r.x) * a),
                0.5 * (2 * n.y + (-e.y + o.y) * i + (2 * e.y - 5 * n.y + 4 * o.y - r.y) * s + (-e.y + 3 * n.y - 3 * o.y + r.y) * a)
              )
            }),
            (t.Clamp = function(e, n, o) {
              var r = e.x
              r = (r = r > o.x ? o.x : r) < n.x ? n.x : r
              var i = e.y
              return new t(r, (i = (i = i > o.y ? o.y : i) < n.y ? n.y : i))
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(e.x * p + o.x * u + n.x * l + r.x * c, e.y * p + o.y * u + n.y * l + r.y * c)
            }),
            (t.Lerp = function(e, n, o) {
              return new t(e.x + (n.x - e.x) * o, e.y + (n.y - e.y) * o)
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y
            }),
            (t.Normalize = function(e) {
              var n = new t(e.x, e.y)
              return n.normalize(), n
            }),
            (t.Minimize = function(e, n) {
              return new t(e.x < n.x ? e.x : n.x, e.y < n.y ? e.y : n.y)
            }),
            (t.Maximize = function(e, n) {
              return new t(e.x > n.x ? e.x : n.x, e.y > n.y ? e.y : n.y)
            }),
            (t.Transform = function(e, n) {
              var o = t.Zero()
              return t.TransformToRef(e, n, o), o
            }),
            (t.TransformToRef = function(t, e, n) {
              var o = e.m,
                r = t.x * o[0] + t.y * o[4] + o[12],
                i = t.x * o[1] + t.y * o[5] + o[13]
              ;(n.x = r), (n.y = i)
            }),
            (t.PointInTriangle = function(t, e, n, o) {
              var r = 0.5 * (-n.y * o.x + e.y * (-n.x + o.x) + e.x * (n.y - o.y) + n.x * o.y),
                i = r < 0 ? -1 : 1,
                s = (e.y * o.x - e.x * o.y + (o.y - e.y) * t.x + (e.x - o.x) * t.y) * i,
                a = (e.x * n.y - e.y * n.x + (e.y - n.y) * t.x + (n.x - e.x) * t.y) * i
              return s > 0 && a > 0 && s + a < 2 * r * i
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y
              return n * n + o * o
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.DistanceOfPointFromSegment = function(e, n, o) {
              var r = t.DistanceSquared(n, o)
              if (0 === r) return t.Distance(e, n)
              var i = o.subtract(n),
                s = Math.max(0, Math.min(1, t.Dot(e.subtract(n), i) / r)),
                a = n.add(i.multiplyByFloats(s, s))
              return t.Distance(e, a)
            }),
            (t.prototype.toString = function() {
              return '{X: ' + this.x + ' Y:' + this.y + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector2'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * t) ^ (this.y || 0))
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), this
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), this
            }),
            (t.prototype.copyFromFloats = function(t, e) {
              return (this.x = t), (this.y = e), this
            }),
            (t.prototype.set = function(t, e) {
              return this.copyFromFloats(t, e)
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.x = this.x + t.x), (e.y = this.y + t.y), this
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), this
            }),
            (t.prototype.addVector3 = function(e) {
              return new t(this.x + e.x, this.y + e.y)
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.x = this.x - t.x), (e.y = this.y - t.y), this
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), this
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), this
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.x * e.x, this.y * e.y)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.x = this.x * t.x), (e.y = this.y * t.y), this
            }),
            (t.prototype.multiplyByFloats = function(e, n) {
              return new t(this.x * e, this.y * n)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return (e.x = this.x / t.x), (e.y = this.y / t.y), this
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), this
            }),
            (t.prototype.scale = function(e) {
              var n = new t(0, 0)
              return this.scaleToRef(e, n), n
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return void 0 === e && (e = o.Epsilon), t && r.Scalar.WithinEpsilon(this.x, t.x, e) && r.Scalar.WithinEpsilon(this.y, t.y, e)
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y))
            }),
            (t.prototype.fract = function() {
              return new t(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y
            }),
            (t.prototype.normalize = function() {
              var t = this.length()
              if (0 === t) return this
              var e = 1 / t
              return (this.x *= e), (this.y *= e), this
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y)
            }),
            t
          )
        })()
      e.Vector2 = i
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Input = e.GlobalPointerUp = e.GlobalPointerDown = e.PointerEventComponent = e.ActionButton = void 0)
      var a,
        p = n(27),
        u = n(5),
        l = n(0)
      !(function(t) {
        ;(t.POINTER = 'POINTER'), (t.PRIMARY = 'PRIMARY'), (t.SECONDARY = 'SECONDARY'), (t.ANY = 'ANY')
      })((a = e.ActionButton || (e.ActionButton = {})))
      var c = function(t) {
        if (((this.callback = t), !t || !('apply' in t) || !('call' in t))) throw new Error('Callback is not a function')
        y.ensureInstance()
      }
      e.PointerEventComponent = c
      var h = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([l.Component('pointerDown')], e))
      })(c)
      e.GlobalPointerDown = h
      var d = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([l.Component('pointerUp')], e))
      })(c)
      e.GlobalPointerUp = d
      var f = function(t, e) {
          ;(this.fn = t), (this.useRaycast = e)
        },
        y = (function() {
          function t() {
            var t, e
            ;(this.subscriptions =
              (((t = {})[a.POINTER] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.PRIMARY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.SECONDARY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.ANY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              t)),
              (this.internalState =
                (((e = {})[a.POINTER] = { BUTTON_DOWN: !1 }),
                (e[a.PRIMARY] = { BUTTON_DOWN: !1 }),
                (e[a.SECONDARY] = { BUTTON_DOWN: !1 }),
                (e[a.ANY] = { BUTTON_DOWN: !1 }),
                e))
          }
          return (
            Object.defineProperty(t, 'instance', {
              get: function() {
                return t.ensureInstance(), t._instance
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.ensureInstance = function() {
              t._instance || (t._instance = new t())
            }),
            (t.prototype.isButtonPressed = function(t) {
              return this.internalState[t]
            }),
            (t.prototype.subscribe = function(t, e, n, o) {
              var r = this
              return (
                this.subscriptions[e][t].push(new f(o, n)),
                function() {
                  return r.unsubscribe(t, e, o)
                }
              )
            }),
            (t.prototype.unsubscribe = function(t, e, n) {
              var o = this.getSubscriptionId(t, e, n)
              return o > -1 && this.subscriptions[e][t].splice(o, 1)
            }),
            (t.prototype.handlePointerEvent = function(t) {
              var e = this.getPointerById(t.buttonId),
                n = i(i({}, t), {
                  button: e,
                  direction: new u.Vector3().copyFrom(t.direction),
                  origin: new u.Vector3().copyFrom(t.origin),
                  hit: void 0
                }),
                o = t.hit
                  ? i(i({}, t.hit), {
                      hitPoint: new u.Vector3().copyFrom(t.hit.hitPoint),
                      normal: new u.Vector3().copyFrom(t.hit.normal),
                      worldNormal: new u.Vector3().copyFrom(t.hit.worldNormal)
                    })
                  : void 0
              if (t.type === p.InputEventType.DOWN) {
                this.internalState[e].BUTTON_DOWN = !0
                for (var r = 0; r < this.subscriptions[e].BUTTON_DOWN.length; r++) {
                  ;(s = this.subscriptions[e].BUTTON_DOWN[r]).useRaycast ? (n.hit = o) : (n.hit = void 0), s.fn(n)
                }
                if (o && o.entityId && l.DisposableComponent.engine)
                  (c = (a = l.DisposableComponent.engine.entities[o.entityId]) && a.getComponentOrNull(h)) && ((n.hit = o), c.callback(n))
              } else {
                this.internalState[e].BUTTON_DOWN = !1
                for (r = 0; r < this.subscriptions[e].BUTTON_UP.length; r++) {
                  var s
                  ;(s = this.subscriptions[e].BUTTON_UP[r]).useRaycast ? (n.hit = o) : (n.hit = void 0), s.fn(n)
                }
                var a, c
                if (o && o.entityId && l.DisposableComponent.engine)
                  (c = (a = l.DisposableComponent.engine.entities[o.entityId]) && a.getComponentOrNull(d)) && ((n.hit = o), c.callback(n))
              }
            }),
            (t.prototype.getSubscriptionId = function(t, e, n) {
              for (var o = 0; o < this.subscriptions[e][t].length; o++) if (this.subscriptions[e][t][o].fn === n) return o
              return -1
            }),
            (t.prototype.getPointerById = function(t) {
              return 0 === t ? a.POINTER : 1 === t ? a.PRIMARY : a.SECONDARY
            }),
            t
          )
        })()
      e.Input = y
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        r =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Engine = void 0)
      var i = n(7),
        s = n(0),
        a = n(8),
        p = n(32),
        u = n(1),
        l = n(12),
        c = (function() {
          function t(t) {
            ;(this.eventManager = new a.EventManager()),
              (this.systems = []),
              (this.entityLists = {}),
              (this.addedSystems = []),
              (this._entities = {}),
              (this._disposableComponents = {}),
              (this._componentGroups = {}),
              (this.simpleSystems = []),
              this.eventManager.addListener(i.ComponentAdded, this, this.componentAddedHandler),
              this.eventManager.addListener(i.ComponentRemoved, this, this.componentRemovedHandler),
              (this.rootEntity = t),
              (this.firstPersonCameraEntity = new l.Entity()),
              (this.firstPersonCameraEntity.uuid = 'FirstPersonCameraEntityReference'),
              this.addEntity(this.firstPersonCameraEntity),
              (this.avatarEntity = new l.Entity()),
              (this.avatarEntity.uuid = 'AvatarEntityReference'),
              this.addEntity(this.avatarEntity)
          }
          return (
            Object.defineProperty(t.prototype, 'entities', {
              get: function() {
                return this._entities
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'disposableComponents', {
              get: function() {
                return this._disposableComponents
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.addEntity = function(t) {
              var e = t.getParent()
              if (t.isAddedToEngine()) return t
              for (var n in ((t.eventManager = this.eventManager),
              (t.engine = this),
              (this._entities[t.uuid] = t),
              this.checkRequirementsAndAdd(t),
              e
                ? e.isAddedToEngine() ||
                  e === this.rootEntity ||
                  u.log('Engine: warning, added an entity with a parent not present in the engine. Parent id: ' + e.uuid)
                : t.setParent(this.rootEntity),
              (t.alive = !0),
              t.children)) {
                var o = t.children[n]
                o && (o.isAddedToEngine() || this.addEntity(o))
              }
              return t
            }),
            (t.prototype.removeEntity = function(t) {
              var e = t.uuid
              if (t.isAddedToEngine()) {
                for (var n in t.components) {
                  var o = this._componentGroups[n]
                  if (o) for (var r in o) o[r].removeEntity(t)
                  delete this.entityLists[n][e]
                }
                for (var i = 0; i < this.simpleSystems.length; i++) {
                  var s = this.simpleSystems[i]
                  s.onRemoveEntity && s.onRemoveEntity(t)
                }
                for (var i in t.children) {
                  var a = t.children[i]
                  a && this.removeEntity(a)
                }
                return (t.alive = !1), (t.eventManager = null), delete this._entities[e], !0
              }
              for (var n in (u.log('Engine: Trying to remove non existent entity from engine.'),
              t.isAddedToEngine()
                ? u.log('Engine: Entity id: ' + e)
                : u.log('Engine: Entity "' + t.uuid + '" has not been added to any engine yet.'),
              u.log("Engine: Entity's components:"),
              t.components))
                u.log(n)
              return !1
            }),
            (t.prototype.addSystem = function(t, e) {
              if ((void 0 === e && (e = 0), -1 !== this.addedSystems.indexOf(t)))
                return u.log('Engine: Trying to add a system that is already added. Aborting'), t
              if (this.systems.length > 0)
                for (var n = 0; n < this.systems.length; n++) {
                  var o = this.systems[n],
                    r = n === this.systems.length - 1
                  if (o.priority > e) {
                    this.addedSystems.push(t), this.systems.splice(n, 0, { system: t, priority: e })
                    break
                  }
                  if (r) {
                    this.addedSystems.push(t), this.systems.splice(n + 1, 0, { system: t, priority: e })
                    break
                  }
                }
              else this.addedSystems.push(t), this.systems.splice(1, 0, { system: t, priority: e })
              return this.registerSystem(t), t
            }),
            (t.prototype.removeSystem = function(t) {
              var e = this.addedSystems.indexOf(t)
              if (-1 !== e) {
                ;(t.active = !1), t.deactivate && t.deactivate(), this.addedSystems.splice(e, 1)
                for (var n = 0; n < this.systems.length; n++) {
                  this.systems[n].system === t && this.systems.splice(n, 1)
                }
                return !0
              }
              return !1
            }),
            (t.prototype.update = function(t) {
              for (var e in this.systems) {
                var n = this.systems[e].system
                if (n.active && n.update)
                  try {
                    n.update(t)
                  } catch (t) {
                    u.error(t)
                  }
              }
              return this
            }),
            (t.prototype.getEntitiesWithComponent = function(t) {
              var e = 'string' == typeof t ? t : s.getComponentName(t)
              return e in this.entityLists ? this.entityLists[e] : (this.entityLists[e] = {})
            }),
            (t.prototype.registerComponent = function(t) {
              var e = s.getComponentId(t),
                n = s.getComponentName(t),
                o = s.getComponentClassId(t)
              ;(this._disposableComponents[e] = t),
                null !== o &&
                  (this.eventManager.fireEvent(new s.DisposableComponentCreated(e, n, o)),
                  this.eventManager.fireEvent(new s.DisposableComponentUpdated(e, t)))
            }),
            (t.prototype.disposeComponent = function(t) {
              var e = s.getComponentId(t)
              return (
                delete this._disposableComponents[e] &&
                (this.eventManager.fireEvent(new s.DisposableComponentRemoved(e)), t.onDispose && t.onDispose(), !0)
              )
            }),
            (t.prototype.updateComponent = function(t) {
              this.eventManager.fireEvent(new s.DisposableComponentUpdated(s.getComponentId(t), t))
            }),
            (t.prototype.getComponentGroup = function() {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
              var n = new (p.ComponentGroup.bind.apply(p.ComponentGroup, r([void 0], t)))()
              n.active = !0
              for (var o = n.requiresNames, i = 0; i < o.length; i++) {
                var s = o[i],
                  a = this._componentGroups[s]
                a || (this._componentGroups[s] = a = []), -1 === a.indexOf(n) && a.push(n)
              }
              for (var u in this._entities) this.checkRequirements(this._entities[u], n)
              return n
            }),
            (t.prototype.removeComponentGroup = function(t) {
              if (t.active) {
                t.active = !1
                for (var e = t.requiresNames, n = 0; n < e.length; n++) {
                  var o = e[n],
                    r = this._componentGroups[o]
                  if (r) {
                    var i = r.indexOf(t)
                    ;-1 !== i && r.splice(i, 1)
                  }
                }
                return !0
              }
              return !1
            }),
            (t.prototype.registerSystem = function(t) {
              ;(t.active = !0), t.activate && t.activate(this), this.simpleSystems.push(t)
            }),
            (t.prototype.checkRequirementsAndAdd = function(t) {
              if (t.isAddedToEngine()) {
                for (var e in t.components) {
                  e in this.entityLists || (this.entityLists[e] = {}), (this.entityLists[e][t.uuid] = t)
                  var n = this._componentGroups[e]
                  if (n) for (var o in n) this.checkRequirements(t, n[o])
                }
                for (var r = 0; r < this.simpleSystems.length; r++) {
                  var i = this.simpleSystems[r]
                  i.onAddEntity && i.onAddEntity(t)
                }
              }
            }),
            (t.prototype.checkRequirements = function(t, e) {
              e.meetsRequirements(t) ? e.hasEntity(t) || e.addEntity(t) : e.hasEntity(t) && e.removeEntity(t)
            }),
            (t.prototype.componentAddedHandler = function(t) {
              var e,
                n = t.entity,
                o = t.componentName
              if (n.isAddedToEngine()) {
                this.entityLists[o] ? (this.entityLists[o][n.uuid] = n) : (this.entityLists[o] = (((e = {})[n.uuid] = n), e))
                var r = this._componentGroups[o]
                if (r) for (var i in r) this.checkRequirements(n, r[i])
              }
            }),
            (t.prototype.componentRemovedHandler = function(t) {
              var e = t.entity,
                n = t.componentName
              if (e.isAddedToEngine()) {
                delete this.entityLists[n][e.uuid]
                var o = this._componentGroups[n]
                if (o) for (var r in o) this.checkRequirements(e, o[r])
              }
            }),
            t
          )
        })()
      e.Engine = c
    },
    function(t, e, n) {
      'use strict'
      var o
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.UIValue = e.UIValueType = void 0),
        (function(t) {
          ;(t[(t.PERCENT = 0)] = 'PERCENT'), (t[(t.PIXELS = 1)] = 'PIXELS')
        })((o = e.UIValueType || (e.UIValueType = {})))
      var r = (function() {
        function t(t) {
          if (((this.type = o.PIXELS), 'string' == typeof t)) {
            var e = t
            e.indexOf('px') > -1 ? (this.type = o.PIXELS) : e.indexOf('%') > -1 && (this.type = o.PERCENT), (this.value = parseFloat(e))
          } else this.value = t
        }
        return (
          (t.prototype.toString = function() {
            var t = this.value.toString()
            return this.type === o.PERCENT ? (t += '%') : (t += 'px'), t
          }),
          t
        )
      })()
      e.UIValue = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.executeTask = void 0)
      var o = n(1),
        r = Promise.resolve().then.bind(Promise.resolve())
      e.executeTask = function(t) {
        var e = r(t)
        return (
          (e.isComplete = !1),
          e
            .then(function(t) {
              ;(e.isComplete = !0), (e.result = t), (e.didFail = !1)
            })
            .catch(function(t) {
              ;(e.isComplete = !0), (e.error = t), (e.didFail = !0), o.error('executeTask: FAILED ' + t.toString(), t)
            }),
          e
        )
      }
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__awaiter) ||
          function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
              function s(t) {
                try {
                  p(o.next(t))
                } catch (t) {
                  i(t)
                }
              }
              function a(t) {
                try {
                  p(o.throw(t))
                } catch (t) {
                  i(t)
                }
              }
              function p(t) {
                var e
                t.done
                  ? r(t.value)
                  : ((e = t.value),
                    e instanceof n
                      ? e
                      : new n(function(t) {
                          t(e)
                        })).then(s, a)
              }
              p((o = o.apply(t, e || [])).next())
            })
          },
        r =
          (this && this.__generator) ||
          function(t, e) {
            var n,
              o,
              r,
              i,
              s = {
                label: 0,
                sent: function() {
                  if (1 & r[0]) throw r[1]
                  return r[1]
                },
                trys: [],
                ops: []
              }
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              'function' == typeof Symbol &&
                (i[Symbol.iterator] = function() {
                  return this
                }),
              i
            )
            function a(i) {
              return function(a) {
                return (function(i) {
                  if (n) throw new TypeError('Generator is already executing.')
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        o &&
                          (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) &&
                          !(r = r.call(o, i[1])).done)
                      )
                        return r
                      switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                        case 0:
                        case 1:
                          r = i
                          break
                        case 4:
                          return s.label++, { value: i[1], done: !1 }
                        case 5:
                          s.label++, (o = i[1]), (i = [0])
                          continue
                        case 7:
                          ;(i = s.ops.pop()), s.trys.pop()
                          continue
                        default:
                          if (!((r = s.trys), (r = r.length > 0 && r[r.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            s = 0
                            continue
                          }
                          if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                            s.label = i[1]
                            break
                          }
                          if (6 === i[0] && s.label < r[1]) {
                            ;(s.label = r[1]), (r = i)
                            break
                          }
                          if (r && s.label < r[2]) {
                            ;(s.label = r[2]), s.ops.push(i)
                            break
                          }
                          r[2] && s.ops.pop(), s.trys.pop()
                          continue
                      }
                      i = e.call(t, s)
                    } catch (t) {
                      ;(i = [6, t]), (o = 0)
                    } finally {
                      n = r = 0
                    }
                  if (5 & i[0]) throw i[1]
                  return { value: i[0] ? i[1] : void 0, done: !0 }
                })([i, a])
              }
            }
          },
        i =
          (this && this.__values) ||
          function(t) {
            var e = 'function' == typeof Symbol && Symbol.iterator,
              n = e && t[e],
              o = 0
            if (n) return n.call(t)
            if (t && 'number' == typeof t.length)
              return {
                next: function() {
                  return t && o >= t.length && (t = void 0), { value: t && t[o++], done: !t }
                }
              }
            throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Observable = e.MultiObserver = e.Observer = e.ObserverEventState = void 0)
      var s = n(19),
        a = (function() {
          function t(t, e, n, o) {
            void 0 === e && (e = !1), this.initalize(t, e, n, o)
          }
          return (
            (t.prototype.initalize = function(t, e, n, o) {
              return (
                void 0 === e && (e = !1), (this.mask = t), (this.skipNextObservers = e), (this.target = n), (this.currentTarget = o), this
              )
            }),
            t
          )
        })()
      e.ObserverEventState = a
      var p = function(t, e, n) {
        void 0 === n && (n = null),
          (this.callback = t),
          (this.mask = e),
          (this.scope = n),
          (this.unregisterOnNextCall = !1),
          (this._willBeUnregistered = !1)
      }
      e.Observer = p
      var u = (function() {
        function t() {
          ;(this._observers = null), (this._observables = null)
        }
        return (
          (t.Watch = function(e, n, o, r) {
            var s, a
            void 0 === o && (o = -1), void 0 === r && (r = null)
            var p = new t()
            ;(p._observers = new Array()), (p._observables = e)
            try {
              for (var u = i(e), l = u.next(); !l.done; l = u.next()) {
                var c = l.value.add(n, o, !1, r)
                c && p._observers.push(c)
              }
            } catch (t) {
              s = { error: t }
            } finally {
              try {
                l && !l.done && (a = u.return) && a.call(u)
              } finally {
                if (s) throw s.error
              }
            }
            return p
          }),
          (t.prototype.dispose = function() {
            if (this._observers && this._observables)
              for (var t = 0; t < this._observers.length; t++) this._observables[t].remove(this._observers[t])
            ;(this._observers = null), (this._observables = null)
          }),
          t
        )
      })()
      e.MultiObserver = u
      var l = (function() {
        function t(t) {
          ;(this._observers = new Array()), (this._onObserverAdded = null), (this._eventState = new a(0)), t && (this._onObserverAdded = t)
        }
        return (
          (t.prototype.add = function(t, e, n, o, r) {
            if ((void 0 === e && (e = -1), void 0 === n && (n = !1), void 0 === o && (o = null), void 0 === r && (r = !1), !t)) return null
            var i = new p(t, e, o)
            return (
              (i.unregisterOnNextCall = r),
              n ? this._observers.unshift(i) : this._observers.push(i),
              this._onObserverAdded && this._onObserverAdded(i),
              i
            )
          }),
          (t.prototype.addOnce = function(t) {
            return this.add(t, void 0, void 0, void 0, !0)
          }),
          (t.prototype.remove = function(t) {
            return !!t && -1 !== this._observers.indexOf(t) && (this._deferUnregister(t), !0)
          }),
          (t.prototype.removeCallback = function(t, e) {
            for (var n = 0; n < this._observers.length; n++)
              if (this._observers[n].callback === t && (!e || e === this._observers[n].scope))
                return this._deferUnregister(this._observers[n]), !0
            return !1
          }),
          (t.prototype.notifyObservers = function(t, e, n, o) {
            var r, s
            if ((void 0 === e && (e = -1), !this._observers.length)) return !0
            var a = this._eventState
            ;(a.mask = e), (a.target = n), (a.currentTarget = o), (a.skipNextObservers = !1), (a.lastReturnValue = t)
            try {
              for (var p = i(this._observers), u = p.next(); !u.done; u = p.next()) {
                var l = u.value
                if (
                  !l._willBeUnregistered &&
                  (l.mask & e &&
                    (l.scope ? (a.lastReturnValue = l.callback.apply(l.scope, [t, a])) : (a.lastReturnValue = l.callback(t, a)),
                    l.unregisterOnNextCall && this._deferUnregister(l)),
                  a.skipNextObservers)
                )
                  return !1
              }
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                u && !u.done && (s = p.return) && s.call(p)
              } finally {
                if (r) throw r.error
              }
            }
            return !0
          }),
          (t.prototype.notifyObserversWithPromise = function(t, e, n, o) {
            var r = this
            void 0 === e && (e = -1)
            var i = Promise.resolve(t)
            if (!this._observers.length) return i
            var s = this._eventState
            return (
              (s.mask = e),
              (s.target = n),
              (s.currentTarget = o),
              (s.skipNextObservers = !1),
              this._observers.forEach(function(n) {
                s.skipNextObservers ||
                  n._willBeUnregistered ||
                  (n.mask & e &&
                    ((i = n.scope
                      ? i.then(function(e) {
                          return (s.lastReturnValue = e), n.callback.apply(n.scope, [t, s])
                        })
                      : i.then(function(e) {
                          return (s.lastReturnValue = e), n.callback(t, s)
                        })),
                    n.unregisterOnNextCall && r._deferUnregister(n)))
              }),
              i.then(function() {
                return t
              })
            )
          }),
          (t.prototype.notifyObserver = function(t, e, n) {
            void 0 === n && (n = -1)
            var o = this._eventState
            ;(o.mask = n), (o.skipNextObservers = !1), t.callback(e, o)
          }),
          (t.prototype.hasObservers = function() {
            return this._observers.length > 0
          }),
          (t.prototype.clear = function() {
            ;(this._observers = new Array()), (this._onObserverAdded = null)
          }),
          (t.prototype.clone = function() {
            var e = new t()
            return (e._observers = this._observers.slice(0)), e
          }),
          (t.prototype.hasSpecificMask = function(t) {
            var e, n
            void 0 === t && (t = -1)
            try {
              for (var o = i(this._observers), r = o.next(); !r.done; r = o.next()) {
                var s = r.value
                if (s.mask & t || s.mask === t) return !0
              }
            } catch (t) {
              e = { error: t }
            } finally {
              try {
                r && !r.done && (n = o.return) && n.call(o)
              } finally {
                if (e) throw e.error
              }
            }
            return !1
          }),
          (t.prototype._deferUnregister = function(t) {
            var e = this
            ;(t.unregisterOnNextCall = !1),
              (t._willBeUnregistered = !0),
              s.executeTask(function() {
                return o(e, void 0, void 0, function() {
                  return r(this, function(e) {
                    return [2, this._remove(t)]
                  })
                })
              })
          }),
          (t.prototype._remove = function(t) {
            if (!t) return !1
            var e = this._observers.indexOf(t)
            return -1 !== e && (this._observers.splice(e, 1), !0)
          }),
          t
        )
      })()
      e.Observable = l
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Vector4 = void 0)
      var o = n(2),
        r = n(6),
        i = n(3),
        s = (function() {
          function t(t, e, n, o) {
            ;(this.x = t), (this.y = e), (this.z = n), (this.w = o)
          }
          return (
            (t.Add = function(e, n) {
              return new t(e.x, e.y, e.z, e.w).addInPlace(n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1]), (n.z = t[e + 2]), (n.w = t[e + 3])
            }),
            (t.FromFloatArrayToRef = function(e, n, o) {
              t.FromArrayToRef(e, n, o)
            }),
            (t.FromFloatsToRef = function(t, e, n, o, r) {
              ;(r.x = t), (r.y = e), (r.z = n), (r.w = o)
            }),
            (t.Zero = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.One = function() {
              return new t(1, 1, 1, 1)
            }),
            (t.Normalize = function(e) {
              var n = t.Zero()
              return t.NormalizeToRef(e, n), n
            }),
            (t.NormalizeToRef = function(t, e) {
              e.copyFrom(t), e.normalize()
            }),
            (t.Minimize = function(e, n) {
              var o = new t(e.x, e.y, e.z, e.w)
              return o.minimizeInPlace(n), o
            }),
            (t.Maximize = function(e, n) {
              var o = new t(e.x, e.y, e.z, e.w)
              return o.maximizeInPlace(n), o
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y,
                r = t.z - e.z,
                i = t.w - e.w
              return n * n + o * o + r * r + i * i
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.TransformNormal = function(e, n) {
              var o = t.Zero()
              return t.TransformNormalToRef(e, n, o), o
            }),
            (t.TransformNormalToRef = function(t, e, n) {
              var o = e.m,
                r = t.x * o[0] + t.y * o[4] + t.z * o[8],
                i = t.x * o[1] + t.y * o[5] + t.z * o[9],
                s = t.x * o[2] + t.y * o[6] + t.z * o[10]
              ;(n.x = r), (n.y = i), (n.z = s), (n.w = t.w)
            }),
            (t.TransformNormalFromFloatsToRef = function(t, e, n, o, r, i) {
              var s = r.m
              ;(i.x = t * s[0] + e * s[4] + n * s[8]),
                (i.y = t * s[1] + e * s[5] + n * s[9]),
                (i.z = t * s[2] + e * s[6] + n * s[10]),
                (i.w = o)
            }),
            (t.prototype.toString = function() {
              return '{X: ' + this.x + ' Y:' + this.y + ' Z:' + this.z + ' W:' + this.w + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector4'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))) ^ (this.w || 0))
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), (t[e + 3] = this.w), this
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z, this.w + e.w)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.x = this.x + t.x), (e.y = this.y + t.y), (e.z = this.z + t.z), (e.w = this.w + t.w), this
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z, this.w - e.w)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.x = this.x - t.x), (e.y = this.y - t.y), (e.z = this.z - t.z), (e.w = this.w - t.w), this
            }),
            (t.prototype.subtractFromFloats = function(e, n, o, r) {
              return new t(this.x - e, this.y - n, this.z - o, this.w - r)
            }),
            (t.prototype.subtractFromFloatsToRef = function(t, e, n, o, r) {
              return (r.x = this.x - t), (r.y = this.y - e), (r.z = this.z - n), (r.w = this.w - o), this
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y, -this.z, -this.w)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e, this.w * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), (e.z = this.z * t), (e.w = this.w * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), (e.z += this.z * t), (e.w += this.w * t), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return (
                void 0 === e && (e = o.Epsilon),
                t &&
                  r.Scalar.WithinEpsilon(this.x, t.x, e) &&
                  r.Scalar.WithinEpsilon(this.y, t.y, e) &&
                  r.Scalar.WithinEpsilon(this.z, t.z, e) &&
                  r.Scalar.WithinEpsilon(this.w, t.w, e)
              )
            }),
            (t.prototype.equalsToFloats = function(t, e, n, o) {
              return this.x === t && this.y === e && this.z === n && this.w === o
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.x * e.x, this.y * e.y, this.z * e.z, this.w * e.w)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.x = this.x * t.x), (e.y = this.y * t.y), (e.z = this.z * t.z), (e.w = this.w * t.w), this
            }),
            (t.prototype.multiplyByFloats = function(e, n, o, r) {
              return new t(this.x * e, this.y * n, this.z * o, this.w * r)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y, this.z / e.z, this.w / e.w)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return (e.x = this.x / t.x), (e.y = this.y / t.y), (e.z = this.z / t.z), (e.w = this.w / t.w), this
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.minimizeInPlace = function(t) {
              return (
                t.x < this.x && (this.x = t.x),
                t.y < this.y && (this.y = t.y),
                t.z < this.z && (this.z = t.z),
                t.w < this.w && (this.w = t.w),
                this
              )
            }),
            (t.prototype.maximizeInPlace = function(t) {
              return (
                t.x > this.x && (this.x = t.x),
                t.y > this.y && (this.y = t.y),
                t.z > this.z && (this.z = t.z),
                t.w > this.w && (this.w = t.w),
                this
              )
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z), Math.floor(this.w))
            }),
            (t.prototype.fract = function() {
              return new t(
                this.x - Math.floor(this.x),
                this.y - Math.floor(this.y),
                this.z - Math.floor(this.z),
                this.w - Math.floor(this.w)
              )
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }),
            (t.prototype.normalize = function() {
              var t = this.length()
              return 0 === t ? this : this.scaleInPlace(1 / t)
            }),
            (t.prototype.toVector3 = function() {
              return new i.Vector3(this.x, this.y, this.z)
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z, this.w)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.x = t), (this.y = e), (this.z = n), (this.w = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.setAll = function(t) {
              return (this.x = this.y = this.z = this.w = t), this
            }),
            t
          )
        })()
      e.Vector4 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Angle = void 0)
      var o = (function() {
        function t(t) {
          ;(this._radians = t), this._radians < 0 && (this._radians += 2 * Math.PI)
        }
        return (
          (t.BetweenTwoPoints = function(e, n) {
            var o = n.subtract(e)
            return new t(Math.atan2(o.y, o.x))
          }),
          (t.FromRadians = function(e) {
            return new t(e)
          }),
          (t.FromDegrees = function(e) {
            return new t((e * Math.PI) / 180)
          }),
          (t.prototype.degrees = function() {
            return (180 * this._radians) / Math.PI
          }),
          (t.prototype.radians = function() {
            return this._radians
          }),
          t
        )
      })()
      e.Angle = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Arc2 = void 0)
      var o = n(22),
        r = n(15),
        i = n(2),
        s = function(t, e, n) {
          ;(this.startPoint = t), (this.midPoint = e), (this.endPoint = n)
          var s = Math.pow(e.x, 2) + Math.pow(e.y, 2),
            a = (Math.pow(t.x, 2) + Math.pow(t.y, 2) - s) / 2,
            p = (s - Math.pow(n.x, 2) - Math.pow(n.y, 2)) / 2,
            u = (t.x - e.x) * (e.y - n.y) - (e.x - n.x) * (t.y - e.y)
          ;(this.centerPoint = new r.Vector2((a * (e.y - n.y) - p * (t.y - e.y)) / u, ((t.x - e.x) * p - (e.x - n.x) * a) / u)),
            (this.radius = this.centerPoint.subtract(this.startPoint).length()),
            (this.startAngle = o.Angle.BetweenTwoPoints(this.centerPoint, this.startPoint))
          var l = this.startAngle.degrees(),
            c = o.Angle.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
            h = o.Angle.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees()
          c - l > 180 && (c -= 360),
            c - l < -180 && (c += 360),
            h - c > 180 && (h -= 360),
            h - c < -180 && (h += 360),
            (this.orientation = c - l < 0 ? i.Orientation.CW : i.Orientation.CCW),
            (this.angle = o.Angle.FromDegrees(this.orientation === i.Orientation.CW ? l - h : h - l))
        }
      e.Arc2 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Color4 = void 0)
      var o = n(6),
        r = n(2),
        i = (function() {
          function t(t, e, n, o) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = 1),
              (this.r = t),
              (this.g = e),
              (this.b = n),
              (this.a = o)
          }
          return (
            (t.FromHexString = function(e) {
              if ('#' !== e.substring(0, 1) || 9 !== e.length) return new t(0, 0, 0, 0)
              var n = parseInt(e.substring(1, 3), 16),
                o = parseInt(e.substring(3, 5), 16),
                r = parseInt(e.substring(5, 7), 16),
                i = parseInt(e.substring(7, 9), 16)
              return t.FromInts(n, o, r, i)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.r = t.r + (e.r - t.r) * n), (o.g = t.g + (e.g - t.g) * n), (o.b = t.b + (e.b - t.b) * n), (o.a = t.a + (e.a - t.a) * n)
            }),
            (t.Red = function() {
              return new t(1, 0, 0, 1)
            }),
            (t.Green = function() {
              return new t(0, 1, 0, 1)
            }),
            (t.Blue = function() {
              return new t(0, 0, 1, 1)
            }),
            (t.Black = function() {
              return new t(0, 0, 0, 1)
            }),
            (t.White = function() {
              return new t(1, 1, 1, 1)
            }),
            (t.Purple = function() {
              return new t(0.5, 0, 0.5, 1)
            }),
            (t.Magenta = function() {
              return new t(1, 0, 1, 1)
            }),
            (t.Yellow = function() {
              return new t(1, 1, 0, 1)
            }),
            (t.Gray = function() {
              return new t(0.5, 0.5, 0.5, 1)
            }),
            (t.Teal = function() {
              return new t(0, 1, 1, 1)
            }),
            (t.Clear = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.FromColor3 = function(e, n) {
              return void 0 === n && (n = 1), new t(e.r, e.g, e.b, n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromInts = function(e, n, o, r) {
              return new t(e / 255, n / 255, o / 255, r / 255)
            }),
            (t.CheckColors4 = function(t, e) {
              if (t.length === 3 * e) {
                for (var n = [], o = 0; o < t.length; o += 3) {
                  var r = (o / 3) * 4
                  ;(n[r] = t[o]), (n[r + 1] = t[o + 1]), (n[r + 2] = t[o + 2]), (n[r + 3] = 1)
                }
                return n
              }
              return t
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.r += t.r), (this.g += t.g), (this.b += t.b), (this.a += t.a), this
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), (t[e + 3] = this.a), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.r + e.r, this.g + e.g, this.b + e.b, this.a + e.a)
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.r - e.r, this.g - e.g, this.b - e.b, this.a - e.a)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.r = this.r - t.r), (e.g = this.g - t.g), (e.b = this.b - t.b), (e.a = this.a - t.a), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.r * e, this.g * e, this.b * e, this.a * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.r = this.r * t), (e.g = this.g * t), (e.b = this.b * t), (e.a = this.a * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.r += this.r * t), (e.g += this.g * t), (e.b += this.b * t), (e.a += this.a * t), this
            }),
            (t.prototype.clampToRef = function(t, e, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                (n.r = o.Scalar.Clamp(this.r, t, e)),
                (n.g = o.Scalar.Clamp(this.g, t, e)),
                (n.b = o.Scalar.Clamp(this.b, t, e)),
                (n.a = o.Scalar.Clamp(this.a, t, e)),
                this
              )
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.r * e.r, this.g * e.g, this.b * e.b, this.a * e.a)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.r = this.r * t.r), (e.g = this.g * t.g), (e.b = this.b * t.b), (e.a = this.a * t.a), e
            }),
            (t.prototype.toString = function() {
              return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + ' A:' + this.a + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Color4'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.r || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.g || 0))) ^ (this.b || 0))) ^ (this.a || 0))
            }),
            (t.prototype.clone = function() {
              return new t(this.r, this.g, this.b, this.a)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.r = t.r), (this.g = t.g), (this.b = t.b), (this.a = t.a), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.r = t), (this.g = e), (this.b = n), (this.a = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.toHexString = function() {
              var t = (255 * this.r) | 0,
                e = (255 * this.g) | 0,
                n = (255 * this.b) | 0,
                r = (255 * this.a) | 0
              return '#' + o.Scalar.ToHex(t) + o.Scalar.ToHex(e) + o.Scalar.ToHex(n) + o.Scalar.ToHex(r)
            }),
            (t.prototype.toLinearSpace = function() {
              var e = new t()
              return this.toLinearSpaceToRef(e), e
            }),
            (t.prototype.toLinearSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, r.ToLinearSpace)),
                (t.g = Math.pow(this.g, r.ToLinearSpace)),
                (t.b = Math.pow(this.b, r.ToLinearSpace)),
                (t.a = this.a),
                this
              )
            }),
            (t.prototype.toGammaSpace = function() {
              var e = new t()
              return this.toGammaSpaceToRef(e), e
            }),
            (t.prototype.toGammaSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, r.ToGammaSpace)),
                (t.g = Math.pow(this.g, r.ToGammaSpace)),
                (t.b = Math.pow(this.b, r.ToGammaSpace)),
                (t.a = this.a),
                this
              )
            }),
            t
          )
        })()
      e.Color4 = i
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Plane = void 0)
      var o = n(3),
        r = n(11),
        i = n(9),
        s = (function() {
          function t(t, e, n, r) {
            ;(this.normal = new o.Vector3(t, e, n)), (this.d = r)
          }
          return (
            (t.FromArray = function(e) {
              return new t(e[0], e[1], e[2], e[3])
            }),
            (t.FromPoints = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return r.copyFromPoints(e, n, o), r
            }),
            (t.FromPositionAndNormal = function(e, n) {
              var o = new t(0, 0, 0, 0)
              return n.normalize(), (o.normal = n), (o.d = -(n.x * e.x + n.y * e.y + n.z * e.z)), o
            }),
            (t.SignedDistanceToPlaneFromPositionAndNormal = function(t, e, n) {
              var r = -(e.x * t.x + e.y * t.y + e.z * t.z)
              return o.Vector3.Dot(n, e) + r
            }),
            (t.prototype.asArray = function() {
              return [this.normal.x, this.normal.y, this.normal.z, this.d]
            }),
            (t.prototype.clone = function() {
              return new t(this.normal.x, this.normal.y, this.normal.z, this.d)
            }),
            (t.prototype.getClassName = function() {
              return 'Plane'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.normal.getHashCode()
              return (t = (397 * t) ^ (this.d || 0))
            }),
            (t.prototype.normalize = function() {
              var t = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z),
                e = 0
              return 0 !== t && (e = 1 / t), (this.normal.x *= e), (this.normal.y *= e), (this.normal.z *= e), (this.d *= e), this
            }),
            (t.prototype.transform = function(e) {
              var n = i.MathTmp.Matrix[0]
              r.Matrix.TransposeToRef(e, n)
              var o = n.m,
                s = this.normal.x,
                a = this.normal.y,
                p = this.normal.z,
                u = this.d
              return new t(
                s * o[0] + a * o[1] + p * o[2] + u * o[3],
                s * o[4] + a * o[5] + p * o[6] + u * o[7],
                s * o[8] + a * o[9] + p * o[10] + u * o[11],
                s * o[12] + a * o[13] + p * o[14] + u * o[15]
              )
            }),
            (t.prototype.dotCoordinate = function(t) {
              return this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z + this.d
            }),
            (t.prototype.copyFromPoints = function(t, e, n) {
              var o,
                r = e.x - t.x,
                i = e.y - t.y,
                s = e.z - t.z,
                a = n.x - t.x,
                p = n.y - t.y,
                u = n.z - t.z,
                l = i * u - s * p,
                c = s * a - r * u,
                h = r * p - i * a,
                d = Math.sqrt(l * l + c * c + h * h)
              return (
                (o = 0 !== d ? 1 / d : 0),
                (this.normal.x = l * o),
                (this.normal.y = c * o),
                (this.normal.z = h * o),
                (this.d = -(this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z)),
                this
              )
            }),
            (t.prototype.isFrontFacingTo = function(t, e) {
              return o.Vector3.Dot(this.normal, t) <= e
            }),
            (t.prototype.signedDistanceTo = function(t) {
              return o.Vector3.Dot(t, this.normal) + this.d
            }),
            t
          )
        })()
      e.Plane = s
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.AnimationState = void 0)
      var a = n(0),
        p = n(1),
        u = { looping: !0, speed: 1, weight: 1 },
        l = (function(t) {
          function e(e, n) {
            void 0 === n && (n = u)
            var o = t.call(this) || this
            return (
              (o.isAnimationClip = !0),
              (o.looping = u.looping),
              (o.weight = u.weight),
              (o.playing = !1),
              (o.shouldReset = !1),
              (o.speed = u.speed),
              (o.name = p.newId('AnimClip')),
              (o.clip = e),
              o.setParams(i({}, n)),
              o
            )
          }
          return (
            r(e, t),
            (e.prototype.setParams = function(t) {
              return (this.looping = void 0 !== t.looping ? t.looping : this.looping), (this.speed = t.speed || this.speed), this
            }),
            (e.prototype.toJSON = function() {
              var e = JSON.parse(JSON.stringify(t.prototype.toJSON.call(this)))
              return this.shouldReset && (this.shouldReset = !1), e
            }),
            (e.prototype.play = function() {
              this.playing = !0
            }),
            (e.prototype.pause = function() {
              this.playing = !1
            }),
            (e.prototype.reset = function() {
              this.shouldReset = !0
            }),
            (e.prototype.stop = function() {
              this.reset(), this.pause()
            }),
            s([a.ObservableComponent.readonly], e.prototype, 'clip', void 0),
            s([a.ObservableComponent.field], e.prototype, 'looping', void 0),
            s([a.ObservableComponent.field], e.prototype, 'weight', void 0),
            s([a.ObservableComponent.field], e.prototype, 'playing', void 0),
            s([a.ObservableComponent.field], e.prototype, 'shouldReset', void 0),
            s([a.ObservableComponent.field], e.prototype, 'speed', void 0),
            s([a.ObservableComponent.readonly], e.prototype, 'name', void 0),
            e
          )
        })(a.ObservableComponent)
      e.AnimationState = l
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AVATAR_OBSERVABLE = e.InputEventType = void 0),
        (function(t) {
          ;(t[(t.DOWN = 0)] = 'DOWN'), (t[(t.UP = 1)] = 'UP')
        })(e.InputEventType || (e.InputEventType = {})),
        (e.AVATAR_OBSERVABLE = 'AVATAR_OBSERVABLE')
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.PhysicsCast = void 0)
      var o,
        r = n(5),
        i = n(1),
        s = n(29)
      !(function(t) {
        ;(t.HitFirst = 'rqhf'), (t.HitAll = 'rqha')
      })(o || (o = {}))
      var a = (function() {
        function t() {
          this.queries = {}
        }
        return (
          Object.defineProperty(t, 'instance', {
            get: function() {
              return t.ensureInstance(), t._instance
            },
            enumerable: !1,
            configurable: !0
          }),
          (t.ensureInstance = function() {
            t._instance || (t._instance = new t())
          }),
          (t.prototype.getRayFromCamera = function(t) {
            var e = s.Camera.instance.rotation,
              n = r.Matrix.Identity()
            e.toRotationMatrix(n)
            var o = r.Vector3.TransformCoordinates(r.Vector3.Forward(), n)
            return { origin: s.Camera.instance.position, direction: o, distance: t }
          }),
          (t.prototype.getRayFromPositions = function(t, e) {
            var n = e.subtract(t),
              o = n.length()
            return { origin: t, direction: n.normalize(), distance: o }
          }),
          (t.prototype.hitFirst = function(t, e, n) {
            var r = 'number' == typeof n ? o.HitFirst + n : i.uuid()
            ;(this.queries[r] = e), dcl && dcl.query('raycast', { queryId: r, queryType: 'HitFirst', ray: t })
          }),
          (t.prototype.hitAll = function(t, e, n) {
            var r = 'number' == typeof n ? o.HitAll + n : i.uuid()
            ;(this.queries[r] = e), dcl && dcl.query('raycast', { queryId: r, queryType: 'HitAll', ray: t })
          }),
          (t.prototype.hitFirstAvatar = function(t, e) {
            i.log('not implemented yet')
          }),
          (t.prototype.hitAllAvatars = function(t, e) {
            i.log('not implemented yet')
          }),
          (t.prototype.handleRaycastHitFirstResponse = function(t) {
            this.queries[t.payload.queryId](t.payload.payload), delete this.queries[t.payload.queryId]
          }),
          (t.prototype.handleRaycastHitAllResponse = function(t) {
            this.queries[t.payload.queryId](t.payload.payload), delete this.queries[t.payload.queryId]
          }),
          t
        )
      })()
      e.PhysicsCast = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Camera = void 0)
      var o = n(5),
        r = (function() {
          function t() {
            var t = this
            ;(this.position = new o.Vector3()),
              (this.rotation = new o.Quaternion()),
              (this.feetPosition = new o.Vector3()),
              (this.worldPosition = new o.Vector3()),
              (this.lastEventPosition = { x: 0, y: 0, z: 0 }),
              (this.lastEventWorldPosition = { x: 0, y: 0, z: 0 }),
              (this.lastEventRotation = { x: 0, y: 0, z: 0, w: 1 }),
              (this._playerHeight = 1.6),
              'undefined' != typeof dcl &&
                (dcl.subscribe('positionChanged'),
                dcl.subscribe('rotationChanged'),
                dcl.onEvent(function(e) {
                  switch (e.type) {
                    case 'positionChanged':
                      t.positionChanged(e.data)
                      break
                    case 'rotationChanged':
                      t.rotationChanged(e.data)
                  }
                })),
              Object.defineProperty(this.position, 'x', {
                get: function() {
                  return t.lastEventPosition.x
                }
              }),
              Object.defineProperty(this.position, 'y', {
                get: function() {
                  return t.lastEventPosition.y
                }
              }),
              Object.defineProperty(this.position, 'z', {
                get: function() {
                  return t.lastEventPosition.z
                }
              }),
              Object.defineProperty(this.worldPosition, 'x', {
                get: function() {
                  return t.lastEventWorldPosition.x
                }
              }),
              Object.defineProperty(this.worldPosition, 'y', {
                get: function() {
                  return t.lastEventWorldPosition.y
                }
              }),
              Object.defineProperty(this.worldPosition, 'z', {
                get: function() {
                  return t.lastEventWorldPosition.z
                }
              }),
              Object.defineProperty(this.feetPosition, 'x', {
                get: function() {
                  return t.lastEventPosition.x
                }
              }),
              Object.defineProperty(this.feetPosition, 'y', {
                get: function() {
                  return t.lastEventPosition.y - t.playerHeight
                }
              }),
              Object.defineProperty(this.feetPosition, 'z', {
                get: function() {
                  return t.lastEventPosition.z
                }
              }),
              Object.defineProperty(this.rotation, 'x', {
                get: function() {
                  return t.lastEventRotation.x
                }
              }),
              Object.defineProperty(this.rotation, 'y', {
                get: function() {
                  return t.lastEventRotation.y
                }
              }),
              Object.defineProperty(this.rotation, 'z', {
                get: function() {
                  return t.lastEventRotation.z
                }
              }),
              Object.defineProperty(this.rotation, 'w', {
                get: function() {
                  return t.lastEventRotation.w
                }
              })
          }
          return (
            Object.defineProperty(t, 'instance', {
              get: function() {
                return t._instance || (t._instance = new t()), t._instance
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'playerHeight', {
              get: function() {
                return this._playerHeight
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.positionChanged = function(t) {
              ;(this.lastEventPosition = t.position),
                (this.lastEventWorldPosition = t.cameraPosition),
                (this._playerHeight = t.playerHeight)
            }),
            (t.prototype.rotationChanged = function(t) {
              this.lastEventRotation = t.quaternion
            }),
            t
          )
        })()
      e.Camera = r
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function(t, e, n, o) {
                void 0 === o && (o = n),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function() {
                      return e[n]
                    }
                  })
              }
            : function(t, e, n, o) {
                void 0 === o && (o = n), (t[o] = e[n])
              }),
        r =
          (this && this.__exportStar) ||
          function(t, e) {
            for (var n in t) 'default' === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.engine = void 0),
        r(n(31), e),
        r(n(17), e),
        r(n(0), e),
        r(n(12), e),
        r(n(7), e),
        r(n(19), e),
        r(n(1), e),
        r(n(20), e),
        r(n(18), e),
        r(n(8), e),
        r(n(33), e),
        r(n(34), e)
      var i = n(35),
        s = n(17),
        a = new (n(12).Entity)('scene')
      a.uuid = '0'
      var p = new s.Engine(a)
      ;(e.engine = p),
        (n(0).DisposableComponent.engine = p),
        'undefined' != typeof dcl && p.addSystem(new i.DecentralandSynchronizationSystem(dcl), 1 / 0)
      var u = n(14)
      p.addSystem(u.uuidEventSystem),
        p.addSystem(u.pointerEventSystem),
        p.addSystem(u.raycastEventSystem),
        r(n(27), e),
        r(n(4), e),
        r(n(14), e),
        r(n(13), e),
        r(n(29), e),
        r(n(5), e),
        r(n(26), e),
        r(n(16), e),
        r(n(44), e),
        r(n(45), e),
        r(n(46), e),
        r(n(47), e),
        r(n(48), e),
        r(n(49), e),
        r(n(28), e)
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Attachable = void 0)
      var o = (function() {
        function t() {}
        return (
          (t.AVATAR = {
            getEntityRepresentation: function(t) {
              return t.avatarEntity
            }
          }),
          (t.FIRST_PERSON_CAMERA = {
            getEntityRepresentation: function(t) {
              return t.firstPersonCameraEntity
            }
          }),
          t
        )
      })()
      e.Attachable = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.ComponentGroup = void 0)
      var o = n(0),
        r = (function() {
          function t() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
            if (((this.entities = []), (this.active = !1), (this._requiresNames = []), !t))
              throw new Error('ComponentGroup: Could not load the requires list')
            if (!(t instanceof Array)) throw new Error('ComponentGroup: requires list is not an Array')
            Object.defineProperty(this, 'requires', {
              get: function() {
                return t.slice()
              }
            }),
              Object.defineProperty(this, 'requiresNames', {
                get: function() {
                  return this._requiresNames.slice()
                }
              })
            for (
              var n = function(e) {
                  var n = t[e],
                    i = null
                  if (!n) throw new Error('ComponentGroup: the required component at location ' + e + ' is invalid')
                  try {
                    i = o.getComponentName(n)
                  } catch (t) {
                    throw new Error(
                      'ComponentGroup: the required component at location ' +
                        e +
                        ' is not registered as a @Component. Remember to provide the class of the component, not the name'
                    )
                  }
                  if (
                    r._requiresNames.some(function(t) {
                      return t === i
                    })
                  )
                    throw new Error('ComponentGroup: the required component list has a repeated name ' + i)
                  r._requiresNames.push(i)
                },
                r = this,
                i = 0;
              i < t.length;
              i++
            )
              n(i)
          }
          return (
            (t.prototype.hasEntity = function(t) {
              return !!t.isAddedToEngine() && -1 !== this.entities.indexOf(t)
            }),
            (t.prototype.addEntity = function(t) {
              if (!t.isAddedToEngine()) throw new TypeError('ComponentGroup: Cannot add a entity that is not added to the engine')
              ;-1 === this.entities.indexOf(t) && this.entities.push(t)
            }),
            (t.prototype.removeEntity = function(t) {
              var e = this.entities.indexOf(t)
              ;-1 !== e && this.entities.splice(e, 1)
            }),
            (t.prototype.componentRemoved = function(t, e) {
              ;-1 !== this._requiresNames.indexOf(e) && this.removeEntity(t)
            }),
            (t.prototype.meetsRequirements = function(t) {
              for (var e = 0; e < this._requiresNames.length; e++) {
                if (!(this._requiresNames[e] in t.components)) return !1
              }
              return !0
            }),
            t
          )
        })()
      e.ComponentGroup = r
    },
    function(t, e, n) {
      'use strict'
      var o
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.teleportTo = void 0),
        (e.teleportTo = function(t) {
          var e, n
          ;(e = 'requestTeleport'),
            (n = [t]),
            void 0 === o && 'undefined' != typeof dcl && (o = dcl.loadModule('@decentraland/UserActionModule')),
            void 0 !== o &&
              'undefined' != typeof dcl &&
              o.then(function(t) {
                dcl.callRpc(t.rpcHandle, e, n)
              })
        })
    },
    function(t, e, n) {
      'use strict'
      var o
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.movePlayerTo = void 0),
        (e.movePlayerTo = function(t, e) {
          var n, r
          ;(n = 'movePlayerTo'),
            (r = [t, e]),
            void 0 === o && 'undefined' != typeof dcl && (o = dcl.loadModule('@decentraland/RestrictedActionModule')),
            void 0 !== o &&
              'undefined' != typeof dcl &&
              o.then(function(t) {
                dcl.callRpc(t.rpcHandle, n, r)
              })
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.DecentralandSynchronizationSystem = void 0)
      var o = n(0),
        r = n(7),
        i = n(13),
        s = (function() {
          function t(t) {
            ;(this.dcl = t), (this.cachedComponents = {})
          }
          return (
            (t.prototype.activate = function(t) {
              var e = this
              ;(this.engine = t),
                t.eventManager.addListener(r.ComponentAdded, this, this.componentAdded),
                t.eventManager.addListener(r.ComponentRemoved, this, this.componentRemoved),
                t.eventManager.addListener(o.DisposableComponentCreated, this, this.disposableComponentCreated),
                t.eventManager.addListener(o.DisposableComponentRemoved, this, this.disposableComponentRemoved),
                t.eventManager.addListener(o.DisposableComponentUpdated, this, this.disposableComponentUpdated),
                t.eventManager.addListener(r.ParentChanged, this, this.parentChanged)
              var n = t.rootEntity.uuid
              this.dcl.addEntity(n),
                this.dcl.onUpdate(function(n) {
                  t.update(n), e.presentEntities()
                }),
                this.dcl.onEvent(function(e) {
                  var n = e.data
                  switch (e.type) {
                    case 'uuidEvent':
                      t.eventManager.fireEvent(new i.UUIDEvent(n.uuid, n.payload))
                      break
                    case 'raycastResponse':
                      ;('HitFirst' === n.queryType || 'HitAll' === n.queryType) && t.eventManager.fireEvent(new i.RaycastResponse(n))
                      break
                    case 'pointerEvent':
                      t.eventManager.fireEvent(new i.PointerEvent(n.payload))
                  }
                })
            }),
            (t.prototype.onAddEntity = function(t) {
              if (t && t.isAddedToEngine()) {
                var e = t.uuid,
                  n = t.getParent()
                for (var r in (this.dcl.addEntity(e), n && this.dcl.setParent(e, n.uuid), (this.cachedComponents[e] = {}), t.components)) {
                  var i = t.components[r],
                    s = o.getComponentClassId(i)
                  if (null !== s)
                    if (o.isDisposableComponent(i)) this.dcl.attachEntityComponent(t.uuid, r, o.getComponentId(i))
                    else {
                      var a = JSON.stringify(i)
                      this.dcl.updateEntityComponent(e, r, s, a), (this.cachedComponents[e][r] = a)
                    }
                }
              }
            }),
            (t.prototype.onRemoveEntity = function(t) {
              if (t.isAddedToEngine()) {
                var e = t.uuid
                this.dcl.removeEntity(e), delete this.cachedComponents[e]
              }
            }),
            (t.prototype.presentEntities = function() {
              for (var t in this.engine.entities) {
                var e = this.engine.entities[t]
                for (var n in e.components) {
                  var r = e.components[n],
                    i = o.getComponentClassId(r)
                  if (null !== i && !o.isDisposableComponent(r)) {
                    var s = this.getJsonIfDirty(e.uuid, n, r)
                    s && (this.dcl.updateEntityComponent(e.uuid, n, i, s), this.clearDirty(e.uuid, n, r, s))
                  }
                }
              }
              for (var a in this.engine.disposableComponents) {
                ;(r = this.engine.disposableComponents[a]) instanceof o.ObservableComponent &&
                  r.dirty &&
                  (this.dcl.componentUpdated(a, JSON.stringify(r)), (r.dirty = !1))
              }
            }),
            (t.prototype.componentAdded = function(t) {
              if (t.entity.isAddedToEngine()) {
                var e = t.entity.components[t.componentName]
                if (o.isDisposableComponent(e)) this.dcl.attachEntityComponent(t.entity.uuid, t.componentName, o.getComponentId(e))
                else if (null !== t.classId) {
                  var n = JSON.stringify(e)
                  this.dcl.updateEntityComponent(t.entity.uuid, t.componentName, t.classId, n),
                    (this.cachedComponents[t.entity.uuid][t.componentName] = n)
                }
              }
            }),
            (t.prototype.componentRemoved = function(t) {
              t.entity.isAddedToEngine() &&
                (this.dcl.removeEntityComponent(t.entity.uuid, t.componentName),
                delete this.cachedComponents[t.entity.uuid][t.componentName])
            }),
            (t.prototype.disposableComponentCreated = function(t) {
              this.dcl.componentCreated(t.componentId, t.componentName, t.classId)
            }),
            (t.prototype.disposableComponentRemoved = function(t) {
              this.dcl.componentDisposed(t.componentId)
            }),
            (t.prototype.disposableComponentUpdated = function(t) {
              this.dcl.componentUpdated(t.componentId, JSON.stringify(t.component))
            }),
            (t.prototype.parentChanged = function(t) {
              this.dcl.setParent(t.entity.uuid, t.parent ? t.parent.uuid : '0')
            }),
            (t.prototype.getJsonIfDirty = function(t, e, n) {
              var o = JSON.stringify(n)
              return o !== this.cachedComponents[t][e] && o
            }),
            (t.prototype.clearDirty = function(t, e, n, o) {
              this.cachedComponents[t][e] = o
            }),
            t
          )
        })()
      e.DecentralandSynchronizationSystem = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Axis = void 0)
      var o = n(3),
        r = (function() {
          function t() {}
          return (t.X = new o.Vector3(1, 0, 0)), (t.Y = new o.Vector3(0, 1, 0)), (t.Z = new o.Vector3(0, 0, 1)), t
        })()
      e.Axis = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.BezierCurve = void 0)
      var o = (function() {
        function t() {}
        return (
          (t.Interpolate = function(t, e, n, o, r) {
            for (var i = 1 - 3 * o + 3 * e, s = 3 * o - 6 * e, a = 3 * e, p = t, u = 0; u < 5; u++) {
              var l = p * p
              ;(p -= (i * (l * p) + s * l + a * p - t) * (1 / (3 * i * l + 2 * s * p + a))), (p = Math.min(1, Math.max(0, p)))
            }
            return 3 * Math.pow(1 - p, 2) * p * n + 3 * (1 - p) * Math.pow(p, 2) * r + Math.pow(p, 3)
          }),
          t
        )
      })()
      e.BezierCurve = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Color3 = void 0)
      var o = n(2),
        r = n(24),
        i = n(6),
        s = (function() {
          function t(t, e, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), (this.r = t), (this.g = e), (this.b = n)
          }
          return (
            (t.FromHexString = function(e) {
              if ('#' !== e.substring(0, 1) || 7 !== e.length) return new t(0, 0, 0)
              var n = parseInt(e.substring(1, 3), 16),
                o = parseInt(e.substring(3, 5), 16),
                r = parseInt(e.substring(5, 7), 16)
              return t.FromInts(n, o, r)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2])
            }),
            (t.FromInts = function(e, n, o) {
              return new t(e / 255, n / 255, o / 255)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.r = t.r + (e.r - t.r) * n), (o.g = t.g + (e.g - t.g) * n), (o.b = t.b + (e.b - t.b) * n)
            }),
            (t.Red = function() {
              return new t(1, 0, 0)
            }),
            (t.Green = function() {
              return new t(0, 1, 0)
            }),
            (t.Blue = function() {
              return new t(0, 0, 1)
            }),
            (t.Black = function() {
              return new t(0, 0, 0)
            }),
            (t.White = function() {
              return new t(1, 1, 1)
            }),
            (t.Purple = function() {
              return new t(0.5, 0, 0.5)
            }),
            (t.Magenta = function() {
              return new t(1, 0, 1)
            }),
            (t.Yellow = function() {
              return new t(1, 1, 0)
            }),
            (t.Gray = function() {
              return new t(0.5, 0.5, 0.5)
            }),
            (t.Teal = function() {
              return new t(0, 1, 1)
            }),
            (t.Random = function() {
              return new t(Math.random(), Math.random(), Math.random())
            }),
            (t.prototype.toString = function() {
              return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Color3'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.r || 0
              return (t = (397 * (t = (397 * t) ^ (this.g || 0))) ^ (this.b || 0))
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), this
            }),
            (t.prototype.toColor4 = function(t) {
              return void 0 === t && (t = 1), new r.Color4(this.r, this.g, this.b, t)
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toLuminance = function() {
              return 0.3 * this.r + 0.59 * this.g + 0.11 * this.b
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.r * e.r, this.g * e.g, this.b * e.b)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.r = this.r * t.r), (e.g = this.g * t.g), (e.b = this.b * t.b), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.r === t.r && this.g === t.g && this.b === t.b
            }),
            (t.prototype.equalsFloats = function(t, e, n) {
              return this.r === t && this.g === e && this.b === n
            }),
            (t.prototype.scale = function(e) {
              return new t(this.r * e, this.g * e, this.b * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.r = this.r * t), (e.g = this.g * t), (e.b = this.b * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.r += this.r * t), (e.g += this.g * t), (e.b += this.b * t), this
            }),
            (t.prototype.clampToRef = function(t, e, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                (n.r = i.Scalar.Clamp(this.r, t, e)),
                (n.g = i.Scalar.Clamp(this.g, t, e)),
                (n.b = i.Scalar.Clamp(this.b, t, e)),
                this
              )
            }),
            (t.prototype.add = function(e) {
              return new t(this.r + e.r, this.g + e.g, this.b + e.b)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.r = this.r + t.r), (e.g = this.g + t.g), (e.b = this.b + t.b), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.r - e.r, this.g - e.g, this.b - e.b)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.r = this.r - t.r), (e.g = this.g - t.g), (e.b = this.b - t.b), this
            }),
            (t.prototype.clone = function() {
              return new t(this.r, this.g, this.b)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.r = t.r), (this.g = t.g), (this.b = t.b), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n) {
              return (this.r = t), (this.g = e), (this.b = n), this
            }),
            (t.prototype.set = function(t, e, n) {
              return this.copyFromFloats(t, e, n)
            }),
            (t.prototype.toHexString = function() {
              var t = (255 * this.r) | 0,
                e = (255 * this.g) | 0,
                n = (255 * this.b) | 0
              return '#' + i.Scalar.ToHex(t) + i.Scalar.ToHex(e) + i.Scalar.ToHex(n)
            }),
            (t.prototype.toLinearSpace = function() {
              var e = new t()
              return this.toLinearSpaceToRef(e), e
            }),
            (t.prototype.toLinearSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, o.ToLinearSpace)),
                (t.g = Math.pow(this.g, o.ToLinearSpace)),
                (t.b = Math.pow(this.b, o.ToLinearSpace)),
                this
              )
            }),
            (t.prototype.toGammaSpace = function() {
              var e = new t()
              return this.toGammaSpaceToRef(e), e
            }),
            (t.prototype.toGammaSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, o.ToGammaSpace)),
                (t.g = Math.pow(this.g, o.ToGammaSpace)),
                (t.b = Math.pow(this.b, o.ToGammaSpace)),
                this
              )
            }),
            (t.prototype.toJSON = function() {
              return { r: this.r, g: this.g, b: this.b }
            }),
            t
          )
        })()
      e.Color3 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Curve3 = void 0)
      var o = n(3),
        r = (function() {
          function t(t) {
            ;(this._length = 0), (this._points = t), (this._length = this._computeLength(t))
          }
          return (
            (t.CreateQuadraticBezier = function(e, n, r, i) {
              i = i > 2 ? i : 3
              for (
                var s = new Array(),
                  a = function(t, e, n, o) {
                    return (1 - t) * (1 - t) * e + 2 * t * (1 - t) * n + t * t * o
                  },
                  p = 0;
                p <= i;
                p++
              )
                s.push(new o.Vector3(a(p / i, e.x, n.x, r.x), a(p / i, e.y, n.y, r.y), a(p / i, e.z, n.z, r.z)))
              return new t(s)
            }),
            (t.CreateCubicBezier = function(e, n, r, i, s) {
              s = s > 3 ? s : 4
              for (
                var a = new Array(),
                  p = function(t, e, n, o, r) {
                    return (1 - t) * (1 - t) * (1 - t) * e + 3 * t * (1 - t) * (1 - t) * n + 3 * t * t * (1 - t) * o + t * t * t * r
                  },
                  u = 0;
                u <= s;
                u++
              )
                a.push(new o.Vector3(p(u / s, e.x, n.x, r.x, i.x), p(u / s, e.y, n.y, r.y, i.y), p(u / s, e.z, n.z, r.z, i.z)))
              return new t(a)
            }),
            (t.CreateHermiteSpline = function(e, n, r, i, s) {
              for (var a = new Array(), p = 1 / s, u = 0; u <= s; u++) a.push(o.Vector3.Hermite(e, n, r, i, u * p))
              return new t(a)
            }),
            (t.CreateCatmullRomSpline = function(e, n, r) {
              var i = new Array(),
                s = 1 / n,
                a = 0
              if (r) {
                for (var p = e.length, u = 0; u < p; u++) {
                  a = 0
                  for (var l = 0; l < n; l++)
                    i.push(o.Vector3.CatmullRom(e[u % p], e[(u + 1) % p], e[(u + 2) % p], e[(u + 3) % p], a)), (a += s)
                }
                i.push(i[0])
              } else {
                var c = new Array()
                c.push(e[0].clone()), Array.prototype.push.apply(c, e), c.push(e[e.length - 1].clone())
                u = 0
                for (u = 0; u < c.length - 3; u++) {
                  a = 0
                  for (l = 0; l < n; l++) i.push(o.Vector3.CatmullRom(c[u], c[u + 1], c[u + 2], c[u + 3], a)), (a += s)
                }
                u--, i.push(o.Vector3.CatmullRom(c[u], c[u + 1], c[u + 2], c[u + 3], a))
              }
              return new t(i)
            }),
            (t.prototype.getPoints = function() {
              return this._points
            }),
            (t.prototype.length = function() {
              return this._length
            }),
            (t.prototype.continue = function(e) {
              for (var n = this._points[this._points.length - 1], o = this._points.slice(), r = e.getPoints(), i = 1; i < r.length; i++)
                o.push(r[i].subtract(r[0]).add(n))
              return new t(o)
            }),
            (t.prototype._computeLength = function(t) {
              for (var e = 0, n = 1; n < t.length; n++) e += t[n].subtract(t[n - 1]).length()
              return e
            }),
            t
          )
        })()
      e.Curve3 = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Frustum = void 0)
      var o = n(25),
        r = (function() {
          function t() {}
          return (
            (t.GetPlanes = function(e) {
              for (var n = [], r = 0; r < 6; r++) n.push(new o.Plane(0, 0, 0, 0))
              return t.GetPlanesToRef(e, n), n
            }),
            (t.GetNearPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[2]), (e.normal.y = n[7] + n[6]), (e.normal.z = n[11] + n[10]), (e.d = n[15] + n[14]), e.normalize()
            }),
            (t.GetFarPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[2]), (e.normal.y = n[7] - n[6]), (e.normal.z = n[11] - n[10]), (e.d = n[15] - n[14]), e.normalize()
            }),
            (t.GetLeftPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[0]), (e.normal.y = n[7] + n[4]), (e.normal.z = n[11] + n[8]), (e.d = n[15] + n[12]), e.normalize()
            }),
            (t.GetRightPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[0]), (e.normal.y = n[7] - n[4]), (e.normal.z = n[11] - n[8]), (e.d = n[15] - n[12]), e.normalize()
            }),
            (t.GetTopPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[1]), (e.normal.y = n[7] - n[5]), (e.normal.z = n[11] - n[9]), (e.d = n[15] - n[13]), e.normalize()
            }),
            (t.GetBottomPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[1]), (e.normal.y = n[7] + n[5]), (e.normal.z = n[11] + n[9]), (e.d = n[15] + n[13]), e.normalize()
            }),
            (t.GetPlanesToRef = function(e, n) {
              t.GetNearPlaneToRef(e, n[0]),
                t.GetFarPlaneToRef(e, n[1]),
                t.GetLeftPlaneToRef(e, n[2]),
                t.GetRightPlaneToRef(e, n[3]),
                t.GetTopPlaneToRef(e, n[4]),
                t.GetBottomPlaneToRef(e, n[5])
            }),
            t
          )
        })()
      e.Frustum = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Path2 = void 0)
      var o = n(15),
        r = n(23),
        i = n(2),
        s = (function() {
          function t(t, e) {
            ;(this.closed = !1), (this._points = new Array()), (this._length = 0), this._points.push(new o.Vector2(t, e))
          }
          return (
            (t.StartingAt = function(e, n) {
              return new t(e, n)
            }),
            (t.prototype.addLineTo = function(t, e) {
              if (this.closed) return this
              var n = new o.Vector2(t, e),
                r = this._points[this._points.length - 1]
              return this._points.push(n), (this._length += n.subtract(r).length()), this
            }),
            (t.prototype.addArcTo = function(t, e, n, s, a) {
              if ((void 0 === a && (a = 36), this.closed)) return this
              var p = this._points[this._points.length - 1],
                u = new o.Vector2(t, e),
                l = new o.Vector2(n, s),
                c = new r.Arc2(p, u, l),
                h = c.angle.radians() / a
              c.orientation === i.Orientation.CW && (h *= -1)
              for (var d = c.startAngle.radians() + h, f = 0; f < a; f++) {
                var y = Math.cos(d) * c.radius + c.centerPoint.x,
                  v = Math.sin(d) * c.radius + c.centerPoint.y
                this.addLineTo(y, v), (d += h)
              }
              return this
            }),
            (t.prototype.close = function() {
              return (this.closed = !0), this
            }),
            (t.prototype.length = function() {
              var t = this._length
              if (!this.closed) {
                var e = this._points[this._points.length - 1]
                t += this._points[0].subtract(e).length()
              }
              return t
            }),
            (t.prototype.getPoints = function() {
              return this._points
            }),
            (t.prototype.getPointAtLengthPosition = function(t) {
              if (t < 0 || t > 1) return o.Vector2.Zero()
              for (var e = t * this.length(), n = 0, r = 0; r < this._points.length; r++) {
                var i = (r + 1) % this._points.length,
                  s = this._points[r],
                  a = this._points[i].subtract(s),
                  p = a.length() + n
                if (e >= n && e <= p) {
                  var u = a.normalize(),
                    l = e - n
                  return new o.Vector2(s.x + u.x * l, s.y + u.y * l)
                }
                n = p
              }
              return o.Vector2.Zero()
            }),
            t
          )
        })()
      e.Path2 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Path3D = void 0)
      var o = n(3),
        r = n(2),
        i = n(6),
        s = (function() {
          function t(t, e, n) {
            void 0 === e && (e = null),
              (this.path = t),
              (this._curve = new Array()),
              (this._distances = new Array()),
              (this._tangents = new Array()),
              (this._normals = new Array()),
              (this._binormals = new Array())
            for (var o = 0; o < t.length; o++) this._curve[o] = t[o].clone()
            ;(this._raw = n || !1), this._compute(e)
          }
          return (
            (t.prototype.getCurve = function() {
              return this._curve
            }),
            (t.prototype.getTangents = function() {
              return this._tangents
            }),
            (t.prototype.getNormals = function() {
              return this._normals
            }),
            (t.prototype.getBinormals = function() {
              return this._binormals
            }),
            (t.prototype.getDistances = function() {
              return this._distances
            }),
            (t.prototype.update = function(t, e) {
              void 0 === e && (e = null)
              for (var n = 0; n < t.length; n++) (this._curve[n].x = t[n].x), (this._curve[n].y = t[n].y), (this._curve[n].z = t[n].z)
              return this._compute(e), this
            }),
            (t.prototype._compute = function(t) {
              var e = this._curve.length
              ;(this._tangents[0] = this._getFirstNonNullVector(0)),
                this._raw || this._tangents[0].normalize(),
                (this._tangents[e - 1] = this._curve[e - 1].subtract(this._curve[e - 2])),
                this._raw || this._tangents[e - 1].normalize()
              var n,
                r,
                i,
                s,
                a = this._tangents[0],
                p = this._normalVector(this._curve[0], a, t)
              ;(this._normals[0] = p),
                this._raw || this._normals[0].normalize(),
                (this._binormals[0] = o.Vector3.Cross(a, this._normals[0])),
                this._raw || this._binormals[0].normalize(),
                (this._distances[0] = 0)
              for (var u = 1; u < e; u++)
                (n = this._getLastNonNullVector(u)),
                  u < e - 1 && ((r = this._getFirstNonNullVector(u)), (this._tangents[u] = n.add(r)), this._tangents[u].normalize()),
                  (this._distances[u] = this._distances[u - 1] + n.length()),
                  (i = this._tangents[u]),
                  (s = this._binormals[u - 1]),
                  (this._normals[u] = o.Vector3.Cross(s, i)),
                  this._raw || this._normals[u].normalize(),
                  (this._binormals[u] = o.Vector3.Cross(i, this._normals[u])),
                  this._raw || this._binormals[u].normalize()
            }),
            (t.prototype._getFirstNonNullVector = function(t) {
              for (var e = 1, n = this._curve[t + e].subtract(this._curve[t]); 0 === n.length() && t + e + 1 < this._curve.length; )
                e++, (n = this._curve[t + e].subtract(this._curve[t]))
              return n
            }),
            (t.prototype._getLastNonNullVector = function(t) {
              for (var e = 1, n = this._curve[t].subtract(this._curve[t - e]); 0 === n.length() && t > e + 1; )
                e++, (n = this._curve[t].subtract(this._curve[t - e]))
              return n
            }),
            (t.prototype._normalVector = function(t, e, n) {
              var s,
                a = e.length()
              if ((0 === a && (a = 1), null == n)) {
                var p = void 0
                ;(p = i.Scalar.WithinEpsilon(Math.abs(e.y) / a, 1, r.Epsilon)
                  ? i.Scalar.WithinEpsilon(Math.abs(e.x) / a, 1, r.Epsilon)
                    ? i.Scalar.WithinEpsilon(Math.abs(e.z) / a, 1, r.Epsilon)
                      ? o.Vector3.Zero()
                      : new o.Vector3(0, 0, 1)
                    : new o.Vector3(1, 0, 0)
                  : new o.Vector3(0, -1, 0)),
                  (s = o.Vector3.Cross(e, p))
              } else (s = o.Vector3.Cross(e, n)), o.Vector3.CrossToRef(s, e, s)
              return s.normalize(), s
            }),
            t
          )
        })()
      e.Path3D = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Size = void 0)
      var o = (function() {
        function t(t, e) {
          ;(this.width = t), (this.height = e)
        }
        return (
          Object.defineProperty(t.prototype, 'surface', {
            get: function() {
              return this.width * this.height
            },
            enumerable: !1,
            configurable: !0
          }),
          (t.Zero = function() {
            return new t(0, 0)
          }),
          (t.Lerp = function(e, n, o) {
            return new t(e.width + (n.width - e.width) * o, e.height + (n.height - e.height) * o)
          }),
          (t.prototype.toString = function() {
            return '{W: ' + this.width + ', H: ' + this.height + '}'
          }),
          (t.prototype.getClassName = function() {
            return 'Size'
          }),
          (t.prototype.getHashCode = function() {
            var t = this.width || 0
            return (t = (397 * t) ^ (this.height || 0))
          }),
          (t.prototype.copyFrom = function(t) {
            ;(this.width = t.width), (this.height = t.height)
          }),
          (t.prototype.copyFromFloats = function(t, e) {
            return (this.width = t), (this.height = e), this
          }),
          (t.prototype.set = function(t, e) {
            return this.copyFromFloats(t, e)
          }),
          (t.prototype.multiplyByFloats = function(e, n) {
            return new t(this.width * e, this.height * n)
          }),
          (t.prototype.clone = function() {
            return new t(this.width, this.height)
          }),
          (t.prototype.equals = function(t) {
            return !!t && this.width === t.width && this.height === t.height
          }),
          (t.prototype.add = function(e) {
            return new t(this.width + e.width, this.height + e.height)
          }),
          (t.prototype.subtract = function(e) {
            return new t(this.width - e.width, this.height - e.height)
          }),
          t
        )
      })()
      e.Size = o
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.AudioStream = e.AudioSource = e.AudioClip = void 0)
      var s = n(0),
        a = n(4),
        p = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (n.loop = !1), (n.volume = 1), (n.url = e), n
          }
          return (
            r(e, t),
            i([s.ObservableComponent.readonly], e.prototype, 'url', void 0),
            i([s.ObservableComponent.field], e.prototype, 'loop', void 0),
            i([s.ObservableComponent.field], e.prototype, 'loadingCompleteEventId', void 0),
            i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
            (e = i([s.DisposableComponent('engine.AudioClip', a.CLASS_ID.AUDIO_CLIP)], e))
          )
        })(s.ObservableComponent)
      e.AudioClip = p
      var u = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          if (((n.audioClip = e), (n.loop = !1), (n.volume = 1), (n.playing = !1), (n.pitch = 1), !(e instanceof p)))
            throw new Error('Trying to create AudioSource(AudioClip) with an invalid AudioClip')
          return (n.audioClipId = s.getComponentId(e)), n
        }
        return (
          r(e, t),
          (e.prototype.playOnce = function() {
            return (this.playing = !0), (this.dirty = !0), (this.data.nonce = Math.random()), this
          }),
          i([s.ObservableComponent.readonly], e.prototype, 'audioClipId', void 0),
          i([s.ObservableComponent.field], e.prototype, 'loop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
          i([s.ObservableComponent.field], e.prototype, 'playing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'pitch', void 0),
          (e = i([s.Component('engine.AudioSource', a.CLASS_ID.AUDIO_SOURCE)], e))
        )
      })(s.ObservableComponent)
      e.AudioSource = u
      var l = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.playing = !1), (n.volume = 1), (n.url = e), (n.playing = !0), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'url', void 0),
          i([s.ObservableComponent.field], e.prototype, 'playing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
          (e = i([s.Component('engine.AudioStream', a.CLASS_ID.AUDIO_STREAM)], e))
        )
      })(s.ObservableComponent)
      e.AudioStream = l
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Gizmos = e.OnGizmoEvent = e.Gizmo = void 0)
      var s = n(0),
        a = n(4)
      !(function(t) {
        ;(t.MOVE = 'MOVE'), (t.ROTATE = 'ROTATE'), (t.SCALE = 'SCALE'), (t.NONE = 'NONE')
      })(e.Gizmo || (e.Gizmo = {}))
      var p = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'gizmoEvent'), e
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.gizmoEvent', a.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(a.OnUUIDEvent)
      e.OnGizmoEvent = p
      var u = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.position = !0), (e.rotation = !0), (e.scale = !0), (e.cycle = !0), (e.localReference = !1), e
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'position', void 0),
          i([s.ObservableComponent.field], e.prototype, 'rotation', void 0),
          i([s.ObservableComponent.field], e.prototype, 'scale', void 0),
          i([s.ObservableComponent.field], e.prototype, 'cycle', void 0),
          i([s.ObservableComponent.field], e.prototype, 'selectedGizmo', void 0),
          i([s.ObservableComponent.field], e.prototype, 'localReference', void 0),
          (e = i([s.Component('engine.gizmos', a.CLASS_ID.GIZMOS)], e))
        )
      })(s.ObservableComponent)
      e.Gizmos = u
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.UIScrollRect = e.UIImage = e.UIInputText = e.UIText = e.UIButton = e.UIContainerStack = e.UIStackOrientation = e.UIContainerRect = e.UICanvas = e.UIWorldSpace = e.UIFullScreen = e.UIShape = void 0)
      var s = n(0),
        a = n(4),
        p = n(5),
        u = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.name = null),
              (n.visible = !0),
              (n.opacity = 1),
              (n.hAlign = 'center'),
              (n.vAlign = 'center'),
              (n.width = '100px'),
              (n.height = '50px'),
              (n.positionX = '0px'),
              (n.positionY = '0px'),
              (n.isPointerBlocker = !0),
              e && ((n._parent = e), (n.data.parentComponent = s.getComponentId(e))),
              n
            )
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, 'parent', {
              get: function() {
                return this._parent
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'parentComponent', {
              get: function() {
                return this.data.parentComponent
              },
              enumerable: !1,
              configurable: !0
            }),
            i([s.ObservableComponent.field], e.prototype, 'name', void 0),
            i([s.ObservableComponent.field], e.prototype, 'visible', void 0),
            i([s.ObservableComponent.field], e.prototype, 'opacity', void 0),
            i([s.ObservableComponent.field], e.prototype, 'hAlign', void 0),
            i([s.ObservableComponent.field], e.prototype, 'vAlign', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'width', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'height', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'positionX', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'positionY', void 0),
            i([s.ObservableComponent.field], e.prototype, 'isPointerBlocker', void 0),
            e
          )
        })(s.ObservableComponent)
      e.UIShape = u
      var l = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_FULLSCREEN_SHAPE)], e))
      })(u)
      e.UIFullScreen = l
      var c = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_WORLD_SPACE_SHAPE)], e))
      })(u)
      e.UIWorldSpace = c
      var h = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_SCREEN_SPACE_SHAPE)], e))
      })(u)
      e.UICanvas = h
      var d,
        f = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (e.adaptWidth = !1), (e.adaptHeight = !1), (e.thickness = 0), (e.color = p.Color4.Clear()), (e.alignmentUsesSize = !0), e
          }
          return (
            r(e, t),
            i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
            i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
            i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
            i([s.ObservableComponent.field], e.prototype, 'color', void 0),
            i([s.ObservableComponent.field], e.prototype, 'alignmentUsesSize', void 0),
            (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_CONTAINER_RECT)], e))
          )
        })(u)
      ;(e.UIContainerRect = f),
        (function(t) {
          ;(t[(t.VERTICAL = 0)] = 'VERTICAL'), (t[(t.HORIZONTAL = 1)] = 'HORIZONTAL')
        })((d = e.UIStackOrientation || (e.UIStackOrientation = {})))
      var y = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.adaptWidth = !0), (e.adaptHeight = !0), (e.color = p.Color4.Clear()), (e.stackOrientation = d.VERTICAL), (e.spacing = 0), e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'stackOrientation', void 0),
          i([s.ObservableComponent.field], e.prototype, 'spacing', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_CONTAINER_STACK)], e))
        )
      })(u)
      e.UIContainerStack = y
      var v = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.fontSize = 10),
            (e.fontWeight = 'normal'),
            (e.thickness = 0),
            (e.cornerRadius = 0),
            (e.color = p.Color4.White()),
            (e.background = p.Color4.White()),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.Black()),
            (e.text = 'button'),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
          i([s.ObservableComponent.field], e.prototype, 'cornerRadius', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'background', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'text', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_BUTTON_SHAPE)], e))
        )
      })(u)
      e.UIButton = v
      var m = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.outlineWidth = 0),
            (e.outlineColor = p.Color4.White()),
            (e.color = p.Color4.White()),
            (e.fontSize = 10),
            (e.fontAutoSize = !1),
            (e.fontWeight = 'normal'),
            (e.value = ''),
            (e.lineSpacing = 0),
            (e.lineCount = 0),
            (e.adaptWidth = !1),
            (e.adaptHeight = !1),
            (e.textWrapping = !1),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.Black()),
            (e.hTextAlign = 'left'),
            (e.vTextAlign = 'bottom'),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontAutoSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.component], e.prototype, 'font', void 0),
          i([s.ObservableComponent.field], e.prototype, 'value', void 0),
          i([s.ObservableComponent.field], e.prototype, 'lineSpacing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'lineCount', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_TEXT_SHAPE)], e))
        )
      })(u)
      e.UIText = m
      var b = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.outlineWidth = 0),
            (e.outlineColor = p.Color4.Black()),
            (e.color = p.Color4.Clear()),
            (e.thickness = 1),
            (e.fontSize = 10),
            (e.fontWeight = 'normal'),
            (e.value = ''),
            (e.placeholderColor = p.Color4.White()),
            (e.placeholder = ''),
            (e.margin = 10),
            (e.maxWidth = 100),
            (e.hTextAlign = 'left'),
            (e.vTextAlign = 'bottom'),
            (e.autoStretchWidth = !0),
            (e.background = p.Color4.Black()),
            (e.focusedBackground = p.Color4.Black()),
            (e.textWrapping = !1),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.White()),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.onTextSubmit = null),
            (e.onChanged = null),
            (e.onFocus = null),
            (e.onBlur = null),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.component], e.prototype, 'font', void 0),
          i([s.ObservableComponent.field], e.prototype, 'value', void 0),
          i([s.ObservableComponent.field], e.prototype, 'placeholderColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'placeholder', void 0),
          i([s.ObservableComponent.field], e.prototype, 'margin', void 0),
          i([s.ObservableComponent.field], e.prototype, 'maxWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'autoStretchWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'background', void 0),
          i([s.ObservableComponent.field], e.prototype, 'focusedBackground', void 0),
          i([s.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onTextSubmit', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onChanged', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onFocus', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onBlur', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_INPUT_TEXT_SHAPE)], e))
        )
      })(u)
      e.UIInputText = b
      var g = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.sourceLeft = 0),
            (o.sourceTop = 0),
            (o.sourceWidth = 1),
            (o.sourceHeight = 1),
            (o.paddingTop = 0),
            (o.paddingRight = 0),
            (o.paddingBottom = 0),
            (o.paddingLeft = 0),
            (o.sizeInPixels = !0),
            (o.onClick = null),
            (o.source = n),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'sourceLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceHeight', void 0),
          i([s.ObservableComponent.component], e.prototype, 'source', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sizeInPixels', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onClick', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_IMAGE_SHAPE)], e))
        )
      })(u)
      e.UIImage = g
      var _ = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.valueX = 0),
            (e.valueY = 0),
            (e.borderColor = p.Color4.White()),
            (e.backgroundColor = p.Color4.Clear()),
            (e.isHorizontal = !1),
            (e.isVertical = !1),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.onChanged = null),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'valueX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'valueY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'borderColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'backgroundColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'isHorizontal', void 0),
          i([s.ObservableComponent.field], e.prototype, 'isVertical', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onChanged', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_SLIDER_SHAPE)], e))
        )
      })(u)
      e.UIScrollRect = _
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.AvatarShape = void 0)
      var s = n(0),
        a = n(4),
        p = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (e.useDummyModel = !1), (e.talking = !1), e
          }
          var n
          return (
            r(e, t),
            (n = e),
            (e.Dummy = function() {
              var t = new n()
              return (t.useDummyModel = !0), t
            }),
            i([s.ObservableComponent.field], e.prototype, 'id', void 0),
            i([s.ObservableComponent.field], e.prototype, 'name', void 0),
            i([s.ObservableComponent.field], e.prototype, 'expressionTriggerId', void 0),
            i([s.ObservableComponent.field], e.prototype, 'expressionTriggerTimestamp', void 0),
            i([s.ObservableComponent.field], e.prototype, 'bodyShape', void 0),
            i([s.ObservableComponent.field], e.prototype, 'wearables', void 0),
            i([s.ObservableComponent.field], e.prototype, 'skinColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'hairColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'eyeColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'useDummyModel', void 0),
            i([s.ObservableComponent.field], e.prototype, 'talking', void 0),
            (e = n = i([s.Component('engine.avatarShape', a.CLASS_ID.AVATAR_SHAPE)], e))
          )
        })(s.ObservableComponent)
      e.AvatarShape = p
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.OnPointerUp = e.OnPointerDown = e.OnClick = e.OnChanged = e.OnEnter = e.OnBlur = e.OnTextSubmit = e.OnFocus = void 0)
      var s = n(0),
        a = n(14),
        p = n(4),
        u = (function(t) {
          function e(e) {
            var n = t.call(this, e) || this
            return (n.type = 'onFocus'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
          }
          return (
            r(e, t),
            i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
            (e = i([s.Component('engine.onFocus', p.CLASS_ID.UUID_CALLBACK)], e))
          )
        })(p.OnUUIDEvent)
      e.OnFocus = u
      var l = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onTextSubmit'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onTextSubmit', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnTextSubmit = l
      var c = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onBlur'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onBlur', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnBlur = c
      var h = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onEnter'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onEnter', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnEnter = h
      var d = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onChange'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onChange', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnChanged = d
      var f = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.type = 'onClick'),
            (a.uuidEventSystem.handlerMap[o.uuid] = o),
            n &&
              ((o.showFeedback = !(!1 === n.showFeedback)),
              n.button && (o.button = n.button),
              n.hoverText && (o.hoverText = n.hoverText),
              n.distance && (o.distance = n.distance)),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onClick', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnPointerUUIDEvent)
      e.OnClick = f
      var y = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.type = 'pointerDown'),
            (a.uuidEventSystem.handlerMap[o.uuid] = o),
            n &&
              ((o.showFeedback = !(!1 === n.showFeedback)),
              n.button && (o.button = n.button),
              n.hoverText && (o.hoverText = n.hoverText),
              n.distance && (o.distance = n.distance)),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.pointerDown', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnPointerUUIDEvent)
      e.OnPointerDown = y
      var v = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.type = 'pointerUp'),
            (a.uuidEventSystem.handlerMap[o.uuid] = o),
            n &&
              ((o.showFeedback = !(!1 === n.showFeedback)),
              n.button && (o.button = n.button),
              n.hoverText && (o.hoverText = n.hoverText),
              n.distance && (o.distance = n.distance)),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.pointerUp', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnPointerUUIDEvent)
      e.OnPointerUp = v
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.MessageBus = e.getMessageObserver = void 0)
      var o = n(20),
        r = n(1),
        i = null,
        s = null,
        a = null
      function p() {
        return a || (a = new o.Observable()), a
      }
      e.getMessageObserver = p
      var u = (function() {
        function t() {
          var t = this
          ;(this.messageQueue = []),
            (this.connected = !1),
            (this.flushing = !1),
            (function() {
              if (!s) {
                ;(s = dcl.loadModule('@decentraland/CommunicationsController')).then(function(t) {
                  i = t
                })
                var t = p()
                dcl.subscribe('comms'),
                  dcl.onEvent(function(e) {
                    'comms' === e.type && t.notifyObservers(e.data)
                  })
              }
              return s
            })().then(function(e) {
              ;(t.connected = !0), t.flush()
            })
        }
        return (
          (t.prototype.on = function(t, e) {
            return p().add(function(n) {
              try {
                var o = JSON.parse(n.message)
                o.message === t && e(o.payload, n.sender)
              } catch (n) {
                dcl.error('Error parsing comms message ' + n.message, n)
              }
            })
          }),
          (t.prototype.sendRaw = function(t) {
            this.messageQueue.push(t), this.connected && this.flush()
          }),
          (t.prototype.emit = function(t, e) {
            var n = JSON.stringify({ message: t, payload: e })
            this.sendRaw(n), p().notifyObservers({ message: n, sender: 'self' })
          }),
          (t.prototype.flush = function() {
            var t = this
            if (0 !== this.messageQueue.length && this.connected && i && !this.flushing) {
              var e = this.messageQueue.shift()
              ;(this.flushing = !0),
                dcl.callRpc(i.rpcHandle, 'send', [e]).then(
                  function(e) {
                    ;(t.flushing = !1), t.flush()
                  },
                  function(e) {
                    ;(t.flushing = !1), r.error('Error flushing MessageBus', e)
                  }
                )
            }
          }),
          t
        )
      })()
      e.MessageBus = u
    }
  ])
)

// AMD
"use strict";const getGlobalThis=function(){if(typeof globalThis!=="undefined")return globalThis;if(typeof self!=="undefined")return self;if(typeof window!=="undefined")return window;if(typeof this!=="undefined")return this;throw new Error("Unable to locate global `this`")};const globalObject=getGlobalThis();var loader;(function(e){"use strict";const n=1;const t=2;let r=0;let o=[];let l=[];const i={baseUrl:""};const s={};function f(e){if(typeof e==="object"){for(let n in e){if(e.hasOwnProperty(n)){i[n]=e[n]}}}}e.config=f;function d(e,t,o){let l=null;let i={};let f=null;if(typeof e==="function"){i=e}else if(typeof e==="string"){l=e;if(typeof t==="function"){i=t}else if(t instanceof Array){f=t;i=o}}else if(e instanceof Array){f=e;if(typeof t==="function"){i=t}}f=f||["require","exports","module"];if(l===null){l=`unnamed-module-${r++}`}l=g(l);function d(e){const n=s[l];if(!n)throw new Error("Could not access registered module "+l);let t=n.exports;t=typeof i==="function"?i.apply(globalObject,e)||t:i;n.exports=t;u(l)}f=(f||[]).map((e=>m(l,e)));if(!s[l]){s[l]={name:l,parent:null,dclamd:n,dependencies:f,handlers:[],exports:{},dependants:new Set}}s[l].dependencies=f;p(f,d,(e=>{if(typeof onerror=="function"){onerror(e)}else{throw e}}),l)}e.define=d;(function(e){e.amd={};e.modules=s})(d=e.define||(e.define={}));function u(e){const n=s[e];if(!n)throw new Error("Could not access registered module "+e);n.dclamd=t;let r=n.handlers;if(r&&r.length){for(let n=0;n<r.length;n++){r[n](s[e])}}}function c(e,n,t){if(!s[e]){return null}if(e==n||t==50)return[e];const r=s[e].dependencies;for(let o=0,l=r.length;o<l;o++){let l=c(r[o],n,t+1);if(l!==null){l.push(e);return l}}return null}function a(e,n){let t=s[e];if(!t){return false}let r={};for(let e in s){r[e]=false}let o=[];o.push(t);r[e]=true;while(o.length>0){let e=o.shift();let t=e.dependencies;if(t){for(let e=0,l=t.length;e<l;e++){let l=t[e];if(l===n){return true}let i=s[l];if(i&&!r[l]){r[l]=true;o.push(i)}}}}return false}function p(e,t,r,o){let i=new Array(e.length).fill(null);let f=0;let d=false;if(typeof e==="string"){if(s[e]){if(s[e].dclamd===n){throw new Error(`Trying to load ${e} from ${o}. The first module is still loading.`)}return s[e]}throw new Error(e+" has not been defined. Please include it as a dependency in "+o+"'s define()")}const u=e.length;for(let n=0;n<u;n++){switch(e[n]){case"require":let h=function(e,n,t){return p(e,n,t,o)};h.toUrl=function(e){return b(e,o)};i[n]=h;f++;break;case"exports":if(!s[o]){throw new Error("Parent module "+o+" not registered yet")}i[n]=s[o].exports;f++;break;case"module":i[n]={id:o,uri:b(o)};f++;break;default:{const p=e[n];const h=a(p,o);const m=()=>{i[n]=s[p].exports;f++;if(f===u&&t){d=true;t(i)}};if(h){const e=c(p,o,0);if(e){e.reverse();e.push(p);l.push(e)}w(p,(()=>{}),r,o);m()}else{w(p,m,r,o)}break}}}if(!d&&f===u&&t){t(i)}}e.require=p;function h(e,n){return function(){return dcl.callRpc(e,n.name,o.slice.call(arguments,0))}}function m(e,n){return e?b(n,e):n}function w(e,t,r,o){if(s[e]){s[e].dependants.add(o);if(s[e].dclamd===n){t&&s[e].handlers.push(t)}else{t&&t(s[e])}return}else{s[e]={name:e,parent:o,dclamd:n,handlers:[t],dependencies:[],dependants:new Set([o]),exports:{}}}if(e.indexOf("@")===0){let n=s[e].exports;if(typeof dcl.loadModule==="function"){dcl.loadModule(e,n).then((t=>{for(let e in t.methods){const r=t.methods[e];n[r.name]=h(t.rpcHandle,r)}u(e)})).catch((e=>{r(e)}))}else{throw new Error("Asynchronous modules will not work because loadModule function is not present")}}}if(typeof dcl!=="undefined"){dcl.onStart((()=>{const e=new Set;const t=[];for(let r in s){if(s[r]){if(s[r].dclamd===n){t.push(s[r])}s[r].dependencies.forEach((n=>{if(n=="require"||n=="exports"||n=="module")return;if(!s[n])e.add(n)}))}}const r=[];if(l.length){r.push(`\n> Cyclic dependencies: ${l.map((e=>"\n  - "+e.join(" -> "))).join("")}`)}if(e.size){r.push(`\n> Undeclared/unknown modules: ${Array.from(e).map((e=>"\n  - "+e)).join("")}`)}if(t.length){r.push(`\n> These modules didn't load: ${t.map((e=>"\n  - "+e.name)).join("")}.\n`)}if(r.length){throw new Error(r.join("\n"))}}))}function g(e){let n=e,t;t=/\/\.\//;while(t.test(n)){n=n.replace(t,"/")}n=n.replace(/^\.\//g,"");t=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;while(t.test(n)){n=n.replace(t,"/")}n=n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,"");n=n.replace(/^\//g,"");return n}function y(e,n){let t=e;if(!t.startsWith("@")){if(t.startsWith("./")||t.startsWith("../")){const e=n.split("/");e.pop();t=g(e.join("/")+"/"+t)}}return t}function b(e,n){switch(e){case"require":case"exports":case"module":return e}if(n){return y(e,n)}return g(e)}p.toUrl=b})(loader||(loader={}));globalObject.define=loader.define;globalObject.dclamd=loader;
// Builder generated code below
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../e25d12ec-e349-4c76-9826-1094458e3982/src/item"
import Script2 from "../aff6ff37-d8c9-46f5-a9ac-14e524486ffe/src/item"
import Script3 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"
import Script4 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script5 from "../0ee46c79-338c-445a-a506-ea26d80fbe46/src/item"
import Script6 from "../ed36149f-76c5-45c4-a678-d4b31c4ed9ca/src/item"
import Script7 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import Script8 from "../fa423878-fbbe-4333-80a8-3d3f2dbe5889/src/item"
import Script9 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const roofBlueEdgesSmall = new Entity('roofBlueEdgesSmall')
engine.addEntity(roofBlueEdgesSmall)
roofBlueEdgesSmall.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15.973541259765625, 7.926928520202637, 15.999805450439453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.960358142852783, 1, 6.3058929443359375)
})
roofBlueEdgesSmall.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("5842de4c-fc8b-47f4-9e00-74314b6989cc/BlueRoof_4Edges_Small.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
roofBlueEdgesSmall.addComponentOrReplace(gltfShape2)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(13.234013557434082, 9.5, 15.645221710205078),
  rotation: new Quaternion(3.7608867925764837e-23, -1.4901161193847656e-7, 1.7319906088757858e-14, 1),
  scale: new Vector3(5.000002384185791, 5, 1.0000008344650269)
})
nft.addComponentOrReplace(transform4)
const nftShape = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/27469")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(2.7931766510009766, 9.474550247192383, 15.591558456420898),
  rotation: new Quaternion(-7.83784319456464e-15, 0.0001688599440967664, -2.0128910691030732e-11, -1),
  scale: new Vector3(5.428791046142578, 4.81174373626709, 1)
})
nft2.addComponentOrReplace(transform5)
const nftShape2 = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/18165")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const tableLampLight = new Entity('tableLampLight')
engine.addEntity(tableLampLight)
tableLampLight.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(5.292802333831787, 6.655309200286865, 1.0086692571640015),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.6755492091178894, 1.1208571195602417, 0.8011268377304077)
})
tableLampLight.addComponentOrReplace(transform6)

const wallZigzag4 = new Entity('wallZigzag4')
engine.addEntity(wallZigzag4)
wallZigzag4.setParent(_scene)
const gltfShape3 = new GLTFShape("932f0435-9974-4451-b63a-6967c7faf606/ZigzagWall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallZigzag4.addComponentOrReplace(gltfShape3)
const transform7 = new Transform({
  position: new Vector3(15.682846069335938, 6, 15.958304405212402),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.665249824523926, 1.4979710578918457, 1)
})
wallZigzag4.addComponentOrReplace(transform7)

const wallZigzag5 = new Entity('wallZigzag5')
engine.addEntity(wallZigzag5)
wallZigzag5.setParent(_scene)
wallZigzag5.addComponentOrReplace(gltfShape3)
const transform8 = new Transform({
  position: new Vector3(0.038910865783691406, 6, 15.99374771118164),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.9462432861328125, 1.513110637664795, 1.0000030994415283)
})
wallZigzag5.addComponentOrReplace(transform8)

const wallZigzag6 = new Entity('wallZigzag6')
engine.addEntity(wallZigzag6)
wallZigzag6.setParent(_scene)
wallZigzag6.addComponentOrReplace(gltfShape3)
const transform9 = new Transform({
  position: new Vector3(15.655570983886719, 6, 16),
  rotation: new Quaternion(4.440892627896218e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.924208641052246, 1.5, 1.000009536743164)
})
wallZigzag6.addComponentOrReplace(transform9)

const roundGalleryLight2 = new Entity('roundGalleryLight2')
engine.addEntity(roundGalleryLight2)
roundGalleryLight2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(9.169185638427734, 11.340736389160156, 0.6689205765724182),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.491924285888672, 1, 1)
})
roundGalleryLight2.addComponentOrReplace(transform10)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
const gltfShape4 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallPlainBlack2.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(15.989059448242188, 6, 0.30331411957740784),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.907075881958008, 1.5, 1)
})
wallPlainBlack2.addComponentOrReplace(transform11)

const rainLight17 = new Entity('rainLight17')
engine.addEntity(rainLight17)
rainLight17.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(10.5, 8, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight17.addComponentOrReplace(transform12)

const rainLight18 = new Entity('rainLight18')
engine.addEntity(rainLight18)
rainLight18.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(10.5, 8, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight18.addComponentOrReplace(transform13)

const rainLight20 = new Entity('rainLight20')
engine.addEntity(rainLight20)
rainLight20.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(10.5, 8.000000953674316, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight20.addComponentOrReplace(transform14)

const rainLight22 = new Entity('rainLight22')
engine.addEntity(rainLight22)
rainLight22.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(9.5, 8, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight22.addComponentOrReplace(transform15)

const rainLight24 = new Entity('rainLight24')
engine.addEntity(rainLight24)
rainLight24.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(9.5, 8, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight24.addComponentOrReplace(transform16)

const rainLight25 = new Entity('rainLight25')
engine.addEntity(rainLight25)
rainLight25.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(9.5, 8, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight25.addComponentOrReplace(transform17)

const rainLight26 = new Entity('rainLight26')
engine.addEntity(rainLight26)
rainLight26.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(8.5, 8, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight26.addComponentOrReplace(transform18)

const rainLight27 = new Entity('rainLight27')
engine.addEntity(rainLight27)
rainLight27.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(8.5, 8, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight27.addComponentOrReplace(transform19)

const rainLight28 = new Entity('rainLight28')
engine.addEntity(rainLight28)
rainLight28.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(8.5, 8, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight28.addComponentOrReplace(transform20)

const rainLight29 = new Entity('rainLight29')
engine.addEntity(rainLight29)
rainLight29.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(7.5, 8, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight29.addComponentOrReplace(transform21)

const rainLight30 = new Entity('rainLight30')
engine.addEntity(rainLight30)
rainLight30.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(7.5, 8, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight30.addComponentOrReplace(transform22)

const rainLight31 = new Entity('rainLight31')
engine.addEntity(rainLight31)
rainLight31.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(7.5, 7.999999523162842, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight31.addComponentOrReplace(transform23)

const rainLight32 = new Entity('rainLight32')
engine.addEntity(rainLight32)
rainLight32.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(6.5, 7.999999523162842, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight32.addComponentOrReplace(transform24)

const rainLight33 = new Entity('rainLight33')
engine.addEntity(rainLight33)
rainLight33.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(6.5, 8, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight33.addComponentOrReplace(transform25)

const rainLight34 = new Entity('rainLight34')
engine.addEntity(rainLight34)
rainLight34.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(6.5, 8, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight34.addComponentOrReplace(transform26)

const rainLight35 = new Entity('rainLight35')
engine.addEntity(rainLight35)
rainLight35.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(5.5, 8, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight35.addComponentOrReplace(transform27)

const rainLight36 = new Entity('rainLight36')
engine.addEntity(rainLight36)
rainLight36.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(5.5, 7.999999523162842, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight36.addComponentOrReplace(transform28)

const rainLight37 = new Entity('rainLight37')
engine.addEntity(rainLight37)
rainLight37.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(5.5, 7.999999523162842, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight37.addComponentOrReplace(transform29)

const barM2 = new Entity('barM2')
engine.addEntity(barM2)
barM2.setParent(_scene)
const gltfShape5 = new GLTFShape("2312b12f-d481-4229-be52-82aa3819a391/Furnit Bar 4 2M.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
barM2.addComponentOrReplace(gltfShape5)
const transform30 = new Transform({
  position: new Vector3(15.590631484985352, 6.033209800720215, 4.19081974029541),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.3653874397277832, 0.9241806864738464, 0.7499998807907104)
})
barM2.addComponentOrReplace(transform30)

const loveseat2 = new Entity('loveseat2')
engine.addEntity(loveseat2)
loveseat2.setParent(_scene)
const gltfShape6 = new GLTFShape("c162b72f-3a64-4593-aaa1-a42f614cf9e5/Couch_01/Couch_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
loveseat2.addComponentOrReplace(gltfShape6)
const transform31 = new Transform({
  position: new Vector3(15.137181282043457, 6.037120819091797, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6854026317596436, 1.1398943662643433, 1.76155424118042)
})
loveseat2.addComponentOrReplace(transform31)

const table2 = new Entity('table2')
engine.addEntity(table2)
table2.setParent(_scene)
const gltfShape7 = new GLTFShape("55a98e69-9ec8-4f04-ba26-8764b255dd50/Furnit 1.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
table2.addComponentOrReplace(gltfShape7)
const transform32 = new Transform({
  position: new Vector3(4.949451923370361, 6.0471954345703125, 0.8691387176513672),
  rotation: new Quaternion(-3.4823604774542744e-14, 0, 6.786915440862599e-15, -1),
  scale: new Vector3(0.9470877647399902, 0.7271562814712524, 0.829517126083374)
})
table2.addComponentOrReplace(transform32)

const floorBlack = new Entity('floorBlack')
engine.addEntity(floorBlack)
floorBlack.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 1, 4)
})
floorBlack.addComponentOrReplace(transform33)
const gltfShape8 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
floorBlack.addComponentOrReplace(gltfShape8)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(0, 0.045874595642089844, 6.778176784515381),
  rotation: new Quaternion(-0.5000000596046448, -0.5000000596046448, -0.49999988079071045, 0.5),
  scale: new Vector3(12.725432395935059, 12.236347198486328, 1.0000020265579224)
})
imageFromURL.addComponentOrReplace(transform34)

const floorBlack2 = new Entity('floorBlack2')
engine.addEntity(floorBlack2)
floorBlack2.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(16, 6, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 1, 3.9916467666625977)
})
floorBlack2.addComponentOrReplace(transform35)
floorBlack2.addComponentOrReplace(gltfShape8)

const floorBlack4 = new Entity('floorBlack4')
engine.addEntity(floorBlack4)
floorBlack4.setParent(_scene)
floorBlack4.addComponentOrReplace(gltfShape8)
const transform36 = new Transform({
  position: new Vector3(4, 6, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 3.300143241882324)
})
floorBlack4.addComponentOrReplace(transform36)

const bedKing = new Entity('bedKing')
engine.addEntity(bedKing)
bedKing.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(9.673964500427246, 6.031590461730957, 0.25968265533447266),
  rotation: new Quaternion(-6.5671565543457336e-15, 0, 6.5551651089114545e-15, -1),
  scale: new Vector3(1.966252326965332, 1.092629075050354, 1.700695276260376)
})
bedKing.addComponentOrReplace(transform37)
const gltfShape9 = new GLTFShape("46b54f75-ad9d-4b63-98ac-a733c4088998/Bed King.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
bedKing.addComponentOrReplace(gltfShape9)

const classroomChair = new Entity('classroomChair')
engine.addEntity(classroomChair)
classroomChair.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(2, 6.047607421875, 9),
  rotation: new Quaternion(-3.2954483851374517e-15, 0.9238795638084412, -1.1013500511580787e-7, -0.3826834559440613),
  scale: new Vector3(1.2881693840026855, 1.1848896741867065, 1.2881693840026855)
})
classroomChair.addComponentOrReplace(transform38)
const gltfShape10 = new GLTFShape("aebf6e6b-4839-47de-a0c7-79877085dc13/Chair_02/Chair_02.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
classroomChair.addComponentOrReplace(gltfShape10)

const windowFullWall = new Entity('windowFullWall')
engine.addEntity(windowFullWall)
windowFullWall.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(0, 0, 15.66015625),
  rotation: new Quaternion(-3.0239323974115594e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.104063630104065, 1.5, 1.0000019073486328)
})
windowFullWall.addComponentOrReplace(transform39)
const gltfShape11 = new GLTFShape("7cd98940-78b6-4b61-af5d-da43f3360022/FullWallWindow.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
windowFullWall.addComponentOrReplace(gltfShape11)

const teleport = new Entity('teleport')
engine.addEntity(teleport)
teleport.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(6, 0.06402397155761719, 10.906084060668945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
teleport.addComponentOrReplace(transform40)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(6, 0, 13.127887725830078),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(11.340924263000488, 6, 1.0000003576278687)
})
imageFromURL2.addComponentOrReplace(transform41)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(9.000000953674316, 0, 15.693574905395508),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 1.5, 1)
})
wallPlainBlack.addComponentOrReplace(transform42)
wallPlainBlack.addComponentOrReplace(gltfShape4)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape4)
const transform43 = new Transform({
  position: new Vector3(8.92425537109375, 0, 13.162420272827148),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1.7812745571136475, 1.5, 1)
})
wallPlainBlack3.addComponentOrReplace(transform43)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape4)
const transform44 = new Transform({
  position: new Vector3(15.68528938293457, 0, 15.85258674621582),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(7.842257499694824, 1.5, 1.0000009536743164)
})
wallPlainBlack4.addComponentOrReplace(transform44)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape4)
const transform45 = new Transform({
  position: new Vector3(12.18528938293457, 0, 13.16261100769043),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4.879998683929443, 1.5, 1.000002384185791)
})
wallPlainBlack5.addComponentOrReplace(transform45)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape4)
const transform46 = new Transform({
  position: new Vector3(15.985000610351562, 0, 0.35370635986328125),
  rotation: new Quaternion(1.7226053991169134e-15, 0, 6.0168951526891334e-15, -1),
  scale: new Vector3(7.9713239669799805, 1.5, 1.0000026226043701)
})
wallPlainBlack6.addComponentOrReplace(transform46)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(15.629987716674805, 1.1490886211395264, 2),
  rotation: new Quaternion(2.7402813921668283e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.250007390975952, 3, 1.0000028610229492)
})
imageFromURL3.addComponentOrReplace(transform47)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(10.51063060760498, 8, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight.addComponentOrReplace(transform48)

const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(10.51063060760498, 8, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight2.addComponentOrReplace(transform49)

const rainLight3 = new Entity('rainLight3')
engine.addEntity(rainLight3)
rainLight3.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(10.51063060760498, 8.000000953674316, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight3.addComponentOrReplace(transform50)

const rainLight4 = new Entity('rainLight4')
engine.addEntity(rainLight4)
rainLight4.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(9.51063060760498, 8, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight4.addComponentOrReplace(transform51)

const rainLight5 = new Entity('rainLight5')
engine.addEntity(rainLight5)
rainLight5.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(9.51063060760498, 8, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight5.addComponentOrReplace(transform52)

const rainLight6 = new Entity('rainLight6')
engine.addEntity(rainLight6)
rainLight6.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(9.51063060760498, 8, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight6.addComponentOrReplace(transform53)

const rainLight7 = new Entity('rainLight7')
engine.addEntity(rainLight7)
rainLight7.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(8.51063060760498, 8, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight7.addComponentOrReplace(transform54)

const rainLight8 = new Entity('rainLight8')
engine.addEntity(rainLight8)
rainLight8.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(8.51063060760498, 8, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight8.addComponentOrReplace(transform55)

const rainLight9 = new Entity('rainLight9')
engine.addEntity(rainLight9)
rainLight9.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(8.51063060760498, 8, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight9.addComponentOrReplace(transform56)

const rainLight10 = new Entity('rainLight10')
engine.addEntity(rainLight10)
rainLight10.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(7.5106306076049805, 8, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight10.addComponentOrReplace(transform57)

const rainLight11 = new Entity('rainLight11')
engine.addEntity(rainLight11)
rainLight11.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(7.5106306076049805, 8, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight11.addComponentOrReplace(transform58)

const rainLight12 = new Entity('rainLight12')
engine.addEntity(rainLight12)
rainLight12.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(7.5106306076049805, 7.999999523162842, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight12.addComponentOrReplace(transform59)

const rainLight13 = new Entity('rainLight13')
engine.addEntity(rainLight13)
rainLight13.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(6.5106306076049805, 7.999999523162842, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight13.addComponentOrReplace(transform60)

const rainLight14 = new Entity('rainLight14')
engine.addEntity(rainLight14)
rainLight14.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(6.5106306076049805, 8, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight14.addComponentOrReplace(transform61)

const rainLight15 = new Entity('rainLight15')
engine.addEntity(rainLight15)
rainLight15.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(6.5106306076049805, 8, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight15.addComponentOrReplace(transform62)

const rainLight16 = new Entity('rainLight16')
engine.addEntity(rainLight16)
rainLight16.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(5.5106306076049805, 7.999999523162842, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight16.addComponentOrReplace(transform63)

const rainLight19 = new Entity('rainLight19')
engine.addEntity(rainLight19)
rainLight19.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(5.5106306076049805, 8, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight19.addComponentOrReplace(transform64)

const rainLight21 = new Entity('rainLight21')
engine.addEntity(rainLight21)
rainLight21.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(5.5106306076049805, 7.999999523162842, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight21.addComponentOrReplace(transform65)

const woodenDoor = new Entity('woodenDoor')
engine.addEntity(woodenDoor)
woodenDoor.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(9.075021743774414, 0, 13.5),
  rotation: new Quaternion(2.5086655266960602e-15, 0.7071067690849304, -8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(1.309472918510437, 1.81752610206604, 1)
})
woodenDoor.addComponentOrReplace(transform66)

const floorBlackSmall = new Entity('floorBlackSmall')
engine.addEntity(floorBlackSmall)
floorBlackSmall.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlackSmall.addComponentOrReplace(transform67)
const gltfShape12 = new GLTFShape("b726fb2a-49dd-4cb0-9305-94a8ba66c706/BlackFloor_Small.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
floorBlackSmall.addComponentOrReplace(gltfShape12)

const wallPlainBlack7 = new Entity('wallPlainBlack7')
engine.addEntity(wallPlainBlack7)
wallPlainBlack7.setParent(_scene)
wallPlainBlack7.addComponentOrReplace(gltfShape4)
const transform68 = new Transform({
  position: new Vector3(8.344650268554688e-7, 0, 13.193574905395508),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.643612861633301, 1.5, 1)
})
wallPlainBlack7.addComponentOrReplace(transform68)

const wallPlainBlack8 = new Entity('wallPlainBlack8')
engine.addEntity(wallPlainBlack8)
wallPlainBlack8.setParent(_scene)
wallPlainBlack8.addComponentOrReplace(gltfShape4)
const transform69 = new Transform({
  position: new Vector3(8.344650268554688e-7, 0, 15.693574905395508),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.643612861633301, 1.5, 1)
})
wallPlainBlack8.addComponentOrReplace(transform69)

const floorBlackSmall3 = new Entity('floorBlackSmall3')
engine.addEntity(floorBlackSmall3)
floorBlackSmall3.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(12.452266693115234, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.179222106933594, 1, 1.2927701473236084)
})
floorBlackSmall3.addComponentOrReplace(transform70)
floorBlackSmall3.addComponentOrReplace(gltfShape12)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(1.8842837810516357, 7.5, 6.677926063537598),
  rotation: new Quaternion(3.827649985567406e-15, 0.8601371645927429, -1.0253632609646957e-7, -0.5100628733634949),
  scale: new Vector3(0.8491899371147156, 0.5651199817657471, 0.8491899371147156)
})
messageBubble.addComponentOrReplace(transform71)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(14.129987716674805, 1.1490886211395264, 15.678303718566895),
  rotation: new Quaternion(8.491404711061874e-16, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(2.2500083446502686, 3, 1.0000033378601074)
})
imageFromURL4.addComponentOrReplace(transform72)

const verticalYellowPad = new Entity('verticalYellowPad')
engine.addEntity(verticalYellowPad)
verticalYellowPad.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(2.180575132369995, 0, 14.558629989624023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.177315592765808, 1, 0.8498439192771912)
})
verticalYellowPad.addComponentOrReplace(transform73)

const roofBlueEdgesSmall2 = new Entity('roofBlueEdgesSmall2')
engine.addEntity(roofBlueEdgesSmall2)
roofBlueEdgesSmall2.setParent(_scene)
roofBlueEdgesSmall2.addComponentOrReplace(gltfShape2)
const transform74 = new Transform({
  position: new Vector3(3.5639562606811523, 7.926928520202637, 0),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(6.213881015777588, 1, 1.7234196662902832)
})
roofBlueEdgesSmall2.addComponentOrReplace(transform74)

const verticalYellowPad3 = new Entity('verticalYellowPad3')
engine.addEntity(verticalYellowPad3)
verticalYellowPad3.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(1.9175045490264893, 6.5, 1.7064499855041504),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.106339931488037, 1, 0.8357052206993103)
})
verticalYellowPad3.addComponentOrReplace(transform75)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(7.951347351074219, 6.038809299468994, 13.522229194641113),
  rotation: new Quaternion(-0.7071068286895752, 0, 7.706243820848613e-8, 0.7071068286895752),
  scale: new Vector3(15.702912330627441, 13.476907730102539, 1.0000128746032715)
})
imageFromURL5.addComponentOrReplace(transform76)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(6.264980316162109, 0, 0.3725128173828125),
  rotation: new Quaternion(2.6094665512755983e-22, -4.470348358154297e-8, -6.549226137401781e-15, 1),
  scale: new Vector3(12.35211181640625, 6, 1.0000003576278687)
})
imageFromURL6.addComponentOrReplace(transform77)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(13.358409881591797, 8.5, 15.642740249633789),
  rotation: new Quaternion(-1.0818954476602468e-14, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(5.262127876281738, 2, 1.0000030994415283)
})
imageFromURL7.addComponentOrReplace(transform78)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(8.096281051635742, 8.5, 15.642740249633789),
  rotation: new Quaternion(-1.0818954476602468e-14, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(5.262126922607422, 2, 1.0000033378601074)
})
imageFromURL8.addComponentOrReplace(transform79)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(2.8341526985168457, 8.5, 15.642740249633789),
  rotation: new Quaternion(-1.0818954476602468e-14, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(5.262125492095947, 2, 1.0000035762786865)
})
imageFromURL9.addComponentOrReplace(transform80)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(0.34868812561035156, 8.499998092651367, 2.86142635345459),
  rotation: new Quaternion(-4.084899820879168e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(5.138566493988037, 2, 1.000004768371582)
})
imageFromURL10.addComponentOrReplace(transform81)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(0, 8.5, 8.063704490661621),
  rotation: new Quaternion(-1.08028566154399e-14, 0.7071068286895752, -8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(5.2858757972717285, 2, 1.0000054836273193)
})
imageFromURL11.addComponentOrReplace(transform82)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(0, 8.5, 2.7778196334838867),
  rotation: new Quaternion(-1.08028566154399e-14, 0.7071068286895752, -8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(5.285879611968994, 2, 1.0000052452087402)
})
imageFromURL12.addComponentOrReplace(transform83)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(15.646045684814453, 8.5, 13.13857364654541),
  rotation: new Quaternion(1.1190326754963696e-14, -0.7071068286895752, 8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.138564586639404, 2, 1.0000064373016357)
})
imageFromURL13.addComponentOrReplace(transform84)

const imageFromURL14 = new Entity('imageFromURL14')
engine.addEntity(imageFromURL14)
imageFromURL14.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(15.646045684814453, 8.5, 8),
  rotation: new Quaternion(1.1190326754963696e-14, -0.7071068286895752, 8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.138563632965088, 2, 1.0000061988830566)
})
imageFromURL14.addComponentOrReplace(transform85)

const imageFromURL15 = new Entity('imageFromURL15')
engine.addEntity(imageFromURL15)
imageFromURL15.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(15.646045684814453, 8.5, 2.86142635345459),
  rotation: new Quaternion(1.1190326754963696e-14, -0.7071068286895752, 8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.13856840133667, 2, 1.0000059604644775)
})
imageFromURL15.addComponentOrReplace(transform86)

const imageFromURL16 = new Entity('imageFromURL16')
engine.addEntity(imageFromURL16)
imageFromURL16.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(8.01158618927002, 6.152068138122559, 0.32691526412963867),
  rotation: new Quaternion(2.103507899277584e-14, 0, 8.193957868446976e-15, 1),
  scale: new Vector3(7.580821514129639, 5.625, 1.0000057220458984)
})
imageFromURL16.addComponentOrReplace(transform87)

const imageFromURL17 = new Entity('imageFromURL17')
engine.addEntity(imageFromURL17)
imageFromURL17.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(0, 8.5, 13.349589347839355),
  rotation: new Quaternion(-1.08028566154399e-14, 0.7071068286895752, -8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(5.285874366760254, 2, 1.0000057220458984)
})
imageFromURL17.addComponentOrReplace(transform88)

const imageFromURL18 = new Entity('imageFromURL18')
engine.addEntity(imageFromURL18)
imageFromURL18.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(0.3486880660057068, 8.5, 8),
  rotation: new Quaternion(-4.084899820879168e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(5.138565540313721, 2, 1.000004529953003)
})
imageFromURL18.addComponentOrReplace(transform89)

const imageFromURL19 = new Entity('imageFromURL19')
engine.addEntity(imageFromURL19)
imageFromURL19.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(0.3486880660057068, 8.500001907348633, 13.13857364654541),
  rotation: new Quaternion(-4.084899820879168e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(5.13856840133667, 2, 1.0000042915344238)
})
imageFromURL19.addComponentOrReplace(transform90)

const imageFromURL20 = new Entity('imageFromURL20')
engine.addEntity(imageFromURL20)
imageFromURL20.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(13.285886764526367, 8.499998092651367, 15.97330093383789),
  rotation: new Quaternion(2.94207407459772e-14, 0, 1.3745164471131062e-14, 1),
  scale: new Vector3(5.285878658294678, 2, 1.0000057220458984)
})
imageFromURL20.addComponentOrReplace(transform91)

const imageFromURL21 = new Entity('imageFromURL21')
engine.addEntity(imageFromURL21)
imageFromURL21.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(8.000000953674316, 8.5, 15.97330093383789),
  rotation: new Quaternion(2.94207407459772e-14, 0, 1.3745164471131062e-14, 1),
  scale: new Vector3(5.285879135131836, 2, 1.0000054836273193)
})
imageFromURL21.addComponentOrReplace(transform92)

const imageFromURL22 = new Entity('imageFromURL22')
engine.addEntity(imageFromURL22)
imageFromURL22.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(2.714115619659424, 8.500001907348633, 15.97330093383789),
  rotation: new Quaternion(2.94207407459772e-14, 0, 1.3745164471131062e-14, 1),
  scale: new Vector3(5.285881996154785, 2, 1.0000052452087402)
})
imageFromURL22.addComponentOrReplace(transform93)

const imageFromURL23 = new Entity('imageFromURL23')
engine.addEntity(imageFromURL23)
imageFromURL23.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(15.996297836303711, 8.499998092651367, 2.7778196334838867),
  rotation: new Quaternion(2.5328123184399122e-14, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.285874366760254, 2, 1.0000066757202148)
})
imageFromURL23.addComponentOrReplace(transform94)

const imageFromURL24 = new Entity('imageFromURL24')
engine.addEntity(imageFromURL24)
imageFromURL24.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(15.996297836303711, 8.5, 8.063704490661621),
  rotation: new Quaternion(2.5328123184399122e-14, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.2858757972717285, 2, 1.0000064373016357)
})
imageFromURL24.addComponentOrReplace(transform95)

const imageFromURL25 = new Entity('imageFromURL25')
engine.addEntity(imageFromURL25)
imageFromURL25.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(15.996297836303711, 8.500001907348633, 13.349589347839355),
  rotation: new Quaternion(2.5328123184399122e-14, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.285879611968994, 2, 1.0000061988830566)
})
imageFromURL25.addComponentOrReplace(transform96)

const radio3 = new Entity('radio3')
engine.addEntity(radio3)
radio3.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(15.429515838623047, 7.184481620788574, 12.008336067199707),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
radio3.addComponentOrReplace(transform97)

const messageBubble2 = new Entity('messageBubble2')
engine.addEntity(messageBubble2)
messageBubble2.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(8, 13, 3.979295253753662),
  rotation: new Quaternion(-1.591801404500926e-14, -0.23906885087490082, 2.8499226090161756e-8, -0.9710026383399963),
  scale: new Vector3(1.000001311302185, 1, 1.000001311302185)
})
messageBubble2.addComponentOrReplace(transform98)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script1.spawn(tableLampLight, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight, channelBus))
script2.spawn(roundGalleryLight2, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight2, channelBus))
script3.spawn(rainLight17, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight17, channelBus))
script3.spawn(rainLight18, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight18, channelBus))
script3.spawn(rainLight20, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight20, channelBus))
script3.spawn(rainLight22, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight22, channelBus))
script3.spawn(rainLight24, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight24, channelBus))
script3.spawn(rainLight25, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight25, channelBus))
script3.spawn(rainLight26, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight26, channelBus))
script3.spawn(rainLight27, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight27, channelBus))
script3.spawn(rainLight28, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight28, channelBus))
script3.spawn(rainLight29, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight29, channelBus))
script3.spawn(rainLight30, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight30, channelBus))
script3.spawn(rainLight31, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight31, channelBus))
script3.spawn(rainLight32, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight32, channelBus))
script3.spawn(rainLight33, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight33, channelBus))
script3.spawn(rainLight34, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight34, channelBus))
script3.spawn(rainLight35, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight35, channelBus))
script3.spawn(rainLight36, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight36, channelBus))
script3.spawn(rainLight37, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight37, channelBus))
script4.spawn(imageFromURL, {"image":"https://i.imgur.com/iqvATL4.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script5.spawn(teleport, {"x":"-140","y":"-117","name":"DOTBONGBILLIONAIRES"}, createChannel(channelId, teleport, channelBus))
script4.spawn(imageFromURL2, {"image":"https://i.imgur.com/VRJZwwS.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script4.spawn(imageFromURL3, {"image":"https://i.imgur.com/LKwndSb.jpg"}, createChannel(channelId, imageFromURL3, channelBus))
script3.spawn(rainLight, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight, channelBus))
script3.spawn(rainLight2, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight2, channelBus))
script3.spawn(rainLight3, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight3, channelBus))
script3.spawn(rainLight4, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight4, channelBus))
script3.spawn(rainLight5, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight5, channelBus))
script3.spawn(rainLight6, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight6, channelBus))
script3.spawn(rainLight7, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight7, channelBus))
script3.spawn(rainLight8, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight8, channelBus))
script3.spawn(rainLight9, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight9, channelBus))
script3.spawn(rainLight10, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight10, channelBus))
script3.spawn(rainLight11, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight11, channelBus))
script3.spawn(rainLight12, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight12, channelBus))
script3.spawn(rainLight13, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight13, channelBus))
script3.spawn(rainLight14, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight14, channelBus))
script3.spawn(rainLight15, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight15, channelBus))
script3.spawn(rainLight16, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight16, channelBus))
script3.spawn(rainLight19, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight19, channelBus))
script3.spawn(rainLight21, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight21, channelBus))
script6.spawn(woodenDoor, {"onClickText":"FUCK OFF!! (by entering you acknowledge you are =/> 18y/o)","onClick":[{"entityName":"woodenDoor","actionId":"open","values":{}}],"onOpen":[]}, createChannel(channelId, woodenDoor, channelBus))
script7.spawn(messageBubble, {"text":"Wow! you really know \nhow to work that chair! \n        What else..?","fontSize":15.5}, createChannel(channelId, messageBubble, channelBus))
script4.spawn(imageFromURL4, {"image":"https://i.imgur.com/7sr6hon.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
script8.spawn(verticalYellowPad, {"distance":8,"speed":8,"autoStart":true,"onReachEnd":[{"entityName":"verticalYellowPad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalYellowPad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalYellowPad, channelBus))
script8.spawn(verticalYellowPad3, {"distance":8,"speed":8,"autoStart":true,"onReachEnd":[{"entityName":"verticalYellowPad3","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalYellowPad3","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalYellowPad3, channelBus))
script4.spawn(imageFromURL5, {"image":"https://i.imgur.com/bPs9PCh.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script4.spawn(imageFromURL6, {"image":"https://i.imgur.com/2ed5tPB.png"}, createChannel(channelId, imageFromURL6, channelBus))
script4.spawn(imageFromURL7, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL7, channelBus))
script4.spawn(imageFromURL8, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL8, channelBus))
script4.spawn(imageFromURL9, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL9, channelBus))
script4.spawn(imageFromURL10, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL10, channelBus))
script4.spawn(imageFromURL11, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL11, channelBus))
script4.spawn(imageFromURL12, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL12, channelBus))
script4.spawn(imageFromURL13, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL13, channelBus))
script4.spawn(imageFromURL14, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL14, channelBus))
script4.spawn(imageFromURL15, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL15, channelBus))
script4.spawn(imageFromURL16, {"image":"https://i.imgur.com/5VCSsNc.png"}, createChannel(channelId, imageFromURL16, channelBus))
script4.spawn(imageFromURL17, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL17, channelBus))
script4.spawn(imageFromURL18, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL18, channelBus))
script4.spawn(imageFromURL19, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL19, channelBus))
script4.spawn(imageFromURL20, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL20, channelBus))
script4.spawn(imageFromURL21, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL21, channelBus))
script4.spawn(imageFromURL22, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL22, channelBus))
script4.spawn(imageFromURL23, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL23, channelBus))
script4.spawn(imageFromURL24, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL24, channelBus))
script4.spawn(imageFromURL25, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL25, channelBus))
script9.spawn(radio3, {"startOn":false,"volume":1,"onClickText":"DELTA","onClick":[{"entityName":"radio3","actionId":"toggle","values":{}}],"station":"https://cdn.instream.audio/:9069/stream?_=171cd6c2b6e"}, createChannel(channelId, radio3, channelBus))
script7.spawn(messageBubble2, {"text":"THANK YOU, CUM AGAIN!!\n\nnow tip those entertainers...\n\n-LeezeesLounge","fontSize":12}, createChannel(channelId, messageBubble2, channelBus))