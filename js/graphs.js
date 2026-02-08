// ============================================================
// graphs.js — Plotly graph rendering for all graph types
// ============================================================

const Graphs = (() => {
  const COLORS = {
    primary: '#2563eb',
    secondary: '#dc2626',
    inverse: '#059669',
    yEqualsX: '#9ca3af',
    asymptote: '#d97706',
    highlight: '#7c3aed',
    grid: '#e5e7eb'
  };

  function render(config, plotId, controlsId) {
    if (!config) return;
    switch (config.type) {
      case 'function-plot':
        renderFunctionPlot(config, plotId);
        break;
      case 'inverse-sketch':
        renderInverseSketch(config, plotId, controlsId);
        break;
      case 'intersection':
        renderIntersection(config, plotId);
        break;
      case 'asymptote-demo':
        renderAsymptoteDemo(config, plotId);
        break;
      case 'domain-range-demo':
        renderDomainRangeDemo(config, plotId);
        break;
      default:
        renderFunctionPlot(config, plotId);
    }
  }

  function evalFn(fnStr, x) {
    try {
      return new Function('x', 'return ' + fnStr)(x);
    } catch { return NaN; }
  }

  function generatePoints(fnStr, domain, n) {
    n = n || 400;
    const [xMin, xMax] = domain;
    const step = (xMax - xMin) / n;
    const xs = [], ys = [];
    for (let i = 0; i <= n; i++) {
      const x = xMin + i * step;
      const y = evalFn(fnStr, x);
      if (isFinite(y) && Math.abs(y) < 1e6) {
        xs.push(x);
        ys.push(y);
      } else {
        xs.push(x);
        ys.push(null);
      }
    }
    return { x: xs, y: ys };
  }

  function getLayout(extraOpts) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return Object.assign({
      margin: { t: 30, r: 30, b: 50, l: 50 },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: isDark ? '#1e293b' : '#ffffff',
      font: { color: isDark ? '#e2e8f0' : '#1a1a2e', size: 12 },
      xaxis: {
        zeroline: true, zerolinecolor: isDark ? '#475569' : '#9ca3af',
        gridcolor: isDark ? '#334155' : COLORS.grid,
        title: extraOpts.xLabel || 'x'
      },
      yaxis: {
        zeroline: true, zerolinecolor: isDark ? '#475569' : '#9ca3af',
        gridcolor: isDark ? '#334155' : COLORS.grid,
        title: extraOpts.yLabel || 'y',
        scaleanchor: extraOpts.equalAxes ? 'x' : undefined
      },
      showlegend: true,
      legend: { x: 0.02, y: 0.98, bgcolor: 'rgba(0,0,0,0)' }
    }, extraOpts.layout || {});
  }

  function renderFunctionPlot(config, plotId) {
    const pts = generatePoints(config.fn, config.domain);
    const traces = [{
      x: pts.x, y: pts.y,
      mode: 'lines',
      name: config.label || 'f(x)',
      line: { color: COLORS.primary, width: 2.5 },
      connectgaps: false
    }];

    if (config.highlights) {
      config.highlights.forEach(h => {
        traces.push({
          x: [h.x], y: [h.y],
          mode: 'markers+text',
          name: h.label,
          marker: { size: 10, color: COLORS.highlight },
          text: [h.label],
          textposition: 'top center',
          textfont: { size: 11, color: COLORS.highlight }
        });
      });
    }

    const layout = getLayout({
      xLabel: config.xLabel || 'x',
      yLabel: config.yLabel || 'y',
      layout: config.range ? {
        yaxis: { range: config.range, zeroline: true }
      } : {}
    });

    Plotly.newPlot(plotId, traces, layout, { responsive: true, displayModeBar: false });
  }

  function renderInverseSketch(config, plotId, controlsId) {
    // Original function
    const origPts = generatePoints(config.fn, config.domain);
    const traces = [{
      x: origPts.x, y: origPts.y,
      mode: 'lines',
      name: 'f(x)',
      line: { color: COLORS.primary, width: 2.5 },
      connectgaps: false
    }];

    // y = x line
    const allVals = [...config.domain, ...(config.inverseDomain || config.domain)];
    const lineMin = Math.min(...allVals) - 2;
    const lineMax = Math.max(...allVals) + 2;
    traces.push({
      x: [lineMin, lineMax], y: [lineMin, lineMax],
      mode: 'lines',
      name: 'y = x',
      line: { color: COLORS.yEqualsX, width: 1.5, dash: 'dash' }
    });

    // Key points on original
    if (config.keyPoints) {
      traces.push({
        x: config.keyPoints.map(p => p[0]),
        y: config.keyPoints.map(p => p[1]),
        mode: 'markers',
        name: 'Key points',
        marker: { size: 8, color: COLORS.primary }
      });
    }

    // Asymptote lines
    if (config.asymptote) {
      const asym = config.asymptote;
      if (asym.original) {
        if (asym.original.type === 'horizontal') {
          traces.push({
            x: [config.domain[0] - 5, config.domain[1] + 5],
            y: [asym.original.value, asym.original.value],
            mode: 'lines', name: 'HA: y=' + asym.original.value,
            line: { color: COLORS.asymptote, dash: 'dot', width: 1.5 },
            showlegend: true
          });
        } else {
          traces.push({
            x: [asym.original.value, asym.original.value],
            y: [lineMin, lineMax],
            mode: 'lines', name: 'VA: x=' + asym.original.value,
            line: { color: COLORS.asymptote, dash: 'dot', width: 1.5 },
            showlegend: true
          });
        }
      }
    }

    const layout = getLayout({ equalAxes: true });

    Plotly.newPlot(plotId, traces, layout, { responsive: true, displayModeBar: false });

    // Add "Show Inverse" button
    if (controlsId && (config.inverseFn || config.inverseKeyPoints)) {
      const controlsEl = document.getElementById(controlsId);
      if (controlsEl) {
        controlsEl.innerHTML = `<button class="btn btn--green" id="btn-show-inverse">Show Inverse</button>`;
        document.getElementById('btn-show-inverse').addEventListener('click', () => {
          addInverseTrace(config, plotId);
          document.getElementById('btn-show-inverse').disabled = true;
          document.getElementById('btn-show-inverse').textContent = 'Inverse shown';
        });
      }
    }
  }

  function addInverseTrace(config, plotId) {
    const newTraces = [];

    if (config.inverseFn) {
      const invDomain = config.inverseDomain || config.domain;
      const invPts = generatePoints(config.inverseFn, invDomain);
      newTraces.push({
        x: invPts.x, y: invPts.y,
        mode: 'lines',
        name: 'f\u207B\u00B9(x)',
        line: { color: COLORS.inverse, width: 2.5 },
        connectgaps: false
      });
    }

    // Inverse key points
    if (config.inverseKeyPoints) {
      newTraces.push({
        x: config.inverseKeyPoints.map(p => p[0]),
        y: config.inverseKeyPoints.map(p => p[1]),
        mode: 'markers',
        name: 'Inverse key points',
        marker: { size: 8, color: COLORS.inverse }
      });
    }

    // Inverse asymptote
    if (config.asymptote && config.asymptote.inverse) {
      const asym = config.asymptote.inverse;
      const allVals = [...(config.inverseDomain || config.domain)];
      const lo = Math.min(...allVals) - 5;
      const hi = Math.max(...allVals) + 5;
      if (asym.type === 'vertical') {
        newTraces.push({
          x: [asym.value, asym.value], y: [lo, hi],
          mode: 'lines', name: 'VA (inv): x=' + asym.value,
          line: { color: COLORS.inverse, dash: 'dot', width: 1.5 }
        });
      } else {
        newTraces.push({
          x: [lo, hi], y: [asym.value, asym.value],
          mode: 'lines', name: 'HA (inv): y=' + asym.value,
          line: { color: COLORS.inverse, dash: 'dot', width: 1.5 }
        });
      }
    }

    // If no inverseFn but we have inverseKeyPoints, draw the inverse by reflecting original
    if (!config.inverseFn && config.keyPoints && config.inverseKeyPoints) {
      // Connect inverse key points with lines
      newTraces.push({
        x: config.inverseKeyPoints.map(p => p[0]),
        y: config.inverseKeyPoints.map(p => p[1]),
        mode: 'lines+markers',
        name: 'f\u207B\u00B9(x)',
        line: { color: COLORS.inverse, width: 2.5 },
        marker: { size: 8, color: COLORS.inverse }
      });
    }

    Plotly.addTraces(plotId, newTraces);
  }

  function renderIntersection(config, plotId) {
    const traces = config.fns.map((fnObj, i) => {
      const pts = generatePoints(fnObj.expr, config.domain);
      return {
        x: pts.x, y: pts.y,
        mode: 'lines',
        name: fnObj.label,
        line: { color: i === 0 ? COLORS.primary : COLORS.secondary, width: 2.5 },
        connectgaps: false
      };
    });

    if (config.intersections) {
      traces.push({
        x: config.intersections.map(p => p.x),
        y: config.intersections.map(p => p.y),
        mode: 'markers+text',
        name: 'Intersections',
        marker: { size: 10, color: COLORS.highlight, symbol: 'x' },
        text: config.intersections.map(p => `(${p.x.toFixed(2)}, ${p.y.toFixed(2)})`),
        textposition: 'top center',
        textfont: { size: 10 }
      });
    }

    const layout = getLayout({
      layout: config.range ? {
        yaxis: { range: config.range, zeroline: true }
      } : {}
    });
    Plotly.newPlot(plotId, traces, layout, { responsive: true, displayModeBar: false });
  }

  function renderAsymptoteDemo(config, plotId) {
    const pts = generatePoints(config.fn, config.domain, 800);
    const traces = [{
      x: pts.x, y: pts.y,
      mode: 'lines',
      name: 'f(x)',
      line: { color: COLORS.primary, width: 2.5 },
      connectgaps: false
    }];

    // Vertical asymptotes
    if (config.va) {
      config.va.forEach(va => {
        traces.push({
          x: [va, va], y: [-50, 50],
          mode: 'lines',
          name: `VA: x = ${va}`,
          line: { color: COLORS.asymptote, dash: 'dash', width: 1.5 }
        });
      });
    }

    // Horizontal asymptotes
    if (config.ha !== undefined && config.ha !== null) {
      const haValues = Array.isArray(config.ha) ? config.ha : [config.ha];
      haValues.forEach(ha => {
        traces.push({
          x: [config.domain[0], config.domain[1]],
          y: [ha, ha],
          mode: 'lines',
          name: `HA: y = ${ha}`,
          line: { color: COLORS.secondary, dash: 'dash', width: 1.5 }
        });
      });
    }

    // Intercept markers
    const markers = [];
    if (config.xInt) {
      config.xInt.forEach(xi => markers.push({ x: xi, y: 0, label: `(${xi}, 0)` }));
    }
    if (config.yInt !== undefined) {
      markers.push({ x: 0, y: config.yInt, label: `(0, ${config.yInt})` });
    }
    if (markers.length > 0) {
      traces.push({
        x: markers.map(m => m.x),
        y: markers.map(m => m.y),
        mode: 'markers+text',
        name: 'Intercepts',
        marker: { size: 8, color: COLORS.highlight },
        text: markers.map(m => m.label),
        textposition: 'top right',
        textfont: { size: 10 }
      });
    }

    const layout = getLayout({
      layout: {
        yaxis: {
          range: config.restrictedDomain ? [-20, 20] : [-10, 10],
          zeroline: true
        }
      }
    });
    Plotly.newPlot(plotId, traces, layout, { responsive: true, displayModeBar: false });
  }

  function renderDomainRangeDemo(config, plotId) {
    const traces = config.traces.map((t, i) => {
      const pts = generatePoints(t.fn, t.range);
      return {
        x: pts.x, y: pts.y,
        mode: 'lines',
        name: t.label,
        line: { color: i === 0 ? COLORS.primary : COLORS.secondary, width: 2.5 },
        connectgaps: false
      };
    });

    const layout = getLayout({});
    Plotly.newPlot(plotId, traces, layout, { responsive: true, displayModeBar: false });
  }

  return { render };
})();
