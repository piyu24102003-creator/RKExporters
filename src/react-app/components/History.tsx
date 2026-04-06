export default function History() {
  return (
    <section id="history" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header 
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Legacy of
            <span className="block bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Trust & Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to becoming a trusted name in international trade
          </p>
        </div>*/}

        {/* Timeline */}
        {/*<div className="relative">
          {/* Center Line 
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary transform -translate-x-1/2" />

          {/* Timeline Items 
          <div className="space-y-12">
            {companyHistory.map((item, index) => (
              <div
                key={item.year}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Content 
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-card border-2 border-border hover:border-primary/50 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot 
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary border-4 border-background shadow-lg z-10">
                  <div className="w-3 h-3 rounded-full bg-primary-foreground animate-pulse" />
                </div>

                {/* Spacer 
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>*/}

        {/* Achievements Banner */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20">
            <div className="text-4xl font-bold text-orange-500 mb-2">ISO 9001:2015</div>
            <div className="text-sm text-muted-foreground">Quality Certified</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
            <div className="text-4xl font-bold text-green-500 mb-2">FSSAI</div>
            <div className="text-sm text-muted-foreground">Food Safety Certified</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
            <div className="text-4xl font-bold text-blue-500 mb-2">Eco-Friendly</div>
            <div className="text-sm text-muted-foreground">Sustainable Practices</div>
          </div>
        </div>
      </div>
    </section>
  );
}
