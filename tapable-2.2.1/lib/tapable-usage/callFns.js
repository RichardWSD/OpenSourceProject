// syncBailHook
(function anonymous(newSpeed
) {
  "use strict";
  var _context;
  var _x = this._x;
  var _fn0 = _x[0];
  var _result0 = _fn0(newSpeed);
  if (_result0 !== undefined) {
    return _result0;
    ;
  } else {
    var _fn1 = _x[1];
    var _result1 = _fn1(newSpeed);
    if (_result1 !== undefined) {
      return _result1;
      ;
    } else {
      var _fn2 = _x[2];
      var _result2 = _fn2(newSpeed);
      if (_result2 !== undefined) {
        return _result2;
        ;
      } else {
      }
    }
  }

})

  // syncHook
  (function anonymous(newSpeed
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    var _fn0 = _x[0];
    _fn0(newSpeed);
    var _fn1 = _x[1];
    _fn1(newSpeed);
    var _fn2 = _x[2];
    _fn2(newSpeed);

  })

  // syncLoopHook
  (function anonymous(newSpeed
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    var _loop;
    do {
      _loop = false;
      var _fn0 = _x[0];
      var _result0 = _fn0(newSpeed);
      if (_result0 !== undefined) {
        _loop = true;
      } else {
        var _fn1 = _x[1];
        var _result1 = _fn1(newSpeed);
        if (_result1 !== undefined) {
          _loop = true;
        } else {
          if (!_loop) {
          }
        }
      }
    } while (_loop);

  })

  // syncWaterfallHook
  (function anonymous(newSpeed
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    var _fn0 = _x[0];
    var _result0 = _fn0(newSpeed);
    if (_result0 !== undefined) {
      newSpeed = _result0;
    }
    var _fn1 = _x[1];
    var _result1 = _fn1(newSpeed);
    if (_result1 !== undefined) {
      newSpeed = _result1;
    }
    var _fn2 = _x[2];
    var _result2 = _fn2(newSpeed);
    if (_result2 !== undefined) {
      newSpeed = _result2;
    }
    return newSpeed;

  })

  // asyncParallelBailHook
  (function anonymous(newSpeed, _callback
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    var _results = new Array(3);
    var _checkDone = function () {
      for (var i = 0; i < _results.length; i++) {
        var item = _results[i];
        if (item === undefined) return false;
        if (item.result !== undefined) {
          _callback(null, item.result);
          return true;
        }
        if (item.error) {
          _callback(item.error);
          return true;
        }
      }
      return false;
    }
    do {
      var _counter = 3;
      var _done = (function () {
        _callback();
      });
      if (_counter <= 0) break;
      var _fn0 = _x[0];
      _fn0(newSpeed, (function (_err0, _result0) {
        if (_err0) {
          if (_counter > 0) {
            if (0 < _results.length && ((_results.length = 1), (_results[0] = { error: _err0 }), _checkDone())) {
              _counter = 0;
            } else {
              if (--_counter === 0) _done();
            }
          }
        } else {
          if (_counter > 0) {
            if (0 < _results.length && (_result0 !== undefined && (_results.length = 1), (_results[0] = { result: _result0 }), _checkDone())) {
              _counter = 0;
            } else {
              if (--_counter === 0) _done();
            }
          }
        }
      }));
      if (_counter <= 0) break;
      if (1 >= _results.length) {
        if (--_counter === 0) _done();
      } else {
        var _fn1 = _x[1];
        _fn1(newSpeed, (function (_err1, _result1) {
          if (_err1) {
            if (_counter > 0) {
              if (1 < _results.length && ((_results.length = 2), (_results[1] = { error: _err1 }), _checkDone())) {
                _counter = 0;
              } else {
                if (--_counter === 0) _done();
              }
            }
          } else {
            if (_counter > 0) {
              if (1 < _results.length && (_result1 !== undefined && (_results.length = 2), (_results[1] = { result: _result1 }), _checkDone())) {
                _counter = 0;
              } else {
                if (--_counter === 0) _done();
              }
            }
          }
        }));
      }
      if (_counter <= 0) break;
      if (2 >= _results.length) {
        if (--_counter === 0) _done();
      } else {
        var _fn2 = _x[2];
        _fn2(newSpeed, (function (_err2, _result2) {
          if (_err2) {
            if (_counter > 0) {
              if (2 < _results.length && ((_results.length = 3), (_results[2] = { error: _err2 }), _checkDone())) {
                _counter = 0;
              } else {
                if (--_counter === 0) _done();
              }
            }
          } else {
            if (_counter > 0) {
              if (2 < _results.length && (_result2 !== undefined && (_results.length = 3), (_results[2] = { result: _result2 }), _checkDone())) {
                _counter = 0;
              } else {
                if (--_counter === 0) _done();
              }
            }
          }
        }));
      }
    } while (false);

  })

  // asyncParallelHook-mix
  (function anonymous(newSpeed, _callback
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    do {
      var _counter = 2;
      var _done = (function () {
        _callback();
      });
      if (_counter <= 0) break;
      var _fn0 = _x[0];
      var _hasResult0 = false;
      var _promise0 = _fn0(newSpeed);
      if (!_promise0 || !_promise0.then)
        throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
      _promise0.then((function (_result0) {
        _hasResult0 = true;
        if (--_counter === 0) _done();
      }), function (_err0) {
        if (_hasResult0) throw _err0;
        if (_counter > 0) {
          _callback(_err0);
          _counter = 0;
        }
      });
      if (_counter <= 0) break;
      var _fn1 = _x[1];
      _fn1(newSpeed, (function (_err1) {
        if (_err1) {
          if (_counter > 0) {
            _callback(_err1);
            _counter = 0;
          }
        } else {
          if (--_counter === 0) _done();
        }
      }));
    } while (false);

  })

  // asyncParallelHook-promise
  (function anonymous(newSpeed
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    return new Promise((function (_resolve, _reject) {
      var _sync = true;
      function _error(_err) {
        if (_sync)
          _resolve(Promise.resolve().then((function () { throw _err; })));
        else
          _reject(_err);
      };
      do {
        var _counter = 3;
        var _done = (function () {
          _resolve();
        });
        if (_counter <= 0) break;
        var _fn0 = _x[0];
        var _hasResult0 = false;
        var _promise0 = _fn0(newSpeed);
        if (!_promise0 || !_promise0.then)
          throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
        _promise0.then((function (_result0) {
          _hasResult0 = true;
          if (--_counter === 0) _done();
        }), function (_err0) {
          if (_hasResult0) throw _err0;
          if (_counter > 0) {
            _error(_err0);
            _counter = 0;
          }
        });
        if (_counter <= 0) break;
        var _fn1 = _x[1];
        var _hasResult1 = false;
        var _promise1 = _fn1(newSpeed);
        if (!_promise1 || !_promise1.then)
          throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
        _promise1.then((function (_result1) {
          _hasResult1 = true;
          if (--_counter === 0) _done();
        }), function (_err1) {
          if (_hasResult1) throw _err1;
          if (_counter > 0) {
            _error(_err1);
            _counter = 0;
          }
        });
        if (_counter <= 0) break;
        var _fn2 = _x[2];
        var _hasResult2 = false;
        var _promise2 = _fn2(newSpeed);
        if (!_promise2 || !_promise2.then)
          throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise2 + ')');
        _promise2.then((function (_result2) {
          _hasResult2 = true;
          if (--_counter === 0) _done();
        }), function (_err2) {
          if (_hasResult2) throw _err2;
          if (_counter > 0) {
            _error(_err2);
            _counter = 0;
          }
        });
      } while (false);
      _sync = false;
    }));

  })

  // asyncParallelHook
  (function anonymous(newSpeed, _callback
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    do {
      var _counter = 3;
      var _done = (function () {
        _callback();
      });
      if (_counter <= 0) break;
      var _fn0 = _x[0];
      _fn0(newSpeed, (function (_err0) {
        if (_err0) {
          if (_counter > 0) {
            _callback(_err0);
            _counter = 0;
          }
        } else {
          if (--_counter === 0) _done();
        }
      }));
      if (_counter <= 0) break;
      var _fn1 = _x[1];
      _fn1(newSpeed, (function (_err1) {
        if (_err1) {
          if (_counter > 0) {
            _callback(_err1);
            _counter = 0;
          }
        } else {
          if (--_counter === 0) _done();
        }
      }));
      if (_counter <= 0) break;
      var _fn2 = _x[2];
      _fn2(newSpeed, (function (_err2) {
        if (_err2) {
          if (_counter > 0) {
            _callback(_err2);
            _counter = 0;
          }
        } else {
          if (--_counter === 0) _done();
        }
      }));
    } while (false);

  })

  // asyncSeriesBailHook
  (function anonymous(newSpeed, _callback
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    function _next1() {
      var _fn2 = _x[2];
      _fn2(newSpeed, (function (_err2, _result2) {
        if (_err2) {
          _callback(_err2);
        } else {
          if (_result2 !== undefined) {
            _callback(null, _result2);

          } else {
            _callback();
          }
        }
      }));
    }
    function _next0() {
      var _fn1 = _x[1];
      _fn1(newSpeed, (function (_err1, _result1) {
        if (_err1) {
          _callback(_err1);
        } else {
          if (_result1 !== undefined) {
            _callback(null, _result1);

          } else {
            _next1();
          }
        }
      }));
    }
    var _fn0 = _x[0];
    _fn0(newSpeed, (function (_err0, _result0) {
      if (_err0) {
        _callback(_err0);
      } else {
        if (_result0 !== undefined) {
          _callback(null, _result0);

        } else {
          _next0();
        }
      }
    }));

  })


  // asyncSeriesHook
  (function anonymous(newSpeed, _callback
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    function _next1() {
      var _fn2 = _x[2];
      _fn2(newSpeed, (function (_err2) {
        if (_err2) {
          _callback(_err2);
        } else {
          _callback();
        }
      }));
    }
    function _next0() {
      var _fn1 = _x[1];
      _fn1(newSpeed, (function (_err1) {
        if (_err1) {
          _callback(_err1);
        } else {
          _next1();
        }
      }));
    }
    var _fn0 = _x[0];
    _fn0(newSpeed, (function (_err0) {
      if (_err0) {
        _callback(_err0);
      } else {
        _next0();
      }
    }));

  })


  // asyncSeriesWaterfallHook
  (function anonymous(newSpeed, _callback
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    function _next1() {
      var _fn2 = _x[2];
      _fn2(newSpeed, (function (_err2, _result2) {
        if (_err2) {
          _callback(_err2);
        } else {
          if (_result2 !== undefined) {
            newSpeed = _result2;
          }
          _callback(null, newSpeed);
        }
      }));
    }
    function _next0() {
      var _fn1 = _x[1];
      _fn1(newSpeed, (function (_err1, _result1) {
        if (_err1) {
          _callback(_err1);
        } else {
          if (_result1 !== undefined) {
            newSpeed = _result1;
          }
          _next1();
        }
      }));
    }
    var _fn0 = _x[0];
    _fn0(newSpeed, (function (_err0, _result0) {
      if (_err0) {
        _callback(_err0);
      } else {
        if (_result0 !== undefined) {
          newSpeed = _result0;
        }
        _next0();
      }
    }));

  })

  // intercept
  (function anonymous(newSpeed
  ) {
    "use strict";
    var _context;
    var _x = this._x;
    var _taps = this.taps;
    var _interceptors = this.interceptors;
    _interceptors[0].call(newSpeed);
    var _tap0 = _taps[0];
    _interceptors[0].tap(_tap0);
    var _fn0 = _x[0];
    _fn0(newSpeed);
    var _tap1 = _taps[1];
    _interceptors[0].tap(_tap1);
    var _fn1 = _x[1];
    _fn1(newSpeed);
    var _tap2 = _taps[2];
    _interceptors[0].tap(_tap2);
    var _fn2 = _x[2];
    _fn2(newSpeed);

  })

  // context
  (function anonymous(newSpeed
  ) {
    "use strict";
    var _context = {};
    var _x = this._x;
    var _taps = this.taps;
    var _interceptors = this.interceptors;
    var _tap0 = _taps[0];
    _interceptors[0].tap(_context, _tap0);
    var _fn0 = _x[0];
    _fn0(_context, newSpeed);
    var _tap1 = _taps[1];
    _interceptors[0].tap(_context, _tap1);
    var _fn1 = _x[1];
    _fn1(_context, newSpeed);
    var _tap2 = _taps[2];
    _interceptors[0].tap(_context, _tap2);
    var _fn2 = _x[2];
    _fn2(newSpeed);

  })

