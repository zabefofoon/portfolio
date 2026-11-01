import { useEffect, useMemo, useRef, useState } from 'react'
import { init, use as registerCharts } from 'echarts/core'
import type { EChartsType } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { SVGRenderer } from 'echarts/renderers'

registerCharts([BarChart, GridComponent, TooltipComponent, SVGRenderer])

type Technology = { name: string; company: number; personal: number }

export default function TechnologyChart({ technologies }: { technologies: Technology[] }) {
  const chartRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<EChartsType | null>(null)
  const [showCompany, setShowCompany] = useState(true)
  const [showPersonal, setShowPersonal] = useState(true)
  const selectedTechnologies = useMemo(
    () => technologies.map((technology) => ({
      ...technology,
      count: (showCompany ? technology.company : 0) + (showPersonal ? technology.personal : 0),
    })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name)),
    [technologies, showCompany, showPersonal],
  )

  useEffect(() => {
    const container = chartRef.current
    if (!container) return
    const chart = init(container, undefined, { renderer: 'svg' })
    instanceRef.current = chart
    const observer = new ResizeObserver(() => chart.resize())
    observer.observe(container)
    return () => {
      observer.disconnect()
      chart.dispose()
      instanceRef.current = null
    }
  }, [])

  useEffect(() => {
    const chart = instanceRef.current
    if (!chart || technologies.length === 0) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateChart = () => {
      chart.setOption({
        animation: !reducedMotion.matches,
        grid: { top: 4, right: 48, bottom: 4, left: 110 },
        xAxis: { type: 'value', show: false, minInterval: 1, max: Math.max(...technologies.map(({ company, personal }) => company + personal)) + 1 },
        yAxis: {
          type: 'category',
          inverse: true,
          data: selectedTechnologies.map(({ name }) => name),
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { color: '#475569', fontSize: 13, fontFamily: 'Pretendard Variable, sans-serif', margin: 14 },
        },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        series: [{
          name: '선택한 프로젝트',
          type: 'bar',
          data: selectedTechnologies.map(({ count }) => count),
          barMaxWidth: 16,
          showBackground: true,
          backgroundStyle: { color: 'rgba(147, 197, 253, 0.18)', borderRadius: 8 },
          itemStyle: { color: '#60a5fa', borderRadius: 8 },
          label: { show: true, position: 'right', formatter: '{c}개', color: '#475569', fontSize: 12, fontFamily: 'Pretendard Variable, sans-serif' },
        }],
      })
    }
    updateChart()
    reducedMotion.addEventListener('change', updateChart)
    return () => reducedMotion.removeEventListener('change', updateChart)
  }, [technologies, selectedTechnologies])

  return (
    <div className="mb-6 rounded-2xl border border-blue-100 bg-white/55 px-4 py-5 sm:px-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-800">전체 프로젝트 기술 사용 현황</h3>
          <p className="mt-1 text-sm text-slate-500">각 기술을 사용한 회사·개인 프로젝트 수</p>
        </div>
        <fieldset className="m-0 flex gap-2 border-0 p-0" aria-label="프로젝트 구분 선택">
          {([
            { label: '회사', selected: showCompany, toggle: () => setShowCompany((value) => !value) },
            { label: '개인', selected: showPersonal, toggle: () => setShowPersonal((value) => !value) },
          ]).map(({ label, selected, toggle }) => (
            <button key={label} type="button" aria-pressed={selected} onClick={toggle} className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${selected ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white/60 text-slate-400'}`}>
              <span className={`size-2 rounded-full ${selected ? 'bg-blue-400' : 'bg-slate-300'}`} aria-hidden="true" />
              {label}
            </button>
          ))}
        </fieldset>
      </div>
      <div ref={chartRef} aria-hidden="true" className="mt-4 w-full" style={{ height: Math.max(technologies.length * 32, 100) }} />
      <ul className="sr-only" aria-label="기술별 선택한 프로젝트 수">
        {selectedTechnologies.map(({ name, count }) => <li key={name}>{name}: {count}개</li>)}
      </ul>
    </div>
  )
}
