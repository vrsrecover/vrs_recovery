import { MapPin, Clock, Shield, Zap, Clock3, Navigation } from "lucide-react"

export function ServiceCoverage() {
  const locations = [
    "Birmingham",
    "Wolverhampton",
    "Coventry",
    "Walsall",
    "West Bromwich",
    "Solihull",
    "Dudley",
    "Sutton Coldfield",
    "Cannock",
    "Lichfield",
    "Burton upon Trent",
    "Tamworth",
    "Nuneaton",
    "Rugby",
    "Warwick",
  ]

  return (
    <section className="py-16 bg-white" id="coverage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">West Midlands Coverage</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive vehicle recovery services across the West Midlands and surrounding areas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155654.8068213701!2d-2.0909!3d52.4862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              ></iframe>

              {/* Service coverage overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-48 h-48 border-2 border-orange-400/60 rounded-full bg-orange-100/20 animate-pulse"></div>
                  <div className="absolute top-4 left-4 w-40 h-40 border border-orange-300/40 rounded-full bg-orange-50/10"></div>
                </div>

                {/* Central HQ marker overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto">
                  <div className="relative">
                    <div className="w-8 h-10 bg-orange-500 rounded-t-full rounded-b-none shadow-lg relative">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <MapPin className="w-2 h-2 text-orange-500" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <div className="text-xs font-bold text-gray-700 bg-white px-2 py-1 rounded-md shadow-sm border">
                      VRS Recovery HQ
                    </div>
                  </div>
                </div>
              </div>

              {/* Map legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 text-xs shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-orange-400/60 rounded-full border border-orange-400"></div>
                  <span className="text-gray-700 font-medium">30-Mile Service Radius</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-3 bg-orange-500 rounded-t-full"></div>
                  <span className="text-gray-700 font-medium">Recovery Center</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locations and Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-3">
              {locations.map((location, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm border border-slate-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors text-slate-700 hover:text-orange-600"
                >
                  {location}
                </button>
              ))}
            </div>

            {/* Service Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Service Radius</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 30-mile radius from our base</li>
                  <li>• Extended coverage available</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">Response Time</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Emergency: 15-30 minutes</li>
                  <li>• Standard: Same day service</li>
                </ul>
              </div>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <Shield className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-900">Fully Insured</div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <Zap className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-900">Rapid Response</div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <Clock3 className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-900">24/7 Available</div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <Navigation className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-900">GPS Tracked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
