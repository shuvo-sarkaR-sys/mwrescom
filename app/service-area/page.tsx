import SnowCanvas from '@/components/SnowCanvas'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Area | M.W Residential & Commercial',
}

const areas = [
  { icon: '📍', name: 'Halifax' },
  { icon: '📍', name: 'Dartmouth' },
  { icon: '📍', name: 'Bedford' },
  { icon: '📍', name: 'Sackville' },
  { icon: '📍', name: 'Fall River' },
  { icon: '📍', name: 'Timberlea' },
  { icon: '📍', name: 'Hammonds Plains' },
  { icon: '📍', name: 'Cole Harbour' },
  { icon: '📍', name: 'Waverly' },
  { icon: '📍', name: 'Enfield' },
]

export default function ServiceAreaPage() {
  return (
    <>
      <SnowCanvas />
      <Navbar />

      <div className="page-hero-1">
        <div className="page-hero-tag">Where We Work</div>
        <h1 className="page-hero-title">SERVICE <span>AREA</span></h1>
      </div>

      <div style={{ background: 'var(--midnight)' }}>
        <div className="map-page">
          <div className="map-layout">
            <div className="map-info">
              <h3>Halifax Regional Municipality</h3>
              <p>We proudly serve the entire Halifax Regional Municipality and surrounding communities. If you&apos;re not sure if we cover your area, give us a call — we&apos;re always looking to expand.</p>
              <ul className="area-list">
                {areas.map(a => (
                  <li key={a.name}><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 16, height: 16, marginRight: 6 }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span>{a.name}</li>
                ))}
              </ul>
            </div>

            <div id="map-canvas">
              <svg className="map-svg" viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0a85c2" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#020f1a" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <rect width="800" height="520" fill="#04253a"/>
                <rect width="800" height="520" fill="url(#mapGlow)"/>

                {/* Water */}
                <path d="M0,300 Q200,280 400,320 Q600,360 800,300 L800,520 L0,520 Z" fill="#031d2e" opacity="0.8"/>

                {/* Halifax Peninsula */}
                <path d="M340,200 Q360,190 390,195 Q410,200 415,220 Q420,240 400,260 Q380,275 360,270 Q340,265 330,245 Q325,225 340,200 Z" fill="#0a85c2" opacity="0.6"/>
                <text x="375" y="235" fontSize="10" fill="white" textAnchor="middle" fontFamily="Barlow, sans-serif" fontWeight="600">Halifax</text>

                {/* Dartmouth */}
                <path d="M430,195 Q450,185 480,190 Q500,195 510,215 Q515,235 500,250 Q480,260 460,255 Q440,248 432,228 Q428,210 430,195 Z" fill="#0a85c2" opacity="0.5"/>
                <text x="470" y="225" fontSize="10" fill="white" textAnchor="middle" fontFamily="Barlow, sans-serif" fontWeight="600">Dartmouth</text>

                {/* Bedford */}
                <path d="M360,140 Q380,130 400,138 Q418,146 420,165 Q421,182 404,190 Q386,196 370,188 Q354,178 353,160 Q352,145 360,140 Z" fill="#0a85c2" opacity="0.45"/>
                <text x="387" y="168" fontSize="9" fill="white" textAnchor="middle" fontFamily="Barlow, sans-serif" fontWeight="600">Bedford</text>

                {/* Sackville */}
                <path d="M310,100 Q335,90 355,100 Q370,110 368,130 Q366,148 348,155 Q328,160 312,148 Q298,136 300,117 Q302,102 310,100 Z" fill="#0a85c2" opacity="0.4"/>
                <text x="335" y="130" fontSize="9" fill="white" textAnchor="middle" fontFamily="Barlow, sans-serif" fontWeight="600">Sackville</text>

                {/* Cole Harbour */}
                <path d="M510,255 Q530,245 548,255 Q562,265 560,285 Q558,302 542,308 Q524,312 512,300 Q500,288 502,270 Q504,256 510,255 Z" fill="#0a85c2" opacity="0.4"/>
                <text x="532" y="282" fontSize="9" fill="white" textAnchor="middle" fontFamily="Barlow, sans-serif" fontWeight="600">Cole Harbour</text>

                {/* Hammonds Plains */}
                <path d="M230,130 Q255,120 275,130 Q290,140 288,160 Q286,178 268,183 Q248,187 234,175 Q220,162 222,144 Z" fill="#0a85c2" opacity="0.35"/>
                <text x="255" y="158" fontSize="9" fill="white" textAnchor="middle" fontFamily="Barlow, sans-serif" fontWeight="600">H. Plains</text>

                {/* Timberlea */}
                <path d="M270,200 Q290,192 308,200 Q322,208 320,226 Q318,242 302,247 Q284,250 272,238 Q260,226 262,210 Z" fill="#0a85c2" opacity="0.38"/>
                <text x="291" y="224" fontSize="9" fill="white" textAnchor="middle" fontFamily="Barlow, sans-serif" fontWeight="600">Timberlea</text>

                {/* Fall River */}
                <path d="M450,110 Q475,100 492,112 Q506,124 502,144 Q498,162 480,167 Q460,170 448,156 Q437,142 440,124 Z" fill="#0a85c2" opacity="0.35"/>
                <text x="470" y="140" fontSize="9" fill="white" textAnchor="middle" fontFamily="Barlow, sans-serif" fontWeight="600">Fall River</text>

                {/* HRM boundary label */}
                <text x="400" y="460" fontSize="13" fill="#0a85c2" textAnchor="middle" fontFamily="Barlow, sans-serif" fontWeight="700" letterSpacing="3" opacity="0.6">HALIFAX REGIONAL MUNICIPALITY</text>
                <text x="400" y="480" fontSize="11" fill="#8fa8bc" textAnchor="middle" fontFamily="Barlow, sans-serif">Full service area · Nova Scotia, Canada</text>

                {/* Legend */}
                <rect x="30" y="30" width="12" height="12" rx="2" fill="#0a85c2" opacity="0.6"/>
                <text x="50" y="41" fontSize="11" fill="#d0e4f0" fontFamily="Barlow, sans-serif">Service zones</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
